import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButton',
      props: {
        '': {
          pill: {
            type: 'boolean',
            default: false,
          },
          pressed: {
            type: 'boolean',
            default: undefined,
          },
          size: {
            type: 'Size',
            default: 'md',
          },
          squared: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'button',
          },
          type: {
            type: 'ButtonType',
            default: 'button',
          },
          variant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
          },
          loading: {
            type: 'boolean',
            default: false,
          },
          loadingFill: {
            type: 'boolean',
            default: false,
          },
          block: {
            type: 'boolean',
            default: false,
          },
          loadingText: {
            type: 'string',
            default: 'Loading...',
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
      props: {
        '': {
          ariaLabel: {
            description: '',
            type: 'string',
            default: 'Close',
          },
          disabled: {
            description: '',
            type: 'boolean',
          },
          type: {
            default: 'button',
            type: 'ButtonType',
            description: '',
          },
        },
      },
      emits: [],
      slots: [],
    },
  ],
}
