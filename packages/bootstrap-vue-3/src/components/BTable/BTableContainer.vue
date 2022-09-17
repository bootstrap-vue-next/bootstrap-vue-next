<template>
  <table v-if="!responsive" :class="classes">
    <slot />
  </table>
  <div v-else :class="responsiveClass">
    <table :class="classes">
      <slot />
    </table>
  </div>
</template>

<script lang="ts" setup>
import type {ClassValue} from '../../types'

interface BTableContainerProps {
  classes?: any
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  responsiveClass?: ClassValue
}

const props = withDefaults(defineProps<BTableContainerProps>(), {
  responsive: false,
})
</script>
