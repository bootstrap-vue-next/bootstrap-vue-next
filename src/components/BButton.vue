<template>
  <component :is="computedTag" class="btn" :class="classes" v-bind="attrs" @click="clicked">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ButtonVariant, InputSize} from '../types'

export default defineComponent({
  name: 'BButton',
  props: {
    active: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    href: {type: String, required: false},
    to: {type: String, required: false},
    pill: {type: Boolean, default: false},
    pressed: {type: Boolean, default: null},
    rel: {type: String, default: null},
    size: {type: String as PropType<InputSize>},
    squared: {type: Boolean, default: false},
    tag: {type: String, default: 'button'},
    target: {type: String, default: '_self'},
    type: {type: String, default: 'button'},
    variant: {type: String as PropType<ButtonVariant>, default: 'secondary'},
  },
  emits: ['click', 'update:pressed'],
  setup(props, {emit}) {
    const isToggle = props.pressed !== null
    const isButton = props.tag === 'button' && !props.href && !props.to
    const hashLink = props.href === '#' || props.to === '#'
    const nonStandardTag = props.href ? false : !isButton

    const classes = computed(() => ({
      [`btn-${props.variant}`]: props.variant,
      [`btn-${props.size}`]: props.size,
      'active': props.active || props.pressed,
      'rounded-pill': props.pill,
      'rounded-0': props.squared,
      'disabled': props.disabled,
    }))

    const attrs = computed(() => ({
      'aria-disabled': nonStandardTag ? String(props.disabled) : null,
      'aria-pressed': isToggle ? String(props.pressed) : null,
      'autocomplete': isToggle ? 'off' : null,
      'disabled': isButton ? props.disabled : null,
      'href': props.href,
      'to': props.to,
      'rel': props.href || props.to ? props.rel : null,
      'role': nonStandardTag || hashLink ? 'button' : null,
      'target': props.href || props.to ? props.target : null,
      'type': isButton ? props.type : null,
    }))

    const clicked = function (e: PointerEvent) {
      if (props.disabled) {
        e.preventDefault()
        e.stopPropagation()
        return
      }
      emit('click', e)
      if (isToggle) {
        emit('update:pressed', !props.pressed)
      }
    }

    const computedTag = computed(() => {
      if (props.to) return 'router-link'
      return props.href ? 'a' : props.tag
    })

    return {
      classes,
      attrs,
      computedTag,
      clicked,
    }
  },
})
</script>
