import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BImg',
      props: [
        {
          prop: 'blank',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'blankColor',
          type: 'string',
          default: 'transparent',
        },
        {
          prop: 'block',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'center',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'fluid',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'lazy',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'fluidGrow',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'height',
          type: 'number | string',
          default: undefined,
        },
        {
          prop: 'start',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'end',
          type: 'boolean',
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
          type: 'boolean',
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
