<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import {Breakpoint} from '../types'
import {computed, defineComponent, PropType} from 'vue'

export default defineComponent({
  name: 'BContainer',
  props: {
    fluid: {type: [Boolean, String] as PropType<boolean | Breakpoint>, default: false},
  },
  setup(props) {
    const classes = computed(() => ({
      container: !props.fluid,
      [`container-fluid`]: typeof props.fluid === 'boolean' && props.fluid,
      [`container-${props.fluid}`]: typeof props.fluid === 'string',
    }))

    return {
      classes,
    }
  },
})
</script>
