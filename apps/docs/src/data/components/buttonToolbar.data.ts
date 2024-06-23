import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonToolbar',
      props: {
        '': {
          ariaLabel: {
            type: 'string',
            default: 'Group',
          },
          justify: {
            type: 'boolean',
            default: false,
          },
          role: {
            type: 'string',
            default: 'toolbar',
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
