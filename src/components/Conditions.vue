<template>
  <div>
    <div class="weld-typeset weld-border-b weld-marg-b-md">
      <h4>Conditions</h4>
    </div>
    <div class="conditions weld-typeset">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IncludedAttribute } from '@/types/interfaces/MpiPatient';

@Component
export default class Conditions extends Vue {
  @Prop() private conditions!: IncludedAttribute;
}
</script>

<style lang="scss">
</style>
