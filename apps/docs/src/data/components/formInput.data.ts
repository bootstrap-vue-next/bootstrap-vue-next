import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormInput',
      props: {
        '': {
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
            'lazyFormatter',
            'list',
            'name',
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
          event: 'update:model-value',
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:model-value` instead.',
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
