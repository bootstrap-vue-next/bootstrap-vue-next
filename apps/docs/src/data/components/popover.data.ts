import type {BPopoverEmits, BPopoverProps, BPopoverSlots} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  type EmitRecord,
  type PropRecord,
  type SlotRecord,
  StyleKind,
} from '../../types'
import {showHideEmits, showHideProps, showHideSlotsData} from '../../utils/showHideData'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BPopover: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tooltip, .popover'},
      sourcePath: '/BPopover/BPopover.vue',
      props: {
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
        boundary: {
          type: 'Boundary | RootBoundary',
          default: 'clippingAncestors',
          description:
            'The boundary constraint of the popover, using members of `Boundary` or `RootBoundary`.',
        },
        boundaryPadding: {
          type: 'Padding',
          default: undefined,
          description:
            'The number of pixels the popover stays away from the edge of the boundary element.',
        },
        body: {
          type: 'string',
          default: undefined,
          description: 'Text to place in the body of the popover.',
        },
        click: {
          type: 'boolean',
          default: undefined,
          description: 'Enable/disable click trigger. See [Triggers](#triggers) for details.',
        },
        focus: {
          type: 'boolean',
          default: undefined,
          description: 'Enable/disable focus trigger. See [Triggers](#triggers) for details.',
        },
        hover: {
          type: 'boolean',
          default: undefined,
          description: 'Enable/disable hover trigger. See [Triggers](#triggers) for details.',
        },
        delay: {
          type: 'number | { show: number; hide: number }',
          default: '() => ({show: 100, hide: 300})', // TODO item not in string format
          description:
            'Sets the show and hide delay. Use a number for both, or an object to set show and hide delays individually.',
        },
        floatingMiddleware: {
          type: 'Middleware[]',
          default: undefined,
          description: 'Directly sets the Floating UI middleware behavior.',
        },
        hideMargin: {
          type: 'number',
          default: 0, // TODO item not in string format
          description:
            'The margin applied when hiding the popover on pointer leave, specifying how far the pointer can move off the target before hiding.',
        },
        inline: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Improves positioning for inline reference elements spanning multiple lines (from Floating UI).',
        },
        manual: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Disables all triggers, requiring the programmatic API to show or hide the popover.',
        },
        noAutoClose: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Disables automatic closing on click outside or scroll out of view, overriding `closeOnHide`.',
        },
        noFlip: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disables automatic flipping of the popover when it goes out of view.',
        },
        noHide: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Prevents the popover from hiding based on `boundary` or `rootBoundary` constraints.',
        },
        noShift: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disables automatic shifting of the popover to keep it in view.',
        },
        noSize: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disables automatic sizing of the popover to fit the clipping region.',
        },
        noninteractive: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Makes the popover non-interactive, preventing it from remaining open when hovered or focused.',
        },
        offset: {
          type: 'Numberish | null',
          default: null, // TODO item not in string format
          description:
            'Sets the offset of the popover in pixels from the target. If `null`, uses the size of the Bootstrap CSS arrow.',
        },
        realtime: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Updates the popover position on every animation frame if required. CPU-intensive; the default listens to browser events.',
        },
        reference: {
          type: 'string | ComponentPublicInstance | HTMLElement | null',
          default: null, // TODO item not in string format
          description:
            'The reference element to which the popover is anchored. If unspecified, the popover is positioned relative to the target element.',
        },
        strategy: {
          type: 'Strategy',
          default: 'absolute',
        },
        target: {
          type: 'string | ComponentPublicInstance | HTMLElement | null',
          default: null, // TODO item not in string format
          description:
            'The trigger and reference element for the popover, unless `reference` is defined.',
        },
        teleportDisabled: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Renders the popover in its defined location, disabling teleporting.',
        },
        teleportTo: {
          type: 'string | RendererElement | null | undefined',
          default: undefined,
          description: 'Overrides the default teleport location.',
        },
        tooltip: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Renders the popover as a tooltip (used internally by `BTooltip`).',
        },
        closeOnHide: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Closes the popover when the target is hidden, if `noAutoClose` is set.',
        },
      } satisfies PropRecord<keyof BPopoverProps>,
      emits: {
        ...showHideEmits,
        'blur': {
          description: 'Emitted when the target element loses focus.',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '', // TODO missing description
            },
          },
        },
        'click-outside': {
          description: 'Emitted when the mouse is clicked outside the popover.',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '', // TODO missing description
            },
          },
        },
        'close-on-hide': {
          description: 'Emitted when the popover is closed due to being clipped.',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '', // TODO missing description
            },
          },
        },
        'pointerleave': {
          description:
            'Emitted when the pointer leaves the target element, but not when leaving the popover element.',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '', // TODO missing description
            },
          },
        },
        'update:model-value': {
          description: 'Emitted when the visibility of the popover changes.', // TODO similar content to BAlert/update:model-value (similar purpose)
          args: {
            value: {
              type: 'boolean',
              description: 'New visibility state of the popover.',
            },
          },
        },
        'cancel': {
          args: undefined,
          description: undefined,
        },
        'ok': {
          args: undefined,
          description: undefined,
        },
      } satisfies EmitRecord<keyof BPopoverEmits | 'update:model-value'>,
      slots: {
        title: {
          description: 'Content for the popover title.',
          scope: showHideSlotsData,
        },
        default: {
          description: 'Content for the popover body.',
          scope: showHideSlotsData,
        },
        target: {
          description: 'Content for the target or trigger element.',
          scope: showHideSlotsData,
        },
      } satisfies SlotRecord<keyof BPopoverSlots>,
    },
  }),
}
