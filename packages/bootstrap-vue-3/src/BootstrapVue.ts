import {App, Plugin} from 'vue'
import Components from './components'
import Directives from './directives'
import {BootstrapVueOptions} from './types'
import {createBreadcrumb, useBreadcrumb} from './composables'
import './styles/styles.scss'

// All available components
// Keep this list in sync with /components/index.ts please
import BAccordion from './components/BAccordion/BAccordion.vue'
import BAccordionItem from './components/BAccordion/BAccordionItem.vue'
import BAlert from './components/BAlert.vue'
import BAvatar from './components/BAvatar/BAvatar.vue'
import BAvatarGroup from './components/BAvatar/BAvatarGroup.vue'
import BBadge from './components/BBadge/BBadge.vue'
import BBreadcrumb from './components/BBreadcrumb/BBreadcrumb.vue'
import BBreadcrumbItem from './components/BBreadcrumb/BBreadcrumbItem.vue'
import BButton from './components/BButton/BButton.vue'
import BButtonGroup from './components/BButton/BButtonGroup.vue'
import BButtonToolbar from './components/BButton/BButtonToolbar.vue'
import BCard from './components/BCard/BCard.vue'
import BCardBody from './components/BCard/BCardBody.vue'
import BCardFooter from './components/BCard/BCardFooter.vue'
import BCardGroup from './components/BCard/BCardGroup.vue'
import BCardHeader from './components/BCard/BCardHeader.vue'
import BCardImg from './components/BCard/BCardImg.vue'
import BCardSubtitle from './components/BCard/BCardSubtitle.vue'
import BCardText from './components/BCard/BCardText.vue'
import BCardTitle from './components/BCard/BCardTitle.vue'
import BCarousel from './components/BCarousel/BCarousel.vue'
import BCarouselSlide from './components/BCarousel/BCarouselSlide.vue'
import BCloseButton from './components/BButton/BCloseButton.vue'
import BCol from './components/BCol.vue'
import BCollapse from './components/BCollapse.vue'
import BContainer from './components/BContainer.vue'
import BDropdown from './components/BDropdown/BDropdown.vue'
import BDropdownDivider from './components/BDropdown/BDropdownDivider.vue'
import BDropdownForm from './components/BDropdown/BDropdownForm.vue'
import BDropdownGroup from './components/BDropdown/BDropdownGroup.vue'
import BDropdownHeader from './components/BDropdown/BDropdownHeader.vue'
import BDropdownItem from './components/BDropdown/BDropdownItem.vue'
import BDropdownItemButton from './components/BDropdown/BDropdownItemButton.vue'
import BDropdownText from './components/BDropdown/BDropdownText.vue'
import BForm from './components/BForm/BForm.vue'
import BFormFloatingLabel from './components/BForm/BFormFloatingLabel.vue'
import BFormInvalidFeedback from './components/BForm/BFormInvalidFeedback.vue'
import BFormRow from './components/BForm/BFormRow.vue'
import BFormText from './components/BForm/BFormText.vue'
import BFormValidFeedback from './components/BForm/BFormValidFeedback.vue'
import BFormCheckbox from './components/BFormCheckbox/BFormCheckbox.vue'
import BFormCheckboxGroup from './components/BFormCheckbox/BFormCheckboxGroup.vue'
import BFormGroup from './components/BFormGroup/BFormGroup.vue'
import BFormInput from './components/BFormInput/BFormInput.vue'
import BFormRadio from './components/BFormRadio/BFormRadio.vue'
import BFormRadioGroup from './components/BFormRadio/BFormRadioGroup.vue'
import BFormSelect from './components/BFormSelect/BFormSelect.vue'
import BFormSelectOption from './components/BFormSelect/BFormSelectOption.vue'
import BFormSelectOptionGroup from './components/BFormSelect/BFormSelectOptionGroup.vue'
import BFormTag from './components/BFormTags/BFormTag.vue'
import BFormTags from './components/BFormTags/BFormTags.vue'
import BFormTextarea from './components/BFormTextarea/BFormTextarea.vue'
import BImg from './components/BImg.vue'
import BInputGroup from './components/BInputGroup/BInputGroup.vue'
import BInputGroupAddon from './components/BInputGroup/BInputGroupAddon.vue'
import BInputGroupAppend from './components/BInputGroup/BInputGroupAppend.vue'
import BInputGroupPrepend from './components/BInputGroup/BInputGroupPrepend.vue'
import BInputGroupText from './components/BInputGroup/BInputGroupText.vue'
import BLink from './components/BLink/BLink.vue'
import BListGroup from './components/BListGroup/BListGroup.vue'
import BListGroupItem from './components/BListGroup/BListGroupItem.vue'
import BModal from './components/BModal.vue'
import BNav from './components/BNav/BNav.vue'
import BNavForm from './components/BNav/BNavForm.vue'
import BNavText from './components/BNav/BNavText.vue'
import BNavItem from './components/BNav/BNavItem.vue'
import BNavItemDropdown from './components/BNav/BNavItemDropdown.vue'
import BNavbar from './components/BNavbar/BNavbar.vue'
import BNavbarBrand from './components/BNavbar/BNavbarBrand.vue'
import BNavbarNav from './components/BNavbar/BNavbarNav.vue'
import BNavbarToggle from './components/BNavbar/BNavbarToggle.vue'
import BOffcanvas from './components/BOffcanvas.vue'
import BOverlay from './components/BOverlay/BOverlay.vue'
import BPagination from './components/BPagination/BPagination.vue'
import BPlaceholder from './components/BPlaceholder/BPlaceholder.vue'
import BPlaceholderButton from './components/BPlaceholder/BPlaceholderButton.vue'
import BPlaceholderCard from './components/BPlaceholder/BPlaceholderCard.vue'
import BPlaceholderTable from './components/BPlaceholder/BPlaceholderTable.vue'
import BPlaceholderWrapper from './components/BPlaceholder/BPlaceholderWrapper.vue'
import BPopover from './components/BPopover.vue'
import BProgress from './components/BProgress/BProgress.vue'
import BProgressBar from './components/BProgress/BProgressBar.vue'
import BRow from './components/BRow.vue'
import BSkeleton from './components/BSkeleton/BSkeleton.vue'
import BSkeletonIcon from './components/BSkeleton/BSkeletonIcon.vue'
import BSkeletonTable from './components/BSkeleton/BSkeletonTable.vue'
import BSkeletonWrapper from './components/BSkeleton/BSkeletonWrapper.vue'
import BSpinner from './components/BSpinner.vue'
import BTab from './components/BTabs/BTab.vue'
import BTable from './components/BTable/BTable.vue'
import BTableSimple from './components/BTable/BTableSimple.vue'
import BTbody from './components/BTable/BTbody.vue'
import BTd from './components/BTable/BTd.vue'
import BTfoot from './components/BTable/BTfoot.vue'
import BTh from './components/BTable/BTh.vue'
import BThead from './components/BTable/BThead.vue'
import BTr from './components/BTable/BTr.vue'
import BTabs from './components/BTabs/BTabs.vue'
import {BToast, BToaster, BToastPlugin, useToast} from './components/BToast/'
import BToastContainer from './components/BToast/BToaster.vue'
import BTransition from './components/BTransition/BTransition.vue'

