// src/utils/commonProps.ts
var commonProps = () => ({
  active: {
    type: 'boolean',
    default: false,
    description: 'When set to `true`, places the component in the active state with active styling',
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
    default: void 0,
    description:
      'If this component controls another component or element, set this to the ID of the controlled component or element',
  },
  ariaDescribedby: {
    type: 'string',
    default: void 0,
    description:
      'The ID of the element that provides a description for this component. Used as the value for the `aria-describedby` attribute',
  },
  ariaInvalid: {
    type: 'AriaInvalid',
    default: void 0,
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
    default: void 0,
    description: 'Sets the value of `aria-label` attribute on the rendered element',
  },
  ariaLive: {
    type: 'string',
    default: void 0,
    description:
      "When the rendered element is an `aria-live` region (for screen reader users), set to either 'polite' or 'assertive'",
  },
  ariaLabelledby: {
    type: 'string',
    default: void 0,
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
    description: 'Applies one of the Bootstrap theme color variants to background of the component',
  },
  bodyBgVariant: {
    type: 'ColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the body background',
  },
  bodyBorderVariant: {
    type: 'ColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the body border',
  },
  bodyClass: {
    type: 'ClassValue',
    default: void 0,
    description: 'CSS class (or classes) to apply to the body',
  },
  bodyTag: {
    type: 'string',
    default: 'div',
    description: 'Specify the HTML tag to render instead of the default tag for the body',
  },
  bodyTextVariant: {
    type: 'TextColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the body text',
  },
  bodyVariant: {
    type: 'ColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the body',
  },
  borderVariant: {
    type: 'ColorVariant | null',
    default: void 0,
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
    default: void 0,
    description: 'Text content to place in the footer',
  },
  footerBgVariant: {
    type: 'ColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the footer background',
  },
  footerBorderVariant: {
    type: 'ColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the footer border',
  },
  footerClass: {
    type: 'ClassValue',
    default: void 0,
    description: 'CSS class (or classes) to apply to the footer',
  },
  footerTag: {
    type: 'string',
    default: 'div',
    description: 'Specify the HTML tag to render instead of the default tag for the footer',
  },
  footerTextVariant: {
    type: 'TextColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the footer text',
  },
  footerVariant: {
    type: 'ColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the footer',
  },
  form: {
    type: 'string',
    default: void 0,
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
    default: void 0,
    description: 'Text content to place in the header',
  },
  headerBgVariant: {
    type: 'ColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the header background',
  },
  headerBorderVariant: {
    type: 'ColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the header border',
  },
  headerClass: {
    type: 'ClassValue',
    default: void 0,
    description: 'CSS class (or classes) to apply to the header',
  },
  headerTag: {
    type: 'string',
    default: 'div',
    description: 'Specify the HTML tag to render instead of the default tag for the header',
  },
  headerTextVariant: {
    type: 'TextColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the header text',
  },
  headerVariant: {
    type: 'ColorVariant | null',
    default: void 0,
    description: 'Applies one of the Bootstrap theme color variants to the header',
  },
  id: {
    type: 'string',
    default: void 0,
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
    default: void 0,
    description: 'Class or classes to apply to the inner link element',
  },
  list: {
    type: 'string',
    default: 'undefined',
    description: 'The ID of the associated datalist element or component',
  },
  name: {
    type: 'string',
    default: void 0,
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
    default: void 0,
    description: 'Adds the `required` attribute to the form control',
  },
  readonly: {
    type: 'boolean',
    default: 'false',
    description: 'Sets the `readonly` attribute on the form control',
  },
  role: {
    type: 'string',
    default: void 0,
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
    default: void 0,
    description:
      'Specifies the type of rounding to apply to the `bottom` corners of the component or its children',
  },
  roundedEnd: {
    type: 'boolean | RadiusElement',
    default: void 0,
    description:
      'Specifies the type of rounding to apply to the `end` corners of the component or its children',
  },
  roundedStart: {
    type: 'boolean | RadiusElement',
    default: void 0,
    description:
      'Specifies the type of rounding to apply to the `start` corners of the component or its children',
  },
  roundedTop: {
    type: 'boolean | RadiusElement',
    default: void 0,
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
    default: void 0,
    description: 'URL to set for the `src` attribute',
  },
  state: {
    type: 'ValidationState',
    default: void 0,
    description:
      'Controls the validation state appearance of the component. `true` for valid, `false` for invalid, or `null` for no validation state',
  },
  subtitle: {
    type: 'string',
    default: void 0,
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
    default: void 0,
    description: 'Text content to place in the title',
  },
  titleClass: {
    type: 'ClassValue',
    default: void 0,
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
    default: void 0,
    description: 'Attributes to be applied to the wrapper element',
  },
  wrapperClass: {
    type: 'ClassValue',
    default: void 0,
    description: 'CSS class (or classes) to add to the wrapper element',
  },
  placement: {
    type: 'Placement',
    default: 'bottom-start',
    description: 'Placement of a floating element',
  },
})
var singletonProps = Object.freeze(commonProps())
var buildCommonProps = (obj) => {
  if (!obj) return singletonProps
  const myObject = commonProps()
  Object.entries(obj).forEach(([key, value]) => {
    myObject[key] = {
      ...myObject[key],
      ...value,
    }
  })
  return Object.freeze(myObject)
}

