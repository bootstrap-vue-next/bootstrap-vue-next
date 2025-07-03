import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BFormInput: {
      sourcePath: '/BFormInput/BFormInput.vue',
      props: {
        ...pick(buildCommonProps(), [
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
      } satisfies Record<keyof BvnComponentProps['BFormInput'], PropertyReference>,
      emits: {
        'update:model-value': {
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:model-value` instead.', // TODO similar content to BFormCheckboxGroup/update:model-value (similar description)
          args: {
            value: {
              type: 'string',
              description:
                'Value of input, after any formatting. Not emitted if the value does not change',
            },
          },
        },
      },
      slots: {},
    },
  }),
}
