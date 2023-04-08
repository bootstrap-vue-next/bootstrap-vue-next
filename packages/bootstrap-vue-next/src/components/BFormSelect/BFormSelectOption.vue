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
  value?: unknown
  disabled?: Booleanish
}

const props = withDefaults(defineProps<BFormSelectOptionProps>(), {
  value: undefined,
  disabled: false,
})

const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
</script>
