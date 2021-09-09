<template>
  <div v-bind="attrs" :id="id" v-focus="autofocus" role="group" :class="classes">
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
import {ColorVariant, Size} from '../types'
import {
  getGroupAttr,
  getGroupClasses,
  optionToElement,
  slotsToElements,
} from '../composables/useFormCheck'

export default defineComponent({
  name: 'BFormRadioGroup',
  props: {
    modelValue: {type: [Boolean, String, Array, Object], default: ''},
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
    textField: {type: String, default: 'text'},
    validated: {type: Boolean, default: false},
    valueField: {type: String, default: 'value'},
  },
  emits: ['update:modelValue'],
  setup(props, {emit, slots}) {
    const slotsName = 'BFormRadio'
    const checkboxList = computed(() => {
      const {
        modelValue,
        buttonVariant,
        form,
        name,
        buttons,
        state,
        plain,
        size,
        stacked,
        disabled,
        options,
      } = props

      return (slots.first ? slotsToElements(slots.first(), slotsName, disabled) : [])
        .concat(options.map((e) => optionToElement(e, props)))
        .concat(slots.default ? slotsToElements(slots.default(), slotsName, disabled) : [])
        .map((e) =>
          Object.assign(e, {
            model:
              JSON.stringify(modelValue) === JSON.stringify(e.props?.value) ? e.props?.value : null,
            props: {
              ...e.props,
              'button-variant': buttonVariant,
              form,
              name,
              'button': buttons,
              state,
              plain,
              size,
              'inline': !stacked,
            },
          })
        )
    })

    const childUpdated = (newValue: any) => {
      emit('update:modelValue', newValue)
    }

    const attrs = getGroupAttr(props)
    const classes = getGroupClasses(props)

    return {
      attrs,
      classes,
      checkboxList,
      childUpdated,
    }
  },
})
</script>
