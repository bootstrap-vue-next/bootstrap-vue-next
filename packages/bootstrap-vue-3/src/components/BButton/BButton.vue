<template>
  <component :is="computedTag" class="btn" :class="classes" v-bind="attrs" @click="clicked">
    <slot />
  </component>
</template>

<script lang="ts">
import {isLink, resolveBooleanish} from '../../utils'
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
    const activeBoolean = computed<boolean>(() => resolveBooleanish(props.active))
    const disabledBoolean = computed<boolean>(() => resolveBooleanish(props.disabled))
    const pillBoolean = computed<boolean>(() => resolveBooleanish(props.pill))
    const pressedBoolean = computed<boolean>(() => resolveBooleanish(props.pressed))
    const squaredBoolean = computed<boolean>(() => resolveBooleanish(props.squared))

    const isToggle = computed<boolean>(() => pressedBoolean.value !== null)
    const isButton = computed<boolean>(() => props.tag === 'button' && !props.href && !props.to)
    const link = computed<boolean>(() => isLink(props))
    const isBLink = computed<boolean>(() => !!props.to)
    const nonStandardTag = computed<boolean>(() => (props.href ? false : !isButton.value))

    const classes = computed(() => ({
      [`btn-${props.variant}`]: props.variant,
      [`btn-${props.size}`]: props.size,
      'active': activeBoolean.value || pressedBoolean.value,
      'rounded-pill': pillBoolean.value,
      'rounded-0': squaredBoolean.value,
      'disabled': disabledBoolean.value,
    }))

    const attrs = computed(() => ({
      'aria-disabled': nonStandardTag.value ? String(disabledBoolean.value) : null,
      'aria-pressed': isToggle.value ? String(pressedBoolean.value) : null,
      'autocomplete': isToggle.value ? 'off' : null,
      'disabled': isButton.value ? disabledBoolean.value : null,
      'href': props.href,
      'rel': link.value ? props.rel : null,
      'role': nonStandardTag.value || link.value ? 'button' : null,
      'target': link.value ? props.target : null,
      'type': isButton.value ? props.type : null,
      'to': !isButton.value ? props.to : null,
      'append': link.value ? props.append : null,
      'activeClass': isBLink.value ? props.activeClass : null,
      'event': isBLink.value ? props.event : null,
      'exact': isBLink.value ? props.exact : null,
      'exactActiveClass': isBLink.value ? props.exactActiveClass : null,
      'replace': isBLink.value ? props.replace : null,
      'routerComponentName': isBLink.value ? props.routerComponentName : null,
      'routerTag': isBLink.value ? props.routerTag : null,
    }))

    const computedTag = computed<string>(() => {
      if (isBLink.value) return 'b-link'
      return props.href ? 'a' : props.tag
    })

    const clicked = (e: MouseEvent): void => {
      if (disabledBoolean.value) {
        e.preventDefault()
        e.stopPropagation()
        return
      }
      emit('click', e)
      if (isToggle.value) {
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
