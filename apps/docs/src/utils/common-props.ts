import {type PropertyReference} from '../types'

export const commonProps = () =>
  ({
    ariaControls: {
      type: 'AriaInvalid',
      default: undefined,
      description:
        'If this component controls another component or element, set this to the ID of the controlled component or element',
    },
    ariaInvalid: {
      type: 'AriaInvalid',
      default: undefined,
      description:
        'Sets the `aria-invalid` attribute value on the wrapper element. When not provided, the `state` prop will control the attribute',
    },
    autocomplete: {
      type: 'string',
      default: 'false',
      description: "Sets the 'autocomplete' attribute value on the form control",
    },
    ariaLabel: {
      type: 'string',
      default: undefined,
      description: 'Sets the value of `aria-label` attribute on the rendered element',
    },
    ariaLive: {
      type: 'string',
      default: undefined,
      description:
        "When the rendered element is an `aria-live` region (for screen reader users), set to either 'polite' or 'assertive'",
    },
    ariaLabelledBy: {
      type: 'string',
      default: undefined,
      description:
        'The ID of the element that provides a label for this component. Used as the value for the `aria-labelledby` attribute',
    },
    autofocus: {
      default: false,
      description:
        'When set to `true`, attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the `autofocus` attribute on the control',
    },
    debounce: {
      type: 'Numberish',
      default: '0',
      description:
        "When set to a number of milliseconds greater than zero, will debounce the user input. Has no effect if prop 'lazy' is set",
    },
    debounceMaxWait: {
      type: 'Numberish',
      default: 'NaN',
      description: "The maximum time in milliseconds allowed to be delayed before it''s invoked",
    },
    disabled: {
      type: 'boolean',
      default: false,
      description:
        "When set to `true`, disables the component's functionality and places it in a disabled state",
    },
    disabledField: {
      type: 'string',
      default: 'disabled',
      description: 'Field name in the `options` array that should be used for the disabled state',
    },
    form: {
      type: 'string',
      default: undefined,
      description:
        'ID of the form that the form control belongs to. Sets the `form` attribute on the control',
    },
    formatter: {
      type: '(val: string, evt: Event) => string',
      default: 'undefined',
      description: 'Reference to a function for formatting the input',
    },
    htmlField: {
      type: 'string',
      default: 'html',
      description:
        'Field name in the `options` array that should be used for the html label instead of text field',
    },
    id: {
      type: 'string',
      default: undefined,
      description:
        'Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed',
    },
    lazyFormatter: {
      type: 'boolean',
      default: 'false',
      description:
        'When set, the input is formatted on blur instead of each keystroke (if there is a formatter specified)',
    },
    list: {
      type: 'string',
      default: 'undefined',
      description:
        'The ID of the associated datalist element or component (Datalist is Not Yet Implemented)',
    },
    name: {
      type: 'string',
      default: undefined,
      description: 'Sets the value of the `name` attribute on the form control',
    },
    options: {
      type: 'readonly CheckboxOptionRaw[]',
      default: '() => []',
      description: 'Array of items to render in the component',
    },
    plain: {
      type: 'boolean',
      default: false,
      description: 'Render the form control in plain mode, rather than custom styled mode',
    },
    placeholder: {
      type: 'string',
      default: "''",
      description: 'Sets the `placeholder` attribute value on the form control',
    },
    plaintext: {
      type: 'boolean',
      default: 'false',
      description:
        'Set the form control as readonly and renders the control to look like plain text (no borders)',
    },
    required: {
      type: 'boolean',
      default: undefined,
      description: 'Adds the `required` attribute to the form control',
    },
    readonly: {
      type: 'boolean',
      default: 'false',
      description: 'Sets the `readonly` attribute on the form control',
    },
    role: {
      type: 'string',
      default: undefined,
      description: 'Sets the ARIA attribute `role` to a specific value',
    },
    size: {
      type: 'Size',
      default: 'md',
      description: "Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'",
    },
    state: {
      type: 'boolean | null',
      default: undefined,
      description:
        'Controls the validation state appearance of the component. `true` for valid, `false` for invalid, or `null` for no validation state',
    },
    tag: {
      type: 'string',
      default: 'div',
      description: 'Specify the HTML tag to render instead of the default tag',
    },
    textField: {
      type: 'string',
      default: 'text',
      description: 'Field name in the `options` array that should be used for the text label',
    },
    textVariant: {
      type: 'TextColorVariant | null',
      default: null,
      description: 'Applies one of the Bootstrap theme color variants to the text',
    },
    title: {
      type: 'string',
      default: undefined,
      description: 'Text content to place in the title',
    },
    tooltip: {
      type: 'boolean',
      default: false,
      description: 'Renders the feedback text in a rudimentary tooltip style',
    },
    valueField: {
      type: 'string',
      default: 'value',
      description: 'Field name in the `options` array that should be used for the value',
    },
    variant: {
      type: 'ColorVariant | null',
      default: null,
      description: 'Applies one of the Bootstrap theme color variants to the component',
    },
  }) satisfies Record<string, PropertyReference>
