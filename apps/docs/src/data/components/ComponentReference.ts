export type ComponentSection = 'Properties' | 'Events' | 'Slots'

export interface ComponentReference {
  component: string
  props: {
    prop: string
    type: string
    description?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default?: any
  }[]
  emits: {
    event: string
    args: {arg: string; type: string; description?: string}[]
    description?: string
  }[]
  slots: {
    scope: {prop: string; type: string | string[]; description?: string}[]
    name: string
    description?: string
  }[]
  sections?: ComponentSection[]
}
