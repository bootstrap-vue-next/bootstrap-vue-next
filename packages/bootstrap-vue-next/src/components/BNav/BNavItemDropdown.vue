<template>
  <li class="nav-item dropdown">
    <BDropdown
      ref="dropdown"
      v-bind="props"
      is-nav
      @show="emit('show', $event)"
      @shown="emit('shown')"
      @hide="emit('hide', $event)"
      @hidden="emit('hidden')"
      @hide-prevented="emit('hide-prevented')"
      @show-prevented="emit('show-prevented')"
      @click="emit('click', $event)"
      @toggle="emit('toggle')"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <template #button-content>
        <slot name="button-content" />
      </template>
      <template #toggle-text>
        <slot name="toggle-text" />
      </template>
      <template #default>
        <slot />
      </template>
    </BDropdown>
  </li>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {BvTriggerableEvent} from '../../utils'
import BDropdown from '../BDropdown/BDropdown.vue'
import type {BDropdownProps} from '../../types'

const props = withDefaults(defineProps<BDropdownProps>(), {
  ariaLabel: undefined,
  id: undefined,
  menuClass: undefined,
  size: 'md',
  splitClass: undefined,
  splitVariant: undefined,
  text: undefined,
  toggleClass: undefined,
  floatingMiddleware: undefined,
  splitDisabled: undefined,
  autoClose: true,
  block: false,
  disabled: false,
  isNav: true,
  dropup: false,
  dropend: false,
  dropstart: false,
  center: false,
  end: false,
  noFlip: false,
  lazy: false,
  noShift: false,
  offset: 0,
  role: 'menu',
  split: false,
  splitButtonType: 'button',
  splitHref: undefined,
  noCaret: false,
  toggleText: 'Toggle dropdown',
  variant: 'link',
  modelValue: false,
  strategy: 'absolute',
  splitTo: undefined,
  boundary: 'clippingAncestors',
})

const emit = defineEmits<{
  'show': [value: BvTriggerableEvent]
  'shown': []
  'hide': [value: BvTriggerableEvent]
  'hidden': []
  'hide-prevented': []
  'show-prevented': []
  'click': [event: MouseEvent]
  'toggle': []
  'update:modelValue': [value: boolean]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'toggle-text'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'button-content'?: (props: Record<string, never>) => any
}>()
const dropdown = ref<InstanceType<typeof BDropdown>>()

const close = () => {
  dropdown.value?.close()
}
const open = () => {
  dropdown.value?.open()
}
const toggle = () => {
  dropdown.value?.toggle()
}

defineExpose({
  close,
  open,
  toggle,
})
</script>
