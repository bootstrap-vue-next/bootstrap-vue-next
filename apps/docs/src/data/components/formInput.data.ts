import type {ComponentReference, PropRecord} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'
import type {BFormInputProps} from 'bootstrap-vue-next'

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
          description: "Sets the 'max' attribute on the input; used by number-like input types",
        },
        min: {
          type: 'Numberish',
          default: 'undefined',
          description: "Sets the 'min' attribute on the input; used by number-like input types",
        },
        modelValue: {
          type: 'Numberish | null',
          default: "''",
          description: 'The current value of the input',
        },
        step: {
          type: 'Numberish',
          default: 'undefined',
          description: "Sets the 'step' attribute on the input; used by number-like input types",
        },
        type: {
          type: 'InputType',
          default: 'text',
          description: 'The type of input to render; refer to documentation for supported types',
        },
      } satisfies PropRecord<keyof BFormInputProps>,
      emits: {
        'update:model-value': {
          description:
            'Emitted when the input value changes; use `update:model-value` instead of `input` or `change` events',
          args: {
            value: {
              type: 'string',
              description:
                'The new value of the input after any formatting; not emitted if the value remains unchanged',
            },
          },
        },
      },
      slots: {},
    },
  }),
}
