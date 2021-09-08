<template>
  <div :class="classes">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-focus="autofocus"
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
      @click.stop="handleClick($event.target.checked)"
    />
    <label v-if="$slots.default || !plain" :for="computedId" :class="labelClasses">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import {getClasses, getInputClasses, getLabelClasses} from '../../composables/useFormCheck'
import {computed, defineComponent, PropType} from 'vue'
import {InputSize} from '../../types'
import useId from '../../composables/useId'

export default defineComponent({
  name: 'BFormCheckbox',
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
    uncheckedValue: {type: [String, Boolean], default: false},
    value: {type: [String, Boolean, Object], default: true},
    modelValue: {type: [Boolean, String, Array], default: null},
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, {emit}) {
    const computedId = useId(props.id, 'form-check')

    const checkedVal = computed({
      get: () => props.modelValue,
      set: (newValue: any) => {
        emit('update:modelValue', newValue)
        emit('change', newValue)
      },
    })

    const isChecked = computed(() => props.modelValue === props.value)

    const classes = getClasses(props)
    const inputClasses = getInputClasses(props)
    const labelClasses = getLabelClasses(props)

    const handleClick = (checked: any) => {
      if (!Array.isArray(props.modelValue)) {
        checkedVal.value = checked ? props.value : props.uncheckedValue
      } else {
        const tempArray = props.modelValue
        if (checked) {
          const index = tempArray.indexOf(props.value)
          if (index < 0) {
            tempArray.push(props.value)
          }
        } else {
          const index = tempArray.indexOf(props.value)
          if (index > -1) {
            tempArray.splice(index, 1)
          }
        }
        checkedVal.value = tempArray
      }
    }
    return {
      computedId,
      classes,
      inputClasses,
      labelClasses,
      checkedVal,
      isChecked,
      handleClick,
    }
  },
})
</script>
