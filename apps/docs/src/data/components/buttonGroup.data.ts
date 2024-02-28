import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonGroup',
      props: [
        {
          prop: 'ariaLabel',
          type: 'string',
          default: 'Group',
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'vertical',
          type: 'boolean',
          default: false,
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
