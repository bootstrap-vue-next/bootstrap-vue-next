<template>
  <div class="progress" :style="{height}">
    <slot>
      <BProgressBar
        :animated="animated"
        :max="max"
        :precision="precision"
        :show-progress="showProgress"
        :show-value="showValue"
        :striped="striped"
        :value="value"
        :variant="variant"
        :text-variant="textVariant"
        :bg-variant="bgVariant"
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
import BProgressBar from './BProgressBar.vue'
import type {BProgressProps} from '../../types'
import {provide, toRef} from 'vue'
import {progressInjectionKey} from '../../utils'

const props = withDefaults(defineProps<BProgressProps>(), {
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
