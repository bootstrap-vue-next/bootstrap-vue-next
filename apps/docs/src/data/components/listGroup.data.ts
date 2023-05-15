import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BListGroup',
      props: [
        {
          prop: 'flush',
          type: 'Booleanish',
        },
        {
          prop: 'horizontal',
          type: 'boolean | Breakpoint',
        },
        {
          prop: 'numbered',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
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
        },
        {
          prop: 'active',
          type: 'Booleanish',
        },
        {
          prop: 'button',
          type: 'Booleanish',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'href',
          type: 'string',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'target',
          type: 'LinkTarget',
        },
        {
          prop: 'to',
          type: 'RouteLocationRaw',
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
          name: 'default',
          scope: [],
        },
      ],
    },
  ],
}
