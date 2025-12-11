import type {BFormFileProps, BFormFileSlots} from 'bootstrap-vue-next'
import type {ComponentReference, PropRecord, SlotRecord} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BFormFile: {
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
          type: 'string | readonly string[]',
          default: '',
          description:
            "Value to set on the file input's `accept` attribute. Restricts file types that can be selected",
        },
        browseText: {
          type: 'string',
          default: 'Browse',
          description: 'Text for the browse button (custom mode only)',
        },
        capture: {
          type: "'boolean' | 'user' | 'environment'",
          default: false, // TODO item not in string format
          description:
            "When set, will instruct the browser to use the device's camera (if supported)",
        },
        directory: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Enable `directory` mode (on browsers that support it)',
        },
        dropPlaceholder: {
          type: 'string',
          default: undefined,
          description: 'Text to display when dragging files over the drop zone (custom mode only)',
        },
        fileNameFormatter: {
          type: '(files: File[]) => string',
          default: undefined,
          description:
            'Custom formatter function for displaying selected file names (custom mode only)',
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
          description: 'Hide the file input button',
        },
        noDrop: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disable drag and drop mode',
        },
        noDropPlaceholder: {
          type: 'string',
          default: undefined,
          description: 'Text to display when drag and drop is disabled (custom mode only)',
        },
        placeholder: {
          type: 'string',
          default: 'No file chosen',
          description: 'Text to display when no file is selected (custom mode only)',
        },
        showFileNames: {
          type: 'boolean',
          default: false,
          description: 'Display selected file names in custom mode',
        },
      } satisfies PropRecord<keyof BFormFileProps>,
      emits: {
        'change': {
          description: 'Emitted when the file selection changes',
          args: {
            value: {
              type: 'Event',
              description: 'Native change event',
            },
          },
        },
        'update:model-value': {
          description: 'Updates the `v-model` value (see docs for more details)',
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
        'label': {
          description: 'Slot to customize the label content',
          scope: {},
        },
        'file-name': {
          description: 'Slot to customize how selected file names are displayed',
          scope: {
            files: {
              type: 'readonly File[]',
              description: 'Array of selected File objects',
            },
            names: {
              type: 'readonly string[]',
              description: 'Array of file names',
            },
          },
        },
        'placeholder': {
          description: 'Slot to customize the placeholder text shown when no files are selected',
          scope: {},
        },
        'drop-placeholder': {
          description:
            'Slot to customize the drag-and-drop overlay text (shown during drag operations)',
          scope: {
            dropAllowed: {
              type: 'boolean',
              description: 'Whether the dragged files meet the accept criteria',
            },
          },
        },
      } satisfies SlotRecord<keyof BFormFileSlots>,
    },
  }),
}
