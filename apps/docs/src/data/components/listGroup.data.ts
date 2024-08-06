import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BListGroup',
      props: {
        '': {
          flush: {
            type: 'boolean',
            default: false,
          },
          horizontal: {
            type: 'boolean | Breakpoint',
            default: false,
          },
          numbered: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
        },
      },
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
      props: {
        '': {
          action: {
            type: 'boolean',
            default: false,
          },
          active: {
            type: 'boolean',
            default: false,
          },
          activeClass: {
            type: 'string',
            default: undefined,
          },
          button: {
            type: 'boolean',
            default: false,
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
            type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          opacityHover: {
            type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
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
          tag: {
            type: 'string',
            default: 'div',
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
            type: "1 | 2 | 3 | '1' | '2' | '3'",
            default: undefined,
          },
          underlineOffsetHover: {
            type: "1 | 2 | 3 | '1' | '2' | '3'",
            default: undefined,
          },
          underlineOpacity: {
            type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          underlineOpacityHover: {
            type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          underlineVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
        },
      },
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
