import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonGroup',
      props: {
        '': {
          ariaLabel: {
            type: 'string',
            default: 'Group',
          },
          size: {
            type: 'Size',
            default: 'md',
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          vertical: {
            type: 'boolean',
            default: false,
          },
        },
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
      emits: [],
    },
  ],
}
