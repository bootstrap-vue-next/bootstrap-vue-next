import type {InjectionKey, Ref} from 'vue'
import type {BreadcrumbItem, ButtonVariant, ColorVariant, InputSize, Size} from '../types'

// BCarousel
export const carouselInjectionKey: InjectionKey<{
  background: Readonly<Ref<string | undefined>>
  width: Readonly<Ref<string | undefined>>
  height: Readonly<Ref<string | undefined>>
}> = Symbol('carousel')

// BTabs
export const tabsInjectionKey: InjectionKey<{
  lazy: Readonly<Ref<boolean>>
  card: Readonly<Ref<boolean>>
}> = Symbol('tabs')

// useBreadcrumb
export const breadcrumbInjectionKey: InjectionKey<{
  items: BreadcrumbItem[]
  readonly reset: () => void
}> = Symbol('breadcrumb')

// BProgress
export const progressInjectionKey: InjectionKey<{
  animated: Readonly<Ref<boolean>>
  max: Readonly<Ref<number | string>>
  showProgress: Readonly<Ref<boolean>>
  showValue: Readonly<Ref<boolean>>
  striped: Readonly<Ref<boolean>>
}> = Symbol('progress')

// BListGroup
export const listGroupInjectionKey: InjectionKey<{
  numbered: Readonly<Ref<boolean>>
}> = Symbol('listGroup')

// BAvatarGroup
export const avatarGroupInjectionKey: InjectionKey<{
  overlapScale: Readonly<Ref<number>>
  size: Readonly<Ref<InputSize | string | undefined>>
  square: Readonly<Ref<boolean>>
  rounded: Readonly<Ref<boolean | string>>
  variant: Readonly<Ref<ColorVariant | undefined>>
}> = Symbol('avatarGroup')

// BAccordion
export const accordionInjectionKey: InjectionKey<{
  openItem: Readonly<Ref<string>>
  free: Readonly<Ref<boolean>>
  setOpenItem: (id: string) => void
}> = Symbol('accordion')

// BFormCheckboxGroup
export const checkboxGroupKey: InjectionKey<{
  set: (
    payload: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null
  ) => void
  remove: (
    payload: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null
  ) => void
  modelValue: Readonly<
    Ref<(unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null)[]>
  >
  switch: Readonly<Ref<boolean>>
  buttonVariant: Readonly<Ref<ButtonVariant>>
  form: Readonly<Ref<string | undefined>>
  name: Readonly<Ref<string>>
  state: Readonly<Ref<boolean | undefined | null>>
  plain: Readonly<Ref<boolean>>
  size: Readonly<Ref<Size>>
  inline: Readonly<Ref<boolean>>
  required: Readonly<Ref<boolean>>
  buttons: Readonly<Ref<boolean>>
  disabled: Readonly<Ref<boolean>>
}> = Symbol('checkboxGroup')

export const radioGroupKey: InjectionKey<{
  set: (value: string | boolean | unknown[] | Record<string, unknown> | number | null) => void
  modelValue: Readonly<Ref<string | boolean | unknown[] | Record<string, unknown> | number | null>>
  buttonVariant: Readonly<Ref<ButtonVariant>>
  form: Readonly<Ref<string | undefined>>
  name: Readonly<Ref<string>>
  buttons: Readonly<Ref<boolean>>
  state: Readonly<Ref<boolean | undefined | null>>
  plain: Readonly<Ref<boolean>>
  size: Readonly<Ref<Size>>
  inline: Readonly<Ref<boolean>>
  required: Readonly<Ref<boolean>>
  disabled: Readonly<Ref<boolean>>
}> = Symbol('radioGroup')

// Collapse
export const collapseInjectionKey: InjectionKey<{
  id?: Readonly<Ref<string>>
  readonly close?: () => void
  readonly open?: () => void
  readonly toggle?: () => void
  visible?: Readonly<Ref<boolean>>
  isNav?: Readonly<Ref<boolean>>
}> = Symbol('collapse')

export const dropdownInjectionKey: InjectionKey<{
  id?: Readonly<Ref<string>>
  readonly close?: () => void
  readonly open?: () => void
  readonly toggle?: () => void
  visible?: Readonly<Ref<boolean>>
  isNav?: Readonly<Ref<boolean>>
}> = Symbol('collapse')
