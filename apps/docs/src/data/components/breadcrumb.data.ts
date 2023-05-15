import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BBreadcrumb',
      props: [
        {
          prop: 'items',
          description: '',
          type: 'BreadcrumbItem[]',
        },
      ],
      emits: [],
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
        {
          name: 'append',
          description: '',
          scope: [],
        },
        {
          name: 'prepend',
          description: '',
          scope: [],
        },
      ],
    },
    {
      component: 'BBreadcrumbItem',
      emits: [
        {
          event: 'click',
          args: [
            {
              type: 'MouseEvent',
              arg: 'click',
              description: 'On click',
            },
          ],
        },
      ],
      props: [
        {
          description: '',
          prop: 'active',
          type: 'Booleanish',
        },
        {
          description: '',
          prop: 'ariaCurrent',
          type: 'string',
        },
        {
          description: '',
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          description: '',
          prop: 'text',
          type: 'string',
        },
      ],
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
