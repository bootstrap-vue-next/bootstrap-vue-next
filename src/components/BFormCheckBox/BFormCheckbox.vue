<template>
  <div
    :class="classes"
  >
    <input
      :id="id"
      v-bind="$attrs"
      ref="input"
      :class="inputClasses"
      type="checkbox"
      :disabled="disabled"
      :required="isRequired"
      :name="name"
      :form="form"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :value="value"
      :indeterminate="indeterminate"
      :checked="isChecked"
      @click="toggleChecked()"
      @focus="focus()"
      @blur="blur()"
      @input="(event) => onInput(event)"
    >
    <label
      v-if="$slots.default || !plain"
      :class="labelClasses"
      @click="toggleChecked()"
      @focus="focus()"
      @blur="blur()"
    >
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import {handleUpdate, useFormCheck} from "@/composables/useFormCheck";
import {defineComponent, onUpdated, PropType, SetupContext} from "vue";
import {InputSize} from "../../types";

export default defineComponent({
  name: "BFormCheckbox",
  props: {
    id: { type: String },
    ariaLabel: { type: String },
    ariaLabelledBy: { type: String },
    autofocus: { type: Boolean, default: false },
    checked: { type: [Boolean, String, Array], default: null },
    plain: { type: Boolean, default: true },
    button: { type: Boolean, default: false },
    switch: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    buttonVariant: { type: String, default: "secondary" },
    form: { type: String },
    indeterminate: { type: Boolean },
    inline: { type: Boolean, default: false },
    name: { type: String },
    required: { type: Boolean, default: undefined },
    size: { type: String as PropType<InputSize>, default: "md" },
    state: { type: Boolean, default: null },
    uncheckedValue: { type: [String, Boolean], default: false },
    value: { type: [String, Boolean, Object], default: null }
  },
  emits: ["update:modelValue", "input", "change"],
  setup(props, {emit}: SetupContext) {
    const {
      computedId,
      classes,
      inputClasses,
      labelClasses, isChecked,
      isRequired,
      toggleChecked,
      focus,
      blur,
      onInput,
      localChecked,
      input
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
        emit);
    onUpdated(() => {
      handleUpdate(isChecked, props.checked, props.value, props.uncheckedValue, localChecked, emit)

    });

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
      localChecked
    }
  }
});
</script>

<style scoped>

</style>