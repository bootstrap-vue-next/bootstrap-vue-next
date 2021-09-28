<template>
  <optgroup :label="label">
    <slot name="first" />
    <!-- eslint-disable vue/no-v-html -->
    <b-form-select-option
      v-for="(option, index) in formOptions"
      :key="`option_${index}`"
      :value="option.value"
      :disabled="option.disabled"
      v-bind="$attrs"
      v-text="option.text"
      v-html="option.html"
    />
    <!--eslint-enable-->
    <slot />
  </optgroup>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import {normalizeOptions} from '../../composables/useFormSelect'

export default defineComponent({
  name: 'BFormSelectOptionGroup',
  components: {BFormSelectOption},
  props: {
    label: {type: String, required: true},
    disabledField: {type: String, default: 'disabled'},
    htmlField: {type: String, default: 'html'},
    options: {type: [Array, Object], default: () => []},
    textField: {type: String, default: 'text'},
    valueField: {type: String, default: 'value'},
  },
  setup(props) {
    const formOptions = computed(() =>
      normalizeOptions(props.options as any, 'BFormSelectOptionGroup', props)
    )

    return {
      formOptions,
    }
  },
})
</script>
