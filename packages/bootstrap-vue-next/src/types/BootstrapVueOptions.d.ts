// TODO: Create the options for every component

interface BToastPluginOptions {
  injectkey: symbol
}

interface BootstrapVueOptions {
  BAccordion?: Record<string, any>
  BAlert?: Record<string, any>
  BBadge?: Record<string, any>
  BButton?: Record<string, any>
  BButtonGroup?: Record<string, any>
  BButtonToolbar?: Record<string, any>
  BCard?: Record<string, any>
  BCollapse?: Record<string, any>
  BDropdown?: Record<string, any>
  BListGroup?: Record<string, any>
  BModal?: Record<string, any>
  BOffcanvas?: Record<string, any>
  BProgress?: Record<string, any>
  BSpinner?: Record<string, any>
  BTab?: Record<string, any>
  BToast?: BToastPluginOptions
}

export default BootstrapVueOptions
