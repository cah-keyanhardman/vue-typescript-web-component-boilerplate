<template>
  <div class="weld-marg-b-md">
    <div class="weld-typeset weld-border-b weld-marg-b-md">
      <h4>Conditions</h4>
    </div>
    <div v-if="loaded" class="conditions weld-typeset modifiable-list">
      <h6>Updated: {{utils.formatDate(lastModified)}}</h6>
      <div v-for="condition in conditions" :key="condition.id">
        {{condition.attributes.name}}
      </div>
    </div>
    <div v-else class="weld-skeleton"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IncludedAttribute } from '@/types/interfaces/MpiPatient';
import utils from '@/utils';

@Component
export default class Conditions extends Vue {
  @Prop() private conditions!: IncludedAttribute;
  @Prop() private loaded!: boolean;
  @Prop() private lastModified!: string;
  private utils = utils;
}
</script>

<style lang="scss">
</style>
