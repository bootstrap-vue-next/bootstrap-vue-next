import { Directive } from 'vue';
import { Tooltip } from 'bootstrap';

const BTooltip: Directive<HTMLElement> = {
    mounted: function(el, binding) {
        let placement = 'top';
        let trigger: string[] = [];
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
        el.setAttribute('data-bs-html', html);
        
        new Tooltip(el, {
            trigger: trigger.length === 0 ? 'hover focus' : trigger.join(' ') as Tooltip.Options['trigger'],
            placement: placement as Tooltip.Options['placement'],
        });
        
        el.title = '';
    }
}

export default BTooltip;