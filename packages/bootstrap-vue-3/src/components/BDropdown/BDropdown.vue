<template>
  <div ref="parent" :class="classes" class="btn-group">
    <b-button
      :id="computedId"
      :variant="splitVariant || variant"
      :size="size"
      :class="[buttonClasses, split ? splitClass : toggleClass]"
      :disabled="disabled"
      :type="splitButtonType"
      v-bind="buttonAttr"
      @click="onSplitClick"
    >
      {{ text }}
      <slot name="button-content" />
    </b-button>
    <b-button
      v-if="split"
      :variant="variant"
      :size="size"
      :disabled="disabled"
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
import type {ButtonType, ButtonVariant, Size} from '../../types'
import mergeDeep from '../../utils/mergeDeep'
import useId from '../../composables/useId'
import useEventListener from '../../composables/useEventListener'

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
  block?: boolean
  boundary?: Popper.Boundary
  dark?: boolean
  disabled?: boolean
  dropup?: boolean
  dropright?: boolean
  dropleft?: boolean
  noFlip?: boolean
  offset?: number | string
  popperOpts?: Record<string, unknown>
  right?: boolean
  role?: string
  split?: boolean
  splitButtonType?: ButtonType
  splitHref?: string
  noCaret?: boolean
  toggleText?: string
  variant?: ButtonVariant
}

const props = withDefaults(defineProps<BDropdownProps>(), {
  autoClose: true,
  block: false,
  boundary: 'clippingParents',
  dark: false,
  disabled: false,
  dropup: false,
  dropright: false,
  dropleft: false,
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
  if (props.split) {
    emit('click', event)
  }
}

const classes = computed(() => ({
  'd-grid': props.block,
  'd-flex': props.block && props.split,
}))

const buttonClasses = computed(() => ({
  'dropdown-toggle': !props.split,
  'dropdown-toggle-no-caret': props.noCaret && !props.split,
  'w-100': props.split && props.block,
}))

const dropdownMenuClasses = computed(() => ({
  'dropdown-menu-dark': props.dark,
  'dropdown-menu-right': props.right,
}))

const buttonAttr = computed(() => ({
  'data-bs-toggle': props.split ? undefined : 'dropdown',
  'aria-expanded': props.split ? undefined : false,
  'ref': props.split ? undefined : dropdown,
  'href': props.split ? props.splitHref : undefined,
}))

const splitAttr = computed(() => ({
  ref: props.split ? dropdown : undefined,
}))

const hide = (): void => {
  instance.value?.hide()
}

onMounted((): void => {
  instance.value = new Dropdown(dropdown.value?.$el, {
    autoClose: props.autoClose,
    boundary: props.boundary,
    offset: props.offset ? props.offset.toString() : '',
    reference: props.offset || props.split ? 'parent' : 'toggle',
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

      if (props.dropup) {
        dropDownConfig.placement = props.right ? 'top-end' : 'top-start'
      } else if (props.dropright) {
        dropDownConfig.placement = 'right-start'
      } else if (props.dropleft) {
        dropDownConfig.placement = 'left-start'
      } else if (props.right) {
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
