import {type Directive, type DirectiveBinding} from 'vue'
import {useScrollspy} from '../../composables/useScrollspy'
import {omit} from '../../utils/object'

export interface ElementWithScrollspy extends HTMLElement {
  $__scrollspy?: Record<number, ReturnType<typeof useScrollspy>>
}

const bind = (el: ElementWithScrollspy, binding: Readonly<DirectiveBinding>) => {
  const {uid} = binding.instance!.$

  // Initialize UID namespace for this directive
  el.$__scrollspy = el.$__scrollspy ?? Object.create(null)

  // Clean up existing instance if present
  if (el.$__scrollspy![uid]) {
    el.$__scrollspy![uid].cleanup()
  }

  const {arg, value} = binding
  const isObject = typeof value === 'object' && value !== null
  const content = arg
    ? arg
    : typeof value === 'string'
      ? value
      : isObject
        ? value.content || value.element
        : null

  // Store scrollspy instance for this component instance
  el.$__scrollspy![uid] = useScrollspy(
    content,
    el,
    isObject ? omit(value, ['content', 'element']) : {}
  )
}

export const vBScrollspy: Directive<ElementWithScrollspy> = {
  mounted: bind,
  updated: bind,
  beforeUnmount(el, binding) {
    const {uid} = binding.instance!.$
    const instance = el.$__scrollspy?.[uid]

    if (!instance) return

    instance.cleanup()
    delete el.$__scrollspy![uid]
  },
}
