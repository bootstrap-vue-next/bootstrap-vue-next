import type {Directive, DirectiveBinding} from 'vue'

const setTheme = (el: Readonly<HTMLElement>, value: string): void =>
  el.setAttribute('data-bs-theme', value)
export default {
  mounted(el, binding: DirectiveBinding): void {
    setTheme(el, binding.value)
  },
  updated(el, binding: DirectiveBinding): void {
    setTheme(el, binding.value)
  },
} satisfies Directive<HTMLElement>
