// src/types/index.ts
var defaultPropSectionSymbol = '_defaultPropSection'

// src/utils/linkProps.ts
var linkTo = '/docs/components/link'
var linkProps = {
  active: {
    type: 'boolean',
    default: void 0,
    description: 'When set to `true`, places the component in the active state with active styling',
  },
  activeClass: {
    type: 'string',
    default: 'router-link-active',
    description: 'Configure the active CSS class applied when the link is active.',
  },
  disabled: {
    type: 'boolean',
    default: false,
    description:
      "When set to `true`, disables the link's functionality. See above for details and limitations",
  },
  exactActiveClass: {
    type: 'string',
    default: 'router-link-exact-active',
    description: 'Configure the active CSS class applied when the link is active with exact match.',
  },
  href: {
    type: 'string',
    default: void 0,
    description: 'Denotes the target URL of the link for standard a links',
  },
  icon: {
    type: 'boolean',
    default: false,
    description: 'When set to `true`, styles an icon at the beginning or end of the link text',
  },
  noPrefetch: {
    type: 'boolean',
    default: false,
    description:
      'To improve the responsiveness of your Nuxt.js applications, when the link will be displayed within the viewport, Nuxt.js will automatically prefetch the code splitted page. Setting `no-prefetch` will disabled this feature for the specific link',
    notYetImplemented: true,
  },
  opacity: {
    type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
    default: void 0,
    description: 'Change the alpha opacity of the link `rgba()` color value',
  },
  opacityHover: {
    type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
    default: void 0,
    description: 'Change the alpha opacity of the link `rgba()` color value on hover',
  },
  prefetch: {
    type: 'boolean',
    default: void 0,
    description:
      'To improve the responsiveness of your Nuxt.js applications, when the link will be displayed within the viewport, Nuxt.js will automatically prefetch the code splitted page. Setting `prefetch` to `true` or `false` will overwrite the default value of `router.prefetchLinks`',
  },
  prefetchedClass: {
    type: 'string',
    default: void 0,
    description: 'Not Yet Implmented: A class to apply to links that have been prefetched.',
  },
  prefetchOn: {
    type: 'Partial<{visibility: boolean, interaction: boolean}>',
    default: void 0,
    description:
      "Allows custom control of when to prefetch links. Possible options are 'interaction' and 'visibility' (default).",
  },
  noRel: {},
  rel: {
    type: 'string',
    default: void 0,
    description: "Sets the 'rel' attribute on the rendered link",
  },
  replace: {
    type: 'boolean',
    default: false,
    description:
      'Setting replace prop will call router.replace() instead of router.push() when clicked',
  },
  routerComponentName: {
    type: 'string',
    default: 'router-link',
    description:
      'BootstrapVue auto detects between `<router-link>` and `<nuxt-link>`. Set this this property to explicity set the name of the router component.',
  },
  routerTag: {
    type: 'string',
    default: 'a',
    description: 'Set the tag type for the link',
  },
  stretched: {
    type: 'boolean',
    default: false,
    description:
      "When set to `true`, makes the link's `containing block` clickable via an `::after` pseudo element",
  },
  target: {
    type: 'LinkTarget',
    default: void 0,
    description: "Sets the 'target' attribute on the rendered link",
  },
  to: {
    type: 'RouteLocationRaw',
    default: void 0,
    description:
      'Denotes the target route of the link. When clicked, the value of the to prop will be passed to `router.push()` internally',
  },
  underlineOffset: {
    type: "1 | 2 | 3 | '1' | '2' | '3'",
    default: void 0,
    description: 'Change the distance of the underline from the bottom of the link text',
  },
  underlineOffsetHover: {
    type: "1 | 2 | 3 | '1' | '2' | '3'",
    default: void 0,
    description: 'Change the distance of the underline from the bottom of the link text on hover',
  },
  underlineOpacity: {
    type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
    default: void 0,
    description: "Set's the opacity of the link's underline",
  },
  underlineOpacityHover: {
    type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
    default: void 0,
    description: "Set's the opacity of the link's underline on hover",
  },
  underlineVariant: {
    type: 'ColorVariant | null',
    default: null,
    description: 'Set the color variant for the link underline independently of the link text',
  },
  variant: {
    type: 'ColorVariant | null',
    default: null,
    description: 'Set the color variant for the link',
  },
  // TODO: remove the hard-coded NYI props below when they are implemented
}
var linkedBLinkSection = {
  _opts: {
    linkTo,
  },
  _data: linkProps,
}

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

