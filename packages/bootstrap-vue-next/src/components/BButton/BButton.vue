<template>
  <component
    :is="computedTag"
    ref="_element"
    class="btn"
    v-bind="linkProps"
    :class="computedClasses"
    :aria-disabled="computedAriaDisabled"
    :aria-pressed="isToggle ? pressedValue : null"
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
    <slot v-if="props.loading" name="loading">
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
    <slot v-else />
  </component>
</template>

<script setup lang="ts">
import {computed, useTemplateRef} from 'vue'
import BSpinner from '../BSpinner/BSpinner.vue'
import {useBLinkHelper} from '../../composables/useBLinkHelper'
import BLink from '../BLink/BLink.vue'
import {useLinkClasses} from '../../composables/useLinkClasses'
import {onKeyStroke} from '@vueuse/core'
import type {BButtonProps} from '../../types/ComponentProps'
import {useDefaults} from '../../composables/useDefaults'
import type {ColorVariant} from '../../types/ColorTypes'
import {type BButtonEmits, type BButtonSlots} from '../../types'

const _props = withDefaults(defineProps<Omit<BButtonProps, 'pressed'>>(), {
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
const emit = defineEmits<BButtonEmits>()
defineSlots<BButtonSlots>()

const element = useTemplateRef<HTMLButtonElement | null>('_element')

const pressedValue = defineModel<BButtonProps['pressed']>('pressed', {default: undefined})

const {computedLink, computedLinkProps} = useBLinkHelper(props, [
  'active-class',
  'exact-active-class',
  'replace',
  'routerComponentName',
  'routerTag',
  'noPrefetch',
  'prefetch',
  'prefetchOn',
  'prefetchedClass',
])

const isToggle = computed(() => typeof pressedValue.value === 'boolean')
const isButton = computed(
  () => props.tag === 'button' && props.href === undefined && props.to === undefined
)
const isBLink = computed(() => props.to !== undefined)
const nonStandardTag = computed(() => (props.href !== undefined ? false : !isButton.value))

const linkProps = computed(() => (isBLink.value ? computedLinkProps.value : []))
const computedAriaDisabled = computed(() => {
  if (props.href === '#' && props.disabled) return true

  return nonStandardTag.value ? props.disabled : null
})

const variantIsLinkType = computed(() => props.variant?.startsWith('link') || false)
const variantIsLinkTypeSubset = computed(() => props.variant?.startsWith('link-') || false)
const linkValueClasses = useLinkClasses(
  computed(() => ({
    ...(variantIsLinkType.value
      ? {
          icon: props.icon,
          opacity: props.opacity,
          opacityHover: props.opacityHover,
          underlineOffset: props.underlineOffset,
          underlineOffsetHover: props.underlineOffsetHover,
          underlineOpacity: props.underlineOpacity,
          underlineOpacityHover: props.underlineOpacityHover,
          underlineVariant: props.underlineVariant,
          variant:
            variantIsLinkTypeSubset.value === true
              ? (props.variant?.slice(5) as ColorVariant)
              : null,
        }
      : undefined),
  }))
)
const computedClasses = computed(() => [
  variantIsLinkType.value === true && computedLink.value === false
    ? linkValueClasses.value
    : undefined,
  [`btn-${props.size}`],
  {
    [`btn-${props.variant}`]: props.variant !== null && variantIsLinkTypeSubset.value === false,
    'active': props.active || pressedValue.value,
    'rounded-pill': props.pill,
    'rounded-0': props.squared,
    'disabled': props.disabled,
  },
])

const computedTag = computed(() => (isBLink.value ? BLink : props.href ? 'a' : props.tag))

const clicked = (e: Readonly<MouseEvent>): void => {
  if (props.disabled) {
    e.preventDefault()
    e.stopPropagation()
    return
  }
  emit('click', e)
  if (isToggle.value) pressedValue.value = !pressedValue.value
}

onKeyStroke(
  [' ', 'enter'],
  (e) => {
    if (props.href === '#') {
      e.preventDefault()
      element.value?.click()
    }
  },
  {target: element}
)
</script>
