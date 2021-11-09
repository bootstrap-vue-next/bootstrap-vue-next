import {App, Plugin} from 'vue'
import Components from './components'
import Directives from './directives'
import {BootstrapVueOptions} from './types'
import {createBreadcrumb} from './composables/useBreadcrumb'
import './styles/styles.scss'

// import available components
export {default as BAccordion} from './components/BAccordion.vue'
export {default as BAccordionItem} from './components/BAccordionItem.vue'
export {default as BAlert} from './components/BAlert.vue'
export {default as BAvatar} from './components/BAvatar/BAvatar.vue'
export {default as BAvatarGroup} from './components/BAvatar/BAvatarGroup.vue'
export {default as BBadge} from './components/BBadge/BBadge.vue'
export {default as BBreadcrumb} from './components/BBreadcrumb/BBreadcrumb.vue'
export {default as BBreadcrumbItem} from './components/BBreadcrumb/BBreadcrumbItem.vue'
export {default as BButton} from './components/BButton/BButton.vue'
export {default as BButtonGroup} from './components/BButtonGroup.vue'
export {default as BButtonToolbar} from './components/BButtonToolbar.vue'
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
export {default as BFormFloatingLabel} from './components/BFormFloatingLabel.vue'
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
export {default as BIcon} from './components/BIcon/BIcon.vue'
export {default as BIconstack} from './components/BIcon/BIconstack.vue'
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
export {default as BTabs} from './components/BTabs/BTabs.vue'
export {default as BTransition} from './components/BTransition/BTransition.vue'

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
