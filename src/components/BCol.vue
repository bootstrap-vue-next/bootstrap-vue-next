<template>
  <component :is="tag" :class="[classes, classList]">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import Alignment from '../types/Alignment'
import getBreakpointProps from '../utils/getBreakpointProps'
import getClasses from '../utils/getClasses'

const breakpointCol = getBreakpointProps('', [], {type: [Boolean, String, Number], default: false})
const breakpointOffset = getBreakpointProps('offset', [''], {type: [String, Number], default: null})
const breakpointOrder = getBreakpointProps('order', [''], {type: [String, Number], default: null})

export default defineComponent({
  name: 'BCol',
  props: {
    col: {type: Boolean, default: false}, // Generic flexbox .col (xs)
    cols: {type: [String, Number], default: null}, // .col-[1-12]|auto (xs)
    ...breakpointCol,
    offset: {type: [String, Number], default: null},
    ...breakpointOffset,
    order: {type: [String, Number], default: null},
    ...breakpointOrder,
    alignSelf: {type: String as PropType<Alignment.Vertical | 'auto'>, default: null},
    tag: {type: String, default: 'div'},
  },
  setup(props) {
    let classList: string[] = []

    const properties = [
      {content: breakpointCol, propPrefix: 'cols', classPrefix: 'col'},
      {content: breakpointOffset, propPrefix: 'offset'},
      {content: breakpointOrder, propPrefix: 'order'},
    ]

    properties.forEach((property) => {
      classList = classList.concat(
        getClasses(props, property.content, property.propPrefix, property.classPrefix)
      )
    })

    const classes = computed(() => ({
      col: props.col || !classList.some((e) => /^col-/.test(e) && !props.cols),
      [`col-${props.cols}`]: !!props.cols,
      [`offset-${props.offset}`]: !!props.offset,
      [`order-${props.order}`]: !!props.order,
      [`align-self-${props.alignSelf}`]: !!props.alignSelf,
    }))

    return {
      classes,
      classList,
    }
  },
})
</script>
