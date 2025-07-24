import type {BOverlayEmits, BOverlaySlots, BvnComponentProps} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  type EmitReference,
  type PropertyReference,
  type SlotsReference,
  StyleKind,
} from '../../types'

export default {
  load: (): ComponentReference => ({
    BOverlay: {
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BOverlay/BOverlay.vue',
      props: {
        bgColor: {
          type: 'string',
          default: undefined,
        },
        blur: {
          type: 'string | null',
          default: '2px',
        },
        fixed: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noCenter: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noFade: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noSpinner: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noWrap: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        opacity: {
          type: 'Numberish',
          default: 0.85, // TODO item not in string format
        },
        overlayTag: {
          type: 'string',
          default: 'div',
        },
        rounded: {
          type: 'boolean | RadiusElement',
          default: false, // TODO item not in string format
        },
        roundedTop: {
          type: 'boolean | RadiusElement',
          default: undefined,
        },
        roundedBottom: {
          type: 'boolean | RadiusElement',
          default: undefined,
        },
        roundedStart: {
          type: 'boolean | RadiusElement',
          default: undefined,
        },
        roundedEnd: {
          type: 'boolean | RadiusElement',
          default: undefined,
        },
        show: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        spinnerSmall: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        spinnerType: {
          type: 'SpinnerType',
          default: 'border',
        },
        spinnerVariant: {
          type: 'ColorVariant | null',
          default: undefined,
        },
        variant: {
          type: "ColorVariant | 'white' | 'transparent' | null",
          default: 'light',
        },
        wrapTag: {
          type: 'string',
          default: 'div',
        },
        zIndex: {
          type: 'Numberish',
          default: 10, // TODO item not in string format
        },
      } satisfies Record<keyof BvnComponentProps['BOverlay'], PropertyReference>,
      emits: {
        click: {
          args: {
            click: {
              description: '', // TODO missing description
              type: 'MouseEvent',
            },
          },
          description: '', // TODO missing description
        },
        hidden: {
          description: '', // TODO missing description
          args: {},
        },
        shown: {
          description: '', // TODO missing description
          args: {},
        },
      } satisfies Record<keyof BOverlayEmits, EmitReference>,
      slots: {
        default: {
          description: '', // TODO missing description
          scope: {},
        },
        overlay: {
          description: '', // TODO missing description
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
      }satisfies Record<keyof BOverlaySlots, SlotsReference>,
    },
  }),
}
