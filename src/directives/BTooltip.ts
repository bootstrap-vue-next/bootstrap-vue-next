import { Directive, triggerRef } from 'vue';
import { Tooltip } from 'bootstrap';

type Trigger = "click" | "hover" | "manual" | "focus" | "hover focus" | "click hover" | "click focus" | "click hover focus" | undefined;

const BTooltip: Directive<HTMLElement> = {
    mounted: function(el, binding) {
        let placement = 'top';
        let trigger = [];
        const html = (/<(\"[^\"]*\"|'[^']*'|[^'\">])*>/.test(el.title)).toString();

        if (binding.modifiers.manual) {
            trigger.push('manual')
        } else {
            if (binding.modifiers.click) {
                trigger.push('click');
            }
    
            if (binding.modifiers.hover) {
                trigger.push('hover')
            }
    
            if (binding.modifiers.focus) {
                trigger.push('focus')
            }
        }


        if (binding.modifiers.left) {
            placement = 'left';
        } else if (binding.modifiers.right) {
            placement = 'right';
        } else if (binding.modifiers.bottom) {
            placement = 'bottom';
        }
        
        el.setAttribute('data-bs-toogle', 'tooltip');
        el.setAttribute('data-bs-placement', placement);
        el.setAttribute('data-bs-html', html);
        
        new Tooltip(el, {
            trigger: trigger.length === 0 ? 'hover focus' : trigger.join(' ') as Trigger,
        });
        
        el.title = '';
    }
}

export default BTooltip;