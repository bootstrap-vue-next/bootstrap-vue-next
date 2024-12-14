export type ComponentItem = Exclude<keyof ComponentReference, 'component' | 'sections'>
export type ComponentSection = 'Properties' | 'Events' | 'Slots'
export type EmitArgReference = {arg: string; type: string; description?: string}
export type SlotScopeReference = {
  prop: string
  type: string | string[]
  description?: string
  notYetImplemented?: boolean
}

export interface PropertyReference {
  type?: string
  description?: string
  default?: unknown
  notYetImplemented?: boolean
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

export enum StyleKind {
  BootstrapClass = 'BOOTSTRAP-CLASS',
  BsvnClass = 'BSVN-CLASS',
  OverrideClass = 'OVERRIDE-CLASS',
  Tag = 'TAG',
  None = 'NONE',
}

export interface StyleSpec {
  kind: StyleKind
  value?: string
}

export interface ComponentReference {
  component: string
  styleSpec?: StyleSpec
  /**
   * Use package directory relative links. ex: BAccordion.vue => /BAccordion/BAccordion.vue (slash required)
   *
   * If path is empty string, it defaults to the package directory. If null, it does not render the button
   */
  sourcePath: string | null
  props: PropsRecord
  emits?: {
    event: string
    args?: EmitArgReference[]
    description?: string
  }[]
  slots?: {
    scope?: SlotScopeReference[]
    name: string
    description?: string
  }[]
  sections?: ComponentSection[]
}

export type MappedComponentReference = Omit<ComponentReference, 'props'> & {
  props: {name: string; linkTo?: string; ref: (PropertyReference & {prop: string})[]}[]
}

export type CollectiveMembersResponse = {
  MemberId: number
  createdAt: string
  type: string
  role: string
  tier: string
  isActive: boolean
  totalAmountDonated: number
  currency: string
  lastTransactionAt: string
  lastTransactionAmount: number
  profile: string
  name: string
  company: null | null
  description: string | null
  image: string | null
  email: null | string
  twitter: null | string
  github: string | null
  website: null | string
}

export type CollectivePartialResponse = {
  members: CollectiveMembersResponse[]
}
