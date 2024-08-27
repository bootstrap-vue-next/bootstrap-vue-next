<template>
  <li role="presentation" :class="wrapperClass" v-bind="props.wrapperAttrs">
    <button
      role="menu"
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
import {useDefaults} from '../../composables'
import type {BDropdownItemButtonProps} from '../../types'
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

const computedClasses = computed(() => [
  props.buttonClass,
  {
    [props.activeClass]: props.active,
    disabled: props.disabled,
    [`text-${props.variant}`]: props.variant !== null,
  },
])

const clicked = (e: Readonly<MouseEvent>) => {
  emit('click', e)
}
</script>
