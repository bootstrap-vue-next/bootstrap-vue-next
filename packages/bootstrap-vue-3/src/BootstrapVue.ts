import {App, Plugin} from 'vue'
import Components from './components'
import Directives from './directives'

import {BootstrapVueOptions} from './types'
import {createBreadcrumb} from './composables'
import './styles/styles.scss'

// All available components
// Keep this list in sync with /components/index.ts please
const {
  BAccordion,
  BAccordionItem,
  BAlert,
  BAvatar,
  BAvatarGroup,
  BBadge,
  BBreadcrumb,
  BBreadcrumbItem,
  BButton,
  BButtonGroup,
  BButtonToolbar,
  BCard,
  BCardBody,
  BCardFooter,
  BCardGroup,
  BCardHeader,
  BCardImg,
  BCardSubTitle,
  BCardText,
  BCardTitle,
  BCarousel,
  BCarouselSlide,
  BCloseButton,
  BCol,
  BCollapse,
  BContainer,
  BDropdown,
  BDropdownDivider,
  BDropdownForm,
  BDropdownGroup,
  BDropdownHeader,
  BDropdownItem,
  BDropdownItemButton,
  BDropdownText,
  BForm,
  BFormFloatingLabel,
  BFormInvalidFeedback,
  BFormRow,
  BFormText,
  BFormValidFeedback,
  BFormCheckbox,
  BFormCheckboxGroup,
  BFormGroup,
  BFormInput,
  BFormRadio,
  BFormRadioGroup,
  BFormSelect,
  BFormSelectOption,
  BFormSelectOptionGroup,
  BFormTag,
  BFormTags,
  BFormTextarea,
  BImg,
  BInputGroup,
  BInputGroupAddon,
  BInputGroupAppend,
  BInputGroupPrepend,
  BInputGroupText,
  BLink,
  BListGroup,
  BListGroupItem,
  BModal,
  BNav,
  BNavItem,
  BNavItemDropdown,
  BOffcanvas,
  BOverlay,
  BPagination,
  BPopover,
  BProgress,
  BProgressBar,
  BRow,
  BSkeleton,
  BSkeletonIcon,
  BSkeletonTable,
  BSkeletonWrapper,
  BSpinner,
  BTab,
  BTable,
  BTableSimple,
  BTbody,
  BTd,
  BTfoot,
  BTh,
  BThead,
  BTr,
  BTabs,
  BToastContainer,
  BTransition,
  BToast,
  BToaster,
  BToastPlugin,
} = Components

// Export available composables
export {useToast} from './components/BToast/'

// Export available plugins
// Not to be confused with the above main app plugin
export {BToastPlugin}

// Export utils
export {BvEvent} from './utils'

// Export available directives
const {
  BPopover: VBPopover,
  BToggle: VBToggle,
  BTooltip: VBTooltip,
  BVisible: VBVisible,
} = Directives
export {VBPopover, VBToggle, VBTooltip, VBVisible}

// Main app plugin
const plugin: Plugin = {
  // TODO: use options in the future
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(app: App, options: BootstrapVueOptions = {}) {
    Object.entries(Components).forEach(([name, component]) => {
      app.component(name, component)
    })

    Object.entries(Directives).forEach(([name, component]) => {
      app.directive(name, component)
    })

    createBreadcrumb(app)
  },
}

export {plugin as BootstrapVue3}
export default plugin

