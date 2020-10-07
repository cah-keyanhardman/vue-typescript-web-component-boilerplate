<template>
  <div>
    <div class="weld-typeset weld-border-b weld-marg-b-md">
      <h4>Allergies</h4>
    </div>
    <div v-if="loaded" class="allergies weld-typeset modifiable-list">
      <h6>Updated: {{utils.formatDate(lastModified)}}</h6>
      <div v-for="allergy in allergies" :key="allergy.id" class="weld-marg-b-sm">
        <div class="title">{{allergy.attributes.allergen}}</div>
        <div v-for="(reaction, i) in allergy.attributes.reactions" :key="i" class="reaction">
          {{reaction}}
        </div>
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
export default class Allergies extends Vue {
  @Prop() private allergies!: IncludedAttribute;
  @Prop() private loaded!: boolean;
  @Prop() private lastModified!: string;
  private utils = utils;
}
</script>

<style lang="scss" scoped>
  .allergies {
    .title {
      font-weight: var(--weld-font-weight-semibold);
    }

    .title, .reaction {
      margin-bottom: -8px;
    }
  }
</style>
