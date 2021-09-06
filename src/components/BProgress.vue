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

<script lang="ts">
import {ColorVariant} from '../types'
import {defineComponent, InjectionKey, PropType, provide} from 'vue'

export interface ParentData {
  animated: boolean
  max: number | string
  showProgress: boolean
  showValue: boolean
  striped: boolean
}

export const injectionKey: InjectionKey<ParentData> = Symbol()

export default defineComponent({
  name: 'BProgress',
  props: {
    animated: {type: Boolean, default: false},
    max: {type: [Number, String]},
    height: {type: String},
    precision: {type: [Number, String], default: 0},
    showProgress: {type: Boolean, default: false},
    showValue: {type: Boolean, default: false},
    striped: {type: Boolean, default: false},
    value: {type: [Number, String], default: 0},
    variant: {type: String as PropType<ColorVariant>},
  },
  setup(props) {
    provide(injectionKey, {
      animated: props.animated,
      max: props.max,
      showProgress: props.showProgress,
      showValue: props.showValue,
      striped: props.striped,
    })
  },
})
</script>
