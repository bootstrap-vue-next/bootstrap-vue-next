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
import type {BFormFloatingLabelSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BFormFloatingLabelProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<BFormFloatingLabelProps>(), {
  label: undefined,
  labelFor: undefined,
  text: undefined,
})
const props = useDefaults(_props, 'BFormFloatingLabel')
defineSlots<BFormFloatingLabelSlots>()
</script>
