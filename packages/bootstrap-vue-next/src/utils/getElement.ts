import type {ComponentPublicInstance} from 'vue'

const SAFE_DOCUMENT = typeof document !== 'undefined' ? document : undefined

export const getElement = (
  element: string | Readonly<ComponentPublicInstance> | Readonly<HTMLElement> | null,
  root: HTMLElement | Document | undefined = SAFE_DOCUMENT
): HTMLElement | undefined => {
  if (!element) return undefined
  if (typeof element === 'string') {
    if (typeof root === 'undefined' || typeof document === 'undefined') return undefined
    const idElement = document.getElementById(element)
    return idElement ?? (root.querySelector(element) as HTMLElement) ?? undefined
  }
  return (element as ComponentPublicInstance).$el ?? element
}
