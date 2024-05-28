<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    ref="element"
    role="radiogroup"
    :class="computedClasses"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <slot name="first" />
    <BFormRadio
      v-for="item in normalizeOptions"
      :key="item.self"
      :disabled="item.disabled"
      :value="item.value"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="!!item.html" v-html="item.html" />
      <template v-else>
        {{ item.text }}
      </template>
    </BFormRadio>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {BFormRadioGroupProps, RadioValue} from '../../types'
import {computed, provide, ref, toRef} from 'vue'
import {radioGroupKey} from '../../utils'
import BFormRadio from './BFormRadio.vue'
import {getGroupAttr, getGroupClasses, useDefaults, useId} from '../../composables'
import {useFocus} from '@vueuse/core'

const _props = withDefaults(defineProps<BFormRadioGroupProps>(), {
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
  textField: 'text',
  validated: false,
  valueField: 'value',
})
const props = useDefaults(_props, 'BFormRadioGroup')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

const modelValue = defineModel<RadioValue | null>({
  default: null,
})

const computedId = useId(() => props.id, 'radio')
const computedName = useId(() => props.name, 'checkbox')

const element = ref<HTMLElement | null>(null)

const {focused} = useFocus(element, {
  initialValue: props.autofocus,
})

provide(radioGroupKey, {
  modelValue,
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

const normalizeOptions = computed(() =>
  props.options.map((el, ind) =>
    typeof el === 'string' || typeof el === 'number'
      ? {
          value: el,
          disabled: props.disabled,
          text: el.toString(),
          html: undefined,
          self: Symbol(`radioGroupOptionItem${ind}`),
        }
      : {
          value: el[props.valueField] as string | undefined,
          disabled: el[props.disabledField] as boolean | undefined,
          ...(el.props ? el.props : {}),
          text: el[props.textField] as string | undefined,
          html: el[props.htmlField] as string | undefined,
          self: Symbol(`radioGroupOptionItem${ind}`),
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
