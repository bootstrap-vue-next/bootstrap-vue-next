import type {Directive, DirectiveBinding} from 'vue'

// TODO data-bs-toggle/target are not valid anymore.
/**
 *
 * This is not marked as external, but in the future I think it may be
 */
export default {
  mounted(el, binding: DirectiveBinding): void {
    let target: string = binding.value

    if (Object.keys(binding.modifiers).length > 0) {
      ;[target] = Object.keys(binding.modifiers)
    }

    el.setAttribute('data-bs-toggle', 'modal')
    el.setAttribute('data-bs-target', `#${target}`)
  },
} as Directive<HTMLElement>
