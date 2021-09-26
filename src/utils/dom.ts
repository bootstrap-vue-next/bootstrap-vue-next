import {Slot} from 'vue'

export const isElement = (el: HTMLElement): boolean => !!(el && el.nodeType === Node.ELEMENT_NODE)

export const getBCR = (el: HTMLElement) => (isElement(el) ? el.getBoundingClientRect() : null)

export const getActiveElement = (excludes = []): Element | null => {
  const {activeElement} = document
  return activeElement && !excludes.some((el: HTMLElement) => el === activeElement)
    ? activeElement
    : null
}

export const isActiveElement = (el: HTMLElement): boolean =>
  isElement(el) && el === getActiveElement()

export const attemptFocus = (el: HTMLElement, options = {}): boolean => {
  try {
    el.focus(options)
  } catch (e) {
    console.error(e)
  }
  return isActiveElement(el)
}

// Attempt to blur an element, and return `true` if successful
export const attemptBlur = (el: HTMLElement): boolean => {
  try {
    el.blur()
  } catch (e) {
    console.error(e)
  }
  return !isActiveElement(el)
}

export const getStyle = (el: HTMLElement, prop: string) =>
  prop && isElement(el) ? el.getAttribute(prop) || null : null

export const contains = (parent: Node, child: Node): boolean => parent.contains(child)

export const isVisible = (el: HTMLElement): boolean => {
  //if (!isElement(el) || !el.parentNode || !contains(DOCUMENT.body, el)) {
  // Note this can fail for shadow dom elements since they
  // are not a direct descendant of document.body
  //return false
  //}
  if (getStyle(el, 'display') === 'none') {
    // We do this check to help with vue-test-utils when using v-show
    /* istanbul ignore next */
    return false
  }
  // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests
  const bcr = getBCR(el)
  return !!(bcr && bcr.height > 0 && bcr.width > 0)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isEmptySlot = (slot: Slot | undefined, data?: any) =>
  !slot || slot(data).filter((vnode) => vnode.type !== Comment).length < 1

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const offset = (el: HTMLElement) => {
  const _offset = {top: 0, left: 0}
  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset
  }
  const bcr = getBCR(el)
  if (bcr) {
    const win = el.ownerDocument.defaultView
    _offset.top = bcr.top + (win?.pageYOffset || 0)
    _offset.left = bcr.left + (win?.pageXOffset || 0)
  }
  return _offset
}
