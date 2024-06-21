import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNavbar',
      props: [
        {
          prop: 'fixed',
          type: "'top' | 'bottom'",
          default: undefined,
        },
        {
          prop: 'print',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'sticky',
          type: "'top' | 'bottom'",
          default: undefined,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'nav',
        },
        {
          prop: 'toggleable',
          type: 'boolean | Breakpoint',
          default: false,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'container',
          type: "'fluid' | boolean",
          default: 'fluid',
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
      component: 'BNavbarBrand',
      props: [
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
      ],
      emits: [],
      slots: [],
    },
    {
      component: 'BNavbarNav',
      props: [
        {
          prop: 'align',
          type: 'AlignmentJustifyContent',
          default: undefined,
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
          prop: 'small',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'ul',
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
      component: 'BNavbarToggle',
      props: [
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'label',
          type: 'string',
          default: 'Toggle navigation',
        },
        {
          prop: 'target',
          type: 'string | string[]',
          default: undefined,
        },
      ],
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
