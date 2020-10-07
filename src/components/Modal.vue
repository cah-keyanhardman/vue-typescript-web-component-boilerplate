<template>
  <div class="overlay" v-if="show">
    <div class="dialog">
      <div class="header">
        {{ title }}
        <weld-icon @click="close" icon="close"></weld-icon>
        <div class="spinner" :class="{spinning: loading}"></div>
      </div>

      <div class="content">
        <slot></slot>
      </div>

      <div class="footer">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
  @Prop() private title!: string;
  @Prop({ default: false }) private show!: boolean;
  private loading = false;

  @Emit('update:show')
  close() {
    return false;
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--weld-color-background-overlay);
  z-index: 999;
}

.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  width: 600px;
  color: var(--weld-color-text-body);
  -webkit-box-shadow: 0px 3px 6px #00000029;
  -moz-box-shadow: 0px 3px 6px #00000029;
  box-shadow: 0px 3px 6px #00000029;
  border-color: var(--weld-color-border-button);
  background-color: white;
  text-align: left;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;

  .header {
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid var(--weld-color-border-button);

    weld-icon {
      color: black;
      float: right;
      margin-right: 5px;
      cursor: pointer;

      &:hover {
        color: var(--weld-color-background-dark)
      }
    }
  }

  .content {
    padding: 20px 20px;
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }

  .footer {
    border-top: 1px solid var(--weld-color-border-button);
    padding: 15px 10px;
  }

  /*Spinner*/
  .spinner {
    position: relative;
    float: right;
    top: 2px;
    right: 5px;
    width: 16px;
    height: 16px;
    display: inline-block;
    border: 4px solid var(--weld-color-button-primary);
    border-left-color: transparent !important;
    border-radius: 50%;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    -moz-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    -moz-transition-property: opacity;
    -o-transition-property: opacity;
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -moz-animation-duration: .8s;
    -webkit-animation-duration: .8s;
    animation-duration: .8s;
    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -moz-animation-name: rotate;
    -webkit-animation-name: rotate;
    animation-name: rotate;
    -moz-animation-timing-function: linear;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }

  .spinner.spinning {
    -moz-transition-duration: .4s;
    -o-transition-duration: .4s;
    -webkit-transition-duration: .4s;
    transition-duration: .4s;
    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
    opacity: 1;
  }

  @keyframes rotate {
    0% {
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
