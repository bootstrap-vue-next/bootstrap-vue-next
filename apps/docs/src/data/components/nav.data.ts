import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNav',
      props: [
        {
          prop: 'align',
          type: 'AlignmentJustifyContent',
          default: undefined,
        },
        {
          prop: 'cardHeader',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'fill',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'justified',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'pills',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'small',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'tabs',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'ul',
        },
        {
          prop: 'vertical',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'underline',
          type: 'boolean',
          default: false,
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
      component: 'BNavForm',
      props: [
        {
          prop: 'role',
          type: 'string',
          default: undefined,
        },
      ],
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
      props: [
        {
          prop: 'linkClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'linkAttrs',
          type: 'Record<string, unknown>',
          default: undefined,
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
      component: 'BNavItemDropdown',
      props: [
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'toggleClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
        },
        {
          prop: 'offset',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'autoClose',
          type: "boolean | 'inside' | 'outside'",
          default: undefined,
        },
        {
          prop: 'splitVariant',
          type: 'ButtonVariant | null',
          default: undefined,
        },
        {
          prop: 'noCaret',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'variant',
          type: 'ButtonVariant | null',
          default: 'link',
        },
        {
          prop: 'modelValue',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'lazy',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'strategy',
          type: 'Strategy',
          default: undefined,
        },
        {
          prop: 'floatingMiddleware',
          type: 'Middleware[]',
          default: undefined,
        },
        {
          prop: 'noFlip',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'noShift',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'dropup',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'dropend',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'dropstart',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'center',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'end',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'menuClass',
          type: 'ClassValue',
          default: undefined,
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
      component: 'BNavText',
      props: [
        {
          description: '',
          prop: 'text',
          type: 'string',
          default: undefined,
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
