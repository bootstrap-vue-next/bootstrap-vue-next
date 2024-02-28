import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BLink',
      props: [
        {
          prop: 'active',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'activeClass',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'append',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'event',
          type: 'string | any[]',
          default: 'click',
        },
        {
          prop: 'href',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'rel',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'replace',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'routerComponentName',
          type: 'string',
          default: 'router-link',
        },
        {
          prop: 'routerTag',
          type: 'string',
          default: 'a',
        },
        {
          prop: 'target',
          type: 'LinkTarget',
          default: '_self',
        },
        {
          prop: 'to',
          type: 'RouteLocationRaw',
          default: undefined,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'opacity',
          type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
          default: undefined,
        },
        {
          prop: 'opacityHover',
          type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
          default: undefined,
        },
        {
          prop: 'underlineVariant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'underlineOffset',
          type: "1 | 2 | 3 | '1' | '2' | '3'",
          default: undefined,
        },
        {
          prop: 'underlineOffsetHover',
          type: "1 | 2 | 3 | '1' | '2' | '3'",
          default: undefined,
        },
        {
          prop: 'underlineOpacity',
          type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
          default: undefined,
        },
        {
          prop: 'underlineOpacityHover',
          type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
          default: undefined,
        },
        {
          prop: 'icon',
          type: 'boolean',
          default: false,
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
