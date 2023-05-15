import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormRadio',
      props: [
        {
          prop: 'ariaLabel',
          type: 'string',
        },
        {
          prop: 'ariaLabelledBy',
          type: 'string',
        },
        {
          prop: 'form',
          type: 'string',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'name',
          type: 'string',
        },
        {
          prop: 'size',
          type: 'Size',
        },
        {
          prop: 'autofocus',
          type: 'Booleanish',
        },
        {
          prop: 'modelValue',
          type: 'boolean | string | unknown[] | Record<string, unknown> | number',
        },
        {
          prop: 'plain',
          type: 'Booleanish',
        },
        {
          prop: 'button',
          type: 'Booleanish',
        },
        {
          prop: 'switch',
          type: 'Booleanish',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'buttonVariant',
          type: 'ButtonVariant',
        },
        {
          prop: 'inline',
          type: 'Booleanish',
        },
        {
          prop: 'required',
          type: 'Booleanish',
        },
        {
          prop: 'state',
          type: 'Booleanish',
        },
        {
          prop: 'value',
          type: 'string | boolean | Record<string, unknown> | number',
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
        },
        {
          prop: 'form',
          type: 'string',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'name',
          type: 'string',
        },
        {
          prop: 'modelValue',
          type: 'string | boolean | unknown[] | Record<string, unknown> | number',
        },
        {
          prop: 'ariaInvalid',
          type: 'AriaInvalid',
        },
        {
          prop: 'autofocus',
          type: 'Booleanish',
        },
        {
          prop: 'buttonVariant',
          type: 'ButtonVariant',
        },
        {
          prop: 'buttons',
          type: 'Booleanish',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'disabledField',
          type: 'string',
        },
        {
          prop: 'htmlField',
          type: 'string',
        },
        {
          prop: 'options',
          type: 'unknown[]',
        },
        {
          prop: 'plain',
          type: 'Booleanish',
        },
        {
          prop: 'required',
          type: 'Booleanish',
        },
        {
          prop: 'stacked',
          type: 'Booleanish',
        },
        {
          prop: 'state',
          type: 'Booleanish',
        },
        {
          prop: 'textField',
          type: 'string',
        },
        {
          prop: 'validated',
          type: 'Booleanish',
        },
        {
          prop: 'valueField',
          type: 'string',
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
