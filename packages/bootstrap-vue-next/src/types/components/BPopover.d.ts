import type {BvTriggerableEvent, ColorVariant} from '..'
import type {ComponentPublicInstance} from 'vue'
// Props
export interface Props {
  modelValue?: Booleanish
  container?: string | ComponentPublicInstance<HTMLElement> | HTMLElement | null
  target?:
    | (() => HTMLElement | VNode)
    | string
    | ComponentPublicInstance<HTMLElement>
    | HTMLSpanElement
    | HTMLElement
    | null
  reference?:
    | (() => HTMLElement | VNode)
    | string
    | ComponentPublicInstance<HTMLElement>
    | HTMLSpanElement
    | HTMLElement
    | null
  content?: string
  id?: string
  title?: string
  delay?: number | DelayObject
  click?: Booleanish
  manual?: Booleanish
  variant?: ColorVariant
  offset?: number | null
  customClass?: string
  placement?: Placement
  strategy?: Strategy
  floatingMiddleware?: Middleware[]
  noFlip?: Booleanish
  noShift?: Booleanish
  noFade?: Booleanish
  noAutoClose?: Booleanish
  hide?: Booleanish
  realtime?: Booleanish
  inline?: Booleanish
  tooltip?: Booleanish
  html?: Booleanish
}
// Emits
export interface Emits {
  (e: 'show', value: BvTriggerableEvent): void
  (e: 'shown', value: BvTriggerableEvent): void
  (e: 'hide', value: BvTriggerableEvent): void
  (e: 'hidden', value: BvTriggerableEvent): void
  (e: 'hide-prevented'): void
  (e: 'show-prevented'): void
  (e: 'update:modelValue', value: boolean): void
}

// Other
/**
 * @external
 */
export interface DelayObject {
  show: number
  hide: number
}
