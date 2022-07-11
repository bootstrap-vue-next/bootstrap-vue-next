<template>
  <slot v-if="loading" name="loading" />
  <slot v-else />
</template>

<script setup lang="ts">
// import type {BSkeletonWrapperProps} from '../../types/components'

interface BSkeletonWrapperProps {
  loading?: boolean
}

withDefaults(defineProps<BSkeletonWrapperProps>(), {
  loading: false,
})
</script>
