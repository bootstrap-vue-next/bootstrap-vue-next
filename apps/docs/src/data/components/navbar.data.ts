import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNavbar',
      props: {
        '': {
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
          container: {
            type: "'fluid' | boolean",
            default: 'fluid',
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
          tag: {
            type: 'string',
            default: 'div',
          },
        },
      },
      emits: [],
      slots: [],
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
