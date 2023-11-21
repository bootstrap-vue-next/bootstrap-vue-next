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
        <slot :hide="close" :show="open" />
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
  autoClose: true,
  block: false,
  boundary: 'clippingAncestors',
  boundaryPadding: undefined,
  center: false,
  container: undefined,
  disabled: false,
  dropend: false,
  dropstart: false,
  dropup: false,
  end: false,
  floatingMiddleware: undefined,
  id: undefined,
  isNav: true,
  lazy: false,
  menuClass: undefined,
  modelValue: false,
  noCaret: false,
  noFlip: false,
  noShift: false,
  noSize: false,
  offset: 0,
  role: 'menu',
  size: 'md',
  split: false,
  splitButtonType: 'button',
  splitClass: undefined,
  splitDisabled: undefined,
  splitHref: undefined,
  splitTo: undefined,
  splitVariant: undefined,
  strategy: 'absolute',
  text: undefined,
  toggleClass: undefined,
  toggleText: 'Toggle dropdown',
  variant: 'link',
})

const emit = defineEmits<{
  'click': [event: MouseEvent]
  'hidden': []
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': []
  'toggle': []
  'update:modelValue': [value: boolean]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'button-content'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: {hide: () => void; show: () => void}) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'toggle-text'?: (props: Record<string, never>) => any
}>()
const dropdown = ref<InstanceType<typeof BDropdown> | null>(null)

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
