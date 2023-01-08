<template>
  <component
    :is="computedTag"
    class="b-avatar"
    :class="computedClasses"
    :style="computedStyle"
    v-bind="computedAttrs"
    @click="clicked"
  >
    <span v-if="hasDefaultSlot" class="b-avatar-custom">
      <slot />
    </span>
    <span v-else-if="!!src" class="b-avatar-img">
      <img :src="src" :alt="alt" @error="onImgError" />
    </span>
    <span v-else-if="!!text" class="b-avatar-text" :class="textClasses" :style="textFontStyle">
      {{ text }}
    </span>
    <span v-if="showBadge" class="b-avatar-badge" :class="badgeClasses" :style="badgeStyle">
      <slot v-if="hasBadgeSlot" name="badge" />
      <span v-else :class="badgeTextClasses">{{ badgeText }}</span>
    </span>
  </component>
</template>

<script setup lang="ts">
// import type { BAvatarProps, BAvatarEmits, InputSize } from '../types/components'
import {isEmptySlot, isNumeric, toFloat} from '../../utils'
import type {BAvatarGroupParentData} from '../../types/components'
import {computed, inject, type StyleValue, toRef, useSlots} from 'vue'
import type {Booleanish, ButtonType, ColorVariant, TextColorVariant} from '../../types'
import {injectionKey} from './BAvatarGroup.vue'
import {useBooleanish} from '../../composables'

interface BAvatarProps {
  alt?: string
  ariaLabel?: string
  badge?: boolean | string
  badgeLeft?: Booleanish
  badgeOffset?: string
  badgeTop?: Booleanish
  badgeVariant?: ColorVariant
  button?: Booleanish
  buttonType?: ButtonType
  disabled?: Booleanish
  icon?: string
  rounded?: boolean | string
  size?: 'sm' | 'md' | 'lg' | string // InputSize | string
  square?: Booleanish
  src?: string
  text?: string
  textVariant?: TextColorVariant
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BAvatarProps>(), {
  alt: 'avatar',
  badge: false,
  badgeLeft: false,
  badgeTop: false,
  badgeVariant: 'primary',
  button: false,
  buttonType: 'button',
  disabled: false,
  rounded: 'circle',
  square: false,
  variant: 'secondary',
})

interface BAvatarEmits {
  (e: 'click', value: MouseEvent): void
  (e: 'img-error', value: Event): void
}

const emit = defineEmits<BAvatarEmits>()

const slots = useSlots()

const parentData = inject<BAvatarGroupParentData | null>(injectionKey, null)

const SIZES = ['sm', null, 'lg']
const FONT_SIZE_SCALE = 0.4
const BADGE_FONT_SIZE_SCALE = FONT_SIZE_SCALE * 0.7

const badgeLeftBoolean = useBooleanish(toRef(props, 'badgeLeft'))
const badgeTopBoolean = useBooleanish(toRef(props, 'badgeTop'))
const buttonBoolean = useBooleanish(toRef(props, 'button'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const squareBoolean = useBooleanish(toRef(props, 'square'))

const hasDefaultSlot = computed<boolean>(() => !isEmptySlot(slots.default))

const hasBadgeSlot = computed<boolean>(() => !isEmptySlot(slots.badge))

const showBadge = computed<boolean>(() => !!props.badge || props.badge === '' || hasBadgeSlot.value)

const computedSize = computed<string | null>(() =>
  parentData?.size ? parentData.size : computeSize(props.size)
)

const computedVariant = computed<ColorVariant>(() =>
  parentData?.variant ? parentData.variant : props.variant
)

const computedRounded = computed<string | boolean>(() =>
  parentData?.rounded ? parentData.rounded : props.rounded
)

const computedAttrs = computed(() => ({
  'type': buttonBoolean.value ? props.buttonType : undefined,
  'aria-label': props.ariaLabel || null,
  'disabled': disabledBoolean.value || null,
}))

const badgeClasses = computed(() => [`bg-${props.badgeVariant}`])

const badgeText = computed<string | false>(() => (props.badge === true ? '' : props.badge))

const badgeTextClasses = computed(() => [[`text-${computeContrastVariant(props.badgeVariant)}`]])

const computedClasses = computed(() => ({
  [`b-avatar-${props.size}`]: !!props.size && SIZES.indexOf(computeSize(props.size)) !== -1,
  [`bg-${computedVariant.value}`]: !!computedVariant.value,
  [`badge`]: !buttonBoolean.value && computedVariant.value && hasDefaultSlot.value,
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
  [`btn-${computedVariant.value}`]: buttonBoolean.value ? !!computedVariant.value : false,
}))

const textClasses = computed(() => [
  [`text-${props.textVariant || computeContrastVariant(computedVariant.value)}`],
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

const computedTag = computed<'button' | 'span'>(() => (buttonBoolean.value ? 'button' : 'span'))

const computedStyle = computed(() => ({
  ...marginStyle.value,
  width: computedSize.value,
  height: computedSize.value,
}))

const computeContrastVariant = (colorVariant: ColorVariant): 'dark' | 'light' =>
  colorVariant === 'light' || colorVariant === 'warning' ? 'dark' : 'light'

const clicked = (e: MouseEvent): void => {
  if (!disabledBoolean.value && buttonBoolean.value) emit('click', e)
}

const onImgError = (e: Event): void => emit('img-error', e)
</script>

<script lang="ts">
export const computeSize = (value: any): string | null => {
  const calcValue = typeof value === 'string' && isNumeric(value) ? toFloat(value, 0) : value
  return typeof calcValue === 'number' ? `${calcValue}px` : calcValue || null
}
</script>
