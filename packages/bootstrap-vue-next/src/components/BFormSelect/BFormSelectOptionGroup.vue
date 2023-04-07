<template>
  <optgroup :label="label">
    <slot name="first" />
    <b-form-select-option v-for="item in normalizeOptions" :key="item.self" v-bind="item.props">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="item.html" v-html="item.html" />
      <span v-else v-text="item.text" />
    </b-form-select-option>
    <slot />
  </optgroup>
</template>

<script setup lang="ts">
import {computed, toRef} from 'vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'
import BFormSelectOption from './BFormSelectOption.vue'

interface BFormSelectOptionGroupProps {
  label?: string
  disabledField?: string
  htmlField?: string
  options?: (string | number | Record<string, unknown>)[]
  textField?: string
  valueField?: string
  disabled?: Booleanish
}

const props = withDefaults(defineProps<BFormSelectOptionGroupProps>(), {
  disabledField: 'disabled',
  htmlField: 'html',
  options: () => [],
  textField: 'text',
  valueField: 'value',
  disabled: false,
})

const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

const normalizeOptions = computed(() =>
  props.options.map((el, ind) =>
    typeof el === 'string' || typeof el === 'number'
      ? {
          props: {
            value: el,
            disabled: disabledBoolean.value,
          },
          text: el.toString(),
          html: undefined,
          self: Symbol(`selectOptionGroupItem${ind}`),
        }
      : {
          props: {
            value: el[props.valueField] as string | undefined,
            disabled: el[props.disabledField] as boolean | undefined,
            ...(el.props ? el.props : {}),
          },
          text: el[props.textField] as string | undefined,
          html: el[props.htmlField] as string | undefined,
          self: Symbol(`selectOptionGroupItem${ind}`),
        }
  )
)
</script>
