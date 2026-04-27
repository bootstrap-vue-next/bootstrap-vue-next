<template>
  <tr :class="computedClasses">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BTrProps, BTrSlots} from '../../types'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BTrProps>(), {
  variant: null,
})
const props = useDefaults(_props, 'BTr')
defineSlots<BTrSlots>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
}))
</script>
