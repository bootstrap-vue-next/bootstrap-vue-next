import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BSpinner',
      props: [
        {
          prop: 'label',
          type: 'string',
        },
        {
          prop: 'role',
          type: 'string',
        },
        {
          prop: 'small',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'type',
          type: 'SpinnerType',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
        },
      ],
      emits: [],
      slots: [
        {
          description: '',
          name: 'label',
          scope: [],
        },
      ],
    },
  ],
}
