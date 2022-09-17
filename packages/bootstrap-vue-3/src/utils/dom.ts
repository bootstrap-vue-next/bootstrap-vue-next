import {AnimationFrame, DOCUMENT} from '../types/safeTypes'
import {HAS_WINDOW_SUPPORT} from './env'
import {toString} from './stringUtils'
import {Comment, Slot, VNode} from 'vue'

/**
 * @param el
 * @returns
 */
export const isElement = (el: HTMLElement): boolean => !!(el && el.nodeType === Node.ELEMENT_NODE)

/**
 * @param el
 * @returns
 */
export const getBCR = (el: HTMLElement) => (isElement(el) ? el.getBoundingClientRect() : null)

/**
 * @param excludes
 * @returns
 */
export const getActiveElement = (excludes = []): Element | null => {
  const {activeElement} = document
  return activeElement && !excludes.some((el: HTMLElement) => el === activeElement)
    ? activeElement
    : null
}

/**
 * @param el
 * @returns
 */
export const isActiveElement = (el: HTMLElement): boolean =>
  isElement(el) && el === getActiveElement()

/**
 * @param el
 * @param options
 * @returns
 */
export const attemptFocus = (el: HTMLElement, options = {}): boolean => {
  try {
    el.focus(options)
  } catch (e) {
    console.error(e)
  }
  return isActiveElement(el)
}

/**
 * Attempt to blur an element, and return `true` if successful
 *
 * @param el
 * @returns
 */
export const attemptBlur = (el: HTMLElement): boolean => {
  try {
    el.blur()
  } catch (e) {
    console.error(e)
  }
  return !isActiveElement(el)
}

/**
 * @param el
 * @param prop
 * @returns
 */
export const getStyle = (el: HTMLElement, prop: string) =>
  prop && isElement(el) ? el.getAttribute(prop) || null : null

/**
 * @param parent
 * @param child
 * @returns
 */
export const contains = (parent: Node, child: Node): boolean => parent.contains(child)

/**
 * @param el
 * @returns
 */
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

/**
 * @param slot
 * @param data
 * @returns
 */
export const isEmptySlot = (slot: Slot | undefined, data?: any) =>
  !slot || slot(data).filter((vnode: VNode) => vnode.type !== Comment).length < 1

/**
 * @param el
 * @returns
 */
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

/**
 * Select a single element, returns `null` if not found
 *
 * @param selector
 * @param root
 * @returns
 */
export const select = (selector: any, root: any) =>
  (isElement(root) ? root : DOCUMENT).querySelector(selector) || null

/**
 * @param selector
 * @param root
 * @returns
 */
export const selectAll = (selector: any, root: any) =>
  Array.from([(isElement(root) ? root : DOCUMENT).querySelectorAll(selector)])

/**
 * @param el
 * @param attr
 * @returns
 */
export const getAttr = (el: HTMLElement, attr: string): string | null =>
  attr && isElement(el) ? el.getAttribute(attr) : null

/**
 * @param el
 * @param attr
 * @param value
 */
export const setAttr = (el: HTMLElement, attr: string, value: string): void => {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value)
  }
}

/**
 * Remove an attribute from an element
 *
 * @param el
 * @param attr
 */
export const removeAttr = (el: HTMLElement, attr: string): void => {
  if (attr && isElement(el)) {
    el.removeAttribute(attr)
  }
}

/**
 * @param tag
 * @param name
 * @returns
 */
export const isTag = (tag: any, name: any): boolean =>
  toString(tag).toLowerCase() === toString(name).toLowerCase()

export const requestAF: AnimationFrame = HAS_WINDOW_SUPPORT
  ? window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    // Fallback, but not a true polyfill
    // Only needed for Opera Mini
    ((cb) => setTimeout(cb, 16))
  : (cb) => setTimeout(cb, 0)
