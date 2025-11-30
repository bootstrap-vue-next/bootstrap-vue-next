import {type Directive, type DirectiveBinding} from 'vue'
import {useScrollspy} from '../../composables/useScrollspy'
import {omit} from '../../utils/object'

export interface ElementWithScrollspy extends HTMLElement {
  $__scrollspy?: ReturnType<typeof useScrollspy>
}

const bind = (el: ElementWithScrollspy, binding: Readonly<DirectiveBinding>) => {
  if (el.$__scrollspy) el.$__scrollspy.cleanup()
  const {arg, value} = binding
  const isObject = typeof value === 'object' && value !== null
  const content = arg
    ? arg
    : typeof value === 'string'
      ? value
      : isObject
        ? value.content || value.element
        : null
  el.$__scrollspy = useScrollspy(content, el, isObject ? omit(value, ['content', 'element']) : {})
}

export const vBScrollspy: Directive<ElementWithScrollspy> = {
  mounted: bind,
  updated: bind,
  beforeUnmount(el) {
    if (el.$__scrollspy) el.$__scrollspy.cleanup()
  },
}
