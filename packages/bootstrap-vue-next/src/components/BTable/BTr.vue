<template>
  <tr :class="computedClasses">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BTrProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import {BTrSlots} from '../../types/ComponentSlots'

const _props = withDefaults(defineProps<BTrProps>(), {
  variant: null,
})
const props = useDefaults(_props, 'BTr')
defineSlots<BTrSlots>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
}))
</script>
