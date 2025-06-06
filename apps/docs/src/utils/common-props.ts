import {type PropertyReference} from '../types'

export const commonProps = () =>
  ({
    active: {
      type: 'boolean',
      default: false,
      description:
        'When set to `true`, places the component in the active state with active styling',
    },
    activeClass: {
      type: 'ClassValue',
      default: 'active',
      description:
        "Configure the active CSS class applied when the link is active. Typically you will want to set this to class name 'active'",
    },
    alt: {
      type: 'string',
      default: 'undefined',
      description: 'Value to set for the `alt` attribute',
    },
    ariaControls: {
      type: 'AriaInvalid',
      default: undefined,
      description:
        'If this component controls another component or element, set this to the ID of the controlled component or element',
    },
    ariaDescribedby: {
      type: 'string',
      default: undefined,
      description:
        'The ID of the element that provides a description for this component. Used as the value for the `aria-describedby` attribute',
    },
    ariaInvalid: {
      type: 'AriaInvalid',
      default: undefined,
      description:
        'Sets the `aria-invalid` attribute value on the wrapper element. When not provided, the `state` prop will control the attribute',
    },
    autoClose: {
      type: "boolean | 'inside' | 'outside'",
      default: true,
      description:
        'Controls the automatic closing of the component when clicking. See above for details.',
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
    ariaLabelledby: {
      type: 'string',
      default: undefined,
      description:
        'The ID of the element that provides a label for this component. Used as the value for the `aria-labelledby` attribute',
    },
    autofocus: {
      type: 'boolean',
      default: false,
      description:
        'When set to `true`, attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the `autofocus` attribute on the control',
    },
    bgVariant: {
      type: 'ColorVariant | null',
      default: null,
      description:
        'Applies one of the Bootstrap theme color variants to background of the component',
    },
    bodyBgVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the body background',
    },
    bodyBorderVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the body border',
    },
    bodyClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'CSS class (or classes) to apply to the body',
    },
    bodyTag: {
      type: 'string',
      default: 'div',
      description: 'Specify the HTML tag to render instead of the default tag for the body',
    },
    bodyTextVariant: {
      type: 'TextColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the body text',
    },
    bodyVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the body',
    },
    borderVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the border',
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
    floating: {
      type: 'boolean',
      default: false,
      description:
        'When set, renders a single control form with a floating label. This only works for forms where the immediate children are a label and one of the supported controls. See above for details.',
    },

    footer: {
      type: 'string',
      default: undefined,
      description: 'Text content to place in the footer',
    },
    footerBgVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the footer background',
    },
    footerBorderVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the footer border',
    },
    footerClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'CSS class (or classes) to apply to the footer',
    },
    footerTag: {
      type: 'string',
      default: 'div',
      description: 'Specify the HTML tag to render instead of the default tag for the footer',
    },
    footerTextVariant: {
      type: 'TextColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the footer text',
    },
    footerVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the footer',
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
    header: {
      type: 'string',
      default: undefined,
      description: 'Text content to place in the header',
    },
    headerBgVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the header background',
    },
    headerBorderVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the header border',
    },
    headerClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'CSS class (or classes) to apply to the header',
    },
    headerTag: {
      type: 'string',
      default: 'div',
      description: 'Specify the HTML tag to render instead of the default tag for the header',
    },
    headerTextVariant: {
      type: 'TextColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the header text',
    },
    headerVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Applies one of the Bootstrap theme color variants to the header',
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
    linkClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'Class or classes to apply to the inner link element',
    },
    list: {
      type: 'string',
      default: 'undefined',
      description: 'The ID of the associated datalist element or component',
    },
    name: {
      type: 'string',
      default: undefined,
      description: 'Sets the value of the `name` attribute on the form control',
    },
    noBackdrop: {
      type: 'boolean',
      default: false,
      description: 'Disables rendering of the backdrop',
    },
    noEllipsis: {
      type: 'boolean',
      default: false,
      description: 'Do not show ellipsis buttons',
    },
    noGotoEndButtons: {
      type: 'boolean',
      default: false,
      description: 'Hides the go to first and go to last page buttons',
    },
    noHeader: {
      type: 'boolean',
      default: false,
      description: 'Disables rendering of the  header',
    },
    noHeaderClose: {
      type: 'boolean',
      default: false,
      description: 'Disables rendering of the header close button',
    },
    noHoverPause: {
      type: 'boolean',
      default: false,
      description: 'When set to true, disables pausing the timer on hover behavior',
    },
    noResumeOnHoverLeave: {
      type: 'boolean',
      default: false,
      description:
        'When set to true, the timer will not resume when the mouse leaves the element. It will need to be manually resumed',
    },
    novalidate: {
      type: 'boolean',
      default: false,
      description: 'When set, disables browser native HTML5 validation on controls in the form',
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
    rounded: {
      type: 'boolean | RadiusElement',
      default: 'false',
      description:
        'Specifies the type of rounding to apply to the component or its children. The `square` prop takes precedence. Refer to the documentation for details',
    },
    roundedBottom: {
      type: 'boolean | RadiusElement',
      default: undefined,
      description:
        'Specifies the type of rounding to apply to the `bottom` corners of the component or its children',
    },
    roundedEnd: {
      type: 'boolean | RadiusElement',
      default: undefined,
      description:
        'Specifies the type of rounding to apply to the `end` corners of the component or its children',
    },
    roundedStart: {
      type: 'boolean | RadiusElement',
      default: undefined,
      description:
        'Specifies the type of rounding to apply to the `start` corners of the component or its children',
    },
    roundedTop: {
      type: 'boolean | RadiusElement',
      default: undefined,
      description:
        'Specifies the type of rounding to apply to the `top` corners of the component or its children',
    },
    size: {
      type: 'Size',
      default: 'md',
      description: "Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'",
    },
    src: {
      type: 'string',
      default: undefined,
      description: 'URL to set for the `src` attribute',
    },
    state: {
      type: 'ValidationState',
      default: undefined,
      description:
        'Controls the validation state appearance of the component. `true` for valid, `false` for invalid, or `null` for no validation state',
    },
    subtitle: {
      type: 'string',
      default: undefined,
      description: 'Text content to place in the subtitle',
    },
    subtitleTag: {
      type: 'string',
      default: 'h6',
      description: 'Specify the HTML tag to render instead of the default tag for the subtitle',
    },
    subtitleTextVariant: {
      type: 'TextColorVariant | null',
      default: 'body-secondary',
      description: 'Applies one of the Bootstrap theme color variants to the subtitle text',
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
    titleClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'CSS class (or classes) to apply to the title',
    },
    titleTag: {
      type: 'string',
      default: 'h4',
      description: 'Specify the HTML tag to render instead of the default tag for the title',
    },
    tooltip: {
      type: 'boolean',
      default: false,
      description: 'Renders the feedback text in a rudimentary tooltip style',
    },
    validated: {
      type: 'boolean',
      default: false,
      description:
        "When set, adds the Bootstrap class 'was-validated' on the form, triggering the native browser validation states",
    },
    valueField: {
      type: 'string',
      default: 'value',
      description: 'Field name in the `options` array that should be used for the value',
    },
    variant: {
      type: 'ColorVariant | null',
      default: null,
      description:
        'Applies one of the Bootstrap theme color variants to the component. When implemented `bg-variant` and `text-variant` will take precedence',
    },
    wrapperAttrs: {
      type: 'Readonly<AttrsValue>',
      default: undefined,
      description: 'Attributes to be applied to the wrapper element',
    },
    wrapperClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'CSS class (or classes) to add to the wrapper element',
    },
    placement: {
      type: 'Placement',
      default: 'bottom-start',
      description: 'Placement of a floating element',
    },
  }) satisfies Record<string, PropertyReference>
