import type * as Components from '../components'
import type * as Directives from '../directives'
import type * as Composables from '../composables/exports'
import type {BvnComponentProps} from './ComponentProps'

export type ComponentType = keyof typeof Components
export type DirectiveType = keyof typeof Directives
export type ComposableType = keyof typeof Composables

export const ComponentNames = Object.freeze(
  Object.keys({
    BAccordion: 'BAccordion',
    BAccordionItem: 'BAccordionItem',
    BAlert: 'BAlert',
    BAvatar: 'BAvatar',
    BAvatarGroup: 'BAvatarGroup',
    BBadge: 'BBadge',
    BBreadcrumb: 'BBreadcrumb',
    BBreadcrumbItem: 'BBreadcrumbItem',
    BButton: 'BButton',
    BButtonGroup: 'BButtonGroup',
    BButtonToolbar: 'BButtonToolbar',
    BCard: 'BCard',
    BCardBody: 'BCardBody',
    BCardFooter: 'BCardFooter',
    BCardGroup: 'BCardGroup',
    BCardHeader: 'BCardHeader',
    BCardImg: 'BCardImg',
    BCardSubtitle: 'BCardSubtitle',
    BCardText: 'BCardText',
    BCardTitle: 'BCardTitle',
    BCarousel: 'BCarousel',
    BCarouselSlide: 'BCarouselSlide',
    BCloseButton: 'BCloseButton',
    BCol: 'BCol',
    BCollapse: 'BCollapse',
    BContainer: 'BContainer',
    BDropdown: 'BDropdown',
    BDropdownDivider: 'BDropdownDivider',
    BDropdownForm: 'BDropdownForm',
    BDropdownGroup: 'BDropdownGroup',
    BDropdownHeader: 'BDropdownHeader',
    BDropdownItem: 'BDropdownItem',
    BDropdownItemButton: 'BDropdownItemButton',
    BDropdownText: 'BDropdownText',
    BForm: 'BForm',
    BFormCheckbox: 'BFormCheckbox',
    BFormCheckboxGroup: 'BFormCheckboxGroup',
    BFormDatalist: 'BFormDatalist',
    BFormFile: 'BFormFile',
    BFormFloatingLabel: 'BFormFloatingLabel',
    BFormGroup: 'BFormGroup',
    BFormInput: 'BFormInput',
    BFormInvalidFeedback: 'BFormInvalidFeedback',
    BFormRadio: 'BFormRadio',
    BFormRadioGroup: 'BFormRadioGroup',
    BFormRow: 'BFormRow',
    BFormSelect: 'BFormSelect',
    BFormSelectOption: 'BFormSelectOption',
    BFormSelectOptionGroup: 'BFormSelectOptionGroup',
    BFormSpinbutton: 'BFormSpinbutton',
    BFormTag: 'BFormTag',
    BFormTags: 'BFormTags',
    BFormText: 'BFormText',
    BFormTextarea: 'BFormTextarea',
    BFormValidFeedback: 'BFormValidFeedback',
    BImg: 'BImg',
    BInput: 'BInput',
    BInputGroup: 'BInputGroup',
    BInputGroupText: 'BInputGroupText',
    BListGroup: 'BListGroup',
    BListGroupItem: 'BListGroupItem',
    BModal: 'BModal',
    BModalOrchestrator: 'BModalOrchestrator',
    BNav: 'BNav',
    BNavForm: 'BNavForm',
    BNavItem: 'BNavItem',
    BNavItemDropdown: 'BNavItemDropdown',
    BNavText: 'BNavText',
    BNavbar: 'BNavbar',
    BNavbarBrand: 'BNavbarBrand',
    BNavbarNav: 'BNavbarNav',
    BNavbarToggle: 'BNavbarToggle',
    BOffcanvas: 'BOffcanvas',
    BOverlay: 'BOverlay',
    BPagination: 'BPagination',
    BPlaceholder: 'BPlaceholder',
    BPlaceholderButton: 'BPlaceholderButton',
    BPlaceholderCard: 'BPlaceholderCard',
    BPlaceholderTable: 'BPlaceholderTable',
    BPlaceholderWrapper: 'BPlaceholderWrapper',
    BPopover: 'BPopover',
    BProgress: 'BProgress',
    BRow: 'BRow',
    BSpinner: 'BSpinner',
    BTab: 'BTab',
    BTabs: 'BTabs',
    BToast: 'BToast',
    BToastOrchestrator: 'BToastOrchestrator',
    BTooltip: 'BTooltip',
    BLink: 'BLink',
    BProgressBar: 'BProgressBar',
    BTableSimple: 'BTableSimple',
    BTableLite: 'BTableLite',
    BTable: 'BTable',
    BTbody: 'BTbody',
    BTd: 'BTd',
    BTh: 'BTh',
    BThead: 'BThead',
    BTfoot: 'BTfoot',
    BTr: 'BTr',
    BTransition: 'BTransition',
  } satisfies Record<ComponentType, string>) as ComponentType[]
)

export const DirectiveNames = Object.freeze(
  Object.keys({
    vBColorMode: 'vBColorMode',
    vBModal: 'vBModal',
    vBPopover: 'vBPopover',
    vBScrollspy: 'vBScrollspy',
    vBToggle: 'vBToggle',
    vBTooltip: 'vBTooltip',
  } satisfies Record<DirectiveType, string>) as DirectiveType[]
)

export const ComposableNames = Object.freeze(
  Object.keys({
    useBreadcrumb: 'useBreadcrumb',
    useColorMode: 'useColorMode',
    useModal: 'useModal',
    useModalController: 'useModalController',
    useScrollspy: 'useScrollspy',
    useToast: 'useToast',
  } satisfies Record<ComposableType, string>) as ComposableType[]
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
