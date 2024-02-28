import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BOverlay',
      props: [
        {
          prop: 'bgColor',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'blur',
          type: 'string | null',
          default: '2px',
        },
        {
          prop: 'fixed',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noCenter',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noFade',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noWrap',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'opacity',
          type: 'number | string',
          default: 0.85,
        },
        {
          prop: 'overlayTag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'rounded',
          type: 'boolean | string',
          default: false,
        },
        {
          prop: 'show',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'spinnerSmall',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'spinnerType',
          type: 'SpinnerType',
          default: 'border',
        },
        {
          prop: 'spinnerVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'noSpinner',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'variant',
          type: "ColorVariant | 'white' | 'transparent' | null",
          default: 'light',
        },
        {
          prop: 'wrapTag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'zIndex',
          type: 'number | string',
          default: 10,
        },
      ],
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
      ],
    },
  ],
}
