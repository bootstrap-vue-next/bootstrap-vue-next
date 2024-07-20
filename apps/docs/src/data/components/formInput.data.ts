import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormInput',
      props: {
        '': {
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
          ...pick(buildCommonProps(buildCommonProps()), [
            'ariaInvalid',
            'autocomplete',
            'autofocus',
            'debounce',
            'debounceMaxWait',
            'disabled',
            'form',
            'formatter',
            'id',
            'lazy',
            'lazyFormatter',
            'name',
            'number',
            'placeholder',
            'plaintext',
            'readonly',
            'required',
            'size',
            'state',
            'tooltip',
          ]),
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
