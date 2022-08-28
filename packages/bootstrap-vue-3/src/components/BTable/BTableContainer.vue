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
  responsiveClasses: any
}

const props = withDefaults(defineProps<BTableContainerProps>(), {
  responsive: false,
  responsiveClasses: [],
})
</script>

<style scoped></style>
