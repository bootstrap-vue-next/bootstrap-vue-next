import type {
  BFormRadioGroupProps,
  BFormRadioGroupSlots,
  BFormRadioProps,
  BFormRadioSlots,
} from 'bootstrap-vue-next'
import {type ComponentReference, type PropRecord, type SlotRecord, StyleKind} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BFormRadio: {
      styleSpec: {kind: StyleKind.Tag, value: 'input[type="radio"]'},
      sourcePath: '/BFormRadio/BFormRadio.vue',
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
        ]),
        button: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the radio button with the appearance of a button',
        },
        buttonGroup: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            "When set, renders the radio button as part of a button group (it doesn't enclose the radio and label with a div). It is not necessary to set this to true if this is part of a RadioGroup as it is handled internally",
        },
        buttonVariant: {
          type: 'ButtonVariant | null',
          default: null, // TODO item not in string format
          description: "Applies one of Bootstrap's theme colors when in `button` mode",
        },
        inline: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'When set, renders the radio button as an inline element rather than as a 100% width block',
        },
        modelValue: {
          type: 'RadioValue | undefined',
          default: undefined,
          description:
            'The current value of the radio. Looking for `checked` - use `modelValue` instead.',
        },
        reverse: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the radio button on the opposite side',
        },
        value: {
          type: 'RadioValue | undefined',
          default: true, // TODO item not in string format
          description: 'Value returned when this radio button is selected',
        },
      } satisfies PropRecord<keyof BFormRadioProps>,
      emits: {
        'update:model-value': {
          description: 'Emitted when the radio button value is changed', // TODO similar content to BFormCheckbox/update:model-value (similar purpose)
          args: {
            value: {
              description: 'Value of the radio button.',
              type: 'RadioValue',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content to place in the label of the radio button',
        },
      } satisfies SlotRecord<keyof BFormRadioSlots>,
    },
    BFormRadioGroup: {
      styleSpec: {kind: StyleKind.Tag, value: 'div[role="radiogroup"]'},
      sourcePath: '/BFormRadio/BFormRadioGroup.vue',
      props: {
        ...pick(buildCommonProps(), [
          'ariaInvalid',
          'autofocus',
          'disabled',
          'disabledField',
          'form',
          'id',
          'name',
          'options',
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
            'Specifies the Bootstrap contextual color theme variant to apply to the button style radio buttons',
        },
        buttons: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the radio buttons in this group with button styling'
        },
        modelValue: {
          type: 'RadioValue | undefined',
          default: undefined,
          description:
            'The current value of the checked radio in the group. Looking for `checked` - use `modelValue` instead.',
        },
        reverse: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the radio buttons on the opposite side',
        },
        stacked: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the radio button group in stacked mode',
        },
        validated: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, adds the Bootstrap class `was-validated` to the group wrapper',
        },
      } satisfies PropRecord<keyof BFormRadioGroupProps>,
      emits: {
        'update:model-value': {
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:model-value` instead.', // TODO similar content to BFormCheckboxGroup/update:model-value (identical description)
          args: {
            value: {
              description: 'Currently selected value of the radio group.',
              type: 'RadioValue | null',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content (form radio buttons) to place in the form radio button group',
        },
        first: {
          description:
            'Slot to place for radio buttons so that they appear before radios generated from options prop',
        },
        option: {
          description:
            'Use this slot to have finer control over the content rendered inside each radio button',
          scope: {
            value: {
              type: 'string | number | undefined',
              description: 'The value of the radio button',
            },
            disabled: {
              type: 'boolean | undefined',
              description: 'Whether the radio button is disabled',
            },
            text: {
              type: 'string | undefined',
              description: 'The text to display for the radio button',
            },
          },
        },
      } satisfies SlotRecord<keyof BFormRadioGroupSlots>,
    },
  }),
}
