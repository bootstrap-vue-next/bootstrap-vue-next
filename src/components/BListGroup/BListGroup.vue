<template>
  <component :is="tag" class="list-group" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {Breakpoint} from '../../types'

export default defineComponent({
  name: 'BListGroup',
  props: {
    flush: {type: Boolean, default: false},
    horizontal: {type: [Boolean, String] as PropType<boolean | Breakpoint>, default: false},
    numbered: {type: Boolean, default: false},
    tag: {type: String, default: 'div'},
  },
  setup(props) {
    const classes = computed(() => {
      const horizontal = props.flush ? false : props.horizontal
      return {
        'list-group-flush': props.flush,
        'list-group-horizontal': horizontal === true,
        [`list-group-horizontal-${horizontal}`]: typeof horizontal === 'string',
        'list-group-numbered': props.numbered,
      }
    })

    return {
      classes,
    }
  },
})
</script>
