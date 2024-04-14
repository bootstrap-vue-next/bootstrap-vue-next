import type {
  Component,
  ComponentInternalInstance,
  ComputedRef,
  InjectionKey,
  MaybeRefOrGetter,
  Ref,
  ShallowRef,
} from 'vue'
import type {
  BModalProps,
  BreadcrumbItemRaw,
  ButtonVariant,
  CheckboxValue,
  ClassValue,
  ColorVariant,
  LiteralUnion,
  Numberish,
  OrchestratedModal,
  OrchestratedToast,
  RadioValue,
  RadiusElement,
  Size,
  TabType,
  TextColorVariant,
} from '../types'

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
  noFade: Readonly<Ref<boolean>>
  registerTab: (tab: Readonly<Ref<TabType>>) => void
  unregisterTab: (id: string) => void
  activateTab: (id: string | undefined) => void
  activeTabClass: Readonly<Ref<ClassValue>>
  inactiveTabClass: Readonly<Ref<ClassValue>>
  tabClass: Readonly<Ref<ClassValue>>
  activeId: Readonly<Ref<string | undefined>>
}> = Symbol('tabs')

// BProgress
export const progressInjectionKey: InjectionKey<{
  animated: Readonly<Ref<boolean | undefined>>
  max: Readonly<Ref<Numberish>>
  showProgress: Readonly<Ref<boolean | undefined>>
  showValue: Readonly<Ref<boolean | undefined>>
  striped: Readonly<Ref<boolean | undefined>>
}> = Symbol('progress')

// BListGroup
export const listGroupInjectionKey: InjectionKey<{
  numbered: Readonly<Ref<boolean>>
}> = Symbol('listGroup')

// BAvatarGroup
export const avatarGroupInjectionKey: InjectionKey<{
  overlapScale: Readonly<Ref<number>>
  size: Readonly<Ref<LiteralUnion<Size, Numberish> | undefined>>
  square: Readonly<Ref<boolean>>
  rounded: Readonly<Ref<RadiusElement | boolean>>
  roundedTop: Readonly<Ref<RadiusElement | boolean | undefined>>
  roundedBottom: Readonly<Ref<RadiusElement | boolean | undefined>>
  roundedStart: Readonly<Ref<RadiusElement | boolean | undefined>>
  roundedEnd: Readonly<Ref<RadiusElement | boolean | undefined>>
  variant: Readonly<Ref<ColorVariant | null>>
  bgVariant: Readonly<Ref<ColorVariant | null>>
  textVariant: Readonly<Ref<TextColorVariant | null>>
}> = Symbol('avatarGroup')

// BAccordion
export const accordionInjectionKey: InjectionKey<{
  openItem: Readonly<Ref<string | undefined>>
  free: Readonly<Ref<boolean>>
  setOpenItem: (id: string) => void
}> = Symbol('accordion')

// BFormCheckboxGroup
export const checkboxGroupKey: InjectionKey<{
  modelValue: Ref<readonly CheckboxValue[]>
  switch: Readonly<Ref<boolean>>
  buttonVariant: Readonly<Ref<ButtonVariant | null>>
  form: Readonly<Ref<string | undefined>>
  name: Readonly<Ref<string>>
  state: Readonly<Ref<boolean | undefined | null>>
  plain: Readonly<Ref<boolean>>
  size: Readonly<Ref<Size>>
  inline: Readonly<Ref<boolean>>
  reverse: Readonly<Ref<boolean>>
  required: Readonly<Ref<boolean>>
  buttons: Readonly<Ref<boolean>>
  disabled: Readonly<Ref<boolean>>
}> = Symbol('checkboxGroup')

