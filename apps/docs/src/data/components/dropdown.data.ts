import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BDropdown',
      props: [
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'menuClass',
          type: 'ClassValue',
        },
        {
          prop: 'size',
          type: 'Size',
        },
        {
          prop: 'splitClass',
          type: 'ClassValue',
        },
        {
          prop: 'splitVariant',
          type: 'ButtonVariant',
        },
        {
          prop: 'text',
          type: 'string',
        },
        {
          prop: 'toggleClass',
          type: 'ClassValue',
        },
        {
          prop: 'autoClose',
          type: "boolean | 'inside' | 'outside'",
        },
        {
          prop: 'block',
          type: 'Booleanish',
        },
        {
          prop: 'boundary',
          type: 'FloatingUI.Boundary | FloatingUI.RootBoundary',
        },
        {
          prop: 'dark',
          type: 'Booleanish',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'isNav',
          type: 'Booleanish',
        },
        {
          prop: 'dropup',
          type: 'Booleanish',
        },
        {
          prop: 'dropright',
          type: 'Booleanish',
        },
        {
          prop: 'dropleft',
          type: 'Booleanish',
        },
        {
          prop: 'noFlip',
          type: 'Booleanish',
        },
        {
          prop: 'offset',
          type: 'number | string',
        },
        {
          prop: 'popperOpts',
          type: 'Record<string, unknown>',
        },
        {
          prop: 'right',
          type: 'Booleanish',
        },
        {
          prop: 'role',
          type: 'string',
        },
        {
          prop: 'split',
          type: 'Booleanish',
        },
        {
          prop: 'splitButtonType',
          type: 'ButtonType',
        },
        {
          prop: 'splitHref',
          type: 'string',
        },
        {
          prop: 'noCaret',
          type: 'Booleanish',
        },
        {
          prop: 'toggleText',
          type: 'string',
        },
        {
          prop: 'variant',
          type: 'ButtonVariant',
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
