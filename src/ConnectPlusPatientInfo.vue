<template>
  <div id="connect-plus-patient-info">
    hello world
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import patientService from '@/services/patient-service';

@Component
export default class ConnectPlusPatientInfo extends Vue {
  @Prop() private patientId!: string;
  @Prop() private centerId!: string;

  async mounted() {
    const { data } = await patientService.getPatient(this.centerId, this.patientId);
    console.dir(data);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
