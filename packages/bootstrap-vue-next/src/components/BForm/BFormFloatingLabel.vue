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
import {inject} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {useProvideFormGroupData} from '../../composables/useProvideFormGroupData'
import {formGroupKey} from '../../utils/keys'

const _props = withDefaults(defineProps<BFormFloatingLabelProps>(), {
  label: undefined,
  labelFor: undefined,
  text: undefined,
})
const props = useDefaults(_props, 'BFormFloatingLabel')
defineSlots<BFormFloatingLabelSlots>()

// Boundary: BFormFloatingLabel renders its own <label for>. State/disabled forward through
// from the outer BFormGroup; the isolated label-target registry isn't read, so descendant
// claims never reach the outer group.
const parentFormGroupData = inject(formGroupKey, null)?.()
if (parentFormGroupData) useProvideFormGroupData(parentFormGroupData)
</script>
