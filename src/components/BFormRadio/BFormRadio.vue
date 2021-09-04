<template>
  <div :class="classes">
    <input
      :id="computedId"
      ref="input"
      :class="inputClasses"
      type="radio"
      :name="name"
      :form="form"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      :required="isRequired"
      :aria-required="required ? 'true' : null"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :indeterminate="indeterminate"
      v-bind="$attrs"
      @click="toggleChecked()"
      @focus="focus()"
      @blur="blur()"
      @input="(event) => onInput(event)"
    />
    <label
      v-if="$slots.default || !plain"
      :class="labelClasses"
      :for="id"
      @click="toggleChecked()"
      @focus="focus()"
      @blur="blur()"
    >
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import {handleUpdate, useFormCheck} from '@/composables/useFormCheck'
import {defineComponent, onUpdated, PropType, SetupContext} from 'vue'

export default defineComponent({
  name: 'BFormRadio',
  props: {
    ariaLabel: {type: String},
    ariaLabelledBy: {type: String},
    autofocus: {type: Boolean, default: false},
    checked: {type: [Boolean, String, Array], default: null},
    plain: {type: Boolean, default: false},
    button: {type: Boolean, default: false},
    switch: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    buttonVariant: {type: String, default: 'secondary'},
    form: {type: String},
    id: {type: String},
    indeterminate: {type: Boolean},
    inline: {type: Boolean, default: false},
    name: {type: String},
    required: {type: Boolean, default: false},
    size: {type: String},
    state: {type: Boolean as PropType<boolean | null | undefined>, default: null},
    uncheckedValue: {type: [String, Boolean], default: false},
    value: {type: [String, Boolean, Object], default: false},
  },
  emits: ['update:modelValue', 'input', 'change'],

  setup(props, {emit}: SetupContext) {
    const {
      computedId,
      classes,
      inputClasses,
      labelClasses,
      isChecked,
      isRequired,
      toggleChecked,
      focus,
      blur,
      onInput,
      localChecked,
      input,
    } = useFormCheck(
      props.id,
      props.autofocus,
      props.plain,
      props.button,
      props.inline,
      props.switch,
      props.state,
      props.checked,
      props.value,
      props.buttonVariant,
      props.uncheckedValue,
      props.name,
      props.required,
      props.disabled,
      emit
    )
    onUpdated(() => {
      handleUpdate(isChecked, props.checked, props.value, props.uncheckedValue, localChecked, emit)
    })

    return {
      computedId,
      classes,
      inputClasses,
      labelClasses,
      isRequired,
      focus,
      blur,
      onInput,
      toggleChecked,
      input,
      isChecked,
      localChecked,
    }
  },
})
</script>
