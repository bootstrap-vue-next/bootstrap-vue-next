<template>
  <component
    :is="computedTag"
    class="b-avatar"
    :class="computedClasses"
    :style="computedStyle"
    v-bind="computedLinkProps"
    :type="buttonBoolean && !computedLink ? props.buttonType : undefined"
    :disabled="disabledBoolean || null"
    @click="clicked"
  >
    <span v-if="hasDefaultSlot" class="b-avatar-custom">
      <slot />
    </span>
    <span v-else-if="!!src" class="b-avatar-img">
      <img :src="src" :alt="alt" @error="onImgError" />
    </span>
    <span v-else-if="!!text" class="b-avatar-text" :style="textFontStyle">
      {{ text }}
    </span>
    <span v-if="showBadge" class="b-avatar-badge" :class="badgeClasses" :style="badgeStyle">
      <slot v-if="hasBadgeSlot" name="badge" />
      <span v-else>{{ badgeText }}</span>
    </span>
  </component>
</template>

<script setup lang="ts">
import {avatarGroupInjectionKey, isEmptySlot, isNumeric, toFloat} from '../../utils'
import {computed, type CSSProperties, inject, type StyleValue, toRef, useSlots} from 'vue'
import type {
  BackgroundColorExtendables,
  BLinkProps,
  Booleanish,
  ButtonType,
  ColorVariant,
  Size,
  TextColorVariant,
} from '../../types'
import {useBackgroundVariant, useBLinkHelper, useBooleanish} from '../../composables'
import BLink from '../BLink/BLink.vue'

const props = withDefaults(
  defineProps<
    {
      alt?: string
      badge?: boolean | string
      badgeLeft?: Booleanish
      badgeOffset?: string
      badgeTop?: Booleanish
      badgeVariant?: ColorVariant | null
      badgeTextVariant?: TextColorVariant | null
      badgeBgVariant?: ColorVariant | null
      button?: Booleanish
      buttonType?: ButtonType
      icon?: string
      rounded?: boolean | string
      size?: Size | string // TODO number --> compat
      square?: Booleanish
      src?: string
      text?: string
    } & Omit<BLinkProps, 'event' | 'routerTag'> &
      BackgroundColorExtendables
  >(),
  {
    bgVariant: null,
    alt: 'avatar',
    badge: false,
    badgeLeft: false,
    badgeOffset: undefined,
    badgeTop: false,
    badgeVariant: 'primary',
    badgeBgVariant: null,
    badgeTextVariant: null,
    button: false,
    buttonType: 'button',
    icon: undefined,
    rounded: 'circle',
    size: undefined,
    square: false,
    src: undefined,
    text: undefined,
    textVariant: null,
    // Link props
    active: undefined,
    activeClass: undefined,
    append: false,
    href: undefined,
    // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
    rel: undefined,
    replace: false,
    disabled: false,
    routerComponentName: 'router-link',
    target: '_self',
    to: undefined,
    opacity: undefined,
    opacityHover: undefined,
    underlineVariant: null,
    underlineOffset: undefined,
    underlineOffsetHover: undefined,
    underlineOpacity: undefined,
    underlineOpacityHover: undefined,
    variant: 'secondary',
  }
)

const emit = defineEmits<{
  'click': [value: MouseEvent]
  'img-error': [value: Event]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  badge?: (props: Record<string, never>) => any
}>()

const slots = useSlots()
const {computedLink, computedLinkProps} = useBLinkHelper(props)

const parentData = inject(avatarGroupInjectionKey, null)

const SIZES = ['sm', null, 'lg']
const FONT_SIZE_SCALE = 0.4
const BADGE_FONT_SIZE_SCALE = FONT_SIZE_SCALE * 0.7

const badgeLeftBoolean = useBooleanish(() => props.badgeLeft)
const badgeTopBoolean = useBooleanish(() => props.badgeTop)
const buttonBoolean = useBooleanish(() => props.button)
const disabledBoolean = useBooleanish(() => props.disabled)
const squareBoolean = useBooleanish(() => props.square)

