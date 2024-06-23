import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BImg',
      props: {
        '': {
          blank: {
            type: 'boolean',
            default: false,
          },
          blankColor: {
            type: 'string',
            default: 'transparent',
          },
          block: {
            type: 'boolean',
            default: false,
          },
          center: {
            type: 'boolean',
            default: false,
          },
          fluid: {
            type: 'boolean',
            default: false,
          },
          lazy: {
            type: 'boolean',
            default: false,
          },
          fluidGrow: {
            type: 'boolean',
            default: false,
          },
          height: {
            type: 'number | string',
            default: undefined,
          },
          start: {
            type: 'boolean',
            default: false,
          },
          end: {
            type: 'boolean',
            default: false,
          },
          rounded: {
            type: 'boolean | string',
            default: false,
          },
          sizes: {
            type: 'string | string[]',
            default: undefined,
          },
          src: {
            type: 'string',
            default: undefined,
          },
          srcset: {
            type: 'string | string[]',
            default: undefined,
          },
          thumbnail: {
            type: 'boolean',
            default: false,
          },
          width: {
            type: 'number | string',
            default: undefined,
          },
        },
      },
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
