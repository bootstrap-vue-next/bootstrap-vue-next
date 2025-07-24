<template>
  <tfoot :class="computedClasses">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BTfootProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import type {BTfootSlots} from '../../types/ComponentSlots'

const _props = withDefaults(defineProps<BTfootProps>(), {
  variant: null,
})
const props = useDefaults(_props, 'BTfoot')
defineSlots<BTfootSlots>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
}))
</script>
