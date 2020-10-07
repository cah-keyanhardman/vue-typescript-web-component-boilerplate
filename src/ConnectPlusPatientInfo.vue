<template>
  <div id="connect-plus-patient-info">
    <div v-if="loaded" id="connect-plus-patient-info-content" class="weld-element-styles">
      <PatientInfo :patient="patient"/>
      <Conditions :conditions="conditions"/>
    </div>
    <div v-else class="weld-skeleton"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import patientService from '@/services/patient-service';
import PatientInfo from '@/components/PatientInfo.vue';
import { Patient } from '@/types/interfaces/Patient';
import Conditions from '@/components/Conditions.vue';
import { IncludedAttribute, MpiPatient } from '@/types/interfaces/MpiPatient';

@Component({ components: { PatientInfo, Conditions } })
export default class ConnectPlusPatientInfo extends Vue {
  @Prop() private patientId!: string;
  @Prop() private mpi!: string;
  @Prop() private centerId!: string;
  private loaded = false;
  private patient!: Patient;
  private mpiPatient!: MpiPatient;
  private conditions!: IncludedAttribute[];
  private allergies!: IncludedAttribute[];

  mounted() {
    this.fetchData();
  }

  fetchData() {
    patientService.getPatient(this.centerId, this.patientId).then((res) => {
      this.patient = res.data;
      this.loaded = true;
    });
    patientService.getConditionsAndAllergies(this.mpi).then((res) => {
      this.mpiPatient = res.data;
      this.conditions = this.mpiPatient.included.filter(included => included.type === 'condition');
      this.allergies = this.mpiPatient.included.filter(included => included.type === 'allergy-occurrence');
    });
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
