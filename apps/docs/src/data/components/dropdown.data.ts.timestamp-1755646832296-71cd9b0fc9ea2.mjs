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
var omit = (objToPluck, keysToPluck) =>
  Object.keys(objToPluck)
    .filter((key) => !keysToPluck.map((el) => el.toString()).includes(key))
    .reduce((result, key) => ({...result, [key]: objToPluck[key]}), {})

// src/utils/showHideData.ts
var showHideEmits = {
  'hide': {
    description:
      "Always emits just before the component has hidden. Cancelable (as long as component wasn't forcibly hidden)",
    args: {
      value: {
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel hide',
      },
    },
  },
  'hide-prevented': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
      },
    },
    description:
      'Emitted when the component tried to close, but was prevented from closing.  This occurs when preventDefault() is called on the event, the user clicks escape and no-close-onbackdrop is set to true, or the user clicks on the backdrop and no-close-onbackdrop is set to true.',
  },
  'hidden': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
      },
    },
    description: 'Always emits after the component is hidden',
  },
  'show': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel show',
      },
    },
    description: 'Always emits just before the component is shown. Cancelable',
  },
  'show-prevented': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
      },
    },
    description:
      'Emitted when the component tried to open, but was prevented from opening. This occurs when preventDefault() is called on the event',
  },
  'shown': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
      },
    },
    description: 'Always emits just after component is shown.',
  },
  'toggle': {
    description:
      "Always emits just before the component is toggled via the exposed 'toggle()' function or useToggle composable . Cancelable (as long as component wasn't forcibly hidden)",
    args: {
      value: {
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel hide',
      },
    },
  },
  'toggle-prevented': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
      },
    },
    description:
      'Emitted when the component tried to toggle, but was prevented from doing so.  This occurs when preventDefault() is called on the event, the user clicks escape and no-close-onbackdrop is set to true, or the user clicks on the backdrop and no-close-onbackdrop is set to true.',
  },
}
var showHideProps = {
  initialAnimation: {
    type: 'boolean',
    default: false,
    description: 'When set, enables the initial animation on mount',
  },
  lazy: {
    type: 'boolean',
    default: false,
    description: 'When set, the content will not be mounted until opened',
  },
  modelValue: {
    type: 'boolean',
    default: false,
    description: 'Controls the visibility of the component',
  },
  noFade: {
    type: 'boolean',
    default: false,
    description: 'Alias for `noAnimation`',
  },
  noAnimation: {
    type: 'boolean',
    default: false,
    description: 'When set, disables the animation',
  },
  show: {
    type: 'boolean',
    default: false,
    description:
      "When set, and prop 'visible' is false on mount, will animate from closed to open on initial mount. Mainly to help with template show. Use model-value for reactive show/hide",
  },
  transProps: {
    type: 'TransitionProps',
    default: void 0,
    description: 'Transition properties',
  },
  unmountLazy: {
    type: 'boolean',
    default: false,
    description: 'When set and `lazy` is true, the content will be unmounted when closed',
  },
  visible: {
    type: 'boolean',
    default: false,
    description: "When 'true', open without animation",
  },
}

// src/utils/dropdownCommon.ts
var dropdownProps = {
  autoClose: {
    type: "boolean | 'inside' | 'outside'",
    default: true,
    description:
      'Controls the automatic closing of the dropdown when clicking. See above for details.',
  },
  boundary: {
    type: 'Boundary | RootBoundary',
    default: 'clippingAncestors',
    description:
      "The boundary constraint of dropdown: any value of floating-us's Boundary or RootBoundary type. See above for details.",
  },
  boundaryPadding: {
    type: 'Padding',
    default: void 0,
    description: 'The virtual padding around the boundary to check for overflow',
  },
  floatingMiddleware: {
    type: 'Middleware[]',
    default: void 0,
    description: 'Directly set the floating-ui middleware behavior. See above for details.',
  },
  icon: {
    type: 'boolean',
    default: false,
    description: 'When set, styles an icon at the beginning or end of the button text',
  },
  isNav: {
    type: 'boolean',
    default: false,
    description: 'Indicates the dropdown is a nav dropdown',
  },
  menuClass: {
    type: 'ClassValue',
    default: void 0,
    description: 'CSS class (or classes) to add to the menu container',
  },
  noCaret: {
    type: 'boolean',
    default: false,
    description: 'Hide the caret indicator on the toggle button',
  },
  noFlip: {
    type: 'boolean',
    default: false,
    description: 'Prevent the menu from auto flipping positions',
  },
  noShift: {
    type: 'boolean',
    default: false,
    description: 'Prevent the menu from automatically shifting positions',
  },
  noSize: {
    type: 'boolean',
    default: false,
    description: 'Prevent the menu from automatically resizing',
  },
  offset: {
    type: 'number | string | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null',
    default: 0,
    description: 'Specify the number of pixels to shift the menu by. See above for details.',
  },
  noWrapper: {
    type: 'boolean',
    default: false,
    description: 'Do not render the dropdown wrapper element',
  },
  split: {
    type: 'boolean',
    default: false,
    description: 'When set, renders a split button dropdown',
  },
  splitButtonType: {
    type: 'ButtonType',
    default: 'button',
    description:
      "Value to place in the 'type' attribute on the split button: 'button', 'submit', 'reset'",
  },
  splitClass: {
    type: 'ClassValue',
    default: void 0,
    description: 'CSS class (or classes) to add to the split button',
  },
  splitDisabled: {
    type: 'boolean',
    default: void 0,
    description: 'When set, the split button is disabled',
  },
  splitHref: {
    type: 'string',
    default: void 0,
    description: 'Denotes the target URL of the link for the split button',
  },
  splitTo: {
    type: 'RouteLocationRaw',
    default: void 0,
    description:
      'Denotes the target route of the split button. When clicked, the value of the to prop will be passed to router.push() internally, so the value can be either a string or a Location descriptor object',
  },
  splitVariant: {
    type: 'ButtonVariant | null',
    default: void 0,
    description:
      "Applies one of the Bootstrap theme color variants to the split button. Defaults to the 'variant' prop value",
  },
  strategy: {
    type: 'Strategy',
    default: 'absolute',
    description: 'The strategy used to determine when to hide the dropdown. See above for details.',
  },
  text: {
    type: 'string',
    default: void 0,
    description: 'Text to place in the toggle button, or in the split button is split mode',
  },
  toggleClass: {
    type: 'ClassValue',
    default: void 0,
    description: 'CSS class (or classes) to add to the toggle button',
  },
  toggleText: {
    type: 'string',
    default: 'Toggle dropdown',
    description:
      'ARIA label (visually-hidden) to set on the toggle when in split mode. Overriden by the slot of the same name',
  },
  teleportDisabled: {
    type: 'boolean',
    default: false,
    description: 'Renders the dropdown in the exact place it was defined',
  },
  teleportTo: {
    type: 'string | RendererElement | null | undefined',
    default: void 0,
    description: 'Overrides the default teleport location',
  },
  ...showHideProps,
  ...pick(
    buildCommonProps({
      role: {
        default: 'menu',
      },
      variant: {
        default: 'secondary',
      },
    }),
    ['ariaLabel', 'disabled', 'id', 'placement', 'role', 'size', 'variant', 'wrapperClass']
  ),
}
var dropdownEmits = {
  ...showHideEmits,
  'split-click': {
    description: 'Emitted when split button is clicked in split mode',
    args: {
      event: {
        type: 'MouseEvent',
        description: 'Native click event object',
      },
    },
  },
  'toggle': {
    description: 'Emitted when toggle button is clicked',
  },
  'cancel': {
    args: void 0,
    description: void 0,
  },
  'ok': {
    args: void 0,
    description: void 0,
  },
}
var dropdownSlots = {
  'default': {
    description: 'Optionally scoped default slot for dropdown menu content',
    scope: {
      hide: {
        type: '() => void',
        description: 'Can be used to close the dropdown',
      },
      show: {
        type: '() => void',
        description: 'Can be used to open the dropdown',
      },
    },
  },
  'button-content': {
    description: 'Can be used to implement custom text with icons and more styling',
  },
  'toggle-text': {
    description:
      'ARIA label (visually-hidden) to set on the toggle when in split mode. Overrides the toggle-text prop',
  },
}

