<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    ref="_element"
    role="group"
    :class="computedClasses"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <slot name="first" />
    <BFormCheckbox v-for="(item, index) in normalizeOptions" :key="index" v-bind="item as any">
      <slot name="option" v-bind="item">
        {{ item.text }}
      </slot>
    </BFormCheckbox>
    <slot />
  </div>
</template>

<script
  setup
  lang="ts"
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
import {computed, inject, provide, ref, toRef, useTemplateRef} from 'vue'
import BFormCheckbox from './BFormCheckbox.vue'
import {checkboxGroupKey, defaultsKey} from '../../utils/keys'
import {useFocus} from '@vueuse/core'
import type {BFormCheckboxGroupProps} from '../../types/ComponentProps'
import {useId} from '../../composables/useId'
import {getGroupAttr, getGroupClasses} from '../../composables/useFormCheck'
import type {BFormCheckboxGroupSlots} from '../../types'

// Note: Cannot use useDefaults composable with generic props due to Proxy/type inference limitations.
// We manually inject global defaults for commonly-customized props (buttonVariant, size, state).
const props = withDefaults(
  defineProps<Omit<BFormCheckboxGroupProps<Item, ValueKey>, 'modelValue'>>(),
  {
    ariaInvalid: undefined,
    autofocus: false,
    buttonVariant: undefined,
    buttons: false,
    disabled: false,
    disabledField: 'disabled' as keyof Item & string,
    form: undefined,
    id: undefined,
    name: undefined,
    options: () => [],
    plain: false,
    required: false,
    reverse: false,
    size: undefined,
    stacked: false,
    state: undefined,
    switches: false,
    textField: 'text' as keyof Item & string,
    validated: false,
    valueField: 'value' as ValueKey & string,
  }
)
defineSlots<BFormCheckboxGroupSlots<Item[ValueKey]>>()

const modelValue = defineModel<readonly Item[ValueKey][]>({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: () => [] as any,
})

// Inject global defaults and create computed properties for commonly-customized props
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalDefaults = inject(defaultsKey, ref<any>({}))
const componentDefaults = computed(() => globalDefaults.value?.BFormCheckboxGroup ?? {})

const buttonVariant = computed(
  () =>
    props.buttonVariant ??
    componentDefaults.value.buttonVariant ??
    globalDefaults.value?.global?.buttonVariant ??
    'secondary'
)
const size = computed(
  () => props.size ?? componentDefaults.value.size ?? globalDefaults.value?.global?.size ?? 'md'
)
const state = computed(
  () => props.state ?? componentDefaults.value.state ?? globalDefaults.value?.global?.state ?? null
)

const computedId = useId(() => props.id, 'checkbox')
const computedName = useId(() => props.name, 'checkbox')

const element = useTemplateRef('_element')

const {focused} = useFocus(element, {
  initialValue: props.autofocus,
})

provide(checkboxGroupKey, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelValue: modelValue as any,
  switch: toRef(() => props.switches),
  buttonVariant,
  form: toRef(() => props.form),
  name: computedName,
  state,
  plain: toRef(() => props.plain),
  size,
  inline: toRef(() => !props.stacked),
  reverse: toRef(() => props.reverse),
  required: toRef(() => props.required),
  buttons: toRef(() => props.buttons),
  disabled: toRef(() => props.disabled),
})

const normalizeOptions = computed(() =>
  props.options.map((el) =>
    typeof el === 'string' || typeof el === 'number'
      ? {
          value: el as Item[ValueKey],
          disabled: props.disabled,
          text: el.toString(),
        }
      : {
          value: el[props.valueField as keyof typeof el] as Item[ValueKey],
          disabled: el[props.disabledField as keyof typeof el] as boolean | undefined,
          text: el[props.textField as keyof typeof el] as string | undefined,
        }
  )
)

const classesObject = computed(() => ({
  required: props.required,
  ariaInvalid: props.ariaInvalid,
  state: state.value,
  validated: props.validated,
  buttons: props.buttons,
  stacked: props.stacked,
  size: size.value,
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
