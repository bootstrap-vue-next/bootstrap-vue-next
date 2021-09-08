<template>
  <div :class="classes">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      :class="inputClasses"
      type="radio"
      :disabled="disabled"
      :required="name && required"
      :name="name"
      :form="form"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :value="value"
      :checked="isChecked"
      :aria-required="required ? 'true' : null"
      v-focus="autofocus"
      @click.stop="checkedVal = ($event.target.checked) ? value : null"
    />
    <label v-if="$slots.default || !plain" :for="computedId" :class="labelClasses">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import { getClasses, getInputClasses, getLabelClasses} from '../../composables/useFormCheck'
import {computed, defineComponent} from 'vue'
import useId from "../../composables/useId";

export default defineComponent({
  name: 'BFormRadio',
  emits: [
    'update:modelValue',
    'change'
  ],
  props: {
    ariaLabel: {type: String},
    ariaLabelledBy: {type: String},
    autofocus: {type: Boolean, default: false},
    button: {type: Boolean, default: false},
    buttonVariant: {type: String},
    disabled: {type: Boolean, default: false},
    form: {type: String},
    id: {type: String},
    inline: {type: Boolean, default: false},
    name: {type: String},
    plain: {type: Boolean, default: false},
    required: {type: Boolean, default: false},
    size: {type: String},
    state: {type: Boolean, default: null},
    value: {type: [String, Boolean, Object, Number]}, // any
    modelValue: {type: [Boolean, String, Array, Object], default: null},
  },
  setup(props, {emit}) {
     const computedId = useId(props.id, 'form-check')

     const checkedVal = computed({
      get: () => props.modelValue,
      set: (newValue: any) => {
        emit('update:modelValue', newValue);
        emit('change', newValue)
      }
    })

    const isChecked = computed(() => props.modelValue !== null);

    const classes = getClasses(props);
    const inputClasses = getInputClasses(props);
    const labelClasses = getLabelClasses(props);

    return {
      checkedVal,
      computedId,
      classes,
      inputClasses,
      labelClasses,
      isChecked
    }
  },
})
</script>
