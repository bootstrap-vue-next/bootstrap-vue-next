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

// src/data/components/formInput.data.ts
var formInput_data_default = {
  load: () => ({
    BFormInput: {
      sourcePath: '/BFormInput/BFormInput.vue',
      props: {
        ...pick(buildCommonProps(), [
          'ariaInvalid',
          'autocomplete',
          'autofocus',
          'debounce',
          'debounceMaxWait',
          'disabled',
          'form',
          'formatter',
          'id',
          'lazyFormatter',
          'list',
          'name',
          'placeholder',
          'plaintext',
          'readonly',
          'required',
          'size',
          'state',
          'tooltip',
        ]),
        max: {
          type: 'Numberish',
          default: 'undefined',
          description: "Sets the 'max' attribute on the input; used by number-like input types",
        },
        min: {
          type: 'Numberish',
          default: 'undefined',
          description: "Sets the 'min' attribute on the input; used by number-like input types",
        },
        modelValue: {
          type: 'Numberish | null',
          default: "''",
          description: 'The current value of the input',
        },
        step: {
          type: 'Numberish',
          default: 'undefined',
          description: "Sets the 'step' attribute on the input; used by number-like input types",
        },
        type: {
          type: 'InputType',
          default: 'text',
          description: 'The type of input to render; refer to documentation for supported types',
        },
      },
      emits: {
        'update:model-value': {
          description:
            'Emitted when the input value changes; use `update:model-value` instead of `input` or `change` events',
          args: {
            value: {
              type: 'string',
              description:
                'The new value of the input after any formatting; not emitted if the value remains unchanged',
            },
          },
        },
      },
      slots: {},
    },
  }),
}
export {formInput_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL29iamVjdFV0aWxzLnRzIiwgInNyYy91dGlscy9jb21tb25Qcm9wcy50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL2Zvcm1JbnB1dC5kYXRhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL29iamVjdFV0aWxzLnRzXCI7ZXhwb3J0IGNvbnN0IHBpY2sgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IFBpY2s8QSwgQltudW1iZXJdPiA9PlxuICBbLi4ua2V5c1RvUGx1Y2tdLnJlZHVjZShcbiAgICAobWVtbywgcHJvcCkgPT4ge1xuICAgICAgbWVtb1twcm9wXSA9IG9ialRvUGx1Y2tbcHJvcF1cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSxcbiAgICB7fSBhcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+XG4gICkgYXMgUGljazxBLCBCW251bWJlcl0+XG5cbmV4cG9ydCBjb25zdCBvbWl0ID0gPFxuICBBIGV4dGVuZHMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPixcbiAgY29uc3QgQiBleHRlbmRzIFJlYWRvbmx5QXJyYXk8UHJvcGVydHlLZXk+LFxuPihcbiAgb2JqVG9QbHVjazogUmVhZG9ubHk8QT4sXG4gIGtleXNUb1BsdWNrOiBSZWFkb25seTxCPiB8IHJlYWRvbmx5IChrZXlvZiBBKVtdXG4pOiBPbWl0PEEsIEJbbnVtYmVyXT4gPT5cbiAgT2JqZWN0LmtleXMob2JqVG9QbHVjaylcbiAgICAuZmlsdGVyKChrZXkpID0+ICFrZXlzVG9QbHVjay5tYXAoKGVsKSA9PiBlbC50b1N0cmluZygpKS5pbmNsdWRlcyhrZXkpKVxuICAgIC5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiAoey4uLnJlc3VsdCwgW2tleV06IG9ialRvUGx1Y2tba2V5XX0pLCB7fSBhcyBPbWl0PEEsIEJbbnVtYmVyXT4pXG5cbi8vIENvbnZlcnRzIFBhc2NhbENhc2Ugb3IgY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcbmV4cG9ydCBjb25zdCBrZWJhYkNhc2UgPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC9cXEIoW0EtWl0pL2csICctJDEnKS50b0xvd2VyQ2FzZSgpXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2NvbW1vblByb3BzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9jb21tb25Qcm9wcy50c1wiO2ltcG9ydCB0eXBlIHtQcm9wUmVmZXJlbmNlfSBmcm9tICcuLi90eXBlcydcblxuY29uc3QgY29tbW9uUHJvcHMgPSAoKSA9PlxuICAoe1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIGB0cnVlYCwgcGxhY2VzIHRoZSBjb21wb25lbnQgaW4gdGhlIGFjdGl2ZSBzdGF0ZSB3aXRoIGFjdGl2ZSBzdHlsaW5nJyxcbiAgICB9LFxuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiAnYWN0aXZlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkNvbmZpZ3VyZSB0aGUgYWN0aXZlIENTUyBjbGFzcyBhcHBsaWVkIHdoZW4gdGhlIGxpbmsgaXMgYWN0aXZlLiBUeXBpY2FsbHkgeW91IHdpbGwgd2FudCB0byBzZXQgdGhpcyB0byBjbGFzcyBuYW1lICdhY3RpdmUnXCIsXG4gICAgfSxcbiAgICBhbHQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1ZhbHVlIHRvIHNldCBmb3IgdGhlIGBhbHRgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhcmlhQ29udHJvbHM6IHtcbiAgICAgIHR5cGU6ICdBcmlhSW52YWxpZCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0lmIHRoaXMgY29tcG9uZW50IGNvbnRyb2xzIGFub3RoZXIgY29tcG9uZW50IG9yIGVsZW1lbnQsIHNldCB0aGlzIHRvIHRoZSBJRCBvZiB0aGUgY29udHJvbGxlZCBjb21wb25lbnQgb3IgZWxlbWVudCcsXG4gICAgfSxcbiAgICBhcmlhRGVzY3JpYmVkYnk6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIGRlc2NyaXB0aW9uIGZvciB0aGlzIGNvbXBvbmVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgYXJpYS1kZXNjcmliZWRieWAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGFyaWFJbnZhbGlkOiB7XG4gICAgICB0eXBlOiAnQXJpYUludmFsaWQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTZXRzIHRoZSBgYXJpYS1pbnZhbGlkYCBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIHdyYXBwZXIgZWxlbWVudC4gV2hlbiBub3QgcHJvdmlkZWQsIHRoZSBgc3RhdGVgIHByb3Agd2lsbCBjb250cm9sIHRoZSBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXV0b0Nsb3NlOiB7XG4gICAgICB0eXBlOiBcImJvb2xlYW4gfCAnaW5zaWRlJyB8ICdvdXRzaWRlJ1wiLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQ29udHJvbHMgdGhlIGF1dG9tYXRpYyBjbG9zaW5nIG9mIHRoZSBjb21wb25lbnQgd2hlbiBjbGlja2luZy4gU2VlIGFib3ZlIGZvciBkZXRhaWxzLicsXG4gICAgfSxcbiAgICBhdXRvY29tcGxldGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlICdhdXRvY29tcGxldGUnIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgZm9ybSBjb250cm9sXCIsXG4gICAgfSxcbiAgICBhcmlhTGFiZWw6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSB2YWx1ZSBvZiBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBlbGVtZW50JyxcbiAgICB9LFxuICAgIGFyaWFMaXZlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gdGhlIHJlbmRlcmVkIGVsZW1lbnQgaXMgYW4gYGFyaWEtbGl2ZWAgcmVnaW9uIChmb3Igc2NyZWVuIHJlYWRlciB1c2VycyksIHNldCB0byBlaXRoZXIgJ3BvbGl0ZScgb3IgJ2Fzc2VydGl2ZSdcIixcbiAgICB9LFxuICAgIGFyaWFMYWJlbGxlZGJ5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYSBsYWJlbCBmb3IgdGhpcyBjb21wb25lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYGFyaWEtbGFiZWxsZWRieWAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGF1dG9mb2N1czoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIGB0cnVlYCwgYXR0ZW1wdHMgdG8gYXV0by1mb2N1cyB0aGUgY29udHJvbCB3aGVuIGl0IGlzIG1vdW50ZWQsIG9yIHJlLWFjdGl2YXRlZCB3aGVuIGluIGEga2VlcC1hbGl2ZS4gRG9lcyBub3Qgc2V0IHRoZSBgYXV0b2ZvY3VzYCBhdHRyaWJ1dGUgb24gdGhlIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgYmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIGJhY2tncm91bmQgb2YgdGhlIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBib2R5QmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBib2R5Qm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IGJvcmRlcicsXG4gICAgfSxcbiAgICBib2R5Q2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib2R5VGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvZHlUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSB0ZXh0JyxcbiAgICB9LFxuICAgIGJvZHlWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib3JkZXInLFxuICAgIH0sXG4gICAgZGVib3VuY2U6IHtcbiAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgZGVmYXVsdDogJzAnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQgdG8gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGdyZWF0ZXIgdGhhbiB6ZXJvLCB3aWxsIGRlYm91bmNlIHRoZSB1c2VyIGlucHV0LiBIYXMgbm8gZWZmZWN0IGlmIHByb3AgJ2xhenknIGlzIHNldFwiLFxuICAgIH0sXG4gICAgZGVib3VuY2VNYXhXYWl0OiB7XG4gICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgIGRlZmF1bHQ6ICdOYU4nLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG1heGltdW0gdGltZSBpbiBtaWxsaXNlY29uZHMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCcncyBpbnZva2VkXCIsXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCB0byBgdHJ1ZWAsIGRpc2FibGVzIHRoZSBjb21wb25lbnQncyBmdW5jdGlvbmFsaXR5IGFuZCBwbGFjZXMgaXQgaW4gYSBkaXNhYmxlZCBzdGF0ZVwiLFxuICAgIH0sXG4gICAgZGlzYWJsZWRGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGlzYWJsZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGRpc2FibGVkIHN0YXRlJyxcbiAgICB9LFxuICAgIGZsb2F0aW5nOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQsIHJlbmRlcnMgYSBzaW5nbGUgY29udHJvbCBmb3JtIHdpdGggYSBmbG9hdGluZyBsYWJlbC4gVGhpcyBvbmx5IHdvcmtzIGZvciBmb3JtcyB3aGVyZSB0aGUgaW1tZWRpYXRlIGNoaWxkcmVuIGFyZSBhIGxhYmVsIGFuZCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBjb250cm9scy4gU2VlIGFib3ZlIGZvciBkZXRhaWxzLicsXG4gICAgfSxcblxuICAgIGZvb3Rlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlckJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBmb290ZXJCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBib3JkZXInLFxuICAgIH0sXG4gICAgZm9vdGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlclRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlclRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgdGV4dCcsXG4gICAgfSxcbiAgICBmb290ZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb3JtOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnSUQgb2YgdGhlIGZvcm0gdGhhdCB0aGUgZm9ybSBjb250cm9sIGJlbG9uZ3MgdG8uIFNldHMgdGhlIGBmb3JtYCBhdHRyaWJ1dGUgb24gdGhlIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgZm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnKHZhbDogc3RyaW5nLCBldnQ6IEV2ZW50KSA9PiBzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlZmVyZW5jZSB0byBhIGZ1bmN0aW9uIGZvciBmb3JtYXR0aW5nIHRoZSBpbnB1dCcsXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgaGVhZGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgYm9yZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIHRleHQnLFxuICAgIH0sXG4gICAgaGVhZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdVc2VkIHRvIHNldCB0aGUgYGlkYCBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGNvbnRlbnQsIGFuZCB1c2VkIGFzIHRoZSBiYXNlIHRvIGdlbmVyYXRlIGFueSBhZGRpdGlvbmFsIGVsZW1lbnQgSURzIGFzIG5lZWRlZCcsXG4gICAgfSxcbiAgICBsYXp5Rm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCwgdGhlIGlucHV0IGlzIGZvcm1hdHRlZCBvbiBibHVyIGluc3RlYWQgb2YgZWFjaCBrZXlzdHJva2UgKGlmIHRoZXJlIGlzIGEgZm9ybWF0dGVyIHNwZWNpZmllZCknLFxuICAgIH0sXG4gICAgbGlua0NsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NsYXNzIG9yIGNsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGlubmVyIGxpbmsgZWxlbWVudCcsXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgSUQgb2YgdGhlIGFzc29jaWF0ZWQgZGF0YWxpc3QgZWxlbWVudCBvciBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHZhbHVlIG9mIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgbm9CYWNrZHJvcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgYmFja2Ryb3AnLFxuICAgIH0sXG4gICAgbm9FbGxpcHNpczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RvIG5vdCBzaG93IGVsbGlwc2lzIGJ1dHRvbnMnLFxuICAgIH0sXG4gICAgbm9Hb3RvRW5kQnV0dG9uczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0hpZGVzIHRoZSBnbyB0byBmaXJzdCBhbmQgZ28gdG8gbGFzdCBwYWdlIGJ1dHRvbnMnLFxuICAgIH0sXG4gICAgbm9IZWFkZXI6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlICBoZWFkZXInLFxuICAgIH0sXG4gICAgbm9IZWFkZXJDbG9zZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgaGVhZGVyIGNsb3NlIGJ1dHRvbicsXG4gICAgfSxcbiAgICBub0hvdmVyUGF1c2U6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byB0cnVlLCBkaXNhYmxlcyBwYXVzaW5nIHRoZSB0aW1lciBvbiBob3ZlciBiZWhhdmlvcicsXG4gICAgfSxcbiAgICBub1Jlc3VtZU9uSG92ZXJMZWF2ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIHRydWUsIHRoZSB0aW1lciB3aWxsIG5vdCByZXN1bWUgd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBlbGVtZW50LiBJdCB3aWxsIG5lZWQgdG8gYmUgbWFudWFsbHkgcmVzdW1lZCcsXG4gICAgfSxcbiAgICBub3ZhbGlkYXRlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGRpc2FibGVzIGJyb3dzZXIgbmF0aXZlIEhUTUw1IHZhbGlkYXRpb24gb24gY29udHJvbHMgaW4gdGhlIGZvcm0nLFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogJ3JlYWRvbmx5IENoZWNrYm94T3B0aW9uUmF3W10nLFxuICAgICAgZGVmYXVsdDogJygpID0+IFtdJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXJyYXkgb2YgaXRlbXMgdG8gcmVuZGVyIGluIHRoZSBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgcGxhaW46IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXIgdGhlIGZvcm0gY29udHJvbCBpbiBwbGFpbiBtb2RlLCByYXRoZXIgdGhhbiBjdXN0b20gc3R5bGVkIG1vZGUnLFxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogXCInJ1wiLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHBsYWludGV4dDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU2V0IHRoZSBmb3JtIGNvbnRyb2wgYXMgcmVhZG9ubHkgYW5kIHJlbmRlcnMgdGhlIGNvbnRyb2wgdG8gbG9vayBsaWtlIHBsYWluIHRleHQgKG5vIGJvcmRlcnMpJyxcbiAgICB9LFxuICAgIHJlcXVpcmVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FkZHMgdGhlIGByZXF1aXJlZGAgYXR0cmlidXRlIHRvIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcmVhZG9ubHk6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGByZWFkb25seWAgYXR0cmlidXRlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIEFSSUEgYXR0cmlidXRlIGByb2xlYCB0byBhIHNwZWNpZmljIHZhbHVlJyxcbiAgICB9LFxuICAgIHJvdW5kZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4uIFRoZSBgc3F1YXJlYCBwcm9wIHRha2VzIHByZWNlZGVuY2UuIFJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzJyxcbiAgICB9LFxuICAgIHJvdW5kZWRCb3R0b206IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYGJvdHRvbWAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkRW5kOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBlbmRgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZFN0YXJ0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBzdGFydGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkVG9wOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGB0b3BgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogJ1NpemUnLFxuICAgICAgZGVmYXVsdDogJ21kJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNldCB0aGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50J3MgYXBwZWFyYW5jZS4gJ3NtJywgJ21kJyAoZGVmYXVsdCksIG9yICdsZydcIixcbiAgICB9LFxuICAgIHNyYzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VSTCB0byBzZXQgZm9yIHRoZSBgc3JjYCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgc3RhdGU6IHtcbiAgICAgIHR5cGU6ICdWYWxpZGF0aW9uU3RhdGUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb250cm9scyB0aGUgdmFsaWRhdGlvbiBzdGF0ZSBhcHBlYXJhbmNlIG9mIHRoZSBjb21wb25lbnQuIGB0cnVlYCBmb3IgdmFsaWQsIGBmYWxzZWAgZm9yIGludmFsaWQsIG9yIGBudWxsYCBmb3Igbm8gdmFsaWRhdGlvbiBzdGF0ZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgc3VidGl0bGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGVUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2g2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgc3VidGl0bGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGVUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6ICdib2R5LXNlY29uZGFyeScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIHN1YnRpdGxlIHRleHQnLFxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcnLFxuICAgIH0sXG4gICAgdGV4dEZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSB0ZXh0IGxhYmVsJyxcbiAgICB9LFxuICAgIHRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgdGV4dCcsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdGl0bGVDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0aXRsZVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnaDQnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVycyB0aGUgZmVlZGJhY2sgdGV4dCBpbiBhIHJ1ZGltZW50YXJ5IHRvb2x0aXAgc3R5bGUnLFxuICAgIH0sXG4gICAgdmFsaWRhdGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0LCBhZGRzIHRoZSBCb290c3RyYXAgY2xhc3MgJ3dhcy12YWxpZGF0ZWQnIG9uIHRoZSBmb3JtLCB0cmlnZ2VyaW5nIHRoZSBuYXRpdmUgYnJvd3NlciB2YWxpZGF0aW9uIHN0YXRlc1wiLFxuICAgIH0sXG4gICAgdmFsdWVGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndmFsdWUnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHZhbHVlJyxcbiAgICB9LFxuICAgIHZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGNvbXBvbmVudC4gV2hlbiBpbXBsZW1lbnRlZCBgYmctdmFyaWFudGAgYW5kIGB0ZXh0LXZhcmlhbnRgIHdpbGwgdGFrZSBwcmVjZWRlbmNlJyxcbiAgICB9LFxuICAgIHdyYXBwZXJBdHRyczoge1xuICAgICAgdHlwZTogJ1JlYWRvbmx5PEF0dHJzVmFsdWU+JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXR0cmlidXRlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSB3cmFwcGVyIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgd3JhcHBlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYWRkIHRvIHRoZSB3cmFwcGVyIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgcGxhY2VtZW50OiB7XG4gICAgICB0eXBlOiAnUGxhY2VtZW50JyxcbiAgICAgIGRlZmF1bHQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgZGVzY3JpcHRpb246ICdQbGFjZW1lbnQgb2YgYSBmbG9hdGluZyBlbGVtZW50JyxcbiAgICB9LFxuICB9KSBhcyBjb25zdFxuXG5jb25zdCBzaW5nbGV0b25Qcm9wcyA9IE9iamVjdC5mcmVlemUoY29tbW9uUHJvcHMoKSlcblxuZXhwb3J0IGNvbnN0IGJ1aWxkQ29tbW9uUHJvcHMgPSAoXG4gIG9iaj86IFBhcnRpYWw8UmVjb3JkPGtleW9mIHR5cGVvZiBzaW5nbGV0b25Qcm9wcywgUGFydGlhbDxQcm9wUmVmZXJlbmNlPj4+XG4pOiBSZWFkb25seTx0eXBlb2Ygc2luZ2xldG9uUHJvcHM+ID0+IHtcbiAgaWYgKCFvYmopIHJldHVybiBzaW5nbGV0b25Qcm9wc1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGNvbnN0IG15T2JqZWN0ID0gY29tbW9uUHJvcHMoKSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cbiAgLy8gTWVyZ2UgdGhlIHByb3ZpZGVkIG9iamVjdCBpbnRvIHRoZSBjb21tb24gcHJvcHNcbiAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBteU9iamVjdFtrZXldID0ge1xuICAgICAgLi4ubXlPYmplY3Rba2V5XSxcbiAgICAgIC4uLnZhbHVlLFxuICAgIH1cbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShteU9iamVjdCBhcyBhbnkpXG59XG5cbmV4cG9ydCBjb25zdCBjb21tb25FbWl0cyA9IHtcbiAgY2FuY2VsOiB7fSxcbiAgb2s6IHt9LFxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2Zvcm1JbnB1dC5kYXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHMvZm9ybUlucHV0LmRhdGEudHNcIjtpbXBvcnQgdHlwZSB7Q29tcG9uZW50UmVmZXJlbmNlLCBQcm9wUmVjb3JkfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB7cGlja30gZnJvbSAnLi4vLi4vdXRpbHMvb2JqZWN0VXRpbHMnXG5pbXBvcnQge2J1aWxkQ29tbW9uUHJvcHN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vblByb3BzJ1xuaW1wb3J0IHR5cGUge0JGb3JtSW5wdXRQcm9wc30gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWQ6ICgpOiBDb21wb25lbnRSZWZlcmVuY2UgPT4gKHtcbiAgICBCRm9ybUlucHV0OiB7XG4gICAgICBzb3VyY2VQYXRoOiAnL0JGb3JtSW5wdXQvQkZvcm1JbnB1dC52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucGljayhidWlsZENvbW1vblByb3BzKCksIFtcbiAgICAgICAgICAnYXJpYUludmFsaWQnLFxuICAgICAgICAgICdhdXRvY29tcGxldGUnLFxuICAgICAgICAgICdhdXRvZm9jdXMnLFxuICAgICAgICAgICdkZWJvdW5jZScsXG4gICAgICAgICAgJ2RlYm91bmNlTWF4V2FpdCcsXG4gICAgICAgICAgJ2Rpc2FibGVkJyxcbiAgICAgICAgICAnZm9ybScsXG4gICAgICAgICAgJ2Zvcm1hdHRlcicsXG4gICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAnbGF6eUZvcm1hdHRlcicsXG4gICAgICAgICAgJ2xpc3QnLFxuICAgICAgICAgICduYW1lJyxcbiAgICAgICAgICAncGxhY2Vob2xkZXInLFxuICAgICAgICAgICdwbGFpbnRleHQnLFxuICAgICAgICAgICdyZWFkb25seScsXG4gICAgICAgICAgJ3JlcXVpcmVkJyxcbiAgICAgICAgICAnc2l6ZScsXG4gICAgICAgICAgJ3N0YXRlJyxcbiAgICAgICAgICAndG9vbHRpcCcsXG4gICAgICAgIF0pLFxuICAgICAgICBtYXg6IHtcbiAgICAgICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAnbWF4JyBhdHRyaWJ1dGUgb24gdGhlIGlucHV0OyB1c2VkIGJ5IG51bWJlci1saWtlIGlucHV0IHR5cGVzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG1pbjoge1xuICAgICAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlICdtaW4nIGF0dHJpYnV0ZSBvbiB0aGUgaW5wdXQ7IHVzZWQgYnkgbnVtYmVyLWxpa2UgaW5wdXQgdHlwZXNcIixcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWxWYWx1ZToge1xuICAgICAgICAgIHR5cGU6ICdOdW1iZXJpc2ggfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBcIicnXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgaW5wdXQnLFxuICAgICAgICB9LFxuICAgICAgICBzdGVwOiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ3N0ZXAnIGF0dHJpYnV0ZSBvbiB0aGUgaW5wdXQ7IHVzZWQgYnkgbnVtYmVyLWxpa2UgaW5wdXQgdHlwZXNcIixcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgIHR5cGU6ICdJbnB1dFR5cGUnLFxuICAgICAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSB0eXBlIG9mIGlucHV0IHRvIHJlbmRlcjsgcmVmZXIgdG8gZG9jdW1lbnRhdGlvbiBmb3Igc3VwcG9ydGVkIHR5cGVzJyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkZvcm1JbnB1dFByb3BzPixcbiAgICAgIGVtaXRzOiB7XG4gICAgICAgICd1cGRhdGU6bW9kZWwtdmFsdWUnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnRW1pdHRlZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2VzOyB1c2UgYHVwZGF0ZTptb2RlbC12YWx1ZWAgaW5zdGVhZCBvZiBgaW5wdXRgIG9yIGBjaGFuZ2VgIGV2ZW50cycsXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdUaGUgbmV3IHZhbHVlIG9mIHRoZSBpbnB1dCBhZnRlciBhbnkgZm9ybWF0dGluZzsgbm90IGVtaXR0ZWQgaWYgdGhlIHZhbHVlIHJlbWFpbnMgdW5jaGFuZ2VkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzbG90czoge30sXG4gICAgfSxcbiAgfSksXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBaLElBQU0sT0FBTyxDQUlyYSxZQUNBLGdCQUVBLENBQUMsR0FBRyxXQUFXLEVBQUU7QUFBQSxFQUNmLENBQUMsTUFBTSxTQUFTO0FBQ2QsU0FBSyxJQUFJLElBQUksV0FBVyxJQUFJO0FBQzVCLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxDQUFDO0FBQ0g7OztBQ1hGLElBQU0sY0FBYyxPQUNqQjtBQUFBLEVBQ0MsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLElBQ2YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGFB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QUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxlQUFlO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtB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
