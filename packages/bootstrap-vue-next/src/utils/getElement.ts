import type {ComponentPublicInstance} from 'vue'

export const getElement = (
  element: string | Readonly<ComponentPublicInstance> | Readonly<HTMLElement> | null,
  root: HTMLElement | Document = document
): HTMLElement | undefined => {
  if (!element) return undefined
  if (typeof element === 'string') {
    if (typeof root === 'undefined' || typeof document === 'undefined') return undefined
    const idElement = document.getElementById(element)
    return idElement ?? (root.querySelector(element) as HTMLElement) ?? undefined
  }
  return (element as ComponentPublicInstance).$el ?? element
}
