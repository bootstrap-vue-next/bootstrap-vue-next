<template>
  <div class="progress" :style="{height}">
    <slot>
      <b-progress-bar
        v-bind="{
          animated,
          max,
          precision,
          showProgress,
          showValue,
          striped,
          value,
          variant,
        }"
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
// import type {BProgressProps} from '../types/components'
import BProgressBar from './BProgressBar.vue'
import type {ColorVariant} from '../types'
import {InjectionKey, provide} from 'vue'

interface BProgressProps {
  variant?: ColorVariant
  max?: number | string
  height?: string
  animated?: boolean
  precision?: number | string
  showProgress?: boolean
  showValue?: boolean
  striped?: boolean
  value?: number | string
}

const props = withDefaults(defineProps<BProgressProps>(), {
  animated: false,
  precision: 0,
  showProgress: false,
  showValue: false,
  striped: false,
  value: 0,
})

provide(injectionKey, {
  animated: props.animated,
  max: props.max,
  showProgress: props.showProgress,
  showValue: props.showValue,
  striped: props.striped,
})
</script>

<script lang="ts">
import type {BProgressParentData} from '../types/components'
export const injectionKey: InjectionKey<BProgressParentData> = Symbol()
</script>
