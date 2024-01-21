import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormCheckbox',
      props: [
        {
          prop: 'ariaLabel',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'ariaLabelledBy',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'form',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'indeterminate',
          type: 'Booleanish',
          default: false,
          description:
            'Set to true to show the checkbox as indeterminate, false to show its normal checked/unchecked.',
        },
        {
          prop: 'name',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'autofocus',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'plain',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'button',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'buttonGroup',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'switch',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'buttonVariant',
          type: 'ButtonVariant | null',
          default: undefined,
        },
        {
          prop: 'inline',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'required',
          type: 'Booleanish',
          default: undefined,
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
          prop: 'uncheckedValue',
          type: 'unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null',
          default: false,
        },
        {
          prop: 'value',
          type: 'unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null',
          default: true,
        },
        {
          prop: 'modelValue',
          type: 'unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null',
          default: undefined,
        },
      ],
      emits: [
        {
          event: 'update:modelValue',
          description: 'Emitted when the checked value is changed',
          args: [
            {
              arg: 'checked',
              description:
                'Value of the checkbox.  Value will be an array for grouped checkboxes or a single value for standalone checkboxes.',
              type: 'CheckboxValue | readonly CheckboxValue[]',
            },
          ],
        },
        {
          event: 'input',
          description: 'Emitted before the checked value is changed',
          args: [
            {
              arg: 'checked',
              description:
                'Value of the checkbox before the event. Value will be an array for grouped checkboxes or a single value for standalone checkboxes.',
              type: 'CheckboxValue | readonly CheckboxValue[]',
            },
          ],
        },
        {
          event: 'change',
          description: 'Emitted when the checked value is changed',
          args: [
            {
              arg: 'checked',
              description:
                'Value of the checkbox.  Value will be an array for grouped checkboxes or a single value for standalone checkboxes.',
              type: 'CheckboxValue | readonly CheckboxValue[]',
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
          default: undefined,
        },
        {
          prop: 'form',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'modelValue',
          type: '(unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null)[]',
          default: '() => []',
        },
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
          prop: 'buttonVariant',
          type: 'ButtonVariant | null',
          default: 'secondary',
        },
        {
          prop: 'buttons',
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
          prop: 'htmlField',
          type: 'string',
          default: 'html',
        },
        {
          prop: 'name',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'options',
          type: '(string | number | Record<string, unknown>)[]',
          default: '() => []',
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
          prop: 'size',
          type: 'Size',
          default: 'md',
        },
        {
          prop: 'stacked',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'state',
          type: 'Booleanish | null',
          default: undefined,
        },
        {
          prop: 'switches',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'textField',
          type: 'string',
          default: 'text',
        },
        {
          prop: 'validated',
          type: 'Booleanish',
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
