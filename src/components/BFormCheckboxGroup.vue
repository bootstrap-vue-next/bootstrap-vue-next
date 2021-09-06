<template>
  <div
      role="group"
      v-focus="autofocus"
  >
    <template v-for="item in checkboxList">
      <b-form-checkbox
          :is-group="true"
          v-bind="item.props"
          v-model="item.model"
          @childUpdated="childUpdated"
      >
        {{ item.text }}
      </b-form-checkbox>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import BFormCheckbox from "../components/BFormCheckbox/BFormCheckbox.vue";

export default defineComponent({
  name: 'BFormCheckboxGroup',
  components: {BFormCheckbox},
  emits: ['update:modelValue'],
  props: {
    modelValue: {type: Array, default: []},
    autofocus: {type: Boolean, default: false},
    options: {type: Array, default: []},
  },
  setup(props, {emit, slots}) {
    const checkboxList = computed(() => (slots.default ? slots.default() : [])
        .filter(e => e.type.name === "BFormCheckbox")
        .map(e => {
          const txtChild = e.children?.default().find(e => e.type.toString() === 'Symbol(Text)')

          return {
            props: e.props,
            text: (txtChild) ? txtChild.children : '',
          }
        })
        .concat(props.options.map(option => {
          return {
            props: {
              value: option.value,
              disabled: option.hasOwnProperty('disabled') ? option.disabled : false
            },
            text: option.text
          }
        }))
        .map(e => Object.assign(e, {
          model: (props.modelValue.find(mv => e.props.value === mv)) ? e.props.value : false
        }))
    )

    const childUpdated = (msg) => {
      let resp = props.modelValue.filter(e => e !== msg.checkedValue)
      if (msg.checked) resp.push(msg.checkedValue);
      emit('update:modelValue', resp)
    }

    return {
      checkboxList,
      childUpdated
    }
  },
})
</script>
