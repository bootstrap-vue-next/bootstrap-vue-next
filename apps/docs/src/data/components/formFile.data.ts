import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormFile',
      props: [
        {prop: 'accept', type: 'string | string[]', description: '', default: "''"},
        {prop: 'autofocus', type: 'Booleanish', description: '', default: 'false'},
        {
          prop: 'capture',
          type: "Booleanish | 'user' | 'environment'",
          description: '',
          default: 'false',
        },
        {prop: 'directory', type: 'Booleanish', description: '', default: 'false'},
        {prop: 'disabled', type: 'Booleanish', description: '', default: 'false'},
        {prop: 'form', type: 'string', description: '', default: 'undefined'},
        {prop: 'id', type: 'string', description: '', default: 'undefined'},
        {prop: 'multiple', type: 'Booleanish', description: '', default: 'false'},
        {prop: 'name', type: 'string', description: '', default: 'undefined'},
        {prop: 'noDrop', type: 'Booleanish', description: '', default: 'false'},
        {prop: 'noTraverse', type: 'Booleanish', description: '', default: 'false'},
        {prop: 'required', type: 'Booleanish', description: '', default: 'false'},
        {prop: 'size', type: 'Size', description: '', default: 'undefined'},
        {prop: 'state', type: 'Booleanish | null', description: '', default: 'null'},
        {prop: 'modelValue', type: 'File[] | File | null', description: '', default: 'null'},
        {prop: 'label', type: 'string', description: '', default: "''"},
        {prop: 'wrapperClasses', type: 'ClassValue', description: '', default: 'undefined'},
        {prop: 'labelClasses', type: 'ClassValue', description: '', default: 'undefined'},
      ],
      emits: [
        {
          event: 'update:modelValue',
          description: '',
          args: [
            {
              arg: 'value',
              type: 'File | File[] | null',
              description: '',
            },
          ],
        },
        {
          event: 'change',
          description: '',
          args: [
            {
              arg: 'value',
              type: 'Event',
              description: 'The browsers default change event',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'label',
          description: '',
          scope: [],
        },
      ],
    },
  ],
}
