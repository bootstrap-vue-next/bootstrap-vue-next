<template>
  <option :value="value" :disabled="disabledBoolean">
    <slot />
  </option>
</template>

<script setup lang="ts">
// import type {BFormSelectOptionProps} from '../../types/components'
import {toRef} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish} from '../../types'

interface BFormSelectOptionProps {
  value?: unknown
  disabled?: Booleanish
}

const props = withDefaults(defineProps<BFormSelectOptionProps>(), {
  disabled: false,
})

const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
</script>
