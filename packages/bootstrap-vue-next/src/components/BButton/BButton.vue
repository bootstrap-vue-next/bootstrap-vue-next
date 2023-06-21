<template>
  <component
    :is="computedTag"
    class="btn"
    :class="computedClasses"
    v-bind="computedAttrs"
    @click="clicked"
  >
    <div
      v-if="loadingBoolean"
      class="btn-loading"
      :class="{'mode-fill': loadingMode === 'fill', 'mode-inline': loadingMode === 'inline'}"
    >
      <slot name="loading">
        <b-spinner class="btn-spinner" :small="size !== 'lg'" />
      </slot>
    </div>
    <div
      class="btn-content"
      :class="{'btn-loading-fill': loadingBoolean && loadingMode === 'fill'}"
    >
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import BSpinner from '../BSpinner.vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, ButtonType, ButtonVariant, LinkTarget, Size} from '../../types'
import {isLink} from '../../utils'
import BLink, {type BLinkProps} from '../BLink/BLink.vue'
import {useVModel} from '@vueuse/core'

defineSlots<{
  default?: Record<string, never>
  loading?: Record<string, never>
}>()

const props = withDefaults(
  defineProps<
    {
      active?: Booleanish
      disabled?: Booleanish
      href?: string
      pill?: Booleanish
      pressed?: Booleanish
      rel?: string
      size?: Size
      squared?: Booleanish
      tag?: string
      target?: LinkTarget
      type?: ButtonType
      variant?: ButtonVariant | null
      loading?: Booleanish
      loadingMode?: 'fill' | 'inline'
      block?: Booleanish
    } & BLinkProps
  >(),
  {
    active: false,
    pill: false,
    pressed: undefined,
    size: 'md',
    squared: false,
    tag: 'button',
    type: 'button',
    variant: 'secondary',
    loading: false,
    loadingMode: 'inline',
    block: false,
    // Link props
    activeClass: 'router-link-active',
    append: false,
    disabled: false,
    event: 'click',
    href: undefined,
    // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
    rel: undefined,
    replace: false,
    routerComponentName: 'router-link',
    routerTag: 'a',
    target: '_self',
    to: undefined,
    opacity: undefined,
    opacityHover: undefined,
    underlineVariant: null,
    underlineOffset: undefined,
    underlineOffsetHover: undefined,
    underlineOpacity: undefined,
    underlineOpacityHover: undefined,
    icon: false,
    // End link props
  }
)

const emit = defineEmits<{
  'click': [value: MouseEvent]
  'update:pressed': [value: boolean]
}>()

const pressedValue = useVModel(props, 'pressed', emit)

const activeBoolean = useBooleanish(() => props.active)
const blockBoolean = useBooleanish(() => props.block)
const disabledBoolean = useBooleanish(() => props.disabled)
const pillBoolean = useBooleanish(() => props.pill)
const pressedBoolean = useBooleanish(() => props.pressed)
const squaredBoolean = useBooleanish(() => props.squared)
const loadingBoolean = useBooleanish(() => props.loading)

const isToggle = computed<boolean>(() => typeof pressedBoolean.value === 'boolean')
const isButton = computed<boolean>(
  () => props.tag === 'button' && props.href === undefined && props.to === null
)
const computedLink = computed<boolean>(() => isLink(props))
const isBLink = computed<boolean>(() => props.to !== null)
const nonStandardTag = computed<boolean>(() => (props.href !== undefined ? false : !isButton.value))

const computedClasses = computed(() => [
  [`btn-${props.size}`],
  {
    [`btn-${props.variant}`]: props.variant !== null,
    'btn-block': blockBoolean.value,
    'active': activeBoolean.value || pressedBoolean.value,
    'rounded-pill': pillBoolean.value,
    'rounded-0': squaredBoolean.value,
    'disabled': disabledBoolean.value,
  },
])

const computedAttrs = computed(() => ({
  'aria-disabled': nonStandardTag.value ? disabledBoolean.value : null,
  'aria-pressed': isToggle.value ? pressedBoolean.value : null,
  'autocomplete': isToggle.value ? 'off' : null,
  'disabled': isButton.value ? disabledBoolean.value : null,
  'href': props.href,
  'rel': computedLink.value ? props.rel : null,
  'role': nonStandardTag.value || computedLink.value ? 'button' : null,
  'target': computedLink.value ? props.target : null,
  'type': isButton.value ? props.type : null,
  'to': !isButton.value ? props.to : null,
  'append': computedLink.value ? props.append : null,
  'activeClass': isBLink.value ? props.activeClass : null,
  'event': isBLink.value ? props.event : null,
  'replace': isBLink.value ? props.replace : null,
  'routerComponentName': isBLink.value ? props.routerComponentName : null,
  'routerTag': isBLink.value ? props.routerTag : null,
}))

const computedTag = computed<string | typeof BLink>(() =>
  isBLink.value ? BLink : props.href ? 'a' : props.tag
)

const clicked = (e: MouseEvent): void => {
  if (disabledBoolean.value) {
    e.preventDefault()
    e.stopPropagation()
    return
  }
  emit('click', e)
  if (isToggle.value) {
    pressedValue.value = !pressedBoolean.value
  }
}
</script>
