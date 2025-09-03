import type {BOverlayEmits, BOverlayProps, BOverlaySlots} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  type EmitRecord,
  type PropRecord,
  type SlotRecord,
  StyleKind,
} from '../../types'
import {buildCommonProps} from '../../utils/commonProps'

import {pick} from '../../utils/objectUtils'

export default {
  load: (): ComponentReference => ({
    BOverlay: {
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BOverlay/BOverlay.vue',
      props: {
        bgColor: {
          type: 'string',
          default: undefined,
          description:
            'CSS color to use as the opaque overlay backdrop color. If set, overrides the `variant` prop',
        },
        blur: {
          type: 'string | null',
          default: '2px',
          description:
            'Value for the CSS blur backdrop-filter. Be sure to include the CSS units. Not supported in IE 11. Set to null or an empty string to disable blurring',
        },
        fixed: {
          type: 'boolean',
          default: false,
          description:
            'When prop `no-wrap` is set, will use fixed positioning instead of absolute positioning. Handy if you want to obscure the entire application page',
        },
        noCenter: {
          type: 'boolean',
          default: false,
          description:
            'When set, disables the vertical and horizontal centering of the overlay content',
        },
        noFade: {
          type: 'boolean',
          default: false,
          description: 'Disables the fade transition of the overlay',
        },
        noSpinner: {
          type: 'boolean',
          default: false,
          description: 'If set, will not show the spinner',
        },
        noWrap: {
          type: 'boolean',
          default: false,
          description:
            'Disabled generating the wrapper element, and ignored the default slot. Requires that `<b-overlay>` be placed in an element with position relative set',
        },
        opacity: {
          type: 'Numberish',
          default: 0.85,
          description: 'Opacity of the overlay backdrop. Valid range is `0` to `1`',
        },
        overlayTag: {
          type: 'string',
          default: 'div',
          description: 'Element tag to use as for the overlay element',
        },
        show: {
          type: 'boolean',
          default: false,
          description: 'When set, shows the overlay',
        },
        spinnerSmall: {
          type: 'boolean',
          default: false,
          description: 'When set, renders the default spinner in a smaller size',
        },
        spinnerType: {
          type: 'SpinnerType',
          default: 'border',
          description:
            "Type of the default spinner to show. Current supported types are 'border' and 'grow'",
        },
        spinnerVariant: {
          type: 'ColorVariant | null',
          default: undefined,
          description: 'Applies one of the Bootstrap theme color variants to the spinner.',
        },
        variant: {
          type: "ColorVariant | 'white' | 'transparent' | null",
          default: 'light',
          description:
            'Applies one of the Bootstrap theme color variants to the default spinner. Default is to use the current font color',
        },
        wrapTag: {
          type: 'string',
          default: 'div',
          description:
            'Element tag to use for the overall wrapper element. Has no effect if prop `no-wrap` is set',
        },
        zIndex: {
          type: 'Numberish',
          default: 10,
          description:
            'Z-index value to apply to the overlay. You may need to increase this value to suit your content or placement',
        },
        ...pick(buildCommonProps({}), [
          'rounded',
          'roundedTop',
          'roundedBottom',
          'roundedStart',
          'roundedEnd',
        ]),
      } satisfies PropRecord<keyof BOverlayProps>,
      emits: {
        click: {
          description: 'Emitted when overlay is clicked',
          args: {
            click: {
              description: 'The native click event',
              type: 'MouseEvent',
            },
          },
        },
        hidden: {
          description: 'Emitted when the overlay has been hidden',
          args: {},
        },
        shown: {
          description: 'Emitted when the overlay has been shown',
          args: {},
        },
      } satisfies EmitRecord<keyof BOverlayEmits>,
      slots: {
        default: {
          description:
            'The content to be overlayed. The default slot is ignored if the prop `no-wrap` is set',
          scope: {},
        },
        overlay: {
          description: 'Custom content to replace the default overlay spinner',
          scope: {
            type: {
              type: 'SpinnerType',
            },
            variant: {
              type: 'ColorVariant | null',
            },
            small: {
              type: 'boolean',
            },
          },
        },
      } satisfies SlotRecord<keyof BOverlaySlots>,
    },
  }),
}
