<template>
  <tfoot :class="computedClasses">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BTfootProps, BTfootSlots} from '../../types'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BTfootProps>(), {
  variant: null,
})
const props = useDefaults(_props, 'BTfoot')
defineSlots<BTfootSlots>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
}))
</script>
