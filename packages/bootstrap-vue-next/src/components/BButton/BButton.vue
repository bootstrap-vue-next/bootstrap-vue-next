<template>
  <component
    :is="computedTag"
    class="btn"
    v-bind="linkProps"
    :class="computedClasses"
    :aria-disabled="nonStandardTag ? disabledBoolean : null"
    :aria-pressed="isToggle ? pressedBoolean : null"
    :autocomplete="isToggle ? 'off' : null"
    :disabled="isButton ? disabledBoolean : null"
    :href="href"
    :rel="computedLink ? rel : null"
    :role="nonStandardTag || computedLink ? 'button' : null"
    :target="computedLink ? target : null"
    :type="isButton ? type : null"
    :to="!isButton ? to : null"
    :append="computedLink ? append : null"
    @click="clicked"
  >
    <template v-if="loadingBoolean">
      <slot name="loading">
        <template v-if="!loadingFillBoolean">
          {{ loadingText }}
        </template>
        <slot name="loading-spinner">
          <BSpinner :small="size !== 'lg'" :label="loadingFillBoolean ? loadingText : undefined" />
        </slot>
      </slot>
    </template>
    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script setup lang="ts">
import {computed, toRef} from 'vue'
import BSpinner from '../BSpinner.vue'
import {useBLinkHelper, useBooleanish} from '../../composables'
import type {BLinkProps, Booleanish, ButtonType, ButtonVariant, Size} from '../../types'
import BLink from '../BLink/BLink.vue'
import {useVModel} from '@vueuse/core'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'loading'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'loading-spinner'?: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<
    {
      loading?: Booleanish
      loadingFill?: Booleanish
      loadingText?: string
      pill?: Booleanish
      pressed?: Booleanish
      size?: Size
      squared?: Booleanish
      tag?: string
      type?: ButtonType
      variant?: ButtonVariant | null
    } & Omit<BLinkProps, 'variant'>
  >(),
  {
    loading: false,
    loadingFill: false,
    loadingText: 'Loading...',
    pill: false,
    pressed: undefined,
    size: 'md',
    squared: false,
    tag: 'button',
    type: 'button',
    // Link props
    active: false, // Why is this active: false?
    variant: 'secondary',
    // All others use defaults
    activeClass: undefined,
    append: undefined,
    disabled: undefined,
    event: undefined,
    exactActiveClass: undefined,
    href: undefined,
    icon: undefined,
    opacity: undefined,
    opacityHover: undefined,
    rel: undefined,
    replace: undefined,
    routerComponentName: undefined,
    routerTag: undefined,
    target: undefined,
    to: undefined,
    underlineOffset: undefined,
    underlineOffsetHover: undefined,
    underlineOpacity: undefined,
    underlineOpacityHover: undefined,
    underlineVariant: undefined,
    // End link props
  }
)

const emit = defineEmits<{
  'click': [value: MouseEvent]
  'update:pressed': [value: boolean]
}>()

const pressedValue = useVModel(props, 'pressed', emit)

const activeBoolean = useBooleanish(() => props.active)
const disabledBoolean = useBooleanish(() => props.disabled)
const pillBoolean = useBooleanish(() => props.pill)
const pressedBoolean = useBooleanish(() => props.pressed)
const squaredBoolean = useBooleanish(() => props.squared)
const loadingBoolean = useBooleanish(() => props.loading)
const loadingFillBoolean = useBooleanish(() => props.loadingFill)

const {computedLink, computedLinkProps} = useBLinkHelper(props, [
  'active-class',
  'exact-active-class',
  'event',
  'replace',
  'router-component-name',
  'router-tag',
])

const isToggle = toRef(() => typeof pressedBoolean.value === 'boolean')
const isButton = toRef(
  () => props.tag === 'button' && props.href === undefined && props.to === undefined
)
const isBLink = toRef(() => props.to !== undefined)
const nonStandardTag = toRef(() => (props.href !== undefined ? false : !isButton.value))

const linkProps = computed(() => (isBLink.value ? computedLinkProps.value : []))

const computedClasses = computed(() => [
  [`btn-${props.size}`],
  {
    [`btn-${props.variant}`]: props.variant !== null,
    'active': activeBoolean.value || pressedBoolean.value,
    'rounded-pill': pillBoolean.value,
    'rounded-0': squaredBoolean.value,
    'disabled': disabledBoolean.value,
  },
])

const computedTag = toRef(() => (isBLink.value ? BLink : props.href ? 'a' : props.tag))

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
