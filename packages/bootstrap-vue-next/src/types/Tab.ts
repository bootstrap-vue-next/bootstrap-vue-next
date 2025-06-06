import type {Ref, Slot} from 'vue'
import type {ClassValue} from './AnyValuedAttributes'

export interface TabType {
  internalId: string
  id: string
  title?: string
  active: boolean
  buttonId: string
  disabled: boolean
  titleComponent?: Slot
  titleItemClass?: ClassValue
  titleLinkAttrs?: Record<string, unknown>
  titleLinkClass?: ClassValue
  onClick?: (event: Event) => void
  navItemClasses?: ClassValue
  el: Ref<HTMLElement | null>
}