// Inject all components into the global @vue/runtime-core
// This allows intellisense in templates w/out direct importing
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BAccordion: typeof BAccordion
    BAccordionItem: typeof BAccordionItem
    BAlert: typeof BAlert
    BAvatar: typeof BAvatar
    BAvatarGroup: typeof BAvatarGroup
    BBadge: typeof BBadge
    BBreadcrumb: typeof BBreadcrumb
    BBreadcrumbItem: typeof BBreadcrumbItem
    BButton: typeof BButton
    BButtonGroup: typeof BButtonGroup
    BButtonToolbar: typeof BButtonToolbar
    BCard: typeof BCard
    BCardBody: typeof BCardBody
    BCardFooter: typeof BCardFooter
    BCardGroup: typeof BCardGroup
    BCardHeader: typeof BCardHeader
    BCardImg: typeof BCardImg
    BCardSubTitle: typeof BCardSubTitle
    BCardText: typeof BCardText
    BCardTitle: typeof BCardTitle
    BCarousel: typeof BCarousel
    BCarouselSlide: typeof BCarouselSlide
    BCloseButton: typeof BCloseButton
    BCol: typeof BCol
    BCollapse: typeof BCollapse
    BContainer: typeof BContainer
    BDropdown: typeof BDropdown
    BDropdownDivider: typeof BDropdownDivider
    BDropdownForm: typeof BDropdownForm
    BDropdownGroup: typeof BDropdownGroup
    BDropdownHeader: typeof BDropdownHeader
    BDropdownItem: typeof BDropdownItem
    BDropdownItemButton: typeof BDropdownItemButton
    BDropdownText: typeof BDropdownText
    BForm: typeof BForm
    BFormCheckbox: typeof BFormCheckbox
    BFormCheckboxGroup: typeof BFormCheckboxGroup
    BFormFloatingLabel: typeof BFormFloatingLabel
    BFormGroup: typeof BFormGroup
    BFormInput: typeof BFormInput
    BFormInvalidFeedback: typeof BFormInvalidFeedback
    BFormRadio: typeof BFormRadio
    BFormRadioGroup: typeof BFormRadioGroup
    BFormRow: typeof BFormRow
    BFormSelect: typeof BFormSelect
    BFormSelectOption: typeof BFormSelectOption
    BFormSelectOptionGroup: typeof BFormSelectOptionGroup
    BFormText: typeof BFormText
    BFormTextarea: typeof BFormTextarea
    BFormTag: typeof BFormTag
    BFormTags: typeof BFormTags
    BFormValidFeedback: typeof BFormValidFeedback
    BImg: typeof BImg
    BInputGroup: typeof BInputGroup
    BInputGroupAddon: typeof BInputGroupAddon
    BInputGroupAppend: typeof BInputGroupAppend
    BInputGroupPrepend: typeof BInputGroupPrepend
    BInputGroupText: typeof BInputGroupText
    BLink: typeof BLink
    BListGroup: typeof BListGroup
    BListGroupItem: typeof BListGroupItem
    BModal: typeof BModal
    BNav: typeof BNav
    BNavItem: typeof BNavItem
    BNavItemDropdown: typeof BNavItemDropdown
    BOffcanvas: typeof BOffcanvas
    BOverlay: typeof BOverlay
    BPagination: typeof BPagination
    BPopover: typeof BPopover
    BProgress: typeof BProgress
    BProgressBar: typeof BProgressBar
    BRow: typeof BRow
    BSkeleton: typeof BSkeleton
    BSkeletonIcon: typeof BSkeletonIcon
    BSkeletonTable: typeof BSkeletonTable
    BSkeletonWrapper: typeof BSkeletonWrapper
    BSpinner: typeof BSpinner
    BTab: typeof BTab
    BTable: typeof BTable
    BTableSimple: typeof BTableSimple
    BTbody: typeof BTbody
    BTd: typeof BTd
    BTfoot: typeof BTfoot
    BTh: typeof BTh
    BThead: typeof BThead
    BTr: typeof BTr
    BToast: typeof BToast
    BToaster: typeof BToaster
    BToastContainer: typeof BToastContainer
    BTabs: typeof BTabs
    BTransition: typeof BTransition
    BToastPlugin: typeof BToastPlugin
  }
}

// Export types
export type {
  Alignment,
  Animation,
  BootstrapVueOptions,
  BreadcrumbItem,
  BreadcrumbItemObject,
  Breakpoint,
  ColBreakpointProps,
  RowColsBreakpointProps,
  OffsetBreakpointProps,
  OrderBreakpointProps,
  ButtonType,
  ButtonVariant,
  ColorVariant,
  ContainerVerticalAlign,
  ContainerHorizontalAlign,
  ContainerPosition,
  InputSize,
  InputType,
  LinkTarget,
  LiteralUnion,
  Pagination,
  PaginationPage,
  Position,
  RadioOption,
  SelectOption,
  Size,
  SkeletonAnimation,
  SkeletonType,
  SpinnerType,
  TableFieldObject,
  TableField,
  TableItem,
  TextColorVariant,
  TransitionMode,
  VerticalAlign,
} from './types'

// Finally export components
export {
  BAccordion,
  BAccordionItem,
  BAlert,
  BAvatar,
  BAvatarGroup,
  BBadge,
  BBreadcrumb,
  BBreadcrumbItem,
  BButton,
  BButtonGroup,
  BButtonToolbar,
  BCard,
  BCardBody,
  BCardFooter,
  BCardGroup,
  BCardHeader,
  BCardImg,
  BCardSubTitle,
  BCardText,
  BCardTitle,
  BCarousel,
  BCarouselSlide,
  BCloseButton,
  BCol,
  BCollapse,
  BContainer,
  BDropdown,
  BDropdownDivider,
  BDropdownForm,
  BDropdownGroup,
  BDropdownHeader,
  BDropdownItem,
  BDropdownItemButton,
  BDropdownText,
  BForm,
  BFormFloatingLabel,
  BFormInvalidFeedback,
  BFormRow,
  BFormText,
  BFormValidFeedback,
  BFormCheckbox,
  BFormCheckboxGroup,
  BFormGroup,
  BFormInput,
  BFormRadio,
  BFormRadioGroup,
  BFormSelect,
  BFormSelectOption,
  BFormSelectOptionGroup,
  BFormTag,
  BFormTags,
  BFormTextarea,
  BImg,
  BInputGroup,
  BInputGroupAddon,
  BInputGroupAppend,
  BInputGroupPrepend,
  BInputGroupText,
  BLink,
  BListGroup,
  BListGroupItem,
  BModal,
  BNav,
  BNavItem,
  BNavItemDropdown,
  BOffcanvas,
  BOverlay,
  BPagination,
  BPopover,
  BProgress,
  BProgressBar,
  BRow,
  BSkeleton,
  BSkeletonIcon,
  BSkeletonTable,
  BSkeletonWrapper,
  BSpinner,
  BTab,
  BTable,
  BTableSimple,
  BTbody,
  BTd,
  BTfoot,
  BTh,
  BThead,
  BTr,
  BTabs,
  BToast,
  BToaster,
  BToastContainer,
  BTransition,
}
