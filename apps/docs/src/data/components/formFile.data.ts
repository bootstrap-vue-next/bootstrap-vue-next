import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormFile',
      props: {
        '': {
          ariaLabel: {
            type: 'string',
            default: undefined,
            description: 'Sets the value of `aria-label` attribute on the rendered element',
          },
          ariaLabelledBy: {
            type: 'string',
            default: undefined,
            description:
              'The ID of the element that provides a label for this component. Used as the value for the `aria-labelledby` attribute',
          },
          accept: {
            type: 'string | string[]',
            default: '',
            description: "Value to set on the file input's `accept` attribute",
          },
          autofocus: {
            type: 'boolean',
            default: false,
            description:
              'When set to `true`, attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the `autofocus` attribute on the control',
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
          disabled: {
            type: 'boolean',
            default: false,
            description:
              "When set to `true`, disables the component's functionality and places it in a disabled state",
          },
          form: {
            type: 'string',
            default: undefined,
            description:
              'ID of the form that the form control belongs to. Sets the `form` attribute on the control',
          },
          id: {
            type: 'string',
            default: undefined,
            description:
              'Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed',
          },
          multiple: {
            type: 'boolean',
            default: false,
            description:
              'When set, will allow multiple files to be selected. `v-model` will be an array',
          },
          name: {
            type: 'string',
            default: undefined,
            description: 'Sets the value of the `name` attribute on the form control',
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
          required: {
            type: 'boolean',
            default: false,
            description: 'Adds the `required` attribute to the form control',
          },
          size: {
            type: 'Size',
            default: undefined,
            description:
              "Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'",
          },
          state: {
            type: 'boolean | null',
            default: undefined,
            description:
              'Controls the validation state appearance of the component. `true` for valid, `false` for invalid, or `null` for no validation state',
          },
          modelValue: {
            type: 'File[] | File | null',
            default: undefined,
            description:
              'The current value of the file input. Will be a single `File` object or an array of `File` objects (if `multiple` or `directory` is set). Can be set to `null`, or an empty array to reset the file input',
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
          plain: {
            type: `boolean | null`,
            default: undefined,
            description: "Don't add any additional styling or classes to the file input",
          },
          noButton: {
            type: 'boolean | null',
            default: undefined,
            description: 'hide the file input button',
          },
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
