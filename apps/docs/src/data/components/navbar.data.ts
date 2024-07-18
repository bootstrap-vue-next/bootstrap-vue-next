import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNavbar',
      props: {
        '': {
          autoClose: {
            type: 'boolean',
            default: true,
          },
          container: {
            type: "boolean | 'fluid' | Breakpoint",
            default: 'fluid',
          },
          fixed: {
            type: "'top' | 'bottom'",
            default: undefined,
          },
          print: {
            type: 'boolean',
            default: false,
          },
          sticky: {
            type: "'top' | 'bottom'",
            default: undefined,
          },
          tag: {
            type: 'string',
            default: 'nav',
          },
          toggleable: {
            type: 'boolean | Breakpoint',
            default: false,
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
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
      component: 'BNavbarBrand',
      props: {
        '': {
          active: {
            type: 'boolean',
            default: undefined,
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
            type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          underlineOpacityHover: {
            type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
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
          name: 'default',
          description: '',
          scope: [],
        },
      ],
    },
    {
      component: 'BNavbarNav',
      props: {
        '': {
          align: {
            type: 'AlignmentJustifyContent',
            default: undefined,
          },
          fill: {
            type: 'boolean',
            default: false,
          },
          justified: {
            type: 'boolean',
            default: false,
          },
          small: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'ul',
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
      component: 'BNavbarToggle',
      props: {
        '': {
          disabled: {
            type: 'boolean',
            default: false,
          },
          label: {
            type: 'string',
            default: 'Toggle navigation',
          },
          target: {
            type: 'string | string[]',
            default: undefined,
          },
        },
      },
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
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
  ],
}
