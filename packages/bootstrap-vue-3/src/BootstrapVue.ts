import {App, Plugin} from 'vue'

import './styles/styles.scss'

import * as Components from './components'
import * as Directives from './directives/exports'
import {createBreadcrumb} from './composables'
import {BootstrapVueOptions} from './types'

// Inject all components into the global @vue/runtime-core
// This allows intellisense in templates w/out direct importing
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BAccordion: typeof Components.BAccordion
    BAccordionItem: typeof Components.BAccordionItem
    BAlert: typeof Components.BAlert
    BAvatar: typeof Components.BAvatar
    BAvatarGroup: typeof Components.BAvatarGroup
    BBadge: typeof Components.BBadge
    BBreadcrumb: typeof Components.BBreadcrumb
    BBreadcrumbItem: typeof Components.BBreadcrumbItem
    BButton: typeof Components.BButton
    BButtonGroup: typeof Components.BButtonGroup
    BButtonToolbar: typeof Components.BButtonToolbar
    BCard: typeof Components.BCard
    BCardBody: typeof Components.BCardBody
    BCardFooter: typeof Components.BCardFooter
    BCardGroup: typeof Components.BCardGroup
    BCardHeader: typeof Components.BCardHeader
    BCardImg: typeof Components.BCardImg
    BCardSubtitle: typeof Components.BCardSubtitle
    BCardText: typeof Components.BCardText
    BCardTitle: typeof Components.BCardTitle
    BCarousel: typeof Components.BCarousel
    BCarouselSlide: typeof Components.BCarouselSlide
    BCloseButton: typeof Components.BCloseButton
    BCol: typeof Components.BCol
    BCollapse: typeof Components.BCollapse
    BContainer: typeof Components.BContainer
    BDropdown: typeof Components.BDropdown
    BDropdownDivider: typeof Components.BDropdownDivider
    BDropdownForm: typeof Components.BDropdownForm
    BDropdownGroup: typeof Components.BDropdownGroup
    BDropdownHeader: typeof Components.BDropdownHeader
    BDropdownItem: typeof Components.BDropdownItem
    BDropdownItemButton: typeof Components.BDropdownItemButton
    BDropdownText: typeof Components.BDropdownText
    BForm: typeof Components.BForm
    BFormCheckbox: typeof Components.BFormCheckbox
    BFormCheckboxGroup: typeof Components.BFormCheckboxGroup
    BFormFloatingLabel: typeof Components.BFormFloatingLabel
    BFormGroup: typeof Components.BFormGroup
    BFormInput: typeof Components.BFormInput
    BFormInvalidFeedback: typeof Components.BFormInvalidFeedback
    BFormRadio: typeof Components.BFormRadio
    BFormRadioGroup: typeof Components.BFormRadioGroup
    BFormRow: typeof Components.BFormRow
    BFormSelect: typeof Components.BFormSelect
    BFormSelectOption: typeof Components.BFormSelectOption
    BFormSelectOptionGroup: typeof Components.BFormSelectOptionGroup
    BFormText: typeof Components.BFormText
    BFormTextarea: typeof Components.BFormTextarea
    BFormTag: typeof Components.BFormTag
    BFormTags: typeof Components.BFormTags
    BFormSpinButton: typeof Components.BFormSpinButton
    BFormValidFeedback: typeof Components.BFormValidFeedback
    BImg: typeof Components.BImg
    BInputGroup: typeof Components.BInputGroup
    BInputGroupAddon: typeof Components.BInputGroupAddon
    BInputGroupAppend: typeof Components.BInputGroupAppend
    BInputGroupPrepend: typeof Components.BInputGroupPrepend
    BInputGroupText: typeof Components.BInputGroupText
    BLink: typeof Components.BLink
    BListGroup: typeof Components.BListGroup
    BListGroupItem: typeof Components.BListGroupItem
    BModal: typeof Components.BModal
    BNav: typeof Components.BNav
    BNavForm: typeof Components.BNavForm
    BNavText: typeof Components.BNavText
    BNavbar: typeof Components.BNavbar
    BNavbarBrand: typeof Components.BNavbarBrand
    BNavbarNav: typeof Components.BNavbarNav
    BNavbarToggle: typeof Components.BNavbarToggle
    BNavItem: typeof Components.BNavItem
    BNavItemDropdown: typeof Components.BNavItemDropdown
    BOffcanvas: typeof Components.BOffcanvas
    BOverlay: typeof Components.BOverlay
    BPagination: typeof Components.BPagination
    BPlaceholder: typeof Components.BPlaceholder
    BPlaceholderButton: typeof Components.BPlaceholderButton
    BPlaceholderCard: typeof Components.BPlaceholderCard
    BPlaceholderTable: typeof Components.BPlaceholderTable
    BPlaceholderWrapper: typeof Components.BPlaceholderWrapper
    BPopover: typeof Components.BPopover
    BProgress: typeof Components.BProgress
    BProgressBar: typeof Components.BProgressBar
    BRow: typeof Components.BRow
    BSkeleton: typeof Components.BSkeleton
    BSkeletonIcon: typeof Components.BSkeletonIcon
    BSkeletonTable: typeof Components.BSkeletonTable
    BSkeletonWrapper: typeof Components.BSkeletonWrapper
    BSpinner: typeof Components.BSpinner
    BTab: typeof Components.BTab
    BTable: typeof Components.BTable
    BTableSimple: typeof Components.BTableSimple
    BTbody: typeof Components.BTbody
    BTd: typeof Components.BTd
    BTfoot: typeof Components.BTfoot
    BTh: typeof Components.BTh
    BThead: typeof Components.BThead
    BTr: typeof Components.BTr
    BToast: typeof Components.BToast
    BToaster: typeof Components.BToaster
    BToastContainer: typeof Components.BToastContainer
    BTabs: typeof Components.BTabs
    BTransition: typeof Components.BTransition
    BToastPlugin: typeof Components.BToastPlugin
  }
}

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

export * from './components'
export * as Components from './components'
export * from './directives/exports'
export * as Directives from './directives/exports'
export * from './composables/exports'
export * as Composables from './composables/exports'
export * from './utils/exports'
export * as Utils from './utils/exports'
export * from './types/exports'
export * as Types from './types/exports'
export {useToast} from './components/BToast/'

export {plugin as BootstrapVue3}
export default plugin
