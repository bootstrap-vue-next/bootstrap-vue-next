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
          active: {
            type: 'boolean',
            default: false,
          },
          activeClass: {
            type: 'string',
            default: undefined,
          },
          disabled: {
            type: 'boolean',
            default: undefined,
          },
          exactActiveClass: {
            type: 'string',
            default: undefined,
          },
          href: {
            type: 'string',
            default: undefined,
          },
          icon: {
            type: 'boolean',
            default: undefined,
          },
          opacity: {
            type: '10 | 25 | 50 | 75 | 100 | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          opacityHover: {
            type: '10 | 25 | 50 | 75 | 100 | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          rel: {
            type: 'string',
            default: undefined,
          },
          replace: {
            type: 'boolean',
            default: undefined,
          },
          routerComponentName: {
            type: 'string',
            default: undefined,
          },
          stretched: {
            type: 'boolean',
            default: false,
          },
          target: {
            type: 'LinkTarget',
            default: undefined,
          },
          to: {
            type: 'RouteLocationRaw',
            default: undefined,
          },
          underlineOffset: {
            type: '1 | 2 | 3 | "1" | "2" | "3"',
            default: undefined,
          },
          underlineOffsetHover: {
            type: '1 | 2 | 3 | "1" | "2" | "3"',
            default: undefined,
          },
          underlineOpacity: {
            type: '0 | 10 | 25 | 50 | 75 | 100 | "0" | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          underlineOpacityHover: {
            type: '0 | 10 | 25 | 50 | 75 | 100 | "0" | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          underlineVariant: {
            type: 'ColorVariant | null',
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
