/**
 * @deprecated
 */
export const HAS_WINDOW_SUPPORT = typeof window !== 'undefined'
/**
 * @deprecated
 */
export const HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined'
/**
 * @deprecated
 */
export const HAS_ELEMENT_SUPPORT = typeof Element !== 'undefined'
/**
 * @deprecated
 */
export const HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined'
/**
 * @deprecated
 */
export const HAS_PROMISE_SUPPORT = typeof Promise !== 'undefined'

/**
 * @deprecated
 */
export const IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT

/**
 * @deprecated
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WINDOW = HAS_WINDOW_SUPPORT ? window : ({} as Record<string, any>)
/**
 * @deprecated
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : ({} as Record<string, any>)

// Determine if the browser supports the option passive for events
/**
 * @deprecated
 */
export const HAS_PASSIVE_EVENT_SUPPORT = (() => {
  let passiveEventSupported = false
  if (!IS_BROWSER) return passiveEventSupported
  try {
    const options = {
      // This function will be called when the browser
      // attempts to access the passive property
      get passive() {
        passiveEventSupported = true
        return passiveEventSupported
      },
    }
    if ('addEventListener' in WINDOW && typeof WINDOW.addEventListener === 'function') {
      WINDOW.addEventListener('test', options, options)
    }
    if ('removeEventListener' in WINDOW && typeof WINDOW.removeEventListener === 'function') {
      WINDOW.removeEventListener('test', options, options)
    }
  } catch {
    passiveEventSupported = false
  }
})()
