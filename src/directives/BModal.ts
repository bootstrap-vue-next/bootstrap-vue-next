import {DirectiveBinding} from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding): void {
    el.setAttribute('data-bs-toggle', 'modal')
    el.setAttribute('data-bs-target', `#${binding.arg}`)
  },
}
