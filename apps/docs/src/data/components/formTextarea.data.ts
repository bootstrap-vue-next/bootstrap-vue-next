import {type ComponentReference, type ExposedRecord, type PropRecord, StyleKind} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'
import type {BFormTextareaProps} from 'bootstrap-vue-next'

export default {
  load: (): ComponentReference => ({
    BFormTextarea: {
      styleSpec: {kind: StyleKind.Tag, value: 'textarea'},
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
        ]),
        modelValue: {
          type: 'Numberish | null',
          default: '""',
          description: 'The current value of the textarea',
        },
        noResize: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            "When set, disables the browser's resize handle which prevents the user from changing the height of the textarea. Automatically set when in auto height mode",
        },
        rows: {
          type: 'Numberish',
          default: 2, // TODO item not in string format
          description: 'The minimum number of rows to display. Must be a value greater than 1',
        },
        wrap: {
          type: 'string',
          default: 'soft',
          description:
            "The value to place on the textarea's 'wrap' attribute. Controls how line breaks are returned",
        },
        maxRows: {
          type: 'Numberish',
          default: 'undefined',
          description: 'The maximum number of rows to display. Must be a value greater than 1',
        },
        noAutoShrink: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'When set, disables the auto-shrink feature when the textarea is in auto-height mode',
        },
      } satisfies PropRecord<keyof BFormTextareaProps>,
      emits: {
        'update:model-value': {
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:model-value` instead.', // TODO similar content to BFormSelect/update:model-value (identical description)
          args: {
            value: {
              type: 'string',
              description:
                'Value of textarea, after any formatting. Not emitted if the value does not change',
            },
          },
        },
      },
      slots: {},
      exposed: {
        blur: {
          type: '() => void',
          description: 'Removes focus from the textarea element',
        },
        focus: {
          type: '() => void',
          description: 'Sets focus on the textarea element',
        },
        element: {
          type: 'HTMLTextAreaElement',
          description: 'Reference to the underlying textarea element',
        },
      } satisfies ExposedRecord,
    },
  }),
}