// src/utils/objectUtils.ts
var pick = (objToPluck, keysToPluck) =>
  [...keysToPluck].reduce((memo, prop) => {
    memo[prop] = objToPluck[prop]
    return memo
  }, {})

// src/utils/imageProps.ts
var imageProps = {
  blank: {
    type: 'boolean',
    default: false,
    description: 'Creates a blank/transparent image via an SVG data URI',
  },
  blankColor: {
    type: 'string',
    default: 'transparent',
    description: 'Sets the color of the blank image to the CSS color value specified',
  },
  block: {
    type: 'boolean',
    default: false,
    description:
      'Forces the image to display as a block element rather than the browser default of inline-block element',
  },
  fluid: {
    type: 'boolean',
    default: false,
    description:
      "Makes the image responsive. The image will shrink as needed or grow up to the image's native width",
  },
  fluidGrow: {
    type: 'boolean',
    default: false,
    description:
      "Similar to the 'fluid' prop, but allows the image to scale up past its native width",
  },
  height: {
    type: 'Numberish',
    default: void 0,
    description: "The value to set on the image's 'height' attribute",
  },
  lazy: {
    type: 'boolean',
    default: false,
    description:
      'Enables lazy loading of the image via the `loading` attribute on the underlying image.',
  },
  placement: {
    type: "Extract<Placement, 'start' | 'end'> | 'center'",
    default: void 0,
    description:
      'Sets the alignment of the image to the start, end, or center, see above for details',
  },
  sizes: {
    type: 'string | string[]',
    default: void 0,
    description:
      'One or more strings separated by commas (or an array of strings), indicating a set of source sizes. Optionally used in combination with the srcset prop',
  },
  srcset: {
    type: 'string | string[]',
    default: void 0,
    description:
      'One or more strings separated by commas (or an array of strings), indicating possible image sources for the user agent to use',
  },
  thumbnail: {
    type: 'boolean',
    default: false,
    description: 'Adds a thumbnail border around the image',
  },
  width: {
    type: 'Numberish',
    default: void 0,
    description: "The value to set on the image's 'width' attribute",
  },
  ...pick(
    buildCommonProps({
      tag: {
        default: 'img',
      },
    }),
    ['alt', 'rounded', 'roundedBottom', 'roundedEnd', 'roundedStart', 'roundedTop', 'src', 'tag']
  ),
}

