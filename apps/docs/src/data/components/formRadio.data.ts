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
          description: 'Sets the value of `aria-label` attribute on the rendered element',
        },
        {
          prop: 'ariaLabelledby',
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
          description: 'When set, renders the radio button with the appearance of a button',
        },
        {
          prop: 'buttonGroup',
          type: 'boolean',
          default: false,
          description:
            "When set, renders the radio button as part of a button group (it doesn't enclose the radio and label with a div). It is not necessary to set this to true if this is part of a RadioGroup as it is handled internally",
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
          prop: 'inline',
          type: 'boolean',
          default: false,
          description:
            'When set, renders the checkbox as an inline element rather than as a 100% width block',
        },
        {
          prop: 'modelValue',
          type: 'RadioValue | undefined',
          default: undefined,
          description:
            '	The current value of the radio. Looking for `checked` - use `modelValue` instead.',
        },
        {
          prop: 'name',
          type: 'string',
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
          default: false,
          description: 'Adds the `required` attribute to the form control',
        },
        {
          prop: 'reverse',
          type: 'boolean',
          default: false,
          description: 'When set, renders the radio button on the opposite side',
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
          prop: 'value',
          type: 'RadioValue | undefined',
          default: true,
          description: 'Value returned when this radio button is selected',
        },
      ],
      emits: [
        {
          event: 'update:modelValue',
          description: 'Emitted when the radio button value is changed',
          args: [
            {
              arg: 'value',
              description: 'Value of the radio button.',
              type: 'RadioValue',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the label of the radio button',
        },
      ],
    },
    {
      component: 'BFormRadioGroup',
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
            'Specifies the Bootstrap contextual color theme variant to apply to the button style radio buttons',
        },
        {
          prop: 'buttons',
          type: 'boolean',
          default: false,
          description: 'When set, renderes the radio buttons in this group with button styling',
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
          type: 'RadioValue | undefined',
          default: undefined,
          description:
            'The current value of the checked radio in the group. Looking for `checked` - use `modelValue` instead.',
        },
        {
          prop: 'name',
          type: 'string',
          default: undefined,
          description: 'Sets the value of the `name` attribute on the form control',
        },
        {
          prop: 'options',
          type: 'readonly RadioOptionRaw[] | undefined',
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
          description: 'When set, renders the radio buttons on the opposite side',
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
          description: 'When set, renders the radio button group in stacked mode',
        },
        {
          prop: 'state',
          type: 'boolean | null',
          default: null,
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
          args: [
            {
              arg: 'value',
              description: 'Currently selected value of the radio group.',
              type: 'RadioValue | null',
            },
          ],
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:modelValue` instead.',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content (form radio buttons) to place in the form radio button group',
          scope: [],
        },
        {
          name: 'first',
          description:
            'Slot to place for radio buttons so that they appear before radios generated from options prop',
          scope: [],
        },
      ],
    },
  ],
}
