export interface ComponentReference {
  component: string
  props: {
    prop: string
    type: string
    description?: string
    default?: string
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
}
