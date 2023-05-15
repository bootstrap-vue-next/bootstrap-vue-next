import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BImg',
      props: [
        {
          prop: 'alt',
          type: 'string',
        },
        {
          prop: 'blank',
          type: 'Booleanish',
        },
        {
          prop: 'blankColor',
          type: 'string',
        },
        {
          prop: 'block',
          type: 'Booleanish',
        },
        {
          prop: 'center',
          type: 'Booleanish',
        },
        {
          prop: 'fluid',
          type: 'Booleanish',
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
        },
        {
          prop: 'fluidGrow',
          type: 'Booleanish',
        },
        {
          prop: 'height',
          type: 'number | string',
        },
        {
          prop: 'left',
          type: 'Booleanish',
        },
        {
          prop: 'right',
          type: 'Booleanish',
        },
        {
          prop: 'rounded',
          type: 'boolean | string',
        },
        {
          prop: 'sizes',
          type: 'string | string[]',
        },
        {
          prop: 'src',
          type: 'string',
        },
        {
          prop: 'srcset',
          type: 'string | string[]',
        },
        {
          prop: 'thumbnail',
          type: 'Booleanish',
        },
        {
          prop: 'width',
          type: 'number | string',
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
