<template>
  <option :value="value" :disabled="disabledBoolean">
    <slot />
  </option>
</template>

<script setup lang="ts">
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

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const disabledBoolean = useBooleanish(() => props.disabled)
</script>
