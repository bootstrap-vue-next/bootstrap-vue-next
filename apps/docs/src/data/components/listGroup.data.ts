import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BListGroup',
      props: [
        {
          prop: 'flush',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'horizontal',
          type: 'boolean | Breakpoint',
          default: false,
        },
        {
          prop: 'numbered',
          type: 'boolean',
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
          type: 'boolean',
          default: false,
        },
        {
          prop: 'button',
          type: 'boolean',
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
