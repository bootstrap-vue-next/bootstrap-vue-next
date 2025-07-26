import type {BDropdownEmits, BDropdownProps} from 'bootstrap-vue-next'
import type {EmitRecord, PropRecord, SlotRecord} from '../types'
import {buildCommonProps} from './commonProps'
import {pick} from './objectUtils'
import {showHideEmits, showHideProps} from './showHideData'

export const dropdownProps = {
  autoClose: {
    type: "boolean | 'inside' | 'outside'",
    default: true,
    description:
      'Controls the automatic closing of the dropdown when clicking. See above for details.',
  },
  boundary: {
    type: 'Boundary | RootBoundary',
    default: 'clippingAncestors',
    description:
      "The boundary constraint of dropdown: any value of floating-us's Boundary or RootBoundary type. See above for details.",
  },
  boundaryPadding: {
    type: 'Padding',
    default: undefined,
    description: 'The virtual padding around the boundary to check for overflow',
  },
  floatingMiddleware: {
    type: 'Middleware[]',
    default: undefined,
    description: 'Directly set the floating-ui middleware behavior. See above for details.',
  },
  icon: {
    type: 'boolean',
    default: false,
    description: 'When set, styles an icon at the beginning or end of the button text',
  },
  isNav: {
    type: 'boolean',
    default: false,
    description: 'Indicates the dropdown is a nav dropdown',
  },
  menuClass: {
    type: 'ClassValue',
    default: undefined,
    description: 'CSS class (or classes) to add to the menu container',
  },
  noCaret: {
    type: 'boolean',
    default: false,
    description: 'Hide the caret indicator on the toggle button',
  },
  noFlip: {
    type: 'boolean',
    default: false,
    description: 'Prevent the menu from auto flipping positions',
  },
  noShift: {
    type: 'boolean',
    default: false,
    description: 'Prevent the menu from automatically shifting positions',
  },
  noSize: {
    type: 'boolean',
    default: false,
    description: 'Prevent the menu from automatically resizing',
  },
  offset: {
    type: 'number | string | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null',
    default: 0,
    description: 'Specify the number of pixels to shift the menu by. See above for details.',
  },
  noWrapper: {
    type: 'boolean',
    default: false,
    description: 'Do not render the dropdown wrapper element',
  },
  split: {
    type: 'boolean',
    default: false,
    description: 'When set, renders a split button dropdown',
  },
  splitButtonType: {
    type: 'ButtonType',
    default: 'button',
    description:
      "Value to place in the 'type' attribute on the split button: 'button', 'submit', 'reset'",
  },
  splitClass: {
    type: 'ClassValue',
    default: undefined,
    description: 'CSS class (or classes) to add to the split button',
  },
  splitDisabled: {
    type: 'boolean',
    default: undefined,
    description: 'When set, the split button is disabled',
  },
  splitHref: {
    type: 'string',
    default: undefined,
    description: 'Denotes the target URL of the link for the split button',
  },
  splitTo: {
    type: 'RouteLocationRaw',
    default: undefined,
    description:
      'Denotes the target route of the split button. When clicked, the value of the to prop will be passed to router.push() internally, so the value can be either a string or a Location descriptor object',
  },
  splitVariant: {
    type: 'ButtonVariant | null',
    default: undefined,
    description:
      "Applies one of the Bootstrap theme color variants to the split button. Defaults to the 'variant' prop value",
  },
  strategy: {
    type: 'Strategy',
    default: 'absolute',
    description: 'The strategy used to determine when to hide the dropdown. See above for details.',
  },
  text: {
    type: 'string',
    default: undefined,
    description: 'Text to place in the toggle button, or in the split button is split mode',
  },
  toggleClass: {
    type: 'ClassValue',
    default: undefined,
    description: 'CSS class (or classes) to add to the toggle button',
  },
  toggleText: {
    type: 'string',
    default: 'Toggle dropdown',
    description:
      'ARIA label (visually-hidden) to set on the toggle when in split mode. Overriden by the slot of the same name',
  },
  teleportDisabled: {
    type: 'boolean',
    default: false,
    description: 'Renders the dropdown in the exact place it was defined',
  },
  teleportTo: {
    type: 'string | RendererElement | null | undefined',
    default: undefined,
    description: 'Overrides the default teleport location',
  },
  ...showHideProps,
  ...pick(
    buildCommonProps({
      role: {
        default: 'menu',
      },
      variant: {
        default: 'secondary',
      },
    }),
    ['ariaLabel', 'disabled', 'id', 'placement', 'role', 'size', 'variant', 'wrapperClass']
  ),
} as const satisfies PropRecord<keyof BDropdownProps>

export const dropdownEmits = {
  ...showHideEmits,
  'split-click': {
    description: 'Emitted when split button is clicked in split mode',
    args: {
      event: {
        type: 'MouseEvent',
        description: 'Native click event object',
      },
    },
  },
  'toggle': {
    description: 'Emitted when toggle button is clicked',
  },
  'cancel': {
    args: undefined,
    description: undefined,
  },
  'ok': {
    args: undefined,
    description: undefined,
  },
} as const satisfies EmitRecord<keyof BDropdownEmits>

export const dropdownSlots = {
  'default': {
    description: 'Optionally scoped default slot for dropdown menu content',
    scope: {
      hide: {
        type: '() => void',
        description: 'Can be used to close the dropdown',
      },
      show: {
        type: '() => void',
        description: 'Can be used to open the dropdown',
      },
    },
  },
  'button-content': {
    description: 'Can be used to implement custom text with icons and more styling',
  },
  'toggle-text': {
    description:
      'ARIA label (visually-hidden) to set on the toggle when in split mode. Overrides the toggle-text prop',
  },
} as const satisfies SlotRecord
