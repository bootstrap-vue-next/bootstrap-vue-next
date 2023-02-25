import type {Placement} from '@floating-ui/vue'

// TODO this function doesn't currently resolve with RTL in mind. Once Bootstrap finalizes their RTL, we should make this change here
/**
 * Configures Bootstrap-like placement props to floating-ui Placement strings.
 * Top drops up, bottom drops down, end drops right, start drops left, dropend will _align_ the drop to the 'end',
 * dropstart will _align_ the drop to the 'start'. Bottom is default, so it is the last in the order. Bottom should essentially be the opposite of top
 * @param {top: boolean; start: boolean; end: boolean; alignCenter: boolean; alignEnd: boolean}
 * @returns {Placement} Placement
 */
export default ({
  top,
  end,
  start,
  alignCenter,
  alignEnd,
}: {
  top: boolean
  start: boolean
  end: boolean
  alignCenter: boolean
  alignEnd: boolean
}): Placement => {
  const direction = top ? 'top' : start ? 'left' : end ? 'right' : 'bottom'
  const align = alignEnd ? 'end' : alignCenter ? null : 'start'
  return `${direction}${align ? `-${align}` : ''}` as Placement
}
