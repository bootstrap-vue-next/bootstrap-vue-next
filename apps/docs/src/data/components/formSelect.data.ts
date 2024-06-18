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
          description:
            "Optional value to set for the 'aria-invalid' attribute. Supported values are 'true' and 'false'. If not set, the 'state' prop will dictate the value",
        },
        {
          prop: 'autofocus',
          type: 'boolean',
          default: false,
          description:
            'When set to `true`, attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the `autofocus` attribute on the control',
        },
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
          description:
            "When set to `true`, disables the component's functionality and places it in a disabled state",
        },
        {
          prop: 'disabledField',
          type: 'string',
          default: 'disabled',
          description:
            'Field name in the `options` array that should be used for the disabled state',
        },
        {
          prop: 'form',
          type: 'string',
          default: undefined,
          description:
            'ID of the form that the form control belongs to. Sets the `form` attribute on the control',
        },
        {
          prop: 'htmlField',
          type: 'string',
          default: 'html',
          description:
            'Field name in the `options` array that should be used for the html label instead of text field',
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
          description:
            'Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed',
        },
        {
          prop: 'labelField',
          type: 'string',
          default: 'label',
          description: 'When set, allows multiple options to be selected (multi-select)',
        },
        {
          prop: 'multiple',
          type: 'boolean',
          default: false,
          description: 'When set, allows multiple options to be selected (multi-select)',
        },
        {
          prop: 'name',
          type: 'string',
          default: undefined,
          description: 'Sets the value of the `name` attribute on the form control',
        },
        {
          prop: 'options',
          type: 'unknown[] | Record<string, unknown>',
          default: '() => []',
          description: 'Array of items to render in the component',
        },
        {
          prop: 'optionsField',
          type: 'string',
          default: 'options',
          description: 'The key to use from the option object to get the options',
        },
        {
          prop: 'plain',
          type: 'boolean',
          default: false,
          description: 'Render the form control in plain mode, rather than custom styled mode',
        },
        {
          prop: 'required',
          type: 'boolean',
          default: false,
          description: 'Adds the `required` attribute to the form control',
        },
        {
          prop: 'selectSize',
          type: 'Numberish',
          default: 0,
          description:
            'When set to a number larger than 0, will set the number of display option rows. Note not all browser will respect this setting',
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
          description: "Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'",
        },
        {
          prop: 'state',
          type: 'boolean | null',
          default: undefined,
          description:
            'Controls the validation state appearance of the component. `true` for valid, `false` for invalid, or `null` for no validation state',
        },
        {
          prop: 'textField',
          type: 'string',
          default: 'text',
          description: 'Field name in the `options` array that should be used for the text label',
        },
        {
          prop: 'valueField',
          type: 'string',
          default: 'value',
          description: 'Field name in the `options` array that should be used for the value',
        },
        {
          prop: 'modelValue',
          type: `SelectValue`,
          default: '',
          description: 'The value of the select control',
        },
      ],
      emits: [
        {
          event: 'update:modelValue',
          args: [
            {
              arg: 'value',
              description: 'Currently selected value of the select control.',
              type: 'SelectValue',
            },
          ],
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:modelValue` instead.',
        },
      ],
      slots: [
        {
          description: 'Content to place in the form select',
          name: 'default',
        },
        {
          description:
            "Slot to place options or option groups above options provided via the 'options' prop",
          name: 'first',
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
          description: 'The value of the option',
        },
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
          description: 'The disabled state of the option',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the form select option',
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
          description: 'The label for the option group',
        },
        {
          prop: 'disabledField',
          type: 'string',
          default: 'disabled',
          description:
            'Field name in the `options` array that should be used for the disabled state',
        },
        {
          prop: 'htmlField',
          type: 'string',
          default: 'html',
          description:
            'Field name in the `options` array that should be used for the html label instead of text field',
        },
        {
          prop: 'options',
          type: 'readonly (unknown | Record<string, unknown>)[]',
          default: '() => []',
          description: 'Array of items to render in the component',
        },
        {
          prop: 'textField',
          type: 'string',
          default: 'text',
          description: 'Field name in the `options` array that should be used for the text label',
        },
        {
          prop: 'valueField',
          type: 'string',
          default: 'value',
          description: 'Field name in the `options` array that should be used for the value',
        },
      ],
      emits: [],
      slots: [
        {
          name: 'first',
          description: 'Content to place in the form select option group',
        },
        {
          name: 'default',
          description: "Slot to place options above options provided via the 'options' prop",
        },
      ],
    },
  ],
}
