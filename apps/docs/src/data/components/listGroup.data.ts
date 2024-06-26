import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BListGroup',
      props: {
        '': {
          flush: {
            type: 'boolean',
            default: false,
          },
          horizontal: {
            type: 'boolean | Breakpoint',
            default: false,
          },
          numbered: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
        },
      },
      emits: [],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BListGroupItem',
      props: {
        '': {
          action: {
            type: 'boolean',
            default: false,
          },
          button: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
        },
      },
      emits: [],
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
