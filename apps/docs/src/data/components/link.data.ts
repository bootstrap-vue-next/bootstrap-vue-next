import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BLink',
      props: [
        {
          prop: 'active',
          type: 'Booleanish',
        },
        {
          prop: 'activeClass',
          type: 'string',
        },
        {
          prop: 'append',
          type: 'Booleanish',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'event',
          type: 'string | unknown[]',
        },
        {
          prop: 'exact',
          type: 'Booleanish',
        },
        {
          prop: 'exactActiveClass',
          type: 'string',
        },
        {
          prop: 'rel',
          type: 'string',
        },
        {
          prop: 'replace',
          type: 'Booleanish',
        },
        {
          prop: 'routerComponentName',
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
          prop: 'href',
          description:
            'define an external link. Note if href and to are passed, `:to will be prioritzed ',
          type: 'String',
        },
        {
          prop: 'routerTag',
          description:
            'Component to be used  as the router link. This is the component that will be assigned the `href`',
          type: 'String',
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'click',
              description: '',
              type: 'MouseEvent',
            },
          ],
          description: '',
          event: 'click',
        },
      ],
      slots: [
        {
          name: 'default',
          description:
            'If Vue-Router has be employed and the `routerComponentName` is `RouterLink` this slot scope is used',
          scope: [
            {
              prop: 'href',
              type: 'String',
              description: 'Will be `true` if this button is disabled (non-clickable)',
            },
            {
              prop: 'navigate',
              type: 'Number',
              description: 'Page number (indexed from `0` to `numberOfPages - 1`)',
            },
            {
              prop: 'isActive',
              type: 'Number',
              description: 'Page number (from `1` to `numberOfPages`)',
            },
            {
              prop: 'isExactActive',
              type: 'Number',
              description: 'Page number (from `1` to `numberOfPages`)',
            },
          ],
        },
      ],
    },
  ],
}
