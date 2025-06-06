import type {ComponentInternalInstance, ComputedRef, InjectionKey, Ref, ShallowRef} from 'vue'
import type {TabType} from '../types/Tab'
import type {ClassValue} from '../types/AnyValuedAttributes'
import type {Numberish, ValidationState} from '../types/CommonTypes'
import type {LiteralUnion} from '../types/LiteralUnion'
import type {Size} from '../types/Size'
import type {RadiusElement} from '../types/RadiusElement'
import type {
  BgColorVariant,
  ButtonVariant,
  ColorVariant,
  TextColorVariant,
} from '../types/ColorTypes'
import type {CheckboxValue} from '../types/CheckboxTypes'
import type {RadioValue} from '../types/RadioTypes'
import type {BreadcrumbItemRaw} from '../types/BreadcrumbTypes'
import type {
  ControllerKey,
  ModalOrchestratorCreateOptions,
  ModalOrchestratorCreateParam,
  ModalOrchestratorMapValue,
  PopoverOrchestratorCreateParam,
  PopoverOrchestratorMapValue,
  PromiseWithModal,
  PromiseWithModalBoolean,
  PromiseWithPopover,
  PromiseWithToast,
  ToastOrchestratorArrayValue,
  ToastOrchestratorCreateOptions,
  ToastOrchestratorCreateParam,
  TooltipOrchestratorCreateParam,
} from '../types/ComponentOrchestratorTypes'
import type {BvnComponentProps} from '../types/BootstrapVueOptions'

export const genericBvnPrefix = 'BootstrapVueNext__'

export const withBvnPrefix = (value: string, suffix: string = '') => {
  const suffixWithTrail = `${suffix}___`
  return `${genericBvnPrefix}ID__${value}__${suffix ? suffixWithTrail : ''}`
}

const createBvnInjectionKey = (name: string) => withBvnPrefix(name) as unknown as symbol // Type cast to symbol, these should be static
const createBvnPluginInjectionKey = (name: string) =>
  withBvnPrefix(`${name}__plugin`) as unknown as symbol

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
  registerTab: (tab: ComputedRef<TabType>) => string
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
  bgVariant: Readonly<Ref<BgColorVariant | null>>
  textVariant: Readonly<Ref<TextColorVariant | null>>
}> = createBvnInjectionKey('avatarGroup')

// BAccordion
export const accordionInjectionKey: InjectionKey<{
  openItem: Readonly<Ref<string | string[] | undefined>>
  free: Readonly<Ref<boolean>>
  initialAnimation: Readonly<Ref<boolean>>
  lazy: Readonly<Ref<boolean>>
  unmountLazy: Readonly<Ref<boolean>>
  setOpenItem: (id: string) => void
  setCloseItem: (id: string) => void
  registerAccordionItem: (id: string, el: Readonly<ShallowRef<HTMLElement | null>>) => void
  unregisterAccordionItem: (id: string) => void
}> = createBvnInjectionKey('accordion')

// BFormCheckboxGroup
export const checkboxGroupKey: InjectionKey<{
  modelValue: Ref<readonly CheckboxValue[]>
  switch: Readonly<Ref<boolean>>
  buttonVariant: Readonly<Ref<ButtonVariant | null>>
  form: Readonly<Ref<string | undefined>>
  name: Readonly<Ref<string>>
  state: Readonly<Ref<ValidationState | undefined>>
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
  state: Readonly<Ref<ValidationState | undefined>>
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

// Show/Hide components
export type RegisterShowHideFnInput = {
  id: string
  component: ComponentInternalInstance
  value: Ref<boolean>
  toggle: (resolveOnHide?: boolean) => Promise<boolean | string>
  show: (resolveOnHide?: boolean) => Promise<boolean | string>
  hide: (trigger?: string) => Promise<boolean | string>
  registerTrigger: (trigger: string, el: Element) => void
  unregisterTrigger: (trigger: string, el: Element, clean: boolean) => void
}

export interface RegisterShowHideMapValue {
  id: string
  component: ComponentInternalInstance
  value: Readonly<Ref<boolean>>
  toggle: (resolveOnHide?: boolean) => Promise<boolean | string | null>
  show: (resolveOnHide?: boolean) => Promise<boolean | string | null>
  hide: (trigger?: string, noTraverse?: boolean) => Promise<boolean | string | null>
  registerTrigger: (trigger: string, el: Element) => void
  unregisterTrigger: (trigger: string, el: Element, clean: boolean) => void
}
export interface RegisterShowHideValue {
  register: (input: RegisterShowHideFnInput) => {
    unregister: () => void
    updateId: (newId: string, oldId: string) => void
  }
  values: Ref<Map<string, RegisterShowHideMapValue>>
}
export const globalShowHideStorageInjectionKey: InjectionKey<RegisterShowHideValue> =
  createBvnPluginInjectionKey('globalShowHideStorage')

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
}> = createBvnPluginInjectionKey('rtl')

