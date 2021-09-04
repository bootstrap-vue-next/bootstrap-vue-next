<template>
  <optgroup :label="label">
    <slot name="first" />
    <b-form-select-option
      v-for="(option, index) in formOptions"
      :key="`option_${index}`"
      :value="option.value"
      :disabled="option.disabled"
      v-bind="$attrs"
      v-text="option.text"
      v-html="option.html"
    />
    <slot />
  </optgroup>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'

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
    const formOptions = computed(() => normalizeOptions(props.options))

    const normalizeOption = (option: any, key = null) => {
      if (Object.prototype.toString.call(option) === '[object Object]') {
        const {valueField, textField, htmlField, disabledField} = props
        const value = option[valueField]
        const text = option[textField]
        return {
          value: typeof value === 'undefined' ? key || text : value,
          text: String(typeof value === 'undefined' ? key : text),
          html: option[htmlField],
          disabled: Boolean(option[disabledField]),
        }
      }
      return {
        value: key || option,
        text: String(option),
        disabled: false,
      }
    }
    const normalizeOptions = (options: any[]) => {
      if (Array.isArray(options)) {
        return options.map((option) => normalizeOption(option))
      }
      return []
    }

    return {
      formOptions,
    }
  },
})
</script>
