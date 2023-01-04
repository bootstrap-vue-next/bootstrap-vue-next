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
      @click="onSplitClick"
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
      v-bind="splitAttr"
      :class="toggleClass"
      class="dropdown-toggle-split dropdown-toggle"
      data-bs-toggle="dropdown"
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
      class="dropdown-menu"
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
import {mergeDeep} from '../../utils'
import {useBooleanish, useEventListener, useId} from '../../composables'

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
})

interface BDropdownEmits {
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
  (e: 'click', event: MouseEvent): void
  (e: 'toggle'): void
}

const emit = defineEmits<BDropdownEmits>()

const computedId = useId(toRef(props, 'id'), 'dropdown')

const blockBoolean = useBooleanish(toRef(props, 'block'))
const darkBoolean = useBooleanish(toRef(props, 'dark'))
const dropupBoolean = useBooleanish(toRef(props, 'dropup'))
const droprightBoolean = useBooleanish(toRef(props, 'dropright'))
const isNavBoolean = useBooleanish(toRef(props, 'isNav'))
const dropleftBoolean = useBooleanish(toRef(props, 'dropleft'))
const rightBoolean = useBooleanish(toRef(props, 'right'))
const splitBoolean = useBooleanish(toRef(props, 'split'))
const noCaretBoolean = useBooleanish(toRef(props, 'noCaret'))

const parent = ref<HTMLElement>()
const dropdown = ref<ComponentPublicInstance<HTMLElement>>()
const instance = ref<Dropdown>()

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

const onSplitClick = (event: MouseEvent) => {
  if (splitBoolean.value) {
    emit('click', event)
  }
}

useEventListener(parent, 'show.bs.dropdown', () => emit('show'))
useEventListener(parent, 'shown.bs.dropdown', () => emit('shown'))
useEventListener(parent, 'hide.bs.dropdown', () => emit('hide'))
useEventListener(parent, 'hidden.bs.dropdown', () => emit('hidden'))

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

      if (dropupBoolean.value) {
        dropDownConfig.placement = rightBoolean.value ? 'top-end' : 'top-start'
      } else if (droprightBoolean.value) {
        dropDownConfig.placement = 'right-start'
      } else if (dropleftBoolean.value) {
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