const hasDefaultSlot = computed(() => !isEmptySlot(slots.default))
const hasBadgeSlot = computed(() => !isEmptySlot(slots.badge))

const showBadge = toRef(() => !!props.badge || props.badge === '' || hasBadgeSlot.value)
const computedSize = toRef(() => parentData?.size.value ?? computeSize(props.size))
const computedVariant = toRef(() => parentData?.variant.value ?? props.variant)
const computedRounded = toRef(() => parentData?.rounded.value ?? props.rounded)

const badgeClasses = useBackgroundVariant(() => ({
  variant: props.badgeVariant,
  bgVariant: props.badgeBgVariant,
  textVariant: props.badgeTextVariant,
}))

const badgeText = toRef(() => (props.badge === true ? '' : props.badge))

const computedTextVariant = toRef(() => parentData?.textVariant.value ?? props.textVariant)
const computedBgVariant = toRef(() => parentData?.bgVariant.value ?? props.bgVariant)

const resolvedBackgroundClasses = useBackgroundVariant(() => ({
  bgVariant: computedBgVariant.value,
  textVariant: computedTextVariant.value,
  variant: computedVariant.value,
}))

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    [`b-avatar-${props.size}`]: !!props.size && SIZES.indexOf(computeSize(props.size)) !== -1,
    [`badge`]: !buttonBoolean.value && computedVariant.value !== null && hasDefaultSlot.value,
    rounded: computedRounded.value === '' || computedRounded.value === true,
    [`rounded-circle`]: !squareBoolean.value && computedRounded.value === 'circle',
    [`rounded-0`]: squareBoolean.value || computedRounded.value === '0',
    [`rounded-1`]: !squareBoolean.value && computedRounded.value === 'sm',
    [`rounded-3`]: !squareBoolean.value && computedRounded.value === 'lg',
    [`rounded-top`]: !squareBoolean.value && computedRounded.value === 'top',
    [`rounded-bottom`]: !squareBoolean.value && computedRounded.value === 'bottom',
    [`rounded-start`]: !squareBoolean.value && computedRounded.value === 'left',
    [`rounded-end`]: !squareBoolean.value && computedRounded.value === 'right',
    btn: buttonBoolean.value,
    [`btn-${computedVariant.value}`]: buttonBoolean.value ? computedVariant.value !== null : false,
  },
])

const badgeStyle = computed<StyleValue>(() => {
  const offset = props.badgeOffset || '0px'
  const fontSize =
    SIZES.indexOf(computedSize.value || null) === -1
      ? `calc(${computedSize.value} * ${BADGE_FONT_SIZE_SCALE})`
      : ''
  return {
    fontSize: fontSize || '',
    top: badgeTopBoolean.value ? offset : '',
    bottom: badgeTopBoolean.value ? '' : offset,
    left: badgeLeftBoolean.value ? offset : '',
    right: badgeLeftBoolean.value ? '' : offset,
  }
})

const textFontStyle = computed<StyleValue>(() => {
  const fontSize =
    SIZES.indexOf(computedSize.value || null) === -1
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

const computedTag = computed(() =>
  computedLink.value ? BLink : buttonBoolean.value ? 'button' : 'span'
)

const computedStyle = computed<CSSProperties>(() => ({
  ...marginStyle.value,
  width: computedSize.value ?? undefined,
  height: computedSize.value ?? undefined,
}))

const clicked = (e: MouseEvent): void => {
  if (!disabledBoolean.value && (computedLink.value || buttonBoolean.value)) emit('click', e)
}

const onImgError = (e: Event) => {
  emit('img-error', e)
}
</script>

<script lang="ts">
export const computeSize = (value: string | undefined): string | null => {
  const calcValue = typeof value === 'string' && isNumeric(value) ? toFloat(value, 0) : value
  return typeof calcValue === 'number' ? `${calcValue}px` : calcValue || null
}
</script>
