import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormInput',
      props: [
        {
          prop: 'max',
          type: 'string | number',
        },
        {
          prop: 'min',
          type: 'string | number',
        },
        {
          prop: 'step',
          type: 'string | number',
        },
        {
          prop: 'type',
          type: 'InputType',
        },
      ],
      emits: [
        {
          args: [],
          event: 'update:modelValue',
          description: '',
        },
        {
          event: 'change',
          description: '',
          args: [
            {
              arg: 'change',
              description: '',
              type: 'Event',
            },
          ],
        },
        {
          event: 'blur',
          description: '',
          args: [
            {
              arg: 'blur',
              description: '',
              type: 'FocusEvent',
            },
          ],
        },
        {
          event: 'input',
          description: '',
          args: [
            {
              arg: 'change',
              description: '',
              type: 'Event',
            },
          ],
        },
      ],
      slots: [],
    },
  ],
}
