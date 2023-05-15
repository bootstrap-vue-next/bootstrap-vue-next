import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BOverlay',
      props: [
        {
          prop: 'bgColor',
          type: 'string',
        },
        {
          prop: 'blur',
          type: 'string',
        },
        {
          prop: 'fixed',
          type: 'Booleanish',
        },
        {
          prop: 'noCenter',
          type: 'Booleanish',
        },
        {
          prop: 'noFade',
          type: 'Booleanish',
        },
        {
          prop: 'noWrap',
          type: 'Booleanish',
        },
        {
          prop: 'opacity',
          type: 'number | string',
        },
        {
          prop: 'overlayTag',
          type: 'string',
        },
        {
          prop: 'rounded',
          type: 'boolean | string',
        },
        {
          prop: 'show',
          type: 'Booleanish',
        },
        {
          prop: 'spinnerSmall',
          type: 'Booleanish',
        },
        {
          prop: 'spinnerType',
          type: 'string',
        },
        {
          prop: 'spinnerVariant',
          type: 'string',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
        },
        {
          prop: 'wrapTag',
          type: 'string',
        },
        {
          prop: 'zIndex',
          type: 'number | string',
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
