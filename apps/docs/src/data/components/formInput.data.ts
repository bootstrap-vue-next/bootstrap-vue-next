import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormInput',
      props: {
        '': {
          autocomplete: {
            type: 'string',
            default: 'false',
            description: "Sets the 'autocomplete' attribute value on the form control",
          },
          autofocus: {
            type: 'boolean',
            default: 'false',
            description:
              'When set to `true`, attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the `autofocus` attribute on the control',
          },
          debounce: {
            type: 'Numberish',
            default: '0',
            description:
              "When set to a number of milliseconds greater than zero, will debounce the user input. Has no effect if prop 'lazy' is set",
          },
          debounceMaxWait: {
            type: 'Numberish',
            default: NaN,
            description:
              "The maximum time in milliseconds allowed to be delayed before it''s invoked",
          },
          formatter: {
            type: '(val: string, evt: Event) => string',
            default: 'undefined',
            description: 'Reference to a function for formatting the input',
          },
          lazy: {
            type: 'boolean',
            default: 'false',
            description:
              "When set, updates the v-model on 'change'/'blur' events instead of 'input'. Emulates the Vue '.lazy' v-model modifier",
          },
          lazyFormatter: {
            type: 'boolean',
            default: 'false',
            description:
              'When set, the input is formatted on blur instead of each keystroke (if there is a formatter specified)',
          },
          list: {
            type: 'string',
            default: 'undefined',
            description:
              'The ID of the associated datalist element or component (Not Yet Implemented)',
          },
          max: {
            type: 'Numberish',
            default: 'undefined',
            description:
              "Value to set in the 'max' attribute on the input. Used by number-like inputs",
          },
          min: {
            type: 'Numberish',
            default: 'undefined',
            description:
              "Value to set in the 'min' attribute on the input. Used by number-like inputs",
          },
          modelValue: {
            type: 'Numberish | null',
            default: "''",
            description: 'The current value of the input',
          },
          number: {
            type: 'boolean',
            default: 'false',
            description:
              "When set attempts to convert the input value to a native number. Emulates the Vue '.number' v-model modifier",
          },
          step: {
            type: 'Numberish',
            default: 'undefined',
            description:
              "Value to set in the 'step' attribute on the input. Used by number-like inputs",
          },
          trim: {
            type: 'boolean',
            default: 'false',
            description:
              "When set, trims any leading and trailing white space from the input value. Emulates the Vue '.trim' v-model modifier",
          },
          type: {
            type: 'InputType',
            default: 'text',
            description: 'The type of input to render. See the docs for supported types',
          },
          ...pick(
            buildCommonProps(
              buildCommonProps({
                disabled: {
                  description:
                    'Disables the fieldset element, which in turn disables the form controls (on browsers that support disabled fieldsets). Has no effect if `label-for` is set',
                },
              })
            ),
            [
              'ariaInvalid',
              'disabled',
              'form',
              'id',
              'name',
              'placeholder',
              'plaintext',
              'readonly',
              'required',
              'size',
              'state',
              'tooltip',
            ]
          ),
        },
      },
      emits: [
        {
          event: 'update:modelValue',
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:modelValue` instead.',
          args: [
            {
              arg: 'value',
              type: 'string',
              description:
                'Value of input, after any formatting. Not emitted if the value does not change',
            },
          ],
        },
      ],
      slots: [],
    },
  ],
}
