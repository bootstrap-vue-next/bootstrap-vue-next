export type EmitArgReference = {arg: string; type: string; description?: string}
export type SlotScopeReference = {prop: string; type: string | string[]; description?: string}
export type ComponentItem = 'props' | 'emits' | 'slots'
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
    args: EmitArgReference[]
    description?: string
  }[]
  slots: {
    scope: SlotScopeReference[]
    name: string
    description?: string
  }[]
  sections?: ComponentSection[]
  fields?: {
    [P in ComponentItem]: (keyof ComponentReference[P][number])[]
  }
}
