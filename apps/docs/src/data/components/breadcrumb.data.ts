import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BBreadcrumb',
      props: {
        '': {
          items: {
            description: '',
            type: 'BreadcrumbItemRaw[]',
            default: undefined,
          },
        },
      },
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
      props: {
        '': {
          ariaCurrent: {
            type: 'string',
            default: 'location',
          },
          text: {
            type: 'string',
            default: undefined,
          },
        },
      },
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