// src/data/components/badge.data.ts
var badge_data_default = {
  load: () => ({
    BBadge: {
      sourcePath: '/BBadge/BBadge.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ...pick(
            buildCommonProps({
              variant: {
                default: 'secondary',
              },
            }),
            ['bgVariant', 'variant', 'textVariant']
          ),
          dotIndicator: {
            type: 'boolean',
            default: 'false',
            // TODO item not in string format
            description: 'Indication position and dot styling applied',
          },
          pill: {
            type: 'boolean',
            default: 'false',
            // TODO item not in string format
            description: "When set to 'true', renders the badge in pill style",
          },
          tag: {
            type: 'string',
            default: 'span',
            description: 'Specify the HTML tag to render instead of the default tag',
          },
          placement: {
            type: 'CombinedPlacement',
            default: void 0,
            description:
              'Placement of the badge relative to the its parent. One of the values of `CombinedPlacement`',
            // TODO grammar check (remove "the" before "its parent")
          },
        },
        'BLink props': linkedBLinkSection,
      },
      emits: {},
      slots: {
        default: {
          description: '',
          // TODO missing description
          scope: {},
        },
      },
    },
  }),
}
export {badge_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3R5cGVzL2luZGV4LnRzIiwgInNyYy91dGlscy9saW5rUHJvcHMudHMiLCAic3JjL3V0aWxzL29iamVjdFV0aWxzLnRzIiwgInNyYy91dGlscy9jb21tb25Qcm9wcy50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL2JhZGdlLmRhdGEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdHlwZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy90eXBlcy9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdHlwZXMvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7dXNlU2Nyb2xsc3B5fSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudEl0ZW0gPSBFeGNsdWRlPGtleW9mIENvbXBvbmVudFJlZmVyZW5jZSwgJ2NvbXBvbmVudCcgfCAnc2VjdGlvbnMnPlxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BSZWZlcmVuY2Uge1xuICB0eXBlPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRlZmF1bHQ/OiB1bmtub3duXG4gIG5vdFlldEltcGxlbWVudGVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcm9wUmVjb3JkV2l0aE9wdGlvbnMgPSB7XG4gIF9kYXRhOiBQcm9wUmVjb3JkIC8vIEFsbG93cyBmb3IgYSBzaW5nbGUgc2VjdGlvbiBvciBtdWx0aXBsZSBzZWN0aW9uc1xuICBfb3B0cz86IHtsaW5rVG8/OiBzdHJpbmd9XG59XG4vLyBGbGF0IHZhcmlhbnRcbmV4cG9ydCB0eXBlIFByb3BSZWNvcmQ8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gPSBSZWNvcmQ8VCwgUHJvcFJlZmVyZW5jZT5cbi8vIE11bHRpcGxlIHNlY3Rpb25zIHZhcmlhbnRcbmV4cG9ydCB0eXBlIFByb3BSZWNvcmRXaXRoTXVsdGlwbGVTZWN0aW9ucyA9IHtcbiAgW2RlZmF1bHRQcm9wU2VjdGlvblN5bWJvbF06IFByb3BSZWNvcmQgfCBQcm9wUmVjb3JkV2l0aE9wdGlvbnNcbn0gJiB7W2tleTogc3RyaW5nXTogUHJvcFJlY29yZCB8IFByb3BSZWNvcmRXaXRoT3B0aW9uc31cbi8vIE9wdGlvbnMgdmFyaWFudFxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9wU2VjdGlvblN5bWJvbCA9ICdfZGVmYXVsdFByb3BTZWN0aW9uJ1xuXG5leHBvcnQgdHlwZSBFbWl0QXJnUmVmZXJlbmNlID0gUmVjb3JkPHN0cmluZywge3R5cGU6IHN0cmluZzsgZGVzY3JpcHRpb24/OiBzdHJpbmd9PlxuZXhwb3J0IHR5cGUgRW1pdFJlZmVyZW5jZSA9IHtcbiAgYXJncz86IEVtaXRBcmdSZWZlcmVuY2VcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn1cbmV4cG9ydCB0eXBlIEVtaXRSZWNvcmQ8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gPSBSZWNvcmQ8VCwgRW1pdFJlZmVyZW5jZT5cblxuZXhwb3J0IHR5cGUgU2xvdFNjb3BlUmVmZXJlbmNlID0gUmVjb3JkPFxuICBzdHJpbmcsXG4gIHtcbiAgICB0eXBlOiBzdHJpbmcgfCBzdHJpbmdbXVxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgbm90WWV0SW1wbGVtZW50ZWQ/OiBib29sZWFuXG4gIH1cbj5cbmV4cG9ydCB0eXBlIFNsb3RSZWZlcmVuY2UgPSB7XG4gIHNjb3BlPzogU2xvdFNjb3BlUmVmZXJlbmNlXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG59XG5leHBvcnQgdHlwZSBTbG90UmVjb3JkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+ID0gUmVjb3JkPFQsIFNsb3RSZWZlcmVuY2U+XG5cbmV4cG9ydCBjb25zdCBlbnVtIFN0eWxlS2luZCB7XG4gIEJvb3RzdHJhcENsYXNzID0gJ0JPT1RTVFJBUC1DTEFTUycsXG4gIEJzdm5DbGFzcyA9ICdCU1ZOLUNMQVNTJyxcbiAgT3ZlcnJpZGVDbGFzcyA9ICdPVkVSUklERS1DTEFTUycsXG4gIFRhZyA9ICdUQUcnLFxuICBOb25lID0gJ05PTkUnLFxufVxuZXhwb3J0IGludGVyZmFjZSBTdHlsZVNwZWMge1xuICBraW5kOiBTdHlsZUtpbmRcbiAgdmFsdWU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50U2VjdGlvbiA9ICdQcm9wZXJ0aWVzJyB8ICdFdmVudHMnIHwgJ1Nsb3RzJ1xuZXhwb3J0IHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlID0gUmVjb3JkPFxuICBzdHJpbmcsXG4gIHtcbiAgICBzdHlsZVNwZWM/OiBTdHlsZVNwZWNcbiAgICAvKipcbiAgICAgKiBVc2UgcGFja2FnZSBkaXJlY3RvcnkgcmVsYXRpdmUgbGlua3MuIGV4OiBCQWNjb3JkaW9uLnZ1ZSA9PiAvQkFjY29yZGlvbi9CQWNjb3JkaW9uLnZ1ZSAoc2xhc2ggcmVxdWlyZWQpXG4gICAgICpcbiAgICAgKiBJZiBwYXRoIGlzIGVtcHR5IHN0cmluZywgaXQgZGVmYXVsdHMgdG8gdGhlIHBhY2thZ2UgZGlyZWN0b3J5LiBJZiBudWxsLCBpdCBkb2VzIG5vdCByZW5kZXIgdGhlIGJ1dHRvblxuICAgICAqL1xuICAgIHNvdXJjZVBhdGg6IHN0cmluZyB8IG51bGxcbiAgICBwcm9wczogUHJvcFJlY29yZFdpdGhPcHRpb25zIHwgUHJvcFJlY29yZCB8IFByb3BSZWNvcmRXaXRoTXVsdGlwbGVTZWN0aW9uc1xuICAgIGVtaXRzPzogRW1pdFJlY29yZFxuICAgIHNsb3RzPzogU2xvdFJlY29yZFxuICAgIHNlY3Rpb25zPzogQ29tcG9uZW50U2VjdGlvbltdXG4gIH1cbj5cblxuZXhwb3J0IHR5cGUgQ29sbGVjdGl2ZU1lbWJlcnNSZXNwb25zZSA9IHtcbiAgTWVtYmVySWQ6IG51bWJlclxuICBjcmVhdGVkQXQ6IHN0cmluZ1xuICB0eXBlOiBzdHJpbmdcbiAgcm9sZTogc3RyaW5nXG4gIHRpZXI6IHN0cmluZ1xuICBpc0FjdGl2ZTogYm9vbGVhblxuICB0b3RhbEFtb3VudERvbmF0ZWQ6IG51bWJlclxuICBjdXJyZW5jeTogc3RyaW5nXG4gIGxhc3RUcmFuc2FjdGlvbkF0OiBzdHJpbmdcbiAgbGFzdFRyYW5zYWN0aW9uQW1vdW50OiBudW1iZXJcbiAgcHJvZmlsZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBjb21wYW55OiBudWxsIHwgbnVsbFxuICBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbFxuICBpbWFnZTogc3RyaW5nIHwgbnVsbFxuICBlbWFpbDogbnVsbCB8IHN0cmluZ1xuICB0d2l0dGVyOiBudWxsIHwgc3RyaW5nXG4gIGdpdGh1Yjogc3RyaW5nIHwgbnVsbFxuICB3ZWJzaXRlOiBudWxsIHwgc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIENvbGxlY3RpdmVQYXJ0aWFsUmVzcG9uc2UgPSB7XG4gIG1lbWJlcnM6IENvbGxlY3RpdmVNZW1iZXJzUmVzcG9uc2VbXVxufVxuXG5leHBvcnQgdHlwZSBTY3JvbGxzcHlJdGVtID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlU2Nyb2xsc3B5PlsnbGlzdCddWyd2YWx1ZSddWzBdXG5leHBvcnQgdHlwZSBIZWFkZXJJdGVtID0gU2Nyb2xsc3B5SXRlbSAmIHt0YWc6IHN0cmluZzsgbGV2ZWw6IG51bWJlcn1cbmV4cG9ydCB0eXBlIENvbnRlbnRzSXRlbSA9IEhlYWRlckl0ZW0gJiB7Y2hpbGRyZW46IENvbnRlbnRzSXRlbVtdfVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9saW5rUHJvcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2xpbmtQcm9wcy50c1wiO2ltcG9ydCB0eXBlIHtCTGlua1Byb3BzfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5pbXBvcnQgdHlwZSB7UHJvcFJlY29yZCwgUHJvcFJlY29yZFdpdGhPcHRpb25zfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGxpbmtUbyA9ICcvZG9jcy9jb21wb25lbnRzL2xpbmsnXG5cbmV4cG9ydCBjb25zdCBsaW5rUHJvcHMgPSB7XG4gIGFjdGl2ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byBgdHJ1ZWAsIHBsYWNlcyB0aGUgY29tcG9uZW50IGluIHRoZSBhY3RpdmUgc3RhdGUgd2l0aCBhY3RpdmUgc3R5bGluZycsXG4gIH0sXG4gIGFjdGl2ZUNsYXNzOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3JvdXRlci1saW5rLWFjdGl2ZScsXG4gICAgZGVzY3JpcHRpb246ICdDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZS4nLFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2hlbiBzZXQgdG8gYHRydWVgLCBkaXNhYmxlcyB0aGUgbGluaydzIGZ1bmN0aW9uYWxpdHkuIFNlZSBhYm92ZSBmb3IgZGV0YWlscyBhbmQgbGltaXRhdGlvbnNcIixcbiAgfSxcbiAgZXhhY3RBY3RpdmVDbGFzczoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdyb3V0ZXItbGluay1leGFjdC1hY3RpdmUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29uZmlndXJlIHRoZSBhY3RpdmUgQ1NTIGNsYXNzIGFwcGxpZWQgd2hlbiB0aGUgbGluayBpcyBhY3RpdmUgd2l0aCBleGFjdCBtYXRjaC4nLFxuICB9LFxuICBocmVmOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVub3RlcyB0aGUgdGFyZ2V0IFVSTCBvZiB0aGUgbGluayBmb3Igc3RhbmRhcmQgYSBsaW5rcycsXG4gIH0sXG4gIGljb246IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byBgdHJ1ZWAsIHN0eWxlcyBhbiBpY29uIGF0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBsaW5rIHRleHQnLFxuICB9LFxuICBub1ByZWZldGNoOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RvIGltcHJvdmUgdGhlIHJlc3BvbnNpdmVuZXNzIG9mIHlvdXIgTnV4dC5qcyBhcHBsaWNhdGlvbnMsIHdoZW4gdGhlIGxpbmsgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSB2aWV3cG9ydCwgTnV4dC5qcyB3aWxsIGF1dG9tYXRpY2FsbHkgcHJlZmV0Y2ggdGhlIGNvZGUgc3BsaXR0ZWQgcGFnZS4gU2V0dGluZyBgbm8tcHJlZmV0Y2hgIHdpbGwgZGlzYWJsZWQgdGhpcyBmZWF0dXJlIGZvciB0aGUgc3BlY2lmaWMgbGluaycsXG4gICAgbm90WWV0SW1wbGVtZW50ZWQ6IHRydWUsXG4gIH0sXG4gIG9wYWNpdHk6IHtcbiAgICB0eXBlOiBcIjEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBhbHBoYSBvcGFjaXR5IG9mIHRoZSBsaW5rIGByZ2JhKClgIGNvbG9yIHZhbHVlJyxcbiAgfSxcbiAgb3BhY2l0eUhvdmVyOiB7XG4gICAgdHlwZTogXCIxMCB8IDI1IHwgNTAgfCA3NSB8IDEwMCB8ICcxMCcgfCAnMjUnIHwgJzUwJyB8ICc3NScgfCAnMTAwJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NoYW5nZSB0aGUgYWxwaGEgb3BhY2l0eSBvZiB0aGUgbGluayBgcmdiYSgpYCBjb2xvciB2YWx1ZSBvbiBob3ZlcicsXG4gIH0sXG4gIHByZWZldGNoOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUbyBpbXByb3ZlIHRoZSByZXNwb25zaXZlbmVzcyBvZiB5b3VyIE51eHQuanMgYXBwbGljYXRpb25zLCB3aGVuIHRoZSBsaW5rIHdpbGwgYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgdmlld3BvcnQsIE51eHQuanMgd2lsbCBhdXRvbWF0aWNhbGx5IHByZWZldGNoIHRoZSBjb2RlIHNwbGl0dGVkIHBhZ2UuIFNldHRpbmcgYHByZWZldGNoYCB0byBgdHJ1ZWAgb3IgYGZhbHNlYCB3aWxsIG92ZXJ3cml0ZSB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBgcm91dGVyLnByZWZldGNoTGlua3NgJyxcbiAgfSxcbiAgcHJlZmV0Y2hlZENsYXNzOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnTm90IFlldCBJbXBsbWVudGVkOiBBIGNsYXNzIHRvIGFwcGx5IHRvIGxpbmtzIHRoYXQgaGF2ZSBiZWVuIHByZWZldGNoZWQuJyxcbiAgfSxcbiAgcHJlZmV0Y2hPbjoge1xuICAgIHR5cGU6ICdQYXJ0aWFsPHt2aXNpYmlsaXR5OiBib29sZWFuLCBpbnRlcmFjdGlvbjogYm9vbGVhbn0+JyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFsbG93cyBjdXN0b20gY29udHJvbCBvZiB3aGVuIHRvIHByZWZldGNoIGxpbmtzLiBQb3NzaWJsZSBvcHRpb25zIGFyZSAnaW50ZXJhY3Rpb24nIGFuZCAndmlzaWJpbGl0eScgKGRlZmF1bHQpLlwiLFxuICB9LFxuICBub1JlbDoge30sXG4gIHJlbDoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAncmVsJyBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGxpbmtcIixcbiAgfSxcbiAgcmVwbGFjZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdTZXR0aW5nIHJlcGxhY2UgcHJvcCB3aWxsIGNhbGwgcm91dGVyLnJlcGxhY2UoKSBpbnN0ZWFkIG9mIHJvdXRlci5wdXNoKCkgd2hlbiBjbGlja2VkJyxcbiAgfSxcbiAgcm91dGVyQ29tcG9uZW50TmFtZToge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdyb3V0ZXItbGluaycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQm9vdHN0cmFwVnVlIGF1dG8gZGV0ZWN0cyBiZXR3ZWVuIGA8cm91dGVyLWxpbms+YCBhbmQgYDxudXh0LWxpbms+YC4gU2V0IHRoaXMgdGhpcyBwcm9wZXJ0eSB0byBleHBsaWNpdHkgc2V0IHRoZSBuYW1lIG9mIHRoZSByb3V0ZXIgY29tcG9uZW50LicsXG4gIH0sXG4gIHJvdXRlclRhZzoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdhJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCB0aGUgdGFnIHR5cGUgZm9yIHRoZSBsaW5rJyxcbiAgfSxcbiAgc3RyZXRjaGVkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXaGVuIHNldCB0byBgdHJ1ZWAsIG1ha2VzIHRoZSBsaW5rJ3MgYGNvbnRhaW5pbmcgYmxvY2tgIGNsaWNrYWJsZSB2aWEgYW4gYDo6YWZ0ZXJgIHBzZXVkbyBlbGVtZW50XCIsXG4gIH0sXG4gIHRhcmdldDoge1xuICAgIHR5cGU6ICdMaW5rVGFyZ2V0JyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ3RhcmdldCcgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBsaW5rXCIsXG4gIH0sXG4gIHRvOiB7XG4gICAgdHlwZTogJ1JvdXRlTG9jYXRpb25SYXcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdEZW5vdGVzIHRoZSB0YXJnZXQgcm91dGUgb2YgdGhlIGxpbmsuIFdoZW4gY2xpY2tlZCwgdGhlIHZhbHVlIG9mIHRoZSB0byBwcm9wIHdpbGwgYmUgcGFzc2VkIHRvIGByb3V0ZXIucHVzaCgpYCBpbnRlcm5hbGx5JyxcbiAgfSxcbiAgdW5kZXJsaW5lT2Zmc2V0OiB7XG4gICAgdHlwZTogXCIxIHwgMiB8IDMgfCAnMScgfCAnMicgfCAnMydcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGRpc3RhbmNlIG9mIHRoZSB1bmRlcmxpbmUgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBsaW5rIHRleHQnLFxuICB9LFxuICB1bmRlcmxpbmVPZmZzZXRIb3Zlcjoge1xuICAgIHR5cGU6IFwiMSB8IDIgfCAzIHwgJzEnIHwgJzInIHwgJzMnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBkaXN0YW5jZSBvZiB0aGUgdW5kZXJsaW5lIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgbGluayB0ZXh0IG9uIGhvdmVyJyxcbiAgfSxcbiAgdW5kZXJsaW5lT3BhY2l0eToge1xuICAgIHR5cGU6IFwiMCB8IDEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzAnIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldCdzIHRoZSBvcGFjaXR5IG9mIHRoZSBsaW5rJ3MgdW5kZXJsaW5lXCIsXG4gIH0sXG4gIHVuZGVybGluZU9wYWNpdHlIb3Zlcjoge1xuICAgIHR5cGU6IFwiMCB8IDEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzAnIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldCdzIHRoZSBvcGFjaXR5IG9mIHRoZSBsaW5rJ3MgdW5kZXJsaW5lIG9uIGhvdmVyXCIsXG4gIH0sXG4gIHVuZGVybGluZVZhcmlhbnQ6IHtcbiAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCB0aGUgY29sb3IgdmFyaWFudCBmb3IgdGhlIGxpbmsgdW5kZXJsaW5lIGluZGVwZW5kZW50bHkgb2YgdGhlIGxpbmsgdGV4dCcsXG4gIH0sXG4gIHZhcmlhbnQ6IHtcbiAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCB0aGUgY29sb3IgdmFyaWFudCBmb3IgdGhlIGxpbmsnLFxuICB9LFxuICAvLyBUT0RPOiByZW1vdmUgdGhlIGhhcmQtY29kZWQgTllJIHByb3BzIGJlbG93IHdoZW4gdGhleSBhcmUgaW1wbGVtZW50ZWRcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkxpbmtQcm9wcyB8ICdub1ByZWZldGNoJyB8ICdwcmVmZXRjaCcgfCAncHJlZmV0Y2hlZENsYXNzJz5cblxuZXhwb3J0IGNvbnN0IGxpbmtlZEJMaW5rU2VjdGlvbiA9IHtcbiAgX29wdHM6IHtcbiAgICBsaW5rVG8sXG4gIH0sXG4gIF9kYXRhOiBsaW5rUHJvcHMsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBQcm9wUmVjb3JkV2l0aE9wdGlvbnNcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL29iamVjdFV0aWxzLnRzXCI7ZXhwb3J0IGNvbnN0IHBpY2sgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IFBpY2s8QSwgQltudW1iZXJdPiA9PlxuICBbLi4ua2V5c1RvUGx1Y2tdLnJlZHVjZShcbiAgICAobWVtbywgcHJvcCkgPT4ge1xuICAgICAgbWVtb1twcm9wXSA9IG9ialRvUGx1Y2tbcHJvcF1cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSxcbiAgICB7fSBhcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+XG4gICkgYXMgUGljazxBLCBCW251bWJlcl0+XG5cbmV4cG9ydCBjb25zdCBvbWl0ID0gPFxuICBBIGV4dGVuZHMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPixcbiAgY29uc3QgQiBleHRlbmRzIFJlYWRvbmx5QXJyYXk8UHJvcGVydHlLZXk+LFxuPihcbiAgb2JqVG9QbHVjazogUmVhZG9ubHk8QT4sXG4gIGtleXNUb1BsdWNrOiBSZWFkb25seTxCPiB8IHJlYWRvbmx5IChrZXlvZiBBKVtdXG4pOiBPbWl0PEEsIEJbbnVtYmVyXT4gPT5cbiAgT2JqZWN0LmtleXMob2JqVG9QbHVjaylcbiAgICAuZmlsdGVyKChrZXkpID0+ICFrZXlzVG9QbHVjay5tYXAoKGVsKSA9PiBlbC50b1N0cmluZygpKS5pbmNsdWRlcyhrZXkpKVxuICAgIC5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiAoey4uLnJlc3VsdCwgW2tleV06IG9ialRvUGx1Y2tba2V5XX0pLCB7fSBhcyBPbWl0PEEsIEJbbnVtYmVyXT4pXG5cbi8vIENvbnZlcnRzIFBhc2NhbENhc2Ugb3IgY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcbmV4cG9ydCBjb25zdCBrZWJhYkNhc2UgPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC9cXEIoW0EtWl0pL2csICctJDEnKS50b0xvd2VyQ2FzZSgpXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2NvbW1vblByb3BzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9jb21tb25Qcm9wcy50c1wiO2ltcG9ydCB0eXBlIHtQcm9wUmVmZXJlbmNlfSBmcm9tICcuLi90eXBlcydcblxuY29uc3QgY29tbW9uUHJvcHMgPSAoKSA9PlxuICAoe1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIGB0cnVlYCwgcGxhY2VzIHRoZSBjb21wb25lbnQgaW4gdGhlIGFjdGl2ZSBzdGF0ZSB3aXRoIGFjdGl2ZSBzdHlsaW5nJyxcbiAgICB9LFxuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiAnYWN0aXZlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkNvbmZpZ3VyZSB0aGUgYWN0aXZlIENTUyBjbGFzcyBhcHBsaWVkIHdoZW4gdGhlIGxpbmsgaXMgYWN0aXZlLiBUeXBpY2FsbHkgeW91IHdpbGwgd2FudCB0byBzZXQgdGhpcyB0byBjbGFzcyBuYW1lICdhY3RpdmUnXCIsXG4gICAgfSxcbiAgICBhbHQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1ZhbHVlIHRvIHNldCBmb3IgdGhlIGBhbHRgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhcmlhQ29udHJvbHM6IHtcbiAgICAgIHR5cGU6ICdBcmlhSW52YWxpZCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0lmIHRoaXMgY29tcG9uZW50IGNvbnRyb2xzIGFub3RoZXIgY29tcG9uZW50IG9yIGVsZW1lbnQsIHNldCB0aGlzIHRvIHRoZSBJRCBvZiB0aGUgY29udHJvbGxlZCBjb21wb25lbnQgb3IgZWxlbWVudCcsXG4gICAgfSxcbiAgICBhcmlhRGVzY3JpYmVkYnk6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIGRlc2NyaXB0aW9uIGZvciB0aGlzIGNvbXBvbmVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgYXJpYS1kZXNjcmliZWRieWAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGFyaWFJbnZhbGlkOiB7XG4gICAgICB0eXBlOiAnQXJpYUludmFsaWQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTZXRzIHRoZSBgYXJpYS1pbnZhbGlkYCBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIHdyYXBwZXIgZWxlbWVudC4gV2hlbiBub3QgcHJvdmlkZWQsIHRoZSBgc3RhdGVgIHByb3Agd2lsbCBjb250cm9sIHRoZSBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXV0b0Nsb3NlOiB7XG4gICAgICB0eXBlOiBcImJvb2xlYW4gfCAnaW5zaWRlJyB8ICdvdXRzaWRlJ1wiLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQ29udHJvbHMgdGhlIGF1dG9tYXRpYyBjbG9zaW5nIG9mIHRoZSBjb21wb25lbnQgd2hlbiBjbGlja2luZy4gU2VlIGFib3ZlIGZvciBkZXRhaWxzLicsXG4gICAgfSxcbiAgICBhdXRvY29tcGxldGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlICdhdXRvY29tcGxldGUnIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgZm9ybSBjb250cm9sXCIsXG4gICAgfSxcbiAgICBhcmlhTGFiZWw6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSB2YWx1ZSBvZiBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBlbGVtZW50JyxcbiAgICB9LFxuICAgIGFyaWFMaXZlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gdGhlIHJlbmRlcmVkIGVsZW1lbnQgaXMgYW4gYGFyaWEtbGl2ZWAgcmVnaW9uIChmb3Igc2NyZWVuIHJlYWRlciB1c2VycyksIHNldCB0byBlaXRoZXIgJ3BvbGl0ZScgb3IgJ2Fzc2VydGl2ZSdcIixcbiAgICB9LFxuICAgIGFyaWFMYWJlbGxlZGJ5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYSBsYWJlbCBmb3IgdGhpcyBjb21wb25lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYGFyaWEtbGFiZWxsZWRieWAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGF1dG9mb2N1czoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIGB0cnVlYCwgYXR0ZW1wdHMgdG8gYXV0by1mb2N1cyB0aGUgY29udHJvbCB3aGVuIGl0IGlzIG1vdW50ZWQsIG9yIHJlLWFjdGl2YXRlZCB3aGVuIGluIGEga2VlcC1hbGl2ZS4gRG9lcyBub3Qgc2V0IHRoZSBgYXV0b2ZvY3VzYCBhdHRyaWJ1dGUgb24gdGhlIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgYmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIGJhY2tncm91bmQgb2YgdGhlIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBib2R5QmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBib2R5Qm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IGJvcmRlcicsXG4gICAgfSxcbiAgICBib2R5Q2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib2R5VGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvZHlUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSB0ZXh0JyxcbiAgICB9LFxuICAgIGJvZHlWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib3JkZXInLFxuICAgIH0sXG4gICAgZGVib3VuY2U6IHtcbiAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgZGVmYXVsdDogJzAnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQgdG8gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGdyZWF0ZXIgdGhhbiB6ZXJvLCB3aWxsIGRlYm91bmNlIHRoZSB1c2VyIGlucHV0LiBIYXMgbm8gZWZmZWN0IGlmIHByb3AgJ2xhenknIGlzIHNldFwiLFxuICAgIH0sXG4gICAgZGVib3VuY2VNYXhXYWl0OiB7XG4gICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgIGRlZmF1bHQ6ICdOYU4nLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG1heGltdW0gdGltZSBpbiBtaWxsaXNlY29uZHMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCcncyBpbnZva2VkXCIsXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCB0byBgdHJ1ZWAsIGRpc2FibGVzIHRoZSBjb21wb25lbnQncyBmdW5jdGlvbmFsaXR5IGFuZCBwbGFjZXMgaXQgaW4gYSBkaXNhYmxlZCBzdGF0ZVwiLFxuICAgIH0sXG4gICAgZGlzYWJsZWRGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGlzYWJsZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGRpc2FibGVkIHN0YXRlJyxcbiAgICB9LFxuICAgIGZsb2F0aW5nOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQsIHJlbmRlcnMgYSBzaW5nbGUgY29udHJvbCBmb3JtIHdpdGggYSBmbG9hdGluZyBsYWJlbC4gVGhpcyBvbmx5IHdvcmtzIGZvciBmb3JtcyB3aGVyZSB0aGUgaW1tZWRpYXRlIGNoaWxkcmVuIGFyZSBhIGxhYmVsIGFuZCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBjb250cm9scy4gU2VlIGFib3ZlIGZvciBkZXRhaWxzLicsXG4gICAgfSxcblxuICAgIGZvb3Rlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlckJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBmb290ZXJCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBib3JkZXInLFxuICAgIH0sXG4gICAgZm9vdGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlclRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlclRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgdGV4dCcsXG4gICAgfSxcbiAgICBmb290ZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb3JtOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnSUQgb2YgdGhlIGZvcm0gdGhhdCB0aGUgZm9ybSBjb250cm9sIGJlbG9uZ3MgdG8uIFNldHMgdGhlIGBmb3JtYCBhdHRyaWJ1dGUgb24gdGhlIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgZm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnKHZhbDogc3RyaW5nLCBldnQ6IEV2ZW50KSA9PiBzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlZmVyZW5jZSB0byBhIGZ1bmN0aW9uIGZvciBmb3JtYXR0aW5nIHRoZSBpbnB1dCcsXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgaGVhZGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgYm9yZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIHRleHQnLFxuICAgIH0sXG4gICAgaGVhZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdVc2VkIHRvIHNldCB0aGUgYGlkYCBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGNvbnRlbnQsIGFuZCB1c2VkIGFzIHRoZSBiYXNlIHRvIGdlbmVyYXRlIGFueSBhZGRpdGlvbmFsIGVsZW1lbnQgSURzIGFzIG5lZWRlZCcsXG4gICAgfSxcbiAgICBsYXp5Rm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCwgdGhlIGlucHV0IGlzIGZvcm1hdHRlZCBvbiBibHVyIGluc3RlYWQgb2YgZWFjaCBrZXlzdHJva2UgKGlmIHRoZXJlIGlzIGEgZm9ybWF0dGVyIHNwZWNpZmllZCknLFxuICAgIH0sXG4gICAgbGlua0NsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NsYXNzIG9yIGNsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGlubmVyIGxpbmsgZWxlbWVudCcsXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgSUQgb2YgdGhlIGFzc29jaWF0ZWQgZGF0YWxpc3QgZWxlbWVudCBvciBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHZhbHVlIG9mIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgbm9CYWNrZHJvcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgYmFja2Ryb3AnLFxuICAgIH0sXG4gICAgbm9FbGxpcHNpczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RvIG5vdCBzaG93IGVsbGlwc2lzIGJ1dHRvbnMnLFxuICAgIH0sXG4gICAgbm9Hb3RvRW5kQnV0dG9uczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0hpZGVzIHRoZSBnbyB0byBmaXJzdCBhbmQgZ28gdG8gbGFzdCBwYWdlIGJ1dHRvbnMnLFxuICAgIH0sXG4gICAgbm9IZWFkZXI6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlICBoZWFkZXInLFxuICAgIH0sXG4gICAgbm9IZWFkZXJDbG9zZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgaGVhZGVyIGNsb3NlIGJ1dHRvbicsXG4gICAgfSxcbiAgICBub0hvdmVyUGF1c2U6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byB0cnVlLCBkaXNhYmxlcyBwYXVzaW5nIHRoZSB0aW1lciBvbiBob3ZlciBiZWhhdmlvcicsXG4gICAgfSxcbiAgICBub1Jlc3VtZU9uSG92ZXJMZWF2ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIHRydWUsIHRoZSB0aW1lciB3aWxsIG5vdCByZXN1bWUgd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBlbGVtZW50LiBJdCB3aWxsIG5lZWQgdG8gYmUgbWFudWFsbHkgcmVzdW1lZCcsXG4gICAgfSxcbiAgICBub3ZhbGlkYXRlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGRpc2FibGVzIGJyb3dzZXIgbmF0aXZlIEhUTUw1IHZhbGlkYXRpb24gb24gY29udHJvbHMgaW4gdGhlIGZvcm0nLFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogJ3JlYWRvbmx5IENoZWNrYm94T3B0aW9uUmF3W10nLFxuICAgICAgZGVmYXVsdDogJygpID0+IFtdJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXJyYXkgb2YgaXRlbXMgdG8gcmVuZGVyIGluIHRoZSBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgcGxhaW46IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXIgdGhlIGZvcm0gY29udHJvbCBpbiBwbGFpbiBtb2RlLCByYXRoZXIgdGhhbiBjdXN0b20gc3R5bGVkIG1vZGUnLFxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogXCInJ1wiLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHBsYWludGV4dDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU2V0IHRoZSBmb3JtIGNvbnRyb2wgYXMgcmVhZG9ubHkgYW5kIHJlbmRlcnMgdGhlIGNvbnRyb2wgdG8gbG9vayBsaWtlIHBsYWluIHRleHQgKG5vIGJvcmRlcnMpJyxcbiAgICB9LFxuICAgIHJlcXVpcmVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FkZHMgdGhlIGByZXF1aXJlZGAgYXR0cmlidXRlIHRvIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcmVhZG9ubHk6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGByZWFkb25seWAgYXR0cmlidXRlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIEFSSUEgYXR0cmlidXRlIGByb2xlYCB0byBhIHNwZWNpZmljIHZhbHVlJyxcbiAgICB9LFxuICAgIHJvdW5kZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4uIFRoZSBgc3F1YXJlYCBwcm9wIHRha2VzIHByZWNlZGVuY2UuIFJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzJyxcbiAgICB9LFxuICAgIHJvdW5kZWRCb3R0b206IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYGJvdHRvbWAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkRW5kOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBlbmRgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZFN0YXJ0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBzdGFydGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkVG9wOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGB0b3BgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogJ1NpemUnLFxuICAgICAgZGVmYXVsdDogJ21kJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNldCB0aGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50J3MgYXBwZWFyYW5jZS4gJ3NtJywgJ21kJyAoZGVmYXVsdCksIG9yICdsZydcIixcbiAgICB9LFxuICAgIHNyYzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VSTCB0byBzZXQgZm9yIHRoZSBgc3JjYCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgc3RhdGU6IHtcbiAgICAgIHR5cGU6ICdWYWxpZGF0aW9uU3RhdGUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb250cm9scyB0aGUgdmFsaWRhdGlvbiBzdGF0ZSBhcHBlYXJhbmNlIG9mIHRoZSBjb21wb25lbnQuIGB0cnVlYCBmb3IgdmFsaWQsIGBmYWxzZWAgZm9yIGludmFsaWQsIG9yIGBudWxsYCBmb3Igbm8gdmFsaWRhdGlvbiBzdGF0ZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgc3VidGl0bGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGVUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2g2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgc3VidGl0bGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGVUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6ICdib2R5LXNlY29uZGFyeScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIHN1YnRpdGxlIHRleHQnLFxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcnLFxuICAgIH0sXG4gICAgdGV4dEZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSB0ZXh0IGxhYmVsJyxcbiAgICB9LFxuICAgIHRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgdGV4dCcsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdGl0bGVDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0aXRsZVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnaDQnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVycyB0aGUgZmVlZGJhY2sgdGV4dCBpbiBhIHJ1ZGltZW50YXJ5IHRvb2x0aXAgc3R5bGUnLFxuICAgIH0sXG4gICAgdmFsaWRhdGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0LCBhZGRzIHRoZSBCb290c3RyYXAgY2xhc3MgJ3dhcy12YWxpZGF0ZWQnIG9uIHRoZSBmb3JtLCB0cmlnZ2VyaW5nIHRoZSBuYXRpdmUgYnJvd3NlciB2YWxpZGF0aW9uIHN0YXRlc1wiLFxuICAgIH0sXG4gICAgdmFsdWVGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndmFsdWUnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHZhbHVlJyxcbiAgICB9LFxuICAgIHZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGNvbXBvbmVudC4gV2hlbiBpbXBsZW1lbnRlZCBgYmctdmFyaWFudGAgYW5kIGB0ZXh0LXZhcmlhbnRgIHdpbGwgdGFrZSBwcmVjZWRlbmNlJyxcbiAgICB9LFxuICAgIHdyYXBwZXJBdHRyczoge1xuICAgICAgdHlwZTogJ1JlYWRvbmx5PEF0dHJzVmFsdWU+JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXR0cmlidXRlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSB3cmFwcGVyIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgd3JhcHBlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYWRkIHRvIHRoZSB3cmFwcGVyIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgcGxhY2VtZW50OiB7XG4gICAgICB0eXBlOiAnUGxhY2VtZW50JyxcbiAgICAgIGRlZmF1bHQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgZGVzY3JpcHRpb246ICdQbGFjZW1lbnQgb2YgYSBmbG9hdGluZyBlbGVtZW50JyxcbiAgICB9LFxuICB9KSBhcyBjb25zdFxuXG5jb25zdCBzaW5nbGV0b25Qcm9wcyA9IE9iamVjdC5mcmVlemUoY29tbW9uUHJvcHMoKSlcblxuZXhwb3J0IGNvbnN0IGJ1aWxkQ29tbW9uUHJvcHMgPSAoXG4gIG9iaj86IFBhcnRpYWw8UmVjb3JkPGtleW9mIHR5cGVvZiBzaW5nbGV0b25Qcm9wcywgUGFydGlhbDxQcm9wUmVmZXJlbmNlPj4+XG4pOiBSZWFkb25seTx0eXBlb2Ygc2luZ2xldG9uUHJvcHM+ID0+IHtcbiAgaWYgKCFvYmopIHJldHVybiBzaW5nbGV0b25Qcm9wc1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGNvbnN0IG15T2JqZWN0ID0gY29tbW9uUHJvcHMoKSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cbiAgLy8gTWVyZ2UgdGhlIHByb3ZpZGVkIG9iamVjdCBpbnRvIHRoZSBjb21tb24gcHJvcHNcbiAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBteU9iamVjdFtrZXldID0ge1xuICAgICAgLi4ubXlPYmplY3Rba2V5XSxcbiAgICAgIC4uLnZhbHVlLFxuICAgIH1cbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShteU9iamVjdCBhcyBhbnkpXG59XG5cbmV4cG9ydCBjb25zdCBjb21tb25FbWl0cyA9IHtcbiAgY2FuY2VsOiB7fSxcbiAgb2s6IHt9LFxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2JhZGdlLmRhdGEudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50cy9iYWRnZS5kYXRhLnRzXCI7aW1wb3J0IHR5cGUge0JCYWRnZVByb3BzLCBCQmFkZ2VTbG90c30gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuaW1wb3J0IHtcbiAgdHlwZSBDb21wb25lbnRSZWZlcmVuY2UsXG4gIGRlZmF1bHRQcm9wU2VjdGlvblN5bWJvbCxcbiAgdHlwZSBQcm9wUmVjb3JkLFxuICB0eXBlIFNsb3RSZWNvcmQsXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHtsaW5rZWRCTGlua1NlY3Rpb24sIGxpbmtQcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvbGlua1Byb3BzJ1xuaW1wb3J0IHtwaWNrfSBmcm9tICcuLi8uLi91dGlscy9vYmplY3RVdGlscydcbmltcG9ydCB7YnVpbGRDb21tb25Qcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uUHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZDogKCk6IENvbXBvbmVudFJlZmVyZW5jZSA9PiAoe1xuICAgIEJCYWRnZToge1xuICAgICAgc291cmNlUGF0aDogJy9CQmFkZ2UvQkJhZGdlLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICBbZGVmYXVsdFByb3BTZWN0aW9uU3ltYm9sXToge1xuICAgICAgICAgIC4uLnBpY2soXG4gICAgICAgICAgICBidWlsZENvbW1vblByb3BzKHtcbiAgICAgICAgICAgICAgdmFyaWFudDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdzZWNvbmRhcnknLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBbJ2JnVmFyaWFudCcsICd2YXJpYW50JywgJ3RleHRWYXJpYW50J11cbiAgICAgICAgICApLFxuICAgICAgICAgIGRvdEluZGljYXRvcjoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2ZhbHNlJywgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0luZGljYXRpb24gcG9zaXRpb24gYW5kIGRvdCBzdHlsaW5nIGFwcGxpZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGlsbDoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2ZhbHNlJywgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJXaGVuIHNldCB0byAndHJ1ZScsIHJlbmRlcnMgdGhlIGJhZGdlIGluIHBpbGwgc3R5bGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRhZzoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiAnc3BhbicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdDb21iaW5lZFBsYWNlbWVudCcsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgJ1BsYWNlbWVudCBvZiB0aGUgYmFkZ2UgcmVsYXRpdmUgdG8gdGhlIGl0cyBwYXJlbnQuIE9uZSBvZiB0aGUgdmFsdWVzIG9mIGBDb21iaW5lZFBsYWNlbWVudGAnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlbW92ZSBcInRoZVwiIGJlZm9yZSBcIml0cyBwYXJlbnRcIilcbiAgICAgICAgICB9LFxuICAgICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPEV4Y2x1ZGU8a2V5b2YgQkJhZGdlUHJvcHMsIGtleW9mIHR5cGVvZiBsaW5rUHJvcHM+PixcbiAgICAgICAgJ0JMaW5rIHByb3BzJzogbGlua2VkQkxpbmtTZWN0aW9uLFxuICAgICAgfSxcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFNsb3RSZWNvcmQ8a2V5b2YgQkJhZGdlU2xvdHM+LFxuICAgIH0sXG4gIH0pLFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQXNCTyxJQUFNLDJCQUEyQjs7O0FDbkJqQyxJQUFNLFNBQVM7QUFFZixJQUFNLFlBQVk7QUFBQSxFQUN2QixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxrQkFBa0I7QUFBQSxJQUNoQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFT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
