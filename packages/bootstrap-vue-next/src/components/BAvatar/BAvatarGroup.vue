<template>
  <component :is="tag" class="b-avatar-group" role="group">
    <div class="b-avatar-group-inner" :style="paddingStyle">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import {computed, provide, type StyleValue, toRef} from 'vue'
import type {Booleanish, ColorVariant, Size} from '../../types'
import {avatarGroupInjectionKey} from '../../utils'
import {useBooleanish} from '../../composables'
import {computeSize} from './BAvatar.vue'
import {useToNumber} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    overlap?: number | string
    rounded?: boolean | string
    size?: Size | string
    square?: Booleanish
    tag?: string
    variant?: ColorVariant | null
  }>(),
  {
    overlap: 0.3,
    rounded: false,
    size: undefined,
    square: false,
    tag: 'div',
    variant: null,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const squareBoolean = useBooleanish(() => props.square)
const overlapNumber = useToNumber(() => props.overlap)

const computedSize = computed(() => computeSize(props.size))
const overlapScale = computed(() => Math.min(Math.max(overlapNumber.value, 0), 1) / 2)

const paddingStyle = computed<StyleValue>(() => {
  const value = computedSize.value ? `calc(${computedSize.value} * ${overlapScale.value})` : null
  return value ? {paddingLeft: value, paddingRight: value} : {}
})

provide(avatarGroupInjectionKey, {
  overlapScale,
  size: toRef(() => props.size),
  square: squareBoolean,
  rounded: toRef(() => props.rounded),
  variant: toRef(() => props.variant),
})
</script>
