<template>
  <div ref="parent" :class="computedClasses" class="btn-group">
    <b-button
      :id="computedId"
      :variant="splitVariant || variant"
      :size="size"
      :class="buttonClasses"
      :disabled="disabled"
      :type="splitButtonType"
      v-bind="buttonAttr"
      @click="onSplitClick, emit('update:modelValue', updateBooleanish(modelValueBoolean))"
    >
      <slot name="button-content">
        {{ text }}
      </slot>
    </b-button>
    <b-button
      v-if="splitBoolean"
      :variant="variant"
      :size="size"
      :disabled="disabled"
      :class="toggleClass"
      class="dropdown-toggle-split dropdown-toggle"
      aria-expanded="false"
      @click="emit('toggle')"
    >
      <span class="visually-hidden">
        <slot name="toggle-text">
          {{ toggleText }}
        </slot>
      </span>
    </b-button>
    <ul
      v-if="modelValueBoolean"
      ref="floating"
      :style="{
        position: strategy,
        top: `${y ?? 0}px`,
        left: `${x ?? 0}px`,
        width: 'max-content',
      }"
      class="dropdown-menu dropup show"
      :class="dropdownMenuClasses"
      :aria-labelledby="computedId"
      :role="role"
    >
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
// import type {BDropdownEmits, BDropdownProps} from '../types/components'
import type Popper from '@popperjs/core'
import {Dropdown} from 'bootstrap'
import {type ComponentPublicInstance, computed, onMounted, ref, toRef} from 'vue'
import BButton from '../BButton/BButton.vue'
import type {Booleanish, ButtonType, ButtonVariant, ClassValue, Size} from '../../types'
import {mergeDeep, updateBooleanish} from '../../utils'
import {useBooleanish, useEventListener, useId} from '../../composables'
import {useFloating} from '@floating-ui/vue'

interface BDropdownProps {
  id?: string
  menuClass?: ClassValue
  size?: Size
  splitClass?: ClassValue
  splitVariant?: ButtonVariant
  text?: string
  toggleClass?: ClassValue
  autoClose?: boolean | 'inside' | 'outside'
  block?: Booleanish
  boundary?: Popper.Boundary
  dark?: Booleanish
  disabled?: Booleanish
  isNav?: Booleanish
  dropup?: Booleanish
  dropright?: Booleanish
  dropleft?: Booleanish
  noFlip?: Booleanish
  offset?: number | string
  popperOpts?: Partial<Popper.Options>
  right?: Booleanish
  role?: string
  split?: Booleanish
  splitButtonType?: ButtonType
  splitHref?: string
  noCaret?: Booleanish
  toggleText?: string
  variant?: ButtonVariant
  modelValue?: Booleanish
}

const props = withDefaults(defineProps<BDropdownProps>(), {
  autoClose: true,
  block: false,
  boundary: 'clippingParents',
  // TODO
  /**
   * @deprecated props.dark is deprecated
   * review https://getbootstrap.com/docs/5.3/migration/#color-modes
   */
  dark: false,
  disabled: false,
  dropup: false,
  isNav: false,
  dropright: false,
  dropleft: false,
  noFlip: false,
  splitHref: undefined,
  offset: 0,
  popperOpts: () => ({}),
  right: false,
  role: 'menu',
  split: false,
  splitButtonType: 'button',
  noCaret: false,
  toggleText: 'Toggle dropdown',
  variant: 'secondary',
  modelValue: false,
})

interface BDropdownEmits {
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
  (e: 'click', event: MouseEvent): void
  (e: 'toggle'): void
  (e: 'update:modelValue', value: Booleanish): void
}

const emit = defineEmits<BDropdownEmits>()

const computedId = useId(toRef(props, 'id'), 'dropdown')

const modelValueBoolean = useBooleanish(toRef(props, 'modelValue'))
const blockBoolean = useBooleanish(toRef(props, 'block'))
const darkBoolean = useBooleanish(toRef(props, 'dark'))
const dropupBoolean = useBooleanish(toRef(props, 'dropup'))
const droprightBoolean = useBooleanish(toRef(props, 'dropright'))
const isNavBoolean = useBooleanish(toRef(props, 'isNav'))
const dropleftBoolean = useBooleanish(toRef(props, 'dropleft'))
const rightBoolean = useBooleanish(toRef(props, 'right'))
const splitBoolean = useBooleanish(toRef(props, 'split'))
const noCaretBoolean = useBooleanish(toRef(props, 'noCaret'))

const parent = ref<HTMLElement | null>(null)
const floating = ref<HTMLElement | null>(null)

const {x, y, strategy} = useFloating(parent, floating, {
  placement: 'top-start',
})

const computedClasses = computed(() => ({
  'd-grid': blockBoolean.value,
  'd-flex': blockBoolean.value && splitBoolean.value,
}))

const buttonClasses = computed(() => [
  splitBoolean.value ? props.splitClass : props.toggleClass,
  {
    'nav-link': isNavBoolean.value,
    'dropdown-toggle': !splitBoolean.value,
    'dropdown-toggle-no-caret': noCaretBoolean.value && !splitBoolean.value,
    'w-100': splitBoolean.value && blockBoolean.value,
  },
])

const dropdownMenuClasses = computed(() => [
  props.menuClass,
  {
    'dropdown-menu-dark': darkBoolean.value,
    'dropdown-menu-end': rightBoolean.value,
  },
])

const buttonAttr = computed(() => ({
  'aria-expanded': splitBoolean.value ? undefined : false,
  'href': splitBoolean.value ? props.splitHref : undefined,
}))

const onSplitClick = (event: MouseEvent) => {
  if (splitBoolean.value) {
    emit('click', event)
  }
}
</script>
