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
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'fill',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'justified',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'pills',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'small',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'tabs',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'ul',
        },
        {
          prop: 'vertical',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'underline',
          type: 'Booleanish',
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
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'variant',
          type: 'ButtonVariant | null',
          default: 'link',
        },
        {
          prop: 'modelValue',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
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
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'noShift',
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'dropup',
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'dropend',
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'dropstart',
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'center',
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'end',
          type: 'Booleanish',
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
