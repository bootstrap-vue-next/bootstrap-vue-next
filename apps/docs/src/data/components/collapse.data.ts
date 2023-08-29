import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCollapse',
      props: [
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'modelValue',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'toggle',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'horizontal',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'visible',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'isNav',
          type: 'Booleanish',
          default: false,
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'update:modelValue',
              description: '',
              type: 'boolean',
            },
          ],
          description: '',
          event: 'update:modelValue',
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
          name: 'default',
          scope: [],
        },
      ],
    },
  ],
}
