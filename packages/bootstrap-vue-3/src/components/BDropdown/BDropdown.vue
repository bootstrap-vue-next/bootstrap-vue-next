<template>
  <div ref="parent" :class="classes" class="btn-group">
    <b-button
      :id="computedId"
      :variant="splitVariant || variant"
      :size="size"
      :class="[buttonClasses, splitBoolean ? splitClass : toggleClass]"
      :disabled="disabledBoolean"
      :type="splitButtonType"
      v-bind="buttonAttr"
      @click="onSplitClick"
    >
      {{ text }}
      <slot name="button-content" />
    </b-button>
    <b-button
      v-if="splitBoolean"
      :variant="variant"
      :size="size"
      :disabled="disabledBoolean"
      v-bind="splitAttr"
      :class="toggleClass"
      class="dropdown-toggle-split dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click="emit('toggle')"
    >
      <span class="visually-hidden">
        {{ toggleText }}
      </span>
    </b-button>
    <ul
      class="dropdown-menu"
      :class="[menuClass, dropdownMenuClasses]"
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
import Dropdown from 'bootstrap/js/dist/dropdown'
import {ComponentPublicInstance, computed, onMounted, ref} from 'vue'
import BButton from '../BButton/BButton.vue'
import type {Booleanish, ButtonType, ButtonVariant, Size} from '../../types'
import {mergeDeep, resolveBooleanish} from '../../utils'
import {useEventListener, useId} from '../../composables'

// TODO it seems that some of these props are actually just Popper options
// So some of them could be converted to their pure types similar to Popper.Boundary
interface BDropdownProps {
  id?: string
  menuClass?: Array<unknown> | Record<string, unknown> | string
  size?: Size
  splitClass?: Array<unknown> | Record<string, unknown> | string
  splitVariant?: ButtonVariant
  text?: string
  toggleClass?: Array<unknown> | Record<string, unknown> | string
  autoClose?: boolean | 'inside' | 'outside'
  block?: Booleanish
  boundary?: Popper.Boundary
  dark?: Booleanish
  disabled?: Booleanish
  dropUp?: Booleanish
  dropRight?: Booleanish
  dropLeft?: Booleanish
  noFlip?: Booleanish
  offset?: number | string
  popperOpts?: Record<string, unknown>
  right?: Booleanish
  role?: string
  split?: Booleanish
  splitButtonType?: ButtonType
  splitHref?: string
  noCaret?: Booleanish
  toggleText?: string
  variant?: ButtonVariant
}

const props = withDefaults(defineProps<BDropdownProps>(), {
  autoClose: true,
  block: false,
  boundary: 'clippingParents',
  dark: false,
  disabled: false,
  dropUp: false,
  dropRight: false,
  dropLeft: false,
  noFlip: false,
  offset: 0,
  popperOpts: () => ({}),
  right: false,
  role: 'menu',
  split: false,
  splitButtonType: 'button',
  splitHref: undefined,
  noCaret: false,
  toggleText: 'Toggle dropdown',
  variant: 'secondary',
})

const blockBoolean = computed(() => resolveBooleanish(props.block))
const darkBoolean = computed(() => resolveBooleanish(props.dark))
const disabledBoolean = computed(() => resolveBooleanish(props.disabled))
const dropUpBoolean = computed(() => resolveBooleanish(props.dropUp))
const dropRightBoolean = computed(() => resolveBooleanish(props.dropRight))
const dropLeftBoolean = computed(() => resolveBooleanish(props.dropLeft))
const rightBoolean = computed(() => resolveBooleanish(props.right))
const splitBoolean = computed(() => resolveBooleanish(props.split))
const noCaretBoolean = computed(() => resolveBooleanish(props.noCaret))

interface BDropdownEmits {
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
  (e: 'click', event: Event): void
  (e: 'toggle'): void
}

const emit = defineEmits<BDropdownEmits>()

const parent = ref<HTMLElement>()
const dropdown = ref<ComponentPublicInstance<HTMLElement>>()
const instance = ref<Dropdown>()
const computedId = useId(props.id, 'dropdown')

useEventListener(parent, 'show.bs.dropdown', () => emit('show'))
useEventListener(parent, 'shown.bs.dropdown', () => emit('shown'))
useEventListener(parent, 'hide.bs.dropdown', () => emit('hide'))
useEventListener(parent, 'hidden.bs.dropdown', () => emit('hidden'))

const onSplitClick = (event: Event) => {
  if (splitBoolean.value) {
    emit('click', event)
  }
}

const classes = computed(() => ({
  'd-grid': blockBoolean.value,
  'd-flex': blockBoolean.value && splitBoolean.value,
}))

const buttonClasses = computed(() => ({
  'dropdown-toggle': !splitBoolean.value,
  'dropdown-toggle-no-caret': noCaretBoolean.value && !splitBoolean.value,
  'w-100': splitBoolean.value && blockBoolean.value,
}))

const dropdownMenuClasses = computed(() => ({
  'dropdown-menu-dark': darkBoolean.value,
  'dropdown-menu-right': rightBoolean.value,
}))

const buttonAttr = computed(() => ({
  'data-bs-toggle': splitBoolean.value ? undefined : 'dropdown',
  'aria-expanded': splitBoolean.value ? undefined : false,
  'ref': splitBoolean.value ? undefined : dropdown,
  'href': splitBoolean.value ? props.splitHref : undefined,
}))

const splitAttr = computed(() => ({
  ref: splitBoolean.value ? dropdown : undefined,
}))

const hide = (): void => {
  instance.value?.hide()
}

onMounted((): void => {
  instance.value = new Dropdown(dropdown.value?.$el, {
    autoClose: props.autoClose,
    boundary: props.boundary,
    offset: props.offset ? props.offset.toString() : '',
    reference: props.offset || splitBoolean.value ? 'parent' : 'toggle',
    popperConfig: (defaultConfig?: Partial<Popper.Options>) => {
      const dropDownConfig = {
        placement: 'bottom-start',
        modifiers: !props.noFlip
          ? []
          : [
              {
                name: 'flip',
                options: {
                  fallbackPlacements: [],
                },
              },
            ],
      }

      if (dropUpBoolean.value) {
        dropDownConfig.placement = rightBoolean.value ? 'top-end' : 'top-start'
      } else if (dropRightBoolean.value) {
        dropDownConfig.placement = 'right-start'
      } else if (dropLeftBoolean.value) {
        dropDownConfig.placement = 'left-start'
      } else if (rightBoolean.value) {
        dropDownConfig.placement = 'bottom-end'
      }
      return mergeDeep(defaultConfig, mergeDeep(dropDownConfig, props.popperOpts))
    },
  })
})

defineExpose({
  hide,
})
</script>
