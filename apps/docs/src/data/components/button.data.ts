import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButton',
      props: [
        {
          prop: 'active',
          description: '',
          type: 'Booleanish',
        },
        {
          prop: 'disabled',
          description: '',
          type: 'Booleanish',
        },
        {
          prop: 'href',
          description: '',
          type: 'string',
        },
        {
          prop: 'pill',
          description: '',
          type: 'Booleanish',
        },
        {
          prop: 'pressed',
          description: '',
          type: 'Booleanish',
        },
        {
          prop: 'rel',
          description: '',
          type: 'string',
        },
        {
          prop: 'size',
          description: '',
          type: 'Size',
        },
        {
          prop: 'squared',
          description: '',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          description: '',
          type: 'string',
        },
        {
          prop: 'target',
          description: '',
          type: 'LinkTarget',
        },
        {
          prop: 'type',
          description: '',
          type: 'ButtonType',
        },
        {
          prop: 'variant',
          description: '',
          type: 'ButtonVariant',
        },
        {
          prop: 'loading',
          description: '',
          type: 'Booleanish',
        },
        {
          prop: 'loadingMode',
          description: '',
          type: "'fill' | 'inline'",
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
          description: 'On click event',
          event: 'click',
        },
        {
          args: [
            {
              arg: 'update:pressed',
              description: '',
              type: 'boolean',
            },
          ],
          description: '',
          event: 'update:pressed',
        },
      ],
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
        {
          name: 'loading',
          description: 'The content to replace the default loader',
          scope: [],
        },
      ],
    },
    {
      component: 'BCloseButton',
      props: [
        {
          description: '',
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          description: 'Applies class btn-close-white',
          prop: 'white',
          type: 'Booleanish',
        },
        {
          description: '',
          prop: 'ariaLabel',
          type: 'string',
        },
      ],
      emits: [],
      slots: [],
    },
  ],
}
