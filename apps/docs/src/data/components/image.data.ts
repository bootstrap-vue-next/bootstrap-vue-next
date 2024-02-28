import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BImg',
      props: [
        {
          prop: 'blank',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'blankColor',
          type: 'string',
          default: 'transparent',
        },
        {
          prop: 'block',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'center',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'fluid',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'fluidGrow',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'height',
          type: 'number | string',
          default: undefined,
        },
        {
          prop: 'start',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'end',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'rounded',
          type: 'boolean | string',
          default: false,
        },
        {
          prop: 'sizes',
          type: 'string | string[]',
          default: undefined,
        },
        {
          prop: 'src',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'srcset',
          type: 'string | string[]',
          default: undefined,
        },
        {
          prop: 'thumbnail',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'width',
          type: 'number | string',
          default: undefined,
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'load',
              description: '',
              type: 'Event',
            },
          ],
          description: '',
          event: 'load',
        },
      ],
      slots: [],
    },
  ],
}
