<template>
  <div :class="classes">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-model="localValue"
      :class="inputClasses"
      type="radio"
      :disabled="disabled"
      :required="name && required"
      :name="name"
      :form="form"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :value="value"
      :aria-required="name && required ? 'true' : null"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <label
      v-if="$slots.default || !plain"
      :for="computedId"
      :class="[labelClasses, {active: isChecked, focus: isFocused}]"
    >
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import {getClasses, getInputClasses, getLabelClasses} from '../../composables/useFormCheck'
import {computed, defineComponent, onMounted, PropType, Ref, ref} from 'vue'
import useId from '../../composables/useId'

export default defineComponent({
  name: 'BFormRadio',
  props: {
    ariaLabel: {type: String},
    ariaLabelledBy: {type: String},
    autofocus: {type: Boolean, default: false},
    modelValue: {type: [Boolean, String, Array, Object, Number], default: null},
    plain: {type: Boolean, default: false},
    button: {type: Boolean, default: false},
    switch: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    buttonVariant: {type: String, default: 'secondary'},
    form: {type: String},
    id: {type: String},
    inline: {type: Boolean, default: false},
    name: {type: String},
    required: {type: Boolean, default: false},
    size: {type: String},
    state: {type: Boolean as PropType<boolean | null | undefined>, default: null},
    value: {type: [String, Boolean, Object, Number], default: true},
  },
  emits: ['update:modelValue', 'change', 'input'],
  setup(props, {emit}) {
    const computedId = useId(props.id, 'form-check')
    const input: Ref<HTMLElement> = ref(null as unknown as HTMLElement)
    const isFocused = ref(false)

    const localValue: any = computed({
      get: () => (Array.isArray(props.modelValue) ? props.modelValue[0] : props.modelValue),
      set: (newValue: any) => {
        const value = newValue ? props.value : false
        const emitValue = Array.isArray(props.modelValue) ? [value] : value
        emit('input', emitValue)
        emit('change', emitValue)
        emit('update:modelValue', emitValue)
      },
    })

    const isChecked = computed(() => {
      if (Array.isArray(props.modelValue)) {
        return (props.modelValue || []).find((e) => e === props.value)
      }
      return JSON.stringify(props.modelValue) === JSON.stringify(props.value)
    })

    const classes = getClasses(props)
    const inputClasses = getInputClasses(props)
    const labelClasses = getLabelClasses(props)

    // TODO: make tests compatible with the v-focus directive
    if (props.autofocus) {
      onMounted(() => {
        input.value.focus()
      })
    }

    return {
      localValue,
      computedId,
      classes,
      inputClasses,
      labelClasses,
      isChecked,
      isFocused,
      input,
    }
  },
})
</script>
