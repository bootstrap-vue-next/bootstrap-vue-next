<template>
  <component :is="tag" class="b-avatar-group" role="group">
    <div class="b-avatar-group-inner" :style="paddingStyle">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
// import type { BAvatarGroupParentData, BAvatarGroupProps } from '../types/components'
import type {BAvatarGroupParentData} from '../../types/components'
import {computed, InjectionKey, provide, StyleValue} from 'vue'
import type {ColorVariant, InputSize} from '../../types'
import {mathMax, mathMin} from '../../utils/math'
import {toFloat} from '../../utils/number'
import {computeSize} from './BAvatar.vue'
import {isNumeric, isString} from '../../utils/inspect'

interface BAvatarGroupProps {
  overlap?: number | string
  rounded?: boolean | string
  size?: InputSize | string
  square?: boolean
  tag?: string
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BAvatarGroupProps>(), {
  overlap: 0.3,
  rounded: false,
  square: false,
  tag: 'div',
})

const computedSize = computed<string | null>(() => computeSize(props.size))

const computeOverlap = (value: any): number =>
  isString(value) && isNumeric(value) ? toFloat(value, 0) : value || 0

const overlapScale = computed<number>(
  () => mathMin(mathMax(computeOverlap(props.overlap), 0), 1) / 2
)

const paddingStyle = computed<StyleValue>(() => {
  let {value} = computedSize
  value = value ? `calc(${value} * ${overlapScale.value})` : null
  return value ? {paddingLeft: value, paddingRight: value} : {}
})

provide<BAvatarGroupParentData>(injectionKey, {
  overlapScale,
  size: props.size,
  square: props.square,
  rounded: props.rounded,
  variant: props.variant,
})
</script>

<script lang="ts">
export const injectionKey: InjectionKey<BAvatarGroupParentData> = Symbol()
</script>
