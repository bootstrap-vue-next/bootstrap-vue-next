<template>
  <component
    :is="computedTag"
    class="btn"
    :class="computedClasses"
    :aria-disabled="nonStandardTag ? disabledBoolean : null"
    :aria-pressed="isToggle ? pressedBoolean : null"
    :autocomplete="isToggle ? 'off' : null"
    :disabled="isButton ? disabledBoolean : null"
    :href="props.href"
    :rel="computedLink ? props.rel : null"
    :role="nonStandardTag || computedLink ? 'button' : null"
    :target="computedLink ? props.target : null"
    :type="isButton ? props.type : null"
    :to="!isButton ? props.to : null"
    :append="computedLink ? props.append : null"
    :active-class="isBLink ? activeClass : null"
    :event="isBLink ? event : null"
    :replace="isBLink ? replace : null"
    :router-component-name="isBLink ? routerComponentName : null"
    :router-tag="isBLink ? routerTag : null"
    @click="clicked"
  >
    <div
      v-if="loadingBoolean"
      class="btn-loading"
      :class="{'mode-fill': loadingMode === 'fill', 'mode-inline': loadingMode === 'inline'}"
    >
      <slot name="loading">
        <BSpinner class="btn-spinner" :small="size !== 'lg'" />
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
import type {BLinkProps, Booleanish, ButtonType, ButtonVariant, Size} from '../../types'
import {isLink} from '../../utils'
import BLink from '../BLink/BLink.vue'
import {useVModel} from '@vueuse/core'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loading?: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<
    {
      pill?: Booleanish
      pressed?: Booleanish
      size?: Size
      squared?: Booleanish
      tag?: string
      type?: ButtonType
      variant?: ButtonVariant | null
      loading?: Booleanish
      loadingMode?: 'fill' | 'inline'
      block?: Booleanish
    } & Omit<BLinkProps, 'variant'>
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
  () => props.tag === 'button' && props.href === undefined && props.to === undefined
)
const computedLink = computed<boolean>(() => isLink(props))
const isBLink = computed<boolean>(() => props.to !== undefined)
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
