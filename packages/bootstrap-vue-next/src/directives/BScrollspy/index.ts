import {type Directive, type DirectiveBinding} from 'vue'
import {useScrollspy} from '../../composables/useScrollspy'
import {omit} from '../../utils/object'
import {getDirectiveUid} from '../utils'

export interface ElementWithScrollspy extends HTMLElement {
  $__scrollspy?: Record<number, ReturnType<typeof useScrollspy>>
}

const bind = (el: ElementWithScrollspy, binding: Readonly<DirectiveBinding>) => {
  const uid = getDirectiveUid(binding)

  // Initialize UID namespace for this directive
  const elWithScrollspy = el as ElementWithScrollspy & Record<string, unknown>
  elWithScrollspy.$__scrollspy = elWithScrollspy.$__scrollspy ?? Object.create(null)

  // Clean up existing instance if present
  const existingInstance = elWithScrollspy.$__scrollspy![uid]
  if (existingInstance) {
    existingInstance.cleanup()
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
  elWithScrollspy.$__scrollspy![uid] = useScrollspy(
    content,
    el,
    isObject ? omit(value, ['content', 'element']) : {}
  )
}

export const vBScrollspy: Directive<ElementWithScrollspy> = {
  mounted: bind,
  updated: bind,
  beforeUnmount(el, binding) {
    const uid = getDirectiveUid(binding)
    const elWithScrollspy = el as ElementWithScrollspy & Record<string, unknown>
    const instance = elWithScrollspy.$__scrollspy?.[uid]

    if (!instance) return

    instance.cleanup()
    delete elWithScrollspy.$__scrollspy![uid]
  },
}
