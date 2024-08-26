import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCollapse',
      sourcePath: '/BCollapse/BCollapse.vue',
      props: {
        '': {
          horizontal: {
            type: 'boolean',
            default: false,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          isNav: {
            type: 'boolean',
            default: false,
          },
          modelValue: {
            type: 'boolean',
            default: false,
          },
          skipAnimation: {
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
          visible: {
            type: 'boolean',
            default: false,
          },
        } satisfies Record<keyof BvnComponentProps['BCollapse'], PropertyReference>,
      },
      emits: [
        {
          args: [
            {
              arg: 'update:model-value',
              description: '',
              type: 'boolean',
            },
          ],
          description: '',
          event: 'update:model-value',
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
          event: 'show-prevented',
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
        {
          args: [],
          description: '',
          event: 'hide-prevented',
        },
      ],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
        {
          description: '',
          name: 'footer',
          scope: [],
        },
        {
          description: '',
          name: 'header',
          scope: [],
        },
      ],
    },
  ],
}
