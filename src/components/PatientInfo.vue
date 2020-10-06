<template>
  <div>
    <div class="header weld-typeset weld-border-b weld-marg-b-md">
      <h4 class="">{{ patient.firstName }} {{ patient.lastName }}</h4>
      <h5>ID #{{ patient.displayId }}</h5>
    </div>
    <div class="patient-info weld-typeset weld-marg-b-md">
      <div>
        <h6>Primary Phone</h6>
        <h5>{{ patient.phone }}</h5>
      </div>
      <div>
        <h6>Date of Birth</h6>
        <h5>{{ dateOfBirth }}</h5>
      </div>
      <div>
        <h6>Address</h6>
        <h5>
          {{ patient.address1 }} <br>
          {{ patient.city }}, {{ patient.state }}, {{ patient.postalCode }} <span
            v-if="patient.timezoneAbbreviation">({{ patient.timezoneAbbreviation }})</span>
        </h5>
      </div>
      <div>
        <h6>Language</h6>
        <h5>{{ language }}</h5>
      </div>
      <div>
        <h6>Patient ID</h6>
        <h5>{{ patient.id }}</h5>
      </div>
    </div>
    <div>
      <div class="weld-typeset weld-border-b weld-marg-b-md">
        <h4>MTM Programs</h4>
      </div>
      <div class="mtm weld-typeset">
        <div>
          <h6>Plan</h6>
          <h5>{{ patient.policyName }}</h5>
        </div>
        <div>
          <h6>Member ID</h6>
          <h5>{{ patient.displayId }}</h5>
        </div>
        <div>
          <h6>MTM Effective Date</h6>
          <h5>{{ effectiveDate }}</h5>
        </div>
        <div>
          <h6>% Rx Filled at Your Pharmacy</h6>
          <h5>{{ patient.percentFillAtPharmacy }}%</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Patient } from '@/types/interfaces/Patient';

@Component
export default class ConnectPlusPatientInfo extends Vue {
  @Prop() private patient!: Patient;

  get dateOfBirth() {
    const sections = this.patient.dateOfBirth.split('-');
    const formattedDob = `${sections[1]}/${sections[2]}/${sections[0]}`;
    const dob = new Date(parseInt(sections[0]), parseInt(sections[1]), parseInt(sections[2]));
    const ageTime = new Date(Date.now() - dob.getTime());
    const age = Math.abs(ageTime.getUTCFullYear() - 1970);

    return `${formattedDob} (age ${age})`;
  }

  get language() {
    return this.patient.primaryLanguage ? this.patient.primaryLanguage : 'Unknown';
  }

  get effectiveDate() {
    const date = this.patient.outcomesEligibilityDate.substr(0, 10);
    const sections = date.split('-');

    return `${sections[1]}/${sections[2]}/${sections[0]}`;
  }
}
</script>

<style lang="scss">
</style>
