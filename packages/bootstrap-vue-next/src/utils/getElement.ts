import type {ComponentPublicInstance} from 'vue'

export default (
  element: string | Readonly<ComponentPublicInstance> | Readonly<HTMLElement> | null
): HTMLElement | undefined => {
  if (!element) return undefined
  if (typeof element === 'string') {
    if (typeof document === 'undefined') return undefined
    const idElement = document.getElementById(element)
    return idElement ?? (document.querySelector(element) as HTMLElement) ?? undefined
  }
  return (element as ComponentPublicInstance).$el ?? element
}
