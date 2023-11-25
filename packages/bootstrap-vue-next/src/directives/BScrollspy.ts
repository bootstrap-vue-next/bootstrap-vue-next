import {type Directive, type DirectiveBinding} from 'vue'
import {useScrollspy} from '../composables'
import {omit} from '../utils'

export interface ElementWithScrollspy extends HTMLElement {
  $__scrollspy?: ReturnType<typeof useScrollspy>
}

const bind = (el: ElementWithScrollspy, binding: DirectiveBinding) => {
  if (el.$__scrollspy) el.$__scrollspy.cleanup()
  const {modifiers, value} = binding
  const isObject = typeof value === 'object'
  const mods = Object.keys(modifiers || {})
  const content =
    typeof value === 'string' ? value : mods.length > 0 ? mods[0] : isObject ? value.content : null
  el.$__scrollspy = useScrollspy(content, el, isObject ? omit(value, ['content']) : {})
}

export default {
  mounted: bind,
  updated: bind,
  beforeUnmount(el) {
    if (el.$__scrollspy) el.$__scrollspy.cleanup()
  },
} satisfies Directive<ElementWithScrollspy>
