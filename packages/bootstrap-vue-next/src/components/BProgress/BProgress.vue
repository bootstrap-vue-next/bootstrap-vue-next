<template>
  <div class="progress" :style="{height: props.height}">
    <slot>
      <BProgressBar
        :animated="props.animated"
        :max="props.max"
        :precision="props.precision"
        :show-progress="props.showProgress"
        :show-value="props.showValue"
        :striped="props.striped"
        :value="props.value"
        :variant="props.variant"
        :text-variant="props.textVariant"
        :bg-variant="props.bgVariant"
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
import BProgressBar from './BProgressBar.vue'
import type {BProgressProps} from '../../types'
import {provide, toRef} from 'vue'
import {progressInjectionKey} from '../../utils'
import {useDefaults} from '../../composables'

const _props = withDefaults(defineProps<BProgressProps>(), {
  height: undefined,
  // BProgressBar props
  animated: undefined,
  bgVariant: undefined,
  max: 100,
  precision: undefined,
  showProgress: undefined,
  showValue: undefined,
  striped: undefined,
  textVariant: undefined,
  value: undefined,
  variant: undefined,
  // End BProgressBar props
})
const props = useDefaults(_props, 'BProgress')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

provide(progressInjectionKey, {
  animated: toRef(() => props.animated),
  max: toRef(() => props.max),
  showProgress: toRef(() => props.showProgress),
  showValue: toRef(() => props.showValue),
  striped: toRef(() => props.striped),
})
</script>
