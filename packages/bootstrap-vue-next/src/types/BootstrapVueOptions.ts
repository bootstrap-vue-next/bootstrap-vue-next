import type * as Components from '../components'
import type * as Directives from '../directives'
import type * as Composables from '../composables/exports'
import type {BvnComponentProps} from './ComponentProps'

export type ComponentType = keyof typeof Components
export type DirectiveType = keyof typeof Directives
export type ComposableType = keyof typeof Composables

export const ComponentNames = Object.freeze(
  Object.keys({
    BAccordion: null,
    BAccordionItem: null,
    BAlert: null,
    BAvatar: null,
    BAvatarGroup: null,
    BBadge: null,
    BBreadcrumb: null,
    BBreadcrumbItem: null,
    BButton: null,
    BButtonGroup: null,
    BButtonToolbar: null,
    BCard: null,
    BCardBody: null,
    BCardFooter: null,
    BCardGroup: null,
    BCardHeader: null,
    BCardImg: null,
    BCardSubtitle: null,
    BCardText: null,
    BCardTitle: null,
    BCarousel: null,
    BCarouselSlide: null,
    BCloseButton: null,
    BCol: null,
    BCollapse: null,
    BContainer: null,
    BDropdown: null,
    BDropdownDivider: null,
    BDropdownForm: null,
    BDropdownGroup: null,
    BDropdownHeader: null,
    BDropdownItem: null,
    BDropdownItemButton: null,
    BDropdownText: null,
    BForm: null,
    BFormCheckbox: null,
    BFormCheckboxGroup: null,
    BFormDatalist: null,
    BFormFile: null,
    BFormFloatingLabel: null,
    BFormGroup: null,
    BFormInput: null,
    BFormInvalidFeedback: null,
    BFormRadio: null,
    BFormRadioGroup: null,
    BFormRow: null,
    BFormSelect: null,
    BFormSelectOption: null,
    BFormSelectOptionGroup: null,
    BFormSpinbutton: null,
    BFormTag: null,
    BFormTags: null,
    BFormText: null,
    BFormTextarea: null,
    BFormValidFeedback: null,
    BImg: null,
    BInput: null,
    BInputGroup: null,
    BInputGroupText: null,
    BListGroup: null,
    BListGroupItem: null,
    BModal: null,
    BModalOrchestrator: null,
    BNav: null,
    BNavForm: null,
    BNavItem: null,
    BNavItemDropdown: null,
    BNavText: null,
    BNavbar: null,
    BNavbarBrand: null,
    BNavbarNav: null,
    BNavbarToggle: null,
    BOffcanvas: null,
    BOverlay: null,
    BPagination: null,
    BPlaceholder: null,
    BPlaceholderButton: null,
    BPlaceholderCard: null,
    BPlaceholderTable: null,
    BPlaceholderWrapper: null,
    BPopover: null,
    BProgress: null,
    BRow: null,
    BSpinner: null,
    BTab: null,
    BTabs: null,
    BToast: null,
    BToastOrchestrator: null,
    BTooltip: null,
    BLink: null,
    BProgressBar: null,
    BTableSimple: null,
    BTableLite: null,
    BTable: null,
    BTbody: null,
    BTd: null,
    BTh: null,
    BThead: null,
    BTfoot: null,
    BTr: null,
    BTransition: null,
  } satisfies Record<ComponentType, null>) as ComponentType[]
)

export const DirectiveNames = Object.freeze(
  Object.keys({
    vBColorMode: null,
    vBModal: null,
    vBPopover: null,
    vBScrollspy: null,
    vBToggle: null,
    vBTooltip: null,
  } satisfies Record<DirectiveType, null>) as DirectiveType[]
)

export const ComposableNames = Object.freeze(
  Object.keys({
    useBreadcrumb: null,
    useColorMode: null,
    useModal: null,
    useModalController: null,
    useScrollspy: null,
    useToast: null,
  } satisfies Record<ComposableType, null>) as ComposableType[]
)

export type ConfigurationOption<T extends string> = Partial<Record<T, boolean>> & {all: boolean}

export interface BootstrapVueOptions {
  /**
   * @default true
   */
  breadcrumb?: boolean
  /**
   * @default true
   */
  id?:
    | boolean
    /**
     * This function is allows users to provide a custom id generator
     * as a workaround for the lack of stable SSR IDs in Vue 3.x
     *
     * This lets the Nuxt module swap in the Nuxt `useId` function
     * which is stable across SSR and client.
     *
     * @default undefined
     */
    | {
        getId?: () => string
      }
  /**
   * @default true
   */
  modalController?: boolean
  /**
   * @default true
   */
  modalManager?: boolean
  /**
   * @default true
   */
  rtl?:
    | boolean
    | {
        /**
         * @default false
         */
        rtlInitial: boolean
        /**
         * @default undefined
         */
        localeInitial: string | undefined
      }
  /**
   * @default true
   */
  toast?: boolean
  components?: Partial<
    BvnComponentProps & {
      /**
       * @hint Globally sets all props with the matching name
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      global: Record<string, any>
    }
  >
}
