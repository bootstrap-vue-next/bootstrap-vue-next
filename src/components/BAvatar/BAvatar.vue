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
    <b-icon
      v-else-if="icon"
      :icon="iconName"
      aria-hidden="true"
      :alt="alt"
      :variant="computedIconVariant"
      :size="size"
    />
    <span v-else-if="text" class="b-avatar-text" :class="textClasses" :style="fontStyle">{{
      text
    }}</span>
    <b-icon
      v-else
      :icon="iconName"
      :variant="computedIconVariant"
      aria-hidden="true"
      :alt="alt"
    ></b-icon>
    <span v-if="showBadge" class="b-avatar-badge" :class="badgeClasses" :style="badgeStyle">
      <slot v-if="hasBadgeSlot" name="badge"></slot>
      <span v-else :class="badgeTextClasses">{{ badgeText }}</span>
    </span>
  </component>
</template>

<script lang="ts">
import {isEmptySlot} from '@/utils/dom'
import {computed, defineComponent, PropType, StyleValue} from 'vue'
import {ColorVariant, InputSize} from '../../types'
import {isNumber, isNumeric, isString} from '../../utils/inspect'
import {toFloat} from '../../utils/number'

export default defineComponent({
  name: 'BAvatar',
  props: {
    alt: {type: String, default: 'avatar'},
    ariaLabel: {type: String, required: false},
    badge: {type: [Boolean, String], default: false},
    badgeLeft: {type: Boolean, default: false},
    badgeOffset: {type: String, required: false},
    badgeTop: {type: Boolean, default: false},
    badgeVariant: {type: String as PropType<ColorVariant>, default: 'primary'},
    button: {type: Boolean, default: false},
    buttonType: {type: String, default: 'button'},
    disabled: {type: Boolean, default: false},
    icon: {type: String, required: false},
    iconVariant: {type: String as PropType<ColorVariant>, default: null}, // not standard BootstrapVue props
    rounded: {type: [Boolean, String], default: 'circle'},
    size: {type: String as PropType<InputSize | string>},
    square: {type: Boolean, default: false},
    src: {type: String, required: false},
    text: {type: String, required: false},
    textVariant: {type: String as PropType<ColorVariant | undefined>, default: undefined}, // not standard BootstrapVue props
    variant: {type: String as PropType<ColorVariant>, default: 'secondary'},
  },
  emits: ['click', 'img-error'],
  setup(props, {emit, slots}) {
    const SIZES = ['sm', null, 'lg']
    const FONT_SIZE_SCALE = 0.4
    const BADGE_FONT_SIZE_SCALE = FONT_SIZE_SCALE * 0.7

    const computeSize = (value: any) => {
      const calcValue = isString(value) && isNumeric(value) ? toFloat(value, 0) : value
      return isNumber(calcValue) ? `${calcValue}px` : calcValue || null
    }

    const computeContrastVariant = (colorVariant: ColorVariant): ColorVariant => {
      if (colorVariant === 'light') return 'dark'
      if (colorVariant === 'warning') return 'dark'
      return 'light'
    }

    const hasDefaultSlot = computed(() => !isEmptySlot(slots.default))
    const hasBadgeSlot = computed(() => !isEmptySlot(slots.badge))
    const showBadge = computed(() => props.badge || props.badge === '' || hasBadgeSlot.value)

    const computedSize = computed(() => computeSize(props.size))

    const attrs = computed(() => ({
      'aria-label': props.ariaLabel || null,
      'disabled': props.disabled || null,
    }))

    const badgeClasses = computed(() => ({
      [`bg-${props.badgeVariant}`]: props.badgeVariant,
    }))

    const badgeText = computed(() => (props.badge === true ? '' : props.badge))
    const badgeTextClasses = computed(() => {
      const textVariant = computeContrastVariant(props.badgeVariant)
      return `text-${textVariant}`
    })

    const classes = computed(() => ({
      [`b-avatar-${props.size}`]: props.size && SIZES.indexOf(props.size || null) !== -1,
      [`bg-${props.variant}`]: props.variant,
      [`badge`]: !props.button && props.variant && hasDefaultSlot.value,
      rounded: props.rounded === '' || props.rounded === true,
      [`rounded-circle`]: !props.square && props.rounded === 'circle',
      [`rounded-0`]: props.square || props.rounded === '0',
      [`rounded-1`]: !props.square && props.rounded === 'sm',
      [`rounded-3`]: !props.square && props.rounded === 'lg',
      [`rounded-top`]: !props.square && props.rounded === 'top',
      [`rounded-bottom`]: !props.square && props.rounded === 'bottom',
      [`rounded-start`]: !props.square && props.rounded === 'left',
      [`rounded-end`]: !props.square && props.rounded === 'right',
      btn: props.button,
      [`btn-${props.variant}`]: props.button ? props.variant : null,
    }))

    const textClasses = computed(() => {
      const textVariant = props.textVariant || computeContrastVariant(props.variant)
      return `text-${textVariant}`
    })

    const iconName = computed(() => {
      if (props.icon) return props.icon
      if (!props.text && !props.src) return 'person-fill'
      return undefined
    })

    const computedIconVariant = computed(
      () => props.iconVariant || computeContrastVariant(props.variant)
    )

    const fontStyle = computed((): StyleValue => {
      const fontSize =
        SIZES.indexOf(computedSize.value || null) === -1
          ? `calc(${computedSize.value} * ${FONT_SIZE_SCALE})`
          : null
      return fontSize ? {fontSize} : {}
    })

    const badgeStyle = computed((): StyleValue => {
      const offset = props.badgeOffset || '0px'
      const fontSize =
        SIZES.indexOf(computedSize.value || null) === -1
          ? `calc(${computedSize.value} * ${BADGE_FONT_SIZE_SCALE})`
          : ''
      const result = {
        fontSize: fontSize || null,
        top: props.badgeTop ? offset : null,
        bottom: props.badgeTop ? null : offset,
        left: props.badgeLeft ? offset : null,
        right: props.badgeLeft ? null : offset,
      }
      return result
    })

    const marginStyle = computed(() => {
      const overlapScale = 0
      const value = computedSize.value ? `calc(${computedSize.value} * -${overlapScale})` : null
      return value ? {marginLeft: value, marginRight: value} : {}
    })

    const tagStyle = computed(() => ({
      ...marginStyle.value,
      width: computedSize.value,
      height: computedSize.value,
    }))
    const tag = computed(() => (props.button ? props.buttonType : 'span'))
    const clicked = function (e: PointerEvent) {
      if (!props.disabled && props.button) emit('click', e)
    }
    const onImgError = (e: Event) => emit('img-error', e)

    return {
      attrs,
      badgeClasses,
      badgeStyle,
      badgeText,
      badgeTextClasses,
      classes,
      clicked,
      computedIconVariant,
      fontStyle,
      hasBadgeSlot,
      hasDefaultSlot,
      iconName,
      onImgError,
      showBadge,
      tag,
      tagStyle,
      textClasses,
    }
  },
})
</script>
