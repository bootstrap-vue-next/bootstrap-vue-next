import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButton',
      props: [
        {
          prop: 'pill',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'pressed',
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
        },
        {
          prop: 'squared',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'button',
        },
        {
          prop: 'type',
          type: 'ButtonType',
          default: 'button',
        },
        {
          prop: 'variant',
          type: 'ButtonVariant | null',
          default: 'secondary',
        },
        {
          prop: 'loading',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'loadingFill',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'block',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'loadingText',
          type: 'string',
          default: 'Loading...',
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
          prop: 'ariaLabel',
          type: 'string',
          default: 'Close',
        },
        {
          description: '',
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'type',
          default: 'button',
          type: 'ButtonType',
          description: '',
        },
      ],
      emits: [],
      slots: [],
    },
  ],
}
