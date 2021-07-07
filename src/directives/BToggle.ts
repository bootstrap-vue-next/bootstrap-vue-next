import { DirectiveBinding } from "vue";

function getToggleType(el: HTMLElement): string {
    if (el.classList.contains('offcanvas')) {
        return 'offcanvas';
    }
    
    if (el.classList.contains('collapse')) {
        return 'collapse';
    }

    return '';
}

export default {
    mounted: function(el: HTMLElement, binding: DirectiveBinding) {
        const target = document.getElementById(binding.arg as string);  
        let targetAttr = 'data-bs-target';
        el.setAttribute('data-bs-toggle', getToggleType(target!));
        
        if (el.tagName === 'a') {
            targetAttr = 'href'
        }

        el.setAttribute(targetAttr, `#${binding.arg}`)

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