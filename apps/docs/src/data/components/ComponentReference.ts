export type ComponentItem = Exclude<keyof ComponentReference, 'component' | 'sections'>
export type ComponentSection = 'Properties' | 'Events' | 'Slots'
export type EmitArgReference = {arg: string; type: string; description?: string}
export type SlotScopeReference = {prop: string; type: string | string[]; description?: string}

export interface PropertyReference {
  prop: string
  type?: string
  description?: string
  default?: unknown
}

export interface ComponentReference {
  component: string
  props: PropertyReference[]
  emits: {
    event: string
    args: EmitArgReference[]
    description?: string
  }[]
  slots: {
    scope?: SlotScopeReference[]
    name: string
    description?: string
  }[]
  sections?: ComponentSection[]
}
