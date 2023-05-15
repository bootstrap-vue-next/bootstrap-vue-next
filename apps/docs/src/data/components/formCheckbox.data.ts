import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormCheckbox',
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
          prop: 'indeterminate',
          type: 'Booleanish',
        },
        {
          prop: 'name',
          type: 'string',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'autofocus',
          type: 'Booleanish',
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
          prop: 'size',
          type: 'Size',
        },
        {
          prop: 'state',
          type: 'Booleanish',
        },
        {
          prop: 'uncheckedValue',
          type: 'unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number',
        },
        {
          prop: 'value',
          type: 'unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number',
        },
        {
          prop: 'modelValue',
          type: 'unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number',
        },
      ],
      emits: [
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
          event: 'input',
          description: '',
          args: [
            {
              arg: 'input',
              description: '',
              type: 'unknown',
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
              type: 'unknown',
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
      component: 'BFormCheckboxGroup',
      props: [
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'form',
          type: 'string',
        },
        {
          prop: 'modelValue',
          type: 'string | number | Record<string, unknown>[]',
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
          prop: 'name',
          type: 'string',
        },
        {
          prop: 'options',
          type: 'string | Record<string, unknown>[]',
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
          prop: 'size',
          type: 'Size',
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
          prop: 'switches',
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
          event: 'input',
          description: '',
          args: [
            {
              arg: 'input',
              description: '',
              type: 'string | number | Record<string, unknown>[]',
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
              type: 'string | number | Record<string, unknown>[]',
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
              type: 'string | number | Record<string, unknown>[]',
            },
          ],
        },
      ],
      slots: [],
    },
  ],
}
