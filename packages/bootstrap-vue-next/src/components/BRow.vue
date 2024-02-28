<template>
  <component :is="tag" class="row" :class="computedClasses">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, type PropType, type SlotsType} from 'vue'
import {getBreakpointProps, getClasses} from '../utils'
import type {
  AlignmentContent,
  AlignmentJustifyContent,
  AlignmentVertical,
  Booleanish,
} from '../types'
import {useAlignment, useBooleanish} from '../composables'

const rowColsProps = getBreakpointProps('cols', [''], {type: [String, Number], default: null})

export default defineComponent({
  name: 'BRow',
  slots: Object as SlotsType<{
    default?: Record<string, never>
  }>,
  props: {
    tag: {type: String, default: 'div'},
    gutterX: {type: String, default: null},
    gutterY: {type: String, default: null},
    noGutters: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    alignV: {type: String as PropType<AlignmentVertical>, default: null},
    alignH: {type: String as PropType<AlignmentJustifyContent>, default: null},
    alignContent: {type: String as PropType<AlignmentContent>, default: null},
    ...rowColsProps,
  },
  setup(props) {
    const noGuttersBoolean = useBooleanish(() => props.noGutters)
    const alignment = useAlignment(() => props.alignH)

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
