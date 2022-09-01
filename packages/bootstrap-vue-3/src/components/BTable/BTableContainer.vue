<template>
  <div v-if="responsive" :class="responsiveClasses">
    <slot />
  </div>
  <template v-else>
    <slot />
  </template>
</template>

<script lang="ts" setup>
import type {ClassAttr} from '../../types'

interface BTableContainerProps {
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  responsiveClasses?: ClassAttr
}

withDefaults(defineProps<BTableContainerProps>(), {
  responsive: false,
})
</script>
