import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BOffcanvas',
      props: [
        {
          prop: 'dismissLabel',
          type: 'string',
        },
        {
          prop: 'modelValue',
          type: 'Booleanish',
        },
        {
          prop: 'bodyScrolling',
          type: 'Booleanish',
        },
        {
          prop: 'backdrop',
          type: 'Booleanish',
        },
        {
          prop: 'placement',
          type: 'string',
        },
        {
          prop: 'title',
          type: 'string',
        },
      ],
      emits: [
        {
          event: 'update:modelValue',
          args: [
            {
              arg: 'update:modelValue',
              description: '',
              type: 'boolean',
            },
          ],
        },
        {
          args: [],
          description: '',
          event: 'show',
        },
        {
          args: [],
          description: '',
          event: 'shown',
        },
        {
          args: [],
          description: '',
          event: 'hide',
        },
        {
          args: [],
          description: '',
          event: 'hidden',
        },
      ],
      slots: [
        {
          description: '',
          name: 'title',
          scope: [],
        },
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
  ],
}
