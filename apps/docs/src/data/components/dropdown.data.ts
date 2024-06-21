import type {ComponentReference} from '../../types'

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
          type: 'boolean',
          default: false,
        },
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'isNav',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'dropup',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'dropend',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'dropstart',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'center',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'end',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noFlip',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noShift',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'offset',
          type: 'number | string | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null',
          default: 0,
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
          default: 'hr',
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
          default: undefined,
        },
        {
          prop: 'ariaDescribedby',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'header',
          type: 'string',
          default: 'header',
        },
        {
          prop: 'headerClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'headerTag',
          type: 'string',
          default: 'header',
        },
        {
          prop: 'headerVariant',
          type: 'ColorVariant | null',
          default: undefined,
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
          prop: 'linkClass',
          type: 'ClassValue',
          default: undefined,
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
          default: undefined,
        },
        {
          prop: 'active',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'activeClass',
          type: 'ClassValue',
          default: 'active',
        },
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: undefined,
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
          default: '',
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
