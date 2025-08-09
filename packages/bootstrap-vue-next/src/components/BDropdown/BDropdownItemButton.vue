<template>
  <li role="presentation" :class="processedAttrs.wrapperClass" v-bind="props.wrapperAttrs">
    <button
      role="menu"
      type="button"
      class="dropdown-item"
      :class="computedClasses"
      :disabled="props.disabled"
      v-bind="processedAttrs.buttonAttrs"
      @click="clicked"
    >
      <slot />
    </button>
  </li>
</template>

<script setup lang="ts">
import type {BDropdownItemButtonEmits, BDropdownItemButtonSlots} from '../../types'
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'
import {useDefaults} from '../../composables/useDefaults'
import type {BDropdownItemButtonProps} from '../../types/ComponentProps'
import {computed, useAttrs} from 'vue'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BDropdownItemButtonProps>(), {
  active: false,
  activeClass: 'active',
  buttonClass: undefined,
  disabled: false,
  variant: null,
  wrapperAttrs: undefined,
})
const props = useDefaults(_props, 'BDropdownItemButton')
const emit = defineEmits<BDropdownItemButtonEmits>()
defineSlots<BDropdownItemButtonSlots>()
const attrs = useAttrs()

const processedAttrs = computed(() => {
  const {class: wrapperClass, ...buttonAttrs} = attrs
  return {wrapperClass, buttonAttrs}
})

const colorClasses = useColorVariantClasses(
  computed(() => ({
    textVariant: props.variant,
  }))
)
const computedClasses = computed(() => [
  props.buttonClass,
  colorClasses.value,
  {
    [props.activeClass]: props.active,
    disabled: props.disabled,
  },
])

const clicked = (e: Readonly<MouseEvent>) => {
  if (props.disabled) {
    e.preventDefault()
    e.stopPropagation()
    return
  }
  emit('click', e)
}
</script>
