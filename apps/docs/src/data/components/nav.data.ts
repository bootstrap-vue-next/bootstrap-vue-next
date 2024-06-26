import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNav',
      props: {
        '': {
          align: {
            type: 'AlignmentJustifyContent',
            default: undefined,
          },
          cardHeader: {
            type: 'boolean',
            default: false,
          },
          fill: {
            type: 'boolean',
            default: false,
          },
          justified: {
            type: 'boolean',
            default: false,
          },
          pills: {
            type: 'boolean',
            default: false,
          },
          small: {
            type: 'boolean',
            default: false,
          },
          tabs: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'ul',
          },
          vertical: {
            type: 'boolean',
            default: false,
          },
          underline: {
            type: 'boolean',
            default: false,
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
      component: 'BNavForm',
      props: {
        '': {
          role: {
            type: 'string',
            default: undefined,
          },
        },
      },
      emits: [
        {
          args: [
            {
              arg: 'submit',
              description: '',
              type: 'Event',
            },
          ],
          description: '',
          event: 'submit',
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
    {
      component: 'BNavItem',
      props: {
        '': {
          linkClass: {
            type: 'ClassValue',
            default: undefined,
          },
          linkAttrs: {
            type: 'Record<string, unknown>',
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
    {
      component: 'BNavItemDropdown',
      props: {
        '': {
          id: {
            type: 'string',
            default: undefined,
          },
          text: {
            type: 'string',
            default: undefined,
          },
          toggleClass: {
            type: 'ClassValue',
            default: undefined,
          },
          size: {
            type: 'Size',
            default: 'md',
          },
          offset: {
            type: 'string',
            default: undefined,
          },
          autoClose: {
            type: "boolean | 'inside' | 'outside'",
            default: undefined,
          },
          splitVariant: {
            type: 'ButtonVariant | null',
            default: undefined,
          },
          noCaret: {
            type: 'boolean',
            default: undefined,
          },
          variant: {
            type: 'ButtonVariant | null',
            default: 'link',
          },
          modelValue: {
            type: 'boolean',
            default: false,
          },
          lazy: {
            type: 'boolean',
            default: undefined,
          },
          strategy: {
            type: 'Strategy',
            default: undefined,
          },
          floatingMiddleware: {
            type: 'Middleware[]',
            default: undefined,
          },
          noFlip: {
            type: 'boolean',
            default: undefined,
          },
          noShift: {
            type: 'boolean',
            default: undefined,
          },
          dropup: {
            type: 'boolean',
            default: undefined,
          },
          dropend: {
            type: 'boolean',
            default: undefined,
          },
          dropstart: {
            type: 'boolean',
            default: undefined,
          },
          center: {
            type: 'boolean',
            default: undefined,
          },
          end: {
            type: 'boolean',
            default: undefined,
          },
          menuClass: {
            type: 'ClassValue',
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
    {
      component: 'BNavText',
      props: {
        '': {
          text: {
            description: '',
            type: 'string',
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
