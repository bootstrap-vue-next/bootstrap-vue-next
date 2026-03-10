export const deprecatedNote = (message: string) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(`[BootstrapVueNext] ${message}`)
  }
}
