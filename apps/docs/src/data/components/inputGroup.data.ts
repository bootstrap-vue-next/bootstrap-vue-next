import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BInputGroup',
      props: [
        {
          prop: 'append',
          type: 'string',
        },
        {
          prop: 'appendHtml',
          type: 'string',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'prepend',
          type: 'string',
        },
        {
          prop: 'prependHtml',
          type: 'string',
        },
        {
          prop: 'size',
          type: 'Size',
        },
        {
          prop: 'tag',
          type: 'string',
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
      component: 'BInputGroupAppend',
      props: [
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'isText',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
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
    {
      component: 'BInputGroupPrepend',
      props: [
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'isText',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
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
    {
      component: 'BInputGroupText',
      props: [
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'text',
          type: 'string',
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
