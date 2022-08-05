<template>
  <div class="progress" :style="{height}">
    <slot>
      <b-progress-bar
        v-bind="{
          animated: animatedBoolean,
          max,
          precision,
          showProgress: showProgressBoolean,
          showValue: showValueBoolean,
          striped: stripedBoolean,
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
import type {Booleanish, ColorVariant} from '../../types'
import {resolveBooleanish} from '../../utils'
import {computed, InjectionKey, provide} from 'vue'

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

const animatedBoolean = computed(() => resolveBooleanish(props.animated))
const showProgressBoolean = computed(() => resolveBooleanish(props.showProgress))
const showValueBoolean = computed(() => resolveBooleanish(props.showValue))
const stripedBoolean = computed(() => resolveBooleanish(props.striped))

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
