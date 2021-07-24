import { DirectiveBinding } from "vue";

function resolveToggleType(el: HTMLElement): string {
    if (el.classList.contains('offcanvas')) {
        return 'offcanvas';
    }
    
    if (el.classList.contains('collapse')) {
        return 'collapse';
    }

    throw Error('Couldn\'t resolve toggle type');
}

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>): void {
        if (typeof binding.arg === 'string') {
            const target = document.getElementById(binding.arg);
            let targetAttr = 'data-bs-target';

            if (target) {
                el.setAttribute('data-bs-toggle', resolveToggleType(target));
                
                if (el.tagName === 'a') {
                    targetAttr = 'href'
                }

                el.setAttribute(targetAttr, `#${binding.arg}`);
            }
        }

        // TODO support class selector

        // if (binding.arg) {
        //     let toggle = 'collapse';
        //     let selector = `#${binding.arg}`
        //     const elements = document.querySelectorAll(`.${binding.arg}`);




        //     if (elements.length > 1) {
        //         selector = selector.replace('#', '.');
        //     }

        //     el.setAttribute('data-bs-target', selector)
        // }
    }
}