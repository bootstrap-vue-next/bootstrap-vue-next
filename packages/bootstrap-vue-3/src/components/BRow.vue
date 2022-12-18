<template>
  <component :is="tag" class="row" :class="computedClasses">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, type PropType, toRef} from 'vue'
import {getBreakpointProps, getClasses} from '../utils'
import type {Alignment, Booleanish} from '../types'
import {useAlignment, useBooleanish} from '../composables'

const rowColsProps = getBreakpointProps('cols', [''], {type: [String, Number], default: null})

export default defineComponent({
  name: 'BRow',
  props: {
    tag: {type: String, default: 'div'},
    gutterX: {type: String, default: null},
    gutterY: {type: String, default: null},
    noGutters: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    alignV: {type: String as PropType<Alignment.Vertical>, default: null},
    alignH: {type: String as PropType<Alignment.JustifyContent>, default: null},
    alignContent: {type: String as PropType<Alignment.Content>, default: null},
    ...rowColsProps,
  },
  setup(props) {
    const noGuttersBoolean = useBooleanish(toRef(props, 'noGutters'))
    const alignment = useAlignment(toRef(props, 'alignH'))

    const rowColsClasses = computed(() => getClasses(props, rowColsProps, 'cols', 'row-cols'))

    const computedClasses = computed(() => [
      rowColsClasses.value,
      {
        [`gx-${props.gutterX}`]: props.gutterX !== null,
        [`gy-${props.gutterY}`]: props.gutterY !== null,
        'g-0': noGuttersBoolean.value,
        [`align-items-${props.alignV}`]: props.alignV !== null,
        [alignment.value]: props.alignH !== null,
        [`align-content-${props.alignContent}`]: props.alignContent !== null,
      },
    ])

    return {
      computedClasses,
    }
  },
})
</script>
