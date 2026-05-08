<template>
  <div class="form-floating">
    <slot />
    <label :for="props.labelFor">
      <slot name="label">
        {{ props.label }}
      </slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import type {BFormFloatingLabelProps, BFormFloatingLabelSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'

const _props = withDefaults(defineProps<BFormFloatingLabelProps>(), {
  label: undefined,
  labelFor: undefined,
  text: undefined,
})
const props = useDefaults(_props, 'BFormFloatingLabel')
defineSlots<BFormFloatingLabelSlots>()
</script>
