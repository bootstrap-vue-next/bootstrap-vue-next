export const HAS_WINDOW_SUPPORT = typeof window !== 'undefined'
export const HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined'
export const HAS_ELEMENT_SUPPORT = typeof Element !== 'undefined'
export const HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined'
export const HAS_PROMISE_SUPPORT = typeof Promise !== 'undefined'

export const IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT

export const WINDOW = HAS_WINDOW_SUPPORT ? window : ({} as Record<string, any>)
export const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : ({} as Record<string, any>)

// Determine if the browser supports the option passive for events
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
    WINDOW.addEventListener('test', options, options)
    WINDOW.removeEventListener('test', options, options)
  } catch {
    passiveEventSupported = false
  }
})()
