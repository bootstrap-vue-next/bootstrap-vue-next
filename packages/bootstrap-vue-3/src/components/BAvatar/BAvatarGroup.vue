<template>
  <component :is="tag" class="b-avatar-group" role="group">
    <div class="b-avatar-group-inner" :style="paddingStyle">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
// import type { BAvatarGroupParentData, BAvatarGroupProps, InputSize } from '../types/components'
import type {BAvatarGroupParentData} from '../../types/components'
import {computed, InjectionKey, provide, type StyleValue, toRef} from 'vue'
import type {Booleanish, ColorVariant} from '../../types'
import {isNumeric, toFloat} from '../../utils'
import {useBooleanish} from '../../composables'
import {computeSize} from './BAvatar.vue'

interface BAvatarGroupProps {
  overlap?: number | string
  rounded?: boolean | string
  size?: 'sm' | 'md' | 'lg' | string // size?: InputSize | string
  square?: Booleanish
  tag?: string
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BAvatarGroupProps>(), {
  overlap: 0.3,
  rounded: false,
  square: false,
  tag: 'div',
})

const squareBoolean = useBooleanish(toRef(props, 'square'))

const computedSize = computed<string | null>(() => computeSize(props.size))

const overlapScale = computed<number>(
  () => Math.min(Math.max(computeOverlap(props.overlap), 0), 1) / 2
)

const paddingStyle = computed<StyleValue>(() => {
  const value = computedSize.value ? `calc(${computedSize.value} * ${overlapScale.value})` : null
  return value ? {paddingLeft: value, paddingRight: value} : {}
})

const computeOverlap = (value: any): number =>
  typeof value === 'string' && isNumeric(value) ? toFloat(value, 0) : value || 0

provide<BAvatarGroupParentData>(injectionKey, {
  overlapScale,
  size: props.size,
  square: squareBoolean.value,
  rounded: props.rounded,
  variant: props.variant,
})
</script>

<script lang="ts">
export const injectionKey: InjectionKey<BAvatarGroupParentData> = Symbol()
</script>
