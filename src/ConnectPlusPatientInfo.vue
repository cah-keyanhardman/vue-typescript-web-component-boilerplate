<template>
  <div id="connect-plus-patient-info">
    <div v-if="loaded" id="connect-plus-patient-info-content" class="weld-element-styles">
      <PatientInfo :patient="patient"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import patientService from '@/services/patient-service';
import PatientInfo from '@/components/PatientInfo.vue';
import { Patient } from '@/types/interfaces/Patient';

@Component({ components: { PatientInfo } })
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

    .weld-typeset {
      h6 {
        text-transform: none;
        font-weight: var(--weld-font-weight-default);
        font-size: 14px;
        margin-bottom: -5px;
      }

      h5 {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
      }
    }

    .header {
      h4 {
        color: var(--weld-color-brand-accessible);
        margin-bottom: -5px;
      }

      h5 {
        color: var(--weld-color-text-heading);
        font-weight: var(--weld-font-weight-default);
      }
    }

    .patient-info, .mtm {
      div {
        margin-bottom: var(--weld-spacing-sm);
      }
    }
  }
</style>
