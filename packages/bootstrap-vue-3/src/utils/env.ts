export const HAS_WINDOW_SUPPORT = typeof window !== 'undefined'
export const HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined'
export const HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined'
export const IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT
export const WINDOW = HAS_WINDOW_SUPPORT ? window : {}

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
          // eslint-disable-next-line no-useless-return
          return
        },
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      WINDOW.addEventListener('test', options, options)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      WINDOW.removeEventListener('test', options, options)
    } catch {
      passiveEventSupported = false
    }
  }
  return passiveEventSupported
})()
