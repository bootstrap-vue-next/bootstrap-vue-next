<template>
  <div v-if="responsive" :class="responsiveClasses">
    <slot></slot>
  </div>
  <template v-else>
    <slot></slot>
  </template>
</template>

<script lang="ts" setup>
interface BTableContainerProps {
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  responsiveClasses?: string[] | Record<string, any>
}

const props = withDefaults(defineProps<BTableContainerProps>(), {
  responsive: false,
})
</script>
