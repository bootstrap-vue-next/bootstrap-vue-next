import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormFile',
      props: [
        {
          prop: 'accept',
          type: 'string | string[]',
          default: '',
        },
        {
          prop: 'autofocus',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'capture',
          type: "boolean | 'true' | 'false' | '' | 'user' | 'environment'",
          default: false,
        },
        {
          prop: 'directory',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'form',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'multiple',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'name',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'noDrop',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'noTraverse',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'required',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'size',
          type: 'Size',
          default: undefined,
        },
        {
          prop: 'state',
          type: 'Booleanish | null',
          default: undefined,
        },
        {
          prop: 'modelValue',
          type: 'File[] | File | null',
          default: undefined,
        },
        {
          prop: 'label',
          type: 'string',
          default: '',
        },
        {
          prop: 'labelClass',
          type: 'ClassValue',
          default: undefined,
        },
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
