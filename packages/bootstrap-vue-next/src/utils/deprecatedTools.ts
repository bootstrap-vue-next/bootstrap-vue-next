export const deprecatedNote = (message: string) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`[BootstrapVueNext] ${message}`)
  }
}