export const radioGroupKey: InjectionKey<{
  modelValue: Ref<RadioValue>
  buttonVariant: Readonly<Ref<ButtonVariant | null>>
  form: Readonly<Ref<string | undefined>>
  name: Readonly<Ref<string>>
  buttons: Readonly<Ref<boolean>>
  state: Readonly<Ref<boolean | undefined | null>>
  plain: Readonly<Ref<boolean>>
  size: Readonly<Ref<Size>>
  inline: Readonly<Ref<boolean>>
  reverse: Readonly<Ref<boolean>>
  required: Readonly<Ref<boolean>>
  disabled: Readonly<Ref<boolean>>
}> = Symbol('radioGroup')

// Collapse
export const collapseInjectionKey: InjectionKey<{
  id?: Readonly<Ref<string>>
  readonly hide?: () => void
  readonly show?: () => void
  readonly toggle?: () => void
  visible?: Readonly<Ref<boolean>>
  isNav?: Readonly<Ref<boolean>>
}> = Symbol('collapse')

export const dropdownInjectionKey: InjectionKey<{
  id?: Readonly<Ref<string>>
  readonly hide?: () => void
  readonly show?: () => void
  readonly toggle?: () => void
  visible?: Readonly<Ref<boolean>>
  isNav?: Readonly<Ref<boolean>>
}> = Symbol('collapse')

export const navbarInjectionKey: InjectionKey<{
  tag?: Readonly<Ref<string>>
  autoClose?: Readonly<Ref<boolean>>
}> = Symbol('navbar')

export const toastPluginKey: InjectionKey<{
  toasts: ShallowRef<
    ComputedRef<{
      component: unknown
      props: Omit<OrchestratedToast, 'value'> & {
        _self: symbol
        _modelValue: OrchestratedToast['value'] // Convert it to be the same name as useModalController.
        // The difference between the two is that unlike that one, this value can be defined (there's cannot be).
      }
    }>[]
  >
  _setIsAppend: (value: boolean) => void
  show: (obj: {
    component?: Readonly<Component>
    props?: MaybeRefOrGetter<Readonly<OrchestratedToast>>
  }) => symbol
  remove: (self: symbol) => void
}> = Symbol('toastPlugin')

export const rtlPluginKey: InjectionKey<{
  isRtl: Ref<boolean>
  locale: Ref<string | undefined>
}> = Symbol('rtlPlugin')

export const breadcrumbPluginKey: InjectionKey<{
  items: Ref<BreadcrumbItemRaw[]>
  reset: () => void
}> = Symbol('breadcrumbPlugin')

export const modalControllerPluginKey: InjectionKey<{
  modals: ShallowRef<
    ComputedRef<{
      component: unknown // TS being weird here, just use unknown
      props: OrchestratedModal & {
        _self: symbol
        _modelValue: BModalProps['modelValue']
        _promise: {
          value: Promise<boolean | null>
          resolve: (value: boolean | null) => void
        }
        _isConfirm: boolean
      }
    }>[]
  >
  show: (obj: {
    component?: Readonly<Component>
    props?: MaybeRefOrGetter<Readonly<OrchestratedModal>>
  }) => Promise<boolean | null>
  confirm: (obj: {
    component?: Readonly<Component>
    props?: MaybeRefOrGetter<Readonly<OrchestratedModal>>
  }) => Promise<boolean | null>
  remove: (self: symbol) => void
}> = Symbol('modalControllerPlugin')

export const modalManagerPluginKey: InjectionKey<{
  stack: ShallowRef<Readonly<ComponentInternalInstance>[]>
  countStack: Readonly<Ref<number>>
  lastStack: Readonly<Ref<ComponentInternalInstance | undefined>>
  pushStack: (modal: Readonly<ComponentInternalInstance>) => void
  removeStack: (modal: Readonly<ComponentInternalInstance>) => void
  registry: ShallowRef<Readonly<ComponentInternalInstance>[]>
  pushRegistry: (modal: Readonly<ComponentInternalInstance>) => void
  removeRegistry: (modal: Readonly<ComponentInternalInstance>) => void
}> = Symbol('modalManagerPlugin')

export const idPluginKey: InjectionKey<() => string> = Symbol('idPluginKey')
