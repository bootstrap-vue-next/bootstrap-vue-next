import type {Plugin} from 'vue'
import type {BootstrapVueOptions, ComponentType, DirectiveType} from './types'
import type {ComponentResolver} from 'unplugin-vue-components'
import * as Plugins from './plugins'

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
    BInput: typeof Components.BInput
    BInputGroup: typeof Components.BInputGroup
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

const sliceName = (str: string) => (str.toLowerCase().startsWith('v') ? str.slice(1) : str)

// Main app plugin
export const createBootstrap = ({
  components = false,
  directives = false,
  plugins: pluginData = {},
  aliases = {},
}: Readonly<BootstrapVueOptions> = {}): Plugin => ({
  install(app) {
    const selectedComponents = typeof components === 'boolean' ? {all: components} : components

    const componentKeys = Object.keys(Components) as unknown as ComponentType[]
    parseActiveImports(selectedComponents, componentKeys).forEach((name) => {
      const component = Components[name]
      app.component(name, component)
    })

    const selectedDirectives = typeof directives === 'boolean' ? {all: directives} : directives

    const directiveKeys = Object.keys(Directives) as unknown as DirectiveType[]
    parseActiveImports(selectedDirectives, directiveKeys).forEach((name) => {
      const parsedName = sliceName(name)
      const directive = Directives[name]
      app.directive(parsedName, directive)
    })

    Object.entries(aliases).forEach(([alias, name]) => {
      const component = typeof name === 'string' ? Components[name] : name
      app.component(alias, component)
    })

    if (pluginData?.breadcrumb ?? true === true) {
      app.use(Plugins.breadcrumb)
    }
    if ((pluginData?.id ?? true === true) || typeof pluginData.id === 'object') {
      app.use(Plugins.id, pluginData)
    }
    if (pluginData?.modalController ?? true === true) {
      app.use(Plugins.modalController)
    }
    if (pluginData?.modalManager ?? true === true) {
      app.use(Plugins.modalManager)
    }
    if ((pluginData?.rtl ?? true === true) || typeof pluginData.rtl === 'object') {
      app.use(Plugins.rtl, pluginData)
    }
    if (pluginData?.toast ?? true === true) {
      app.use(Plugins.toast)
    }
    app.use(Plugins.defaults, pluginData)
  },
})

/**
 * Resolver for unplugin-vue-components
 */
export const BootstrapVueNextResolver = ({
  aliases = {},
  directives = true,
  components = true,
}: Readonly<
  Pick<BootstrapVueOptions, 'directives' | 'components'> & {aliases?: Record<string, ComponentType>}
> = {}): ComponentResolver[] => {
  const selectedComponents = typeof components === 'boolean' ? {all: components} : components
  const componentKeys = Object.keys(Components) as unknown as ComponentType[]
  const compImports = new Set(parseActiveImports(selectedComponents, componentKeys) as string[])

  const selectedDirectives = typeof directives === 'boolean' ? {all: directives} : directives
  const directiveKeys = Object.keys(Directives) as unknown as DirectiveType[]
  const dirImports = new Set(parseActiveImports(selectedDirectives, directiveKeys).map(sliceName))
  const resolvers: ComponentResolver[] = [
    {
      type: 'component',
      resolve: (name) => {
        if (compImports.has(name) || aliases[name]) {
          // TODO using this list of components we may be able to tree shake off CSS imports for the user :eyes:
          return {
            name: aliases[name] || name,
            from: 'bootstrap-vue-next',
          }
        }
      },
    },
    {
      type: 'directive',
      resolve: (name) => {
        if (dirImports.has(name)) {
          return {
            name: `v${name}`,
            from: 'bootstrap-vue-next',
          }
        }
      },
    },
  ]
  return resolvers
}

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
