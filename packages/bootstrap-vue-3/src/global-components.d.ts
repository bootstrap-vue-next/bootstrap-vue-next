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
