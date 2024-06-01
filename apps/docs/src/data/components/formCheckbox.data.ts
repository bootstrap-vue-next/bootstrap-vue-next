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
          description: 'Sets the value of `aria-label` attribute on the rendered element',
        },
        {
          prop: 'ariaLabelledBy',
          type: 'string',
          default: undefined,
          description:
            'The ID of the element that provides a label for this component. Used as the value for the `aria-labelledby` attribute',
        },
        {
          prop: 'autofocus',
          type: 'boolean',
          default: false,
          description:
            'When set to `true`, attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the `autofocus` attribute on the control',
        },
        {
          prop: 'button',
          type: 'boolean',
          default: false,
          description: 'When set, renders the checkbox with the appearance of a button',
        },
        {
          prop: 'buttonGroup',
          type: 'boolean',
          default: false,
          description:
            "When set, renders the checkbox as part of a button group (it doesn't enclose the checkbox and label with a div). It is not necessary to set this to true if this is part of a RadioGroup as it is handled internally",
        },
        {
          prop: 'buttonVariant',
          type: 'ButtonVariant | null',
          default: 'secondary',
          description: "Applies one of Bootstrap's theme colors when in `button` mode",
        },
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
          description:
            "When set to `true`, disables the component's functionality and places it in a disabled state",
        },
        {
          prop: 'form',
          type: 'string',
          default: undefined,
          description:
            'ID of the form that the form control belongs to. Sets the `form` attribute on the control',
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
          description:
            'Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed',
        },
        {
          prop: 'indeterminate',
          type: 'boolean',
          default: false,
          description:
            'Set to true to show the checkbox as indeterminate, false to show its normal checked/unchecked.',
        },
        {
          prop: 'inline',
          type: 'boolean',
          default: false,
          description:
            'When set, renders the checkbox as an inline element rather than as a 100% width block',
        },
        {
          prop: 'modelValue',
          type: 'CheckboxValue | readonly CheckboxValue[]',
          default: undefined,
          description:
            'The current value of the checkbox(es). Must be an array when there are multiple checkboxes bound to the same v-model. Looking for `value` - use `modelValue` instead.',
        },
        {
          prop: 'name',
          type: 'string',
          default: undefined,
          description: 'Sets the value of the `name` attribute on the form control',
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
          default: undefined,
          description: 'Adds the `required` attribute to the form control',
        },
        {
          prop: 'size',
          type: 'Size',
          default: undefined,
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
          prop: 'reverse',
          type: 'boolean',
          default: false,
          description: 'When set, renders the checkbox or switch on the opposite side',
        },
        {
          prop: 'switch',
          type: 'boolean',
          default: false,
          description: 'When set, renders the checkbox with the appearance of a switch',
        },
        {
          prop: 'uncheckedValue',
          type: 'CheckboxValue',
          default: false,
          description:
            'Value returned when this checkbox is unchecked. Note not applicable when multiple checkboxes bound to the same v-model array',
        },
        {
          prop: 'value',
          type: 'CheckboxValue',
          default: true,
          description: 'Value returned when this checkbox is checked',
        },
      ],
      emits: [
        {
          event: 'update:modelValue',
          description: 'Emitted when the checked value is changed',
          args: [
            {
              arg: 'value',
              description:
                'Value of the checkbox. Value will be an array for grouped checkboxes or a single value for standalone checkboxes. Looking for the `input` or `change` event - use `update:modelValue` instead.',
              type: 'CheckboxValue | readonly CheckboxValue[]',
            },
          ],
        },
        {
          event: 'update:indeterminate',
          description: 'Emitted when the indeterminaate state of the checkbox is changed',
          args: [
            {
              arg: 'value',
              description:
                'Value of the indeterminate state - true for indeterminate, false for determinstic state.',
              type: 'boolean',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the label of the form checkbox',
        },
      ],
    },
    {
      component: 'BFormCheckboxGroup',
      props: [
        {
          prop: 'ariaInvalid',
          type: 'AriaInvalid',
          default: undefined,
          description:
            'Sets the `aria-invalid` attribute value on the wrapper element. When not provided, the `state` prop will control the attribute',
        },
        {
          prop: 'autofocus',
          type: 'boolean',
          default: false,
          description:
            'When set to `true`, attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the `autofocus` attribute on the control',
        },
        {
          prop: 'buttonVariant',
          type: 'ButtonVariant | null',
          default: 'secondary',
          description:
            'Specifies the Bootstrap contextual color theme variant to apply to the button style checkboxes',
        },
        {
          prop: 'buttons',
          type: 'boolean',
          default: false,
          description: 'When set, renderes the checkboxes in this group with button styling',
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
          prop: 'modelValue',
          type: 'readonly CheckboxValue[]',
          default: '() => []',
          description:
            'The current value of the checked checkboxes in the group. Must be an array when there are multiple checkboxes. . Looking for `value` - use `modelValue` instead.',
        },
        {
          prop: 'name',
          type: 'string',
          default: undefined,
          description: 'Sets the value of the `name` attribute on the form control',
        },
        {
          prop: 'options',
          type: 'readonly CheckboxOptionRaw[]',
          default: '() => []',
          description: 'Array of items to render in the component',
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
          prop: 'reverse',
          type: 'boolean',
          default: false,
          description: 'When set, renders the checkboxes and switches on the opposite side',
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
          description: "Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'",
        },
        {
          prop: 'stacked',
          type: 'boolean',
          default: false,
          description: 'When set, renders the checkbox group in stacked mode',
        },
        {
          prop: 'state',
          type: 'boolean | null',
          default: null,
          description:
            'Controls the validation state appearance of the component. `true` for valid, `false` for invalid, or `null` for no validation state',
        },
        {
          prop: 'switches',
          type: 'boolean',
          default: false,
          description: 'When set, renders the checkboxes in the group with switch styling',
        },
        {
          prop: 'textField',
          type: 'string',
          default: 'text',
          description: 'Field name in the `options` array that should be used for the text label',
        },
        {
          prop: 'validated',
          type: 'boolean',
          default: false,
          description: 'When set, adds the Bootstrap class `was-validated` to the group wrapper',
        },
        {
          prop: 'valueField',
          type: 'string',
          default: 'value',
          description: 'Field name in the `options` array that should be used for the value',
        },
      ],
      emits: [
        {
          event: 'update:modelValue',
          description:
            'Emitted when the selected value(s) are changed. . Looking for the `input` or `change` event - use `update:modelValue` instead.',
          args: [
            {
              arg: 'value',
              type: 'CheckboxValue[]',
              description: 'Value of the checkboxes. Value will be an array.',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content (form checkboxes) to place in the form checkbox group',
          scope: [],
        },
        {
          name: 'first',
          description:
            'Slot to place for checkboxes so that they appear before checks generated from options prop',
          scope: [],
        },
      ],
    },
  ],
}
