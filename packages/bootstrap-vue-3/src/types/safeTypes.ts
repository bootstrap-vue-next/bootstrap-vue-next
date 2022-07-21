/**
 * SSR safe types
 */

import {HAS_DOCUMENT_SUPPORT, HAS_WINDOW_SUPPORT} from '../utils'

export const WINDOW = HAS_WINDOW_SUPPORT ? window : {}
export const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {}

export type AnimationFrame = typeof requestAnimationFrame

declare global {
  interface Window {
    requestAnimationFrame: AnimationFrame
    webkitRequestAnimationFrame: AnimationFrame
    mozRequestAnimationFrame: AnimationFrame
    msRequestAnimationFrame: AnimationFrame
    oRequestAnimationFrame: AnimationFrame
  }
}

export const Element = HAS_WINDOW_SUPPORT ? window.Element : class Element extends Object {}

export const HTMLElement = HAS_WINDOW_SUPPORT
  ? window.HTMLElement
  : class HTMLElement extends Element {}

export const SVGElement = HAS_WINDOW_SUPPORT
  ? window.SVGElement
  : class SVGElement extends Element {}

export const File = HAS_WINDOW_SUPPORT ? window.File : class File extends Object {}
