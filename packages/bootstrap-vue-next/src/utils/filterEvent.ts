const TABLE_TAG_NAMES = ['TD', 'TH', 'TR']

// Filter CSS selector for click/dblclick/etc. events
// If any of these selectors match the clicked element, we ignore the event
const eventFilter = [
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
export default (event: Readonly<Event>) => {
  // Exit early when we don't have a target element
  if (!event || !event.target) {
    return false
  }
  const el = event.target as HTMLElement
  // Exit early when element is disabled or a table element
  if (('disabled' in el && el.disabled) || TABLE_TAG_NAMES.indexOf(el.tagName) !== -1) {
    return false
  }
  // Ignore the click when it was inside a dropdown menu
  if (el.closest('.dropdown-menu')) return true

  const label = el.tagName === 'LABEL' ? el : el.closest('label')
  // If the label's form control is not disabled then we don't propagate event
  // Modern browsers have `label.control` that references the associated input, but IE 11
  // does not have this property on the label element, so we resort to DOM lookups
  if (label) {
    const labelFor = label.getAttribute('for')
    const input = labelFor
      ? document.getElementById(labelFor)
      : label.querySelector('input, select, textarea')
    if (input && !(input as HTMLInputElement).disabled) {
      return true
    }
  }
  // Otherwise check if the event target matches one of the selectors in the
  // event filter (i.e. anchors, non disabled inputs, etc.)
  // Return `true` if we should ignore the event
  return el.matches(eventFilter)
}
