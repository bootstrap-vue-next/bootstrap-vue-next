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
import {computed, inject} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {showHideRegistryKey} from '../../utils/keys'
import {getActiveShowHide, getShowHideValue} from '../../utils/registryAccess'
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
  if (typeof props.target === 'string') {
    return getShowHideValue(showHideData.values, props.target)
  }
  return props.target.some((target) => getShowHideValue(showHideData.values, target))
})
const toggleExpand = () => {
  if (!props.target || !showHideData) return
  if (typeof props.target === 'string') {
    getActiveShowHide(showHideData.values, props.target)?.toggle()
    return
  }
  props.target.forEach((target) => {
    getActiveShowHide(showHideData.values, target)?.toggle()
  })
}

const onClick = (e: Readonly<MouseEvent>): void => {
  if (!props.disabled) {
    emit('click', e)
    toggleExpand()
  }
}
</script>
