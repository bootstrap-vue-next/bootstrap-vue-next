import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormTextarea',
      props: [
        {
          prop: 'noResize',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'rows',
          type: 'string | number',
          default: 2,
        },
        {
          prop: 'wrap',
          type: 'string',
          default: 'soft',
        },
      ],
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
