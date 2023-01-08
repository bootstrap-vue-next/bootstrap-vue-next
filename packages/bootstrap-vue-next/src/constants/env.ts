// eslint-disable-next-line no-var
declare var WebKitMutationObserver: any
// eslint-disable-next-line no-var
declare var MozMutationObserver: any

export const HAS_WINDOW_SUPPORT = typeof window !== 'undefined'
export const HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined'
export const HAS_ELEMENT_SUPPORT = typeof Element !== 'undefined'
export const HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined'
export const HAS_PROMISE_SUPPORT = typeof Promise !== 'undefined'

export const HAS_MUTATION_OBSERVER_SUPPORT =
  typeof MutationObserver !== 'undefined' ||
  typeof WebKitMutationObserver !== 'undefined' ||
  typeof MozMutationObserver !== 'undefined'

export const IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT

export const WINDOW = HAS_WINDOW_SUPPORT ? window : ({} as Record<string, any>)
export const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : ({} as Record<string, any>)
export const NAVIGATOR = HAS_NAVIGATOR_SUPPORT ? navigator : ({} as Record<string, any>)
export const USER_AGENT = (NAVIGATOR.userAgent || '').toLowerCase()

export const IS_JSDOM = USER_AGENT.indexOf('jsdom') > 0
export const IS_IE = /msie|trident/.test(USER_AGENT)

// Determine if the browser supports the option passive for events
export const HAS_PASSIVE_EVENT_SUPPORT = (() => {
  let passiveEventSupported = false
  if (IS_BROWSER) {
    try {
      const options = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          passiveEventSupported = true
          return passiveEventSupported
        },
      }
      WINDOW.addEventListener('test', options, options)
      WINDOW.removeEventListener('test', options, options)
    } catch {
      passiveEventSupported = false
    }
  }
  return passiveEventSupported
})()

export const HAS_TOUCH_SUPPORT =
  IS_BROWSER && ('ontouchstart' in DOCUMENT.documentElement || NAVIGATOR.maxTouchPoints > 0)

export const HAS_POINTER_EVENT_SUPPORT =
  IS_BROWSER && Boolean(WINDOW.PointerEvent || WINDOW.MSPointerEvent)

export const HAS_INTERACTION_OBSERVER_SUPPORT =
  IS_BROWSER &&
  'IntersectionObserver' in WINDOW &&
  'IntersectionObserverEntry' in WINDOW &&
  // Edge 15 and UC Browser lack support for `isIntersecting`
  // but we an use `intersectionRatio > 0` instead
  // 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
  'intersectionRatio' in WINDOW.IntersectionObserverEntry.prototype
