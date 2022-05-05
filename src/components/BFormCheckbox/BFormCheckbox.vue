<template>
  <div :class="classes">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-model="localValue"
      :class="inputClasses"
      type="checkbox"
      :disabled="disabled"
      :required="name && required"
      :name="name"
      :form="form"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :aria-required="name && required ? 'true' : null"
      :value="value"
      :indeterminate="indeterminate"
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
import {InputSize} from '../../types'
import useId from '../../composables/useId'

export default defineComponent({
  name: 'BFormCheckbox',
  inheritAttrs: false,
  props: {
    id: {type: String, default: undefined},
    ariaLabel: {type: String},
    ariaLabelledBy: {type: String},
    autofocus: {type: Boolean, default: false},
    plain: {type: Boolean, default: false},
    button: {type: Boolean, default: false},
    switch: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    buttonVariant: {type: String, default: 'secondary'},
    form: {type: String},
    indeterminate: {type: Boolean},
    inline: {type: Boolean, default: false},
    name: {type: String},
    required: {type: Boolean, default: undefined},
    size: {type: String as PropType<InputSize>, default: 'md'},
    state: {type: Boolean, default: null},
    uncheckedValue: {type: [Boolean, String, Array, Object, Number], default: false},
    value: {type: [Boolean, String, Array, Object, Number], default: true},
    modelValue: {type: [Boolean, String, Array, Object, Number], default: null},
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, {emit}) {
    const computedId = useId(props.id, 'form-check')
    const input: Ref<HTMLElement> = ref(null as unknown as HTMLElement)
    const isFocused = ref(false)

    const localValue = computed({
      get: () => {
        if (props.uncheckedValue) {
          if (!Array.isArray(props.modelValue)) {
            return props.modelValue === props.value
          }
          return props.modelValue.indexOf(props.value) > -1
        }
        return props.modelValue
      },
      set: (newValue: any) => {
        let emitValue = newValue
        if (!Array.isArray(props.modelValue)) {
          emitValue = newValue ? props.value : props.uncheckedValue
        } else {
          if (props.uncheckedValue) {
            emitValue = props.modelValue
            if (newValue) {
              if (emitValue.indexOf(props.uncheckedValue) > -1)
                emitValue.splice(emitValue.indexOf(props.uncheckedValue), 1)
              emitValue.push(props.value)
            } else {
              if (emitValue.indexOf(props.value) > -1)
                emitValue.splice(emitValue.indexOf(props.value), 1)
              emitValue.push(props.uncheckedValue)
            }
          }
        }
        emit('input', emitValue)
        emit('update:modelValue', emitValue)
        emit('change', emitValue)
      },
    })

    const isChecked = computed(() => {
      if (Array.isArray(props.modelValue)) {
        return props.modelValue.indexOf(props.value) > -1
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
      input,
      computedId,
      classes,
      inputClasses,
      labelClasses,
      localValue,
      isChecked,
      isFocused,
    }
  },
})
</script>
