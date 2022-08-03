<template>
  <component :is="computedTag" class="badge" :class="classes" v-bind="props">
    <slot />
  </component>
</template>

<script lang="ts">
import {isLink, omit, pluckProps, resolveBooleanish} from '../../utils'
import {computed, defineComponent, PropType} from 'vue'
import type {Booleanish, ColorVariant} from '../../types'
import {BLINK_PROPS} from '../BLink/BLink.vue'

const linkProps = omit(BLINK_PROPS, ['event', 'routerTag'])

export default defineComponent({
  props: {
    pill: {type: Boolean as PropType<Booleanish>, default: false},
    tag: {type: String, default: 'span'},
    variant: {type: String as PropType<ColorVariant>, default: 'secondary'},
    textIndicator: {type: Boolean as PropType<Booleanish>, default: false},
    dotIndicator: {type: Boolean as PropType<Booleanish>, default: false},
    ...linkProps,
  },
  setup(props) {
    const link = computed<boolean>(() => isLink(props))
    const computedTag = computed<string>(() => (link.value ? 'b-link' : props.tag))

    const booleanPill = computed(() => resolveBooleanish(props.pill))
    const booleanTextIndicator = computed(() => resolveBooleanish(props.textIndicator))
    const booleanDotIndicator = computed(() => resolveBooleanish(props.dotIndicator))

    const classes = computed(() => ({
      [`bg-${props.variant}`]: props.variant,
      'active': props.active,
      'disabled': props.disabled,
      'text-dark': ['warning', 'info', 'light'].includes(props.variant),
      'rounded-pill': booleanPill.value,
      'position-absolute top-0 start-100 translate-middle':
        booleanTextIndicator.value || booleanDotIndicator.value,
      'p-2 border border-light rounded-circle': booleanDotIndicator.value,
      'text-decoration-none': link.value,
    }))

    return {
      classes,
      props: link.value ? pluckProps(linkProps, props) : {},
      computedTag,
    }
  },
})
</script>
