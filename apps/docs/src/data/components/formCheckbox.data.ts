import {pick} from '../../utils/objectUtils'
import type {ComponentReference, PropertyReference} from '../../types'
import type {BvnComponentProps} from 'bootstrap-vue-next'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BFormCheckbox: {
      sourcePath: '/BFormCheckbox/BFormCheckbox.vue',
      props: {
        ...pick(buildCommonProps(), [
          'ariaLabel',
          'ariaLabelledby',
          'autofocus',
          'disabled',
          'form',
          'id',
          'name',
          'plain',
          'required',
          'size',
          'state',
          'wrapperAttrs',
        ]),
        button: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the checkbox with the appearance of a button',
        },
        buttonGroup: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            "When set, renders the checkbox as part of a button group (it doesn't enclose the checkbox and label with a div). It is not necessary to set this to true if this is part of a CheckboxGroup as it is handled internally",
        },
        buttonVariant: {
          type: 'ButtonVariant | null',
          default: 'secondary',
          description: "Applies one of Bootstrap's theme colors when in `button` mode",
        },
        indeterminate: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Set to true to show the checkbox as indeterminate, false to show its normal checked/unchecked.',
        },
        inline: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'When set, renders the checkbox as an inline element rather than as a 100% width block',
        },
        inputClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class to be applied to the body of the checkbox item',
        },
        modelValue: {
          type: 'CheckboxValue | readonly CheckboxValue[]',
          default: undefined,
          description:
            'The current value of the checkbox(es). Must be an array when there are multiple checkboxes bound to the same v-model. Looking for `value` - use `modelValue` instead.',
        },
        reverse: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the checkbox or switch on the opposite side',
        },
        switch: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the checkbox with the appearance of a switch',
        },
        uncheckedValue: {
          type: 'CheckboxValue',
          default: false, // TODO item not in string format
          description:
            'Value returned when this checkbox is unchecked. Note not applicable when multiple checkboxes bound to the same v-model array',
        },
        value: {
          type: 'CheckboxValue',
          default: true, // TODO item not in string format
          description: 'Value returned when this checkbox is checked',
        },
      } satisfies Record<keyof BvnComponentProps['BFormCheckbox'], PropertyReference>,
      emits: {
        'update:model-value': {
          description: 'Emitted when the checked value is changed', // TODO similar content to BAlert/update:model-value (similar purpose)
          args: {
            value: {
              description:
                'Value of the checkbox. Value will be an array for grouped checkboxes or a single value for standalone checkboxes. Looking for the `input` or `change` event - use `update:model-value` instead.',
              type: 'CheckboxValue | readonly CheckboxValue[]',
            },
          },
        },
        'update:indeterminate': {
          description: 'Emitted when the indeterminaate state of the checkbox is changed', // TODO grammar check (typo: "indeterminaate" should be "indeterminate")
          args: {
            value: {
              description:
                'Value of the indeterminate state - true for indeterminate, false for determinstic state.', // TODO grammar check (typo: "determinstic" should be "deterministic")
              type: 'boolean',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content to place in the label of the form checkbox',
        },
      },
    },
    BFormCheckboxGroup: {
      sourcePath: '/BFormCheckbox/BFormCheckboxGroup.vue',
      props: {
        ...pick(buildCommonProps(), [
          'ariaInvalid',
          'autofocus',
          'disabled',
          'disabledField',
          'form',
          'id',
          'name',
          'plain',
          'required',
          'size',
          'state',
          'textField',
          'valueField',
        ]),
        buttonVariant: {
          type: 'ButtonVariant | null',
          default: 'secondary',
          description:
            'Specifies the Bootstrap contextual color theme variant to apply to the button style checkboxes',
        },
        buttons: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renderes the checkboxes in this group with button styling', // TODO grammar check (typo: "renderes" should be "renders")
        },
        modelValue: {
          type: 'readonly CheckboxValue[]',
          default: '() => []',
          description:
            'The current value of the checked checkboxes in the group. Must be an array when there are multiple checkboxes. . Looking for `value` - use `modelValue` instead.', // TODO grammar check (extra period before "Looking")
        },
        options: {
          type: 'readonly CheckboxOptionRaw[]',
          default: '() => []',
          // description: 'Array of options to render as checkboxes in the group' // TODO missing description
        },
        reverse: {
          type: 'boolean',
          default: 'false', // TODO item not in string format
          description: 'When set, renders the checkboxes and switches on the opposite side',
        },
        stacked: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the checkbox group in stacked mode',
        },
        switches: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the checkboxes in the group with switch styling',
        },
        validated: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, adds the Bootstrap class `was-validated` to the group wrapper',
        },
      } satisfies Record<keyof BvnComponentProps['BFormCheckboxGroup'], PropertyReference>,
      emits: {
        'update:model-value': {
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:model-value` instead.', // TODO similar content to BAlert/update:model-value (similar purpose)
          args: {
            value: {
              type: 'CheckboxValue[]',
              description: 'Value of the checkboxes. Value will be an array.',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content (form checkboxes) to place in the form checkbox group',
        },
        first: {
          description:
            'Slot to place for checkboxes so that they appear before checks generated from options prop',
        },
        option: {
          description:
            'Use this slot to have finer control over the content render inside each checkbox button.', // TODO grammar check (should say "rendered" instead of "render")
          scope: {
            value: {
              type: 'string | number | undefined',
              description: 'The value of the checkbox button',
            },
            disabled: {
              type: 'boolean | undefined',
              description: 'Whether the checkbox button is disabled',
            },
            text: {
              type: 'string | undefined',
              description: 'The text to display for the checkbox button',
            },
          },
        },
      },
    },
  }),
}
