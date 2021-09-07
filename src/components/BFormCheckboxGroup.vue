<template>
  <div
      role="group"
      v-focus="autofocus"
      v-bind="attrs"
      :id="id"
      :class="classes"
  >
    <template v-for="item in checkboxList">
      <b-form-checkbox
          v-bind="item.props"
          v-model="item.model"
          @change="childUpdated($event, item.props?.value)"
      >
        <span v-if="item.html" v-html="item.html" />
        <span v-else v-text="item.text" />
      </b-form-checkbox>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, PropType} from 'vue'
import {ColorVariant, Size} from "../types";

export default defineComponent({
  name: 'BFormCheckboxGroup',
  emits: ['update:modelValue'],
  props: {
    modelValue: {type: Array, default: []},
    ariaInvalid: {type: [Boolean, String], default: false},
    autofocus: {type: Boolean, default: false},
    buttonVariant: {type: String as PropType<ColorVariant>},
    buttons: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    disabledField: {type: String, default: 'disabled'},
    form: {type: String},
    htmlField: {type: String, default: 'html'},
    id: {type: String},
    name: {type: String},
    options: {type: Array, default: []},
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
  setup(props, {emit, slots}) {
    const checkboxList = computed(() => {
      const {modelValue, buttonVariant, form, name, buttons, state, plain, size, stacked, switches, disabled, options, textField, htmlField, disabledField, valueField} = props

      return (slots.default ? slots.default() : [])
          .filter(e => e.type.name === "BFormCheckbox")
          .map(e => {
            const txtChild = e.children?.default().find(e => e.type.toString() === 'Symbol(Text)')

            return {
              props: {
                disabled: disabled,
                ...e.props,
              },
              text: (txtChild) ? txtChild.children : '',
            }
          })
          .concat(options.map(option => {
            return {
              props: {
                value: option[valueField],
                disabled: disabled || option[disabledField]
              },
              text: option[textField],
              html: option[htmlField]
            }
          }))
          .map(e => {
            return Object.assign(e, {
              model: (modelValue.find(mv => e.props?.value === mv)) ? e.props?.value : false,
              props: {
                ...e.props,
                'button-variant': buttonVariant,
                form: form,
                name: name,
                button: buttons,
                state: state,
                plain: plain,
                size: size,
                inline: !stacked,
                switch: switches
              }
            })
          })
    })

    const childUpdated = (newValue: any, checkedValue: any) => {
      let resp = props.modelValue.filter(e => JSON.stringify(e) !== JSON.stringify(checkedValue))
      if (JSON.stringify(newValue) === JSON.stringify(checkedValue)) resp.push(newValue);
      emit('update:modelValue', resp)
    }

    const computedAriaInvalid = computed(() => {
      const {ariaInvalid} = props
      if (ariaInvalid === true || ariaInvalid === 'true' || ariaInvalid === '') {
        return 'true'
      }
      return (computedState.value === false) ? 'true' : ariaInvalid
    })

    const computedState = computed(() => {
      const {state} = props
      return (typeof state === 'boolean') ? props.state : null
    })

    const attrs = computed(() => {
      return {
        'aria-invalid': computedAriaInvalid.value,
        'aria-required': props.required
      }
    })
    
    const classes = computed(() => {
      return {
        'was-validated': props.validated
      }
    })

    return {
      attrs,
      classes,
      checkboxList,
      childUpdated
    }
  },
})
</script>
