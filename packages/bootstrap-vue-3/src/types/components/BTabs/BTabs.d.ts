import type {Alignment} from '../..'
// Props
export interface Props {
  activeNavItemClass?: Array<unknown> | Record<string, unknown> | string
  activeTabClass?: Array<unknown> | Record<string, unknown> | string
  align?: Alignment.Horizontal
  card?: boolean
  contentClass?: Array<unknown> | Record<string, unknown> | string
  end?: boolean
  fill?: boolean
  id?: string
  justified?: boolean
  lazy?: boolean
  navClass?: Array<unknown> | Record<string, unknown> | string
  navWrapperClass?: Array<unknown> | Record<string, unknown> | string
  noFade?: boolean
  // noKeyNav?: boolean
  noNavStyle?: boolean
  pills?: boolean
  small?: boolean
  tag?: string
  vertical?: boolean
  modelValue?: number
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: number): void
  (e: 'activate-tab'): void
  (e: 'click'): void
}
// Other
export interface ParentData {
  lazy: boolean
  card: boolean
}
