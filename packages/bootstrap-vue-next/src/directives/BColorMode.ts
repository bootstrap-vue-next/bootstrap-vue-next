import type {Directive, DirectiveBinding} from 'vue'

const setTheme = (el: HTMLElement, value: string): void => el.setAttribute('data-bs-theme', value)
// TODO see if this works right
export default {
  mounted(el, binding: DirectiveBinding): void {
    setTheme(el, binding.value)
  },
  updated(el, binding: DirectiveBinding): void {
    setTheme(el, binding.value)
  },
} as Directive<HTMLElement>
