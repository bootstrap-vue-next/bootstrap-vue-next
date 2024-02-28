import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormSelect',
      props: [
        {
          prop: 'ariaInvalid',
          type: 'AriaInvalid',
          default: undefined,
        },
        {
          prop: 'autofocus',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'disabledField',
          type: 'string',
          default: 'disabled',
        },
        {
          prop: 'form',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'htmlField',
          type: 'string',
          default: 'html',
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'labelField',
          type: 'string',
          default: 'label',
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
          prop: 'options',
          type: 'unknown[] | Record<string, unknown>',
          default: '() => []',
        },
        {
          prop: 'optionsField',
          type: 'string',
          default: 'options',
        },
        {
          prop: 'plain',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'required',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'selectSize',
          type: 'number | string',
          default: 0,
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
        },
        {
          prop: 'state',
          type: 'Booleanish | null',
          default: undefined,
        },
        {
          prop: 'textField',
          type: 'string',
          default: 'text',
        },
        {
          prop: 'valueField',
          type: 'string',
          default: 'value',
        },
        {
          prop: 'modelValue',
          type: 'string | unknown[] | Record<string, unknown> | number | null',
          default: '',
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'input',
              description: '',
              type: 'unknown',
            },
          ],
          description: '',
          event: 'input',
        },
        {
          args: [
            {
              arg: 'update:modelValue',
              description: '',
              type: 'unknown',
            },
          ],
          description: '',
          event: 'update:modelValue',
        },
        {
          args: [
            {
              arg: 'change',
              description: '',
              type: 'unknown',
            },
          ],
          description: '',
          event: 'change',
        },
      ],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
        {
          description: '',
          name: 'first',
          scope: [],
        },
      ],
    },
    {
      component: 'BFormSelectOption',
      emits: [],
      props: [
        {
          prop: 'value',
          type: 'any',
          default: undefined,
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
          default: false,
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
    {
      component: 'BFormSelectOptionGroup',
      props: [
        {
          prop: 'label',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'disabledField',
          type: 'string',
          default: 'disabled',
        },
        {
          prop: 'htmlField',
          type: 'string',
          default: 'html',
        },
        {
          prop: 'options',
          type: 'unknown[] | Record<string, unknown>',
          default: '() => []',
        },
        {
          prop: 'textField',
          type: 'string',
          default: 'text',
        },
        {
          prop: 'valueField',
          type: 'string',
          default: 'value',
        },
      ],
      emits: [],
      slots: [
        {
          description: '',
          name: 'first',
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
