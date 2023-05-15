import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNavbar',
      props: [
        {
          prop: 'fixed',
          type: "'top' | 'bottom'",
        },
        {
          prop: 'print',
          type: 'Booleanish',
        },
        {
          prop: 'sticky',
          type: "'top' | 'bottom'",
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'toggleable',
          type: "boolean | 'sm' | 'md' | 'lg' | 'xl'",
        },
        {
          prop: 'dark',
          type: 'Booleanish',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
        },
        {
          prop: 'container',
          type: "'fluid' | boolean",
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
          description: '',
          prop: 'tag',
          type: 'string',
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
        },
        {
          prop: 'fill',
          type: 'Booleanish',
        },
        {
          prop: 'justified',
          type: 'Booleanish',
        },
        {
          prop: 'small',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
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
          type: 'Booleanish',
        },
        {
          prop: 'label',
          type: 'string',
        },
        {
          prop: 'target',
          type: 'string | string[]',
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
