import type {InjectionKey} from 'vue'
import type {
  BAvatarGroupParentData,
  BCarouselParentData,
  BListGroupParentData,
  BProgressParentData,
  BTabsParentData,
} from '../types/components'
import type {UseBreadcrumbOptions} from '../composables/useBreadcrumb'

// BCarousel
export const carouselInjectionKey: InjectionKey<BCarouselParentData> = Symbol()

// BTabs
export const tabsInjectionKey: InjectionKey<BTabsParentData> = Symbol()

// useBreadcrumb
export const breadcrumbInjectionKey: InjectionKey<UseBreadcrumbOptions> = Symbol()

// BProgress
export const progressInjectionKey: InjectionKey<BProgressParentData> = Symbol()

// BListGroup
export const listGroupInjectionKey: InjectionKey<BListGroupParentData> = Symbol()

// BAvatarGroup
export const avatarGroupInjectionKey: InjectionKey<BAvatarGroupParentData> = Symbol()

// BAccordion
export const accordionInjectionKey: InjectionKey<string> = Symbol()
