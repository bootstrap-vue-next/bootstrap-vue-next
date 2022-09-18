<template>
  <table v-if="!responsive" :class="tableClass">
    <slot />
  </table>
  <div v-else :class="responsiveClass">
    <table :class="tableClass">
      <slot />
    </table>
  </div>
</template>

<script lang="ts" setup>
import type {ClassValue} from '../../types'

interface BTableContainerProps {
  tableClass?: ClassValue
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  responsiveClass?: ClassValue
}

const props = withDefaults(defineProps<BTableContainerProps>(), {
  responsive: false,
})
</script>
