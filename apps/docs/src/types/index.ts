export type ComponentItem = Exclude<keyof ComponentReference, 'component' | 'sections'>
export type ComponentSection = 'Properties' | 'Events' | 'Slots'
export type EmitArgReference = {arg: string; type: string; description?: string}
export type SlotScopeReference = {prop: string; type: string | string[]; description?: string}

export interface PropertyReference {
  type?: string
  description?: string
  default?: unknown
}

/**
 * _linkTo is a special key that is used to link to another component's props
 * It is used in the docs to link to another component's props
 * It uses the 'type' key as a link to the component
 * omit `withBase` from the path. It will be added automatically
 *
 * (I'd use a symbol for this but it's not supported in JSON)
 * (I'd use a number for this but that's a string in JS objects, and causes a TS error)
 * (I'd use _linkTo?: string but that causes a TS error)
 *
 * ~magic~
 */
type PropsRecord = Record<string, Record<string, PropertyReference> & {_linkTo?: PropertyReference}>

export interface ComponentReference {
  component: string
  /**
   * Use package directory relative links. ex: BAccordion.vue => /BAccordion/BAccordion.vue (slash required)
   *
   * If path is empty string, it defaults to the package directory. If null, it does not render the button
   */
  sourcePath: string | null
  props: PropsRecord
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

export type MappedComponentReference = Omit<ComponentReference, 'props'> & {
  props: {name: string; linkTo?: string; ref: (PropertyReference & {prop: string})[]}[]
}
