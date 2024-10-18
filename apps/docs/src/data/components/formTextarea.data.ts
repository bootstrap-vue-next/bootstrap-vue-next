import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormTextarea',
      sourcePath: '/BFormTextarea/BFormTextarea.vue',
      props: {
        '': {
          modelValue: {
            type: 'Numberish | null',
            default: '""',
            description: 'The current value of the textarea',
          },
          noResize: {
            type: 'boolean',
            default: false,
            description:
              "When set, disabled the browser's resize handle which prevents the user from changing the height of the textarea. Automatically set when in auto height mode",
          },
          rows: {
            type: 'Numberish',
            default: 2,
            description: 'The minimum number of rows to display. Must be a value greater than 1',
          },
          wrap: {
            type: 'string',
            default: 'soft',
            description:
              "The value to place on the textarea's 'wrap' attribute. Controls how line break are returned",
          },
          maxRows: {
            type: 'Numberish',
            default: 'undefined',
            description: 'The maximum number of rows to display. Must be a value greater than 1',
          },
          noAutoShrink: {
            type: 'boolean',
            default: false,
            description:
              'When set, disables the auto-shrink feature when the textarea is in auto-height mode',
          },
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
        } satisfies Record<keyof BvnComponentProps['BFormTextarea'], PropertyReference>,
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
                'Value of textarea, after any formatting. Not emitted if the value does not change',
            },
          ],
        },
      ],
      slots: [],
    },
  ],
}
