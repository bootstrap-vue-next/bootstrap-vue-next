import type {ComponentPublicInstance} from 'vue'
import {getSafeDocument} from './dom'

export const getElement = (
  element: string | Readonly<ComponentPublicInstance> | Readonly<HTMLElement> | null,
  root: HTMLElement | Document | null = getSafeDocument()
): HTMLElement | undefined => {
  if (!element) return undefined
  if (typeof element === 'string') {
    if (root === null) return undefined
    const idElement = getSafeDocument()?.getElementById(element)
    return idElement ?? (root.querySelector(element) as HTMLElement) ?? undefined
  }
  return (element as ComponentPublicInstance).$el ?? element
}
