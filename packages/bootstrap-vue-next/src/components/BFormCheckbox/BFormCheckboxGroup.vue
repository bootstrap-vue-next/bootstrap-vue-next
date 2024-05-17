<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    ref="element"
    role="group"
    :class="computedClasses"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <slot name="first" />
    <BFormCheckbox v-for="item in normalizeOptions" :key="item.self" v-bind="item.props">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="!!item.html" v-html="item.html" />
      <template v-else>
        {{ item.text }}
      </template>
    </BFormCheckbox>
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed, provide, ref, toRef} from 'vue'
import BFormCheckbox from './BFormCheckbox.vue'
import type {BFormCheckboxGroupProps, CheckboxValue} from '../../types'
import {getGroupAttr, getGroupClasses, useDefaults, useId} from '../../composables'
import {checkboxGroupKey} from '../../utils'
import {useFocus} from '@vueuse/core'

const _props = withDefaults(defineProps<BFormCheckboxGroupProps>(), {
  ariaInvalid: undefined,
  autofocus: false,
  buttonVariant: 'secondary',
  buttons: false,
  disabled: false,
  disabledField: 'disabled',
  form: undefined,
  htmlField: 'html',
  id: undefined,
  name: undefined,
  options: () => [],
  plain: false,
  required: false,
  reverse: false,
  size: 'md',
  stacked: false,
  state: null,
  switches: false,
  textField: 'text',
  validated: false,
  valueField: 'value',
})
const props = useDefaults(_props, 'BFormCheckboxGroup')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

const modelValue = defineModel<CheckboxValue[]>({
  default: () => [],
})

const computedId = useId(() => props.id, 'checkbox')
const computedName = useId(() => props.name, 'checkbox')

const element = ref<HTMLElement | null>(null)

const {focused} = useFocus(element, {
  initialValue: props.autofocus,
})

provide(checkboxGroupKey, {
  modelValue,
  switch: toRef(() => props.switches),
  buttonVariant: toRef(() => props.buttonVariant),
  form: toRef(() => props.form),
  name: computedName,
  state: toRef(() => props.state),
  plain: toRef(() => props.plain),
  size: toRef(() => props.size),
  inline: toRef(() => !props.stacked),
  reverse: toRef(() => props.reverse),
  required: toRef(() => props.required),
  buttons: toRef(() => props.buttons),
  disabled: toRef(() => props.disabled),
})

const normalizeOptions = computed(() =>
  props.options.map((el, ind) =>
    typeof el === 'string' || typeof el === 'number'
      ? {
          props: {
            value: el,
            disabled: props.disabled,
          },
          text: el.toString(),
          html: undefined,
          self: Symbol(`checkboxGroupOptionItem${ind}`),
        }
      : {
          props: {
            value: el[props.valueField] as string | number | undefined,
            disabled: el[props.disabledField] as boolean | undefined,
            ...(el.props ? el.props : {}),
          },
          text: el[props.textField] as string | undefined,
          html: el[props.htmlField] as string | undefined,
          self: Symbol(`checkboxGroupOptionItem${ind}`),
        }
  )
)

const classesObject = computed(() => ({
  required: props.required,
  ariaInvalid: props.ariaInvalid,
  state: props.state,
  validated: props.validated,
  buttons: props.buttons,
  stacked: props.stacked,
  size: props.size,
}))
const computedAttrs = getGroupAttr(classesObject)
const computedClasses = getGroupClasses(classesObject)

defineExpose({
  blur: () => {
    focused.value = false
  },
  focus: () => {
    focused.value = true
  },
})
</script>
