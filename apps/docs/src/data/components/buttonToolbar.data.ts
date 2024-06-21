import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonToolbar',
      props: [
        {
          prop: 'ariaLabel',
          type: 'string',
          default: 'Group',
        },
        {
          prop: 'justify',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'role',
          type: 'string',
          default: 'toolbar',
        },
      ],
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
