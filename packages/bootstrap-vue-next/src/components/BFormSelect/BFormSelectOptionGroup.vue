<template>
  <optgroup :label="label">
    <slot name="first" />
    <!-- eslint-disable vue/no-v-text-v-html-on-component -->
    <!-- eslint-disable vue/no-v-html -->
    <!-- TODO these options don't seem right for the component -->
    <BFormSelectOption
      v-for="(option, index) in formOptions"
      :key="index"
      :value="(option as any).value"
      :disabled="(option as any).disabled"
      v-bind="$attrs"
      v-html="(option as any).html || (option as any).text"
    />
    <!--eslint-enable-->
    <slot />
  </optgroup>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import {normalizeOptions} from '../../composables'

const props = withDefaults(
  defineProps<{
    disabledField?: string
    htmlField?: string
    label?: string
    options?: unknown[] | Record<string, unknown>
    textField?: string
    valueField?: string
  }>(),
  {
    disabledField: 'disabled',
    htmlField: 'html',
    label: undefined,
    options: () => [],
    textField: 'text',
    valueField: 'value',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

// TODO this needs to be redone to fit the structure of BFormCheckboxGroup
const formOptions = computed(() =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  normalizeOptions(props.options as any[], 'BFormSelectOptionGroup', props)
)
</script>
