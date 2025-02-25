import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../types'
export {showHideProps} from './showhide-props'
import {buildCommonProps} from './build-common-props'
import {pick} from './object-utils'
import {showHideProps} from './showhide-props'

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
} satisfies Record<keyof BvnComponentProps['BDropdown'], PropertyReference>

export const dropdownEmits: ComponentReference['emits'] = [
  {
    event: 'click',
    description: 'Emitted when button is clicked',
    args: [
      {
        arg: 'event',
        type: 'MouseEvent',
        description: 'Native click event object',
      },
    ],
  },
  {
    event: 'hide',
    description: 'Emitted just before dropdown is hidden. Cancelable',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel hide',
      },
    ],
  },
  {
    event: 'hidden',
    description: 'Called after dropdown is hidden',
  },
  {
    event: 'hide-prevented',
    description: 'Emitted when the dropdown tried to close, but was prevented from doing so.',
  },
  {
    event: 'show',
    description: 'Emitted just before dropdown is shown. Cancelable',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel show',
      },
    ],
  },
  {
    event: 'shown',
    description: 'Called after dropdown is shown',
  },
  {
    event: 'show-prevented',
    description: 'Emitted when the dropdown tried to open, but was prevented from doing so.',
  },
  {
    event: 'split-click',
    description: 'Emitted when split button is clicked in split mode',
    args: [
      {
        arg: 'event',
        type: 'MouseEvent',
        description: 'Native click event object',
      },
    ],
  },
  {
    event: 'toggle',
    description: 'Emitted when toggle button is clicked',
  },
]

export const dropdownSlots: ComponentReference['slots'] = [
  {
    name: 'default',
    description: 'Optionally scoped default slot for dropdown menu content',
    scope: [
      {
        prop: 'hide',
        type: '() => void',
        description: 'Can be used to close the dropdown',
      },
      {
        prop: 'show',
        type: '() => void',
        description: 'Can be used to open the dropdown',
      },
    ],
  },
  {
    name: 'button-content',
    description: 'Can be used to implement custom text with icons and more styling',
  },
  {
    name: 'toggle-text',
    description:
      'ARIA label (visually-hidden) to set on the toggle when in split mode. Overrides the toggle-text prop',
  },
]
