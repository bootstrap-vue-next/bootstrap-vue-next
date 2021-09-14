<template>
  <div
    v-bind="attrs"
    :id="computedId"
    role="group"
    :class="classes"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <template v-for="(item, key) in checkboxList" :key="key">
      <b-form-checkbox
        v-model="item.model"
        v-bind="item.props"
        @change="childUpdated($event, item.props?.value)"
      >
        <!-- eslint-disable vue/no-v-html -->
        <span v-if="item.html" v-html="item.html" />
        <!--eslint-enable-->
        <span v-else v-text="item.text" />
      </b-form-checkbox>
    </template>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, watch} from 'vue'
import {ColorVariant, Size} from '../../types'
import useId from '../../composables/useId'
import {
  bindGroupProps,
  getGroupAttr,
  getGroupClasses,
  optionToElement,
  slotsToElements,
} from '../../composables/useFormCheck'

export default defineComponent({
  name: 'BFormCheckboxGroup',
  props: {
    modelValue: {type: Array, default: () => []},
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
    switches: {type: Boolean, default: false},
    textField: {type: String, default: 'text'},
    validated: {type: Boolean, default: false},
    valueField: {type: String, default: 'value'},
  },
  emits: ['update:modelValue', 'change', 'input'],
  setup(props, {emit, slots}) {
    const slotsName = 'BFormCheckbox'
    const computedId = useId(props.id, 'checkbox')
    const computedName = useId(props.name, 'checkbox')

    const localChecked = computed({
      get: () => props.modelValue,
      set: (newValue: any) => {
        if (JSON.stringify(newValue) === JSON.stringify(props.modelValue)) return
        emit('input', newValue)
        emit('update:modelValue', newValue)
        emit('change', newValue)
      },
    })

    const checkboxList = computed(() => {
      const {modelValue, switches, disabled, options} = props

      return (slots.first ? slotsToElements(slots.first(), slotsName, disabled) : [])
        .concat(options.map((e) => optionToElement(e, props)))
        .concat(slots.default ? slotsToElements(slots.default(), slotsName, disabled) : [])
        .map((e, idx) => bindGroupProps(e, idx, props, computedName, computedId))
        .map((e) => ({
          ...e,
          model: modelValue.find((mv) => e.props?.value === mv) ? e.props?.value : false,
          props: {
            switch: switches,
            ...e.props,
          },
        }))
    })

    const childUpdated = (newValue: any, checkedValue: any) => {
      const resp = props.modelValue.filter(
        (e) => JSON.stringify(e) !== JSON.stringify(checkedValue)
      )
      if (JSON.stringify(newValue) === JSON.stringify(checkedValue)) resp.push(newValue)
      emit('update:modelValue', resp)
      emit('change', resp)
    }

    const attrs = getGroupAttr(props)
    const classes = getGroupClasses(props)

    watch(
      () => props.modelValue,
      (newValue) => {
        emit('input', newValue)
      }
    )

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
