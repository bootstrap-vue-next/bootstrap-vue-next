import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick, showHideEmits, showHideProps, showHideSlotsData} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPopover',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tooltip, .popover'},
      sourcePath: '/BPopover/BPopover.vue',
      props: {
        '': {
          boundary: {
            type: 'Boundary | RootBoundary',
            default: 'clippingAncestors',
            description:
              'The boundary constraint of the popover: members of `Boundary` and `RootBoundary`.',
          },
          boundaryPadding: {
            type: 'Padding',
            default: undefined,
            description:
              'The popover will try and stay away from the edge of the boundary element by the number of pixels specified',
          },
          body: {
            type: 'string',
            default: undefined,
            description: 'Text to place in the body of the popover',
          },
          click: {
            type: 'boolean',
            default: false,
            description:
              'show/hide the popover on click of the target element (default is hover/focus)',
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
              'The margin to apply when hiding the popover on pointer leave (how far the pointer can move off the target before hiding the popover)',
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
            description: 'Disables all triggers. Use programmatic API to show/hide the popover',
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
            description: 'Disables the automatic flipping of the popover when it goes out of view.',
          },
          noHide: {
            type: 'boolean',
            default: false,
            description:
              'Overrides the default behavior of hiding the popover based on boundary & rootBoundary.',
          },
          noShift: {
            type: 'boolean',
            default: false,
            description: 'Disables the automatic shifting of the popover to keep it in view.',
          },
          noSize: {
            type: 'boolean',
            default: false,
            description: 'Disables the automatic sizing of the popover to fit the clipping region.',
          },
          noninteractive: {
            type: 'boolean',
            default: false,
            description:
              'Make popover noninteractive. Interactive popover can be hovered/focused without it closing.',
          },
          offset: {
            type: 'Numberish | null',
            default: null,
            description: `Offset of the popover, how many pixels away from the target the popover is. If null it's translated to the size of the arrow in bootstrap css.`,
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
              'The reference element to which the popover is anchored. If not specified, the popover will be positioned relative to the target element.',
          },
          strategy: {
            type: 'Strategy',
            default: 'absolute',
          },
          target: {
            type: 'string | ComponentPublicInstance | HTMLElement | null ',
            default: null,
            description:
              'The trigger element to invoke the popover as well as the reference element to which the popover is anchored, unless `reference` is defined.',
          },
          teleportDisabled: {
            type: 'boolean',
            default: false,
            description: 'Renders the popover in the exact place it was defined',
          },
          teleportTo: {
            type: 'string | RendererElement | null | undefined',
            default: undefined,
            description: 'Overrides the default teleport location',
          },
          tooltip: {
            type: 'boolean',
            default: false,
            description: 'Popover is rendered as a tooltip (used internally by BTooltip)',
          },
          closeOnHide: {
            type: 'boolean',
            default: false,
            description:
              'When `noAutoClose` is set, this prop will close the popover when the target is hidden',
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
        } satisfies Record<keyof BvnComponentProps['BPopover'], PropertyReference>,
      },
      emits: [
        ...showHideEmits,
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
          description: 'Emitted when the mouse is clicked outside of the popover.',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
            },
          ],
        },
        {
          event: 'close-on-hide',
          description: 'Emitted when the popover is closed due to being clipped.',
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
            'Emitted when the pointer leaves the target element. This event is not emitted when the pointer leaves the popover element.',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
            },
          ],
        },
        {
          event: 'update:model-value',
          description: 'Change the visibility of the popover',
          args: [
            {
              arg: 'value',
              type: 'boolean',
              description: 'New visibility state of the popover',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'title',
          description: 'Slot for title content',
          scope: showHideSlotsData,
        },
        {
          name: 'default',
          description: 'Slot for body content',
          scope: showHideSlotsData,
        },
        {
          name: 'target',
          description: 'Slot for target/trigger element',
          scope: showHideSlotsData,
        },
      ],
    },
  ],
}