// src/data/components/dropdown.data.ts
var dropdown_data_default = {
  load: () => ({
    BDropdown: {
      sourcePath: '/BDropdown/BDropdown.vue',
      props: dropdownProps,
      emits: dropdownEmits,
      slots: dropdownSlots,
    },
    BDropdownDivider: {
      sourcePath: '/BDropdown/BDropdownDivider.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'hr',
            },
          }),
          ['tag', 'variant', 'wrapperAttrs']
        ),
        dividerClass: {
          type: 'ClassValue',
          default: void 0,
          description: 'CSS class (or classes) to add to the divider component',
        },
      },
    },
    BDropdownForm: {
      sourcePath: '/BDropdown/BDropdownForm.vue',
      props: {
        ...pick(buildCommonProps(), ['wrapperAttrs']),
        formClass: {
          type: 'ClassValue',
          default: void 0,
          description: 'CSS class (or classes) to add to the form component',
        },
        novalidate: {
          notYetImplemented: true,
          // description: 'Disables HTML5 form validation' // TODO missing description
        },
        validated: {
          notYetImplemented: true,
          // description: 'Marks the form as validated' // TODO missing description
        },
      },
      slots: {
        default: {
          description: 'Content to place in the dropdown form',
        },
      },
    },
    BDropdownGroup: {
      sourcePath: '/BDropdown/BDropdownGroup.vue',
      props: {
        ...pick(
          buildCommonProps({
            headerTag: {
              default: 'header',
            },
          }),
          ['ariaDescribedby', 'headerClass', 'headerTag', 'headerVariant', 'id']
        ),
        header: {
          type: 'string',
          default: void 0,
          // description: 'Text content for the dropdown group header' // TODO missing description
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content (items) to place in the dropdown group',
        },
        header: {
          description: 'Optional header content for the dropdown group',
        },
      },
    },
    BDropdownHeader: {
      sourcePath: '/BDropdown/BDropdownHeader.vue',
      props: {
        ...pick(buildCommonProps(), ['headerClass', 'tag', 'variant', 'wrapperAttrs']),
        text: {
          type: 'string',
          default: void 0,
          description: 'Content to place in the dropdown text. Default slot takes precedence',
          // TODO grammar check (should say "dropdown header" instead of "dropdown text") // TODO similar content to BDropdownText/text (similar description structure)
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the dropdown header',
        },
      },
    },
    BDropdownItem: {
      sourcePath: '/BDropdown/BDropdownItem.vue',
      props: {
        [defaultPropSectionSymbol]: pick(buildCommonProps(), ['linkClass', 'wrapperAttrs']),
        'BLink props': {
          _opts: {
            linkTo,
          },
          _data: omit(linkProps, ['routerTag']),
        },
      },
      emits: {
        click: {
          description: 'Emitted when item is clicked',
          args: {
            value: {
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content to place in the dropdown item',
        },
      },
    },
    BDropdownItemButton: {
      sourcePath: '/BDropdown/BDropdownItemButton.vue',
      props: {
        ...pick(buildCommonProps(), [
          'active',
          'activeClass',
          'disabled',
          'variant',
          'wrapperAttrs',
        ]),
        buttonClass: {
          type: 'ClassValue',
          default: void 0,
          description: 'Class or classes to apply to the inner button element',
        },
      },
      emits: {
        click: {
          description: 'Emitted when item is clicked',
          args: {
            value: {
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content to place in the dropdown item button',
        },
      },
    },
    BDropdownText: {
      sourcePath: '/BDropdown/BDropdownText.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'span',
            },
          }),
          ['tag', 'variant', 'wrapperAttrs']
        ),
        text: {
          type: 'string',
          default: void 0,
          description: 'Content to place in the dropdown text. Default slot takes precedence',
          // TODO similar content to BDropdownHeader/text (similar description structure)
        },
        textClass: {
          type: 'ClassValue',
          default: void 0,
          description: 'CSS class (or classes) to add to the text component',
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the dropdown text',
        },
      },
    },
  }),
}
export {dropdown_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3R5cGVzL2luZGV4LnRzIiwgInNyYy91dGlscy9saW5rUHJvcHMudHMiLCAic3JjL3V0aWxzL2NvbW1vblByb3BzLnRzIiwgInNyYy91dGlscy9vYmplY3RVdGlscy50cyIsICJzcmMvdXRpbHMvc2hvd0hpZGVEYXRhLnRzIiwgInNyYy91dGlscy9kcm9wZG93bkNvbW1vbi50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL2Ryb3Bkb3duLmRhdGEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdHlwZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy90eXBlcy9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdHlwZXMvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7dXNlU2Nyb2xsc3B5fSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudEl0ZW0gPSBFeGNsdWRlPGtleW9mIENvbXBvbmVudFJlZmVyZW5jZSwgJ2NvbXBvbmVudCcgfCAnc2VjdGlvbnMnPlxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BSZWZlcmVuY2Uge1xuICB0eXBlPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRlZmF1bHQ/OiB1bmtub3duXG4gIG5vdFlldEltcGxlbWVudGVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcm9wUmVjb3JkV2l0aE9wdGlvbnMgPSB7XG4gIF9kYXRhOiBQcm9wUmVjb3JkIC8vIEFsbG93cyBmb3IgYSBzaW5nbGUgc2VjdGlvbiBvciBtdWx0aXBsZSBzZWN0aW9uc1xuICBfb3B0cz86IHtsaW5rVG8/OiBzdHJpbmd9XG59XG4vLyBGbGF0IHZhcmlhbnRcbmV4cG9ydCB0eXBlIFByb3BSZWNvcmQ8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gPSBSZWNvcmQ8VCwgUHJvcFJlZmVyZW5jZT5cbi8vIE11bHRpcGxlIHNlY3Rpb25zIHZhcmlhbnRcbmV4cG9ydCB0eXBlIFByb3BSZWNvcmRXaXRoTXVsdGlwbGVTZWN0aW9ucyA9IHtcbiAgW2RlZmF1bHRQcm9wU2VjdGlvblN5bWJvbF06IFByb3BSZWNvcmQgfCBQcm9wUmVjb3JkV2l0aE9wdGlvbnNcbn0gJiB7W2tleTogc3RyaW5nXTogUHJvcFJlY29yZCB8IFByb3BSZWNvcmRXaXRoT3B0aW9uc31cbi8vIE9wdGlvbnMgdmFyaWFudFxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9wU2VjdGlvblN5bWJvbCA9ICdfZGVmYXVsdFByb3BTZWN0aW9uJ1xuXG5leHBvcnQgdHlwZSBFbWl0QXJnUmVmZXJlbmNlID0gUmVjb3JkPHN0cmluZywge3R5cGU6IHN0cmluZzsgZGVzY3JpcHRpb24/OiBzdHJpbmd9PlxuZXhwb3J0IHR5cGUgRW1pdFJlZmVyZW5jZSA9IHtcbiAgYXJncz86IEVtaXRBcmdSZWZlcmVuY2VcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn1cbmV4cG9ydCB0eXBlIEVtaXRSZWNvcmQ8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gPSBSZWNvcmQ8VCwgRW1pdFJlZmVyZW5jZT5cblxuZXhwb3J0IHR5cGUgU2xvdFNjb3BlUmVmZXJlbmNlID0gUmVjb3JkPFxuICBzdHJpbmcsXG4gIHtcbiAgICB0eXBlOiBzdHJpbmcgfCBzdHJpbmdbXVxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgbm90WWV0SW1wbGVtZW50ZWQ/OiBib29sZWFuXG4gIH1cbj5cbmV4cG9ydCB0eXBlIFNsb3RSZWZlcmVuY2UgPSB7XG4gIHNjb3BlPzogU2xvdFNjb3BlUmVmZXJlbmNlXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG59XG5leHBvcnQgdHlwZSBTbG90UmVjb3JkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+ID0gUmVjb3JkPFQsIFNsb3RSZWZlcmVuY2U+XG5cbmV4cG9ydCBjb25zdCBlbnVtIFN0eWxlS2luZCB7XG4gIEJvb3RzdHJhcENsYXNzID0gJ0JPT1RTVFJBUC1DTEFTUycsXG4gIEJzdm5DbGFzcyA9ICdCU1ZOLUNMQVNTJyxcbiAgT3ZlcnJpZGVDbGFzcyA9ICdPVkVSUklERS1DTEFTUycsXG4gIFRhZyA9ICdUQUcnLFxuICBOb25lID0gJ05PTkUnLFxufVxuZXhwb3J0IGludGVyZmFjZSBTdHlsZVNwZWMge1xuICBraW5kOiBTdHlsZUtpbmRcbiAgdmFsdWU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50U2VjdGlvbiA9ICdQcm9wZXJ0aWVzJyB8ICdFdmVudHMnIHwgJ1Nsb3RzJ1xuZXhwb3J0IHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlID0gUmVjb3JkPFxuICBzdHJpbmcsXG4gIHtcbiAgICBzdHlsZVNwZWM/OiBTdHlsZVNwZWNcbiAgICAvKipcbiAgICAgKiBVc2UgcGFja2FnZSBkaXJlY3RvcnkgcmVsYXRpdmUgbGlua3MuIGV4OiBCQWNjb3JkaW9uLnZ1ZSA9PiAvQkFjY29yZGlvbi9CQWNjb3JkaW9uLnZ1ZSAoc2xhc2ggcmVxdWlyZWQpXG4gICAgICpcbiAgICAgKiBJZiBwYXRoIGlzIGVtcHR5IHN0cmluZywgaXQgZGVmYXVsdHMgdG8gdGhlIHBhY2thZ2UgZGlyZWN0b3J5LiBJZiBudWxsLCBpdCBkb2VzIG5vdCByZW5kZXIgdGhlIGJ1dHRvblxuICAgICAqL1xuICAgIHNvdXJjZVBhdGg6IHN0cmluZyB8IG51bGxcbiAgICBwcm9wczogUHJvcFJlY29yZFdpdGhPcHRpb25zIHwgUHJvcFJlY29yZCB8IFByb3BSZWNvcmRXaXRoTXVsdGlwbGVTZWN0aW9uc1xuICAgIGVtaXRzPzogRW1pdFJlY29yZFxuICAgIHNsb3RzPzogU2xvdFJlY29yZFxuICAgIHNlY3Rpb25zPzogQ29tcG9uZW50U2VjdGlvbltdXG4gIH1cbj5cblxuZXhwb3J0IHR5cGUgQ29sbGVjdGl2ZU1lbWJlcnNSZXNwb25zZSA9IHtcbiAgTWVtYmVySWQ6IG51bWJlclxuICBjcmVhdGVkQXQ6IHN0cmluZ1xuICB0eXBlOiBzdHJpbmdcbiAgcm9sZTogc3RyaW5nXG4gIHRpZXI6IHN0cmluZ1xuICBpc0FjdGl2ZTogYm9vbGVhblxuICB0b3RhbEFtb3VudERvbmF0ZWQ6IG51bWJlclxuICBjdXJyZW5jeTogc3RyaW5nXG4gIGxhc3RUcmFuc2FjdGlvbkF0OiBzdHJpbmdcbiAgbGFzdFRyYW5zYWN0aW9uQW1vdW50OiBudW1iZXJcbiAgcHJvZmlsZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBjb21wYW55OiBudWxsIHwgbnVsbFxuICBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbFxuICBpbWFnZTogc3RyaW5nIHwgbnVsbFxuICBlbWFpbDogbnVsbCB8IHN0cmluZ1xuICB0d2l0dGVyOiBudWxsIHwgc3RyaW5nXG4gIGdpdGh1Yjogc3RyaW5nIHwgbnVsbFxuICB3ZWJzaXRlOiBudWxsIHwgc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIENvbGxlY3RpdmVQYXJ0aWFsUmVzcG9uc2UgPSB7XG4gIG1lbWJlcnM6IENvbGxlY3RpdmVNZW1iZXJzUmVzcG9uc2VbXVxufVxuXG5leHBvcnQgdHlwZSBTY3JvbGxzcHlJdGVtID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlU2Nyb2xsc3B5PlsnbGlzdCddWyd2YWx1ZSddWzBdXG5leHBvcnQgdHlwZSBIZWFkZXJJdGVtID0gU2Nyb2xsc3B5SXRlbSAmIHt0YWc6IHN0cmluZzsgbGV2ZWw6IG51bWJlcn1cbmV4cG9ydCB0eXBlIENvbnRlbnRzSXRlbSA9IEhlYWRlckl0ZW0gJiB7Y2hpbGRyZW46IENvbnRlbnRzSXRlbVtdfVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9saW5rUHJvcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2xpbmtQcm9wcy50c1wiO2ltcG9ydCB0eXBlIHtCTGlua1Byb3BzfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5pbXBvcnQgdHlwZSB7UHJvcFJlY29yZCwgUHJvcFJlY29yZFdpdGhPcHRpb25zfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGxpbmtUbyA9ICcvZG9jcy9jb21wb25lbnRzL2xpbmsnXG5cbmV4cG9ydCBjb25zdCBsaW5rUHJvcHMgPSB7XG4gIGFjdGl2ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byBgdHJ1ZWAsIHBsYWNlcyB0aGUgY29tcG9uZW50IGluIHRoZSBhY3RpdmUgc3RhdGUgd2l0aCBhY3RpdmUgc3R5bGluZycsXG4gIH0sXG4gIGFjdGl2ZUNsYXNzOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3JvdXRlci1saW5rLWFjdGl2ZScsXG4gICAgZGVzY3JpcHRpb246ICdDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZS4nLFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2hlbiBzZXQgdG8gYHRydWVgLCBkaXNhYmxlcyB0aGUgbGluaydzIGZ1bmN0aW9uYWxpdHkuIFNlZSBhYm92ZSBmb3IgZGV0YWlscyBhbmQgbGltaXRhdGlvbnNcIixcbiAgfSxcbiAgZXhhY3RBY3RpdmVDbGFzczoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdyb3V0ZXItbGluay1leGFjdC1hY3RpdmUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29uZmlndXJlIHRoZSBhY3RpdmUgQ1NTIGNsYXNzIGFwcGxpZWQgd2hlbiB0aGUgbGluayBpcyBhY3RpdmUgd2l0aCBleGFjdCBtYXRjaC4nLFxuICB9LFxuICBocmVmOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVub3RlcyB0aGUgdGFyZ2V0IFVSTCBvZiB0aGUgbGluayBmb3Igc3RhbmRhcmQgYSBsaW5rcycsXG4gIH0sXG4gIGljb246IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byBgdHJ1ZWAsIHN0eWxlcyBhbiBpY29uIGF0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBsaW5rIHRleHQnLFxuICB9LFxuICBub1ByZWZldGNoOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RvIGltcHJvdmUgdGhlIHJlc3BvbnNpdmVuZXNzIG9mIHlvdXIgTnV4dC5qcyBhcHBsaWNhdGlvbnMsIHdoZW4gdGhlIGxpbmsgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSB2aWV3cG9ydCwgTnV4dC5qcyB3aWxsIGF1dG9tYXRpY2FsbHkgcHJlZmV0Y2ggdGhlIGNvZGUgc3BsaXR0ZWQgcGFnZS4gU2V0dGluZyBgbm8tcHJlZmV0Y2hgIHdpbGwgZGlzYWJsZWQgdGhpcyBmZWF0dXJlIGZvciB0aGUgc3BlY2lmaWMgbGluaycsXG4gICAgbm90WWV0SW1wbGVtZW50ZWQ6IHRydWUsXG4gIH0sXG4gIG9wYWNpdHk6IHtcbiAgICB0eXBlOiBcIjEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBhbHBoYSBvcGFjaXR5IG9mIHRoZSBsaW5rIGByZ2JhKClgIGNvbG9yIHZhbHVlJyxcbiAgfSxcbiAgb3BhY2l0eUhvdmVyOiB7XG4gICAgdHlwZTogXCIxMCB8IDI1IHwgNTAgfCA3NSB8IDEwMCB8ICcxMCcgfCAnMjUnIHwgJzUwJyB8ICc3NScgfCAnMTAwJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NoYW5nZSB0aGUgYWxwaGEgb3BhY2l0eSBvZiB0aGUgbGluayBgcmdiYSgpYCBjb2xvciB2YWx1ZSBvbiBob3ZlcicsXG4gIH0sXG4gIHByZWZldGNoOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUbyBpbXByb3ZlIHRoZSByZXNwb25zaXZlbmVzcyBvZiB5b3VyIE51eHQuanMgYXBwbGljYXRpb25zLCB3aGVuIHRoZSBsaW5rIHdpbGwgYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgdmlld3BvcnQsIE51eHQuanMgd2lsbCBhdXRvbWF0aWNhbGx5IHByZWZldGNoIHRoZSBjb2RlIHNwbGl0dGVkIHBhZ2UuIFNldHRpbmcgYHByZWZldGNoYCB0byBgdHJ1ZWAgb3IgYGZhbHNlYCB3aWxsIG92ZXJ3cml0ZSB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBgcm91dGVyLnByZWZldGNoTGlua3NgJyxcbiAgfSxcbiAgcHJlZmV0Y2hlZENsYXNzOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnTm90IFlldCBJbXBsbWVudGVkOiBBIGNsYXNzIHRvIGFwcGx5IHRvIGxpbmtzIHRoYXQgaGF2ZSBiZWVuIHByZWZldGNoZWQuJyxcbiAgfSxcbiAgcHJlZmV0Y2hPbjoge1xuICAgIHR5cGU6ICdQYXJ0aWFsPHt2aXNpYmlsaXR5OiBib29sZWFuLCBpbnRlcmFjdGlvbjogYm9vbGVhbn0+JyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFsbG93cyBjdXN0b20gY29udHJvbCBvZiB3aGVuIHRvIHByZWZldGNoIGxpbmtzLiBQb3NzaWJsZSBvcHRpb25zIGFyZSAnaW50ZXJhY3Rpb24nIGFuZCAndmlzaWJpbGl0eScgKGRlZmF1bHQpLlwiLFxuICB9LFxuICBub1JlbDoge30sXG4gIHJlbDoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAncmVsJyBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGxpbmtcIixcbiAgfSxcbiAgcmVwbGFjZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdTZXR0aW5nIHJlcGxhY2UgcHJvcCB3aWxsIGNhbGwgcm91dGVyLnJlcGxhY2UoKSBpbnN0ZWFkIG9mIHJvdXRlci5wdXNoKCkgd2hlbiBjbGlja2VkJyxcbiAgfSxcbiAgcm91dGVyQ29tcG9uZW50TmFtZToge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdyb3V0ZXItbGluaycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQm9vdHN0cmFwVnVlIGF1dG8gZGV0ZWN0cyBiZXR3ZWVuIGA8cm91dGVyLWxpbms+YCBhbmQgYDxudXh0LWxpbms+YC4gU2V0IHRoaXMgdGhpcyBwcm9wZXJ0eSB0byBleHBsaWNpdHkgc2V0IHRoZSBuYW1lIG9mIHRoZSByb3V0ZXIgY29tcG9uZW50LicsXG4gIH0sXG4gIHJvdXRlclRhZzoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdhJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCB0aGUgdGFnIHR5cGUgZm9yIHRoZSBsaW5rJyxcbiAgfSxcbiAgc3RyZXRjaGVkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXaGVuIHNldCB0byBgdHJ1ZWAsIG1ha2VzIHRoZSBsaW5rJ3MgYGNvbnRhaW5pbmcgYmxvY2tgIGNsaWNrYWJsZSB2aWEgYW4gYDo6YWZ0ZXJgIHBzZXVkbyBlbGVtZW50XCIsXG4gIH0sXG4gIHRhcmdldDoge1xuICAgIHR5cGU6ICdMaW5rVGFyZ2V0JyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ3RhcmdldCcgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBsaW5rXCIsXG4gIH0sXG4gIHRvOiB7XG4gICAgdHlwZTogJ1JvdXRlTG9jYXRpb25SYXcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdEZW5vdGVzIHRoZSB0YXJnZXQgcm91dGUgb2YgdGhlIGxpbmsuIFdoZW4gY2xpY2tlZCwgdGhlIHZhbHVlIG9mIHRoZSB0byBwcm9wIHdpbGwgYmUgcGFzc2VkIHRvIGByb3V0ZXIucHVzaCgpYCBpbnRlcm5hbGx5JyxcbiAgfSxcbiAgdW5kZXJsaW5lT2Zmc2V0OiB7XG4gICAgdHlwZTogXCIxIHwgMiB8IDMgfCAnMScgfCAnMicgfCAnMydcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGRpc3RhbmNlIG9mIHRoZSB1bmRlcmxpbmUgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBsaW5rIHRleHQnLFxuICB9LFxuICB1bmRlcmxpbmVPZmZzZXRIb3Zlcjoge1xuICAgIHR5cGU6IFwiMSB8IDIgfCAzIHwgJzEnIHwgJzInIHwgJzMnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBkaXN0YW5jZSBvZiB0aGUgdW5kZXJsaW5lIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgbGluayB0ZXh0IG9uIGhvdmVyJyxcbiAgfSxcbiAgdW5kZXJsaW5lT3BhY2l0eToge1xuICAgIHR5cGU6IFwiMCB8IDEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzAnIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldCdzIHRoZSBvcGFjaXR5IG9mIHRoZSBsaW5rJ3MgdW5kZXJsaW5lXCIsXG4gIH0sXG4gIHVuZGVybGluZU9wYWNpdHlIb3Zlcjoge1xuICAgIHR5cGU6IFwiMCB8IDEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzAnIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldCdzIHRoZSBvcGFjaXR5IG9mIHRoZSBsaW5rJ3MgdW5kZXJsaW5lIG9uIGhvdmVyXCIsXG4gIH0sXG4gIHVuZGVybGluZVZhcmlhbnQ6IHtcbiAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCB0aGUgY29sb3IgdmFyaWFudCBmb3IgdGhlIGxpbmsgdW5kZXJsaW5lIGluZGVwZW5kZW50bHkgb2YgdGhlIGxpbmsgdGV4dCcsXG4gIH0sXG4gIHZhcmlhbnQ6IHtcbiAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCB0aGUgY29sb3IgdmFyaWFudCBmb3IgdGhlIGxpbmsnLFxuICB9LFxuICAvLyBUT0RPOiByZW1vdmUgdGhlIGhhcmQtY29kZWQgTllJIHByb3BzIGJlbG93IHdoZW4gdGhleSBhcmUgaW1wbGVtZW50ZWRcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkxpbmtQcm9wcyB8ICdub1ByZWZldGNoJyB8ICdwcmVmZXRjaCcgfCAncHJlZmV0Y2hlZENsYXNzJz5cblxuZXhwb3J0IGNvbnN0IGxpbmtlZEJMaW5rU2VjdGlvbiA9IHtcbiAgX29wdHM6IHtcbiAgICBsaW5rVG8sXG4gIH0sXG4gIF9kYXRhOiBsaW5rUHJvcHMsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBQcm9wUmVjb3JkV2l0aE9wdGlvbnNcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvY29tbW9uUHJvcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2NvbW1vblByb3BzLnRzXCI7aW1wb3J0IHR5cGUge1Byb3BSZWZlcmVuY2V9IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCBjb21tb25Qcm9wcyA9ICgpID0+XG4gICh7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gYHRydWVgLCBwbGFjZXMgdGhlIGNvbXBvbmVudCBpbiB0aGUgYWN0aXZlIHN0YXRlIHdpdGggYWN0aXZlIHN0eWxpbmcnLFxuICAgIH0sXG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6ICdhY3RpdmUnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiQ29uZmlndXJlIHRoZSBhY3RpdmUgQ1NTIGNsYXNzIGFwcGxpZWQgd2hlbiB0aGUgbGluayBpcyBhY3RpdmUuIFR5cGljYWxseSB5b3Ugd2lsbCB3YW50IHRvIHNldCB0aGlzIHRvIGNsYXNzIG5hbWUgJ2FjdGl2ZSdcIixcbiAgICB9LFxuICAgIGFsdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmFsdWUgdG8gc2V0IGZvciB0aGUgYGFsdGAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGFyaWFDb250cm9sczoge1xuICAgICAgdHlwZTogJ0FyaWFJbnZhbGlkJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnSWYgdGhpcyBjb21wb25lbnQgY29udHJvbHMgYW5vdGhlciBjb21wb25lbnQgb3IgZWxlbWVudCwgc2V0IHRoaXMgdG8gdGhlIElEIG9mIHRoZSBjb250cm9sbGVkIGNvbXBvbmVudCBvciBlbGVtZW50JyxcbiAgICB9LFxuICAgIGFyaWFEZXNjcmliZWRieToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgZGVzY3JpcHRpb24gZm9yIHRoaXMgY29tcG9uZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBhcmlhLWRlc2NyaWJlZGJ5YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXJpYUludmFsaWQ6IHtcbiAgICAgIHR5cGU6ICdBcmlhSW52YWxpZCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NldHMgdGhlIGBhcmlhLWludmFsaWRgIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgd3JhcHBlciBlbGVtZW50LiBXaGVuIG5vdCBwcm92aWRlZCwgdGhlIGBzdGF0ZWAgcHJvcCB3aWxsIGNvbnRyb2wgdGhlIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhdXRvQ2xvc2U6IHtcbiAgICAgIHR5cGU6IFwiYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnXCIsXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb250cm9scyB0aGUgYXV0b21hdGljIGNsb3Npbmcgb2YgdGhlIGNvbXBvbmVudCB3aGVuIGNsaWNraW5nLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgICB9LFxuICAgIGF1dG9jb21wbGV0ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ2F1dG9jb21wbGV0ZScgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSBmb3JtIGNvbnRyb2xcIixcbiAgICB9LFxuICAgIGFyaWFMYWJlbDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHZhbHVlIG9mIGBhcmlhLWxhYmVsYCBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgYXJpYUxpdmU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiB0aGUgcmVuZGVyZWQgZWxlbWVudCBpcyBhbiBgYXJpYS1saXZlYCByZWdpb24gKGZvciBzY3JlZW4gcmVhZGVyIHVzZXJzKSwgc2V0IHRvIGVpdGhlciAncG9saXRlJyBvciAnYXNzZXJ0aXZlJ1wiLFxuICAgIH0sXG4gICAgYXJpYUxhYmVsbGVkYnk6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIGxhYmVsIGZvciB0aGlzIGNvbXBvbmVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgYXJpYS1sYWJlbGxlZGJ5YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXV0b2ZvY3VzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gYHRydWVgLCBhdHRlbXB0cyB0byBhdXRvLWZvY3VzIHRoZSBjb250cm9sIHdoZW4gaXQgaXMgbW91bnRlZCwgb3IgcmUtYWN0aXZhdGVkIHdoZW4gaW4gYSBrZWVwLWFsaXZlLiBEb2VzIG5vdCBzZXQgdGhlIGBhdXRvZm9jdXNgIGF0dHJpYnV0ZSBvbiB0aGUgY29udHJvbCcsXG4gICAgfSxcbiAgICBiZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gYmFja2dyb3VuZCBvZiB0aGUgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIGJvZHlCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGJvZHlCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgYm9yZGVyJyxcbiAgICB9LFxuICAgIGJvZHlDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvZHlUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9keVRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IHRleHQnLFxuICAgIH0sXG4gICAgYm9keVZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvcmRlcicsXG4gICAgfSxcbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICBkZWZhdWx0OiAnMCcsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCB0byBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZ3JlYXRlciB0aGFuIHplcm8sIHdpbGwgZGVib3VuY2UgdGhlIHVzZXIgaW5wdXQuIEhhcyBubyBlZmZlY3QgaWYgcHJvcCAnbGF6eScgaXMgc2V0XCIsXG4gICAgfSxcbiAgICBkZWJvdW5jZU1heFdhaXQ6IHtcbiAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgZGVmYXVsdDogJ05hTicsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbWF4aW11bSB0aW1lIGluIG1pbGxpc2Vjb25kcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0JydzIGludm9rZWRcIixcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0IHRvIGB0cnVlYCwgZGlzYWJsZXMgdGhlIGNvbXBvbmVudCdzIGZ1bmN0aW9uYWxpdHkgYW5kIHBsYWNlcyBpdCBpbiBhIGRpc2FibGVkIHN0YXRlXCIsXG4gICAgfSxcbiAgICBkaXNhYmxlZEZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXNhYmxlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgZGlzYWJsZWQgc3RhdGUnLFxuICAgIH0sXG4gICAgZmxvYXRpbmc6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCwgcmVuZGVycyBhIHNpbmdsZSBjb250cm9sIGZvcm0gd2l0aCBhIGZsb2F0aW5nIGxhYmVsLiBUaGlzIG9ubHkgd29ya3MgZm9yIGZvcm1zIHdoZXJlIHRoZSBpbW1lZGlhdGUgY2hpbGRyZW4gYXJlIGEgbGFiZWwgYW5kIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGNvbnRyb2xzLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgICB9LFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyQmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGZvb3RlckJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIGJvcmRlcicsXG4gICAgfSxcbiAgICBmb290ZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciB0ZXh0JyxcbiAgICB9LFxuICAgIGZvb3RlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdJRCBvZiB0aGUgZm9ybSB0aGF0IHRoZSBmb3JtIGNvbnRyb2wgYmVsb25ncyB0by4gU2V0cyB0aGUgYGZvcm1gIGF0dHJpYnV0ZSBvbiB0aGUgY29udHJvbCcsXG4gICAgfSxcbiAgICBmb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICcodmFsOiBzdHJpbmcsIGV2dDogRXZlbnQpID0+IHN0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVmZXJlbmNlIHRvIGEgZnVuY3Rpb24gZm9yIGZvcm1hdHRpbmcgdGhlIGlucHV0JyxcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlckJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBoZWFkZXJCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBib3JkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlclRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlclRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgdGV4dCcsXG4gICAgfSxcbiAgICBoZWFkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1VzZWQgdG8gc2V0IHRoZSBgaWRgIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgY29udGVudCwgYW5kIHVzZWQgYXMgdGhlIGJhc2UgdG8gZ2VuZXJhdGUgYW55IGFkZGl0aW9uYWwgZWxlbWVudCBJRHMgYXMgbmVlZGVkJyxcbiAgICB9LFxuICAgIGxhenlGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0LCB0aGUgaW5wdXQgaXMgZm9ybWF0dGVkIG9uIGJsdXIgaW5zdGVhZCBvZiBlYWNoIGtleXN0cm9rZSAoaWYgdGhlcmUgaXMgYSBmb3JtYXR0ZXIgc3BlY2lmaWVkKScsXG4gICAgfSxcbiAgICBsaW5rQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3Mgb3IgY2xhc3NlcyB0byBhcHBseSB0byB0aGUgaW5uZXIgbGluayBlbGVtZW50JyxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBJRCBvZiB0aGUgYXNzb2NpYXRlZCBkYXRhbGlzdCBlbGVtZW50IG9yIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBuYW1lYCBhdHRyaWJ1dGUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICBub0JhY2tkcm9wOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSBiYWNrZHJvcCcsXG4gICAgfSxcbiAgICBub0VsbGlwc2lzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRG8gbm90IHNob3cgZWxsaXBzaXMgYnV0dG9ucycsXG4gICAgfSxcbiAgICBub0dvdG9FbmRCdXR0b25zOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSGlkZXMgdGhlIGdvIHRvIGZpcnN0IGFuZCBnbyB0byBsYXN0IHBhZ2UgYnV0dG9ucycsXG4gICAgfSxcbiAgICBub0hlYWRlcjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgIGhlYWRlcicsXG4gICAgfSxcbiAgICBub0hlYWRlckNsb3NlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSBoZWFkZXIgY2xvc2UgYnV0dG9uJyxcbiAgICB9LFxuICAgIG5vSG92ZXJQYXVzZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIHRydWUsIGRpc2FibGVzIHBhdXNpbmcgdGhlIHRpbWVyIG9uIGhvdmVyIGJlaGF2aW9yJyxcbiAgICB9LFxuICAgIG5vUmVzdW1lT25Ib3ZlckxlYXZlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gdHJ1ZSwgdGhlIHRpbWVyIHdpbGwgbm90IHJlc3VtZSB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIGVsZW1lbnQuIEl0IHdpbGwgbmVlZCB0byBiZSBtYW51YWxseSByZXN1bWVkJyxcbiAgICB9LFxuICAgIG5vdmFsaWRhdGU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZGlzYWJsZXMgYnJvd3NlciBuYXRpdmUgSFRNTDUgdmFsaWRhdGlvbiBvbiBjb250cm9scyBpbiB0aGUgZm9ybScsXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiAncmVhZG9ubHkgQ2hlY2tib3hPcHRpb25SYXdbXScsXG4gICAgICBkZWZhdWx0OiAnKCkgPT4gW10nLFxuICAgICAgZGVzY3JpcHRpb246ICdBcnJheSBvZiBpdGVtcyB0byByZW5kZXIgaW4gdGhlIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBwbGFpbjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlciB0aGUgZm9ybSBjb250cm9sIGluIHBsYWluIG1vZGUsIHJhdGhlciB0aGFuIGN1c3RvbSBzdHlsZWQgbW9kZScsXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiBcIicnXCIsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcGxhaW50ZXh0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTZXQgdGhlIGZvcm0gY29udHJvbCBhcyByZWFkb25seSBhbmQgcmVuZGVycyB0aGUgY29udHJvbCB0byBsb29rIGxpa2UgcGxhaW4gdGV4dCAobm8gYm9yZGVycyknLFxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWRkcyB0aGUgYHJlcXVpcmVkYCBhdHRyaWJ1dGUgdG8gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICByZWFkb25seToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgYHJlYWRvbmx5YCBhdHRyaWJ1dGUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgQVJJQSBhdHRyaWJ1dGUgYHJvbGVgIHRvIGEgc3BlY2lmaWMgdmFsdWUnLFxuICAgIH0sXG4gICAgcm91bmRlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbi4gVGhlIGBzcXVhcmVgIHByb3AgdGFrZXMgcHJlY2VkZW5jZS4gUmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMnLFxuICAgIH0sXG4gICAgcm91bmRlZEJvdHRvbToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgYm90dG9tYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRFbmQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYGVuZGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkU3RhcnQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYHN0YXJ0YCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRUb3A6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYHRvcGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiAnU2l6ZScsXG4gICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0IHRoZSBzaXplIG9mIHRoZSBjb21wb25lbnQncyBhcHBlYXJhbmNlLiAnc20nLCAnbWQnIChkZWZhdWx0KSwgb3IgJ2xnJ1wiLFxuICAgIH0sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVVJMIHRvIHNldCBmb3IgdGhlIGBzcmNgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgdHlwZTogJ1ZhbGlkYXRpb25TdGF0ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRyb2xzIHRoZSB2YWxpZGF0aW9uIHN0YXRlIGFwcGVhcmFuY2Ugb2YgdGhlIGNvbXBvbmVudC4gYHRydWVgIGZvciB2YWxpZCwgYGZhbHNlYCBmb3IgaW52YWxpZCwgb3IgYG51bGxgIGZvciBubyB2YWxpZGF0aW9uIHN0YXRlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBzdWJ0aXRsZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnaDYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBzdWJ0aXRsZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZVRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogJ2JvZHktc2Vjb25kYXJ5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgc3VidGl0bGUgdGV4dCcsXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZycsXG4gICAgfSxcbiAgICB0ZXh0RmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHRleHQgbGFiZWwnLFxuICAgIH0sXG4gICAgdGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSB0ZXh0JyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0aXRsZUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRpdGxlVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdoNCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXJzIHRoZSBmZWVkYmFjayB0ZXh0IGluIGEgcnVkaW1lbnRhcnkgdG9vbHRpcCBzdHlsZScsXG4gICAgfSxcbiAgICB2YWxpZGF0ZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQsIGFkZHMgdGhlIEJvb3RzdHJhcCBjbGFzcyAnd2FzLXZhbGlkYXRlZCcgb24gdGhlIGZvcm0sIHRyaWdnZXJpbmcgdGhlIG5hdGl2ZSBicm93c2VyIHZhbGlkYXRpb24gc3RhdGVzXCIsXG4gICAgfSxcbiAgICB2YWx1ZUZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd2YWx1ZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdmFsdWUnLFxuICAgIH0sXG4gICAgdmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgY29tcG9uZW50LiBXaGVuIGltcGxlbWVudGVkIGBiZy12YXJpYW50YCBhbmQgYHRleHQtdmFyaWFudGAgd2lsbCB0YWtlIHByZWNlZGVuY2UnLFxuICAgIH0sXG4gICAgd3JhcHBlckF0dHJzOiB7XG4gICAgICB0eXBlOiAnUmVhZG9ubHk8QXR0cnNWYWx1ZT4nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCcsXG4gICAgfSxcbiAgICB3cmFwcGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhZGQgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCcsXG4gICAgfSxcbiAgICBwbGFjZW1lbnQ6IHtcbiAgICAgIHR5cGU6ICdQbGFjZW1lbnQnLFxuICAgICAgZGVmYXVsdDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1BsYWNlbWVudCBvZiBhIGZsb2F0aW5nIGVsZW1lbnQnLFxuICAgIH0sXG4gIH0pIGFzIGNvbnN0XG5cbmNvbnN0IHNpbmdsZXRvblByb3BzID0gT2JqZWN0LmZyZWV6ZShjb21tb25Qcm9wcygpKVxuXG5leHBvcnQgY29uc3QgYnVpbGRDb21tb25Qcm9wcyA9IChcbiAgb2JqPzogUGFydGlhbDxSZWNvcmQ8a2V5b2YgdHlwZW9mIHNpbmdsZXRvblByb3BzLCBQYXJ0aWFsPFByb3BSZWZlcmVuY2U+Pj5cbik6IFJlYWRvbmx5PHR5cGVvZiBzaW5nbGV0b25Qcm9wcz4gPT4ge1xuICBpZiAoIW9iaikgcmV0dXJuIHNpbmdsZXRvblByb3BzXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgY29uc3QgbXlPYmplY3QgPSBjb21tb25Qcm9wcygpIGFzIFJlY29yZDxzdHJpbmcsIGFueT5cblxuICAvLyBNZXJnZSB0aGUgcHJvdmlkZWQgb2JqZWN0IGludG8gdGhlIGNvbW1vbiBwcm9wc1xuICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIG15T2JqZWN0W2tleV0gPSB7XG4gICAgICAuLi5teU9iamVjdFtrZXldLFxuICAgICAgLi4udmFsdWUsXG4gICAgfVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG15T2JqZWN0IGFzIGFueSlcbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1vbkVtaXRzID0ge1xuICBjYW5jZWw6IHt9LFxuICBvazoge30sXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL29iamVjdFV0aWxzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9vYmplY3RVdGlscy50c1wiO2V4cG9ydCBjb25zdCBwaWNrID0gPFxuICBBIGV4dGVuZHMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPixcbiAgY29uc3QgQiBleHRlbmRzIFJlYWRvbmx5QXJyYXk8UHJvcGVydHlLZXk+LFxuPihcbiAgb2JqVG9QbHVjazogUmVhZG9ubHk8QT4sXG4gIGtleXNUb1BsdWNrOiBSZWFkb25seTxCPiB8IHJlYWRvbmx5IChrZXlvZiBBKVtdXG4pOiBQaWNrPEEsIEJbbnVtYmVyXT4gPT5cbiAgWy4uLmtleXNUb1BsdWNrXS5yZWR1Y2UoXG4gICAgKG1lbW8sIHByb3ApID0+IHtcbiAgICAgIG1lbW9bcHJvcF0gPSBvYmpUb1BsdWNrW3Byb3BdXG4gICAgICByZXR1cm4gbWVtb1xuICAgIH0sXG4gICAge30gYXMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPlxuICApIGFzIFBpY2s8QSwgQltudW1iZXJdPlxuXG5leHBvcnQgY29uc3Qgb21pdCA9IDxcbiAgQSBleHRlbmRzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj4sXG4gIGNvbnN0IEIgZXh0ZW5kcyBSZWFkb25seUFycmF5PFByb3BlcnR5S2V5Pixcbj4oXG4gIG9ialRvUGx1Y2s6IFJlYWRvbmx5PEE+LFxuICBrZXlzVG9QbHVjazogUmVhZG9ubHk8Qj4gfCByZWFkb25seSAoa2V5b2YgQSlbXVxuKTogT21pdDxBLCBCW251bWJlcl0+ID0+XG4gIE9iamVjdC5rZXlzKG9ialRvUGx1Y2spXG4gICAgLmZpbHRlcigoa2V5KSA9PiAha2V5c1RvUGx1Y2subWFwKChlbCkgPT4gZWwudG9TdHJpbmcoKSkuaW5jbHVkZXMoa2V5KSlcbiAgICAucmVkdWNlKChyZXN1bHQsIGtleSkgPT4gKHsuLi5yZXN1bHQsIFtrZXldOiBvYmpUb1BsdWNrW2tleV19KSwge30gYXMgT21pdDxBLCBCW251bWJlcl0+KVxuXG4vLyBDb252ZXJ0cyBQYXNjYWxDYXNlIG9yIGNhbWVsQ2FzZSB0byBrZWJhYi1jYXNlXG5leHBvcnQgY29uc3Qga2ViYWJDYXNlID0gKHN0cjogc3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvXFxCKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9zaG93SGlkZURhdGEudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL3Nob3dIaWRlRGF0YS50c1wiO2ltcG9ydCB0eXBlIHtzaG93SGlkZX0gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuaW1wb3J0IHR5cGUge0VtaXRSZWNvcmQsIFByb3BSZWNvcmQsIFNsb3RTY29wZVJlZmVyZW5jZX0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBzaG93SGlkZUVtaXRzID0ge1xuICAnaGlkZSc6IHtcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWx3YXlzIGVtaXRzIGp1c3QgYmVmb3JlIHRoZSBjb21wb25lbnQgaGFzIGhpZGRlbi4gQ2FuY2VsYWJsZSAoYXMgbG9uZyBhcyBjb21wb25lbnQgd2Fzbid0IGZvcmNpYmx5IGhpZGRlbilcIixcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYWxsIHZhbHVlLnByZXZlbnREZWZhdWx0KCkgdG8gY2FuY2VsIGhpZGUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAnaGlkZS1wcmV2ZW50ZWQnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRW1pdHRlZCB3aGVuIHRoZSBjb21wb25lbnQgdHJpZWQgdG8gY2xvc2UsIGJ1dCB3YXMgcHJldmVudGVkIGZyb20gY2xvc2luZy4gIFRoaXMgb2NjdXJzIHdoZW4gcHJldmVudERlZmF1bHQoKSBpcyBjYWxsZWQgb24gdGhlIGV2ZW50LCB0aGUgdXNlciBjbGlja3MgZXNjYXBlIGFuZCBuby1jbG9zZS1vbmJhY2tkcm9wIGlzIHNldCB0byB0cnVlLCBvciB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJhY2tkcm9wIGFuZCBuby1jbG9zZS1vbmJhY2tkcm9wIGlzIHNldCB0byB0cnVlLicsXG4gIH0sXG4gICdoaWRkZW4nOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246ICdBbHdheXMgZW1pdHMgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyBoaWRkZW4nLFxuICB9LFxuICAnc2hvdyc6IHtcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYWxsIHZhbHVlLnByZXZlbnREZWZhdWx0KCkgdG8gY2FuY2VsIHNob3cnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiAnQWx3YXlzIGVtaXRzIGp1c3QgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgc2hvd24uIENhbmNlbGFibGUnLFxuICB9LFxuICAnc2hvdy1wcmV2ZW50ZWQnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRW1pdHRlZCB3aGVuIHRoZSBjb21wb25lbnQgdHJpZWQgdG8gb3BlbiwgYnV0IHdhcyBwcmV2ZW50ZWQgZnJvbSBvcGVuaW5nLiBUaGlzIG9jY3VycyB3aGVuIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBldmVudCcsXG4gIH0sXG4gICdzaG93bic6IHtcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjogJ0Fsd2F5cyBlbWl0cyBqdXN0IGFmdGVyIGNvbXBvbmVudCBpcyBzaG93bi4nLFxuICB9LFxuICAndG9nZ2xlJzoge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbHdheXMgZW1pdHMganVzdCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyB0b2dnbGVkIHZpYSB0aGUgZXhwb3NlZCAndG9nZ2xlKCknIGZ1bmN0aW9uIG9yIHVzZVRvZ2dsZSBjb21wb3NhYmxlIC4gQ2FuY2VsYWJsZSAoYXMgbG9uZyBhcyBjb21wb25lbnQgd2Fzbid0IGZvcmNpYmx5IGhpZGRlbilcIixcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYWxsIHZhbHVlLnByZXZlbnREZWZhdWx0KCkgdG8gY2FuY2VsIGhpZGUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAndG9nZ2xlLXByZXZlbnRlZCc6IHtcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdFbWl0dGVkIHdoZW4gdGhlIGNvbXBvbmVudCB0cmllZCB0byB0b2dnbGUsIGJ1dCB3YXMgcHJldmVudGVkIGZyb20gZG9pbmcgc28uICBUaGlzIG9jY3VycyB3aGVuIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBldmVudCwgdGhlIHVzZXIgY2xpY2tzIGVzY2FwZSBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZSwgb3IgdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBiYWNrZHJvcCBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZS4nLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgRW1pdFJlY29yZFxuXG5leHBvcnQgY29uc3Qgc2hvd0hpZGVQcm9wcyA9IHtcbiAgaW5pdGlhbEFuaW1hdGlvbjoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCBlbmFibGVzIHRoZSBpbml0aWFsIGFuaW1hdGlvbiBvbiBtb3VudCcsXG4gIH0sXG4gIGxhenk6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgdGhlIGNvbnRlbnQgd2lsbCBub3QgYmUgbW91bnRlZCB1bnRpbCBvcGVuZWQnLFxuICB9LFxuICBtb2RlbFZhbHVlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29udHJvbHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNvbXBvbmVudCcsXG4gIH0sXG4gIG5vRmFkZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0FsaWFzIGZvciBgbm9BbmltYXRpb25gJyxcbiAgfSxcbiAgbm9BbmltYXRpb246IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZGlzYWJsZXMgdGhlIGFuaW1hdGlvbicsXG4gIH0sXG4gIHNob3c6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldoZW4gc2V0LCBhbmQgcHJvcCAndmlzaWJsZScgaXMgZmFsc2Ugb24gbW91bnQsIHdpbGwgYW5pbWF0ZSBmcm9tIGNsb3NlZCB0byBvcGVuIG9uIGluaXRpYWwgbW91bnQuIE1haW5seSB0byBoZWxwIHdpdGggdGVtcGxhdGUgc2hvdy4gVXNlIG1vZGVsLXZhbHVlIGZvciByZWFjdGl2ZSBzaG93L2hpZGVcIixcbiAgfSxcbiAgdHJhbnNQcm9wczoge1xuICAgIHR5cGU6ICdUcmFuc2l0aW9uUHJvcHMnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ1RyYW5zaXRpb24gcHJvcGVydGllcycsXG4gIH0sXG4gIHVubW91bnRMYXp5OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgYW5kIGBsYXp5YCBpcyB0cnVlLCB0aGUgY29udGVudCB3aWxsIGJlIHVubW91bnRlZCB3aGVuIGNsb3NlZCcsXG4gIH0sXG4gIHZpc2libGU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246IFwiV2hlbiAndHJ1ZScsIG9wZW4gd2l0aG91dCBhbmltYXRpb25cIixcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2Ygc2hvd0hpZGUgfCAnbW9kZWxWYWx1ZSc+XG5cbmV4cG9ydCBjb25zdCBzaG93SGlkZVNsb3RzRGF0YSA9IHtcbiAgaWQ6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXF1ZSBJRCBmb3IgdGhlIGNvbXBvbmVudCcsXG4gIH0sXG4gIHNob3c6IHtcbiAgICB0eXBlOiAnKCkgPT4gdm9pZCcsXG4gICAgZGVzY3JpcHRpb246ICdGdW5jdGlvbiB0byBzaG93IHRoZSBjb21wb25lbnQnLFxuICB9LFxuICBoaWRlOiB7XG4gICAgdHlwZTogJyh0cmlnZ2VyPzogc3RyaW5nLCBub1RyaWdnZXJFbWl0PzogYm9vbGVhbikgPT4gdm9pZCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRnVuY3Rpb24gdG8gaGlkZSB0aGUgY29tcG9uZW50LiBgdHJpZ2dlcmAgaXMgdGhlIHRyaWdnZXIgdGhhdCBjYXVzZWQgdGhlIGhpZGUuIGBub1RyaWdnZXJFbWl0YCBwcmV2ZW50cyB0aGUgZW1pdCBvZiB0aGUgdHJpZ2dlciBldmVudC4nLFxuICB9LFxuICB0b2dnbGU6IHtcbiAgICB0eXBlOiAnKCkgPT4gdm9pZCcsXG4gICAgZGVzY3JpcHRpb246ICdGdW5jdGlvbiB0byB0b2dnbGUgdGhlIGNvbXBvbmVudCB2aXNpYmlsaXR5JyxcbiAgfSxcbiAgYWN0aXZlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlc2NyaXB0aW9uOiAnSW5kaWNhdGVzIGlmIHRoZSBjb21wb25lbnQgaXMgYWN0aXZlIChzdGFydGluZyBzaG93LCBiZWZvcmUvYWZ0ZXIgYW5pbWF0aW9ucyknLFxuICB9LFxuICB2aXNpYmxlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlc2NyaXB0aW9uOiAnSW5kaWNhdGVzIGlmIHRoZSBjb21wb25lbnQgaXMgdmlzaWJsZSAoc2hvd24pJyxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFNsb3RTY29wZVJlZmVyZW5jZVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9kcm9wZG93bkNvbW1vbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvZHJvcGRvd25Db21tb24udHNcIjtpbXBvcnQgdHlwZSB7QkRyb3Bkb3duRW1pdHMsIEJEcm9wZG93blByb3BzfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5pbXBvcnQgdHlwZSB7RW1pdFJlY29yZCwgUHJvcFJlY29yZCwgU2xvdFJlY29yZH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQge2J1aWxkQ29tbW9uUHJvcHN9IGZyb20gJy4vY29tbW9uUHJvcHMnXG5pbXBvcnQge3BpY2t9IGZyb20gJy4vb2JqZWN0VXRpbHMnXG5pbXBvcnQge3Nob3dIaWRlRW1pdHMsIHNob3dIaWRlUHJvcHN9IGZyb20gJy4vc2hvd0hpZGVEYXRhJ1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25Qcm9wcyA9IHtcbiAgYXV0b0Nsb3NlOiB7XG4gICAgdHlwZTogXCJib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZSdcIixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0NvbnRyb2xzIHRoZSBhdXRvbWF0aWMgY2xvc2luZyBvZiB0aGUgZHJvcGRvd24gd2hlbiBjbGlja2luZy4gU2VlIGFib3ZlIGZvciBkZXRhaWxzLicsXG4gIH0sXG4gIGJvdW5kYXJ5OiB7XG4gICAgdHlwZTogJ0JvdW5kYXJ5IHwgUm9vdEJvdW5kYXJ5JyxcbiAgICBkZWZhdWx0OiAnY2xpcHBpbmdBbmNlc3RvcnMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgYm91bmRhcnkgY29uc3RyYWludCBvZiBkcm9wZG93bjogYW55IHZhbHVlIG9mIGZsb2F0aW5nLXVzJ3MgQm91bmRhcnkgb3IgUm9vdEJvdW5kYXJ5IHR5cGUuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy5cIixcbiAgfSxcbiAgYm91bmRhcnlQYWRkaW5nOiB7XG4gICAgdHlwZTogJ1BhZGRpbmcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSB2aXJ0dWFsIHBhZGRpbmcgYXJvdW5kIHRoZSBib3VuZGFyeSB0byBjaGVjayBmb3Igb3ZlcmZsb3cnLFxuICB9LFxuICBmbG9hdGluZ01pZGRsZXdhcmU6IHtcbiAgICB0eXBlOiAnTWlkZGxld2FyZVtdJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdEaXJlY3RseSBzZXQgdGhlIGZsb2F0aW5nLXVpIG1pZGRsZXdhcmUgYmVoYXZpb3IuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICB9LFxuICBpY29uOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIHN0eWxlcyBhbiBpY29uIGF0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBidXR0b24gdGV4dCcsXG4gIH0sXG4gIGlzTmF2OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnSW5kaWNhdGVzIHRoZSBkcm9wZG93biBpcyBhIG5hdiBkcm9wZG93bicsXG4gIH0sXG4gIG1lbnVDbGFzczoge1xuICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFkZCB0byB0aGUgbWVudSBjb250YWluZXInLFxuICB9LFxuICBub0NhcmV0OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnSGlkZSB0aGUgY2FyZXQgaW5kaWNhdG9yIG9uIHRoZSB0b2dnbGUgYnV0dG9uJyxcbiAgfSxcbiAgbm9GbGlwOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnUHJldmVudCB0aGUgbWVudSBmcm9tIGF1dG8gZmxpcHBpbmcgcG9zaXRpb25zJyxcbiAgfSxcbiAgbm9TaGlmdDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1ByZXZlbnQgdGhlIG1lbnUgZnJvbSBhdXRvbWF0aWNhbGx5IHNoaWZ0aW5nIHBvc2l0aW9ucycsXG4gIH0sXG4gIG5vU2l6ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1ByZXZlbnQgdGhlIG1lbnUgZnJvbSBhdXRvbWF0aWNhbGx5IHJlc2l6aW5nJyxcbiAgfSxcbiAgb2Zmc2V0OiB7XG4gICAgdHlwZTogJ251bWJlciB8IHN0cmluZyB8IHttYWluQXhpcz86IG51bWJlcjsgY3Jvc3NBeGlzPzogbnVtYmVyOyBhbGlnbm1lbnRBeGlzPzogbnVtYmVyIHwgbnVsbCcsXG4gICAgZGVmYXVsdDogMCxcbiAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIG51bWJlciBvZiBwaXhlbHMgdG8gc2hpZnQgdGhlIG1lbnUgYnkuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICB9LFxuICBub1dyYXBwZXI6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdEbyBub3QgcmVuZGVyIHRoZSBkcm9wZG93biB3cmFwcGVyIGVsZW1lbnQnLFxuICB9LFxuICBzcGxpdDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCByZW5kZXJzIGEgc3BsaXQgYnV0dG9uIGRyb3Bkb3duJyxcbiAgfSxcbiAgc3BsaXRCdXR0b25UeXBlOiB7XG4gICAgdHlwZTogJ0J1dHRvblR5cGUnLFxuICAgIGRlZmF1bHQ6ICdidXR0b24nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJWYWx1ZSB0byBwbGFjZSBpbiB0aGUgJ3R5cGUnIGF0dHJpYnV0ZSBvbiB0aGUgc3BsaXQgYnV0dG9uOiAnYnV0dG9uJywgJ3N1Ym1pdCcsICdyZXNldCdcIixcbiAgfSxcbiAgc3BsaXRDbGFzczoge1xuICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFkZCB0byB0aGUgc3BsaXQgYnV0dG9uJyxcbiAgfSxcbiAgc3BsaXREaXNhYmxlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgdGhlIHNwbGl0IGJ1dHRvbiBpcyBkaXNhYmxlZCcsXG4gIH0sXG4gIHNwbGl0SHJlZjoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlbm90ZXMgdGhlIHRhcmdldCBVUkwgb2YgdGhlIGxpbmsgZm9yIHRoZSBzcGxpdCBidXR0b24nLFxuICB9LFxuICBzcGxpdFRvOiB7XG4gICAgdHlwZTogJ1JvdXRlTG9jYXRpb25SYXcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdEZW5vdGVzIHRoZSB0YXJnZXQgcm91dGUgb2YgdGhlIHNwbGl0IGJ1dHRvbi4gV2hlbiBjbGlja2VkLCB0aGUgdmFsdWUgb2YgdGhlIHRvIHByb3Agd2lsbCBiZSBwYXNzZWQgdG8gcm91dGVyLnB1c2goKSBpbnRlcm5hbGx5LCBzbyB0aGUgdmFsdWUgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhIExvY2F0aW9uIGRlc2NyaXB0b3Igb2JqZWN0JyxcbiAgfSxcbiAgc3BsaXRWYXJpYW50OiB7XG4gICAgdHlwZTogJ0J1dHRvblZhcmlhbnQgfCBudWxsJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIHNwbGl0IGJ1dHRvbi4gRGVmYXVsdHMgdG8gdGhlICd2YXJpYW50JyBwcm9wIHZhbHVlXCIsXG4gIH0sXG4gIHN0cmF0ZWd5OiB7XG4gICAgdHlwZTogJ1N0cmF0ZWd5JyxcbiAgICBkZWZhdWx0OiAnYWJzb2x1dGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHN0cmF0ZWd5IHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gdG8gaGlkZSB0aGUgZHJvcGRvd24uIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnVGV4dCB0byBwbGFjZSBpbiB0aGUgdG9nZ2xlIGJ1dHRvbiwgb3IgaW4gdGhlIHNwbGl0IGJ1dHRvbiBpcyBzcGxpdCBtb2RlJyxcbiAgfSxcbiAgdG9nZ2xlQ2xhc3M6IHtcbiAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhZGQgdG8gdGhlIHRvZ2dsZSBidXR0b24nLFxuICB9LFxuICB0b2dnbGVUZXh0OiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ1RvZ2dsZSBkcm9wZG93bicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQVJJQSBsYWJlbCAodmlzdWFsbHktaGlkZGVuKSB0byBzZXQgb24gdGhlIHRvZ2dsZSB3aGVuIGluIHNwbGl0IG1vZGUuIE92ZXJyaWRlbiBieSB0aGUgc2xvdCBvZiB0aGUgc2FtZSBuYW1lJyxcbiAgfSxcbiAgdGVsZXBvcnREaXNhYmxlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1JlbmRlcnMgdGhlIGRyb3Bkb3duIGluIHRoZSBleGFjdCBwbGFjZSBpdCB3YXMgZGVmaW5lZCcsXG4gIH0sXG4gIHRlbGVwb3J0VG86IHtcbiAgICB0eXBlOiAnc3RyaW5nIHwgUmVuZGVyZXJFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCcsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IHRlbGVwb3J0IGxvY2F0aW9uJyxcbiAgfSxcbiAgLi4uc2hvd0hpZGVQcm9wcyxcbiAgLi4ucGljayhcbiAgICBidWlsZENvbW1vblByb3BzKHtcbiAgICAgIHJvbGU6IHtcbiAgICAgICAgZGVmYXVsdDogJ21lbnUnLFxuICAgICAgfSxcbiAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgZGVmYXVsdDogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFsnYXJpYUxhYmVsJywgJ2Rpc2FibGVkJywgJ2lkJywgJ3BsYWNlbWVudCcsICdyb2xlJywgJ3NpemUnLCAndmFyaWFudCcsICd3cmFwcGVyQ2xhc3MnXVxuICApLFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCRHJvcGRvd25Qcm9wcz5cblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duRW1pdHMgPSB7XG4gIC4uLnNob3dIaWRlRW1pdHMsXG4gICdzcGxpdC1jbGljayc6IHtcbiAgICBkZXNjcmlwdGlvbjogJ0VtaXR0ZWQgd2hlbiBzcGxpdCBidXR0b24gaXMgY2xpY2tlZCBpbiBzcGxpdCBtb2RlJyxcbiAgICBhcmdzOiB7XG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAnTW91c2VFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTmF0aXZlIGNsaWNrIGV2ZW50IG9iamVjdCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gICd0b2dnbGUnOiB7XG4gICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gdG9nZ2xlIGJ1dHRvbiBpcyBjbGlja2VkJyxcbiAgfSxcbiAgJ2NhbmNlbCc6IHtcbiAgICBhcmdzOiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IHVuZGVmaW5lZCxcbiAgfSxcbiAgJ29rJzoge1xuICAgIGFyZ3M6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogdW5kZWZpbmVkLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgRW1pdFJlY29yZDxrZXlvZiBCRHJvcGRvd25FbWl0cz5cblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duU2xvdHMgPSB7XG4gICdkZWZhdWx0Jzoge1xuICAgIGRlc2NyaXB0aW9uOiAnT3B0aW9uYWxseSBzY29wZWQgZGVmYXVsdCBzbG90IGZvciBkcm9wZG93biBtZW51IGNvbnRlbnQnLFxuICAgIHNjb3BlOiB7XG4gICAgICBoaWRlOiB7XG4gICAgICAgIHR5cGU6ICcoKSA9PiB2b2lkJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYW4gYmUgdXNlZCB0byBjbG9zZSB0aGUgZHJvcGRvd24nLFxuICAgICAgfSxcbiAgICAgIHNob3c6IHtcbiAgICAgICAgdHlwZTogJygpID0+IHZvaWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NhbiBiZSB1c2VkIHRvIG9wZW4gdGhlIGRyb3Bkb3duJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgJ2J1dHRvbi1jb250ZW50Jzoge1xuICAgIGRlc2NyaXB0aW9uOiAnQ2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IGN1c3RvbSB0ZXh0IHdpdGggaWNvbnMgYW5kIG1vcmUgc3R5bGluZycsXG4gIH0sXG4gICd0b2dnbGUtdGV4dCc6IHtcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdBUklBIGxhYmVsICh2aXN1YWxseS1oaWRkZW4pIHRvIHNldCBvbiB0aGUgdG9nZ2xlIHdoZW4gaW4gc3BsaXQgbW9kZS4gT3ZlcnJpZGVzIHRoZSB0b2dnbGUtdGV4dCBwcm9wJyxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFNsb3RSZWNvcmRcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50cy9kcm9wZG93bi5kYXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHMvZHJvcGRvd24uZGF0YS50c1wiO2ltcG9ydCB0eXBlIHtcbiAgQkRyb3Bkb3duRGl2aWRlclByb3BzLFxuICBCRHJvcGRvd25Gb3JtUHJvcHMsXG4gIEJEcm9wZG93bkZvcm1TbG90cyxcbiAgQkRyb3Bkb3duR3JvdXBQcm9wcyxcbiAgQkRyb3Bkb3duR3JvdXBTbG90cyxcbiAgQkRyb3Bkb3duSGVhZGVyUHJvcHMsXG4gIEJEcm9wZG93bkhlYWRlclNsb3RzLFxuICBCRHJvcGRvd25JdGVtQnV0dG9uRW1pdHMsXG4gIEJEcm9wZG93bkl0ZW1CdXR0b25Qcm9wcyxcbiAgQkRyb3Bkb3duSXRlbUJ1dHRvblNsb3RzLFxuICBCRHJvcGRvd25JdGVtRW1pdHMsXG4gIEJEcm9wZG93bkl0ZW1Qcm9wcyxcbiAgQkRyb3Bkb3duSXRlbVNsb3RzLFxuICBCRHJvcGRvd25UZXh0UHJvcHMsXG4gIEJEcm9wZG93blRleHRTbG90cyxcbn0gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuaW1wb3J0IHtcbiAgdHlwZSBDb21wb25lbnRSZWZlcmVuY2UsXG4gIGRlZmF1bHRQcm9wU2VjdGlvblN5bWJvbCxcbiAgdHlwZSBFbWl0UmVjb3JkLFxuICB0eXBlIFByb3BSZWNvcmQsXG4gIHR5cGUgU2xvdFJlY29yZCxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQge2xpbmtQcm9wcywgbGlua1RvfSBmcm9tICcuLi8uLi91dGlscy9saW5rUHJvcHMnXG5pbXBvcnQge2Ryb3Bkb3duRW1pdHMsIGRyb3Bkb3duUHJvcHMsIGRyb3Bkb3duU2xvdHN9IGZyb20gJy4uLy4uL3V0aWxzL2Ryb3Bkb3duQ29tbW9uJ1xuaW1wb3J0IHtvbWl0LCBwaWNrfSBmcm9tICcuLi8uLi91dGlscy9vYmplY3RVdGlscydcbmltcG9ydCB7YnVpbGRDb21tb25Qcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uUHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZDogKCk6IENvbXBvbmVudFJlZmVyZW5jZSA9PiAoe1xuICAgIEJEcm9wZG93bjoge1xuICAgICAgc291cmNlUGF0aDogJy9CRHJvcGRvd24vQkRyb3Bkb3duLnZ1ZScsXG4gICAgICBwcm9wczogZHJvcGRvd25Qcm9wcyxcbiAgICAgIGVtaXRzOiBkcm9wZG93bkVtaXRzLFxuICAgICAgc2xvdHM6IGRyb3Bkb3duU2xvdHMsXG4gICAgfSxcbiAgICBCRHJvcGRvd25EaXZpZGVyOiB7XG4gICAgICBzb3VyY2VQYXRoOiAnL0JEcm9wZG93bi9CRHJvcGRvd25EaXZpZGVyLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5waWNrKFxuICAgICAgICAgIGJ1aWxkQ29tbW9uUHJvcHMoe1xuICAgICAgICAgICAgdGFnOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICdocicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFsndGFnJywgJ3ZhcmlhbnQnLCAnd3JhcHBlckF0dHJzJ11cbiAgICAgICAgKSxcbiAgICAgICAgZGl2aWRlckNsYXNzOiB7XG4gICAgICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYWRkIHRvIHRoZSBkaXZpZGVyIGNvbXBvbmVudCcsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJEcm9wZG93bkRpdmlkZXJQcm9wcz4sXG4gICAgfSxcbiAgICBCRHJvcGRvd25Gb3JtOiB7XG4gICAgICBzb3VyY2VQYXRoOiAnL0JEcm9wZG93bi9CRHJvcGRvd25Gb3JtLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5waWNrKGJ1aWxkQ29tbW9uUHJvcHMoKSwgWyd3cmFwcGVyQXR0cnMnXSksXG4gICAgICAgIGZvcm1DbGFzczoge1xuICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFkZCB0byB0aGUgZm9ybSBjb21wb25lbnQnLFxuICAgICAgICB9LFxuICAgICAgICBub3ZhbGlkYXRlOiB7XG4gICAgICAgICAgbm90WWV0SW1wbGVtZW50ZWQ6IHRydWUsXG4gICAgICAgICAgLy8gZGVzY3JpcHRpb246ICdEaXNhYmxlcyBIVE1MNSBmb3JtIHZhbGlkYXRpb24nIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0ZWQ6IHtcbiAgICAgICAgICBub3RZZXRJbXBsZW1lbnRlZDogdHJ1ZSxcbiAgICAgICAgICAvLyBkZXNjcmlwdGlvbjogJ01hcmtzIHRoZSBmb3JtIGFzIHZhbGlkYXRlZCcgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJEcm9wZG93bkZvcm1Qcm9wcz4sXG4gICAgICBzbG90czoge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IHRvIHBsYWNlIGluIHRoZSBkcm9wZG93biBmb3JtJyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFNsb3RSZWNvcmQ8a2V5b2YgQkRyb3Bkb3duRm9ybVNsb3RzPixcbiAgICB9LFxuICAgIEJEcm9wZG93bkdyb3VwOiB7XG4gICAgICBzb3VyY2VQYXRoOiAnL0JEcm9wZG93bi9CRHJvcGRvd25Hcm91cC52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucGljayhcbiAgICAgICAgICBidWlsZENvbW1vblByb3BzKHtcbiAgICAgICAgICAgIGhlYWRlclRhZzoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiAnaGVhZGVyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgWydhcmlhRGVzY3JpYmVkYnknLCAnaGVhZGVyQ2xhc3MnLCAnaGVhZGVyVGFnJywgJ2hlYWRlclZhcmlhbnQnLCAnaWQnXVxuICAgICAgICApLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgLy8gZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgZm9yIHRoZSBkcm9wZG93biBncm91cCBoZWFkZXInIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCRHJvcGRvd25Hcm91cFByb3BzPixcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgKGl0ZW1zKSB0byBwbGFjZSBpbiB0aGUgZHJvcGRvd24gZ3JvdXAnLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ09wdGlvbmFsIGhlYWRlciBjb250ZW50IGZvciB0aGUgZHJvcGRvd24gZ3JvdXAnLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCRHJvcGRvd25Hcm91cFNsb3RzPixcbiAgICB9LFxuICAgIEJEcm9wZG93bkhlYWRlcjoge1xuICAgICAgc291cmNlUGF0aDogJy9CRHJvcGRvd24vQkRyb3Bkb3duSGVhZGVyLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5waWNrKGJ1aWxkQ29tbW9uUHJvcHMoKSwgWydoZWFkZXJDbGFzcycsICd0YWcnLCAndmFyaWFudCcsICd3cmFwcGVyQXR0cnMnXSksXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IHRvIHBsYWNlIGluIHRoZSBkcm9wZG93biB0ZXh0LiBEZWZhdWx0IHNsb3QgdGFrZXMgcHJlY2VkZW5jZScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2hvdWxkIHNheSBcImRyb3Bkb3duIGhlYWRlclwiIGluc3RlYWQgb2YgXCJkcm9wZG93biB0ZXh0XCIpIC8vIFRPRE8gc2ltaWxhciBjb250ZW50IHRvIEJEcm9wZG93blRleHQvdGV4dCAoc2ltaWxhciBkZXNjcmlwdGlvbiBzdHJ1Y3R1cmUpXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJEcm9wZG93bkhlYWRlclByb3BzPixcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRyb3Bkb3duIGhlYWRlcicsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJEcm9wZG93bkhlYWRlclNsb3RzPixcbiAgICB9LFxuICAgIEJEcm9wZG93bkl0ZW06IHtcbiAgICAgIHNvdXJjZVBhdGg6ICcvQkRyb3Bkb3duL0JEcm9wZG93bkl0ZW0udnVlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIFtkZWZhdWx0UHJvcFNlY3Rpb25TeW1ib2xdOiBwaWNrKGJ1aWxkQ29tbW9uUHJvcHMoKSwgW1xuICAgICAgICAgICdsaW5rQ2xhc3MnLFxuICAgICAgICAgICd3cmFwcGVyQXR0cnMnLFxuICAgICAgICBdKSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxFeGNsdWRlPGtleW9mIEJEcm9wZG93bkl0ZW1Qcm9wcywga2V5b2YgdHlwZW9mIGxpbmtQcm9wcz4+LFxuICAgICAgICAnQkxpbmsgcHJvcHMnOiB7XG4gICAgICAgICAgX29wdHM6IHtcbiAgICAgICAgICAgIGxpbmtUbyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9kYXRhOiBvbWl0KGxpbmtQcm9wcywgWydyb3V0ZXJUYWcnXSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZW1pdHM6IHtcbiAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VtaXR0ZWQgd2hlbiBpdGVtIGlzIGNsaWNrZWQnLFxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdNb3VzZUV2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOYXRpdmUgY2xpY2sgZXZlbnQgb2JqZWN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIEVtaXRSZWNvcmQ8a2V5b2YgQkRyb3Bkb3duSXRlbUVtaXRzPixcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRyb3Bkb3duIGl0ZW0nLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCRHJvcGRvd25JdGVtU2xvdHM+LFxuICAgIH0sXG4gICAgQkRyb3Bkb3duSXRlbUJ1dHRvbjoge1xuICAgICAgc291cmNlUGF0aDogJy9CRHJvcGRvd24vQkRyb3Bkb3duSXRlbUJ1dHRvbi52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucGljayhidWlsZENvbW1vblByb3BzKCksIFtcbiAgICAgICAgICAnYWN0aXZlJyxcbiAgICAgICAgICAnYWN0aXZlQ2xhc3MnLFxuICAgICAgICAgICdkaXNhYmxlZCcsXG4gICAgICAgICAgJ3ZhcmlhbnQnLFxuICAgICAgICAgICd3cmFwcGVyQXR0cnMnLFxuICAgICAgICBdKSxcbiAgICAgICAgYnV0dG9uQ2xhc3M6IHtcbiAgICAgICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3Mgb3IgY2xhc3NlcyB0byBhcHBseSB0byB0aGUgaW5uZXIgYnV0dG9uIGVsZW1lbnQnLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCRHJvcGRvd25JdGVtQnV0dG9uUHJvcHM+LFxuICAgICAgZW1pdHM6IHtcbiAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VtaXR0ZWQgd2hlbiBpdGVtIGlzIGNsaWNrZWQnLFxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdNb3VzZUV2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOYXRpdmUgY2xpY2sgZXZlbnQgb2JqZWN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIEVtaXRSZWNvcmQ8a2V5b2YgQkRyb3Bkb3duSXRlbUJ1dHRvbkVtaXRzPixcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGRyb3Bkb3duIGl0ZW0gYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFNsb3RSZWNvcmQ8a2V5b2YgQkRyb3Bkb3duSXRlbUJ1dHRvblNsb3RzPixcbiAgICB9LFxuICAgIEJEcm9wZG93blRleHQ6IHtcbiAgICAgIHNvdXJjZVBhdGg6ICcvQkRyb3Bkb3duL0JEcm9wZG93blRleHQudnVlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIC4uLnBpY2soXG4gICAgICAgICAgYnVpbGRDb21tb25Qcm9wcyh7XG4gICAgICAgICAgICB0YWc6IHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogJ3NwYW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBbJ3RhZycsICd2YXJpYW50JywgJ3dyYXBwZXJBdHRycyddXG4gICAgICAgICksXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IHRvIHBsYWNlIGluIHRoZSBkcm9wZG93biB0ZXh0LiBEZWZhdWx0IHNsb3QgdGFrZXMgcHJlY2VkZW5jZScsIC8vIFRPRE8gc2ltaWxhciBjb250ZW50IHRvIEJEcm9wZG93bkhlYWRlci90ZXh0IChzaW1pbGFyIGRlc2NyaXB0aW9uIHN0cnVjdHVyZSlcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dENsYXNzOiB7XG4gICAgICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYWRkIHRvIHRoZSB0ZXh0IGNvbXBvbmVudCcsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJEcm9wZG93blRleHRQcm9wcz4sXG4gICAgICBlbWl0czoge30sXG4gICAgICBzbG90czoge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IHRvIHBsYWNlIGluIHRoZSBkcm9wZG93biB0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFNsb3RSZWNvcmQ8a2V5b2YgQkRyb3Bkb3duVGV4dFNsb3RzPixcbiAgICB9LFxuICB9KSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFzQk8sSUFBTSwyQkFBMkI7OztBQ25CakMsSUFBTSxTQUFTO0FBRWYsSUFBTSxZQUFZO0FBQUEsRUFDdkIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0Esa0JBQWtCO0FBQUEsSUFDaEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLElBQ0YsbUJBQW1CO0FBQUEsRUFDckI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJ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
