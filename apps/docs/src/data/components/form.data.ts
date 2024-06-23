import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BForm',
      props: {
        '': {
          id: {
            type: 'string',
            default: undefined,
          },
          floating: {
            type: 'boolean',
            default: false,
          },
          novalidate: {
            type: 'boolean',
            default: false,
          },
          validated: {
            type: 'boolean',
            default: false,
          },
        },
      },
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
      props: {
        '': {
          labelFor: {
            type: 'string',
            default: undefined,
          },
          label: {
            type: 'string',
            default: undefined,
          },
          text: {
            type: 'string',
            default: undefined,
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
        {
          description: '',
          name: 'label',
          scope: [],
        },
      ],
    },
    {
      component: 'BFormInvalidFeedback',
      props: {
        '': {
          ariaLive: {
            type: 'string',
            default: undefined,
          },
          forceShow: {
            type: 'boolean',
            default: false,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          text: {
            type: 'string',
            default: undefined,
          },
          role: {
            type: 'string',
            default: undefined,
          },
          state: {
            type: 'boolean',
            default: null,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          tooltip: {
            type: 'boolean',
            default: false,
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
      component: 'BFormRow',
      props: {
        '': {
          tag: {
            description: '',
            type: 'string',
            default: 'div',
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
      component: 'BFormText',
      props: {
        '': {
          id: {
            type: 'string',
            default: undefined,
          },
          inline: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'small',
          },
          text: {
            type: 'string',
            default: undefined,
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: 'body-secondary',
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
      component: 'BFormValidFeedback',
      props: {
        '': {
          ariaLive: {
            type: 'string',
            default: undefined,
          },
          forceShow: {
            type: 'boolean',
            default: false,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          role: {
            type: 'string',
            default: undefined,
          },
          text: {
            type: 'string',
            default: undefined,
          },
          state: {
            type: 'boolean',
            default: null,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          tooltip: {
            type: 'boolean',
            default: false,
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
  ],
}
