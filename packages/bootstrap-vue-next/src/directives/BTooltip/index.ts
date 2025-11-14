import {type Directive} from 'vue'
import {type ElementWithPopper, resolveDirectiveProps} from '../../utils/floatingUi'
import {createFloatingDirective} from '../utils'

export const vBTooltip: Directive<ElementWithPopper> = createFloatingDirective(
  '$__tooltip',
  'BTooltip',
  (text, defaults, binding, el) => ({
    noninteractive: true,
    ...(defaults || undefined),
    ...resolveDirectiveProps(binding, el),
    title: text.title ?? text.body ?? '',
    tooltip: true,
  })
)
