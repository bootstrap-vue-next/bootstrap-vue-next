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

<script lang="ts">
import * as Popper from '@popperjs/core'
import {Dropdown} from 'bootstrap'
import {ComponentPublicInstance, computed, defineComponent, onMounted, PropType, ref} from 'vue'
import BButton from '../../components/BButton/BButton.vue'
import {ButtonVariant, Size} from '../../types'
import mergeDeep from '../../utils/mergeDeep'
import useId from '../../composables/useId'
import useEventListener from '../../composables/useEventListener'
import {HTMLElement} from '../../types/safe-types'

export default defineComponent({
  name: 'BDropdown',
  components: {BButton},
  props: {
    autoClose: {type: [Boolean, String], default: true},
    block: {type: Boolean, default: false},
    boundary: {
      type: [HTMLElement, String] as PropType<Popper.Boundary>,
      default: 'clippingParents',
    },
    dark: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    dropup: {type: Boolean, default: false},
    dropright: {type: Boolean, default: false},
    dropleft: {type: Boolean, default: false},
    id: {type: String},
    menuClass: {type: [Array, Object, String]},
    noFlip: {type: Boolean, default: false},
    offset: {type: [Number, String], default: 0},
    popperOpts: {type: Object, default: () => ({})},
    right: {type: Boolean, default: false},
    role: {type: String, default: 'menu'},
    size: {type: String as PropType<Size>},
    split: {type: Boolean, default: false},
    splitButtonType: {type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button'},
    splitClass: {type: [Array, Object, String]},
    splitHref: {type: String, default: null},
    noCaret: {type: Boolean, default: false},
    splitVariant: {type: String as PropType<ButtonVariant>},
    text: {type: String},
    toggleClass: {type: [Array, Object, String]},
    toggleText: {type: String, default: 'Toggle dropdown'},
    variant: {type: String as PropType<ButtonVariant>, default: 'secondary'},
  },
  emits: ['show', 'shown', 'hide', 'hidden'],
  setup(props, {emit}) {
    const parent = ref<HTMLElement>()
    const dropdown = ref<ComponentPublicInstance<HTMLElement>>()
    const instance = ref<Dropdown>()
    const computedId = useId(props.id, 'dropdown')

    useEventListener(parent, 'show.bs.dropdown', () => emit('show'))
    useEventListener(parent, 'shown.bs.dropdown', () => emit('shown'))
    useEventListener(parent, 'hide.bs.dropdown', () => emit('hide'))
    useEventListener(parent, 'hidden.bs.dropdown', () => emit('hidden'))

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
    }))

    const buttonAttr = computed(() => ({
      'data-bs-toggle': props.split ? null : 'dropdown',
      'aria-expanded': props.split ? null : false,
      'ref': props.split ? null : dropdown,
      'href': props.split ? props.splitHref : null,
    }))

    const splitAttr = computed(() => ({
      ref: props.split ? dropdown : null,
    }))

    const hide = () => {
      instance.value?.hide()
    }

    onMounted(() => {
      instance.value = new Dropdown(
        dropdown.value?.$el,
        {
          autoClose: props.autoClose,
          boundary: props.boundary,
          offset: props.offset.toString(),
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
        } as unknown as Dropdown.Options /* TODO: remove when added in Dropdown options by https://www.npmjs.com/package/@types/bootstrap */
      )
    })

    return {
      parent,
      computedId,
      classes,
      buttonClasses,
      buttonAttr,
      splitAttr,
      dropdownMenuClasses,
      dropdown,
      hide,
    }
  },
})
</script>
