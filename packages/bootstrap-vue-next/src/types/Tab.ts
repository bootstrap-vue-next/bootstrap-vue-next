import type {Slot} from 'vue'
import type {ClassValue} from '.'

export interface TabType {
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
  el: HTMLElement | null
}
