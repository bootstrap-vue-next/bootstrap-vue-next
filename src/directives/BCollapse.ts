import { Directive } from "vue";
import { Collapse } from "bootstrap";

const BCollapse: Directive<HTMLElement> = {
    mounted: function(el, binding) {
        el.setAttribute('data-bs-toggle', 'collapse');
        el.setAttribute('data-bs-target', `#${binding.arg}`);
        el.setAttribute('aria-controls', binding.arg as string);

        // el.addEventListener('click', () => {
        //     el.classList.toggle('collapsed');
        //     const target = document.getElementById(binding.arg as string);
        //     const collapse = Collapse.getInstance(target as Element);
        //     collapse?.toggle();
        // });
    },
}

export default BCollapse;