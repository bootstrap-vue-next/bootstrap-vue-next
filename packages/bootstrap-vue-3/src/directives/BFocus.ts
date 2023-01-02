import type {Directive, DirectiveBinding} from 'vue'

export default {
  mounted(el, binding: DirectiveBinding): void {
    if (binding.value !== false) {
      el.focus()
    }
  },
} as Directive<HTMLElement>
