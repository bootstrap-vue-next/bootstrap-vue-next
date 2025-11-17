<template>
  <button
    class="navbar-toggler"
    type="button"
    :class="computedClasses"
    :disabled="props.disabled"
    :aria-label="props.label"
    @click="onClick"
  >
    <slot :expanded="collapseExpanded">
      <span class="navbar-toggler-icon" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import type {BNavbarToggleProps} from '../../types/ComponentProps'
import {computed, inject, toValue} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {showHideRegistryKey} from '../../utils/keys'
import type {BNavbarToggleEmits, BNavbarToggleSlots} from '../../types'

const _props = withDefaults(defineProps<BNavbarToggleProps>(), {
  label: 'Toggle navigation',
  disabled: false,
  target: undefined,
})
const props = useDefaults(_props, 'BNavbarToggle')
const emit = defineEmits<BNavbarToggleEmits>()
defineSlots<BNavbarToggleSlots>()

const computedClasses = computed(() => ({
  disabled: props.disabled,
}))

const showHideData = inject(showHideRegistryKey, null)

const collapseExpanded = computed(() => {
  if (!props.target || !showHideData) return false
  if (typeof props.target === 'string')
    return toValue(toValue(showHideData.values.value.get(props.target))?.value) || false
  return props.target.some((target) => toValue(showHideData.values.value.get(target)?.value))
})
const toggleExpand = () => {
  if (!props.target || !showHideData) return
  if (typeof props.target === 'string') {
    toValue(showHideData.values.value.get(props.target))?.toggle()
    return
  }
  props.target.forEach((target) => toValue(showHideData.values.value.get(target))?.toggle())
}

const onClick = (e: Readonly<MouseEvent>): void => {
  if (!props.disabled) {
    emit('click', e)
    toggleExpand()
  }
}
</script>
