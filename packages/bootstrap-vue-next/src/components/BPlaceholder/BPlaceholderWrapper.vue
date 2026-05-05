<template>
  <slot v-if="props.loading" name="loading" />
  <slot v-else />
</template>

<script setup lang="ts">
import type {BPlaceholderWrapperProps, BPlaceholderWrapperSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'

const _props = withDefaults(defineProps<BPlaceholderWrapperProps>(), {
  loading: false,
})
const props = useDefaults(_props, 'BPlaceholderWrapper')
defineSlots<BPlaceholderWrapperSlots>()
</script>
