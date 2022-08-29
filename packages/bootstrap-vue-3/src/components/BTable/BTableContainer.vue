<template>
  <div v-if="responsive" :class="responsiveClasses">
    <slot />
  </div>
  <template v-else>
    <slot />
  </template>
</template>

<script lang="ts" setup>
interface BTableContainerProps {
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  responsiveClasses?: string[] | Record<string, unknown>
}

withDefaults(defineProps<BTableContainerProps>(), {
  responsive: false,
})
</script>
