import type {useScrollspy} from 'bootstrap-vue-next'

export * from './deprecation'

export type ComponentItem = Exclude<keyof ComponentReference, 'component' | 'sections'>

export interface PropReference {
  type?: string
  description?: string
  default?: unknown
}

export type PropRecordWithOptions = {
  _data: PropRecord // Allows for a single section or multiple sections
  _opts?: {linkTo?: string}
}
// Flat variant
export type PropRecord<T extends string = string> = Record<T, PropReference>
// Multiple sections variant
export type PropRecordWithMultipleSections = {
  [defaultPropSectionSymbol]: PropRecord | PropRecordWithOptions
} & {[key: string]: PropRecord | PropRecordWithOptions}
// Options variant
export const defaultPropSectionSymbol = '_defaultPropSection'

export type EmitArgReference = Record<string, {type: string; description?: string}>
export type EmitReference = {
  args?: EmitArgReference
  description?: string
}
export type EmitRecord<T extends string = string> = Record<T, EmitReference>

export type SlotScopeReference = Record<
  string,
  {
    type: string | string[]
    description?: string
  }
>
export type SlotReference = {
  scope?: SlotScopeReference
  description?: string
}
export type SlotRecord<T extends string = string> = Record<T, SlotReference>

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
     * If not provided, the source path will be automatically derived from the component name.
     * If null, the "View Source" button is not rendered.
     */
    sourcePath?: string | null
    props: PropRecordWithOptions | PropRecord | PropRecordWithMultipleSections
    emits?: EmitRecord
    slots?: SlotRecord
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
