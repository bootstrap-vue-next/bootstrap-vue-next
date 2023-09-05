export const createContainer = (tag = 'div'): HTMLElement => {
  const container = document.createElement(tag)
  document.body.appendChild(container)
  return container
}
export const waitRAF = (): Promise<number> =>
  new Promise((resolve) => requestAnimationFrame(resolve))
export const asyncTimeout = (timeout: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve.bind(null), timeout))
