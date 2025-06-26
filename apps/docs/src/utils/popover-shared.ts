import type {BTooltipProps, BvnComponentProps} from 'bootstrap-vue-next'
import {type EmitArgReference, type PropertyReference} from '../types'
import {buildCommonProps, pick, showHideProps} from '.'

export const popoverSharedProps = (
  type: string
): Record<keyof BTooltipProps, PropertyReference> => {
  const clone = JSON.parse(JSON.stringify(sharedProps))
  for (const key in clone) {
    if (clone[key]?.description && typeof clone[key].description === 'string') {
      clone[key].description = clone[key].description.replace(/\{component\}/g, type)
    }
  }
  return clone
}

const sharedProps = {
  boundary: {
    type: 'Boundary | RootBoundary',
    default: 'clippingAncestors',
    description:
      'The boundary constraint of the {component}: members of `Boundary` and `RootBoundary`.',
  },
  boundaryPadding: {
    type: 'Padding',
    default: undefined,
    description:
      'The {component} will try and stay away from the edge of the boundary element by the number of pixels specified',
  },
  body: {
    type: 'string',
    default: undefined,
    description: 'Text to place in the body of the {component}',
  },
  click: {
    type: 'boolean',
    default: false,
    description:
      'show/hide the {component} on click of the target element (default is hover/focus)',
  },
  delay: {
    type: 'number | { show: number; hide: number }',
    default: '() => {show: 100, hide: 300})',
    description:
      'Value for the show and hide delay. Applies to both show and hide when specified as a number or string. Use object form to set show and hide delays individually',
  },
  floatingMiddleware: {
    type: 'Middleware[]',
    default: undefined,
    description: 'Directly set the floating-ui middleware behavior. See above for details.',
  },
  hideMargin: {
    type: 'number',
    default: 0,
    description:
      'The margin to apply when hiding the {component} on pointer leave (how far the pointer can move off the target before hiding the {component})',
  },
  inline: {
    type: 'boolean',
    default: false,
    description:
      'Improves positioning for inline reference elements that span over multiple lines (from floating-ui).',
  },
  manual: {
    type: 'boolean',
    default: false,
    description: 'Disables all triggers. Use programmatic API to show/hide the {component}',
  },
  noAutoClose: {
    type: 'boolean',
    default: false,
    description:
      'Disables automatic closing on click outside or scrool out of view. Overrides `close-on-hide`',
  },
  noFlip: {
    type: 'boolean',
    default: false,
    description: 'Disables the automatic flipping of the {component} when it goes out of view.',
  },
  noHide: {
    type: 'boolean',
    default: false,
    description:
      'Overrides the default behavior of hiding the {component} based on boundary & rootBoundary.',
  },
  noShift: {
    type: 'boolean',
    default: false,
    description: 'Disables the automatic shifting of the {component} to keep it in view.',
  },
  noSize: {
    type: 'boolean',
    default: false,
    description: 'Disables the automatic sizing of the {component} to fit the clipping region.',
  },
  noninteractive: {
    type: 'boolean',
    default: false,
    description:
      'Make {component} noninteractive. Interactive {component} can be hovered/focused without it closing.',
  },
  offset: {
    type: 'Numberish | null',
    default: null,
    description: `Offset of the {component}, how many pixels away from the target the {component} is. If null it's translated to the size of the arrow in bootstrap css.`,
  },
  realtime: {
    type: 'boolean',
    default: false,
    description:
      'Whether to update the position of the floating element on every animation frame if required. Very cpu intensive, the default is to listen to browser events.',
  },
  reference: {
    type: 'string | ComponentPublicInstance | HTMLElement | null',
    default: null,
    description:
      'The reference element to which the {component} is anchored. If not specified, the {component} will be positioned relative to the target element.',
  },
  strategy: {
    type: 'Strategy',
    default: 'absolute',
  },
  target: {
    type: 'string | ComponentPublicInstance | HTMLElement | null ',
    default: null,
    description:
      'The trigger element to invoke the {component} as well as the reference element to which the {component} is anchored, unless `reference` is defined.',
  },
  teleportDisabled: {
    type: 'boolean',
    default: false,
    description: 'Renders the {component} in the exact place it was defined',
  },
  teleportTo: {
    type: 'string | RendererElement | null | undefined',
    default: undefined,
    description: 'Overrides the default teleport location',
  },
  tooltip: {
    type: 'boolean',
    default: false,
    description: 'The {component} is rendered as a tooltip (used internally by BTooltip)',
  },
  closeOnHide: {
    type: 'boolean',
    default: false,
    description:
      'When `noAutoClose` is set, this prop will close the {component} when the target is hidden',
  },
  ...showHideProps,
  ...pick(
    buildCommonProps({
      placement: {
        type: 'PopoverPlacement',
        default: 'top',
      },
    }),
    ['bodyClass', 'id', 'placement', 'title', 'titleClass']
  ),
} satisfies Record<keyof BvnComponentProps['BPopover'], PropertyReference>

export const popoverSharedEmits = (type: string) =>
  sharedEmits.map((emit) => {
    const clone = JSON.parse(JSON.stringify(emit))
    if (clone.description && typeof clone.description === 'string') {
      clone.description = clone.description.replace(/\{component\}/g, type)
    }
    if (Array.isArray(clone.args)) {
      clone.args = clone.args.map((arg: EmitArgReference) => {
        if (arg.description && typeof arg.description === 'string') {
          arg.description = arg.description.replace(/\{component\}/g, type)
        }
        return arg
      })
    }
    return clone
  })

const sharedEmits = [
  {
    event: 'blur',
    description: 'Emitted when the target element loses focus.',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
  },
  {
    event: 'click-outside',
    description: 'Emitted when the mouse is clicked outside of the {component}.',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
  },
  {
    event: 'close-on-hide',
    description: 'Emitted when the {component} is closed due to being clipped.',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
  },
  {
    event: 'pointerleave',
    description:
      'Emitted when the pointer leaves the target element. This event is not emitted when the pointer leaves the {component} element.',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
  },
  {
    event: 'update:model-value',
    description: 'Change the visibility of the {component}',
    args: [
      {
        arg: 'value',
        type: 'boolean',
        description: 'New visibility state of the {component}',
      },
    ],
  },
]
