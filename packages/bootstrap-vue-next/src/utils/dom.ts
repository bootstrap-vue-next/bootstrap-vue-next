import type {Slot} from 'vue'

// Get the currently active HTML element
export const getActiveElement = (excludes: readonly HTMLElement[] = []): Element | null => {
  const {activeElement} = document
  return activeElement && !excludes?.some((el) => el === activeElement) ? activeElement : null
}

/**
 * @deprecated only used in BFormGroup, which is not an SFC... Function could probably be replaced with pure Vue
 */
export const attemptFocus = (
  el: Readonly<HTMLElement>,
  options: Readonly<FocusOptions> = {}
): boolean => {
  const isActiveElement = (el: Readonly<HTMLElement>): boolean => el === getActiveElement()

  try {
    el.focus(options)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
  return isActiveElement(el)
}

export const isEmptySlot = (el: Slot | undefined): boolean => (el?.() ?? []).length === 0

/**
 * @deprecated only used in BFormGroup, which is not an SFC... Function could probably be replaced with pure Vue
 */
export const isVisible = (el: Readonly<Element>): boolean => {
  //if (!isElement(el) || !el.parentNode || !contains(DOCUMENT.body, el)) {
  // Note this can fail for shadow dom elements since they
  // are not a direct descendant of document.body
  //return false
  //}
  if (el.getAttribute('display') === 'none') {
    // We do this check to help with vue-test-utils when using v-show
    return false
  }
  // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests
  const bcr = el.getBoundingClientRect()
  return !!(bcr && bcr.height > 0 && bcr.width > 0)
}

export const getTransitionDelay = (element: Readonly<HTMLElement>) => {
  const style = window.getComputedStyle(element)
  // if multiple durations are defined, we take the first
  const transitionDelay = style.transitionDelay.split(',')[0] || ''
  const transitionDuration = style.transitionDuration.split(',')[0] || ''
  const transitionDelayMs = Number(transitionDelay.slice(0, -1)) * 1000
  const transitionDurationMs = Number(transitionDuration.slice(0, -1)) * 1000
  return transitionDelayMs + transitionDurationMs
}

export const sortSlotElementsByPosition = (
  a: Readonly<HTMLElement> | null,
  b: Readonly<HTMLElement> | null
): number => {
  if (typeof Node === 'undefined' || !Node || !a || !b) return 0
  const position = a.compareDocumentPosition(b)
  if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1
  if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1
  return 0
}

export const getModalZIndex = (element?: Readonly<HTMLElement | null>): number => {
  if (typeof window === 'undefined') return 1055
  const target = element ?? document.body
  const raw = window.getComputedStyle(target).getPropertyValue('--bs-modal-zindex').trim()
  const parsed = Number.parseInt(raw, 10)
  return Number.isFinite(parsed) ? parsed : 1055
}
