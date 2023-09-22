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
import {pick} from '../../utils'
import {useBooleanish} from '../../composables'
import {computed, toRef} from 'vue'
import BLink from '../BLink/BLink.vue'
import type {BLinkProps} from '../../types'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<
    {
      ariaCurrent?: string
      text?: string
    } & Omit<BLinkProps, 'event' | 'routerTag'>
  >(),
  {
    ariaCurrent: 'location',
    text: undefined,
    // Link props
    active: false,
    activeClass: undefined,
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

const computedTag = toRef(() => (activeBoolean.value ? 'span' : BLink))

const computedAriaCurrent = toRef(() => (activeBoolean.value ? props.ariaCurrent : undefined))

const computedLinkProps = computed(() =>
  computedTag.value !== 'span'
    ? pick(props, [
        'active',
        'activeClass',
        'append',
        'disabled',
        'href',
        'rel',
        'replace',
        'routerComponentName',
        'target',
        'to',
        'variant',
        'opacity',
        'opacityHover',
        'underlineVariant',
        'underlineOffset',
        'underlineOffsetHover',
        'underlineOpacity',
        'underlineOpacityHover',
        'icon',
      ])
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
