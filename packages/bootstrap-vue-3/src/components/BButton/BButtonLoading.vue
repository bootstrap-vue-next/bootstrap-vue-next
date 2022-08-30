<template>
  <div
    v-if="loading"
    class="btn-loading"
    :class="{'mode-fill': mode == 'fill', 'mode-inline': mode == 'inline'}"
  >
    <slot v-if="loading">
      <BSpinner class="btn-spinner" :small="size !== 'lg'"></BSpinner>
    </slot>
  </div>
</template>

<script setup lang="ts">
import {InputSize} from 'src/types'

type Props = {
  loading: boolean
  mode: 'fill' | 'inline'
  size: InputSize
}
const props = defineProps<Props>()
</script>
