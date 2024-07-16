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
          fluid: {
            type: 'boolean',
            default: false,
          },
          fluidGrow: {
            type: 'boolean',
            default: false,
          },
          height: {
            type: 'Numberish',
            default: undefined,
          },
          lazy: {
            type: 'boolean',
            default: false,
          },
          placement: {
            type: "'start' | 'end' | 'center'",
            default: undefined,
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
          tag: {
            type: 'string',
            default: 'img',
          },
          thumbnail: {
            type: 'boolean',
            default: false,
          },
          width: {
            type: 'Numberish',
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
