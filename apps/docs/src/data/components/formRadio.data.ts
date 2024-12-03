import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormRadio',
      styleSpec: {kind: StyleKind.Tag, value: 'input[type="radio"]'},
      sourcePath: '/BFormRadio/BFormRadio.vue',
      props: {
        '': {
          button: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the radio button with the appearance of a button',
          },
          buttonGroup: {
            type: 'boolean',
            default: false,
            description:
              "When set, renders the radio button as part of a button group (it doesn't enclose the radio and label with a div). It is not necessary to set this to true if this is part of a RadioGroup as it is handled internally",
          },
          buttonVariant: {
            type: 'ButtonVariant | null',
            default: null,
            description: "Applies one of Bootstrap's theme colors when in `button` mode",
          },
          inline: {
            type: 'boolean',
            default: false,
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
            default: false,
            description: 'When set, renders the radio button on the opposite side',
          },
          value: {
            type: 'RadioValue | undefined',
            default: true,
            description: 'Value returned when this radio button is selected',
          },

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
        } satisfies Record<keyof BvnComponentProps['BFormRadio'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
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
      styleSpec: {kind: StyleKind.Tag, value: 'dev[role="radiogroup"]'},
      sourcePath: '/BFormRadio/BFormRadioGroup.vue',
      props: {
        '': {
          buttonVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
            description:
              'Specifies the Bootstrap contextual color theme variant to apply to the button style radio buttons',
          },
          buttons: {
            type: 'boolean',
            default: false,
            description: 'When set, renderes the radio buttons in this group with button styling',
          },
          modelValue: {
            type: 'RadioValue | undefined',
            default: undefined,
            description:
              'The current value of the checked radio in the group. Looking for `checked` - use `modelValue` instead.',
          },
          reverse: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the radio buttons on the opposite side',
          },
          stacked: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the radio button group in stacked mode',
          },
          validated: {
            type: 'boolean',
            default: false,
            description: 'When set, adds the Bootstrap class `was-validated` to the group wrapper',
          },
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
        } satisfies Record<keyof BvnComponentProps['BFormRadioGroup'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              description: 'Currently selected value of the radio group.',
              type: 'RadioValue | null',
            },
          ],
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:model-value` instead.',
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
        {
          name: 'option',
          description:
            'Use this slot to have finer control over the content render inside each radio button',
          scope: [
            {
              prop: 'value',
              type: 'string | number | undefined',
              description: 'The value of the radio button',
            },
            {
              prop: 'disabled',
              type: 'boolean | undefined',
              description: 'Whether the radio button is disabled',
            },
            {
              prop: 'text',
              type: 'string | undefined',
              description: 'The text to display for the radio button',
            },
          ],
        },
      ],
    },
  ],
}
