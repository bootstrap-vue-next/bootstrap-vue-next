import type {BFormFileSlots, BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference, SlotsReference} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BFormFile: {
      sourcePath: '/BForm/BFormFile.vue',
      props: {
        ...pick(
          buildCommonProps({
            plain: {
              description: "Don't add any additional styling or classes to the file input",
            },
          }),
          [
            'ariaLabel',
            'ariaLabelledby',
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
        accept: {
          type: 'string | string[]',
          default: '',
          description: "Value to set on the file input's `accept` attribute",
        },
        capture: {
          type: "'boolean' | 'user' | 'environment'",
          default: false, // TODO item not in string format
          description:
            'When set, will instruction the browser to use the devices camera (if supported)', // TODO grammar check (should say "instruct" instead of "instruction"; "devices" should be "device's")
        },
        directory: {
          type: 'boolean',
          default: false, // TODO item not in string format
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
          default: false, // TODO item not in string format
          description:
            'When set, will allow multiple files to be selected. `v-model` will be an array',
        },
        noButton: {
          type: 'boolean | null',
          default: undefined,
          description: 'hide the file input button', // TODO grammar check (should capitalize "Hide" for consistency)
        },
        noDrop: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disable drag and drop mode',
        },
        noTraverse: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Wether to returns files as a flat array when in `directory` mode', // TODO grammar check (typo: "Wether" should be "Whether"; "returns" should be "return")
        },
      } satisfies Record<keyof BvnComponentProps['BFormFile'], PropertyReference>,
      emits: {
        'update:model-value': {
          description: 'Updates the `v-model` value (see docs for more details)', // TODO similar content to BAlert/update:model-value (similar purpose)
          args: {
            value: {
              type: 'File | File[] | null',
              description:
                'Will be a single File object in single mode or an array of File objects in multiple mode',
            },
          },
        },
      },
      slots: {
        label: {
          description: '', // TODO missing description
          scope: {},
        },
      }satisfies Record<keyof BFormFileSlots, SlotsReference>,
    },
  }),
}
