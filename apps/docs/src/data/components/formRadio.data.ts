import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormRadio',
      props: [
        {
          prop: 'ariaLabel',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'ariaLabelledby',
          type: 'string',
          default: undefined,
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
          prop: 'name',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'size',
          type: 'Size',
          default: undefined,
        },
        {
          prop: 'autofocus',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'modelValue',
          type: 'boolean | string | unknown[] | Record<string, unknown> | number | null',
          default: undefined,
        },
        {
          prop: 'plain',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'button',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'buttonGroup',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'buttonVariant',
          type: 'ButtonVariant | null',
          default: undefined,
        },
        {
          prop: 'inline',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'required',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'state',
          type: 'boolean | null',
          default: undefined,
        },
        {
          prop: 'value',
          type: 'string | boolean | Record<string, unknown> | number',
          default: true,
        },
      ],
      emits: [
        {
          event: 'input',
          description: '',
          args: [
            {
              arg: 'input',
              description: '',
              type: 'boolean | string | unknown[] | Record<string, unknown> | number',
            },
          ],
        },
        {
          event: 'change',
          description: '',
          args: [
            {
              arg: 'change',
              description: '',
              type: 'boolean | string | unknown[] | Record<string, unknown> | number',
            },
          ],
        },
        {
          event: 'update:modelValue',
          description: '',
          args: [
            {
              arg: 'update:modelValue',
              description: '',
              type: 'boolean | string | unknown[] | Record<string, unknown> | number',
            },
          ],
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
      component: 'BFormRadioGroup',
      props: [
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
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
          prop: 'name',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'modelValue',
          type: 'string | boolean | unknown[] | Record<string, unknown> | number | null',
          default: undefined,
        },
        {
          prop: 'ariaInvalid',
          type: 'AriaInvalid',
          default: undefined,
        },
        {
          prop: 'autofocus',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'buttonVariant',
          type: 'ButtonVariant | null',
          default: 'secondary',
        },
        {
          prop: 'buttons',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
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
          type: '(string | number | Record<string, unknown>)[]',
          default: '() => []',
        },
        {
          prop: 'plain',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'required',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'stacked',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'state',
          type: 'boolean | null',
          default: undefined,
        },
        {
          prop: 'textField',
          type: 'string',
          default: 'text',
        },
        {
          prop: 'validated',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'valueField',
          type: 'string',
          default: 'value',
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
      slots: [],
    },
  ],
}
