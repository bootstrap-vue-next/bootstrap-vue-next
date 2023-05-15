import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNav',
      props: [
        {
          prop: 'align',
          description: 'Alignment of NavBar',
          type: 'AlignmentJustifyContent',
        },
        {
          prop: 'cardHeader',
          type: 'Booleanish',
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
          prop: 'pills',
          type: 'Booleanish',
        },
        {
          prop: 'small',
          type: 'Booleanish',
        },
        {
          prop: 'tabs',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'vertical',
          type: 'Booleanish',
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
        },
        {
          prop: 'id',
          type: 'string ',
        },
        {
          prop: 'floating',
          type: 'Booleanish',
        },
        {
          prop: 'novalidate',
          type: 'Booleanish',
        },
        {
          prop: 'validated',
          type: 'Booleanish',
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
      props: [],
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
        },
        {
          prop: 'text',
          type: 'string',
        },
        {
          prop: 'size',
          type: 'Size',
        },
        {
          prop: 'offset',
          type: 'string',
        },
        {
          prop: 'autoClose',
          type: "boolean | 'inside' | 'outside'",
        },
        {
          prop: 'dark',
          type: 'boolean',
        },
        {
          prop: 'dropleft',
          type: 'boolean',
        },
        {
          prop: 'dropright',
          type: 'boolean',
        },
        {
          prop: 'dropup',
          type: 'boolean',
        },
        {
          prop: 'right',
          type: 'boolean',
        },
        {
          prop: 'left',
          type: 'boolean | string',
        },
        {
          prop: 'split',
          type: 'boolean',
        },
        {
          prop: 'splitVariant',
          type: 'ButtonVariant',
        },
        {
          prop: 'noCaret',
          type: 'boolean',
        },
        {
          prop: 'variant',
          type: 'ButtonVariant',
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
