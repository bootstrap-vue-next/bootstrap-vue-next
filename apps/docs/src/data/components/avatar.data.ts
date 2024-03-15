import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAvatar',
      props: [
        {
          prop: 'alt',
          type: 'string',
          default: 'avatar',
        },
        {
          prop: 'badge',
          type: 'boolean | string',
          default: false,
        },
        {
          prop: 'badgeLeft',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'badgeOffset',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'badgeTop',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'badgeVariant',
          type: 'ColorVariant | null',
          default: 'primary',
        },
        {
          prop: 'button',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'buttonType',
          type: 'ButtonType',
          default: 'button',
        },
        {
          prop: 'icon',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'rounded',
          type: 'boolean | string',
          default: 'circle',
        },
        {
          prop: 'size',
          type: 'Size | string',
          default: undefined,
        },
        {
          prop: 'square',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'src',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant | null',
          default: null,
        },
      ],
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
      props: [
        {
          prop: 'overlap',
          type: 'number | string',
          default: 0.3,
        },
        {
          prop: 'rounded',
          type: 'boolean | string',
          default: false,
        },
        {
          prop: 'size',
          type: 'Size | string',
          default: undefined,
        },
        {
          prop: 'square',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
        },
      ],
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
