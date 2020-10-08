<template>
  <div>
    Hello from my subcomponent
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Subcomponent extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
