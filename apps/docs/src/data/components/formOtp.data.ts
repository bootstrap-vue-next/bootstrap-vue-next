import type { BFormOtpProps } from 'bootstrap-vue-next'
import { type ComponentReference, type EmitRecord, type PropRecord, StyleKind } from '../../types'
import { pick } from '../../utils/objectUtils'
import { buildCommonProps } from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BFormOtp: {
      styleSpec: { kind: StyleKind.BsvnClass },
      props: {
        ...pick(buildCommonProps(), [
          'ariaInvalid',
          'ariaLabel',
          'autofocus',
          'disabled',
          'form',
          'id',
          'name',
          'readonly',
          'required',
          'size',
          'state',
        ]),
        connected: {
          type: 'boolean',
          default: false,
          description: 'Merges the slot borders into a single connected control (`.otp-connected`)',
        },
        groups: {
          type: 'readonly number[]',
          default: undefined,
          description:
            'Group sizes used to split the slots, with a separator rendered between groups. The last size repeats until `length` is filled',
        },
        length: {
          type: 'Numberish',
          default: 6,
          description:
            'The number of slots to render. Must be a positive integer. Defaults to 6 if not specified or invalid',
        },
        mask: {
          type: 'boolean',
          default: false,
          description:
            'Renders `•` in filled slots instead of the character. Visual only; the value is unchanged',
        },
        modelValue: {
          type: 'string | null',
          default: "''",
          description: 'The current code as a single string',
        },
        separator: {
          type: 'string',
          default: '·',
          description: 'Text rendered between groups defined by `groups`',
        },
        type: {
          type: "'numeric' | 'alphanumeric' | 'alpha'",
          default: 'numeric',
          description:
            'Restricts accepted characters and sets the `inputmode` and `pattern` of the input',
        },
      } satisfies PropRecord<keyof BFormOtpProps>,
      emits: {
        complete: {
          description: 'Emitted when the code reaches `length`',
          args: {
            value: {
              type: 'string',
              description: 'The completed code',
            },
          },
        },
        'update:model-value': {
          description: 'Emitted when the OTP value changes',
          args: {
            value: {
              type: 'string | null',
              description: 'The current code',
            },
          },
        },
      } satisfies EmitRecord,
    },
  }),
}
