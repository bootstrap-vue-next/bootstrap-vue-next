import type {useScrollspy} from 'bootstrap-vue-next'

export type ComponentItem = Exclude<keyof ComponentReference, 'component' | 'sections'>

export interface PropertyReference {
  type?: string
  description?: string
  default?: unknown
  notYetImplemented?: boolean
}

export type PropsRecordWithOptions = {
  _data: PropsRecord // Allows for a single section or multiple sections
  _opts?: {linkTo?: string}
}
// Flat variant
export type PropsRecord = Record<string, PropertyReference>
// Multiple sections variant
export type PropsRecordWithMultipleSections = {
  [defaultPropSectionSymbol]: PropsRecord | PropsRecordWithOptions
} & {[key: string]: PropsRecord | PropsRecordWithOptions}
// Options variant
export const defaultPropSectionSymbol = '_defaultPropSection'

export type EmitArgReference = Record<string, {type: string; description?: string}>
export type EmitReference = {
  args?: EmitArgReference
  description?: string
}
export type EmitsRecord = Record<string, EmitReference>

export type SlotScopeReference = Record<
  string,
  {
    type: string | string[]
    description?: string
    notYetImplemented?: boolean
  }
>
export type SlotsRecord = Record<
  string,
  {
    scope?: SlotScopeReference
    description?: string
  }
>

export const enum StyleKind {
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

export type ComponentSection = 'Properties' | 'Events' | 'Slots'
export type ComponentReference = Record<
  string,
  {
    styleSpec?: StyleSpec
    /**
     * Use package directory relative links. ex: BAccordion.vue => /BAccordion/BAccordion.vue (slash required)
     *
     * If path is empty string, it defaults to the package directory. If null, it does not render the button
     */
    sourcePath: string | null
    props: PropsRecordWithOptions | PropsRecord | PropsRecordWithMultipleSections
    emits?: EmitsRecord
    slots?: SlotsRecord
    sections?: ComponentSection[]
  }
>

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

export type ScrollspyItem = ReturnType<typeof useScrollspy>['list']['value'][0]
export type HeaderItem = ScrollspyItem & {tag: string; level: number}
export type ContentsItem = HeaderItem & {children: ContentsItem[]}
