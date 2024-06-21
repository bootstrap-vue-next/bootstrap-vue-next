import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BInputGroup',
      props: [
        {
          prop: 'append',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'appendHtml',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'prepend',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'prependHtml',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
      ],
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
      props: [
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
      ],
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
