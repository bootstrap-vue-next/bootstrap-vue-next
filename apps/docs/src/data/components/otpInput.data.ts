import type {BOtpInputProps} from 'bootstrap-vue-next'
import {type ComponentReference, type EmitRecord, type PropRecord, StyleKind} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BOtpInput: {
      styleSpec: {kind: StyleKind.BsvnClass},
      props: {
        ...pick(buildCommonProps(), [
          'ariaInvalid',
          'ariaLabel',
          'autofocus',
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
        ]),
        dir: {
          type: "'ltr' | 'rtl'",
          default: undefined,
          description:
            'The reading direction of the component. If omitted, inherits globally from the application or assumes LTR (left-to-right) reading mode',
        },
        length: {
          type: 'Numberish',
          default: 6,
          description:
            'The number of input fields to render. Must be a positive integer. Defaults to 6 if not specified or invalid',
        },
        mask: {
          type: 'boolean',
          default: false,
          description:
            'When set to `true`, the inputs will be treated as password fields, masking entered characters',
        },
        modelValue: {
          type: 'string[] | null',
          default: '() => []',
          description:
            'The current value of the OTP input as an array of strings. Can be bound using `v-model`',
        },
        otp: {
          type: 'boolean',
          default: false,
          description:
            'When set to `true`, mobile devices will autodetect the OTP from messages or clipboard, and enable the autocomplete field',
        },
        separator: {
          type: 'string',
          default: undefined,
          description: 'A character or string to display between each input field as a visual separator',
        },
        type: {
          type: "'text' | 'number'",
          default: 'text',
          description:
            'The input type for each field. Set to `number` to restrict input to numeric characters only',
        },
      } satisfies PropRecord<keyof BOtpInputProps>,
      emits: {
        'complete': {
          description: 'Emitted when all input fields have been filled',
          args: {
            value: {
              type: 'string[]',
              description: 'The completed array of input values',
            },
          },
        },
        'update:model-value': {
          description: 'Emitted when the input value changes. Used to update the `v-model`',
          args: {
            value: {
              type: 'string[]',
              description: 'The current array of input values',
            },
          },
        },
      } satisfies EmitRecord,
    },
  }),
}
