import type {Plugin} from 'vue'
import type {BootstrapVueOptions, ComponentType, DirectiveType} from './types'
import toastPlugin from './plugins/toastPlugin'
import breadcrumbPlugin from './plugins/breadcrumbPlugin'
import modalControllerPlugin from './plugins/modalControllerPlugin'
import modalManagerPlugin from './plugins/modalManagerPlugin'
import rtlPlugin from './plugins/rtlPlugin'

import './styles/styles.scss'

import * as Components from './components'
import * as Directives from './directives'
import parseActiveImports from './utils/parseActiveImports'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BFormFile: typeof Components.BFormFile
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
    BFormSpinbutton: typeof Components.BFormSpinbutton
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
    BModalOrchestrator: typeof Components.BModalOrchestrator
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
    BToastOrchestrator: typeof Components.BToastOrchestrator
    BTooltip: typeof Components.BTooltip
    BTabs: typeof Components.BTabs
    BTransition: typeof Components.BTransition
  }
}

// Main app plugin
export const createBootstrap = ({
  components = false,
  directives = false,
  plugins = {},
}: BootstrapVueOptions = {}): Plugin => ({
  install(app) {
    const selectedComponents = typeof components === 'boolean' ? {all: components} : components

    const componentKeys = Object.keys(Components) as unknown as ComponentType[]
    parseActiveImports(selectedComponents, componentKeys).forEach((name) => {
      const component = Components[name]
      app.component(name, component)
    })

    const selectedDirectives = typeof directives === 'boolean' ? {all: directives} : directives

    const directiveKeys = Object.keys(Directives) as unknown as DirectiveType[]
    const sliceName = (str: string) => (str.toLowerCase().startsWith('v') ? str.slice(1) : str)
    parseActiveImports(selectedDirectives, directiveKeys).forEach((name) => {
      const parsedName = sliceName(name)
      const directive = Directives[name]
      app.directive(parsedName, directive)
    })

    if (plugins?.breadcrumb ?? true === true) {
      app.use(breadcrumbPlugin)
    }
    if (plugins?.modalController ?? true === true) {
      app.use(modalControllerPlugin)
    }
    if (plugins?.modalManager ?? true === true) {
      app.use(modalManagerPlugin)
    }
    if ((plugins?.rtl ?? true === true) || typeof plugins.rtl === 'object') {
      app.use(rtlPlugin, plugins)
    }
    if (plugins?.toast ?? true === true) {
      app.use(toastPlugin)
    }
  },
})

export * from './components'
export * as Components from './components'
export * from './directives'
export * as Directives from './directives'
export * from './composables/exports'
export * as Composables from './composables/exports'
export * from './utils/exports'
export * as Utils from './utils/exports'
export * from './types/exports'
export * as Types from './types/exports'

export default createBootstrap
