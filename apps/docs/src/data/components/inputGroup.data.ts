import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BInputGroup',
      props: {
        '': {
          append: {
            type: 'string',
            default: undefined,
          },
          appendHtml: {
            type: 'string',
            default: undefined,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          prepend: {
            type: 'string',
            default: undefined,
          },
          prependHtml: {
            type: 'string',
            default: undefined,
          },
          size: {
            type: 'Size',
            default: 'md',
          },
          tag: {
            type: 'string',
            default: 'div',
          },
        },
      },
      emits: [],
      slots: [
        {
          description: '',
          name: 'prepend',
          scope: [],
        },
        {
          description: '',
          name: 'default',
          scope: [],
        },
        {
          description: '',
          name: 'append',
          scope: [],
        },
      ],
    },
    {
      component: 'BInputGroupText',
      props: {
        '': {
          tag: {
            type: 'string',
            default: 'div',
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
      ],
    },
  ],
}
