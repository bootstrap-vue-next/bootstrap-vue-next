import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BListGroup',
      props: [
        {
          prop: 'flush',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'horizontal',
          type: 'boolean | Breakpoint',
          default: false,
        },
        {
          prop: 'numbered',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
      ],
      emits: [],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BListGroupItem',
      props: [
        {
          prop: 'action',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'button',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
      ],
      emits: [],
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
