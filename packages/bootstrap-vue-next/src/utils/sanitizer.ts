/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const uriAttributes = new Set([
  'background',
  'cite',
  'href',
  'itemtype',
  'longdesc',
  'poster',
  'src',
  'xlink:href',
])

const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */
const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i

/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */
const DATA_URL_PATTERN =
  /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i

const allowedAttribute = (attribute: Attr, allowedAttributeList: (string | RegExp)[]) => {
  const attributeName = attribute.nodeName.toLowerCase()

  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(
        SAFE_URL_PATTERN.test(attribute.nodeValue || '') ||
          DATA_URL_PATTERN.test(attribute.nodeValue || '')
      )
    }

    return true
  }

  // Check if a regular expression validates the attribute.
  return allowedAttributeList
    .filter((attributeRegex): attributeRegex is RegExp => attributeRegex instanceof RegExp)
    .some((regex) => regex.test(attributeName))
}

export const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  'a': ['target', 'href', 'title', 'rel'],
  'area': [],
  'b': [],
  'br': [],
  'col': [],
  'code': [],
  'div': [],
  'em': [],
  'hr': [],
  'h1': [],
  'h2': [],
  'h3': [],
  'h4': [],
  'h5': [],
  'h6': [],
  'i': [],
  'img': ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  'li': [],
  'ol': [],
  'p': [],
  'pre': [],
  's': [],
  'small': [],
  'span': [],
  'sub': [],
  'sup': [],
  'strong': [],
  'u': [],
  'ul': [],
}

export const sanitizeHtml = (
  unsafeHtml: string,
  allowList: Record<string, (string | RegExp)[]>,
  sanitizeFunction?: (unsafeHtml: string) => string
) => {
  if (!unsafeHtml.length) {
    return unsafeHtml
  }

  if (sanitizeFunction && typeof sanitizeFunction === 'function') {
    return sanitizeFunction(unsafeHtml)
  }

  const domParser = new window.DOMParser()
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html')
  const elements: NodeListOf<Element> = createdDocument.body.querySelectorAll('*')

  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase()

    if (!Object.keys(allowList).includes(elementName)) {
      element.remove()

      continue
    }

    const attributeList = element.attributes
    const allowedAttributes = [...(allowList['*'] || []), ...(allowList[elementName] || [])]

    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName)
      }
    }
  }

  return createdDocument.body.innerHTML
}
