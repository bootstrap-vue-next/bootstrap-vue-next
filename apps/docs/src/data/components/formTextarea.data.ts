import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormTextarea',
      props: {
        '': {
          noResize: {
            type: 'boolean',
            default: false,
          },
          rows: {
            type: 'string | number',
            default: 2,
          },
          wrap: {
            type: 'string',
            default: 'soft',
          },
        },
      },
      emits: [
        {
          event: 'update:modelValue',
          args: [],
          description: '',
        },
        {
          event: 'change',
          args: [
            {
              arg: 'change',
              description: '',
              type: 'Event',
            },
          ],
          description: '',
        },
        {
          event: 'blur',
          args: [
            {
              arg: 'blur',
              description: '',
              type: 'FocusEvent',
            },
          ],
          description: '',
        },
        {
          event: 'input',
          description: '',
          args: [
            {
              arg: 'input',
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
