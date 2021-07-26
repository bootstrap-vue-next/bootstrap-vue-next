<template>
  <component
    :is="tag"
    class="row"
    :class="[classes, rowColsClasses]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

type CommonAlignment = 'start' | 'end' | 'center';
const breakpoints =  ['sm', 'md', 'lg', 'xl', 'xxl'];

const rowColsProps = [''].concat(breakpoints).reduce((props, breakpoint) => {
          props[`cols${breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)}`] = {type: [String, Number], default: null}
          return props
        }, Object.create(null));

const  rowColsPropList = Object.keys(rowColsProps);

export default defineComponent({
    name: 'BRow',
    props: {
        tag: { type: String, default: 'div' },
        gutterX: { type: String, default: null },
        gutterY: { type: String, default: null },
        alignV: { type: String as PropType<CommonAlignment | 'baseline' | 'stretch'>, default: null },
        alignH: { type: String as PropType<CommonAlignment | 'between' | 'around'>, default: null },
        alignContent: { type: String as PropType<CommonAlignment | 'between' | 'around' | 'stretch'>, default: null },
        ...rowColsProps
    },
    setup(props) {
      const rowColsClasses = rowColsPropList.reduce((arr : string[], prop) => {
          if (!props[prop]) return arr;

          arr.push(
               ['row-cols', prop.replace('cols', ''), props[prop]]
                   .filter((e) => e)
                   .join('-')
                   .toLowerCase()
          )
          return arr;
      }, [])

      const classes = computed(() => ({
          [`gx-${props.gutterX}`]: props.gutterX !== null,
          [`gy-${props.gutterY}`]: props.gutterY !== null,
          [`align-items-${props.alignV}`]: props.alignV,
          [`justify-content-${props.alignH}`]: props.alignH,
          [`align-content-${props.alignContent}`]: props.alignContent
      }))

      return {
        classes,
        rowColsClasses,
      }
    },
})
</script>
