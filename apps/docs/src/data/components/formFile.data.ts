import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormFile',
      props: {
        '': {
          accept: {
            type: 'string | string[]',
            default: '',
            description: "Value to set on the file input's `accept` attribute",
          },
          capture: {
            type: "'boolean' | 'user' | 'environment'",
            default: false,
            description:
              'When set, will instruction the browser to use the devices camera (if supported)',
          },
          directory: {
            type: 'boolean',
            default: false,
            description: 'Enable `directory` mode (on browsers that support it)',
          },
          label: {
            type: 'string',
            default: '',
            description: 'Sets the label for the form group which the file input is rendered',
          },
          labelClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Sets the styling for the label',
          },
          modelValue: {
            type: 'File[] | File | null',
            default: undefined,
            description:
              'The current value of the file input. Will be a single `File` object or an array of `File` objects (if `multiple` or `directory` is set). Can be set to `null`, or an empty array to reset the file input',
          },
          multiple: {
            type: 'boolean',
            default: false,
            description:
              'When set, will allow multiple files to be selected. `v-model` will be an array',
          },
          noButton: {
            type: 'boolean | null',
            default: undefined,
            description: 'hide the file input button',
          },
          noDrop: {
            type: 'boolean',
            default: false,
            description: 'Disable drag and drop mode',
          },
          noTraverse: {
            type: 'boolean',
            default: false,
            description: 'Wether to returns files as a flat array when in `directory` mode',
          },
          ...pick(
            buildCommonProps({
              plain: {
                description: "Don't add any additional styling or classes to the file input",
              },
            }),
            [
              'ariaLabel',
              'ariaLabelledBy',
              'autofocus',
              'disabled',
              'form',
              'id',
              'name',
              'plain',
              'required',
              'size',
              'state',
            ]
          ),
        },
      },
      emits: [
        {
          event: 'update:modelValue',
          description: 'Updates the `v-model` value (see docs for more details)',
          args: [
            {
              arg: 'value',
              type: 'File | File[] | null',
              description:
                'Will be a single File object in single mode or an array of File objects in multiple mode',
            },
          ],
        },
        {
          event: 'change',
          description: 'Original change event of the input',
          args: [
            {
              arg: 'value',
              type: 'Event',
              description: 'The browsers default change event',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'label',
          description: '',
          scope: [],
        },
      ],
    },
  ],
}
