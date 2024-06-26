import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAvatar',
      props: {
        '': {
          alt: {
            type: 'string',
            default: 'avatar',
          },
          badge: {
            type: 'boolean | string',
            default: false,
          },
          badgeLeft: {
            type: 'boolean',
            default: false,
          },
          badgeOffset: {
            type: 'string',
            default: undefined,
          },
          badgeTop: {
            type: 'boolean',
            default: false,
          },
          badgeVariant: {
            type: 'ColorVariant | null',
            default: 'primary',
          },
          button: {
            type: 'boolean',
            default: false,
          },
          buttonType: {
            type: 'ButtonType',
            default: 'button',
          },
          icon: {
            type: 'string',
            default: undefined,
          },
          rounded: {
            type: 'boolean | string',
            default: 'circle',
          },
          size: {
            type: 'Size | string',
            default: undefined,
          },
          square: {
            type: 'boolean',
            default: false,
          },
          src: {
            type: 'string',
            default: undefined,
          },
          text: {
            type: 'string',
            default: undefined,
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
          },
        },
      },
      emits: [
        {
          event: 'click',
          description: '',
          args: [
            {
              arg: 'click',
              description: 'On click event',
              type: 'MouseEvent',
            },
          ],
        },
        {
          event: 'img-error',
          args: [
            {
              arg: 'img-error',
              description: 'On img-error',
              type: 'Event',
            },
          ],
          description: 'On image error',
        },
      ],
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
        {
          name: 'badge',
          description: '',
          scope: [],
        },
      ],
    },
    {
      component: 'BAvatarGroup',
      props: {
        '': {
          overlap: {
            type: 'number | string',
            default: 0.3,
          },
          rounded: {
            type: 'boolean | string',
            default: false,
          },
          size: {
            type: 'Size | string',
            default: undefined,
          },
          square: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
        },
      },
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
      ],
      emits: [],
    },
  ],
}
