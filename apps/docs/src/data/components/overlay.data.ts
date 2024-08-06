import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BOverlay',
      props: {
        '': {
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
            default: false,
          },
          noCenter: {
            type: 'boolean',
            default: false,
          },
          noFade: {
            type: 'boolean',
            default: false,
          },
          noSpinner: {
            type: 'boolean',
            default: false,
          },
          noWrap: {
            type: 'boolean',
            default: false,
          },
          opacity: {
            type: 'Numberish',
            default: 0.85,
          },
          overlayTag: {
            type: 'string',
            default: 'div',
          },
          rounded: {
            type: 'boolean | RadiusElement',
            default: false,
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
            default: false,
          },
          spinnerSmall: {
            type: 'boolean',
            default: false,
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
            default: 10,
          },
        },
      },
      emits: [
        {
          args: [
            {
              arg: 'click',
              description: '',
              type: 'MouseEvent',
            },
          ],
          description: '',
          event: 'click',
        },
        {
          args: [],
          description: '',
          event: 'hidden',
        },
        {
          args: [],
          description: '',
          event: 'shown',
        },
      ],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
        {
          name: 'overlay',
          description: '',
          scope: [
            {
              prop: 'type',
              type: 'SpinnerType',
            },
            {
              prop: 'variant',
              type: 'ColorVariant | null',
            },
            {
              prop: 'small',
              type: 'boolean',
            },
          ],
        },
      ],
    },
  ],
}
