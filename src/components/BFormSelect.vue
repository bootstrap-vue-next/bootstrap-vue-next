<template>
  <select
    :id="computedId"
    ref="input"
    :class="classes"
    :name="name"
    :form="form || null"
    :multiple="multiple || null"
    :size="computedSelectSize"
    :disabled="disabled"
    :required="required"
    :aria-required="required ? 'true' : null"
    :aria-invalid="computedAriaInvalid"
    v-bind="$attrs"
    :value="modelValue"
    @change="onChange($event)"
  >
    <slot name="first" />
    <template v-for="(option, index) in formOptions">
      <b-form-select-option-group
        v-if="Array.isArray(option.options)"
        :key="`option_${index}`"
        :label="option.label"
        :options="option.options"
      />
      <b-form-select-option
        v-else
        :key="`option_${index}`"
        :value="option.value"
        :disabled="option.disabled"
        v-text="option.text"
        v-html="option.html"
      />
    </template>
    <slot />
  </select>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onActivated,
  onMounted,
  PropType,
  ref,
} from "vue";
import BFormSelectOption from "./BFormSelectOption.vue";
import BFormSelectOptionGroup from "./BFormSelectOptionGroup.vue";
import useId from "../composables/useId";
import { Size } from "../types";

export default defineComponent({
  name: "BFormSelect",
  components: { BFormSelectOption, BFormSelectOptionGroup },
  props: {
    ariaInvalid: {
      type: [Boolean, String] as PropType<
        boolean | "false" | "true" | "grammar" | "spelling"
      >,
      default: false,
    },
    autofocus: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    disabledField: { type: String, default: "disabled" },
    form: { type: String },
    htmlField: { type: String, default: "html" },
    id: { type: String },
    labelField: { type: String, default: "label" },
    multiple: { type: Boolean, default: false },
    name: { type: String },
    options: { type: Array, default: () => [] },
    optionsField: { type: String, default: "options" },
    plain: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    selectSize: { type: Number, default: 0 },
    size: { type: String as PropType<Size> },
    state: {
      type: Boolean as PropType<boolean | null | undefined>,
      default: null,
    },
    textField: { type: String, default: "text" },
    valueField: { type: String, default: "value" },
    modelValue: { type: [String, Array], default: "" },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const input = ref<HTMLElement>();
    const computedId = useId(props.id, "input");

    // lifecycle events
    const handleAutofocus = () => {
      nextTick(() => {
        if (props.autofocus) input.value?.focus();
      });
    };
    onMounted(handleAutofocus);
    onActivated(handleAutofocus);
    // /lifecycle events

    // computed
    const classes = computed(() => {
      const { plain, size, state } = props;
      return {
        "form-control": plain,
        [`form-control-${size}`]: size && plain,
        "form-select": !plain,
        [`form-select-${size}`]: size && !plain,
        "is-valid": state === true,
        "is-invalid": state === false,
      };
    });

    const computedSelectSize = computed(() => {
      if (props.selectSize) {
        return props.selectSize;
      }

      return null;
    });

    const computedAriaInvalid = computed(() => {
      const { ariaInvalid, state } = props;
      if (ariaInvalid === true || ariaInvalid === "true") {
        return "true";
      }
      return state === false ? "true" : ariaInvalid;
    });

    const formOptions = computed(() => normalizeOptions(props.options));
    // /computed

    // methods
    const normalizeOption = (option: any, key = null) => {
      if (Object.prototype.toString.call(option) === "[object Object]") {
        const {
          valueField,
          textField,
          optionsField,
          labelField,
          htmlField,
          disabledField,
        } = props;
        const value = option[valueField];
        const text = option[textField];
        const options = option[optionsField] || null;
        if (options !== null) {
          return {
            label: String(option[labelField] || text),
            options: normalizeOptions(options),
          };
        }
        return {
          value: typeof value === "undefined" ? key || text : value,
          text: String(typeof value === "undefined" ? key : text),
          html: option[htmlField],
          disabled: Boolean(option[disabledField]),
        };
      }
      return {
        value: key || option,
        text: String(option),
        disabled: false,
      };
    };
    const normalizeOptions = (options: any[]): any => {
      if (Array.isArray(options)) {
        return options.map((option) => normalizeOption(option));
      }
      return [];
    };

    const onChange = (evt: any) => {
      const { target } = evt;
      const selectedVal = Array.from(target.options)
        .filter((o: any) => o.selected)
        .map((o: any) => ("_value" in o ? o._value : o.value));
      nextTick(() => {
        emit("change", target.multiple ? selectedVal : selectedVal[0]);
        emit(
          "update:modelValue",
          target.multiple ? selectedVal : selectedVal[0]
        );
      });
    };
    // /methods

    return {
      input,
      computedId,
      computedSelectSize,
      computedAriaInvalid,
      classes,
      onChange,
      formOptions,
    };
  },
});
</script>
