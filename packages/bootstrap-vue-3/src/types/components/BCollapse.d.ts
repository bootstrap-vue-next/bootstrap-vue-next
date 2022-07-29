// Props
export interface Props {
  accordion?: string
  // appear?: Boolean
  id?: string
  // isNav?: Boolean
  modelValue?: boolean
  tag?: string
  toggle?: boolean
  visible?: boolean
}
// Emits
export interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
}
// Other
