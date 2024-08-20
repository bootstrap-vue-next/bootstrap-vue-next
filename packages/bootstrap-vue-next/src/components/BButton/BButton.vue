<template>
  <component
    :is="computedTag"
    class="btn"
    v-bind="linkProps"
    :class="computedClasses"
    :aria-disabled="nonStandardTag ? props.disabled : null"
    :aria-pressed="isToggle ? props.pressed : null"
    :autocomplete="isToggle ? 'off' : null"
    :disabled="isButton ? props.disabled : null"
    :href="props.href"
    :rel="computedLink ? props.rel : null"
    :role="nonStandardTag || computedLink ? 'button' : null"
    :target="computedLink ? props.target : null"
    :type="isButton ? props.type : null"
    :to="!isButton ? props.to : null"
    @click="clicked"
  >
    <template v-if="props.loading">
      <slot name="loading">
        <template v-if="!props.loadingFill">
          {{ props.loadingText }}
        </template>
        <slot name="loading-spinner">
          <BSpinner
            :small="props.size !== 'lg'"
            :label="props.loadingFill ? props.loadingText : undefined"
          />
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
import {useBLinkHelper, useDefaults} from '../../composables'
import type {BButtonProps, ColorVariant} from '../../types'
import BLink from '../BLink/BLink.vue'
import {useLinkClasses} from '../../composables/useLinkClasses'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'loading'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'loading-spinner'?: (props: Record<string, never>) => any
}>()

const _props = withDefaults(defineProps<BButtonProps>(), {
  loading: false,
  loadingFill: false,
  loadingText: 'Loading...',
  pill: false,
  size: 'md',
  squared: false,
  tag: 'button',
  type: 'button',
  // Link props
  active: false, // Why is this active: false?
  variant: 'secondary',
  // All others use defaults
  activeClass: undefined,
  disabled: undefined,
  exactActiveClass: undefined,
  stretched: false,
  href: undefined,
  icon: false,
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
  underlineVariant: null,
  // End link props
})

const props = useDefaults(_props, 'BButton')

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const pressedValue = defineModel<boolean | undefined>('pressed', {default: undefined})

const {computedLink, computedLinkProps} = useBLinkHelper(props, [
  'active-class',
  'exact-active-class',
  'replace',
  'routerComponentName',
  'routerTag',
])

const isToggle = toRef(() => typeof props.pressed === 'boolean')
const isButton = toRef(
  () => props.tag === 'button' && props.href === undefined && props.to === undefined
)
const isBLink = toRef(() => props.to !== undefined)
const nonStandardTag = toRef(() => (props.href !== undefined ? false : !isButton.value))

const linkProps = computed(() => (isBLink.value ? computedLinkProps.value : []))

const variantIsLinkSubset = computed(
  () => (computedLink.value === false && props.variant?.startsWith('link-')) || false
)
const linkValueClasses = useLinkClasses(
  computed(() => ({
    ...(props.variant &&
      props.variant.startsWith('link') && {
        icon: props.icon,
        opacity: props.opacity,
        opacityHover: props.opacityHover,
        underlineOffset: props.underlineOffset,
        underlineOffsetHover: props.underlineOffsetHover,
        underlineOpacity: props.underlineOpacity,
        underlineOpacityHover: props.underlineOpacityHover,
        underlineVariant: props.underlineVariant,
        variant:
          variantIsLinkSubset.value === true ? (props.variant.slice(5) as ColorVariant) : null,
      }),
  }))
)
const computedClasses = computed(() => [
  computedLink.value === true ? undefined : linkValueClasses.value,
  [`btn-${props.size}`],
  {
    [`btn-${props.variant}`]: props.variant !== null && variantIsLinkSubset.value === false,
    'active': props.active || props.pressed,
    'rounded-pill': props.pill,
    'rounded-0': props.squared,
    'disabled': props.disabled,
  },
])

const computedTag = toRef(() => (isBLink.value ? BLink : props.href ? 'a' : props.tag))

const clicked = (e: Readonly<MouseEvent>): void => {
  if (props.disabled) {
    e.preventDefault()
    e.stopPropagation()
    return
  }
  emit('click', e)
  if (isToggle.value) {
    pressedValue.value = !props.pressed
  }
}
</script>
