<template>
  <component :is="props.tag" class="b-avatar-group" role="group">
    <div class="b-avatar-group-inner" :style="paddingStyle">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import {computed, provide, type StyleValue, toRef} from 'vue'
import type {BAvatarGroupProps} from '../../types'
import {avatarGroupInjectionKey} from '../../utils'
import {useDefaults, useNumberishToStyle} from '../../composables'
import {useToNumber} from '@vueuse/core'

const _props = withDefaults(defineProps<BAvatarGroupProps>(), {
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
})
const props = useDefaults(_props, 'BAvatarGroup')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const overlapNumber = useToNumber(() => props.overlap)

const computedSize = useNumberishToStyle(() => props.size)
const overlapScale = toRef(() => Math.min(Math.max(overlapNumber.value, 0), 1) / 2)

const paddingStyle = computed<StyleValue>(() => {
  const value = computedSize.value ? `calc(${computedSize.value} * ${overlapScale.value})` : null
  return value ? {paddingLeft: value, paddingRight: value} : {}
})

provide(avatarGroupInjectionKey, {
  overlapScale,
  size: toRef(() => props.size),
  square: toRef(() => props.square),
  rounded: toRef(() => props.rounded),
  roundedTop: toRef(() => props.roundedTop),
  roundedBottom: toRef(() => props.roundedBottom),
  roundedStart: toRef(() => props.roundedStart),
  roundedEnd: toRef(() => props.roundedEnd),
  variant: toRef(() => props.variant),
  bgVariant: toRef(() => props.bgVariant),
  textVariant: toRef(() => props.textVariant),
})
</script>
