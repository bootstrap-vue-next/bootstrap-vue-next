import {HAS_PASSIVE_EVENT_SUPPORT} from './env'
import {isObject} from './inspect'

// Normalize event options based on support of passive option
// Exported only for testing purposes
/**
 * @deprecated
 */
export const parseEventOptions = (
  options: boolean | EventListenerOptions | undefined
): boolean | EventListenerOptions | undefined => {
  if (HAS_PASSIVE_EVENT_SUPPORT) {
    return isObject(options) ? options : {capture: !!options || false}
  }
  // Need to translate to actual Boolean value
  return !!(isObject(options) ? options.capture : options)
}

// Attach an event listener to an element
/**
 * @deprecated
 */
export const eventOn = (
  el: Element,
  eventName: string,
  handler: EventListener,
  options: boolean | EventListenerOptions | undefined
) => {
  if (el && el.addEventListener) {
    el.addEventListener(eventName, handler, parseEventOptions(options))
  }
}

// Remove an event listener from an element
/**
 * @deprecated
 */
export const eventOff = (
  el: Element,
  eventName: string,
  handler: EventListener,
  options: boolean | EventListenerOptions | undefined
) => {
  if (el && el.removeEventListener) {
    el.removeEventListener(eventName, handler, options)
  }
}

// Utility method to add/remove a event listener based on first argument (boolean)
// It passes all other arguments to the `eventOn()` or `eventOff` method
/**
 * @deprecated
 */
export const eventOnOff = (on: boolean, eventParams: Parameters<typeof eventOff>) => {
  const method = on ? eventOn : eventOff
  method(...eventParams)
}

// Utility method to prevent the default event handling and propagation
/**
 * @deprecated
 */
export const stopEvent = (
  event: Event,
  {preventDefault = true, propagation = true, immediatePropagation = false} = {}
) => {
  if (preventDefault) {
    event.preventDefault()
  }
  if (propagation) {
    event.stopPropagation()
  }
  if (immediatePropagation) {
    event.stopImmediatePropagation()
  }
}
