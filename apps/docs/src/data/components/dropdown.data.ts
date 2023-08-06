import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BDropdown',
      props: [
        {
          prop: 'ariaLabel',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'menuClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
        },
        {
          prop: 'splitClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'splitVariant',
          type: 'ButtonVariant | null',
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
          prop: 'autoClose',
          type: "boolean | 'inside' | 'outside'",
          default: true,
        },
        {
          prop: 'block',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'isNav',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'dropup',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'dropend',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'dropstart',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'center',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'end',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'noFlip',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'noShift',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'offset',
          type: 'number | string | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null}',
          default: 0,
        },
        {
          prop: 'role',
          type: 'string',
          default: 'menu',
        },
        {
          prop: 'split',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'splitButtonType',
          type: 'ButtonType',
          default: 'button',
        },
        {
          prop: 'splitHref',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'splitDisabled',
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'noCaret',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'toggleText',
          type: 'string',
          default: 'Toggle dropdown',
        },
        {
          prop: 'variant',
          type: 'ButtonVariant | null',
          default: 'secondary',
        },
        {
          prop: 'modelValue',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'strategy',
          type: 'Strategy',
          default: 'absolute',
        },
        {
          prop: 'floatingMiddleware',
          type: 'Middleware[]',
          default: undefined,
        },
        {
          prop: 'splitTo',
          type: 'RouteLocationRaw',
          default: undefined,
        },
        {
          prop: 'boundary',
          type: 'Boundary | RootBoundary',
          default: 'clippingAncestors',
        },
      ],
      emits: [
        {
          args: [],
          event: 'show',
          description: '',
        },
        {
          args: [],
          event: 'shown',
          description: '',
        },
        {
          args: [],
          event: 'hide',
          description: '',
        },
        {
          args: [],
          event: 'hidden',
          description: '',
        },
        {
          event: 'click',
          description: '',
          args: [
            {
              arg: 'click',
              description: '',
              type: 'MouseEvent',
            },
          ],
        },
        {
          args: [],
          event: 'toggle',
          description: '',
        },
      ],
      slots: [
        {
          description: '',
          scope: [],
          name: 'button-content',
        },
        {
          description: '',
          scope: [],
          name: 'toggle-text',
        },
        {
          scope: [],
          description: '',
          name: 'default',
        },
      ],
    },
    {
      component: 'BDropdownDivider',
      emits: [],
      slots: [],
      props: [
        {
          description: '',
          prop: 'tag',
          type: 'string',
        },
      ],
    },
    {
      component: 'BDropdownForm',
      emits: [],
      props: [],
      slots: [
        {
          scope: [],
          description: '',
          name: 'default',
        },
      ],
    },
    {
      component: 'BDropdownGroup',
      emits: [],
      props: [
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'ariaDescribedby',
          type: 'string',
        },
        {
          prop: 'header',
          type: 'string',
        },
        {
          prop: 'headerClass',
          type: 'ClassValue',
        },
        {
          prop: 'headerTag',
          type: 'string',
        },
        {
          prop: 'headerVariant',
          type: 'ColorVariant',
        },
      ],
      slots: [
        {
          description: '',
          scope: [],
          name: 'default',
        },
        {
          scope: [],
          description: '',
          name: 'header',
        },
      ],
    },
    {
      component: 'BDropdownHeader',
      emits: [],
      props: [],
      slots: [
        {
          scope: [],
          description: '',
          name: 'default',
        },
      ],
    },
    {
      component: 'BDropdownItem',
      emits: [
        {
          event: 'click',
          args: [
            {
              arg: 'click',
              description: '',
              type: 'MouseEvent',
            },
          ],
          description: '',
        },
      ],
      props: [
        {
          prop: 'href',
          type: 'string',
        },
        {
          prop: 'linkClass',
          type: 'ClassValue',
        },
        {
          prop: 'active',
          type: 'Booleanish',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'rel',
          type: 'string',
        },
        {
          prop: 'target',
          type: 'LinkTarget',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
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
      component: 'BDropdownItemButton',
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
      props: [
        {
          prop: 'buttonClass',
          type: 'ClassValue',
        },
        {
          prop: 'active',
          type: 'Booleanish',
        },
        {
          prop: 'activeClass',
          type: 'string',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
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
      component: 'BDropdownText',
      emits: [],
      props: [
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
