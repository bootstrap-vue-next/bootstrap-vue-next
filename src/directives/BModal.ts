import { DirectiveBinding } from "vue";

export default {
    mounted: function(el: HTMLElement, binding: DirectiveBinding) {
        el.setAttribute('data-bs-toggle', 'modal');
        el.setAttribute('data-bs-target', `#${binding.arg}`);
    }
}