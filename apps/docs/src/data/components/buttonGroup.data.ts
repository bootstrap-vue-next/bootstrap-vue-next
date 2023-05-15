import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonGroup',
      props: [
        {
          description: '',
          prop: 'ariaLabel',
          type: 'string',
        },
        {
          description: 'Applies class btn-group-{size}',
          prop: 'size',
          type: 'Size',
        },
        {
          description: '',
          prop: 'tag',
          type: 'string',
        },
        {
          description: 'Applies class btn-group-vertical',
          prop: 'vertical',
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
