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
  responsiveClasses?: Array<string> | Record<string, boolean | undefined | null> | string
}

withDefaults(defineProps<BTableContainerProps>(), {
  responsive: false,
})
</script>
