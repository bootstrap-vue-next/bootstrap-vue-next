<template>
  <div
    v-if="loadingBoolean"
    class="btn-loading"
    :class="{'mode-fill': mode === 'fill', 'mode-inline': mode === 'inline'}"
  >
    <slot>
      <BSpinner class="btn-spinner" :small="size !== 'lg'"></BSpinner>
    </slot>
  </div>
</template>

<script setup lang="ts">
import {Booleanish, InputSize} from 'src/types'
import {toRef} from 'vue'
import {useBooleanish} from '../../composables'

type Props = {
  loading: Booleanish
  mode: 'fill' | 'inline'
  size: InputSize
}
const props = defineProps<Props>()

const loadingBoolean = useBooleanish(toRef(props, 'loading'))
</script>
