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
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
import BProgressBar from './BProgressBar.vue'
import type {BProgressBarProps} from '../../types'
import {useBooleanish} from '../../composables'
import {provide, toRef} from 'vue'
import {progressInjectionKey} from '../../utils'

const props = withDefaults(
  defineProps<
    {
      height?: string
    } & Omit<BProgressBarProps, 'label' | 'labelHtml'>
  >(),
  {
    variant: undefined,
    max: 100,
    height: undefined,
    animated: false,
    precision: 0,
    showProgress: false,
    showValue: false,
    striped: false,
    value: 0,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const animatedBoolean = useBooleanish(() => props.animated)
const showProgressBoolean = useBooleanish(() => props.showProgress)
const showValueBoolean = useBooleanish(() => props.showValue)
const stripedBoolean = useBooleanish(() => props.striped)

provide(progressInjectionKey, {
  animated: animatedBoolean,
  max: toRef(() => props.max),
  showProgress: showProgressBoolean,
  showValue: showValueBoolean,
  striped: stripedBoolean,
})
</script>
