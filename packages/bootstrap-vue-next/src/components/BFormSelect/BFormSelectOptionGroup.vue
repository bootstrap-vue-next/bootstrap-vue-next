<template>
  <optgroup :label="label">
    <slot name="first" />
    <!-- eslint-disable vue/no-v-text-v-html-on-component -->
    <!-- eslint-disable vue/no-v-html -->
    <!-- TODO these options don't seem right for the component -->
    <b-form-select-option
      v-for="(option, index) in formOptions"
      :key="index"
      :value="option.value"
      :disabled="option.disabled"
      v-bind="$attrs"
      v-html="option.html || option.text"
    />
    <!--eslint-enable-->
    <slot />
  </optgroup>
</template>

<script setup lang="ts">
// import type {BFormSelectOptionGroupProps} from '../../types/components'
import {computed} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import {normalizeOptions} from '../../composables'

interface BFormSelectOptionGroupProps {
  label?: string
  disabledField?: string
  htmlField?: string
  options?: Array<unknown> | Record<string, unknown>
  textField?: string
  valueField?: string
}

const props = withDefaults(defineProps<BFormSelectOptionGroupProps>(), {
  disabledField: 'disabled',
  htmlField: 'html',
  options: () => [],
  textField: 'text',
  valueField: 'value',
})

const formOptions = computed(() =>
  normalizeOptions(props.options as Array<any>, 'BFormSelectOptionGroup', props)
)
</script>
