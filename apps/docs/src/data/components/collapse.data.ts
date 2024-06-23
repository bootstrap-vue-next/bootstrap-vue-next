import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCollapse',
      props: {
        '': {
          id: {
            type: 'string',
            default: undefined,
          },
          modelValue: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          toggle: {
            type: 'boolean',
            default: false,
          },
          horizontal: {
            type: 'boolean',
            default: false,
          },
          visible: {
            type: 'boolean',
            default: false,
          },
          isNav: {
            type: 'boolean',
            default: false,
          },
        },
      },
      emits: [
        {
          args: [
            {
              arg: 'update:modelValue',
              description: '',
              type: 'boolean',
            },
          ],
          description: '',
          event: 'update:modelValue',
        },
        {
          args: [],
          description: '',
          event: 'show',
        },
        {
          args: [],
          description: '',
          event: 'shown',
        },
        {
          args: [],
          description: '',
          event: 'hide',
        },
        {
          args: [],
          description: '',
          event: 'hidden',
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
