<template>
  <li class="nav-item dropdown">
    <BDropdown v-model="dropdownValue" v-bind="computedDropdownProps" is-nav>
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
import type {Middleware, Strategy} from '@floating-ui/vue'
import {useVModel} from '@vueuse/core'
import {computed} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, ButtonVariant, ClassValue, Size} from '../../types'
import {omit} from '../../utils'
import BDropdown from '../BDropdown/BDropdown.vue'

// TODO share props with BDropdown
const props = withDefaults(
  defineProps<{
    id?: string
    text?: string
    toggleClass?: ClassValue
    size?: Size
    offset?: string
    autoClose?: boolean | 'inside' | 'outside'
    splitVariant?: ButtonVariant | null
    noCaret?: Booleanish
    variant?: ButtonVariant | null
    modelValue?: Booleanish
    lazy?: Booleanish
    strategy?: Strategy
    floatingMiddleware?: Middleware[]
    noFlip?: Booleanish
    noShift?: Booleanish
    dropup?: Booleanish
    dropend?: Booleanish
    dropstart?: Booleanish
    center?: Booleanish
    end?: Booleanish
    menuClass?: ClassValue
  }>(),
  {
    lazy: undefined,
    strategy: undefined,
    floatingMiddleware: undefined,
    noFlip: undefined,
    noShift: undefined,
    dropup: undefined,
    dropend: undefined,
    dropstart: undefined,
    center: undefined,
    end: undefined,
    menuClass: undefined,
    id: undefined,
    text: undefined,
    toggleClass: undefined,
    size: 'md',
    offset: undefined,
    autoClose: undefined,
    splitVariant: undefined,
    noCaret: undefined,
    variant: 'link',
    modelValue: false,
  }
)

const emit = defineEmits<{
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

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const modelValueBoolean = useBooleanish(modelValue)

const dropdownValue = computed({
  get: () => modelValueBoolean.value,
  set: (value: boolean) => {
    modelValue.value = value
  },
})
const computedDropdownProps = computed(() => omit(props, ['modelValue']))

const close = () => {
  modelValue.value = false
}
const open = () => {
  modelValue.value = true
}
const toggle = () => {
  modelValue.value = !modelValueBoolean.value
}

defineExpose({
  close,
  open,
  toggle,
})
</script>
