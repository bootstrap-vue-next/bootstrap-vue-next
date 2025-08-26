<template>
  <component :is="props.tag" :class="computedClasses" role="group" :aria-label="props.ariaLabel">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BButtonGroupProps} from '../../types/ComponentProps'
import {computed, provide} from 'vue'
import {buttonGroupKey} from '../../utils/keys'
import type {BButtonGroupSlots} from '../../types'

provide(buttonGroupKey, true)

const _props = withDefaults(defineProps<BButtonGroupProps>(), {
  ariaLabel: 'Group',
  size: 'md',
  tag: 'div',
  vertical: false,
})
const props = useDefaults(_props, 'BButtonGroup')
defineSlots<BButtonGroupSlots>()

const computedClasses = computed(() => ({
  'btn-group': !props.vertical,
  [`btn-group-${props.size}`]: props.size !== 'md',
  'btn-group-vertical': props.vertical,
}))
</script>
