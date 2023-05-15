import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonToolbar',
      props: [
        {
          description: '',
          prop: 'ariaLabel',
          type: 'string',
        },
        {
          description: 'Applies class justify-content-between',
          prop: 'justify',
          type: 'Booleanish',
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
