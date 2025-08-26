<template>
  <thead :class="computedClasses">
    <slot />
  </thead>
</template>

<script setup lang="ts">
import type {BTheadSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BTheadProps} from '../../types/ComponentProps'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BTheadProps>(), {
  variant: null,
})
const props = useDefaults(_props, 'BThead')
defineSlots<BTheadSlots>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
}))
</script>
