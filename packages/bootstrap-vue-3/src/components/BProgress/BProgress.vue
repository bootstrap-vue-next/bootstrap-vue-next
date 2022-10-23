<template>
  <div class="progress" :style="{height}">
    <slot>
      <b-progress-bar v-bind="computedAttrs" />
    </slot>
  </div>
</template>

<script setup lang="ts">
// import type {BProgressProps} from '../types/components'
import BProgressBar from './BProgressBar.vue'
import type {Booleanish, ColorVariant} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, InjectionKey, provide, toRef} from 'vue'

interface BProgressProps {
  variant?: ColorVariant
  max?: number | string
  height?: string
  animated?: Booleanish
  precision?: number | string
  showProgress?: Booleanish
  showValue?: Booleanish
  striped?: Booleanish
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

const animatedBoolean = useBooleanish(toRef(props, 'animated'))
const showProgressBoolean = useBooleanish(toRef(props, 'showProgress'))
const showValueBoolean = useBooleanish(toRef(props, 'showValue'))
const stripedBoolean = useBooleanish(toRef(props, 'striped'))

const computedAttrs = computed(() => ({
  animated: props.animated,
  max: props.max,
  precision: props.precision,
  showProgress: props.showProgress,
  showValue: props.showValue,
  striped: props.striped,
  value: props.value,
  variant: props.variant,
}))

provide(injectionKey, {
  animated: animatedBoolean.value,
  max: props.max,
  showProgress: showProgressBoolean.value,
  showValue: showValueBoolean.value,
  striped: stripedBoolean.value,
})
</script>

<script lang="ts">
import type {BProgressParentData} from '../../types/components'
export const injectionKey: InjectionKey<BProgressParentData> = Symbol()
</script>
