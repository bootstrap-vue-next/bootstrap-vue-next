import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BSpinner',
      props: [
        {
          prop: 'label',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'role',
          type: 'string',
          default: 'status',
        },
        {
          prop: 'small',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'span',
        },
        {
          prop: 'type',
          type: 'SpinnerType',
          default: 'border',
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
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
