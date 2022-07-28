import {DirectiveBinding} from 'vue'

/**
 * This is not marked as external, but in the future I think it may be
 */
export default {
  mounted(el: HTMLElement, binding: DirectiveBinding): void {
    let target: string = binding.value

    if (Object.keys(binding.modifiers).length > 0) {
      ;[target] = Object.keys(binding.modifiers)
    }

    el.setAttribute('data-bs-toggle', 'modal')
    el.setAttribute('data-bs-target', `#${target}`)
  },
}
