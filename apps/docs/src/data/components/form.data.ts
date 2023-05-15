import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BForm',
      props: [
        {
          prop: 'id',
          type: 'string',
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
      component: 'BFormFloatingLabel',
      props: [
        {
          prop: 'labelFor',
          type: 'string',
        },
        {
          prop: 'label',
          type: 'string',
        },
        {
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
        },
        {
          prop: 'forceShow',
          type: 'Booleanish',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'text',
          type: 'string',
        },
        {
          prop: 'role',
          type: 'string',
        },
        {
          prop: 'state',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'tooltip',
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
      component: 'BFormRow',
      props: [
        {
          description: '',
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
      component: 'BFormText',
      props: [
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'inline',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'text',
          type: 'string',
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant',
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
        },
        {
          prop: 'forceShow',
          type: 'Booleanish',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'role',
          type: 'string',
        },
        {
          prop: 'text',
          type: 'string',
        },
        {
          prop: 'state',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'tooltip',
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
  ],
}
