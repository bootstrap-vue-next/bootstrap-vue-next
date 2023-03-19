import type {Ref} from 'vue'
import type InputSize from './InputSize'
import type ColorVariant from './ColorVariant'
import type ButtonVariant from './ButtonVariant'
import type Size from './Size'

export interface BCarouselParentData {
  background: Ref<string | undefined>
  width: Ref<string | undefined>
  height: Ref<string | undefined>
}

export interface BTabsParentData {
  lazy: Ref<boolean>
  card: Ref<boolean>
}

export interface BProgressParentData {
  animated: Ref<boolean>
  max: Ref<number | string>
  showProgress: Ref<boolean>
  showValue: Ref<boolean>
  striped: Ref<boolean>
}

export interface BListGroupParentData {
  numbered: Ref<boolean>
}

export interface BAvatarGroupParentData {
  overlapScale: Ref<number>
  size: Ref<InputSize | string | undefined>
  square: Ref<boolean>
  rounded: Ref<boolean | string>
  variant: Ref<ColorVariant | undefined>
}

export interface BAccordionParentData {
  id: Ref<string>
}

export interface BFormCheckboxGroupParentData {
  set: (
    payload: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number
  ) => void
  remove: (
    payload: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number
  ) => void
  modelValue: Ref<
    (unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number)[]
  >
  switch: Ref<boolean>
  buttonVariant: Ref<ButtonVariant>
  form: Ref<string | undefined>
  name: Ref<string>
  state: Ref<boolean | undefined>
  plain: Ref<boolean>
  size: Ref<Size>
  inline: Ref<boolean>
  required: Ref<boolean>
  buttons: Ref<boolean>
  disabled: Ref<boolean>
}
