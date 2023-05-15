import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCollapse',
      props: [
        {
          prop: 'accordion',
          type: 'string',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'modelValue',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'toggle',
          type: 'Booleanish',
        },
        {
          prop: 'visible',
          type: 'Booleanish',
        },
        {
          prop: 'isNav',
          type: 'Booleanish',
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
