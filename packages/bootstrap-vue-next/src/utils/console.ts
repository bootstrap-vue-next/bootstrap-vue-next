const shouldLogToConsole = process.env.NODE_ENV !== 'production'

const withKey = (key: string) => `[BootstrapVueNext:${key}]`

export const warn = (key: string, ...args: unknown[]) => {
  if (!shouldLogToConsole) return
  console.warn(withKey(key), ...args)
}

export const error = (key: string, ...args: unknown[]) => {
  if (!shouldLogToConsole) return
  console.error(withKey(key), ...args)
}
