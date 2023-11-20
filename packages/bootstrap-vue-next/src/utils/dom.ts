import type {Slot} from 'vue'
import {DOCUMENT, HAS_ELEMENT_SUPPORT} from '../constants/env'
import type {AnimationFrame} from '../types/safeTypes'
import {HAS_WINDOW_SUPPORT} from './env'
import {toString} from './stringUtils'

/**
 * @deprecated
 */
const ELEMENT_PROTO = HAS_ELEMENT_SUPPORT ? Element.prototype : undefined

/**
 * @deprecated
 */
export const isElement = (el: unknown): el is HTMLElement =>
  !!(el && typeof el === 'object' && 'nodeType' in el && el.nodeType === Node.ELEMENT_NODE)

/**
 * @deprecated
 */
export const getBCR = (el: HTMLElement) => (isElement(el) ? el.getBoundingClientRect() : null)

/**
 * @deprecated
 */
export const getActiveElement = (excludes = []): Element | null => {
  const {activeElement} = document
  return activeElement && !excludes.some((el: HTMLElement) => el === activeElement)
    ? activeElement
    : null
}

/**
 * @deprecated
 */
export const isActiveElement = (el: HTMLElement): boolean =>
  isElement(el) && el === getActiveElement()

/**
 * @deprecated
 */
export const attemptFocus = (el: HTMLElement, options = {}): boolean => {
  try {
    el.focus(options)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
  return isActiveElement(el)
}

/**
 * Attempt to blur an element, and return `true` if successful
 *
 * @param el
 * @returns
 * @deprecated
 */
export const attemptBlur = (el: HTMLElement): boolean => {
  try {
    el.blur()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
  return !isActiveElement(el)
}

/**
 * @deprecated
 */
export const getStyle = (el: HTMLElement, prop: string) =>
  prop && isElement(el) ? el.getAttribute(prop) || null : null

/**
 * @deprecated
 */
export const contains = (parent: Node, child: Node): boolean => parent.contains(child)

/**
 * @deprecated
 */
export const isVisible = (el: HTMLElement): boolean => {
  //if (!isElement(el) || !el.parentNode || !contains(DOCUMENT.body, el)) {
  // Note this can fail for shadow dom elements since they
  // are not a direct descendant of document.body
  //return false
  //}
  if (getStyle(el, 'display') === 'none') {
    // We do this check to help with vue-test-utils when using v-show
    return false
  }
  // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests
  const bcr = getBCR(el)
  return !!(bcr && bcr.height > 0 && bcr.width > 0)
}

/**
 * @deprecated
 */
export const isEmptySlot = (el: Slot | undefined): boolean => (el?.() ?? []).length === 0

/**
 * Select a single element, returns `null` if not found
 *
 * @param selector
 * @param root
 * @returns
 * @deprecated
 */
export const select = (selector: string, root: Element) =>
  (isElement(root) ? root : DOCUMENT).querySelector(selector) || null

/**
 * @deprecated
 */
export const selectAll = (selector: string, root: Element) =>
  Array.from([(isElement(root) ? root : DOCUMENT).querySelectorAll(selector)])

/**
 * @deprecated
 */
export const getAttr = (el: HTMLElement | Element, attr: string): string | null =>
  attr && isElement(el) ? el.getAttribute(attr) : null

/**
 * Get an element given an ID
 * @deprecated
 */
export const getById = (id: string) =>
  DOCUMENT.getElementById(/^#/.test(id) ? id.slice(1) : id) || null

/**
 * @deprecated
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
 * @deprecated
 */
export const removeAttr = (el: HTMLElement, attr: string): void => {
  if (attr && isElement(el)) {
    el.removeAttribute(attr)
  }
}

/**
 * @deprecated
 */
export const isTag = (tag: string, name: string): boolean =>
  toString(tag).toLowerCase() === toString(name).toLowerCase()

/**
 * @deprecated
 */
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

/**
 * @deprecated
 */
export const matches = (el: Element, selector: string) =>
  isElement(el) ? el.matches(selector) : false

/**
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 * @deprecated
 */
/* eslint-disable @typescript-eslint/no-this-alias */
export const closestEl =
  ELEMENT_PROTO?.closest ||
  function (this: Element, sel: string) {
    let el: ParentNode | null | Element = this
    if (!el) return null
    do {
      // Use our "patched" matches function
      if (isElement(el) && el.matches(sel)) return el

      el = el.parentElement || el.parentNode
    } while (el !== null && el.nodeType === Node.ELEMENT_NODE)
    return null
  }

/**
 * Finds closest element matching selector. Returns `null` if not found
 *
 * @param selector
 * @param root
 * @param includeRoot
 * @deprecated
 */
export const closest = (selector: string, root: Element, includeRoot = false) => {
  if (!isElement(root)) {
    return null
  }
  const el = closestEl.call(root, selector)
  // Native closest behaviour when `includeRoot` is truthy,
  // else emulate jQuery closest and return `null` if match is
  // the passed in root element when `includeRoot` is falsey
  return includeRoot ? el : el === root ? null : el
}

/**
 * @deprecated
 */
export const getTransitionDelay = (element: HTMLElement) => {
  const style = window.getComputedStyle(element)
  // if multiple durations are defined, we take the first
  const transitionDelay = style.transitionDelay.split(',')[0] || ''
  const transitionDuration = style.transitionDuration.split(',')[0] || ''
  const transitionDelayMs = Number(transitionDelay.slice(0, -1)) * 1000
  const transitionDurationMs = Number(transitionDuration.slice(0, -1)) * 1000
  return transitionDelayMs + transitionDurationMs
}
