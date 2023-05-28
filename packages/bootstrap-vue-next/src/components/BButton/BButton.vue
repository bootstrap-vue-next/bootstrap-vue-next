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
import {computed, defineComponent, type PropType, type SlotsType} from 'vue'
import BSpinner from '../BSpinner.vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, ButtonType, ButtonVariant, LinkTarget, Size} from '../../types'
import {isLink} from '../../utils'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'
import {useVModel} from '@vueuse/core'

export default defineComponent({
  slots: Object as SlotsType<{
    default?: Record<string, never>
    loading?: Record<string, never>
  }>,
  components: {BLink, BSpinner},
  props: {
    ...BLINK_PROPS,
    ariaLabel: {type: String, default: null},
    active: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    disabled: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    href: {type: String, default: undefined},
    pill: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    pressed: {type: [Boolean, String] as PropType<Booleanish>, default: null},
    rel: {type: String, default: undefined},
    size: {type: String as PropType<Size>, default: 'md'},
    squared: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    tag: {type: String, default: 'button'},
    target: {type: String as PropType<LinkTarget>, default: '_self'},
    type: {type: String as PropType<ButtonType>, default: 'button'},
    variant: {type: String as PropType<ButtonVariant | null>, default: 'secondary'},
    loading: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    loadingMode: {type: String as PropType<'fill' | 'inline'>, default: 'inline'},
    block: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  },
  emits: ['click', 'update:pressed'],
  setup(props, {emit}) {
    const pressedValue = useVModel(props, 'pressed', emit)

    const activeBoolean = useBooleanish(() => props.active)
    const blockBoolean = useBooleanish(() => props.block)
    const disabledBoolean = useBooleanish(() => props.disabled)
    const pillBoolean = useBooleanish(() => props.pill)
    const pressedBoolean = useBooleanish(() => props.pressed)
    const squaredBoolean = useBooleanish(() => props.squared)
    const loadingBoolean = useBooleanish(() => props.loading)

    const isToggle = computed<boolean>(() => typeof pressedBoolean.value === 'boolean')
    const isButton = computed<boolean>(
      () => props.tag === 'button' && props.href === undefined && props.to === null
    )
    const computedLink = computed<boolean>(() => isLink(props))
    const isBLink = computed<boolean>(() => props.to !== null)
    const nonStandardTag = computed<boolean>(() =>
      props.href !== undefined ? false : !isButton.value
    )

    const computedClasses = computed(() => [
      [`btn-${props.size}`],
      {
        [`btn-${props.variant}`]: props.variant !== null,
        'btn-block': blockBoolean.value,
        'active': activeBoolean.value || pressedBoolean.value,
        'rounded-pill': pillBoolean.value,
        'rounded-0': squaredBoolean.value,
        'disabled': disabledBoolean.value,
      },
    ])

    const computedAttrs = computed(() => ({
      'aria-disabled': props.ariaLabel,
      'aria-label': nonStandardTag.value ? disabledBoolean.value : null,
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
        pressedValue.value = !pressedBoolean.value
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
