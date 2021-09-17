import {DirectiveBinding} from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding): void {
    if (binding.value !== false) {
      el.focus()
    }
  },
}
