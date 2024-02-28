import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BForm',
      props: [
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'floating',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'novalidate',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'validated',
          type: 'Booleanish',
          default: false,
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
      component: 'BFormFloatingLabel',
      props: [
        {
          prop: 'labelFor',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'label',
          type: 'string',
          default: undefined,
        },
        {
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
        {
          description: '',
          name: 'label',
          scope: [],
        },
      ],
    },
    {
      component: 'BFormInvalidFeedback',
      props: [
        {
          prop: 'ariaLive',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'forceShow',
          type: 'Booleanish',
          default: false,
        },
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
          prop: 'role',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'state',
          type: 'Booleanish',
          default: null,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'tooltip',
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
      component: 'BFormRow',
      props: [
        {
          description: '',
          prop: 'tag',
          type: 'string',
          default: 'div',
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
      component: 'BFormText',
      props: [
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'inline',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'small',
        },
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant | null',
          default: 'body-secondary',
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
      component: 'BFormValidFeedback',
      props: [
        {
          prop: 'ariaLive',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'forceShow',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'role',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'state',
          type: 'Booleanish',
          default: null,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'tooltip',
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
  ],
}
