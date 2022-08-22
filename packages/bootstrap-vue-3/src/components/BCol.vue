<template>
  <component :is="tag" :class="[classes, classList]">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, toRef} from 'vue'
import type {Alignment, Booleanish} from '../types'
import {getBreakpointProps, getClasses} from '../utils'
import {useBooleanish} from '../composables'

const breakpointCol = getBreakpointProps('', [], {type: [Boolean, String, Number], default: false})
const breakpointOffset = getBreakpointProps('offset', [''], {type: [String, Number], default: null})
const breakpointOrder = getBreakpointProps('order', [''], {type: [String, Number], default: null})

export default defineComponent({
  name: 'BCol',
  props: {
    col: {type: [Boolean, String] as PropType<Booleanish>, default: false}, // Generic flexbox .col (xs)
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
    const colBoolean = useBooleanish(toRef(props, 'col'))

    const properties = [
      {content: breakpointCol, propPrefix: 'cols', classPrefix: 'col'},
      {content: breakpointOffset, propPrefix: 'offset'},
      {content: breakpointOrder, propPrefix: 'order'},
    ]

    const classList = computed(() =>
      properties.flatMap((el) => getClasses(props, el.content, el.propPrefix, el.classPrefix))
    )

    const classes = computed(() => ({
      col: colBoolean.value || !classList.value.some((e) => /^col-/.test(e) && !props.cols),
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