// Export available composables
export {useToast, useBreadcrumb}

// Export available directives
export {
  BPopover as vBPopover,
  BToggle as vBToggle,
  BTooltip as vBTooltip,
  BVisible as vBVisible,
} from './directives'

// Export available plugins
// Not to be confused with the main app plugin
export {BToastPlugin}

// Export available utils
export {BvEvent} from './utils'

// Export components
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
  BCardSubtitle,
  BCardText,
  BCardTitle,
  BNavForm,
  BNavText,
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
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
  BNavItem,
  BNavItemDropdown,
  BOffcanvas,
  BOverlay,
  BPagination,
  BPlaceholder,
  BPlaceholderButton,
  BPlaceholderCard,
  BPlaceholderTable,
  BPlaceholderWrapper,
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

// Export types
export type {
  InputSize,
  ColorVariant,
  BreadcrumbItem,
  LinkTarget,
  ButtonVariant,
  Alignment,
  TextColorVariant,
  Size,
  ButtonType,
  InputType,
  Breakpoint,
  SkeletonAnimation,
  SkeletonType,
  VerticalAlign,
  TableField,
  TableItem,
  ContainerPosition,
  TransitionMode,
  Position,
  SpinnerType,
} from './types'
export type {BodyProp} from './components/BToast/plugin'
export type {BPopoverDelayObject} from './types/components'

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
    BCardSubtitle: typeof BCardSubtitle
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
    BNavForm: typeof BNavForm
    BNavText: typeof BNavText
    BNavbar: typeof BNavbar
    BNavbarBrand: typeof BNavbarBrand
    BNavbarNav: typeof BNavbarNav
    BNavbarToggle: typeof BNavbarToggle
    BNavItem: typeof BNavItem
    BNavItemDropdown: typeof BNavItemDropdown
    BOffcanvas: typeof BOffcanvas
    BOverlay: typeof BOverlay
    BPagination: typeof BPagination
    BPlaceholder: typeof BPlaceholder
    BPlaceholderButton: typeof BPlaceholderButton
    BPlaceholderCard: typeof BPlaceholderCard
    BPlaceholderTable: typeof BPlaceholderTable
    BPlaceholderWrapper: typeof BPlaceholderWrapper
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
