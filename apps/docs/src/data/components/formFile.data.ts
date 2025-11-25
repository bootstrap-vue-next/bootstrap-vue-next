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
          type: 'string | string[]',
          default: '',
          description: "Value to set on the file input's `accept` attribute",
        },
        capture: {
          type: "'boolean' | 'user' | 'environment'",
          default: false,
          description:
            "When set, will instruct the browser to use the device's camera (if supported)",
        },
        directory: {
          type: 'boolean',
          default: false,
          description: 'Enable `directory` mode (on browsers that support it)',
        },
        dropPlaceholder: {
          type: 'string',
          default: 'Drop files here...',
          description:
            'Text to display in the drag overlay when files are being dragged over the input',
        },
        fileNameFormatter: {
          type: '(files: readonly File[]) => string',
          default: undefined,
          description:
            'Function to format the displayed file names. Receives an array of File objects and should return a string',
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
          type: 'boolean',
          default: false,
          description: 'Hide the file input button',
        },
        noDrop: {
          type: 'boolean',
          default: false,
          description: 'Disable drag and drop mode',
        },
        noDropPlaceholder: {
          type: 'string',
          default: 'Drop not allowed',
          description:
            'Text to display in the drag overlay when dropping files is not allowed (e.g., wrong file type)',
        },
        noTraverse: {
          type: 'boolean',
          default: false,
          description: 'Whether to return files as a flat array when in `directory` mode',
        },
        placeholder: {
          type: 'string',
          default: undefined,
          description:
            'Placeholder text to show in the file name display area when no files are selected',
        },
        showFileNames: {
          type: 'boolean',
          default: false,
          description:
            'When true, displays selected file names below the input. Also shown automatically when files are selected or placeholder is set',
        },
      } satisfies PropRecord<keyof BFormFileProps>,
      emits: {
        'update:model-value': {
          description:
            'Emitted when the file selection changes. Value will be a File, File[], or null',
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
          description: 'Content to place in the label element above the file input',
          scope: {},
        },
        'file-name': {
          description:
            'Scoped slot for custom file name display. Overrides the default file name formatting',
          scope: {
            files: {
              type: 'readonly File[]',
              description: 'Array of selected File objects',
            },
            names: {
              type: 'readonly string[]',
              description: 'Array of file names extracted from the files',
            },
            filesTraversed: {
              type: 'readonly File[]',
              description:
                'Flattened array of files when directory mode is enabled (currently same as files)',
            },
          },
        },
        'placeholder': {
          description:
            'Custom content to display when no files are selected. Overrides the placeholder prop',
          scope: {},
        },
        'drop-placeholder': {
          description:
            'Custom content to display in the drag overlay when files are being dragged over the input',
          scope: {
            dropAllowed: {
              type: 'boolean',
              description: 'Whether dropping is currently allowed based on file type validation',
            },
          },
        },
      } satisfies SlotRecord<keyof BFormFileSlots>,
    },
  }),
}
