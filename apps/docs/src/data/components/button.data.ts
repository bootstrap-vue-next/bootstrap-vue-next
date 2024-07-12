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
          active: {
            type: 'boolean',
            default: undefined,
          },
          activeClass: {
            type: 'string',
            default: undefined,
          },
          disabled: {
            type: 'boolean',
            default: undefined,
          },
          exactActiveClass: {
            type: 'string',
            default: undefined,
          },
          href: {
            type: 'string',
            default: undefined,
          },
          icon: {
            type: 'boolean',
            default: undefined,
          },
          opacity: {
            type: '10 | 25 | 50 | 75 | 100 | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          opacityHover: {
            type: '10 | 25 | 50 | 75 | 100 | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          rel: {
            type: 'string',
            default: undefined,
          },
          replace: {
            type: 'boolean',
            default: undefined,
          },
          routerComponentName: {
            type: 'string',
            default: undefined,
          },
          routerTag: {
            type: 'string',
            default: undefined,
          },
          stretched: {
            type: 'boolean',
            default: false,
          },
          target: {
            type: 'LinkTarget',
            default: undefined,
          },
          to: {
            type: 'RouteLocationRaw',
            default: undefined,
          },
          underlineOffset: {
            type: '1 | 2 | 3 | "1" | "2" | "3"',
            default: undefined,
          },
          underlineOffsetHover: {
            type: '1 | 2 | 3 | "1" | "2" | "3"',
            default: undefined,
          },
          underlineOpacity: {
            type: '0 | 10 | 25 | 50 | 75 | 100 | "0" | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          underlineOpacityHover: {
            type: '0 | 10 | 25 | 50 | 75 | 100 | "0" | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          underlineVariant: {
            type: 'ColorVariant | null',
            default: undefined,
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
        {
          name: 'loading-spinner',
          description: 'The content to replace the default loading spinner',
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
            default: false,
          },
          type: {
            default: 'button',
            type: 'ButtonType',
            description: '',
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
      ],
      slots: [],
    },
  ],
}
