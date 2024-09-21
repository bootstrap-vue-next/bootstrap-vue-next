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
import {bvnPrefix} from './bvnPrefix'

const createBvnInjectionKey = (name: string) => bvnPrefix(name) as unknown as symbol // Type cast to symbol, these should be static

// BCarousel
export const carouselInjectionKey: InjectionKey<{
  background: Readonly<Ref<string | undefined>>
  width: Readonly<Ref<string | undefined>>
  height: Readonly<Ref<string | undefined>>
}> = createBvnInjectionKey('carousel')

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
}> = createBvnInjectionKey('tabs')

// BProgress
export const progressInjectionKey: InjectionKey<{
  animated: Readonly<Ref<boolean | undefined>>
  max: Readonly<Ref<Numberish>>
  showProgress: Readonly<Ref<boolean | undefined>>
  showValue: Readonly<Ref<boolean | undefined>>
  striped: Readonly<Ref<boolean | undefined>>
}> = createBvnInjectionKey('progress')

// BListGroup
export const listGroupInjectionKey: InjectionKey<{
  numbered: Readonly<Ref<boolean>>
}> = createBvnInjectionKey('listGroup')

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
}> = createBvnInjectionKey('avatarGroup')

// BAccordion
export const accordionInjectionKey: InjectionKey<{
  openItem: Readonly<Ref<string | undefined>>
  free: Readonly<Ref<boolean>>
  setOpenItem: (id: string) => void
}> = createBvnInjectionKey('accordion')

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
}> = createBvnInjectionKey('checkboxGroup')

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
}> = createBvnInjectionKey('radioGroup')

// Collapse
export const collapseInjectionKey: InjectionKey<{
  id?: Readonly<Ref<string>>
  readonly hide?: () => void
  readonly show?: () => void
  readonly toggle?: () => void
  visible?: Readonly<Ref<boolean>>
  isNav?: Readonly<Ref<boolean>>
}> = createBvnInjectionKey('collapse')

export const dropdownInjectionKey: InjectionKey<{
  id?: Readonly<Ref<string>>
  readonly hide?: () => void
  readonly show?: () => void
  readonly toggle?: () => void
  visible?: Readonly<Ref<boolean>>
  isNav?: Readonly<Ref<boolean>>
}> = createBvnInjectionKey('dropdown')

export const navbarInjectionKey: InjectionKey<{
  tag?: Readonly<Ref<string>>
  autoClose?: Readonly<Ref<boolean>>
}> = createBvnInjectionKey('navbar')

export const rtlPluginKey: InjectionKey<{
  isRtl: Ref<boolean>
  locale: Ref<string | undefined>
}> = createBvnInjectionKey('rtlPlugin')

export const breadcrumbPluginKey: InjectionKey<{
  items: Ref<BreadcrumbItemRaw[]>
  reset: () => void
}> = createBvnInjectionKey('breadcrumbPlugin')

export const modalManagerPluginKey: InjectionKey<{
  stack: ComputedRef<ComponentInternalInstance[]>
  countStack: ComputedRef<number>
  lastStack: ComputedRef<ComponentInternalInstance | undefined>
  pushStack: (modal: Readonly<ComponentInternalInstance>) => void
  removeStack: (modal: Readonly<ComponentInternalInstance>) => void
  registry: Readonly<Ref<Map<number, ComponentInternalInstance>>>
  pushRegistry: (modal: Readonly<ComponentInternalInstance>) => void
  removeRegistry: (modal: Readonly<ComponentInternalInstance>) => void
}> = createBvnInjectionKey('modalManagerPlugin')

export const defaultsKey: InjectionKey<Ref<Partial<BvnComponentProps>>> =
  createBvnInjectionKey('defaults')

export const inputGroupKey: InjectionKey<boolean> = createBvnInjectionKey('inputGroup')

export const toastPluginKey: InjectionKey<{
  toasts: Ref<ToastOrchestratorArrayValue[]>
  _setIsAppend: (value: boolean) => void
  show: (obj: ToastOrchestratorShowParam) => symbol
  remove: (self: symbol) => void
  leave: (self: symbol) => void
}> = createBvnInjectionKey('toastPlugin')

export const modalControllerPluginKey: InjectionKey<{
  modals: Ref<Map<symbol, ModalOrchestratorMapValue>>
  show: (obj: ModalOrchestratorShowParam) => Promise<boolean | null>
  confirm: (obj: ModalOrchestratorShowParam) => Promise<boolean | null>
  remove: (self: symbol) => void
  leave: (self: symbol) => void
}> = createBvnInjectionKey('modalControllerPlugin')

export const tooltipPluginKey: InjectionKey<{
  tooltips: Ref<Map<symbol, TooltipOrchestratorMapValue>>
  show: (obj: TooltipOrchestratorShowParam) => symbol
  remove: (self: symbol) => void
  set: (self: symbol, val: Partial<PrivateOrchestratedTooltip>) => void
}> = createBvnInjectionKey('tooltipPlugin')

export const popoverPluginKey: InjectionKey<{
  popovers: Ref<Map<symbol, PopoverOrchestratorMapValue>>
  show: (obj: PopoverOrchestratorShowParam) => symbol
  remove: (self: symbol) => void
  set: (self: symbol, val: Partial<PrivateOrchestratedPopover>) => void
}> = createBvnInjectionKey('popoverPlugin')
