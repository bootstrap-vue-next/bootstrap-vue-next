import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButton',
      props: [
        {
          prop: 'pill',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'pressed',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
        },
        {
          prop: 'squared',
          type: 'boolean',
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
          type: 'boolean',
          default: false,
        },
        {
          prop: 'loadingFill',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'block',
          type: 'boolean',
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
          type: 'boolean',
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
