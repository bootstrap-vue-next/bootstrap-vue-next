<template>
  <li role="presentation" :class="wrapperClass" v-bind="props.wrapperAttrs">
    <button
      role="menuitem"
      type="button"
      class="dropdown-item"
      :class="computedClasses"
      :disabled="props.disabled"
      v-bind="attrs"
      @click="clicked"
    >
      <slot />
    </button>
  </li>
</template>

<script setup lang="ts">
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

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const {class: wrapperClass, ...attrs} = useAttrs()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

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
