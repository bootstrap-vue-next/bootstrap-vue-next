import type {Placement} from '@floating-ui/vue'

// TODO this function doesn't currently resolve with RTL in mind. Once Bootstrap finalizes their RTL, we should make this change here
/**
 * Configures Bootstrap-like placement props to floating-ui Placement strings.
 * Top drops up, bottom drops down, end drops right, start drops left, dropend will _align_ the drop to the 'end',
 * dropstart will _align_ the drop to the 'start'. Bottom is default, so it is the last in the order. Bottom should essentially be the opposite of top
 * @param {top: boolean; bottom: boolean; start: boolean; end: boolean; dropstart: boolean; dropend: boolean}
 * @returns {Placement} Placement
 */
export default ({
  top,
  bottom,
  end,
  start,
  dropend,
  dropstart,
}: {
  top: boolean
  bottom: boolean
  start: boolean
  end: boolean
  dropstart: boolean
  dropend: boolean
}): Placement =>
  top && dropstart
    ? 'top-start'
    : top && dropend
    ? 'top-end'
    : start && dropstart
    ? 'left-start'
    : start && dropend
    ? 'left-end'
    : end && dropstart
    ? 'right-start'
    : end && dropend
    ? 'right-end'
    : top
    ? 'top'
    : start
    ? 'left'
    : end
    ? 'right'
    : bottom && dropstart
    ? 'bottom-start'
    : bottom && dropend
    ? 'bottom-end'
    : 'bottom'
