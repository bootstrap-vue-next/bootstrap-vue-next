// src/utils/objectUtils.ts
var pick = (objToPluck, keysToPluck) =>
  [...keysToPluck].reduce((memo, prop) => {
    memo[prop] = objToPluck[prop]
    return memo
  }, {})

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

// src/data/components/buttonGroup.data.ts
var buttonGroup_data_default = {
  load: () => ({
    BButtonGroup: {
      styleSpec: {kind: 'OVERRIDE-CLASS' /* OverrideClass */, value: '.btn-group'},
      sourcePath: '/BButton/BButtonGroup.vue',
      props: {
        ...pick(buildCommonProps(), ['ariaLabel', 'size', 'tag']),
        vertical: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'When set, renders the button group in vertical mode',
        },
      },
      slots: {
        default: {
          description: 'Content (buttons) to place in the button group',
        },
      },
    },
  }),
}
export {buttonGroup_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL29iamVjdFV0aWxzLnRzIiwgInNyYy91dGlscy9jb21tb25Qcm9wcy50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL2J1dHRvbkdyb3VwLmRhdGEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9vYmplY3RVdGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtleHBvcnQgY29uc3QgcGljayA9IDxcbiAgQSBleHRlbmRzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj4sXG4gIGNvbnN0IEIgZXh0ZW5kcyBSZWFkb25seUFycmF5PFByb3BlcnR5S2V5Pixcbj4oXG4gIG9ialRvUGx1Y2s6IFJlYWRvbmx5PEE+LFxuICBrZXlzVG9QbHVjazogUmVhZG9ubHk8Qj4gfCByZWFkb25seSAoa2V5b2YgQSlbXVxuKTogUGljazxBLCBCW251bWJlcl0+ID0+XG4gIFsuLi5rZXlzVG9QbHVja10ucmVkdWNlKFxuICAgIChtZW1vLCBwcm9wKSA9PiB7XG4gICAgICBtZW1vW3Byb3BdID0gb2JqVG9QbHVja1twcm9wXVxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LFxuICAgIHt9IGFzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj5cbiAgKSBhcyBQaWNrPEEsIEJbbnVtYmVyXT5cblxuZXhwb3J0IGNvbnN0IG9taXQgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IE9taXQ8QSwgQltudW1iZXJdPiA9PlxuICBPYmplY3Qua2V5cyhvYmpUb1BsdWNrKVxuICAgIC5maWx0ZXIoKGtleSkgPT4gIWtleXNUb1BsdWNrLm1hcCgoZWwpID0+IGVsLnRvU3RyaW5nKCkpLmluY2x1ZGVzKGtleSkpXG4gICAgLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+ICh7Li4ucmVzdWx0LCBba2V5XTogb2JqVG9QbHVja1trZXldfSksIHt9IGFzIE9taXQ8QSwgQltudW1iZXJdPilcblxuLy8gQ29udmVydHMgUGFzY2FsQ2FzZSBvciBjYW1lbENhc2UgdG8ga2ViYWItY2FzZVxuZXhwb3J0IGNvbnN0IGtlYmFiQ2FzZSA9IChzdHI6IHN0cmluZykgPT4gc3RyLnJlcGxhY2UoL1xcQihbQS1aXSkvZywgJy0kMScpLnRvTG93ZXJDYXNlKClcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvY29tbW9uUHJvcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2NvbW1vblByb3BzLnRzXCI7aW1wb3J0IHR5cGUge1Byb3BSZWZlcmVuY2V9IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCBjb21tb25Qcm9wcyA9ICgpID0+XG4gICh7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gYHRydWVgLCBwbGFjZXMgdGhlIGNvbXBvbmVudCBpbiB0aGUgYWN0aXZlIHN0YXRlIHdpdGggYWN0aXZlIHN0eWxpbmcnLFxuICAgIH0sXG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6ICdhY3RpdmUnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiQ29uZmlndXJlIHRoZSBhY3RpdmUgQ1NTIGNsYXNzIGFwcGxpZWQgd2hlbiB0aGUgbGluayBpcyBhY3RpdmUuIFR5cGljYWxseSB5b3Ugd2lsbCB3YW50IHRvIHNldCB0aGlzIHRvIGNsYXNzIG5hbWUgJ2FjdGl2ZSdcIixcbiAgICB9LFxuICAgIGFsdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmFsdWUgdG8gc2V0IGZvciB0aGUgYGFsdGAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGFyaWFDb250cm9sczoge1xuICAgICAgdHlwZTogJ0FyaWFJbnZhbGlkJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnSWYgdGhpcyBjb21wb25lbnQgY29udHJvbHMgYW5vdGhlciBjb21wb25lbnQgb3IgZWxlbWVudCwgc2V0IHRoaXMgdG8gdGhlIElEIG9mIHRoZSBjb250cm9sbGVkIGNvbXBvbmVudCBvciBlbGVtZW50JyxcbiAgICB9LFxuICAgIGFyaWFEZXNjcmliZWRieToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgZGVzY3JpcHRpb24gZm9yIHRoaXMgY29tcG9uZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBhcmlhLWRlc2NyaWJlZGJ5YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXJpYUludmFsaWQ6IHtcbiAgICAgIHR5cGU6ICdBcmlhSW52YWxpZCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NldHMgdGhlIGBhcmlhLWludmFsaWRgIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgd3JhcHBlciBlbGVtZW50LiBXaGVuIG5vdCBwcm92aWRlZCwgdGhlIGBzdGF0ZWAgcHJvcCB3aWxsIGNvbnRyb2wgdGhlIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhdXRvQ2xvc2U6IHtcbiAgICAgIHR5cGU6IFwiYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnXCIsXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb250cm9scyB0aGUgYXV0b21hdGljIGNsb3Npbmcgb2YgdGhlIGNvbXBvbmVudCB3aGVuIGNsaWNraW5nLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgICB9LFxuICAgIGF1dG9jb21wbGV0ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ2F1dG9jb21wbGV0ZScgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSBmb3JtIGNvbnRyb2xcIixcbiAgICB9LFxuICAgIGFyaWFMYWJlbDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHZhbHVlIG9mIGBhcmlhLWxhYmVsYCBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgYXJpYUxpdmU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiB0aGUgcmVuZGVyZWQgZWxlbWVudCBpcyBhbiBgYXJpYS1saXZlYCByZWdpb24gKGZvciBzY3JlZW4gcmVhZGVyIHVzZXJzKSwgc2V0IHRvIGVpdGhlciAncG9saXRlJyBvciAnYXNzZXJ0aXZlJ1wiLFxuICAgIH0sXG4gICAgYXJpYUxhYmVsbGVkYnk6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIGxhYmVsIGZvciB0aGlzIGNvbXBvbmVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgYXJpYS1sYWJlbGxlZGJ5YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXV0b2ZvY3VzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gYHRydWVgLCBhdHRlbXB0cyB0byBhdXRvLWZvY3VzIHRoZSBjb250cm9sIHdoZW4gaXQgaXMgbW91bnRlZCwgb3IgcmUtYWN0aXZhdGVkIHdoZW4gaW4gYSBrZWVwLWFsaXZlLiBEb2VzIG5vdCBzZXQgdGhlIGBhdXRvZm9jdXNgIGF0dHJpYnV0ZSBvbiB0aGUgY29udHJvbCcsXG4gICAgfSxcbiAgICBiZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gYmFja2dyb3VuZCBvZiB0aGUgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIGJvZHlCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGJvZHlCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgYm9yZGVyJyxcbiAgICB9LFxuICAgIGJvZHlDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvZHlUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9keVRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IHRleHQnLFxuICAgIH0sXG4gICAgYm9keVZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvcmRlcicsXG4gICAgfSxcbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICBkZWZhdWx0OiAnMCcsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCB0byBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZ3JlYXRlciB0aGFuIHplcm8sIHdpbGwgZGVib3VuY2UgdGhlIHVzZXIgaW5wdXQuIEhhcyBubyBlZmZlY3QgaWYgcHJvcCAnbGF6eScgaXMgc2V0XCIsXG4gICAgfSxcbiAgICBkZWJvdW5jZU1heFdhaXQ6IHtcbiAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgZGVmYXVsdDogJ05hTicsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbWF4aW11bSB0aW1lIGluIG1pbGxpc2Vjb25kcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0JydzIGludm9rZWRcIixcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0IHRvIGB0cnVlYCwgZGlzYWJsZXMgdGhlIGNvbXBvbmVudCdzIGZ1bmN0aW9uYWxpdHkgYW5kIHBsYWNlcyBpdCBpbiBhIGRpc2FibGVkIHN0YXRlXCIsXG4gICAgfSxcbiAgICBkaXNhYmxlZEZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXNhYmxlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgZGlzYWJsZWQgc3RhdGUnLFxuICAgIH0sXG4gICAgZmxvYXRpbmc6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCwgcmVuZGVycyBhIHNpbmdsZSBjb250cm9sIGZvcm0gd2l0aCBhIGZsb2F0aW5nIGxhYmVsLiBUaGlzIG9ubHkgd29ya3MgZm9yIGZvcm1zIHdoZXJlIHRoZSBpbW1lZGlhdGUgY2hpbGRyZW4gYXJlIGEgbGFiZWwgYW5kIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGNvbnRyb2xzLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgICB9LFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyQmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGZvb3RlckJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIGJvcmRlcicsXG4gICAgfSxcbiAgICBmb290ZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciB0ZXh0JyxcbiAgICB9LFxuICAgIGZvb3RlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdJRCBvZiB0aGUgZm9ybSB0aGF0IHRoZSBmb3JtIGNvbnRyb2wgYmVsb25ncyB0by4gU2V0cyB0aGUgYGZvcm1gIGF0dHJpYnV0ZSBvbiB0aGUgY29udHJvbCcsXG4gICAgfSxcbiAgICBmb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICcodmFsOiBzdHJpbmcsIGV2dDogRXZlbnQpID0+IHN0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVmZXJlbmNlIHRvIGEgZnVuY3Rpb24gZm9yIGZvcm1hdHRpbmcgdGhlIGlucHV0JyxcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlckJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBoZWFkZXJCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBib3JkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlclRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlclRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgdGV4dCcsXG4gICAgfSxcbiAgICBoZWFkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1VzZWQgdG8gc2V0IHRoZSBgaWRgIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgY29udGVudCwgYW5kIHVzZWQgYXMgdGhlIGJhc2UgdG8gZ2VuZXJhdGUgYW55IGFkZGl0aW9uYWwgZWxlbWVudCBJRHMgYXMgbmVlZGVkJyxcbiAgICB9LFxuICAgIGxhenlGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0LCB0aGUgaW5wdXQgaXMgZm9ybWF0dGVkIG9uIGJsdXIgaW5zdGVhZCBvZiBlYWNoIGtleXN0cm9rZSAoaWYgdGhlcmUgaXMgYSBmb3JtYXR0ZXIgc3BlY2lmaWVkKScsXG4gICAgfSxcbiAgICBsaW5rQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3Mgb3IgY2xhc3NlcyB0byBhcHBseSB0byB0aGUgaW5uZXIgbGluayBlbGVtZW50JyxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBJRCBvZiB0aGUgYXNzb2NpYXRlZCBkYXRhbGlzdCBlbGVtZW50IG9yIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBuYW1lYCBhdHRyaWJ1dGUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICBub0JhY2tkcm9wOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSBiYWNrZHJvcCcsXG4gICAgfSxcbiAgICBub0VsbGlwc2lzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRG8gbm90IHNob3cgZWxsaXBzaXMgYnV0dG9ucycsXG4gICAgfSxcbiAgICBub0dvdG9FbmRCdXR0b25zOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSGlkZXMgdGhlIGdvIHRvIGZpcnN0IGFuZCBnbyB0byBsYXN0IHBhZ2UgYnV0dG9ucycsXG4gICAgfSxcbiAgICBub0hlYWRlcjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgIGhlYWRlcicsXG4gICAgfSxcbiAgICBub0hlYWRlckNsb3NlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSBoZWFkZXIgY2xvc2UgYnV0dG9uJyxcbiAgICB9LFxuICAgIG5vSG92ZXJQYXVzZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIHRydWUsIGRpc2FibGVzIHBhdXNpbmcgdGhlIHRpbWVyIG9uIGhvdmVyIGJlaGF2aW9yJyxcbiAgICB9LFxuICAgIG5vUmVzdW1lT25Ib3ZlckxlYXZlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gdHJ1ZSwgdGhlIHRpbWVyIHdpbGwgbm90IHJlc3VtZSB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIGVsZW1lbnQuIEl0IHdpbGwgbmVlZCB0byBiZSBtYW51YWxseSByZXN1bWVkJyxcbiAgICB9LFxuICAgIG5vdmFsaWRhdGU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZGlzYWJsZXMgYnJvd3NlciBuYXRpdmUgSFRNTDUgdmFsaWRhdGlvbiBvbiBjb250cm9scyBpbiB0aGUgZm9ybScsXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiAncmVhZG9ubHkgQ2hlY2tib3hPcHRpb25SYXdbXScsXG4gICAgICBkZWZhdWx0OiAnKCkgPT4gW10nLFxuICAgICAgZGVzY3JpcHRpb246ICdBcnJheSBvZiBpdGVtcyB0byByZW5kZXIgaW4gdGhlIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBwbGFpbjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlciB0aGUgZm9ybSBjb250cm9sIGluIHBsYWluIG1vZGUsIHJhdGhlciB0aGFuIGN1c3RvbSBzdHlsZWQgbW9kZScsXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiBcIicnXCIsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcGxhaW50ZXh0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTZXQgdGhlIGZvcm0gY29udHJvbCBhcyByZWFkb25seSBhbmQgcmVuZGVycyB0aGUgY29udHJvbCB0byBsb29rIGxpa2UgcGxhaW4gdGV4dCAobm8gYm9yZGVycyknLFxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWRkcyB0aGUgYHJlcXVpcmVkYCBhdHRyaWJ1dGUgdG8gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICByZWFkb25seToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgYHJlYWRvbmx5YCBhdHRyaWJ1dGUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgQVJJQSBhdHRyaWJ1dGUgYHJvbGVgIHRvIGEgc3BlY2lmaWMgdmFsdWUnLFxuICAgIH0sXG4gICAgcm91bmRlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbi4gVGhlIGBzcXVhcmVgIHByb3AgdGFrZXMgcHJlY2VkZW5jZS4gUmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMnLFxuICAgIH0sXG4gICAgcm91bmRlZEJvdHRvbToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgYm90dG9tYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRFbmQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYGVuZGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkU3RhcnQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYHN0YXJ0YCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRUb3A6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYHRvcGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiAnU2l6ZScsXG4gICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0IHRoZSBzaXplIG9mIHRoZSBjb21wb25lbnQncyBhcHBlYXJhbmNlLiAnc20nLCAnbWQnIChkZWZhdWx0KSwgb3IgJ2xnJ1wiLFxuICAgIH0sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVVJMIHRvIHNldCBmb3IgdGhlIGBzcmNgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgdHlwZTogJ1ZhbGlkYXRpb25TdGF0ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRyb2xzIHRoZSB2YWxpZGF0aW9uIHN0YXRlIGFwcGVhcmFuY2Ugb2YgdGhlIGNvbXBvbmVudC4gYHRydWVgIGZvciB2YWxpZCwgYGZhbHNlYCBmb3IgaW52YWxpZCwgb3IgYG51bGxgIGZvciBubyB2YWxpZGF0aW9uIHN0YXRlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBzdWJ0aXRsZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnaDYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBzdWJ0aXRsZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZVRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogJ2JvZHktc2Vjb25kYXJ5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgc3VidGl0bGUgdGV4dCcsXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZycsXG4gICAgfSxcbiAgICB0ZXh0RmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHRleHQgbGFiZWwnLFxuICAgIH0sXG4gICAgdGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSB0ZXh0JyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0aXRsZUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRpdGxlVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdoNCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXJzIHRoZSBmZWVkYmFjayB0ZXh0IGluIGEgcnVkaW1lbnRhcnkgdG9vbHRpcCBzdHlsZScsXG4gICAgfSxcbiAgICB2YWxpZGF0ZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQsIGFkZHMgdGhlIEJvb3RzdHJhcCBjbGFzcyAnd2FzLXZhbGlkYXRlZCcgb24gdGhlIGZvcm0sIHRyaWdnZXJpbmcgdGhlIG5hdGl2ZSBicm93c2VyIHZhbGlkYXRpb24gc3RhdGVzXCIsXG4gICAgfSxcbiAgICB2YWx1ZUZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd2YWx1ZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdmFsdWUnLFxuICAgIH0sXG4gICAgdmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgY29tcG9uZW50LiBXaGVuIGltcGxlbWVudGVkIGBiZy12YXJpYW50YCBhbmQgYHRleHQtdmFyaWFudGAgd2lsbCB0YWtlIHByZWNlZGVuY2UnLFxuICAgIH0sXG4gICAgd3JhcHBlckF0dHJzOiB7XG4gICAgICB0eXBlOiAnUmVhZG9ubHk8QXR0cnNWYWx1ZT4nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCcsXG4gICAgfSxcbiAgICB3cmFwcGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhZGQgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCcsXG4gICAgfSxcbiAgICBwbGFjZW1lbnQ6IHtcbiAgICAgIHR5cGU6ICdQbGFjZW1lbnQnLFxuICAgICAgZGVmYXVsdDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1BsYWNlbWVudCBvZiBhIGZsb2F0aW5nIGVsZW1lbnQnLFxuICAgIH0sXG4gIH0pIGFzIGNvbnN0XG5cbmNvbnN0IHNpbmdsZXRvblByb3BzID0gT2JqZWN0LmZyZWV6ZShjb21tb25Qcm9wcygpKVxuXG5leHBvcnQgY29uc3QgYnVpbGRDb21tb25Qcm9wcyA9IChcbiAgb2JqPzogUGFydGlhbDxSZWNvcmQ8a2V5b2YgdHlwZW9mIHNpbmdsZXRvblByb3BzLCBQYXJ0aWFsPFByb3BSZWZlcmVuY2U+Pj5cbik6IFJlYWRvbmx5PHR5cGVvZiBzaW5nbGV0b25Qcm9wcz4gPT4ge1xuICBpZiAoIW9iaikgcmV0dXJuIHNpbmdsZXRvblByb3BzXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgY29uc3QgbXlPYmplY3QgPSBjb21tb25Qcm9wcygpIGFzIFJlY29yZDxzdHJpbmcsIGFueT5cblxuICAvLyBNZXJnZSB0aGUgcHJvdmlkZWQgb2JqZWN0IGludG8gdGhlIGNvbW1vbiBwcm9wc1xuICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIG15T2JqZWN0W2tleV0gPSB7XG4gICAgICAuLi5teU9iamVjdFtrZXldLFxuICAgICAgLi4udmFsdWUsXG4gICAgfVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG15T2JqZWN0IGFzIGFueSlcbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1vbkVtaXRzID0ge1xuICBjYW5jZWw6IHt9LFxuICBvazoge30sXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHMvYnV0dG9uR3JvdXAuZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2J1dHRvbkdyb3VwLmRhdGEudHNcIjtpbXBvcnQgdHlwZSB7QkJ1dHRvbkdyb3VwUHJvcHMsIEJCdXR0b25Hcm91cFNsb3RzfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5pbXBvcnQge3R5cGUgQ29tcG9uZW50UmVmZXJlbmNlLCB0eXBlIFByb3BSZWNvcmQsIHR5cGUgU2xvdFJlY29yZCwgU3R5bGVLaW5kfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB7cGlja30gZnJvbSAnLi4vLi4vdXRpbHMvb2JqZWN0VXRpbHMnXG5pbXBvcnQge2J1aWxkQ29tbW9uUHJvcHN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vblByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWQ6ICgpOiBDb21wb25lbnRSZWZlcmVuY2UgPT4gKHtcbiAgICBCQnV0dG9uR3JvdXA6IHtcbiAgICAgIHN0eWxlU3BlYzoge2tpbmQ6IFN0eWxlS2luZC5PdmVycmlkZUNsYXNzLCB2YWx1ZTogJy5idG4tZ3JvdXAnfSxcbiAgICAgIHNvdXJjZVBhdGg6ICcvQkJ1dHRvbi9CQnV0dG9uR3JvdXAudnVlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIC4uLnBpY2soYnVpbGRDb21tb25Qcm9wcygpLCBbJ2FyaWFMYWJlbCcsICdzaXplJywgJ3RhZyddKSxcbiAgICAgICAgdmVydGljYWw6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIHJlbmRlcnMgdGhlIGJ1dHRvbiBncm91cCBpbiB2ZXJ0aWNhbCBtb2RlJyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkJ1dHRvbkdyb3VwUHJvcHM+LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCAoYnV0dG9ucykgdG8gcGxhY2UgaW4gdGhlIGJ1dHRvbiBncm91cCcsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJCdXR0b25Hcm91cFNsb3RzPixcbiAgICB9LFxuICB9KSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFosSUFBTSxPQUFPLENBSXJhLFlBQ0EsZ0JBRUEs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
