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
      :aria-required="name && required ? 'true' : null"
      @click.stop="handleClick($event.target.checked)"
      @focus="focus"
      @blur="blur"
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
import {computed, defineComponent, onMounted, PropType, Ref, ref, watch} from 'vue'
import useId from '../../composables/useId'

export default defineComponent({
  name: 'BFormRadio',
  props: {
    ariaLabel: {type: String},
    ariaLabelledBy: {type: String},
    autofocus: {type: Boolean, default: false},
    modelValue: {type: [Boolean, String, Array, Object], default: null},
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
    value: {type: [String, Boolean, Object], default: true},
  },
  emits: ['update:modelValue', 'change', 'input'],
  setup(props, {emit}) {
    const computedId = useId(props.id, 'form-check')
    const input: Ref<HTMLElement> = ref(null as unknown as HTMLElement)
    const isFocused = ref(false)

    const localChecked: any = computed({
      get: () => props.modelValue,
      set: (newValue: any) => {
        emit('input', newValue)
        emit('change', newValue)
        emit('update:modelValue', newValue)
      },
    })

    const focus = () => {
      isFocused.value = true
      if (!props.disabled) input.value.focus()
    }

    const blur = () => {
      isFocused.value = false
      if (!props.disabled) {
        input.value.blur()
      }
    }

    const isChecked = computed(() => {
      const {value, modelValue} = props

      if (Array.isArray(modelValue)) {
        return (modelValue || []).find((e) => e === value)
      }
      return JSON.stringify(modelValue) === JSON.stringify(value)
    })

    const classes = getClasses(props)
    const inputClasses = getInputClasses(props)
    const labelClasses = getLabelClasses(props)

    const handleClick = async (checked: boolean) => {
      const {modelValue, value} = props

      if (Array.isArray(modelValue)) {
        if ((modelValue || [])[0] !== value) {
          localChecked.value = [value]
        }
      } else if (checked && modelValue !== value) {
        localChecked.value = value
      }
    }

    watch(
      () => props.modelValue,
      (newValue) => {
        emit('input', newValue)
      }
    )

    // TODO: make jest tests compatible with the v-focus directive
    if (props.autofocus) {
      onMounted(() => {
        input.value.focus()
      })
    }

    return {
      localChecked,
      computedId,
      classes,
      inputClasses,
      labelClasses,
      isChecked,
      isFocused,
      input,
      handleClick,
      focus,
      blur,
    }
  },
})
</script>
