<template>
  <li class="breadcrumb-item" :class="computedClasses">
    <component
      :is="computedTag"
      :aria-current="computedAriaCurrent"
      v-bind="computedLinkProps"
      @click="clicked"
    >
      <slot>
        {{ text }}
      </slot>
    </component>
  </li>
</template>

<script setup lang="ts">
import {pluckProps} from '../../utils'
import {useBooleanish} from '../../composables'
import {computed} from 'vue'
import BLink, {type BLinkProps} from '../BLink/BLink.vue'
import type {Booleanish} from '../../types'

defineSlots<{
  default?: Record<string, never>
}>()

const props = withDefaults(
  defineProps<
    {
      active?: Booleanish
      ariaCurrent?: string
      disabled?: Booleanish
      text?: string
    } & Omit<BLinkProps, 'event' | 'routerTag'>
  >(),
  {
    active: false,
    ariaCurrent: 'location',
    text: undefined,
    // Link props
    activeClass: 'router-link-active',
    append: false,
    disabled: false,
    event: 'click',
    href: undefined,
    // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
    rel: undefined,
    replace: false,
    routerComponentName: 'router-link',
    routerTag: 'a',
    target: '_self',
    to: undefined,
    variant: undefined,
    opacity: undefined,
    opacityHover: undefined,
    underlineVariant: null,
    underlineOffset: undefined,
    underlineOffsetHover: undefined,
    underlineOpacity: undefined,
    underlineOpacityHover: undefined,
    icon: false,
    // End link props
  }
)

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const activeBoolean = useBooleanish(() => props.active)
const disabledBoolean = useBooleanish(() => props.disabled)

const computedClasses = computed(() => ({
  active: activeBoolean.value,
}))

const computedTag = computed<'span' | typeof BLink>(() => (activeBoolean.value ? 'span' : BLink))

const computedAriaCurrent = computed(() => (activeBoolean.value ? props.ariaCurrent : undefined))

const computedLinkProps = computed(() =>
  computedTag.value !== 'span'
    ? pluckProps(props, {
        active: true,
        activeClass: true,
        append: true,
        disabled: true,
        href: true,
        rel: true,
        replace: true,
        routerComponentName: true,
        target: true,
        to: true,
        variant: true,
        opacity: true,
        opacityHover: true,
        underlineVariant: true,
        underlineOffset: true,
        underlineOffsetHover: true,
        underlineOpacity: true,
        underlineOpacityHover: true,
        icon: true,
      } as Record<keyof Omit<BLinkProps, 'event' | 'routerTag'>, true>)
    : {}
)

const clicked = (e: MouseEvent): void => {
  if (disabledBoolean.value || activeBoolean.value) {
    e.preventDefault()
    e.stopImmediatePropagation()
    return
  }
  if (!disabledBoolean.value) emit('click', e)
}
</script>
