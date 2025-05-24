import type {Slot} from 'vue'
import type {ClassValue} from './AnyValuedAttributes'

export interface TabType {
  id: string
  title?: string
  active: boolean
  buttonId: string
  disabled: boolean
  titleComponent?: Slot
  titleItemClass?: () => ClassValue
  titleLinkAttrs?: () => Record<string, unknown>
  titleLinkClass?: () => ClassValue
  onClick?: () => (event: Event) => void
  navItemClasses?: ClassValue
  el: HTMLElement | null
}
