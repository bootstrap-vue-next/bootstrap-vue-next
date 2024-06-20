<template>
  <component
    :is="computedTag"
    class="b-avatar"
    :class="computedClasses"
    :style="computedStyle"
    v-bind="computedLinkProps"
    :type="props.button && !computedLink ? props.buttonType : undefined"
    :disabled="props.disabled || null"
    @click="clicked"
  >
    <span v-if="hasDefaultSlot" class="b-avatar-custom">
      <slot />
    </span>
    <span v-else-if="!!props.src" class="b-avatar-img">
      <img :src="props.src" :alt="props.alt" @error="onImgError" />
    </span>
    <span v-else-if="!!props.text" class="b-avatar-text" :style="textFontStyle">
      {{ props.text }}
    </span>
    <BBadge
      v-if="showBadge"
      :pill="props.badgePill"
      :dot-indicator="props.badgeDotIndicator || badgeImplicitlyDot"
      :variant="props.badgeVariant"
      :bg-variant="props.badgeBgVariant"
      :text-variant="props.badgeTextVariant"
      :style="badgeStyle"
      :placement="props.badgePlacement"
    >
      <slot name="badge">
        {{ badgeText }}
      </slot>
    </BBadge>
  </component>
</template>

<script setup lang="ts">
import {avatarGroupInjectionKey, isEmptySlot} from '../../utils'
import {computed, type CSSProperties, inject, type StyleValue, toRef} from 'vue'
import type {BAvatarProps} from '../../types'
import {
  useBLinkHelper,
  useColorVariantClasses,
  useNumberishToStyle,
  useRadiusElementClasses,
} from '../../composables'
import BLink from '../BLink/BLink.vue'
import BBadge from '../BBadge/BBadge.vue'

const props = withDefaults(defineProps<BAvatarProps>(), {
  alt: 'avatar',
  badge: false,
  badgeBgVariant: null,
  badgeTextVariant: null,
  badgeVariant: 'primary',
  badgePlacement: 'top-end',
  badgeDotIndicator: false,
  badgePill: false,
  button: false,
  buttonType: 'button',
  size: undefined,
  square: false,
  src: undefined,
  text: undefined,
  // Link props
  variant: 'secondary',
  // All others use defaults
  active: undefined,
  activeClass: undefined,
  disabled: undefined,
  exactActiveClass: undefined,
  href: undefined,
  opacity: undefined,
  opacityHover: undefined,
  rel: undefined,
  replace: undefined,
  stretched: false,
  routerComponentName: undefined,
  target: undefined,
  to: undefined,
  underlineOffset: undefined,
  underlineOffsetHover: undefined,
  underlineOpacity: undefined,
  underlineOpacityHover: undefined,
  underlineVariant: undefined,
  // End link props
  // ColorExtendables props
  // Variant is here as well
  bgVariant: null,
  textVariant: null,
  // End ColorExtendables props
  // RadiusElementExtendables props
  rounded: false,
  roundedBottom: undefined,
  roundedEnd: undefined,
  roundedStart: undefined,
  roundedTop: undefined,
  // End RadiusElementExtendables props
})

const emit = defineEmits<{
  'click': [value: MouseEvent]
  'img-error': [value: Event]
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  badge?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const {computedLink, computedLinkProps} = useBLinkHelper(props)

const parentData = inject(avatarGroupInjectionKey, null)

const SIZES = ['sm', null, 'lg']
const FONT_SIZE_SCALE = 0.4
const BADGE_FONT_SIZE_SCALE = FONT_SIZE_SCALE * 0.7

const hasDefaultSlot = toRef(() => !isEmptySlot(slots.default))
const hasBadgeSlot = toRef(() => !isEmptySlot(slots.badge))

const showBadge = toRef(() => !!props.badge || props.badge === '' || hasBadgeSlot.value)
const computedSquare = toRef(() => parentData?.square.value || props.square)

const computedPropSize = useNumberishToStyle(() => props.size)
const computedParentSize = useNumberishToStyle(() => parentData?.size.value)
const computedSize = computed(() => computedParentSize.value ?? computedPropSize.value)

const computedVariant = toRef(() => parentData?.variant.value ?? props.variant)
const computedRounded = toRef(() => parentData?.rounded.value ?? props.rounded)
const computedRoundedTop = toRef(() => parentData?.roundedTop.value ?? props.roundedTop)
const computedRoundedBottom = toRef(() => parentData?.roundedBottom.value ?? props.roundedBottom)
const computedRoundedStart = toRef(() => parentData?.roundedStart.value ?? props.roundedStart)
const computedRoundedEnd = toRef(() => parentData?.roundedEnd.value ?? props.roundedEnd)

const radiusElementClasses = useRadiusElementClasses(() => ({
  rounded: computedRounded.value,
  roundedTop: computedRoundedTop.value,
  roundedBottom: computedRoundedBottom.value,
  roundedStart: computedRoundedStart.value,
  roundedEnd: computedRoundedEnd.value,
}))

const badgeText = toRef(() => (props.badge === true ? '' : props.badge))
const badgeImplicitlyDot = computed(() => !badgeText.value && !hasBadgeSlot.value)

const computedTextVariant = toRef(() => parentData?.textVariant.value ?? props.textVariant)
const computedBgVariant = toRef(() => parentData?.bgVariant.value ?? props.bgVariant)

const resolvedBackgroundClasses = useColorVariantClasses(() => ({
  bgVariant: computedBgVariant.value,
  textVariant: computedTextVariant.value,
  variant: computedVariant.value,
}))

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  // Square overwrites all else
  computedSquare.value === true ? undefined : radiusElementClasses.value,
  {
    [`b-avatar-${props.size}`]:
      !!props.size && SIZES.indexOf(computedPropSize.value as string) !== -1,
    [`btn-${computedVariant.value}`]: props.button ? computedVariant.value !== null : false,
    'badge': !props.button && computedVariant.value !== null && hasDefaultSlot.value,
    'btn': props.button,
    // Square is the same as rounded-0 class
    'rounded-0': computedSquare.value === true,
  },
])

const badgeStyle = computed<StyleValue>(() => ({
  fontSize:
    SIZES.indexOf((computedSize.value as string | undefined) || null) === -1
      ? `calc(${computedSize.value} * ${BADGE_FONT_SIZE_SCALE})`
      : '' || '',
}))

const textFontStyle = computed<StyleValue>(() => {
  const fontSize =
    SIZES.indexOf((computedSize.value as string | undefined) || null) === -1
      ? `calc(${computedSize.value} * ${FONT_SIZE_SCALE})`
      : null
  return fontSize ? {fontSize} : {}
})

const marginStyle = computed(() => {
  const overlapScale = parentData?.overlapScale?.value || 0

  const value =
    computedSize.value && overlapScale ? `calc(${computedSize.value} * -${overlapScale})` : null
  return value ? {marginLeft: value, marginRight: value} : {}
})

const computedTag = toRef(() => (computedLink.value ? BLink : props.button ? 'button' : 'span'))

const computedStyle = computed<CSSProperties>(() => ({
  ...marginStyle.value,
  width: computedSize.value ?? undefined,
  height: computedSize.value ?? undefined,
}))

const clicked = (e: Readonly<MouseEvent>): void => {
  if (!props.disabled && (computedLink.value || props.button)) emit('click', e)
}

const onImgError = (e: Readonly<Event>) => {
  emit('img-error', e)
}
</script>
