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
// import type { BAvatarProps, BAvatarEmits } from '../types/components'
import {isEmptySlot} from '../../utils/dom'
import type {BAvatarGroupParentData} from '../../types/components'
import {computed, inject, StyleValue, useSlots} from 'vue'
import type {ColorVariant, InputSize} from '../../types'
import {isNumber, isNumeric, isString} from '../../utils/inspect'
import {toFloat} from '../../utils/number'
import {injectionKey} from './BAvatarGroup.vue'

interface BAvatarProps {
  alt?: string
  ariaLabel?: string
  badge?: boolean | string
  badgeLeft?: boolean
  badgeOffset?: string
  badgeTop?: boolean
  badgeVariant?: ColorVariant
  button?: boolean
  buttonType?: string
  disabled?: boolean
  icon?: string
  rounded?: boolean | string
  size?: InputSize | string | number
  square?: boolean
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
  'disabled': props.disabled || null,
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
  [`badge`]: !props.button && computedVariant.value && hasDefaultSlot.value,
  rounded: computedRounded.value === '' || computedRounded.value === true,
  [`rounded-circle`]: !props.square && computedRounded.value === 'circle',
  [`rounded-0`]: props.square || computedRounded.value === '0',
  [`rounded-1`]: !props.square && computedRounded.value === 'sm',
  [`rounded-3`]: !props.square && computedRounded.value === 'lg',
  [`rounded-top`]: !props.square && computedRounded.value === 'top',
  [`rounded-bottom`]: !props.square && computedRounded.value === 'bottom',
  [`rounded-start`]: !props.square && computedRounded.value === 'left',
  [`rounded-end`]: !props.square && computedRounded.value === 'right',
  btn: props.button,
  [`btn-${computedVariant.value}`]: props.button ? computedVariant.value : null,
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
    top: props.badgeTop ? offset : '',
    bottom: props.badgeTop ? '' : offset,
    left: props.badgeLeft ? offset : '',
    right: props.badgeLeft ? '' : offset,
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

const tag = computed<string>(() => (props.button ? props.buttonType : 'span'))
const tagStyle = computed(() => ({
  ...marginStyle.value,
  width: computedSize.value,
  height: computedSize.value,
}))

const clicked = (e: MouseEvent): void => {
  if (!props.disabled && props.button) emit('click', e)
}
const onImgError = (e: Event): void => emit('img-error', e)
</script>

<script lang="ts">
export const computeSize = (value: any): string | null => {
  const calcValue = isString(value) && isNumeric(value) ? toFloat(value, 0) : value
  return isNumber(calcValue) ? `${calcValue}px` : calcValue || null
}
</script>
