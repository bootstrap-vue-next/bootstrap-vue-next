import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormRadio',
      props: [
        {prop: 'ariaLabel'},
        {prop: 'ariaLabelledby'},
        {prop: 'autofocus'},
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
        {prop: 'disabled'},
        {prop: 'form'},
        {prop: 'id'},
        {
          prop: 'inline',
          type: 'boolean',
          default: false,
          description:
            'When set, renders the radio button as an inline element rather than as a 100% width block',
        },
        {
          prop: 'modelValue',
          type: 'RadioValue | undefined',
          default: undefined,
          description:
            'The current value of the radio. Looking for `checked` - use `modelValue` instead.',
        },
        {prop: 'name'},
        {prop: 'plain'},
        {prop: 'required'},
        {
          prop: 'reverse',
          type: 'boolean',
          default: false,
          description: 'When set, renders the radio button on the opposite side',
        },
        {prop: 'size'},
        {prop: 'state'},
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
        {prop: 'ariaInvalid'},
        {prop: 'autofocus'},
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
        {prop: 'disabled'},
        {prop: 'disabledField'},
        {prop: 'form'},
        {prop: 'htmlField'},
        {prop: 'id'},
        {
          prop: 'modelValue',
          type: 'RadioValue | undefined',
          default: undefined,
          description:
            'The current value of the checked radio in the group. Looking for `checked` - use `modelValue` instead.',
        },
        {prop: 'name'},
        {
          prop: 'options',
          type: 'readonly RadioOptionRaw[] | undefined',
        },
        {prop: 'plain'},
        {prop: 'required'},
        {
          prop: 'reverse',
          type: 'boolean',
          default: false,
          description: 'When set, renders the radio buttons on the opposite side',
        },
        {prop: 'size'},
        {
          prop: 'stacked',
          type: 'boolean',
          default: false,
          description: 'When set, renders the radio button group in stacked mode',
        },
        {prop: 'state'},
        {prop: 'textField'},
        {
          prop: 'validated',
          type: 'boolean',
          default: false,
          description: 'When set, adds the Bootstrap class `was-validated` to the group wrapper',
        },
        {prop: 'valueField'},
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
