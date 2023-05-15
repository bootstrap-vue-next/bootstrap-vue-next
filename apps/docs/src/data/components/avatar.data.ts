import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAvatar',
      props: [
        {
          prop: 'alt',
          type: 'string',
        },
        {
          prop: 'ariaLabel',
          type: 'string',
        },
        {
          prop: 'badge',
          type: 'boolean | string',
        },
        {
          prop: 'badgeLeft',
          type: 'Booleanish',
        },
        {
          prop: 'badgeOffset',
          type: 'string',
        },
        {
          prop: 'badgeTop',
          type: 'Booleanish',
        },
        {
          prop: 'badgeVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'button',
          type: 'Booleanish',
        },
        {
          prop: 'buttonType',
          type: 'string',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'icon',
          type: 'string',
        },
        {
          prop: 'rounded',
          type: 'boolean | string',
        },
        {
          prop: 'size',
          type: "'sm' | 'md' | 'lg' | string",
        },
        {
          prop: 'square',
          type: 'Booleanish',
        },
        {
          prop: 'src',
          type: 'string',
        },
        {
          prop: 'text',
          type: 'string',
        },
        {
          prop: 'textVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
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
        },
        {
          prop: 'rounded',
          type: 'boolean | string',
        },
        {
          prop: 'size',
          type: "'sm' | 'md' | 'lg' | string",
        },
        {
          prop: 'square',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
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
