import {type ComputedRef, type ShallowRef, type Ref} from 'vue'

export interface blurFocusExposes {
  blur: () => void
  focus: () => void
}

export type BFormCheckboxGroupExposes = blurFocusExposes

export type BFormRadioGroupExposes = blurFocusExposes

export interface BFormSelectExposes extends blurFocusExposes {
  element: Readonly<
    | ShallowRef<HTMLSelectElement | null, HTMLSelectElement | null>
    | ComputedRef<HTMLSelectElement | null>
  >
}
