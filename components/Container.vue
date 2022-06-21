<template>
  <div :class="getContainerClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { BREAK_POINT } from '~~/constants/breakpoint'

const { width } = useWindowSize()
const getContainerClass = computed<string>(() => {
  if (width.value >= BREAK_POINT.xl) {
    return 'container-xl'
  } else if (width.value >= BREAK_POINT.lg) {
    return 'container-lg'
  } else if (width.value >= BREAK_POINT.md) {
    return 'container-md'
  } else if (width.value >= BREAK_POINT.sm) {
    return 'container-sm'
  } else {
    return 'container-xs'
  }
})
</script>

<style scoped>
.container-xs {
  max-width: 96%;
  margin-left: auto;
  margin-right: auto;
}
</style>
