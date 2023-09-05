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
import type {Boundary, Middleware, RootBoundary, Strategy} from '@floating-ui/vue'
import {ref} from 'vue'
import type {Booleanish, ButtonType, ButtonVariant, ClassValue, Size} from '../../types'
import {BvTriggerableEvent} from '../../utils'
import BDropdown from '../BDropdown/BDropdown.vue'
import type {RouteLocationRaw} from 'vue-router'

// TODO share props with BDropdown
const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    id?: string
    menuClass?: ClassValue
    size?: Size
    splitClass?: ClassValue
    splitVariant?: ButtonVariant | null
    text?: string
    toggleClass?: ClassValue
    autoClose?: boolean | 'inside' | 'outside'
    block?: Booleanish
    disabled?: Booleanish
    isNav?: Booleanish
    dropup?: Booleanish
    dropend?: Booleanish
    dropstart?: Booleanish
    center?: Booleanish
    end?: Booleanish
    noFlip?: Booleanish
    noShift?: Booleanish
    offset?:
      | number
      | string
      | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null}
    role?: string
    split?: Booleanish
    splitButtonType?: ButtonType
    splitHref?: string
    splitDisabled?: Booleanish
    noCaret?: Booleanish
    toggleText?: string
    variant?: ButtonVariant | null
    modelValue?: Booleanish
    lazy?: Booleanish
    strategy?: Strategy
    floatingMiddleware?: Middleware[]
    splitTo?: RouteLocationRaw
    boundary?: Boundary | RootBoundary
  }>(),
  {
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
    isNav: false,
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
  }
)

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
