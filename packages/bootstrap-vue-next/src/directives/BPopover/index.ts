import {type Directive} from 'vue'
import {type ElementWithPopper, resolveDirectiveProps} from '../../utils/floatingUi'
import {createFloatingDirective} from '../utils'

export const vBPopover: Directive<ElementWithPopper> = createFloatingDirective(
  '$__popover',
  'BPopover',
  (text, defaults, binding, el) => ({
    ...(defaults || undefined),
    ...resolveDirectiveProps(binding, el),
    ...text,
  })
)
