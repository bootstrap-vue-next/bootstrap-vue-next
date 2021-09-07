<template>
  <div :class="classes">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      :class="inputClasses"
      type="checkbox"
      :disabled="disabled"
      :required="name && required"
      :name="name"
      :form="form"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :aria-required="required ? 'true' : null"
      :value="value"
      :indeterminate="indeterminate"
      :checked="isChecked"
      v-focus="autofocus"
      @click.stop="checkedVal = ($event.target.checked) ? value : uncheckedValue"
    >
    <label v-if="$slots.default || !plain" :for="computedId" :class="labelClasses">
      <slot/>
    </label>
  </div>
</template>

<script lang="ts">
import {useFormCheck} from '../../composables/useFormCheck'
import {computed, defineComponent, PropType} from 'vue'
import {InputSize} from '../../types'

export default defineComponent({
  name: 'BFormCheckbox',
  props: {
    id: { type: String, default: undefined },
    ariaLabel: { type: String },
    ariaLabelledBy: { type: String },
    autofocus: { type: Boolean, default: false },
    plain: {type: Boolean, default: false},
    button: { type: Boolean, default: false },
    switch: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    buttonVariant: {type: String, default: 'secondary'},
    form: { type: String },
    indeterminate: { type: Boolean },
    inline: { type: Boolean, default: false },
    name: { type: String },
    required: { type: Boolean, default: undefined },
    size: {type: String as PropType<InputSize>, default: 'md'},
    state: { type: Boolean, default: null },
    uncheckedValue: { type: [String, Boolean], default: false },
    value: {type: [String, Boolean, Object], default: false},
    modelValue: {type: [Boolean, String, Array], default: null},
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, {emit}) {

    const checkedVal = computed({
      get: () => props.modelValue,
      set: (newValue: any) => {
        emit('update:modelValue', newValue);
        emit('change', newValue)
      }
    })

    const isChecked = computed(() => props.modelValue === props.value);

    const {
      computedId,
      classes,
      inputClasses,
      labelClasses
    } = useFormCheck(
        props.id,
        props.autofocus,
        props.plain,
        props.button,
        props.inline,
        props.switch,
        props.state,
        props.modelValue,
        props.value,
        props.buttonVariant,
        props.uncheckedValue,
        props.name,
        props.required,
        props.disabled,
        emit
    )

    return {
      computedId,
      classes,
      inputClasses,
      labelClasses,
      checkedVal,
      isChecked
    }
  }
});
</script>
