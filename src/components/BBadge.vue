<template>
  <component :is="tag" class="badge" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant} from '../types'

export default defineComponent({
  name: 'BBadge',
  props: {
    textIndicator: {type: Boolean, default: false},
    dotIndicator: {type: Boolean, default: false},
    pill: {type: Boolean, default: false},
    tag: {type: String, default: 'span'},
    variant: {type: String as PropType<ColorVariant>, default: 'secondary'},
  },
  setup(props) {
    const classes = computed(() => ({
      [`bg-${props.variant}`]: props.variant,
      'text-dark': ['warning', 'info', 'light'].includes(props.variant),
      'rounded-pill': props.pill,
      'position-absolute top-0 start-100 translate-middle':
        props.textIndicator || props.dotIndicator,
      'p-2 border border-light rounded-circle': props.dotIndicator,
    }))

    return {
      classes,
    }
  },
})
</script>