// src/data/components/image.data.ts
var image_data_default = {
  load: () => ({
    BImg: {
      styleSpec: {kind: 'BSVN-CLASS' /* BsvnClass */},
      sourcePath: '/BImg/BImg.vue',
      props: imageProps,
      emits: {},
      slots: {},
    },
  }),
}
export {image_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL2NvbW1vblByb3BzLnRzIiwgInNyYy91dGlscy9vYmplY3RVdGlscy50cyIsICJzcmMvdXRpbHMvaW1hZ2VQcm9wcy50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL2ltYWdlLmRhdGEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9jb21tb25Qcm9wcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvY29tbW9uUHJvcHMudHNcIjtpbXBvcnQgdHlwZSB7UHJvcFJlZmVyZW5jZX0gZnJvbSAnLi4vdHlwZXMnXG5cbmNvbnN0IGNvbW1vblByb3BzID0gKCkgPT5cbiAgKHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byBgdHJ1ZWAsIHBsYWNlcyB0aGUgY29tcG9uZW50IGluIHRoZSBhY3RpdmUgc3RhdGUgd2l0aCBhY3RpdmUgc3R5bGluZycsXG4gICAgfSxcbiAgICBhY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogJ2FjdGl2ZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZS4gVHlwaWNhbGx5IHlvdSB3aWxsIHdhbnQgdG8gc2V0IHRoaXMgdG8gY2xhc3MgbmFtZSAnYWN0aXZlJ1wiLFxuICAgIH0sXG4gICAgYWx0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdWYWx1ZSB0byBzZXQgZm9yIHRoZSBgYWx0YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXJpYUNvbnRyb2xzOiB7XG4gICAgICB0eXBlOiAnQXJpYUludmFsaWQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdJZiB0aGlzIGNvbXBvbmVudCBjb250cm9scyBhbm90aGVyIGNvbXBvbmVudCBvciBlbGVtZW50LCBzZXQgdGhpcyB0byB0aGUgSUQgb2YgdGhlIGNvbnRyb2xsZWQgY29tcG9uZW50IG9yIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgYXJpYURlc2NyaWJlZGJ5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYSBkZXNjcmlwdGlvbiBmb3IgdGhpcyBjb21wb25lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYGFyaWEtZGVzY3JpYmVkYnlgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhcmlhSW52YWxpZDoge1xuICAgICAgdHlwZTogJ0FyaWFJbnZhbGlkJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU2V0cyB0aGUgYGFyaWEtaW52YWxpZGAgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSB3cmFwcGVyIGVsZW1lbnQuIFdoZW4gbm90IHByb3ZpZGVkLCB0aGUgYHN0YXRlYCBwcm9wIHdpbGwgY29udHJvbCB0aGUgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGF1dG9DbG9zZToge1xuICAgICAgdHlwZTogXCJib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZSdcIixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRyb2xzIHRoZSBhdXRvbWF0aWMgY2xvc2luZyBvZiB0aGUgY29tcG9uZW50IHdoZW4gY2xpY2tpbmcuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgIH0sXG4gICAgYXV0b2NvbXBsZXRlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAnYXV0b2NvbXBsZXRlJyBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIGZvcm0gY29udHJvbFwiLFxuICAgIH0sXG4gICAgYXJpYUxhYmVsOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdmFsdWUgb2YgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgZWxlbWVudCcsXG4gICAgfSxcbiAgICBhcmlhTGl2ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHRoZSByZW5kZXJlZCBlbGVtZW50IGlzIGFuIGBhcmlhLWxpdmVgIHJlZ2lvbiAoZm9yIHNjcmVlbiByZWFkZXIgdXNlcnMpLCBzZXQgdG8gZWl0aGVyICdwb2xpdGUnIG9yICdhc3NlcnRpdmUnXCIsXG4gICAgfSxcbiAgICBhcmlhTGFiZWxsZWRieToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgbGFiZWwgZm9yIHRoaXMgY29tcG9uZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBhcmlhLWxhYmVsbGVkYnlgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhdXRvZm9jdXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byBgdHJ1ZWAsIGF0dGVtcHRzIHRvIGF1dG8tZm9jdXMgdGhlIGNvbnRyb2wgd2hlbiBpdCBpcyBtb3VudGVkLCBvciByZS1hY3RpdmF0ZWQgd2hlbiBpbiBhIGtlZXAtYWxpdmUuIERvZXMgbm90IHNldCB0aGUgYGF1dG9mb2N1c2AgYXR0cmlidXRlIG9uIHRoZSBjb250cm9sJyxcbiAgICB9LFxuICAgIGJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byBiYWNrZ3JvdW5kIG9mIHRoZSBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgYm9keUJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgYm9keUJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBib3JkZXInLFxuICAgIH0sXG4gICAgYm9keUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9keVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib2R5VGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgdGV4dCcsXG4gICAgfSxcbiAgICBib2R5VmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9yZGVyJyxcbiAgICB9LFxuICAgIGRlYm91bmNlOiB7XG4gICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgIGRlZmF1bHQ6ICcwJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0IHRvIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBncmVhdGVyIHRoYW4gemVybywgd2lsbCBkZWJvdW5jZSB0aGUgdXNlciBpbnB1dC4gSGFzIG5vIGVmZmVjdCBpZiBwcm9wICdsYXp5JyBpcyBzZXRcIixcbiAgICB9LFxuICAgIGRlYm91bmNlTWF4V2FpdDoge1xuICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICBkZWZhdWx0OiAnTmFOJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBtYXhpbXVtIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQnJ3MgaW52b2tlZFwiLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQgdG8gYHRydWVgLCBkaXNhYmxlcyB0aGUgY29tcG9uZW50J3MgZnVuY3Rpb25hbGl0eSBhbmQgcGxhY2VzIGl0IGluIGEgZGlzYWJsZWQgc3RhdGVcIixcbiAgICB9LFxuICAgIGRpc2FibGVkRmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2Rpc2FibGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBkaXNhYmxlZCBzdGF0ZScsXG4gICAgfSxcbiAgICBmbG9hdGluZzoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0LCByZW5kZXJzIGEgc2luZ2xlIGNvbnRyb2wgZm9ybSB3aXRoIGEgZmxvYXRpbmcgbGFiZWwuIFRoaXMgb25seSB3b3JrcyBmb3IgZm9ybXMgd2hlcmUgdGhlIGltbWVkaWF0ZSBjaGlsZHJlbiBhcmUgYSBsYWJlbCBhbmQgb25lIG9mIHRoZSBzdXBwb3J0ZWQgY29udHJvbHMuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgIH0sXG5cbiAgICBmb290ZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgZm9vdGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgYm9yZGVyJyxcbiAgICB9LFxuICAgIGZvb3RlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIHRleHQnLFxuICAgIH0sXG4gICAgZm9vdGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0lEIG9mIHRoZSBmb3JtIHRoYXQgdGhlIGZvcm0gY29udHJvbCBiZWxvbmdzIHRvLiBTZXRzIHRoZSBgZm9ybWAgYXR0cmlidXRlIG9uIHRoZSBjb250cm9sJyxcbiAgICB9LFxuICAgIGZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJyh2YWw6IHN0cmluZywgZXZ0OiBFdmVudCkgPT4gc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdSZWZlcmVuY2UgdG8gYSBmdW5jdGlvbiBmb3IgZm9ybWF0dGluZyB0aGUgaW5wdXQnLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyQmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGhlYWRlckJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIGJvcmRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciB0ZXh0JyxcbiAgICB9LFxuICAgIGhlYWRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVXNlZCB0byBzZXQgdGhlIGBpZGAgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBjb250ZW50LCBhbmQgdXNlZCBhcyB0aGUgYmFzZSB0byBnZW5lcmF0ZSBhbnkgYWRkaXRpb25hbCBlbGVtZW50IElEcyBhcyBuZWVkZWQnLFxuICAgIH0sXG4gICAgbGF6eUZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQsIHRoZSBpbnB1dCBpcyBmb3JtYXR0ZWQgb24gYmx1ciBpbnN0ZWFkIG9mIGVhY2gga2V5c3Ryb2tlIChpZiB0aGVyZSBpcyBhIGZvcm1hdHRlciBzcGVjaWZpZWQpJyxcbiAgICB9LFxuICAgIGxpbmtDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDbGFzcyBvciBjbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBpbm5lciBsaW5rIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIElEIG9mIHRoZSBhc3NvY2lhdGVkIGRhdGFsaXN0IGVsZW1lbnQgb3IgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYG5hbWVgIGF0dHJpYnV0ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIG5vQmFja2Ryb3A6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGJhY2tkcm9wJyxcbiAgICB9LFxuICAgIG5vRWxsaXBzaXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEbyBub3Qgc2hvdyBlbGxpcHNpcyBidXR0b25zJyxcbiAgICB9LFxuICAgIG5vR290b0VuZEJ1dHRvbnM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdIaWRlcyB0aGUgZ28gdG8gZmlyc3QgYW5kIGdvIHRvIGxhc3QgcGFnZSBidXR0b25zJyxcbiAgICB9LFxuICAgIG5vSGVhZGVyOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSAgaGVhZGVyJyxcbiAgICB9LFxuICAgIG5vSGVhZGVyQ2xvc2U6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGhlYWRlciBjbG9zZSBidXR0b24nLFxuICAgIH0sXG4gICAgbm9Ib3ZlclBhdXNlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgdG8gdHJ1ZSwgZGlzYWJsZXMgcGF1c2luZyB0aGUgdGltZXIgb24gaG92ZXIgYmVoYXZpb3InLFxuICAgIH0sXG4gICAgbm9SZXN1bWVPbkhvdmVyTGVhdmU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byB0cnVlLCB0aGUgdGltZXIgd2lsbCBub3QgcmVzdW1lIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgZWxlbWVudC4gSXQgd2lsbCBuZWVkIHRvIGJlIG1hbnVhbGx5IHJlc3VtZWQnLFxuICAgIH0sXG4gICAgbm92YWxpZGF0ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCBkaXNhYmxlcyBicm93c2VyIG5hdGl2ZSBIVE1MNSB2YWxpZGF0aW9uIG9uIGNvbnRyb2xzIGluIHRoZSBmb3JtJyxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6ICdyZWFkb25seSBDaGVja2JveE9wdGlvblJhd1tdJyxcbiAgICAgIGRlZmF1bHQ6ICcoKSA9PiBbXScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FycmF5IG9mIGl0ZW1zIHRvIHJlbmRlciBpbiB0aGUgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIHBsYWluOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVyIHRoZSBmb3JtIGNvbnRyb2wgaW4gcGxhaW4gbW9kZSwgcmF0aGVyIHRoYW4gY3VzdG9tIHN0eWxlZCBtb2RlJyxcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IFwiJydcIixcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICBwbGFpbnRleHQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NldCB0aGUgZm9ybSBjb250cm9sIGFzIHJlYWRvbmx5IGFuZCByZW5kZXJzIHRoZSBjb250cm9sIHRvIGxvb2sgbGlrZSBwbGFpbiB0ZXh0IChubyBib3JkZXJzKScsXG4gICAgfSxcbiAgICByZXF1aXJlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBZGRzIHRoZSBgcmVxdWlyZWRgIGF0dHJpYnV0ZSB0byB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBgcmVhZG9ubHlgIGF0dHJpYnV0ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBBUklBIGF0dHJpYnV0ZSBgcm9sZWAgdG8gYSBzcGVjaWZpYyB2YWx1ZScsXG4gICAgfSxcbiAgICByb3VuZGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuLiBUaGUgYHNxdWFyZWAgcHJvcCB0YWtlcyBwcmVjZWRlbmNlLiBSZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlscycsXG4gICAgfSxcbiAgICByb3VuZGVkQm90dG9tOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBib3R0b21gIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZEVuZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgZW5kYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRTdGFydDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgc3RhcnRgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZFRvcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgdG9wYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6ICdTaXplJyxcbiAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXQgdGhlIHNpemUgb2YgdGhlIGNvbXBvbmVudCdzIGFwcGVhcmFuY2UuICdzbScsICdtZCcgKGRlZmF1bHQpLCBvciAnbGcnXCIsXG4gICAgfSxcbiAgICBzcmM6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdVUkwgdG8gc2V0IGZvciB0aGUgYHNyY2AgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIHN0YXRlOiB7XG4gICAgICB0eXBlOiAnVmFsaWRhdGlvblN0YXRlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQ29udHJvbHMgdGhlIHZhbGlkYXRpb24gc3RhdGUgYXBwZWFyYW5jZSBvZiB0aGUgY29tcG9uZW50LiBgdHJ1ZWAgZm9yIHZhbGlkLCBgZmFsc2VgIGZvciBpbnZhbGlkLCBvciBgbnVsbGAgZm9yIG5vIHZhbGlkYXRpb24gc3RhdGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIHN1YnRpdGxlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdoNicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHN1YnRpdGxlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiAnYm9keS1zZWNvbmRhcnknLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBzdWJ0aXRsZSB0ZXh0JyxcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnJyxcbiAgICB9LFxuICAgIHRleHRGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdGV4dCBsYWJlbCcsXG4gICAgfSxcbiAgICB0ZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIHRleHQnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRpdGxlQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdGl0bGVUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2g0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlcnMgdGhlIGZlZWRiYWNrIHRleHQgaW4gYSBydWRpbWVudGFyeSB0b29sdGlwIHN0eWxlJyxcbiAgICB9LFxuICAgIHZhbGlkYXRlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCwgYWRkcyB0aGUgQm9vdHN0cmFwIGNsYXNzICd3YXMtdmFsaWRhdGVkJyBvbiB0aGUgZm9ybSwgdHJpZ2dlcmluZyB0aGUgbmF0aXZlIGJyb3dzZXIgdmFsaWRhdGlvbiBzdGF0ZXNcIixcbiAgICB9LFxuICAgIHZhbHVlRmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSB2YWx1ZScsXG4gICAgfSxcbiAgICB2YXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBjb21wb25lbnQuIFdoZW4gaW1wbGVtZW50ZWQgYGJnLXZhcmlhbnRgIGFuZCBgdGV4dC12YXJpYW50YCB3aWxsIHRha2UgcHJlY2VkZW5jZScsXG4gICAgfSxcbiAgICB3cmFwcGVyQXR0cnM6IHtcbiAgICAgIHR5cGU6ICdSZWFkb25seTxBdHRyc1ZhbHVlPicsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0F0dHJpYnV0ZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgd3JhcHBlciBlbGVtZW50JyxcbiAgICB9LFxuICAgIHdyYXBwZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFkZCB0byB0aGUgd3JhcHBlciBlbGVtZW50JyxcbiAgICB9LFxuICAgIHBsYWNlbWVudDoge1xuICAgICAgdHlwZTogJ1BsYWNlbWVudCcsXG4gICAgICBkZWZhdWx0OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGxhY2VtZW50IG9mIGEgZmxvYXRpbmcgZWxlbWVudCcsXG4gICAgfSxcbiAgfSkgYXMgY29uc3RcblxuY29uc3Qgc2luZ2xldG9uUHJvcHMgPSBPYmplY3QuZnJlZXplKGNvbW1vblByb3BzKCkpXG5cbmV4cG9ydCBjb25zdCBidWlsZENvbW1vblByb3BzID0gKFxuICBvYmo/OiBQYXJ0aWFsPFJlY29yZDxrZXlvZiB0eXBlb2Ygc2luZ2xldG9uUHJvcHMsIFBhcnRpYWw8UHJvcFJlZmVyZW5jZT4+PlxuKTogUmVhZG9ubHk8dHlwZW9mIHNpbmdsZXRvblByb3BzPiA9PiB7XG4gIGlmICghb2JqKSByZXR1cm4gc2luZ2xldG9uUHJvcHNcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBjb25zdCBteU9iamVjdCA9IGNvbW1vblByb3BzKCkgYXMgUmVjb3JkPHN0cmluZywgYW55PlxuXG4gIC8vIE1lcmdlIHRoZSBwcm92aWRlZCBvYmplY3QgaW50byB0aGUgY29tbW9uIHByb3BzXG4gIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgbXlPYmplY3Rba2V5XSA9IHtcbiAgICAgIC4uLm15T2JqZWN0W2tleV0sXG4gICAgICAuLi52YWx1ZSxcbiAgICB9XG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobXlPYmplY3QgYXMgYW55KVxufVxuXG5leHBvcnQgY29uc3QgY29tbW9uRW1pdHMgPSB7XG4gIGNhbmNlbDoge30sXG4gIG9rOiB7fSxcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL29iamVjdFV0aWxzLnRzXCI7ZXhwb3J0IGNvbnN0IHBpY2sgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IFBpY2s8QSwgQltudW1iZXJdPiA9PlxuICBbLi4ua2V5c1RvUGx1Y2tdLnJlZHVjZShcbiAgICAobWVtbywgcHJvcCkgPT4ge1xuICAgICAgbWVtb1twcm9wXSA9IG9ialRvUGx1Y2tbcHJvcF1cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSxcbiAgICB7fSBhcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+XG4gICkgYXMgUGljazxBLCBCW251bWJlcl0+XG5cbmV4cG9ydCBjb25zdCBvbWl0ID0gPFxuICBBIGV4dGVuZHMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPixcbiAgY29uc3QgQiBleHRlbmRzIFJlYWRvbmx5QXJyYXk8UHJvcGVydHlLZXk+LFxuPihcbiAgb2JqVG9QbHVjazogUmVhZG9ubHk8QT4sXG4gIGtleXNUb1BsdWNrOiBSZWFkb25seTxCPiB8IHJlYWRvbmx5IChrZXlvZiBBKVtdXG4pOiBPbWl0PEEsIEJbbnVtYmVyXT4gPT5cbiAgT2JqZWN0LmtleXMob2JqVG9QbHVjaylcbiAgICAuZmlsdGVyKChrZXkpID0+ICFrZXlzVG9QbHVjay5tYXAoKGVsKSA9PiBlbC50b1N0cmluZygpKS5pbmNsdWRlcyhrZXkpKVxuICAgIC5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiAoey4uLnJlc3VsdCwgW2tleV06IG9ialRvUGx1Y2tba2V5XX0pLCB7fSBhcyBPbWl0PEEsIEJbbnVtYmVyXT4pXG5cbi8vIENvbnZlcnRzIFBhc2NhbENhc2Ugb3IgY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcbmV4cG9ydCBjb25zdCBrZWJhYkNhc2UgPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC9cXEIoW0EtWl0pL2csICctJDEnKS50b0xvd2VyQ2FzZSgpXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2ltYWdlUHJvcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2ltYWdlUHJvcHMudHNcIjtpbXBvcnQgdHlwZSB7QkltZ1Byb3BzfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5pbXBvcnQgdHlwZSB7UHJvcFJlY29yZH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQge2J1aWxkQ29tbW9uUHJvcHN9IGZyb20gJy4vY29tbW9uUHJvcHMnXG5pbXBvcnQge3BpY2t9IGZyb20gJy4vb2JqZWN0VXRpbHMnXG5cbmV4cG9ydCBjb25zdCBsaW5rVG8gPSAnL2RvY3MvY29tcG9uZW50cy9pbWFnZSdcblxuZXhwb3J0IGNvbnN0IGltYWdlUHJvcHMgPSB7XG4gIGJsYW5rOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnQ3JlYXRlcyBhIGJsYW5rL3RyYW5zcGFyZW50IGltYWdlIHZpYSBhbiBTVkcgZGF0YSBVUkknLFxuICB9LFxuICBibGFua0NvbG9yOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3RyYW5zcGFyZW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGNvbG9yIG9mIHRoZSBibGFuayBpbWFnZSB0byB0aGUgQ1NTIGNvbG9yIHZhbHVlIHNwZWNpZmllZCcsXG4gIH0sXG4gIGJsb2NrOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0ZvcmNlcyB0aGUgaW1hZ2UgdG8gZGlzcGxheSBhcyBhIGJsb2NrIGVsZW1lbnQgcmF0aGVyIHRoYW4gdGhlIGJyb3dzZXIgZGVmYXVsdCBvZiBpbmxpbmUtYmxvY2sgZWxlbWVudCcsXG4gIH0sXG4gIGZsdWlkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNYWtlcyB0aGUgaW1hZ2UgcmVzcG9uc2l2ZS4gVGhlIGltYWdlIHdpbGwgc2hyaW5rIGFzIG5lZWRlZCBvciBncm93IHVwIHRvIHRoZSBpbWFnZSdzIG5hdGl2ZSB3aWR0aFwiLFxuICB9LFxuICBmbHVpZEdyb3c6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNpbWlsYXIgdG8gdGhlICdmbHVpZCcgcHJvcCwgYnV0IGFsbG93cyB0aGUgaW1hZ2UgdG8gc2NhbGUgdXAgcGFzdCBpdHMgbmF0aXZlIHdpZHRoXCIsXG4gIH0sXG4gIGhlaWdodDoge1xuICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpbWFnZSdzICdoZWlnaHQnIGF0dHJpYnV0ZVwiLFxuICB9LFxuICBsYXp5OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VuYWJsZXMgbGF6eSBsb2FkaW5nIG9mIHRoZSBpbWFnZSB2aWEgdGhlIGBsb2FkaW5nYCBhdHRyaWJ1dGUgb24gdGhlIHVuZGVybHlpbmcgaW1hZ2UuJyxcbiAgfSxcbiAgcGxhY2VtZW50OiB7XG4gICAgdHlwZTogXCJFeHRyYWN0PFBsYWNlbWVudCwgJ3N0YXJ0JyB8ICdlbmQnPiB8ICdjZW50ZXInXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1NldHMgdGhlIGFsaWdubWVudCBvZiB0aGUgaW1hZ2UgdG8gdGhlIHN0YXJ0LCBlbmQsIG9yIGNlbnRlciwgc2VlIGFib3ZlIGZvciBkZXRhaWxzJyxcbiAgfSxcbiAgc2l6ZXM6IHtcbiAgICB0eXBlOiAnc3RyaW5nIHwgc3RyaW5nW10nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdPbmUgb3IgbW9yZSBzdHJpbmdzIHNlcGFyYXRlZCBieSBjb21tYXMgKG9yIGFuIGFycmF5IG9mIHN0cmluZ3MpLCBpbmRpY2F0aW5nIGEgc2V0IG9mIHNvdXJjZSBzaXplcy4gT3B0aW9uYWxseSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggdGhlIHNyY3NldCBwcm9wJyxcbiAgfSxcbiAgc3Jjc2V0OiB7XG4gICAgdHlwZTogJ3N0cmluZyB8IHN0cmluZ1tdJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnT25lIG9yIG1vcmUgc3RyaW5ncyBzZXBhcmF0ZWQgYnkgY29tbWFzIChvciBhbiBhcnJheSBvZiBzdHJpbmdzKSwgaW5kaWNhdGluZyBwb3NzaWJsZSBpbWFnZSBzb3VyY2VzIGZvciB0aGUgdXNlciBhZ2VudCB0byB1c2UnLFxuICB9LFxuICB0aHVtYm5haWw6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdBZGRzIGEgdGh1bWJuYWlsIGJvcmRlciBhcm91bmQgdGhlIGltYWdlJyxcbiAgfSxcbiAgd2lkdGg6IHtcbiAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIHZhbHVlIHRvIHNldCBvbiB0aGUgaW1hZ2UncyAnd2lkdGgnIGF0dHJpYnV0ZVwiLFxuICB9LFxuICAuLi5waWNrKFxuICAgIGJ1aWxkQ29tbW9uUHJvcHMoe1xuICAgICAgdGFnOiB7XG4gICAgICAgIGRlZmF1bHQ6ICdpbWcnLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBbJ2FsdCcsICdyb3VuZGVkJywgJ3JvdW5kZWRCb3R0b20nLCAncm91bmRlZEVuZCcsICdyb3VuZGVkU3RhcnQnLCAncm91bmRlZFRvcCcsICdzcmMnLCAndGFnJ11cbiAgKSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkltZ1Byb3BzPlxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2ltYWdlLmRhdGEudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50cy9pbWFnZS5kYXRhLnRzXCI7aW1wb3J0IHtpbWFnZVByb3BzfSBmcm9tICcuLi8uLi91dGlscy9pbWFnZVByb3BzJ1xuaW1wb3J0IHt0eXBlIENvbXBvbmVudFJlZmVyZW5jZSwgU3R5bGVLaW5kfSBmcm9tICcuLi8uLi90eXBlcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2FkOiAoKTogQ29tcG9uZW50UmVmZXJlbmNlID0+ICh7XG4gICAgQkltZzoge1xuICAgICAgc3R5bGVTcGVjOiB7a2luZDogU3R5bGVLaW5kLkJzdm5DbGFzc30sXG4gICAgICBzb3VyY2VQYXRoOiAnL0JJbWcvQkltZy52dWUnLFxuICAgICAgcHJvcHM6IGltYWdlUHJvcHMsXG4gICAgICBlbWl0czoge30sXG4gICAgICBzbG90czoge30sXG4gICAgfSxcbiAgfSksXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsSUFBTSxjQUFjLE9BQ2pCO0FBQUEsRUFDQyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxnQkFBZ0I7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxtQkFBbUI7QUFBQSxJQUNqQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EscUJBQXFCO0FBQUEsSUFDbkIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsbUJBQW1CO0FBQUEsSUFDakIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxxQkFBcUI7QUFBQSxJQUNuQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxtQkFBbUI7QUFBQSxJQUNqQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLElBQUk7QUFBQSxJQUNGLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxlQUFlO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxrQkFBa0I7QUFBQSxJQUNoQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0Esc0JBQXNCO0FBQUEsSUFDcEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLHFCQUFxQjtBQUFBLElBQ25CLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUNGO0FBRUYsSUFBTSxpQkFBaUIsT0FBTyxPQUFPLFlBQVksQ0FBQztBQUUzQyxJQUFNLG1CQUFtQixDQUM5QixRQUNvQztBQUNwQyxNQUFJLENBQUMsSUFBSyxRQUFPO0FBR2pCLFFBQU0sV0FBVyxZQUFZO0FBRzdCLFNBQU8sUUFBUSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU07QUFDNUMsYUFBUyxHQUFHLElBQUk7QUFBQSxNQUNkLEdBQUcsU0FBUyxHQUFHO0FBQUEsTUFDZixHQUFHO0FBQUEsSUFDTDtBQUFBLEVBQ0YsQ0FBQztBQUdELFNBQU8sT0FBTyxPQUFPLFFBQWU7QUFDdEM7OztBQzlkMFosSUFBTSxPQUFPLENBSXJhLFlBQ0EsZ0JBRUEsQ0FBQyxHQUFHLFdBQVcsRUFBRTtBQUFBLEVBQ2YsQ0FBQyxNQUFNLFNBQVM7QUFDZCxTQUFLLElBQUksSUFBSSxXQUFXLElBQUk7QUFDNUIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLENBQUM7QUFDSDs7O0FDTkssSUFBTSxhQUFhO0FBQUEsRUFDeEIsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsR0FBRztBQUFBLElBQ0QsaUJBQWlCO0FBQUEsTUFDZixLQUFLO0FBQUEsUUFDSCxTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsQ0FBQyxPQUFPLFdBQVcsaUJBQWlCLGNBQWMsZ0JBQWdCLGNBQWMsT0FBTyxLQUFLO0FBQUEsRUFDOUY7QUFDRjs7O0FDaEZBLElBQU8scUJBQVE7QUFBQSxFQUNiLE1BQU0sT0FBMkI7QUFBQSxJQUMvQixNQUFNO0FBQUEsTUFDSixXQUFXLEVBQUMsbUNBQXlCO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1AsT0FBTyxDQUFDO0FBQUEsTUFDUixPQUFPLENBQUM7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
