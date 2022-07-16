import {App, Plugin} from 'vue'
import Components from './components'
import Directives from './directives'

import {BootstrapVueOptions} from './types'
import {createBreadcrumb} from './composables/useBreadcrumb'
import './styles/styles.scss'

// export available components
export {default as BAccordion} from './components/BAccordion/BAccordion.vue'
export {default as BAccordionItem} from './components/BAccordion/BAccordionItem.vue'
export {default as BAlert} from './components/BAlert.vue'
export {default as BAvatar} from './components/BAvatar/BAvatar.vue'
export {default as BAvatarGroup} from './components/BAvatar/BAvatarGroup.vue'
export {default as BBadge} from './components/BBadge/BBadge.vue'
export {default as BBreadcrumb} from './components/BBreadcrumb/BBreadcrumb.vue'
export {default as BBreadcrumbItem} from './components/BBreadcrumb/BBreadcrumbItem.vue'
export {default as BButton} from './components/BButton/BButton.vue'
export {default as BButtonGroup} from './components/BButton/BButtonGroup.vue'
export {default as BButtonToolbar} from './components/BButton/BButtonToolbar.vue'
export {default as BCard} from './components/BCard/BCard.vue'
export {default as BCardBody} from './components/BCard/BCardBody.vue'
export {default as BCardFooter} from './components/BCard/BCardFooter.vue'
export {default as BCardGroup} from './components/BCard/BCardGroup.vue'
export {default as BCardHeader} from './components/BCard/BCardHeader.vue'
export {default as BCardImg} from './components/BCard/BCardImg.vue'
export {default as BCardSubTitle} from './components/BCard/BCardSubTitle.vue'
export {default as BCardText} from './components/BCard/BCardText.vue'
export {default as BCardTitle} from './components/BCard/BCardTitle.vue'
export {default as BCarousel} from './components/BCarousel/BCarousel.vue'
export {default as BCarouselSlide} from './components/BCarousel/BCarouselSlide.vue'
export {default as BCloseButton} from './components/BButton/BCloseButton.vue'
export {default as BCol} from './components/BCol.vue'
export {default as BCollapse} from './components/BCollapse.vue'
export {default as BContainer} from './components/BContainer.vue'
export {default as BDropdown} from './components/BDropdown/BDropdown.vue'
export {default as BDropdownDivider} from './components/BDropdown/BDropdownDivider.vue'
export {default as BDropdownForm} from './components/BDropdown/BDropdownForm.vue'
export {default as BDropdownGroup} from './components/BDropdown/BDropdownGroup.vue'
export {default as BDropdownHeader} from './components/BDropdown/BDropdownHeader.vue'
export {default as BDropdownItem} from './components/BDropdown/BDropdownItem.vue'
export {default as BDropdownItemButton} from './components/BDropdown/BDropdownItemButton.vue'
export {default as BDropdownText} from './components/BDropdown/BDropdownText.vue'
export {default as BForm} from './components/BForm/BForm.vue'
export {default as BFormCheckbox} from './components/BFormCheckbox/BFormCheckbox.vue'
export {default as BFormCheckboxGroup} from './components/BFormCheckbox/BFormCheckboxGroup.vue'
export {default as BFormFloatingLabel} from './components/BForm/BFormFloatingLabel.vue'
export {default as BFormGroup} from './components/BFormGroup/BFormGroup.vue'
export {default as BFormInput} from './components/BFormInput/BFormInput.vue'
export {default as BFormInvalidFeedback} from './components/BForm/BFormInvalidFeedback.vue'
export {default as BFormRadio} from './components/BFormRadio/BFormRadio.vue'
export {default as BFormRadioGroup} from './components/BFormRadio/BFormRadioGroup.vue'
export {default as BFormRow} from './components/BForm/BFormRow.vue'
export {default as BFormSelect} from './components/BFormSelect/BFormSelect.vue'
export {default as BFormSelectOption} from './components/BFormSelect/BFormSelectOption.vue'
export {default as BFormSelectOptionGroup} from './components/BFormSelect/BFormSelectOptionGroup.vue'
export {default as BFormText} from './components/BForm/BFormText.vue'
export {default as BFormTextarea} from './components/BFormTextarea/BFormTextarea.vue'
export {default as BFormValidFeedback} from './components/BForm/BFormValidFeedback.vue'
export {default as BImg} from './components/BImg.vue'
export {default as BInputGroup} from './components/BInputGroup/BInputGroup.vue'
export {default as BInputGroupAddon} from './components/BInputGroup/BInputGroupAddon.vue'
export {default as BInputGroupAppend} from './components/BInputGroup/BInputGroupAppend.vue'
export {default as BInputGroupPrepend} from './components/BInputGroup/BInputGroupPrepend.vue'
export {default as BInputGroupText} from './components/BInputGroup/BInputGroupText.vue'
export {default as BLink} from './components/BLink/BLink.vue'
export {default as BListGroup} from './components/BListGroup/BListGroup.vue'
export {default as BListGroupItem} from './components/BListGroup/BListGroupItem.vue'
export {default as BModal} from './components/BModal.vue'
export {default as BNav} from './components/BNav.vue'
export {default as BNavItem} from './components/BNavItem.vue'
// // export {default as BNavItemDropdown} from './components/BNavItemDropdown.vue'
export {default as BOffcanvas} from './components/BOffcanvas.vue'
export {default as BOverlay} from './components/BOverlay/BOverlay.vue'
export {default as BPagination} from './components/BPagination/BPagination.vue'
export {default as BPopover} from './components/BPopover.vue'
export {default as BProgress} from './components/BProgress.vue'
export {default as BProgressBar} from './components/BProgressBar.vue'
export {default as BRow} from './components/BRow.vue'
export {default as BSpinner} from './components/BSpinner.vue'
export {default as BTab} from './components/BTabs/BTab.vue'
export {default as BTable} from './components/BTable/BTable.vue'
export {default as BTableSimple} from './components/BTable/BTableSimple.vue'
export {default as BTbody} from './components/BTable/BTbody.vue'
export {default as BTd} from './components/BTable/BTd.vue'
export {default as BTfoot} from './components/BTable/BTfoot.vue'
export {default as BTh} from './components/BTable/BTh.vue'
export {default as BThead} from './components/BTable/BThead.vue'
export {default as BTr} from './components/BTable/BTr.vue'
export {default as BTabs} from './components/BTabs/BTabs.vue'
export {default as BTransition} from './components/BTransition/BTransition.vue'
export {default as BToast} from './components/BToast/BToast.vue'
export {default as BToaster} from './components/BToast/BToaster.vue'
export {BToastPlugin, useToast} from './components/BToast/'

// export available directives
export {default as VBPopover} from './directives/BPopover'
export {default as VBToggle} from './directives/BToggle'
export {default as VBTooltip} from './directives/BTooltip'
export {default as VBVisible} from './directives/BVisible'

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
import BCardSubTitle from './components/BCard/BCardSubTitle.vue'
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
import BFormRadio from './components/BFormRadio'
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
import BNav from './components/BNav.vue'
import BNavItem from './components/BNavItem.vue'
import BNavItemDropdown from './components/BNavItemDropdown.vue'
import BOffcanvas from './components/BOffcanvas.vue'
import BOverlay from './components/BOverlay/BOverlay.vue'
import BPagination from './components/BPagination/BPagination.vue'
import BPopover from './components/BPopover.vue'
import BProgress from './components/BProgress.vue'
import BProgressBar from './components/BProgressBar.vue'
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
import {BToast, BToaster, BToastPlugin} from './components/BToast'
import BToastContainer from './components/BToast/BToaster.vue'
import BTransition from './components/BTransition/BTransition.vue'

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
