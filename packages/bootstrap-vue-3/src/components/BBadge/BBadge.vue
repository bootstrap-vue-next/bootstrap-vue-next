<template>
  <component :is="computedTag" class="badge" :class="classes" v-bind="props">
    <slot />
  </component>
</template>

<script lang="ts">
import {isLink, omit, pluckProps} from '../../utils'
import {useBooleanish} from '../../composables'
import {computed, defineComponent, PropType, toRef} from 'vue'
import type {Booleanish, ColorVariant} from '../../types'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'

const linkProps = omit(BLINK_PROPS, ['event', 'routerTag'] as const)

export default defineComponent({
  components: {BLink},
  props: {
    pill: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    tag: {type: String, default: 'span'},
    variant: {type: String as PropType<ColorVariant>, default: 'secondary'},
    textIndicator: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    dotIndicator: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    ...linkProps,
  },
  setup(props) {
    const link = computed<boolean>(() => isLink(props))
    const computedTag = computed<string | typeof BLink>(() => (link.value ? BLink : props.tag))

    const pillBoolean = useBooleanish(toRef(props, 'pill'))
    const textIndicatorBoolean = useBooleanish(toRef(props, 'textIndicator'))
    const dotIndicatorBoolean = useBooleanish(toRef(props, 'dotIndicator'))

    const classes = computed(() => ({
      [`bg-${props.variant}`]: props.variant,
      'active': props.active,
      'disabled': props.disabled,
      'text-dark': ['warning', 'info', 'light'].includes(props.variant),
      'rounded-pill': pillBoolean.value,
      'position-absolute top-0 start-100 translate-middle':
        textIndicatorBoolean.value || dotIndicatorBoolean.value,
      'p-2 border border-light rounded-circle': dotIndicatorBoolean.value,
      'text-decoration-none': link.value,
    }))

    return {
      classes,
      props: link.value ? pluckProps(props, linkProps) : {},
      computedTag,
    }
  },
})
</script>
