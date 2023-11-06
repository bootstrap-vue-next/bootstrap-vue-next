<template>
  <component :is="tag" class="b-avatar-group" role="group">
    <div class="b-avatar-group-inner" :style="paddingStyle">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import {computed, provide, type StyleValue, toRef} from 'vue'
import type {Booleanish, ColorExtendables, RadiusElementExtendables, Size} from '../../types'
import {avatarGroupInjectionKey} from '../../utils'
import {useBooleanish} from '../../composables'
import {computeSize} from './BAvatar.vue'
import {useToNumber} from '@vueuse/core'

const props = withDefaults(
  defineProps<
    {
      overlap?: number | string
      size?: Size | string
      square?: Booleanish
      tag?: string
    } & ColorExtendables &
      RadiusElementExtendables
  >(),
  {
    overlap: 0.3,
    size: undefined,
    square: false,
    tag: 'div',
    // RadiusElementExtendables props
    rounded: false,
    roundedBottom: undefined,
    roundedEnd: undefined,
    roundedStart: undefined,
    roundedTop: undefined,
    // End RadiusElementExtendables props
    // ColorExtendables props
    bgVariant: null,
    textVariant: null,
    variant: null,
    // End ColorExtendables props
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const squareBoolean = useBooleanish(() => props.square)
const roundedBoolean = useBooleanish(() => props.rounded)
const roundedTopBoolean = useBooleanish(() => props.roundedTop)
const roundedBottomBoolean = useBooleanish(() => props.roundedBottom)
const roundedStartBoolean = useBooleanish(() => props.roundedStart)
const roundedEndBoolean = useBooleanish(() => props.roundedEnd)
const overlapNumber = useToNumber(() => props.overlap)

const computedSize = computed(() => computeSize(props.size))
const overlapScale = toRef(() => Math.min(Math.max(overlapNumber.value, 0), 1) / 2)

const paddingStyle = computed<StyleValue>(() => {
  const value = computedSize.value ? `calc(${computedSize.value} * ${overlapScale.value})` : null
  return value ? {paddingLeft: value, paddingRight: value} : {}
})

provide(avatarGroupInjectionKey, {
  overlapScale,
  size: toRef(() => props.size),
  square: squareBoolean,
  rounded: roundedBoolean,
  roundedTop: roundedTopBoolean,
  roundedBottom: roundedBottomBoolean,
  roundedStart: roundedStartBoolean,
  roundedEnd: roundedEndBoolean,
  variant: toRef(() => props.variant),
  bgVariant: toRef(() => props.bgVariant),
  textVariant: toRef(() => props.textVariant),
})
</script>
