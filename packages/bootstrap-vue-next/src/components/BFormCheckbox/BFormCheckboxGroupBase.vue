<template>
  <div
    v-bind="attrs"
    :id="computedId"
    ref="_element"
    role="group"
    :class="classes"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <slot name="first" />
    <BFormCheckbox v-for="(item, index) in normalizedOptions" :key="index" v-bind="item">
      <slot name="option" v-bind="item">
        {{ item.text }}
      </slot>
    </BFormCheckbox>
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed, provide, toRef, useTemplateRef} from 'vue'
import type {BFormCheckboxGroupBaseProps} from '../../types/ComponentProps'
import type {CheckboxValue} from '../../types/CheckboxTypes'
import BFormCheckbox from './BFormCheckbox.vue'
import {checkboxGroupKey} from '../../utils/keys'
import {getGroupAttr, getGroupClasses} from '../../composables/useFormCheck'
import {useFocus} from '@vueuse/core'
import {useId} from '../../composables/useId'
import {useDefaults} from '../../composables/useDefaults'

const _props = withDefaults(defineProps<Omit<BFormCheckboxGroupBaseProps, 'modelValue'>>(), {
  ariaInvalid: undefined,
  autofocus: false,
  buttonVariant: 'secondary',
  buttons: false,
  disabled: false,
  form: undefined,
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
  validated: false,
})
const props = useDefaults(_props, 'BFormCheckboxGroup')

const modelValue = defineModel<CheckboxValue[]>({
  default: () => [],
})

const computedId = useId(() => props.id, 'checkbox')
const computedName = useId(() => props.name, 'checkbox')
const _element = useTemplateRef('_element')

const {focused} = useFocus(_element, {
  initialValue: props.autofocus,
})

// Provide context to child checkboxes
provide(checkboxGroupKey, {
  modelValue: modelValue as import('vue').Ref<
    readonly import('../../types/CheckboxTypes').CheckboxValue[]
  >,
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

// Normalize options to always be objects with text/value fields
const normalizedOptions = computed<Array<{text: string; value: CheckboxValue; disabled: boolean}>>(
  () =>
    props.options.map((option) => {
      if (typeof option === 'object' && option !== null) {
        // Ensure text and disabled are defined
        return {
          ...option,
          text: option.text ?? String(option.value ?? ''),
          value: option.value ?? null,
          disabled: option.disabled ?? props.disabled,
        }
      }
      // Primitive value - normalize to {text, value}
      return {
        text: String(option),
        value: option,
        disabled: props.disabled,
      }
    })
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
const attrs = getGroupAttr(classesObject)
const classes = getGroupClasses(classesObject)

defineExpose({
  blur: () => {
    focused.value = false
  },
  focus: () => {
    focused.value = true
  },
})
</script>
