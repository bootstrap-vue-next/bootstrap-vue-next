import type {PropertyReference} from './ComponentReference'

export default {
  load: (): PropertyReference[] => [
    {
      prop: 'ariaInvalid',
      type: 'AriaInvalid',
      default: undefined,
      description:
        'Sets the `aria-invalid` attribute value on the wrapper element. When not provided, the `state` prop will control the attribute',
    },
    {
      prop: 'ariaLabel',
      type: 'string',
      default: undefined,
      description: 'Sets the value of `aria-label` attribute on the rendered element',
    },
    {
      prop: 'ariaLabelledBy',
      type: 'string',
      default: undefined,
      description:
        'The ID of the element that provides a label for this component. Used as the value for the `aria-labelledby` attribute',
    },
    {
      prop: 'autofocus',
      type: 'boolean',
      default: false,
      description:
        'When set to `true`, attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the `autofocus` attribute on the control',
    },
    {
      prop: 'disabled',
      type: 'boolean',
      default: false,
      description:
        "When set to `true`, disables the component's functionality and places it in a disabled state",
    },
    {
      prop: 'disabledField',
      type: 'string',
      default: 'disabled',
      description: 'Field name in the `options` array that should be used for the disabled state',
    },
    {
      prop: 'form',
      type: 'string',
      default: undefined,
      description:
        'ID of the form that the form control belongs to. Sets the `form` attribute on the control',
    },
    {
      prop: 'htmlField',
      type: 'string',
      default: 'html',
      description:
        'Field name in the `options` array that should be used for the html label instead of text field',
    },
    {
      prop: 'id',
      type: 'string',
      default: undefined,
      description:
        'Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed',
    },
    {
      prop: 'name',
      type: 'string',
      default: undefined,
      description: 'Sets the value of the `name` attribute on the form control',
    },
    {
      prop: 'options',
      type: 'readonly CheckboxOptionRaw[]',
      default: '() => []',
      description: 'Array of items to render in the component',
    },
    {
      prop: 'plain',
      type: 'boolean',
      default: false,
      description: 'Render the form control in plain mode, rather than custom styled mode',
    },
    {
      prop: 'required',
      type: 'boolean',
      default: undefined,
      description: 'Adds the `required` attribute to the form control',
    },
    {
      prop: 'size',
      type: 'Size',
      default: 'md',
      description: "Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'",
    },
    {
      prop: 'state',
      type: 'boolean | null',
      default: undefined,
      description:
        'Controls the validation state appearance of the component. `true` for valid, `false` for invalid, or `null` for no validation state',
    },
    {
      prop: 'textField',
      type: 'string',
      default: 'text',
      description: 'Field name in the `options` array that should be used for the text label',
    },
    {
      prop: 'valueField',
      type: 'string',
      default: 'value',
      description: 'Field name in the `options` array that should be used for the value',
    },
  ],
}
