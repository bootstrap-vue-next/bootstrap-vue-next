import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormInput',
      props: {
        '': {
          max: {
            type: 'string | number',
            default: undefined,
          },
          min: {
            type: 'string | number',
            default: undefined,
          },
          step: {
            type: 'string | number',
            default: undefined,
          },
          type: {
            type: 'InputType',
            default: 'text',
          },
        },
      },
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
