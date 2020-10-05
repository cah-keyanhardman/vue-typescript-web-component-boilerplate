<template>
  <div id="connect-plus-patient-info">
    <div v-if="loaded" id="connect-plus-patient-info-content" class="weld-element-styles">
      <div class="header weld-typeset weld-border-b weld-marg-b-md">
        <h4 class="">{{patient.firstName}} {{patient.lastName}}</h4>
        <h5>ID #{{patient.displayId}}</h5>
      </div>
      <div class="patient-info weld-typeset">
        <h6>Primary Phone</h6>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import patientService from '@/services/patient-service';
import { Patient } from '@/types/interfaces/Patient';

@Component
export default class ConnectPlusPatientInfo extends Vue {
  @Prop() private patientId!: string;
  @Prop() private centerId!: string;
  private loaded = false;
  private patient!: Patient;

  async mounted() {
    const { data } = await patientService.getPatient(this.centerId, this.patientId);
    this.patient = data;
    this.loaded = true;
  }
}
</script>

<style lang="scss">
  #connect-plus-patient-info {
    width: 305px;

    .weld-typeset h6 {
      text-transform: none;
    }

    .header {
      h4 {
        color: var(--weld-color-brand-accessible);
      }

      h5 {
        color: var(--weld-color-text-heading);
        font-weight: var(--weld-font-weight-default);
      }
    }
  }
</style>
