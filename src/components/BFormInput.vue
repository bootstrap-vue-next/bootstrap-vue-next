<template>
  <input
    :id="id"
    ref="input"
    :class="classes"
    :name="name || null"
    :form="form || null"
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    :autocomplete="autocomplete || null"
    :readonly="readonly || plaintext"
    :min="min"
    :max="max"
    :step="step"
    :value="modelValue"
    :list="Array.isArray(list) && list.length ? computedId : null"
    :aria-required="required ? 'true' : null"
    :aria-invalid="computedAriaInvalid"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  >
  <datalist
    v-if="Array.isArray(list) && list.length"
    :id="computedId"
  >
    <option
      v-for="item in list"
      :key="item"
      :value="item"
    />
  </datalist>
</template>

<script lang="ts">
import { InputType, Size } from '../types';
import { computed, defineComponent, PropType } from 'vue'
import useId from '../composables/useId';

export default defineComponent({
  name: 'BFormInput',
  props: {
    ariaInvalid: {
      type: [Boolean, String] as PropType<boolean | 'false' | 'true' | 'grammar' | 'spelling'>,
      default: false
    },
    autocomplete: { type: String },
    disabled: { type: Boolean, default: false },
    form: { type: String },
    id: { type: String },
    list: { type: Array as PropType<string[]> },
    max: { type: [String, Number] },
    min: { type: [String, Number] },
    modelValue: { type: [String, Number], default: '' },
    name: { type: String },
    placeholder: { type: String },
    plaintext: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    size: { type: String as PropType<Size> },
    step: { type: [String, Number] },
    state: { type: Boolean as PropType<boolean | null | undefined>, default: null },
    type: { type: String as PropType<InputType>, default: 'text' },
  },
  emits: [
    'update:modelValue'
  ],
  setup(props) {
    const computedId = useId(props.id, 'input');
    const classes = computed(() => {
      const { plaintext, size, state, type } = props;
      const isRange = type === 'range';
      const isColor = type === 'color';
      return {
        'form-range': isRange,
        'form-control': isColor || (!plaintext && !isRange),
        'form-control-color': isColor,
        'form-control-plaintext': plaintext && !isRange && !isColor,
        [`form-control-${size}`]: size,
        'is-valid': state === true,
        'is-invalid': state === false
      }
    });

    const computedAriaInvalid = computed(() => {
      const { ariaInvalid, state } = props;
      if (ariaInvalid === true || ariaInvalid === 'true') {
        return 'true';
      }
      return state === false ? 'true' : ariaInvalid;
    });

    return {
      computedId,
      computedAriaInvalid,
      classes,
    }
  },
})
</script>
