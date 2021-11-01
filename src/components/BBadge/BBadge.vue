<template>
  <component :is="computedTag" class="badge" :class="classes" v-bind="props">
    <slot />
  </component>
</template>

<script lang="ts">
import {omit} from '../../utils/object'
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant} from '../../types'
import {BLINK_PROPS} from '../BLink/BLink.vue'
import {isLink} from '../../utils/router'
import {pluckProps} from '../../utils/props'

const linkProps = omit(BLINK_PROPS, ['event', 'routerTag'])

export default defineComponent({
  name: 'BBadge',
  props: {
    pill: {type: Boolean, default: false},
    tag: {type: String, default: 'span'},
    variant: {type: String as PropType<ColorVariant>, default: 'secondary'},
    textIndicator: {type: Boolean, default: false},
    dotIndicator: {type: Boolean, default: false},
    ...linkProps,
  },
  setup(props) {
    const link = computed(() => isLink(props))
    const computedTag = computed(() => (link.value ? 'b-link' : props.tag))

    const classes = computed(() => ({
      [`bg-${props.variant}`]: props.variant,
      'active': props.active,
      'disabled': props.disabled,
      'text-dark': ['warning', 'info', 'light'].includes(props.variant),
      'rounded-pill': props.pill,
      'position-absolute top-0 start-100 translate-middle':
        props.textIndicator || props.dotIndicator,
      'p-2 border border-light rounded-circle': props.dotIndicator,
      'text-decoration-none': link,
    }))

    return {
      classes,
      props: link.value ? pluckProps(linkProps, props) : {},
      computedTag,
    }
  },
})
</script>
