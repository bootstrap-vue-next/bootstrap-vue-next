<template>
  <component :is="computedTag" class="btn" :class="classes" v-bind="attrs" @click="clicked">
    <BButtonLoading :loading="loading" :mode="loadingMode" :size="size">
      <slot name="loading"></slot>
    </BButtonLoading>
    <div class="btn-content" :class="{'btn-loading-fill': loading && loadingMode == 'fill'}">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, toRef} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, ButtonType, ButtonVariant, InputSize, LinkTarget} from '../../types'
import {isLink} from '../../utils'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'
import BButtonLoading from './BButtonLoading.vue'

export default defineComponent({
  components: {BLink, BButtonLoading},
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
    loading: {type: Boolean, default: false},
    loadingMode: {type: String as () => 'fill' | 'inline', default: 'inline'},
  },
  emits: ['click', 'update:pressed'],
  setup(props, {emit}) {
    const activeBoolean = useBooleanish(toRef(props, 'active'))
    const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
    const pillBoolean = useBooleanish(toRef(props, 'pill'))
    const pressedBoolean = useBooleanish(toRef(props, 'pressed'))
    const squaredBoolean = useBooleanish(toRef(props, 'squared'))

    const isToggle = computed<boolean>(() => pressedBoolean.value === true)
    const isButton = computed<boolean>(
      () => props.tag === 'button' && props.href === undefined && props.to === null
    )
    const link = computed<boolean>(() => isLink(props))
    const isBLink = computed<boolean>(() => props.to !== null)
    const nonStandardTag = computed<boolean>(() =>
      props.href !== undefined ? false : !isButton.value
    )

    const classes = computed(() => ({
      [`btn-${props.variant}`]: props.variant,
      [`btn-${props.size}`]: props.size,
      'active': activeBoolean.value || pressedBoolean.value,
      'rounded-pill': pillBoolean.value,
      'rounded-0': squaredBoolean.value,
      'disabled': disabledBoolean.value,
    }))

    const attrs = computed(() => ({
      'aria-disabled': nonStandardTag.value ? disabledBoolean.value : null,
      // TODO this basically checks pressed twice.
      'aria-pressed': isToggle.value ? pressedBoolean.value : null,
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
      classes,
      attrs,
      computedTag,
      clicked,
    }
  },
})
</script>
