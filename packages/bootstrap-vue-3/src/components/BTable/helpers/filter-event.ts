import {closest, getAttr, getById, matches, select} from '../../../utils/dom'

const TABLE_TAG_NAMES = ['TD', 'TH', 'TR']

// Filter CSS selector for click/dblclick/etc. events
// If any of these selectors match the clicked element, we ignore the event
export const EVENT_FILTER = [
  'a',
  'a *', // Include content inside links
  'button',
  'button *', // Include content inside buttons
  'input:not(.disabled):not([disabled])',
  'select:not(.disabled):not([disabled])',
  'textarea:not(.disabled):not([disabled])',
  '[role="link"]',
  '[role="link"] *',
  '[role="button"]',
  '[role="button"] *',
  '[tabindex]:not(.disabled):not([disabled])',
].join(',')

// Returns `true` if we should ignore the click/double-click/keypress event
// Avoids having the user need to use `@click.stop` on the form control
export const filterEvent = (event: Event) => {
  // Exit early when we don't have a target element
  if (!event || !event.target) {
    /* istanbul ignore next */
    return false
  }
  const el = event.target as HTMLElement
  // Exit early when element is disabled or a table element
  if (('disabled' in el && (el as any).disabled) || TABLE_TAG_NAMES.indexOf(el.tagName) !== -1) {
    return false
  }
  // Ignore the click when it was inside a dropdown menu
  if (closest('.dropdown-menu', el)) {
    return true
  }
  const label = el.tagName === 'LABEL' ? el : closest('label', el)
  // If the label's form control is not disabled then we don't propagate event
  // Modern browsers have `label.control` that references the associated input, but IE 11
  // does not have this property on the label element, so we resort to DOM lookups
  if (label) {
    const labelFor = getAttr(label, 'for')
    const input = labelFor ? getById(labelFor) : select('input, select, textarea', label)
    if (input && !input.disabled) {
      return true
    }
  }
  // Otherwise check if the event target matches one of the selectors in the
  // event filter (i.e. anchors, non disabled inputs, etc.)
  // Return `true` if we should ignore the event
  return matches(el, EVENT_FILTER)
}
