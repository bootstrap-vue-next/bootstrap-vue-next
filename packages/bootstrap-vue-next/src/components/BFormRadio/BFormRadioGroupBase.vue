<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    ref="_element"
    role="radiogroup"
    :class="computedClasses"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <slot name="first" />
    <BFormRadio v-for="(item, index) in normalizedOptions" :key="index" v-bind="item">
      <slot name="option" v-bind="item">
        {{ item.text }}
      </slot>
    </BFormRadio>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {BFormRadioGroupBaseProps} from '../../types/ComponentProps'
import {computed, provide, toRef, useTemplateRef} from 'vue'
import {radioGroupKey} from '../../utils/keys'
import BFormRadio from './BFormRadio.vue'
import {getGroupAttr, getGroupClasses} from '../../composables/useFormCheck'
import {useFocus} from '@vueuse/core'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BFormRadioGroupSlots} from '../../types/ComponentSlots'

/**
 * Internal base component for BFormRadioGroup.
 * This component is non-generic and uses useDefaults for complete default support.
 * Users should use BFormRadioGroup (the type-safe wrapper) instead.
 * @internal
 */
const _props = withDefaults(defineProps<Omit<BFormRadioGroupBaseProps, 'modelValue'>>(), {
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
  validated: false,
})
const props = useDefaults(_props, 'BFormRadioGroup')
defineSlots<BFormRadioGroupSlots>()

const modelValue = defineModel<unknown>({
  default: null,
})

const computedId = useId(() => props.id, 'radio')
const computedName = useId(() => props.name, 'radio')

const element = useTemplateRef('_element')

const {focused} = useFocus(element, {
  initialValue: props.autofocus,
})

// Normalize options to always be objects with text/value fields
const normalizedOptions = computed(() =>
  props.options.map((option) => {
    if (typeof option === 'object' && option !== null) {
      return option
    }
    // Primitive value - normalize to {text, value}
    return {
      text: String(option),
      value: option,
    }
  })
)

provide(radioGroupKey, {
  modelValue: modelValue as import('vue').Ref<import('../../types/RadioTypes').RadioValue>,
  buttonVariant: toRef(() => props.buttonVariant),
  form: toRef(() => props.form),
  name: computedName,
  buttons: toRef(() => props.buttons),
  state: toRef(() => props.state),
  plain: toRef(() => props.plain),
  size: toRef(() => props.size),
  inline: toRef(() => !props.stacked),
  reverse: toRef(() => props.reverse),
  required: toRef(() => props.required),
  disabled: toRef(() => props.disabled),
})

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
