<template>
  <input
    :id="id"
    ref="element"
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
    @input="onInput($event)"
    @change="onChange($event)"
    @blur="onBlur($event)"
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
import { computed, defineComponent, nextTick, onActivated, onMounted, PropType, ref } from 'vue'
import useId from '../composables/useId';

export default defineComponent({
  name: 'BFormInput',
  props: {
    ariaInvalid: {
      type: [Boolean, String] as PropType<boolean | 'false' | 'true' | 'grammar' | 'spelling'>,
      default: false
    },
    autocomplete: { type: String },
    autofocus: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    form: { type: String },
    formatter: { type: Function },
    id: { type: String },
    lazyFormatter: { type: Boolean, default: false },
    list: { type: Array as PropType<string[]> },
    max: { type: [String, Number] },
    min: { type: [String, Number] },
    modelValue: { type: [String, Number], default: '' },
    name: { type: String },
    number: { type: Boolean, default: false },
    placeholder: { type: String },
    plaintext: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    size: { type: String as PropType<Size> },
    step: { type: [String, Number] },
    state: { type: Boolean as PropType<boolean | null | undefined>, default: null },
    trim: { type: Boolean, default: false },
    type: { type: String as PropType<InputType>, default: 'text' },
  },
  emits: [
    'update:modelValue',
    'change',
    'blur',
  ],
  setup(props, { emit }) {
    const element = ref<HTMLElement>();
    const computedId = useId(props.id, 'input');

    // lifecycle events
    const handleAutofocus = () => {
      nextTick(() => {
        if (props.autofocus)
          element.value?.focus();
      })
    };
    onMounted(handleAutofocus);
    onActivated(handleAutofocus);
    // /lifecycle events

    // computed
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
    // /computed

    // methods
    const formatValue = (value: unknown, evt: any, force = false) => {
      const { formatter, lazyFormatter } = props;
      value = String(value);
      if (typeof formatter === 'function' && (!lazyFormatter || force)) {
        value = formatter(value, evt);
      }
      return value;
    }

    const onInput = (evt: any) => {
      const { value } = evt.target;
      const formattedValue = formatValue(value, evt);
      if (formattedValue === false || evt.defaultPrevented) {
        evt.preventDefault();
        return;
      }
      emit('update:modelValue', value);
    }

    const onChange = (evt: any) => {
      const { value } = evt.target;
      const formattedValue = formatValue(value, evt);
      if (formattedValue === false || evt.defaultPrevented) {
        evt.preventDefault();
        return;
      }
      emit('change', formattedValue);
    }

    const onBlur = (evt: any) => {
      const { value } = evt.target;
      const { trim, number } = props;
      let formattedValue = formatValue(value, evt, true);
      if (formattedValue !== false) {
        if (trim) formattedValue = value.trim();
        if (number) formattedValue = String(parseFloat(value));
      }
      emit('blur', evt);
    }
    // /methods

    return {
      element,
      computedId,
      computedAriaInvalid,
      classes,
      onInput,
      onChange,
      onBlur,
    }
  },
})
</script>
