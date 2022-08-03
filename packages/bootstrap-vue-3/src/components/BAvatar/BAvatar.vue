<template>
  <component
    :is="tag"
    class="b-avatar"
    :class="classes"
    :style="tagStyle"
    v-bind="attrs"
    @click="clicked"
  >
    <span v-if="hasDefaultSlot" class="b-avatar-custom">
      <slot />
    </span>
    <span v-else-if="src" class="b-avatar-img">
      <img :src="src" :alt="alt" @error="onImgError" />
    </span>
    <span v-else-if="text" class="b-avatar-text" :class="textClasses" :style="fontStyle">
      {{ text }}
    </span>

    <span v-if="showBadge" class="b-avatar-badge" :class="badgeClasses" :style="badgeStyle">
      <slot v-if="hasBadgeSlot" name="badge"></slot>
      <span v-else :class="badgeTextClasses">{{ badgeText }}</span>
    </span>
  </component>
</template>

<script setup lang="ts">
// import type { BAvatarProps, BAvatarEmits, InputSize } from '../types/components'
import {isEmptySlot, isNumber, isNumeric, isString, resolveBooleanish, toFloat} from '../../utils'
import type {BAvatarGroupParentData} from '../../types/components'
import {computed, inject, StyleValue, useSlots} from 'vue'
import type {Booleanish, ColorVariant} from '../../types'
import {injectionKey} from './BAvatarGroup.vue'

interface BAvatarProps {
  alt?: string // TODO each complex variant should contain a note about it's type
  ariaLabel?: string
  badge?: boolean | string
  badgeLeft?: Booleanish
  badgeOffset?: string
  badgeTop?: Booleanish
  badgeVariant?: ColorVariant
  button?: Booleanish
  buttonType?: string
  disabled?: Booleanish
  icon?: string
  rounded?: boolean | string
  size?: 'sm' | 'md' | 'lg' | string
  // size?: InputSize | string
  square?: Booleanish
  src?: string
  text?: string
  textVariant?: ColorVariant // not standard BootstrapVue props
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
  textVariant: undefined,
  variant: 'secondary',
})

const booleanBadgeLeft = computed(() => resolveBooleanish(props.badgeLeft))
const booleanBadgeTop = computed(() => resolveBooleanish(props.badgeTop))
const booleanButton = computed(() => resolveBooleanish(props.button))
const booleanDisabled = computed(() => resolveBooleanish(props.disabled))
const booleanSquare = computed(() => resolveBooleanish(props.square))

interface BAvatarEmits {
  (e: 'click', value: MouseEvent): void
  (e: 'img-error', value: Event): void
}

const emit = defineEmits<BAvatarEmits>()

const slots = useSlots()

const SIZES = ['sm', null, 'lg']
const FONT_SIZE_SCALE = 0.4
const BADGE_FONT_SIZE_SCALE = FONT_SIZE_SCALE * 0.7

const parentData = inject<BAvatarGroupParentData | null>(injectionKey, null)

const computeContrastVariant = (colorVariant: ColorVariant): ColorVariant => {
  const variant = colorVariant

  if (variant === 'light') return 'dark'
  if (variant === 'warning') return 'dark'
  return 'light'
}

const hasDefaultSlot = computed<boolean>(() => !isEmptySlot(slots.default))
const hasBadgeSlot = computed<boolean>(() => !isEmptySlot(slots.badge))
const showBadge = computed<string | boolean>(
  () => props.badge || props.badge === '' || hasBadgeSlot.value
)

const computedSize = computed<string | null>(() =>
  parentData?.size ? parentData.size : computeSize(props.size)
)

const computedVariant = computed<ColorVariant>(() =>
  parentData?.variant ? parentData.variant : props.variant
)

const computedRounded = computed<string | boolean>(() =>
  parentData?.rounded ? parentData.rounded : props.rounded
)

const attrs = computed(() => ({
  'aria-label': props.ariaLabel || null,
  'disabled': booleanDisabled.value || null,
}))

const badgeClasses = computed(() => ({
  [`bg-${props.badgeVariant}`]: props.badgeVariant,
}))

const badgeText = computed<string | false>(() => (props.badge === true ? '' : props.badge))
const badgeTextClasses = computed<string>(() => {
  const textVariant = computeContrastVariant(props.badgeVariant)
  return `text-${textVariant}`
})

const classes = computed(() => ({
  [`b-avatar-${props.size}`]: props.size && SIZES.indexOf(computeSize(props.size)) !== -1,
  [`bg-${computedVariant.value}`]: computedVariant.value,
  [`badge`]: !booleanButton.value && computedVariant.value && hasDefaultSlot.value,
  rounded: computedRounded.value === '' || computedRounded.value === true,
  [`rounded-circle`]: !booleanSquare.value && computedRounded.value === 'circle',
  [`rounded-0`]: booleanSquare.value || computedRounded.value === '0',
  [`rounded-1`]: !booleanSquare.value && computedRounded.value === 'sm',
  [`rounded-3`]: !booleanSquare.value && computedRounded.value === 'lg',
  [`rounded-top`]: !booleanSquare.value && computedRounded.value === 'top',
  [`rounded-bottom`]: !booleanSquare.value && computedRounded.value === 'bottom',
  [`rounded-start`]: !booleanSquare.value && computedRounded.value === 'left',
  [`rounded-end`]: !booleanSquare.value && computedRounded.value === 'right',
  btn: booleanButton.value,
  [`btn-${computedVariant.value}`]: booleanButton.value ? computedVariant.value : null,
}))

const textClasses = computed<string>(() => {
  const textVariant = props.textVariant || computeContrastVariant(computedVariant.value)
  return `text-${textVariant}`
})

const badgeStyle = computed<StyleValue>(() => {
  const offset = props.badgeOffset || '0px'
  const fontSize =
    SIZES.indexOf(computedSize.value || null) === -1
      ? `calc(${computedSize.value} * ${BADGE_FONT_SIZE_SCALE})`
      : ''
  return {
    fontSize: fontSize || '',
    top: booleanBadgeTop.value ? offset : '',
    bottom: booleanBadgeTop.value ? '' : offset,
    left: booleanBadgeLeft.value ? offset : '',
    right: booleanBadgeLeft.value ? '' : offset,
  }
})

const fontStyle = computed<StyleValue>(() => {
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

const tag = computed<string>(() => (booleanButton.value ? props.buttonType : 'span'))
const tagStyle = computed(() => ({
  ...marginStyle.value,
  width: computedSize.value,
  height: computedSize.value,
}))

const clicked = (e: MouseEvent): void => {
  if (!booleanDisabled.value && booleanButton.value) emit('click', e)
}
const onImgError = (e: Event): void => emit('img-error', e)
</script>

<script lang="ts">
export const computeSize = (value: any): string | null => {
  const calcValue = isString(value) && isNumeric(value) ? toFloat(value, 0) : value
  return isNumber(calcValue) ? `${calcValue}px` : calcValue || null
}
</script>
