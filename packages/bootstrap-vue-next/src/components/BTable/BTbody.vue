<template>
  <tbody :class="computedClasses">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
import type {BTbodySlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BTbodyProps} from '../../types/ComponentProps'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BTbodyProps>(), {
  variant: null,
})
const props = useDefaults(_props, 'BTbody')
defineSlots<BTbodySlots>()

const computedClasses = computed(() => ({
  [`thead-${props.variant}`]: props.variant !== null,
}))
</script>
