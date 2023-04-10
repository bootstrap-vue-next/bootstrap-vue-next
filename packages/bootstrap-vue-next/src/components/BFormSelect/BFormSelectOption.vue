<template>
  <option :value="value" :disabled="disabledBoolean">
    <slot />
  </option>
</template>

<script setup lang="ts">
import {toRef} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish} from '../../types'

interface BFormSelectOptionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any
  disabled?: Booleanish
}

const props = withDefaults(defineProps<BFormSelectOptionProps>(), {
  disabled: false,
  value: undefined,
})

const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
</script>