export const breadcrumbGlobalIndexKey = `${genericBvnPrefix}global_breadcrumb`
export const breadcrumbPluginKey: InjectionKey<{
  items: Ref<Record<string, BreadcrumbItemRaw[]>>
  reset: (key?: string) => void
}> = createBvnPluginInjectionKey('breadcrumbPlugin')

export const modalManagerPluginKey: InjectionKey<{
  stack: ComputedRef<ComponentInternalInstance[]>
  countStack: ComputedRef<number>
  lastStack: ComputedRef<ComponentInternalInstance | undefined>
  pushStack: (modal: Readonly<ComponentInternalInstance>) => void
  removeStack: (modal: Readonly<ComponentInternalInstance>) => void
  registry: Readonly<Ref<Map<number, ComponentInternalInstance>>>
  pushRegistry: (modal: Readonly<ComponentInternalInstance>) => void
  removeRegistry: (modal: Readonly<ComponentInternalInstance>) => void
}> = createBvnPluginInjectionKey('modalManager')

export const defaultsKey: InjectionKey<Ref<Partial<BvnComponentProps>>> =
  createBvnPluginInjectionKey('defaults')

export const inputGroupKey: InjectionKey<boolean> = createBvnInjectionKey('inputGroup')
export const buttonGroupKey: InjectionKey<boolean> = createBvnInjectionKey('buttonGroup')

export const toastPluginKey: InjectionKey<{
  toasts: Ref<ToastOrchestratorArrayValue[]>
  _isAppend: Ref<boolean>
  _isOrchestratorInstalled: Ref<boolean>
  create: (
    obj: ToastOrchestratorCreateParam,
    options?: ToastOrchestratorCreateOptions
  ) => PromiseWithToast
  /**
   * show
   * @deprecated
   */
  show: (obj: ToastOrchestratorCreateParam) => PromiseWithToast
}> = createBvnPluginInjectionKey('toast')

export const modalControllerPluginKey: InjectionKey<{
  modals: Ref<Map<ControllerKey, ModalOrchestratorMapValue>>
  _isOrchestratorInstalled: Ref<boolean>
  create: (
    obj: ModalOrchestratorCreateParam,
    options?: ModalOrchestratorCreateOptions
  ) => PromiseWithModal | PromiseWithModalBoolean
  /**
   * show
   * @deprecated
   */
  show: (obj: ModalOrchestratorCreateParam) => PromiseWithModalBoolean
  /**
   * show
   * @deprecated
   */
  confirm: (obj: ModalOrchestratorCreateParam) => PromiseWithModalBoolean
}> = createBvnPluginInjectionKey('modalController')

export const popoverPluginKey: InjectionKey<{
  popovers: Ref<Map<ControllerKey, PopoverOrchestratorMapValue>>
  popover: (obj: PopoverOrchestratorCreateParam) => PromiseWithPopover
  tooltip: (obj: TooltipOrchestratorCreateParam) => PromiseWithPopover
  _isOrchestratorInstalled: Ref<boolean>
}> = createBvnPluginInjectionKey('popover')

export const formGroupPluginKey: InjectionKey<
  (id: Ref<string>) => {
    state: Readonly<Ref<ValidationState | undefined>>
  }
> = createBvnInjectionKey('formGroupPlugin')
