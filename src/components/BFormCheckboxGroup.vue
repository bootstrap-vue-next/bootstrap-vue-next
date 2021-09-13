<template>
  <div v-bind="attrs" :id="computedId" v-focus="autofocus" role="group" :class="classes">
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
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant, Size} from '../types'
import useId from '../composables/useId'
import {
  getGroupAttr,
  getGroupClasses,
  optionToElement,
  slotsToElements,
} from '../composables/useFormCheck'

export default defineComponent({
  name: 'BFormCheckboxGroup',
  props: {
    modelValue: {type: Array, default: () => []},
    ariaInvalid: {type: [Boolean, String], default: false},
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
  emits: ['update:modelValue'],
  setup(props, {emit, slots}) {
    const slotsName = 'BFormCheckbox'
    const computedId = useId(props.id, 'checkbox')
    const computedName = useId(props.name, 'checkbox')
    const checkboxList = computed(() => {
      const {
        modelValue,
        buttonVariant,
        form,
        buttons,
        state,
        plain,
        size,
        stacked,
        switches,
        disabled,
        required,
        options,
      } = props

      return (slots.first ? slotsToElements(slots.first(), slotsName, disabled) : [])
        .concat(options.map((e) => optionToElement(e, props)))
        .concat(slots.default ? slotsToElements(slots.default(), slotsName, disabled) : [])
        .map((e, idx) =>
          Object.assign(e, {
            model: modelValue.find((mv) => e.props?.value === mv) ? e.props?.value : false,
            props: {
              ...e.props,
              'button-variant': buttonVariant,
              form,
              'name': computedName.value,
              'id': `${computedId.value}_option_${idx}`,
              'button': buttons,
              state,
              plain,
              size,
              'inline': !stacked,
              'switch': switches,
              required,
            },
          })
        )
    })

    const childUpdated = (newValue: any, checkedValue: any) => {
      const resp = props.modelValue.filter(
        (e) => JSON.stringify(e) !== JSON.stringify(checkedValue)
      )
      if (JSON.stringify(newValue) === JSON.stringify(checkedValue)) resp.push(newValue)
      emit('update:modelValue', resp)
    }

    const attrs = getGroupAttr(props)
    const classes = getGroupClasses(props)

    return {
      attrs,
      classes,
      checkboxList,
      childUpdated,
      computedId,
    }
  },
})
</script>
