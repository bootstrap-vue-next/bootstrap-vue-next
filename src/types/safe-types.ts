/**
 * SSR safe types
 */

import {HAS_DOCUMENT_SUPPORT, HAS_WINDOW_SUPPORT} from '../utils/env'

const w = HAS_WINDOW_SUPPORT ? window : {}
export const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {}

export const Element = HAS_WINDOW_SUPPORT ? w.Element : class Element extends Object {}

export const HTMLElement = HAS_WINDOW_SUPPORT ? w.HTMLElement : class HTMLElement extends Element {}

export const SVGElement = HAS_WINDOW_SUPPORT ? w.SVGElement : class SVGElement extends Element {}

export const File = HAS_WINDOW_SUPPORT ? w.File : class File extends Object {}
