import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BDropdown',
      props: {
        '': {
          ariaLabel: {
            type: 'string',
            default: undefined,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          menuClass: {
            type: 'ClassValue',
            default: undefined,
          },
          size: {
            type: 'Size',
            default: 'md',
          },
          splitClass: {
            type: 'ClassValue',
            default: undefined,
          },
          splitVariant: {
            type: 'ButtonVariant | null',
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
          autoClose: {
            type: "boolean | 'inside' | 'outside'",
            default: true,
          },
          block: {
            type: 'boolean',
            default: false,
          },
          disabled: {
            type: 'boolean',
            default: false,
          },
          isNav: {
            type: 'boolean',
            default: false,
          },
          dropup: {
            type: 'boolean',
            default: false,
          },
          dropend: {
            type: 'boolean',
            default: false,
          },
          dropstart: {
            type: 'boolean',
            default: false,
          },
          center: {
            type: 'boolean',
            default: false,
          },
          end: {
            type: 'boolean',
            default: false,
          },
          noFlip: {
            type: 'boolean',
            default: false,
          },
          noShift: {
            type: 'boolean',
            default: false,
          },
          offset: {
            type: 'number | string | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null',
            default: 0,
          },
        },
      },
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
      props: {
        '': {
          tag: {
            description: '',
            type: 'string',
            default: 'hr',
          },
        },
      },
    },
    {
      component: 'BDropdownForm',
      emits: [],
      props: {},
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
      props: {
        '': {
          id: {
            type: 'string',
            default: undefined,
          },
          ariaDescribedby: {
            type: 'string',
            default: undefined,
          },
          header: {
            type: 'string',
            default: 'header',
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
          },
          headerTag: {
            type: 'string',
            default: 'header',
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
        },
      },
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
      props: {},
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
      props: {
        '': {
          linkClass: {
            type: 'ClassValue',
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
      props: {
        '': {
          buttonClass: {
            type: 'ClassValue',
            default: undefined,
          },
          active: {
            type: 'boolean',
            default: false,
          },
          activeClass: {
            type: 'ClassValue',
            default: 'active',
          },
          disabled: {
            type: 'boolean',
            default: false,
          },
          variant: {
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
    {
      component: 'BDropdownText',
      emits: [],
      props: {
        '': {
          text: {
            description: '',
            type: 'string',
            default: '',
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
