<template>
  <component :is="tag" class="b-avatar-group" role="group">
    <div class="b-avatar-group-inner" :style="paddingStyle">
      <slot />
    </div>
  </component>
</template>
<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  InjectionKey,
  PropType,
  provide,
  StyleValue,
} from 'vue'
import {ColorVariant, InputSize} from '../../types'
import {mathMax, mathMin} from '../../utils/math'
import {toFloat} from '../../utils/number'
import {computeSize} from './BAvatar.vue'
import {isNumeric, isString} from '../../utils/inspect'

export interface ParentData {
  overlapScale: ComputedRef<number>
  size: InputSize | string | undefined
  square: boolean
  rounded: boolean | string
  variant: ColorVariant | undefined
}

export const injectionKey: InjectionKey<ParentData> = Symbol()

export default defineComponent({
  name: 'BAvatar',
  props: {
    overlap: {type: [Number, String], default: 0.3},
    rounded: {type: [Boolean, String], default: false},
    size: {type: String as PropType<InputSize | string>, required: false},
    square: {type: Boolean, default: false},
    tag: {type: String, default: 'div'},
    variant: {type: String as PropType<ColorVariant>, required: false},
  },
  setup(props) {
    const computedSize = computed(() => computeSize(props.size))

    const computeOverlap = (value: any): number => {
      const calcValue = isString(value) && isNumeric(value) ? toFloat(value, 0) : value || 0
      return calcValue
    }
    const overlapScale = computed(() => mathMin(mathMax(computeOverlap(props.overlap), 0), 1) / 2)

    const paddingStyle = computed((): StyleValue => {
      let {value} = computedSize
      value = value ? `calc(${value} * ${overlapScale.value})` : null
      return value ? {paddingLeft: value, paddingRight: value} : {}
    })

    provide(injectionKey, {
      overlapScale,
      size: props.size,
      square: props.square,
      rounded: props.rounded,
      variant: props.variant,
    })

    return {
      paddingStyle,
    }
  },
})
</script>
