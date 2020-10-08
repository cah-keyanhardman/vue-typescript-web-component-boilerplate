<template>
  <div id="my-web-component">
    Hello world
    <Subcomponent/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Subcomponent from '@/components/Subcomponent.vue';

@Component({ components: { Subcomponent } })
export default class ConnectPlusPatientInfo extends Vue {
  @Prop() private exampleProp!: string;

}
</script>

<style lang="scss">
  #my-web-component {

  }
</style>
