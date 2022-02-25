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
    gutterX: {type: String, default: null},
    gutterY: {type: String, default: null},
    fluid: {type: [Boolean, String] as PropType<boolean | Breakpoint>, default: false},
  },
  setup(props) {
    const classes = computed(() => ({
      container: !props.fluid,
      [`container-fluid`]: typeof props.fluid === 'boolean' && props.fluid,
      [`container-${props.fluid}`]: typeof props.fluid === 'string',
      [`gx-${props.gutterX}`]: props.gutterX !== null,
      [`gy-${props.gutterY}`]: props.gutterY !== null,
    }))

    return {
      classes,
    }
  },
})
</script>
