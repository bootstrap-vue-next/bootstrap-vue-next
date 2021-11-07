<template>
  <div
    v-bind="attrs"
    :id="computedId"
    role="radiogroup"
    :class="classes"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <template v-for="(item, key) in checkboxList" :key="key">
      <b-form-radio v-model="item.model" v-bind="item.props" @change="childUpdated">
        <!-- eslint-disable vue/no-v-html -->
        <span v-if="item.html" v-html="item.html" />
        <!--eslint-enable-->
        <span v-else v-text="item.text" />
      </b-form-radio>
    </template>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant, Size} from '../../types'
import {
  bindGroupProps,
  getGroupAttr,
  getGroupClasses,
  optionToElement,
  slotsToElements,
} from '../../composables/useFormCheck'
import useId from '../../composables/useId'

export default defineComponent({
  name: 'BFormRadioGroup',
  props: {
    modelValue: {type: [String, Boolean, Array, Object, Number], default: ''},
    ariaInvalid: {type: [Boolean, String], default: null},
    autofocus: {type: Boolean, default: false},
    buttonVariant: {type: String as PropType<ColorVariant>, default: 'secondary'},
    buttons: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    disabledField: {type: String, default: 'disabled'},
    form: {type: String},
    htmlField: {type: String, default: 'html'},
    id: {type: String},
    name: {type: String},
    options: {type: Array, default: () => []}, // Objects are not supported yet
    plain: {type: Boolean, default: false},
    required: {type: Boolean, default: false},
    size: {type: String as PropType<Size>},
    stacked: {type: Boolean, default: false},
    state: {type: Boolean, default: null},
    textField: {type: String, default: 'text'},
    validated: {type: Boolean, default: false},
    valueField: {type: String, default: 'value'},
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, {emit, slots}) {
    const slotsName = 'BFormRadio'
    const computedId = useId(props.id, 'radio')
    const computedName = useId(props.name, 'checkbox')

    const localChecked = computed({
      get: () => props.modelValue,
      set: (newValue: any) => {
        emit('input', newValue)
        emit('update:modelValue', newValue)
        emit('change', newValue)
      },
    })

    const checkboxList = computed(() =>
      (slots.first ? slotsToElements(slots.first(), slotsName, props.disabled) : [])
        .concat(props.options.map((e) => optionToElement(e, props)))
        .concat(slots.default ? slotsToElements(slots.default(), slotsName, props.disabled) : [])
        .map((e, idx) => bindGroupProps(e, idx, props, computedName, computedId))
        .map((e) => ({
          ...e,
          model:
            JSON.stringify(props.modelValue) === JSON.stringify(e.props?.value)
              ? e.props?.value
              : null,
        }))
    )

    const childUpdated = (newValue: any) => {
      emit('change', newValue)
      emit('update:modelValue', newValue)
    }

    const attrs = getGroupAttr(props)
    const classes = getGroupClasses(props)

    // TODO: make jest tests compatible with the v-focus directive

    return {
      attrs,
      classes,
      checkboxList,
      childUpdated,
      computedId,
      localChecked,
    }
  },
})
</script>
