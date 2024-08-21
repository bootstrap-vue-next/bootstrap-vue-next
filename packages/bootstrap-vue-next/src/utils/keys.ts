import type {ComponentInternalInstance, ComputedRef, InjectionKey, Ref} from 'vue'
import type {TabType} from '../types/Tab'
import type {ClassValue} from '../types/AnyValuedAttributes'
import type {Numberish} from '../types/CommonTypes'
import type {LiteralUnion} from '../types/LiteralUnion'
import type {Size} from '../types/Size'
import type {RadiusElement} from '../types/RadiusElement'
import type {ButtonVariant, ColorVariant, TextColorVariant} from '../types/ColorTypes'
import type {CheckboxValue} from '../types/CheckboxTypes'
import type {RadioValue} from '../types/RadioTypes'
import type {BreadcrumbItemRaw} from '../types/BreadcrumbTypes'
import type {
  ModalOrchestratorMapValue,
  ModalOrchestratorShowParam,
  PopoverOrchestratorMapValue,
  PopoverOrchestratorShowParam,
  PrivateOrchestratedPopover,
  PrivateOrchestratedTooltip,
  ToastOrchestratorArrayValue,
  ToastOrchestratorShowParam,
  TooltipOrchestratorMapValue,
  TooltipOrchestratorShowParam,
} from '../types/ComponentOrchestratorTypes'
import type {BvnComponentProps} from '../types/BootstrapVueOptions'

// BCarousel
export const carouselInjectionKey: InjectionKey<{
  background: Readonly<Ref<string | undefined>>
  width: Readonly<Ref<string | undefined>>
  height: Readonly<Ref<string | undefined>>
}> = Symbol('bvn::carousel')

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
}> = Symbol('bvn::tabs')

// BProgress
export const progressInjectionKey: InjectionKey<{
  animated: Readonly<Ref<boolean | undefined>>
  max: Readonly<Ref<Numberish>>
  showProgress: Readonly<Ref<boolean | undefined>>
  showValue: Readonly<Ref<boolean | undefined>>
  striped: Readonly<Ref<boolean | undefined>>
}> = Symbol('bvn::progress')

// BListGroup
export const listGroupInjectionKey: InjectionKey<{
  numbered: Readonly<Ref<boolean>>
}> = Symbol('bvn::listGroup')

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
}> = Symbol('bvn::avatarGroup')

// BAccordion
export const accordionInjectionKey: InjectionKey<{
  openItem: Readonly<Ref<string | undefined>>
  free: Readonly<Ref<boolean>>
  setOpenItem: (id: string) => void
}> = Symbol('bvn::accordion')

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
}> = Symbol('bvn::checkboxGroup')

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
}> = Symbol('bvn::radioGroup')

// Collapse
export const collapseInjectionKey: InjectionKey<{
  id?: Readonly<Ref<string>>
  readonly hide?: () => void
  readonly show?: () => void
  readonly toggle?: () => void
  visible?: Readonly<Ref<boolean>>
  isNav?: Readonly<Ref<boolean>>
}> = Symbol('bvn::collapse')

export const dropdownInjectionKey: InjectionKey<{
  id?: Readonly<Ref<string>>
  readonly hide?: () => void
  readonly show?: () => void
  readonly toggle?: () => void
  visible?: Readonly<Ref<boolean>>
  isNav?: Readonly<Ref<boolean>>
}> = Symbol('bvn::collapse')

export const navbarInjectionKey: InjectionKey<{
  tag?: Readonly<Ref<string>>
  autoClose?: Readonly<Ref<boolean>>
}> = Symbol('bvn::navbar')

export const rtlPluginKey: InjectionKey<{
  isRtl: Ref<boolean>
  locale: Ref<string | undefined>
}> = Symbol('bvn::rtlPlugin')

export const breadcrumbPluginKey: InjectionKey<{
  items: Ref<BreadcrumbItemRaw[]>
  reset: () => void
}> = Symbol('bvn::breadcrumbPlugin')

export const modalManagerPluginKey: InjectionKey<{
  stack: ComputedRef<ComponentInternalInstance[]>
  countStack: ComputedRef<number>
  lastStack: ComputedRef<ComponentInternalInstance | undefined>
  pushStack: (modal: Readonly<ComponentInternalInstance>) => void
  removeStack: (modal: Readonly<ComponentInternalInstance>) => void
  registry: ComputedRef<ComponentInternalInstance[]>
  pushRegistry: (modal: Readonly<ComponentInternalInstance>) => void
  removeRegistry: (modal: Readonly<ComponentInternalInstance>) => void
}> = Symbol('bvn::modalManagerPlugin')

export const idPluginKey: InjectionKey<() => string> = Symbol('bvn::idPluginKey')

export const defaultsKey: InjectionKey<Ref<Partial<BvnComponentProps>>> = Symbol('bvn::defaults')

export const inputGroupKey: InjectionKey<boolean> = Symbol('bvn::inputGroup')

export const toastPluginKey: InjectionKey<{
  toasts: Ref<ToastOrchestratorArrayValue[]>
  _setIsAppend: (value: boolean) => void
  show: (obj: ToastOrchestratorShowParam) => symbol
  remove: (self: symbol) => void
  leave: (self: symbol) => void
}> = Symbol('bvn::toastPlugin')

export const modalControllerPluginKey: InjectionKey<{
  modals: Ref<Map<symbol, ModalOrchestratorMapValue>>
  show: (obj: ModalOrchestratorShowParam) => Promise<boolean | null>
  confirm: (obj: ModalOrchestratorShowParam) => Promise<boolean | null>
  remove: (self: symbol) => void
  leave: (self: symbol) => void
}> = Symbol('bvn::modalControllerPlugin')

export const tooltipPluginKey: InjectionKey<{
  tooltips: Ref<Map<symbol, TooltipOrchestratorMapValue>>
  show: (obj: TooltipOrchestratorShowParam) => symbol
  remove: (self: symbol) => void
  set: (self: symbol, val: Partial<PrivateOrchestratedTooltip>) => void
}> = Symbol('bvn::toastPlugin')

export const popoverPluginKey: InjectionKey<{
  popovers: Ref<Map<symbol, PopoverOrchestratorMapValue>>
  show: (obj: PopoverOrchestratorShowParam) => symbol
  remove: (self: symbol) => void
  set: (self: symbol, val: Partial<PrivateOrchestratedPopover>) => void
}> = Symbol('bvn::toastPlugin')
