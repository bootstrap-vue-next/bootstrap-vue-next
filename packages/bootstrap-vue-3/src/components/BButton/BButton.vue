<template>
  <component
    :is="computedTag"
    class="btn"
    :class="computedClasses"
    v-bind="computedAttrs"
    @click="clicked"
  >
    <div
      v-if="loadingBoolean"
      class="btn-loading"
      :class="{'mode-fill': loadingMode === 'fill', 'mode-inline': loadingMode === 'inline'}"
    >
      <slot name="loading">
        <b-spinner class="btn-spinner" :small="size !== 'lg'" />
      </slot>
    </div>
    <div
      class="btn-content"
      :class="{'btn-loading-fill': loadingBoolean && loadingMode === 'fill'}"
    >
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, type PropType, toRef} from 'vue'
import BSpinner from '../BSpinner.vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, ButtonType, ButtonVariant, InputSize, LinkTarget} from '../../types'
import {isLink} from '../../utils'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'

export default defineComponent({
  components: {BLink, BSpinner},
  props: {
    ...BLINK_PROPS,
    active: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    disabled: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    href: {type: String, required: false},
    pill: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    pressed: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    rel: {type: String, default: undefined},
    size: {type: String as PropType<InputSize>, default: 'md'},
    squared: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    tag: {type: String, default: 'button'},
    target: {type: String as PropType<LinkTarget>, default: '_self'},
    type: {type: String as PropType<ButtonType>, default: 'button'},
    variant: {type: String as PropType<ButtonVariant>, default: 'secondary'},
    loading: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    loadingMode: {type: String as PropType<'fill' | 'inline'>, default: 'inline'},
  },
  emits: ['click', 'update:pressed'],
  setup(props, {emit}) {
    const activeBoolean = useBooleanish(toRef(props, 'active'))
    const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
    const pillBoolean = useBooleanish(toRef(props, 'pill'))
    const pressedBoolean = useBooleanish(toRef(props, 'pressed'))
    const squaredBoolean = useBooleanish(toRef(props, 'squared'))
    const loadingBoolean = useBooleanish(toRef(props, 'loading'))

    const isToggle = computed<boolean>(() => pressedBoolean.value === true)
    const isButton = computed<boolean>(
      () => props.tag === 'button' && props.href === undefined && props.to === null
    )
    const computedLink = computed<boolean>(() => isLink(props))
    const isBLink = computed<boolean>(() => props.to !== null)
    const nonStandardTag = computed<boolean>(() =>
      props.href !== undefined ? false : !isButton.value
    )

    const computedClasses = computed(() => [
      [`btn-${props.variant}`],
      [`btn-${props.size}`],
      {
        'active': activeBoolean.value || pressedBoolean.value,
        'rounded-pill': pillBoolean.value,
        'rounded-0': squaredBoolean.value,
        'disabled': disabledBoolean.value,
      },
    ])

    const computedAttrs = computed(() => ({
      'aria-disabled': nonStandardTag.value ? disabledBoolean.value : null,
      'aria-pressed': isToggle.value ? pressedBoolean.value : null,
      'autocomplete': isToggle.value ? 'off' : null,
      'disabled': isButton.value ? disabledBoolean.value : null,
      'href': props.href,
      'rel': computedLink.value ? props.rel : null,
      'role': nonStandardTag.value || computedLink.value ? 'button' : null,
      'target': computedLink.value ? props.target : null,
      'type': isButton.value ? props.type : null,
      'to': !isButton.value ? props.to : null,
      'append': computedLink.value ? props.append : null,
      'activeClass': isBLink.value ? props.activeClass : null,
      'event': isBLink.value ? props.event : null,
      'exact': isBLink.value ? props.exact : null,
      'exactActiveClass': isBLink.value ? props.exactActiveClass : null,
      'replace': isBLink.value ? props.replace : null,
      'routerComponentName': isBLink.value ? props.routerComponentName : null,
      'routerTag': isBLink.value ? props.routerTag : null,
    }))

    const computedTag = computed<string | typeof BLink>(() =>
      isBLink.value ? BLink : props.href ? 'a' : props.tag
    )

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
      computedClasses,
      computedAttrs,
      computedTag,
      clicked,
      loadingBoolean,
    }
  },
})
</script>
