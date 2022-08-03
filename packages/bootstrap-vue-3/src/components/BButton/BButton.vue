<template>
  <component :is="computedTag" class="btn" :class="classes" v-bind="attrs" @click="clicked">
    <slot />
  </component>
</template>

<script lang="ts">
import {resolveBooleanish} from '../../utils'
import {computed, defineComponent, PropType} from 'vue'
import type {Booleanish, ButtonVariant, InputSize, LinkTarget} from '../../types'
import {BLINK_PROPS} from '../BLink/BLink.vue'

export default defineComponent({
  props: {
    ...BLINK_PROPS,
    active: {type: Boolean as PropType<Booleanish>, default: false},
    disabled: {type: Boolean as PropType<Booleanish>, default: false},
    href: {type: String, required: false},
    pill: {type: Boolean as PropType<Booleanish>, default: false},
    pressed: {type: Boolean as PropType<Booleanish>, default: null},
    rel: {type: String, default: null},
    size: {type: String as PropType<InputSize>},
    squared: {type: Boolean as PropType<Booleanish>, default: false},
    tag: {type: String, default: 'button'},
    target: {type: String as PropType<LinkTarget>, default: '_self'},
    type: {type: String, default: 'button'},
    variant: {type: String as PropType<ButtonVariant>, default: 'secondary'},
  },
  emits: ['click', 'update:pressed'],
  setup(props, {emit}) {
    const activeBoolean = computed(() => resolveBooleanish(props.active))
    const disabledBoolean = computed(() => resolveBooleanish(props.disabled))
    const pillBoolean = computed(() => resolveBooleanish(props.pill))
    const pressedBoolean = computed(() => resolveBooleanish(props.pressed))
    const squaredBoolean = computed(() => resolveBooleanish(props.squared))

    // TODO none of these are computed values. Meaning they will not react if any of these are changed?
    const isToggle = pressedBoolean.value !== null
    const isButton = props.tag === 'button' && !props.href && !props.to
    const isLink = !!(props.href || props.to)
    const isBLink = !!props.to
    const nonStandardTag = props.href ? false : !isButton

    const classes = computed(() => ({
      [`btn-${props.variant}`]: props.variant,
      [`btn-${props.size}`]: props.size,
      'active': activeBoolean.value || pressedBoolean.value,
      'rounded-pill': pillBoolean.value,
      'rounded-0': squaredBoolean.value,
      'disabled': disabledBoolean.value,
    }))

    const attrs = computed(() => ({
      'aria-disabled': nonStandardTag ? String(disabledBoolean.value) : null,
      'aria-pressed': isToggle ? String(pressedBoolean.value) : null,
      'autocomplete': isToggle ? 'off' : null,
      'disabled': isButton ? disabledBoolean.value : null,
      'href': props.href,
      'rel': isLink ? props.rel : null,
      'role': nonStandardTag || isLink ? 'button' : null,
      'target': isLink ? props.target : null,
      'type': isButton ? props.type : null,
      'to': !isButton ? props.to : null,
      'append': isLink ? props.append : null,
      'activeClass': isBLink ? props.activeClass : null,
      'event': isBLink ? props.event : null,
      'exact': isBLink ? props.exact : null,
      'exactActiveClass': isBLink ? props.exactActiveClass : null,
      'replace': isBLink ? props.replace : null,
      'routerComponentName': isBLink ? props.routerComponentName : null,
      'routerTag': isBLink ? props.routerTag : null,
    }))

    const computedTag = computed<string>(() => {
      if (isBLink) return 'b-link'
      return props.href ? 'a' : props.tag
    })

    const clicked = (e: MouseEvent): void => {
      if (disabledBoolean.value) {
        e.preventDefault()
        e.stopPropagation()
        return
      }
      emit('click', e)
      if (isToggle) {
        emit('update:pressed', !pressedBoolean.value)
      }
    }

    return {
      classes,
      attrs,
      computedTag,
      clicked,
    }
  },
})
</script>
