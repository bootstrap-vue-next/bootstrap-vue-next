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

// src/data/components/nav.data.ts
var nav_data_default = {
  load: () => ({
    BNav: {
      sourcePath: '/BNav/BNav.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'ul',
            },
          }),
          ['tag']
        ),
        align: {
          type: 'AlignmentJustifyContent',
          default: void 0,
          description: 'Aligns the nav items to any value of AlignmentJustifyContent',
          // TODO grammar check (rephrased for clarity and consistency)
        },
        cardHeader: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Indicates the nav is placed inside a card header',
          // TODO grammar check (rephrased for clarity)
        },
        fill: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Fills all horizontal space with nav items proportionally, with varying widths',
          // TODO grammar check (rephrased for clarity and brevity)
        },
        justified: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Fills all horizontal space with nav items, each having equal width',
          // TODO grammar check (rephrased for clarity and brevity)
        },
        pills: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Styles nav items as pill buttons',
          // TODO grammar check (rephrased for brevity)
        },
        small: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Reduces the nav size',
          // TODO grammar check (rephrased for brevity)
        },
        tabs: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Styles nav items as tabs',
          // TODO grammar check (rephrased for brevity)
        },
        underline: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Underlines the active nav item',
          // TODO grammar check (rephrased for brevity)
        },
        vertical: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Stacks nav items vertically',
          // TODO grammar check (rephrased for brevity)
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content for the nav',
          scope: {},
        },
      },
    },
    BNavForm: {
      styleSpec: {kind: 'TAG' /* Tag */, value: 'li > form'},
      sourcePath: '/BNav/BNavForm.vue',
      props: {
        ...pick(buildCommonProps(), [
          'floating',
          'id',
          'novalidate',
          'role',
          'validated',
          'wrapperAttrs',
        ]),
        formClass: {
          type: 'ClassValue',
          default: void 0,
          description: 'CSS class (or classes) to apply to the form element',
          // TODO grammar check (rephrased for clarity)
        },
      },
      emits: {
        submit: {
          description: 'Emitted when the form is submitted',
          args: {
            submit: {
              type: 'Event',
              description: 'Native submit event',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content for the nav form',
          scope: {},
        },
      },
    },
    BNavItem: {
      sourcePath: '/BNav/BNavItem.vue',
      props: {
        [defaultPropSectionSymbol]: {
          linkAttrs: {
            type: 'Readonly<AttrsValue>',
            default: void 0,
            description: 'Additional attributes for the nested link element',
            // TODO grammar check (rephrased for clarity)
          },
          linkClass: {
            type: 'ClassValue',
            default: void 0,
            description: 'CSS class (or classes) for the nested link element',
            // TODO grammar check (rephrased for clarity)
          },
        },
        'BLink props': {
          _opts: {
            linkTo,
          },
          _data: omit(linkProps, ['routerTag']),
        },
      },
      emits: {
        click: {
          description: 'Emitted when a non-disabled nav item is clicked',
          // TODO grammar check (rephrased for clarity)
          args: {
            click: {
              type: 'MouseEvent',
              description: 'Click event details',
              // TODO grammar check (rephrased for clarity)
            },
          },
        },
      },
      slots: {
        after: {
          description: 'Content placed after the nav item link (useful for nested navs)',
          // TODO grammar check (rephrased for clarity)
          scope: {},
        },
        default: {
          description: 'Content for the nav item',
          scope: {},
        },
      },
    },
    BNavItemDropdown: {
      styleSpec: {kind: 'OVERRIDE-CLASS' /* OverrideClass */, value: '.nav-item.dropdown'},
      sourcePath: '/BNav/BNavItemDropdown.vue',
      props: dropdownProps,
      emits: dropdownEmits,
      slots: dropdownSlots,
    },
    BNavText: {
      styleSpec: {kind: 'OVERRIDE-CLASS' /* OverrideClass */, value: '.navbar-text'},
      sourcePath: '/BNav/BNavText.vue',
      props: {
        text: {
          type: 'string',
          default: void 0,
          description: 'Plain text to display in the nav',
          // TODO grammar check (rephrased for consistency)
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content to display in the nav',
          // TODO grammar check (rephrased for consistency)
          scope: {},
        },
      },
    },
  }),
}
export {nav_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3R5cGVzL2luZGV4LnRzIiwgInNyYy91dGlscy9saW5rUHJvcHMudHMiLCAic3JjL3V0aWxzL2NvbW1vblByb3BzLnRzIiwgInNyYy91dGlscy9vYmplY3RVdGlscy50cyIsICJzcmMvdXRpbHMvc2hvd0hpZGVEYXRhLnRzIiwgInNyYy91dGlscy9kcm9wZG93bkNvbW1vbi50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL25hdi5kYXRhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3R5cGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdHlwZXMvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3R5cGVzL2luZGV4LnRzXCI7aW1wb3J0IHR5cGUge3VzZVNjcm9sbHNweX0gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRJdGVtID0gRXhjbHVkZTxrZXlvZiBDb21wb25lbnRSZWZlcmVuY2UsICdjb21wb25lbnQnIHwgJ3NlY3Rpb25zJz5cblxuZXhwb3J0IGludGVyZmFjZSBQcm9wUmVmZXJlbmNlIHtcbiAgdHlwZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBkZWZhdWx0PzogdW5rbm93blxuICBub3RZZXRJbXBsZW1lbnRlZD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJvcFJlY29yZFdpdGhPcHRpb25zID0ge1xuICBfZGF0YTogUHJvcFJlY29yZCAvLyBBbGxvd3MgZm9yIGEgc2luZ2xlIHNlY3Rpb24gb3IgbXVsdGlwbGUgc2VjdGlvbnNcbiAgX29wdHM/OiB7bGlua1RvPzogc3RyaW5nfVxufVxuLy8gRmxhdCB2YXJpYW50XG5leHBvcnQgdHlwZSBQcm9wUmVjb3JkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+ID0gUmVjb3JkPFQsIFByb3BSZWZlcmVuY2U+XG4vLyBNdWx0aXBsZSBzZWN0aW9ucyB2YXJpYW50XG5leHBvcnQgdHlwZSBQcm9wUmVjb3JkV2l0aE11bHRpcGxlU2VjdGlvbnMgPSB7XG4gIFtkZWZhdWx0UHJvcFNlY3Rpb25TeW1ib2xdOiBQcm9wUmVjb3JkIHwgUHJvcFJlY29yZFdpdGhPcHRpb25zXG59ICYge1trZXk6IHN0cmluZ106IFByb3BSZWNvcmQgfCBQcm9wUmVjb3JkV2l0aE9wdGlvbnN9XG4vLyBPcHRpb25zIHZhcmlhbnRcbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvcFNlY3Rpb25TeW1ib2wgPSAnX2RlZmF1bHRQcm9wU2VjdGlvbidcblxuZXhwb3J0IHR5cGUgRW1pdEFyZ1JlZmVyZW5jZSA9IFJlY29yZDxzdHJpbmcsIHt0eXBlOiBzdHJpbmc7IGRlc2NyaXB0aW9uPzogc3RyaW5nfT5cbmV4cG9ydCB0eXBlIEVtaXRSZWZlcmVuY2UgPSB7XG4gIGFyZ3M/OiBFbWl0QXJnUmVmZXJlbmNlXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG59XG5leHBvcnQgdHlwZSBFbWl0UmVjb3JkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+ID0gUmVjb3JkPFQsIEVtaXRSZWZlcmVuY2U+XG5cbmV4cG9ydCB0eXBlIFNsb3RTY29wZVJlZmVyZW5jZSA9IFJlY29yZDxcbiAgc3RyaW5nLFxuICB7XG4gICAgdHlwZTogc3RyaW5nIHwgc3RyaW5nW11cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIG5vdFlldEltcGxlbWVudGVkPzogYm9vbGVhblxuICB9XG4+XG5leHBvcnQgdHlwZSBTbG90UmVmZXJlbmNlID0ge1xuICBzY29wZT86IFNsb3RTY29wZVJlZmVyZW5jZVxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xufVxuZXhwb3J0IHR5cGUgU2xvdFJlY29yZDxUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiA9IFJlY29yZDxULCBTbG90UmVmZXJlbmNlPlxuXG5leHBvcnQgY29uc3QgZW51bSBTdHlsZUtpbmQge1xuICBCb290c3RyYXBDbGFzcyA9ICdCT09UU1RSQVAtQ0xBU1MnLFxuICBCc3ZuQ2xhc3MgPSAnQlNWTi1DTEFTUycsXG4gIE92ZXJyaWRlQ2xhc3MgPSAnT1ZFUlJJREUtQ0xBU1MnLFxuICBUYWcgPSAnVEFHJyxcbiAgTm9uZSA9ICdOT05FJyxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVTcGVjIHtcbiAga2luZDogU3R5bGVLaW5kXG4gIHZhbHVlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudFNlY3Rpb24gPSAnUHJvcGVydGllcycgfCAnRXZlbnRzJyB8ICdTbG90cydcbmV4cG9ydCB0eXBlIENvbXBvbmVudFJlZmVyZW5jZSA9IFJlY29yZDxcbiAgc3RyaW5nLFxuICB7XG4gICAgc3R5bGVTcGVjPzogU3R5bGVTcGVjXG4gICAgLyoqXG4gICAgICogVXNlIHBhY2thZ2UgZGlyZWN0b3J5IHJlbGF0aXZlIGxpbmtzLiBleDogQkFjY29yZGlvbi52dWUgPT4gL0JBY2NvcmRpb24vQkFjY29yZGlvbi52dWUgKHNsYXNoIHJlcXVpcmVkKVxuICAgICAqXG4gICAgICogSWYgcGF0aCBpcyBlbXB0eSBzdHJpbmcsIGl0IGRlZmF1bHRzIHRvIHRoZSBwYWNrYWdlIGRpcmVjdG9yeS4gSWYgbnVsbCwgaXQgZG9lcyBub3QgcmVuZGVyIHRoZSBidXR0b25cbiAgICAgKi9cbiAgICBzb3VyY2VQYXRoOiBzdHJpbmcgfCBudWxsXG4gICAgcHJvcHM6IFByb3BSZWNvcmRXaXRoT3B0aW9ucyB8IFByb3BSZWNvcmQgfCBQcm9wUmVjb3JkV2l0aE11bHRpcGxlU2VjdGlvbnNcbiAgICBlbWl0cz86IEVtaXRSZWNvcmRcbiAgICBzbG90cz86IFNsb3RSZWNvcmRcbiAgICBzZWN0aW9ucz86IENvbXBvbmVudFNlY3Rpb25bXVxuICB9XG4+XG5cbmV4cG9ydCB0eXBlIENvbGxlY3RpdmVNZW1iZXJzUmVzcG9uc2UgPSB7XG4gIE1lbWJlcklkOiBudW1iZXJcbiAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgdHlwZTogc3RyaW5nXG4gIHJvbGU6IHN0cmluZ1xuICB0aWVyOiBzdHJpbmdcbiAgaXNBY3RpdmU6IGJvb2xlYW5cbiAgdG90YWxBbW91bnREb25hdGVkOiBudW1iZXJcbiAgY3VycmVuY3k6IHN0cmluZ1xuICBsYXN0VHJhbnNhY3Rpb25BdDogc3RyaW5nXG4gIGxhc3RUcmFuc2FjdGlvbkFtb3VudDogbnVtYmVyXG4gIHByb2ZpbGU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY29tcGFueTogbnVsbCB8IG51bGxcbiAgZGVzY3JpcHRpb246IHN0cmluZyB8IG51bGxcbiAgaW1hZ2U6IHN0cmluZyB8IG51bGxcbiAgZW1haWw6IG51bGwgfCBzdHJpbmdcbiAgdHdpdHRlcjogbnVsbCB8IHN0cmluZ1xuICBnaXRodWI6IHN0cmluZyB8IG51bGxcbiAgd2Vic2l0ZTogbnVsbCB8IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBDb2xsZWN0aXZlUGFydGlhbFJlc3BvbnNlID0ge1xuICBtZW1iZXJzOiBDb2xsZWN0aXZlTWVtYmVyc1Jlc3BvbnNlW11cbn1cblxuZXhwb3J0IHR5cGUgU2Nyb2xsc3B5SXRlbSA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVNjcm9sbHNweT5bJ2xpc3QnXVsndmFsdWUnXVswXVxuZXhwb3J0IHR5cGUgSGVhZGVySXRlbSA9IFNjcm9sbHNweUl0ZW0gJiB7dGFnOiBzdHJpbmc7IGxldmVsOiBudW1iZXJ9XG5leHBvcnQgdHlwZSBDb250ZW50c0l0ZW0gPSBIZWFkZXJJdGVtICYge2NoaWxkcmVuOiBDb250ZW50c0l0ZW1bXX1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvbGlua1Byb3BzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9saW5rUHJvcHMudHNcIjtpbXBvcnQgdHlwZSB7QkxpbmtQcm9wc30gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuaW1wb3J0IHR5cGUge1Byb3BSZWNvcmQsIFByb3BSZWNvcmRXaXRoT3B0aW9uc30gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBsaW5rVG8gPSAnL2RvY3MvY29tcG9uZW50cy9saW5rJ1xuXG5leHBvcnQgY29uc3QgbGlua1Byb3BzID0ge1xuICBhY3RpdmU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgdG8gYHRydWVgLCBwbGFjZXMgdGhlIGNvbXBvbmVudCBpbiB0aGUgYWN0aXZlIHN0YXRlIHdpdGggYWN0aXZlIHN0eWxpbmcnLFxuICB9LFxuICBhY3RpdmVDbGFzczoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdyb3V0ZXItbGluay1hY3RpdmUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29uZmlndXJlIHRoZSBhY3RpdmUgQ1NTIGNsYXNzIGFwcGxpZWQgd2hlbiB0aGUgbGluayBpcyBhY3RpdmUuJyxcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldoZW4gc2V0IHRvIGB0cnVlYCwgZGlzYWJsZXMgdGhlIGxpbmsncyBmdW5jdGlvbmFsaXR5LiBTZWUgYWJvdmUgZm9yIGRldGFpbHMgYW5kIGxpbWl0YXRpb25zXCIsXG4gIH0sXG4gIGV4YWN0QWN0aXZlQ2xhc3M6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAncm91dGVyLWxpbmstZXhhY3QtYWN0aXZlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0NvbmZpZ3VyZSB0aGUgYWN0aXZlIENTUyBjbGFzcyBhcHBsaWVkIHdoZW4gdGhlIGxpbmsgaXMgYWN0aXZlIHdpdGggZXhhY3QgbWF0Y2guJyxcbiAgfSxcbiAgaHJlZjoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlbm90ZXMgdGhlIHRhcmdldCBVUkwgb2YgdGhlIGxpbmsgZm9yIHN0YW5kYXJkIGEgbGlua3MnLFxuICB9LFxuICBpY29uOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgdG8gYHRydWVgLCBzdHlsZXMgYW4gaWNvbiBhdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgbGluayB0ZXh0JyxcbiAgfSxcbiAgbm9QcmVmZXRjaDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUbyBpbXByb3ZlIHRoZSByZXNwb25zaXZlbmVzcyBvZiB5b3VyIE51eHQuanMgYXBwbGljYXRpb25zLCB3aGVuIHRoZSBsaW5rIHdpbGwgYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgdmlld3BvcnQsIE51eHQuanMgd2lsbCBhdXRvbWF0aWNhbGx5IHByZWZldGNoIHRoZSBjb2RlIHNwbGl0dGVkIHBhZ2UuIFNldHRpbmcgYG5vLXByZWZldGNoYCB3aWxsIGRpc2FibGVkIHRoaXMgZmVhdHVyZSBmb3IgdGhlIHNwZWNpZmljIGxpbmsnLFxuICAgIG5vdFlldEltcGxlbWVudGVkOiB0cnVlLFxuICB9LFxuICBvcGFjaXR5OiB7XG4gICAgdHlwZTogXCIxMCB8IDI1IHwgNTAgfCA3NSB8IDEwMCB8ICcxMCcgfCAnMjUnIHwgJzUwJyB8ICc3NScgfCAnMTAwJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NoYW5nZSB0aGUgYWxwaGEgb3BhY2l0eSBvZiB0aGUgbGluayBgcmdiYSgpYCBjb2xvciB2YWx1ZScsXG4gIH0sXG4gIG9wYWNpdHlIb3Zlcjoge1xuICAgIHR5cGU6IFwiMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGFscGhhIG9wYWNpdHkgb2YgdGhlIGxpbmsgYHJnYmEoKWAgY29sb3IgdmFsdWUgb24gaG92ZXInLFxuICB9LFxuICBwcmVmZXRjaDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVG8gaW1wcm92ZSB0aGUgcmVzcG9uc2l2ZW5lc3Mgb2YgeW91ciBOdXh0LmpzIGFwcGxpY2F0aW9ucywgd2hlbiB0aGUgbGluayB3aWxsIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIHZpZXdwb3J0LCBOdXh0LmpzIHdpbGwgYXV0b21hdGljYWxseSBwcmVmZXRjaCB0aGUgY29kZSBzcGxpdHRlZCBwYWdlLiBTZXR0aW5nIGBwcmVmZXRjaGAgdG8gYHRydWVgIG9yIGBmYWxzZWAgd2lsbCBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYHJvdXRlci5wcmVmZXRjaExpbmtzYCcsXG4gIH0sXG4gIHByZWZldGNoZWRDbGFzczoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ05vdCBZZXQgSW1wbG1lbnRlZDogQSBjbGFzcyB0byBhcHBseSB0byBsaW5rcyB0aGF0IGhhdmUgYmVlbiBwcmVmZXRjaGVkLicsXG4gIH0sXG4gIHByZWZldGNoT246IHtcbiAgICB0eXBlOiAnUGFydGlhbDx7dmlzaWJpbGl0eTogYm9vbGVhbiwgaW50ZXJhY3Rpb246IGJvb2xlYW59PicsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbGxvd3MgY3VzdG9tIGNvbnRyb2wgb2Ygd2hlbiB0byBwcmVmZXRjaCBsaW5rcy4gUG9zc2libGUgb3B0aW9ucyBhcmUgJ2ludGVyYWN0aW9uJyBhbmQgJ3Zpc2liaWxpdHknIChkZWZhdWx0KS5cIixcbiAgfSxcbiAgbm9SZWw6IHt9LFxuICByZWw6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ3JlbCcgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBsaW5rXCIsXG4gIH0sXG4gIHJlcGxhY2U6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnU2V0dGluZyByZXBsYWNlIHByb3Agd2lsbCBjYWxsIHJvdXRlci5yZXBsYWNlKCkgaW5zdGVhZCBvZiByb3V0ZXIucHVzaCgpIHdoZW4gY2xpY2tlZCcsXG4gIH0sXG4gIHJvdXRlckNvbXBvbmVudE5hbWU6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAncm91dGVyLWxpbmsnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Jvb3RzdHJhcFZ1ZSBhdXRvIGRldGVjdHMgYmV0d2VlbiBgPHJvdXRlci1saW5rPmAgYW5kIGA8bnV4dC1saW5rPmAuIFNldCB0aGlzIHRoaXMgcHJvcGVydHkgdG8gZXhwbGljaXR5IHNldCB0aGUgbmFtZSBvZiB0aGUgcm91dGVyIGNvbXBvbmVudC4nLFxuICB9LFxuICByb3V0ZXJUYWc6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAnYScsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgdGhlIHRhZyB0eXBlIGZvciB0aGUgbGluaycsXG4gIH0sXG4gIHN0cmV0Y2hlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2hlbiBzZXQgdG8gYHRydWVgLCBtYWtlcyB0aGUgbGluaydzIGBjb250YWluaW5nIGJsb2NrYCBjbGlja2FibGUgdmlhIGFuIGA6OmFmdGVyYCBwc2V1ZG8gZWxlbWVudFwiLFxuICB9LFxuICB0YXJnZXQ6IHtcbiAgICB0eXBlOiAnTGlua1RhcmdldCcsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlICd0YXJnZXQnIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgbGlua1wiLFxuICB9LFxuICB0bzoge1xuICAgIHR5cGU6ICdSb3V0ZUxvY2F0aW9uUmF3JyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRGVub3RlcyB0aGUgdGFyZ2V0IHJvdXRlIG9mIHRoZSBsaW5rLiBXaGVuIGNsaWNrZWQsIHRoZSB2YWx1ZSBvZiB0aGUgdG8gcHJvcCB3aWxsIGJlIHBhc3NlZCB0byBgcm91dGVyLnB1c2goKWAgaW50ZXJuYWxseScsXG4gIH0sXG4gIHVuZGVybGluZU9mZnNldDoge1xuICAgIHR5cGU6IFwiMSB8IDIgfCAzIHwgJzEnIHwgJzInIHwgJzMnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBkaXN0YW5jZSBvZiB0aGUgdW5kZXJsaW5lIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgbGluayB0ZXh0JyxcbiAgfSxcbiAgdW5kZXJsaW5lT2Zmc2V0SG92ZXI6IHtcbiAgICB0eXBlOiBcIjEgfCAyIHwgMyB8ICcxJyB8ICcyJyB8ICczJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NoYW5nZSB0aGUgZGlzdGFuY2Ugb2YgdGhlIHVuZGVybGluZSBmcm9tIHRoZSBib3R0b20gb2YgdGhlIGxpbmsgdGV4dCBvbiBob3ZlcicsXG4gIH0sXG4gIHVuZGVybGluZU9wYWNpdHk6IHtcbiAgICB0eXBlOiBcIjAgfCAxMCB8IDI1IHwgNTAgfCA3NSB8IDEwMCB8ICcwJyB8ICcxMCcgfCAnMjUnIHwgJzUwJyB8ICc3NScgfCAnMTAwJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJTZXQncyB0aGUgb3BhY2l0eSBvZiB0aGUgbGluaydzIHVuZGVybGluZVwiLFxuICB9LFxuICB1bmRlcmxpbmVPcGFjaXR5SG92ZXI6IHtcbiAgICB0eXBlOiBcIjAgfCAxMCB8IDI1IHwgNTAgfCA3NSB8IDEwMCB8ICcwJyB8ICcxMCcgfCAnMjUnIHwgJzUwJyB8ICc3NScgfCAnMTAwJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJTZXQncyB0aGUgb3BhY2l0eSBvZiB0aGUgbGluaydzIHVuZGVybGluZSBvbiBob3ZlclwiLFxuICB9LFxuICB1bmRlcmxpbmVWYXJpYW50OiB7XG4gICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgdGhlIGNvbG9yIHZhcmlhbnQgZm9yIHRoZSBsaW5rIHVuZGVybGluZSBpbmRlcGVuZGVudGx5IG9mIHRoZSBsaW5rIHRleHQnLFxuICB9LFxuICB2YXJpYW50OiB7XG4gICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgdGhlIGNvbG9yIHZhcmlhbnQgZm9yIHRoZSBsaW5rJyxcbiAgfSxcbiAgLy8gVE9ETzogcmVtb3ZlIHRoZSBoYXJkLWNvZGVkIE5ZSSBwcm9wcyBiZWxvdyB3aGVuIHRoZXkgYXJlIGltcGxlbWVudGVkXG59IGFzIGNvbnN0IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJMaW5rUHJvcHMgfCAnbm9QcmVmZXRjaCcgfCAncHJlZmV0Y2gnIHwgJ3ByZWZldGNoZWRDbGFzcyc+XG5cbmV4cG9ydCBjb25zdCBsaW5rZWRCTGlua1NlY3Rpb24gPSB7XG4gIF9vcHRzOiB7XG4gICAgbGlua1RvLFxuICB9LFxuICBfZGF0YTogbGlua1Byb3BzLFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUHJvcFJlY29yZFdpdGhPcHRpb25zXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2NvbW1vblByb3BzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9jb21tb25Qcm9wcy50c1wiO2ltcG9ydCB0eXBlIHtQcm9wUmVmZXJlbmNlfSBmcm9tICcuLi90eXBlcydcblxuY29uc3QgY29tbW9uUHJvcHMgPSAoKSA9PlxuICAoe1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIGB0cnVlYCwgcGxhY2VzIHRoZSBjb21wb25lbnQgaW4gdGhlIGFjdGl2ZSBzdGF0ZSB3aXRoIGFjdGl2ZSBzdHlsaW5nJyxcbiAgICB9LFxuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiAnYWN0aXZlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkNvbmZpZ3VyZSB0aGUgYWN0aXZlIENTUyBjbGFzcyBhcHBsaWVkIHdoZW4gdGhlIGxpbmsgaXMgYWN0aXZlLiBUeXBpY2FsbHkgeW91IHdpbGwgd2FudCB0byBzZXQgdGhpcyB0byBjbGFzcyBuYW1lICdhY3RpdmUnXCIsXG4gICAgfSxcbiAgICBhbHQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1ZhbHVlIHRvIHNldCBmb3IgdGhlIGBhbHRgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhcmlhQ29udHJvbHM6IHtcbiAgICAgIHR5cGU6ICdBcmlhSW52YWxpZCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0lmIHRoaXMgY29tcG9uZW50IGNvbnRyb2xzIGFub3RoZXIgY29tcG9uZW50IG9yIGVsZW1lbnQsIHNldCB0aGlzIHRvIHRoZSBJRCBvZiB0aGUgY29udHJvbGxlZCBjb21wb25lbnQgb3IgZWxlbWVudCcsXG4gICAgfSxcbiAgICBhcmlhRGVzY3JpYmVkYnk6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIGRlc2NyaXB0aW9uIGZvciB0aGlzIGNvbXBvbmVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgYXJpYS1kZXNjcmliZWRieWAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGFyaWFJbnZhbGlkOiB7XG4gICAgICB0eXBlOiAnQXJpYUludmFsaWQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTZXRzIHRoZSBgYXJpYS1pbnZhbGlkYCBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIHdyYXBwZXIgZWxlbWVudC4gV2hlbiBub3QgcHJvdmlkZWQsIHRoZSBgc3RhdGVgIHByb3Agd2lsbCBjb250cm9sIHRoZSBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXV0b0Nsb3NlOiB7XG4gICAgICB0eXBlOiBcImJvb2xlYW4gfCAnaW5zaWRlJyB8ICdvdXRzaWRlJ1wiLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQ29udHJvbHMgdGhlIGF1dG9tYXRpYyBjbG9zaW5nIG9mIHRoZSBjb21wb25lbnQgd2hlbiBjbGlja2luZy4gU2VlIGFib3ZlIGZvciBkZXRhaWxzLicsXG4gICAgfSxcbiAgICBhdXRvY29tcGxldGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlICdhdXRvY29tcGxldGUnIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgZm9ybSBjb250cm9sXCIsXG4gICAgfSxcbiAgICBhcmlhTGFiZWw6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSB2YWx1ZSBvZiBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBlbGVtZW50JyxcbiAgICB9LFxuICAgIGFyaWFMaXZlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gdGhlIHJlbmRlcmVkIGVsZW1lbnQgaXMgYW4gYGFyaWEtbGl2ZWAgcmVnaW9uIChmb3Igc2NyZWVuIHJlYWRlciB1c2VycyksIHNldCB0byBlaXRoZXIgJ3BvbGl0ZScgb3IgJ2Fzc2VydGl2ZSdcIixcbiAgICB9LFxuICAgIGFyaWFMYWJlbGxlZGJ5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYSBsYWJlbCBmb3IgdGhpcyBjb21wb25lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYGFyaWEtbGFiZWxsZWRieWAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGF1dG9mb2N1czoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIGB0cnVlYCwgYXR0ZW1wdHMgdG8gYXV0by1mb2N1cyB0aGUgY29udHJvbCB3aGVuIGl0IGlzIG1vdW50ZWQsIG9yIHJlLWFjdGl2YXRlZCB3aGVuIGluIGEga2VlcC1hbGl2ZS4gRG9lcyBub3Qgc2V0IHRoZSBgYXV0b2ZvY3VzYCBhdHRyaWJ1dGUgb24gdGhlIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgYmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIGJhY2tncm91bmQgb2YgdGhlIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBib2R5QmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBib2R5Qm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IGJvcmRlcicsXG4gICAgfSxcbiAgICBib2R5Q2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib2R5VGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvZHlUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSB0ZXh0JyxcbiAgICB9LFxuICAgIGJvZHlWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib3JkZXInLFxuICAgIH0sXG4gICAgZGVib3VuY2U6IHtcbiAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgZGVmYXVsdDogJzAnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQgdG8gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGdyZWF0ZXIgdGhhbiB6ZXJvLCB3aWxsIGRlYm91bmNlIHRoZSB1c2VyIGlucHV0LiBIYXMgbm8gZWZmZWN0IGlmIHByb3AgJ2xhenknIGlzIHNldFwiLFxuICAgIH0sXG4gICAgZGVib3VuY2VNYXhXYWl0OiB7XG4gICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgIGRlZmF1bHQ6ICdOYU4nLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG1heGltdW0gdGltZSBpbiBtaWxsaXNlY29uZHMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCcncyBpbnZva2VkXCIsXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCB0byBgdHJ1ZWAsIGRpc2FibGVzIHRoZSBjb21wb25lbnQncyBmdW5jdGlvbmFsaXR5IGFuZCBwbGFjZXMgaXQgaW4gYSBkaXNhYmxlZCBzdGF0ZVwiLFxuICAgIH0sXG4gICAgZGlzYWJsZWRGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGlzYWJsZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGRpc2FibGVkIHN0YXRlJyxcbiAgICB9LFxuICAgIGZsb2F0aW5nOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQsIHJlbmRlcnMgYSBzaW5nbGUgY29udHJvbCBmb3JtIHdpdGggYSBmbG9hdGluZyBsYWJlbC4gVGhpcyBvbmx5IHdvcmtzIGZvciBmb3JtcyB3aGVyZSB0aGUgaW1tZWRpYXRlIGNoaWxkcmVuIGFyZSBhIGxhYmVsIGFuZCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBjb250cm9scy4gU2VlIGFib3ZlIGZvciBkZXRhaWxzLicsXG4gICAgfSxcblxuICAgIGZvb3Rlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlckJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBmb290ZXJCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBib3JkZXInLFxuICAgIH0sXG4gICAgZm9vdGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlclRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlclRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgdGV4dCcsXG4gICAgfSxcbiAgICBmb290ZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb3JtOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnSUQgb2YgdGhlIGZvcm0gdGhhdCB0aGUgZm9ybSBjb250cm9sIGJlbG9uZ3MgdG8uIFNldHMgdGhlIGBmb3JtYCBhdHRyaWJ1dGUgb24gdGhlIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgZm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnKHZhbDogc3RyaW5nLCBldnQ6IEV2ZW50KSA9PiBzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlZmVyZW5jZSB0byBhIGZ1bmN0aW9uIGZvciBmb3JtYXR0aW5nIHRoZSBpbnB1dCcsXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgaGVhZGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgYm9yZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIHRleHQnLFxuICAgIH0sXG4gICAgaGVhZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdVc2VkIHRvIHNldCB0aGUgYGlkYCBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGNvbnRlbnQsIGFuZCB1c2VkIGFzIHRoZSBiYXNlIHRvIGdlbmVyYXRlIGFueSBhZGRpdGlvbmFsIGVsZW1lbnQgSURzIGFzIG5lZWRlZCcsXG4gICAgfSxcbiAgICBsYXp5Rm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCwgdGhlIGlucHV0IGlzIGZvcm1hdHRlZCBvbiBibHVyIGluc3RlYWQgb2YgZWFjaCBrZXlzdHJva2UgKGlmIHRoZXJlIGlzIGEgZm9ybWF0dGVyIHNwZWNpZmllZCknLFxuICAgIH0sXG4gICAgbGlua0NsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NsYXNzIG9yIGNsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGlubmVyIGxpbmsgZWxlbWVudCcsXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgSUQgb2YgdGhlIGFzc29jaWF0ZWQgZGF0YWxpc3QgZWxlbWVudCBvciBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHZhbHVlIG9mIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgbm9CYWNrZHJvcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgYmFja2Ryb3AnLFxuICAgIH0sXG4gICAgbm9FbGxpcHNpczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RvIG5vdCBzaG93IGVsbGlwc2lzIGJ1dHRvbnMnLFxuICAgIH0sXG4gICAgbm9Hb3RvRW5kQnV0dG9uczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0hpZGVzIHRoZSBnbyB0byBmaXJzdCBhbmQgZ28gdG8gbGFzdCBwYWdlIGJ1dHRvbnMnLFxuICAgIH0sXG4gICAgbm9IZWFkZXI6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlICBoZWFkZXInLFxuICAgIH0sXG4gICAgbm9IZWFkZXJDbG9zZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgaGVhZGVyIGNsb3NlIGJ1dHRvbicsXG4gICAgfSxcbiAgICBub0hvdmVyUGF1c2U6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byB0cnVlLCBkaXNhYmxlcyBwYXVzaW5nIHRoZSB0aW1lciBvbiBob3ZlciBiZWhhdmlvcicsXG4gICAgfSxcbiAgICBub1Jlc3VtZU9uSG92ZXJMZWF2ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIHRydWUsIHRoZSB0aW1lciB3aWxsIG5vdCByZXN1bWUgd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBlbGVtZW50LiBJdCB3aWxsIG5lZWQgdG8gYmUgbWFudWFsbHkgcmVzdW1lZCcsXG4gICAgfSxcbiAgICBub3ZhbGlkYXRlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGRpc2FibGVzIGJyb3dzZXIgbmF0aXZlIEhUTUw1IHZhbGlkYXRpb24gb24gY29udHJvbHMgaW4gdGhlIGZvcm0nLFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogJ3JlYWRvbmx5IENoZWNrYm94T3B0aW9uUmF3W10nLFxuICAgICAgZGVmYXVsdDogJygpID0+IFtdJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXJyYXkgb2YgaXRlbXMgdG8gcmVuZGVyIGluIHRoZSBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgcGxhaW46IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXIgdGhlIGZvcm0gY29udHJvbCBpbiBwbGFpbiBtb2RlLCByYXRoZXIgdGhhbiBjdXN0b20gc3R5bGVkIG1vZGUnLFxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogXCInJ1wiLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHBsYWludGV4dDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU2V0IHRoZSBmb3JtIGNvbnRyb2wgYXMgcmVhZG9ubHkgYW5kIHJlbmRlcnMgdGhlIGNvbnRyb2wgdG8gbG9vayBsaWtlIHBsYWluIHRleHQgKG5vIGJvcmRlcnMpJyxcbiAgICB9LFxuICAgIHJlcXVpcmVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FkZHMgdGhlIGByZXF1aXJlZGAgYXR0cmlidXRlIHRvIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcmVhZG9ubHk6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGByZWFkb25seWAgYXR0cmlidXRlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIEFSSUEgYXR0cmlidXRlIGByb2xlYCB0byBhIHNwZWNpZmljIHZhbHVlJyxcbiAgICB9LFxuICAgIHJvdW5kZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4uIFRoZSBgc3F1YXJlYCBwcm9wIHRha2VzIHByZWNlZGVuY2UuIFJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzJyxcbiAgICB9LFxuICAgIHJvdW5kZWRCb3R0b206IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYGJvdHRvbWAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkRW5kOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBlbmRgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZFN0YXJ0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBzdGFydGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkVG9wOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGB0b3BgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogJ1NpemUnLFxuICAgICAgZGVmYXVsdDogJ21kJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNldCB0aGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50J3MgYXBwZWFyYW5jZS4gJ3NtJywgJ21kJyAoZGVmYXVsdCksIG9yICdsZydcIixcbiAgICB9LFxuICAgIHNyYzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VSTCB0byBzZXQgZm9yIHRoZSBgc3JjYCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgc3RhdGU6IHtcbiAgICAgIHR5cGU6ICdWYWxpZGF0aW9uU3RhdGUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb250cm9scyB0aGUgdmFsaWRhdGlvbiBzdGF0ZSBhcHBlYXJhbmNlIG9mIHRoZSBjb21wb25lbnQuIGB0cnVlYCBmb3IgdmFsaWQsIGBmYWxzZWAgZm9yIGludmFsaWQsIG9yIGBudWxsYCBmb3Igbm8gdmFsaWRhdGlvbiBzdGF0ZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgc3VidGl0bGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGVUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2g2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgc3VidGl0bGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGVUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6ICdib2R5LXNlY29uZGFyeScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIHN1YnRpdGxlIHRleHQnLFxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcnLFxuICAgIH0sXG4gICAgdGV4dEZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSB0ZXh0IGxhYmVsJyxcbiAgICB9LFxuICAgIHRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgdGV4dCcsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdGl0bGVDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0aXRsZVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnaDQnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVycyB0aGUgZmVlZGJhY2sgdGV4dCBpbiBhIHJ1ZGltZW50YXJ5IHRvb2x0aXAgc3R5bGUnLFxuICAgIH0sXG4gICAgdmFsaWRhdGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0LCBhZGRzIHRoZSBCb290c3RyYXAgY2xhc3MgJ3dhcy12YWxpZGF0ZWQnIG9uIHRoZSBmb3JtLCB0cmlnZ2VyaW5nIHRoZSBuYXRpdmUgYnJvd3NlciB2YWxpZGF0aW9uIHN0YXRlc1wiLFxuICAgIH0sXG4gICAgdmFsdWVGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndmFsdWUnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHZhbHVlJyxcbiAgICB9LFxuICAgIHZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGNvbXBvbmVudC4gV2hlbiBpbXBsZW1lbnRlZCBgYmctdmFyaWFudGAgYW5kIGB0ZXh0LXZhcmlhbnRgIHdpbGwgdGFrZSBwcmVjZWRlbmNlJyxcbiAgICB9LFxuICAgIHdyYXBwZXJBdHRyczoge1xuICAgICAgdHlwZTogJ1JlYWRvbmx5PEF0dHJzVmFsdWU+JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXR0cmlidXRlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSB3cmFwcGVyIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgd3JhcHBlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYWRkIHRvIHRoZSB3cmFwcGVyIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgcGxhY2VtZW50OiB7XG4gICAgICB0eXBlOiAnUGxhY2VtZW50JyxcbiAgICAgIGRlZmF1bHQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgZGVzY3JpcHRpb246ICdQbGFjZW1lbnQgb2YgYSBmbG9hdGluZyBlbGVtZW50JyxcbiAgICB9LFxuICB9KSBhcyBjb25zdFxuXG5jb25zdCBzaW5nbGV0b25Qcm9wcyA9IE9iamVjdC5mcmVlemUoY29tbW9uUHJvcHMoKSlcblxuZXhwb3J0IGNvbnN0IGJ1aWxkQ29tbW9uUHJvcHMgPSAoXG4gIG9iaj86IFBhcnRpYWw8UmVjb3JkPGtleW9mIHR5cGVvZiBzaW5nbGV0b25Qcm9wcywgUGFydGlhbDxQcm9wUmVmZXJlbmNlPj4+XG4pOiBSZWFkb25seTx0eXBlb2Ygc2luZ2xldG9uUHJvcHM+ID0+IHtcbiAgaWYgKCFvYmopIHJldHVybiBzaW5nbGV0b25Qcm9wc1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGNvbnN0IG15T2JqZWN0ID0gY29tbW9uUHJvcHMoKSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cbiAgLy8gTWVyZ2UgdGhlIHByb3ZpZGVkIG9iamVjdCBpbnRvIHRoZSBjb21tb24gcHJvcHNcbiAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBteU9iamVjdFtrZXldID0ge1xuICAgICAgLi4ubXlPYmplY3Rba2V5XSxcbiAgICAgIC4uLnZhbHVlLFxuICAgIH1cbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShteU9iamVjdCBhcyBhbnkpXG59XG5cbmV4cG9ydCBjb25zdCBjb21tb25FbWl0cyA9IHtcbiAgY2FuY2VsOiB7fSxcbiAgb2s6IHt9LFxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9vYmplY3RVdGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtleHBvcnQgY29uc3QgcGljayA9IDxcbiAgQSBleHRlbmRzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj4sXG4gIGNvbnN0IEIgZXh0ZW5kcyBSZWFkb25seUFycmF5PFByb3BlcnR5S2V5Pixcbj4oXG4gIG9ialRvUGx1Y2s6IFJlYWRvbmx5PEE+LFxuICBrZXlzVG9QbHVjazogUmVhZG9ubHk8Qj4gfCByZWFkb25seSAoa2V5b2YgQSlbXVxuKTogUGljazxBLCBCW251bWJlcl0+ID0+XG4gIFsuLi5rZXlzVG9QbHVja10ucmVkdWNlKFxuICAgIChtZW1vLCBwcm9wKSA9PiB7XG4gICAgICBtZW1vW3Byb3BdID0gb2JqVG9QbHVja1twcm9wXVxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LFxuICAgIHt9IGFzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj5cbiAgKSBhcyBQaWNrPEEsIEJbbnVtYmVyXT5cblxuZXhwb3J0IGNvbnN0IG9taXQgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IE9taXQ8QSwgQltudW1iZXJdPiA9PlxuICBPYmplY3Qua2V5cyhvYmpUb1BsdWNrKVxuICAgIC5maWx0ZXIoKGtleSkgPT4gIWtleXNUb1BsdWNrLm1hcCgoZWwpID0+IGVsLnRvU3RyaW5nKCkpLmluY2x1ZGVzKGtleSkpXG4gICAgLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+ICh7Li4ucmVzdWx0LCBba2V5XTogb2JqVG9QbHVja1trZXldfSksIHt9IGFzIE9taXQ8QSwgQltudW1iZXJdPilcblxuLy8gQ29udmVydHMgUGFzY2FsQ2FzZSBvciBjYW1lbENhc2UgdG8ga2ViYWItY2FzZVxuZXhwb3J0IGNvbnN0IGtlYmFiQ2FzZSA9IChzdHI6IHN0cmluZykgPT4gc3RyLnJlcGxhY2UoL1xcQihbQS1aXSkvZywgJy0kMScpLnRvTG93ZXJDYXNlKClcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvc2hvd0hpZGVEYXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9zaG93SGlkZURhdGEudHNcIjtpbXBvcnQgdHlwZSB7c2hvd0hpZGV9IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB0eXBlIHtFbWl0UmVjb3JkLCBQcm9wUmVjb3JkLCBTbG90U2NvcGVSZWZlcmVuY2V9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3Qgc2hvd0hpZGVFbWl0cyA9IHtcbiAgJ2hpZGUnOiB7XG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFsd2F5cyBlbWl0cyBqdXN0IGJlZm9yZSB0aGUgY29tcG9uZW50IGhhcyBoaWRkZW4uIENhbmNlbGFibGUgKGFzIGxvbmcgYXMgY29tcG9uZW50IHdhc24ndCBmb3JjaWJseSBoaWRkZW4pXCIsXG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBoaWRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgJ2hpZGUtcHJldmVudGVkJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VtaXR0ZWQgd2hlbiB0aGUgY29tcG9uZW50IHRyaWVkIHRvIGNsb3NlLCBidXQgd2FzIHByZXZlbnRlZCBmcm9tIGNsb3NpbmcuICBUaGlzIG9jY3VycyB3aGVuIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBldmVudCwgdGhlIHVzZXIgY2xpY2tzIGVzY2FwZSBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZSwgb3IgdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBiYWNrZHJvcCBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZS4nLFxuICB9LFxuICAnaGlkZGVuJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiAnQWx3YXlzIGVtaXRzIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgaGlkZGVuJyxcbiAgfSxcbiAgJ3Nob3cnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBzaG93JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjogJ0Fsd2F5cyBlbWl0cyBqdXN0IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHNob3duLiBDYW5jZWxhYmxlJyxcbiAgfSxcbiAgJ3Nob3ctcHJldmVudGVkJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VtaXR0ZWQgd2hlbiB0aGUgY29tcG9uZW50IHRyaWVkIHRvIG9wZW4sIGJ1dCB3YXMgcHJldmVudGVkIGZyb20gb3BlbmluZy4gVGhpcyBvY2N1cnMgd2hlbiBwcmV2ZW50RGVmYXVsdCgpIGlzIGNhbGxlZCBvbiB0aGUgZXZlbnQnLFxuICB9LFxuICAnc2hvd24nOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246ICdBbHdheXMgZW1pdHMganVzdCBhZnRlciBjb21wb25lbnQgaXMgc2hvd24uJyxcbiAgfSxcbiAgJ3RvZ2dsZSc6IHtcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWx3YXlzIGVtaXRzIGp1c3QgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdG9nZ2xlZCB2aWEgdGhlIGV4cG9zZWQgJ3RvZ2dsZSgpJyBmdW5jdGlvbiBvciB1c2VUb2dnbGUgY29tcG9zYWJsZSAuIENhbmNlbGFibGUgKGFzIGxvbmcgYXMgY29tcG9uZW50IHdhc24ndCBmb3JjaWJseSBoaWRkZW4pXCIsXG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBoaWRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgJ3RvZ2dsZS1wcmV2ZW50ZWQnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRW1pdHRlZCB3aGVuIHRoZSBjb21wb25lbnQgdHJpZWQgdG8gdG9nZ2xlLCBidXQgd2FzIHByZXZlbnRlZCBmcm9tIGRvaW5nIHNvLiAgVGhpcyBvY2N1cnMgd2hlbiBwcmV2ZW50RGVmYXVsdCgpIGlzIGNhbGxlZCBvbiB0aGUgZXZlbnQsIHRoZSB1c2VyIGNsaWNrcyBlc2NhcGUgYW5kIG5vLWNsb3NlLW9uYmFja2Ryb3AgaXMgc2V0IHRvIHRydWUsIG9yIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYmFja2Ryb3AgYW5kIG5vLWNsb3NlLW9uYmFja2Ryb3AgaXMgc2V0IHRvIHRydWUuJyxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIEVtaXRSZWNvcmRcblxuZXhwb3J0IGNvbnN0IHNob3dIaWRlUHJvcHMgPSB7XG4gIGluaXRpYWxBbmltYXRpb246IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZW5hYmxlcyB0aGUgaW5pdGlhbCBhbmltYXRpb24gb24gbW91bnQnLFxuICB9LFxuICBsYXp5OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIHRoZSBjb250ZW50IHdpbGwgbm90IGJlIG1vdW50ZWQgdW50aWwgb3BlbmVkJyxcbiAgfSxcbiAgbW9kZWxWYWx1ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0NvbnRyb2xzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjb21wb25lbnQnLFxuICB9LFxuICBub0ZhZGU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdBbGlhcyBmb3IgYG5vQW5pbWF0aW9uYCcsXG4gIH0sXG4gIG5vQW5pbWF0aW9uOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGRpc2FibGVzIHRoZSBhbmltYXRpb24nLFxuICB9LFxuICBzaG93OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXaGVuIHNldCwgYW5kIHByb3AgJ3Zpc2libGUnIGlzIGZhbHNlIG9uIG1vdW50LCB3aWxsIGFuaW1hdGUgZnJvbSBjbG9zZWQgdG8gb3BlbiBvbiBpbml0aWFsIG1vdW50LiBNYWlubHkgdG8gaGVscCB3aXRoIHRlbXBsYXRlIHNob3cuIFVzZSBtb2RlbC12YWx1ZSBmb3IgcmVhY3RpdmUgc2hvdy9oaWRlXCIsXG4gIH0sXG4gIHRyYW5zUHJvcHM6IHtcbiAgICB0eXBlOiAnVHJhbnNpdGlvblByb3BzJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdUcmFuc2l0aW9uIHByb3BlcnRpZXMnLFxuICB9LFxuICB1bm1vdW50TGF6eToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IGFuZCBgbGF6eWAgaXMgdHJ1ZSwgdGhlIGNvbnRlbnQgd2lsbCBiZSB1bm1vdW50ZWQgd2hlbiBjbG9zZWQnLFxuICB9LFxuICB2aXNpYmxlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoZW4gJ3RydWUnLCBvcGVuIHdpdGhvdXQgYW5pbWF0aW9uXCIsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIHNob3dIaWRlIHwgJ21vZGVsVmFsdWUnPlxuXG5leHBvcnQgY29uc3Qgc2hvd0hpZGVTbG90c0RhdGEgPSB7XG4gIGlkOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVzY3JpcHRpb246ICdVbmlxdWUgSUQgZm9yIHRoZSBjb21wb25lbnQnLFxuICB9LFxuICBzaG93OiB7XG4gICAgdHlwZTogJygpID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnVuY3Rpb24gdG8gc2hvdyB0aGUgY29tcG9uZW50JyxcbiAgfSxcbiAgaGlkZToge1xuICAgIHR5cGU6ICcodHJpZ2dlcj86IHN0cmluZywgbm9UcmlnZ2VyRW1pdD86IGJvb2xlYW4pID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Z1bmN0aW9uIHRvIGhpZGUgdGhlIGNvbXBvbmVudC4gYHRyaWdnZXJgIGlzIHRoZSB0cmlnZ2VyIHRoYXQgY2F1c2VkIHRoZSBoaWRlLiBgbm9UcmlnZ2VyRW1pdGAgcHJldmVudHMgdGhlIGVtaXQgb2YgdGhlIHRyaWdnZXIgZXZlbnQuJyxcbiAgfSxcbiAgdG9nZ2xlOiB7XG4gICAgdHlwZTogJygpID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBjb21wb25lbnQgdmlzaWJpbGl0eScsXG4gIH0sXG4gIGFjdGl2ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZXNjcmlwdGlvbjogJ0luZGljYXRlcyBpZiB0aGUgY29tcG9uZW50IGlzIGFjdGl2ZSAoc3RhcnRpbmcgc2hvdywgYmVmb3JlL2FmdGVyIGFuaW1hdGlvbnMpJyxcbiAgfSxcbiAgdmlzaWJsZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZXNjcmlwdGlvbjogJ0luZGljYXRlcyBpZiB0aGUgY29tcG9uZW50IGlzIHZpc2libGUgKHNob3duKScsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBTbG90U2NvcGVSZWZlcmVuY2VcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvZHJvcGRvd25Db21tb24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2Ryb3Bkb3duQ29tbW9uLnRzXCI7aW1wb3J0IHR5cGUge0JEcm9wZG93bkVtaXRzLCBCRHJvcGRvd25Qcm9wc30gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuaW1wb3J0IHR5cGUge0VtaXRSZWNvcmQsIFByb3BSZWNvcmQsIFNsb3RSZWNvcmR9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHtidWlsZENvbW1vblByb3BzfSBmcm9tICcuL2NvbW1vblByb3BzJ1xuaW1wb3J0IHtwaWNrfSBmcm9tICcuL29iamVjdFV0aWxzJ1xuaW1wb3J0IHtzaG93SGlkZUVtaXRzLCBzaG93SGlkZVByb3BzfSBmcm9tICcuL3Nob3dIaWRlRGF0YSdcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duUHJvcHMgPSB7XG4gIGF1dG9DbG9zZToge1xuICAgIHR5cGU6IFwiYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnXCIsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdDb250cm9scyB0aGUgYXV0b21hdGljIGNsb3Npbmcgb2YgdGhlIGRyb3Bkb3duIHdoZW4gY2xpY2tpbmcuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICB9LFxuICBib3VuZGFyeToge1xuICAgIHR5cGU6ICdCb3VuZGFyeSB8IFJvb3RCb3VuZGFyeScsXG4gICAgZGVmYXVsdDogJ2NsaXBwaW5nQW5jZXN0b3JzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIGJvdW5kYXJ5IGNvbnN0cmFpbnQgb2YgZHJvcGRvd246IGFueSB2YWx1ZSBvZiBmbG9hdGluZy11cydzIEJvdW5kYXJ5IG9yIFJvb3RCb3VuZGFyeSB0eXBlLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuXCIsXG4gIH0sXG4gIGJvdW5kYXJ5UGFkZGluZzoge1xuICAgIHR5cGU6ICdQYWRkaW5nJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgdmlydHVhbCBwYWRkaW5nIGFyb3VuZCB0aGUgYm91bmRhcnkgdG8gY2hlY2sgZm9yIG92ZXJmbG93JyxcbiAgfSxcbiAgZmxvYXRpbmdNaWRkbGV3YXJlOiB7XG4gICAgdHlwZTogJ01pZGRsZXdhcmVbXScsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnRGlyZWN0bHkgc2V0IHRoZSBmbG9hdGluZy11aSBtaWRkbGV3YXJlIGJlaGF2aW9yLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgfSxcbiAgaWNvbjoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCBzdHlsZXMgYW4gaWNvbiBhdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgYnV0dG9uIHRleHQnLFxuICB9LFxuICBpc05hdjoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0luZGljYXRlcyB0aGUgZHJvcGRvd24gaXMgYSBuYXYgZHJvcGRvd24nLFxuICB9LFxuICBtZW51Q2xhc3M6IHtcbiAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhZGQgdG8gdGhlIG1lbnUgY29udGFpbmVyJyxcbiAgfSxcbiAgbm9DYXJldDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0hpZGUgdGhlIGNhcmV0IGluZGljYXRvciBvbiB0aGUgdG9nZ2xlIGJ1dHRvbicsXG4gIH0sXG4gIG5vRmxpcDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1ByZXZlbnQgdGhlIG1lbnUgZnJvbSBhdXRvIGZsaXBwaW5nIHBvc2l0aW9ucycsXG4gIH0sXG4gIG5vU2hpZnQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdQcmV2ZW50IHRoZSBtZW51IGZyb20gYXV0b21hdGljYWxseSBzaGlmdGluZyBwb3NpdGlvbnMnLFxuICB9LFxuICBub1NpemU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdQcmV2ZW50IHRoZSBtZW51IGZyb20gYXV0b21hdGljYWxseSByZXNpemluZycsXG4gIH0sXG4gIG9mZnNldDoge1xuICAgIHR5cGU6ICdudW1iZXIgfCBzdHJpbmcgfCB7bWFpbkF4aXM/OiBudW1iZXI7IGNyb3NzQXhpcz86IG51bWJlcjsgYWxpZ25tZW50QXhpcz86IG51bWJlciB8IG51bGwnLFxuICAgIGRlZmF1bHQ6IDAsXG4gICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRvIHNoaWZ0IHRoZSBtZW51IGJ5LiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgfSxcbiAgbm9XcmFwcGVyOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnRG8gbm90IHJlbmRlciB0aGUgZHJvcGRvd24gd3JhcHBlciBlbGVtZW50JyxcbiAgfSxcbiAgc3BsaXQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgcmVuZGVycyBhIHNwbGl0IGJ1dHRvbiBkcm9wZG93bicsXG4gIH0sXG4gIHNwbGl0QnV0dG9uVHlwZToge1xuICAgIHR5cGU6ICdCdXR0b25UeXBlJyxcbiAgICBkZWZhdWx0OiAnYnV0dG9uJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVmFsdWUgdG8gcGxhY2UgaW4gdGhlICd0eXBlJyBhdHRyaWJ1dGUgb24gdGhlIHNwbGl0IGJ1dHRvbjogJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXCIsXG4gIH0sXG4gIHNwbGl0Q2xhc3M6IHtcbiAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhZGQgdG8gdGhlIHNwbGl0IGJ1dHRvbicsXG4gIH0sXG4gIHNwbGl0RGlzYWJsZWQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIHRoZSBzcGxpdCBidXR0b24gaXMgZGlzYWJsZWQnLFxuICB9LFxuICBzcGxpdEhyZWY6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdEZW5vdGVzIHRoZSB0YXJnZXQgVVJMIG9mIHRoZSBsaW5rIGZvciB0aGUgc3BsaXQgYnV0dG9uJyxcbiAgfSxcbiAgc3BsaXRUbzoge1xuICAgIHR5cGU6ICdSb3V0ZUxvY2F0aW9uUmF3JyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRGVub3RlcyB0aGUgdGFyZ2V0IHJvdXRlIG9mIHRoZSBzcGxpdCBidXR0b24uIFdoZW4gY2xpY2tlZCwgdGhlIHZhbHVlIG9mIHRoZSB0byBwcm9wIHdpbGwgYmUgcGFzc2VkIHRvIHJvdXRlci5wdXNoKCkgaW50ZXJuYWxseSwgc28gdGhlIHZhbHVlIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBMb2NhdGlvbiBkZXNjcmlwdG9yIG9iamVjdCcsXG4gIH0sXG4gIHNwbGl0VmFyaWFudDoge1xuICAgIHR5cGU6ICdCdXR0b25WYXJpYW50IHwgbnVsbCcsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBzcGxpdCBidXR0b24uIERlZmF1bHRzIHRvIHRoZSAndmFyaWFudCcgcHJvcCB2YWx1ZVwiLFxuICB9LFxuICBzdHJhdGVneToge1xuICAgIHR5cGU6ICdTdHJhdGVneScsXG4gICAgZGVmYXVsdDogJ2Fic29sdXRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBzdHJhdGVneSB1c2VkIHRvIGRldGVybWluZSB3aGVuIHRvIGhpZGUgdGhlIGRyb3Bkb3duLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgfSxcbiAgdGV4dDoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ1RleHQgdG8gcGxhY2UgaW4gdGhlIHRvZ2dsZSBidXR0b24sIG9yIGluIHRoZSBzcGxpdCBidXR0b24gaXMgc3BsaXQgbW9kZScsXG4gIH0sXG4gIHRvZ2dsZUNsYXNzOiB7XG4gICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYWRkIHRvIHRoZSB0b2dnbGUgYnV0dG9uJyxcbiAgfSxcbiAgdG9nZ2xlVGV4dDoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdUb2dnbGUgZHJvcGRvd24nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0FSSUEgbGFiZWwgKHZpc3VhbGx5LWhpZGRlbikgdG8gc2V0IG9uIHRoZSB0b2dnbGUgd2hlbiBpbiBzcGxpdCBtb2RlLiBPdmVycmlkZW4gYnkgdGhlIHNsb3Qgb2YgdGhlIHNhbWUgbmFtZScsXG4gIH0sXG4gIHRlbGVwb3J0RGlzYWJsZWQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdSZW5kZXJzIHRoZSBkcm9wZG93biBpbiB0aGUgZXhhY3QgcGxhY2UgaXQgd2FzIGRlZmluZWQnLFxuICB9LFxuICB0ZWxlcG9ydFRvOiB7XG4gICAgdHlwZTogJ3N0cmluZyB8IFJlbmRlcmVyRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ092ZXJyaWRlcyB0aGUgZGVmYXVsdCB0ZWxlcG9ydCBsb2NhdGlvbicsXG4gIH0sXG4gIC4uLnNob3dIaWRlUHJvcHMsXG4gIC4uLnBpY2soXG4gICAgYnVpbGRDb21tb25Qcm9wcyh7XG4gICAgICByb2xlOiB7XG4gICAgICAgIGRlZmF1bHQ6ICdtZW51JyxcbiAgICAgIH0sXG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBbJ2FyaWFMYWJlbCcsICdkaXNhYmxlZCcsICdpZCcsICdwbGFjZW1lbnQnLCAncm9sZScsICdzaXplJywgJ3ZhcmlhbnQnLCAnd3JhcHBlckNsYXNzJ11cbiAgKSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkRyb3Bkb3duUHJvcHM+XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bkVtaXRzID0ge1xuICAuLi5zaG93SGlkZUVtaXRzLFxuICAnc3BsaXQtY2xpY2snOiB7XG4gICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gc3BsaXQgYnV0dG9uIGlzIGNsaWNrZWQgaW4gc3BsaXQgbW9kZScsXG4gICAgYXJnczoge1xuICAgICAgZXZlbnQ6IHtcbiAgICAgICAgdHlwZTogJ01vdXNlRXZlbnQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ05hdGl2ZSBjbGljayBldmVudCBvYmplY3QnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAndG9nZ2xlJzoge1xuICAgIGRlc2NyaXB0aW9uOiAnRW1pdHRlZCB3aGVuIHRvZ2dsZSBidXR0b24gaXMgY2xpY2tlZCcsXG4gIH0sXG4gICdjYW5jZWwnOiB7XG4gICAgYXJnczogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiB1bmRlZmluZWQsXG4gIH0sXG4gICdvayc6IHtcbiAgICBhcmdzOiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IHVuZGVmaW5lZCxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIEVtaXRSZWNvcmQ8a2V5b2YgQkRyb3Bkb3duRW1pdHM+XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93blNsb3RzID0ge1xuICAnZGVmYXVsdCc6IHtcbiAgICBkZXNjcmlwdGlvbjogJ09wdGlvbmFsbHkgc2NvcGVkIGRlZmF1bHQgc2xvdCBmb3IgZHJvcGRvd24gbWVudSBjb250ZW50JyxcbiAgICBzY29wZToge1xuICAgICAgaGlkZToge1xuICAgICAgICB0eXBlOiAnKCkgPT4gdm9pZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FuIGJlIHVzZWQgdG8gY2xvc2UgdGhlIGRyb3Bkb3duJyxcbiAgICAgIH0sXG4gICAgICBzaG93OiB7XG4gICAgICAgIHR5cGU6ICcoKSA9PiB2b2lkJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYW4gYmUgdXNlZCB0byBvcGVuIHRoZSBkcm9wZG93bicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gICdidXR0b24tY29udGVudCc6IHtcbiAgICBkZXNjcmlwdGlvbjogJ0NhbiBiZSB1c2VkIHRvIGltcGxlbWVudCBjdXN0b20gdGV4dCB3aXRoIGljb25zIGFuZCBtb3JlIHN0eWxpbmcnLFxuICB9LFxuICAndG9nZ2xlLXRleHQnOiB7XG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQVJJQSBsYWJlbCAodmlzdWFsbHktaGlkZGVuKSB0byBzZXQgb24gdGhlIHRvZ2dsZSB3aGVuIGluIHNwbGl0IG1vZGUuIE92ZXJyaWRlcyB0aGUgdG9nZ2xlLXRleHQgcHJvcCcsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBTbG90UmVjb3JkXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHMvbmF2LmRhdGEudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50cy9uYXYuZGF0YS50c1wiO2ltcG9ydCB0eXBlIHtcbiAgQk5hdkZvcm1FbWl0cyxcbiAgQk5hdkZvcm1Qcm9wcyxcbiAgQk5hdkZvcm1TbG90cyxcbiAgQk5hdkl0ZW1FbWl0cyxcbiAgQk5hdkl0ZW1Qcm9wcyxcbiAgQk5hdkl0ZW1TbG90cyxcbiAgQk5hdlByb3BzLFxuICBCTmF2U2xvdHMsXG4gIEJOYXZUZXh0UHJvcHMsXG4gIEJOYXZUZXh0U2xvdHMsXG59IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB7XG4gIHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlLFxuICBkZWZhdWx0UHJvcFNlY3Rpb25TeW1ib2wsXG4gIHR5cGUgRW1pdFJlY29yZCxcbiAgdHlwZSBQcm9wUmVjb3JkLFxuICB0eXBlIFNsb3RSZWNvcmQsXG4gIFN0eWxlS2luZCxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQge2xpbmtQcm9wcywgbGlua1RvfSBmcm9tICcuLi8uLi91dGlscy9saW5rUHJvcHMnXG5pbXBvcnQge2J1aWxkQ29tbW9uUHJvcHN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vblByb3BzJ1xuaW1wb3J0IHtvbWl0LCBwaWNrfSBmcm9tICcuLi8uLi91dGlscy9vYmplY3RVdGlscydcbmltcG9ydCB7ZHJvcGRvd25FbWl0cywgZHJvcGRvd25Qcm9wcywgZHJvcGRvd25TbG90c30gZnJvbSAnLi4vLi4vdXRpbHMvZHJvcGRvd25Db21tb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZDogKCk6IENvbXBvbmVudFJlZmVyZW5jZSA9PiAoe1xuICAgIEJOYXY6IHtcbiAgICAgIHNvdXJjZVBhdGg6ICcvQk5hdi9CTmF2LnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5waWNrKFxuICAgICAgICAgIGJ1aWxkQ29tbW9uUHJvcHMoe1xuICAgICAgICAgICAgdGFnOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICd1bCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFsndGFnJ11cbiAgICAgICAgKSxcbiAgICAgICAgYWxpZ246IHtcbiAgICAgICAgICB0eXBlOiAnQWxpZ25tZW50SnVzdGlmeUNvbnRlbnQnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FsaWducyB0aGUgbmF2IGl0ZW1zIHRvIGFueSB2YWx1ZSBvZiBBbGlnbm1lbnRKdXN0aWZ5Q29udGVudCcsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBjbGFyaXR5IGFuZCBjb25zaXN0ZW5jeSlcbiAgICAgICAgfSxcbiAgICAgICAgY2FyZEhlYWRlcjoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdJbmRpY2F0ZXMgdGhlIG5hdiBpcyBwbGFjZWQgaW5zaWRlIGEgY2FyZCBoZWFkZXInLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY2xhcml0eSlcbiAgICAgICAgfSxcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnRmlsbHMgYWxsIGhvcml6b250YWwgc3BhY2Ugd2l0aCBuYXYgaXRlbXMgcHJvcG9ydGlvbmFsbHksIHdpdGggdmFyeWluZyB3aWR0aHMnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY2xhcml0eSBhbmQgYnJldml0eSlcbiAgICAgICAgfSxcbiAgICAgICAganVzdGlmaWVkOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbGxzIGFsbCBob3Jpem9udGFsIHNwYWNlIHdpdGggbmF2IGl0ZW1zLCBlYWNoIGhhdmluZyBlcXVhbCB3aWR0aCcsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBjbGFyaXR5IGFuZCBicmV2aXR5KVxuICAgICAgICB9LFxuICAgICAgICBwaWxsczoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTdHlsZXMgbmF2IGl0ZW1zIGFzIHBpbGwgYnV0dG9ucycsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBicmV2aXR5KVxuICAgICAgICB9LFxuICAgICAgICBzbWFsbDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdSZWR1Y2VzIHRoZSBuYXYgc2l6ZScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBicmV2aXR5KVxuICAgICAgICB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N0eWxlcyBuYXYgaXRlbXMgYXMgdGFicycsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBicmV2aXR5KVxuICAgICAgICB9LFxuICAgICAgICB1bmRlcmxpbmU6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5kZXJsaW5lcyB0aGUgYWN0aXZlIG5hdiBpdGVtJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChyZXBocmFzZWQgZm9yIGJyZXZpdHkpXG4gICAgICAgIH0sXG4gICAgICAgIHZlcnRpY2FsOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N0YWNrcyBuYXYgaXRlbXMgdmVydGljYWxseScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBicmV2aXR5KVxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCTmF2UHJvcHM+LFxuICAgICAgZW1pdHM6IHt9LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCBmb3IgdGhlIG5hdicsXG4gICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCTmF2U2xvdHM+LFxuICAgIH0sXG4gICAgQk5hdkZvcm06IHtcbiAgICAgIHN0eWxlU3BlYzoge2tpbmQ6IFN0eWxlS2luZC5UYWcsIHZhbHVlOiAnbGkgPiBmb3JtJ30sXG4gICAgICBzb3VyY2VQYXRoOiAnL0JOYXYvQk5hdkZvcm0udnVlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIC4uLnBpY2soYnVpbGRDb21tb25Qcm9wcygpLCBbXG4gICAgICAgICAgJ2Zsb2F0aW5nJyxcbiAgICAgICAgICAnaWQnLFxuICAgICAgICAgICdub3ZhbGlkYXRlJyxcbiAgICAgICAgICAncm9sZScsXG4gICAgICAgICAgJ3ZhbGlkYXRlZCcsXG4gICAgICAgICAgJ3dyYXBwZXJBdHRycycsXG4gICAgICAgIF0pLFxuICAgICAgICBmb3JtQ2xhc3M6IHtcbiAgICAgICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgZm9ybSBlbGVtZW50JywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChyZXBocmFzZWQgZm9yIGNsYXJpdHkpXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJOYXZGb3JtUHJvcHM+LFxuICAgICAgZW1pdHM6IHtcbiAgICAgICAgc3VibWl0OiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkJyxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICBzdWJtaXQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0V2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOYXRpdmUgc3VibWl0IGV2ZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIEVtaXRSZWNvcmQ8a2V5b2YgQk5hdkZvcm1FbWl0cz4sXG4gICAgICBzbG90czoge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IGZvciB0aGUgbmF2IGZvcm0nLFxuICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFNsb3RSZWNvcmQ8a2V5b2YgQk5hdkZvcm1TbG90cz4sXG4gICAgfSxcbiAgICBCTmF2SXRlbToge1xuICAgICAgc291cmNlUGF0aDogJy9CTmF2L0JOYXZJdGVtLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICBbZGVmYXVsdFByb3BTZWN0aW9uU3ltYm9sXToge1xuICAgICAgICAgIGxpbmtBdHRyczoge1xuICAgICAgICAgICAgdHlwZTogJ1JlYWRvbmx5PEF0dHJzVmFsdWU+JyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWRkaXRpb25hbCBhdHRyaWJ1dGVzIGZvciB0aGUgbmVzdGVkIGxpbmsgZWxlbWVudCcsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBjbGFyaXR5KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGlua0NsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgZm9yIHRoZSBuZXN0ZWQgbGluayBlbGVtZW50JywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChyZXBocmFzZWQgZm9yIGNsYXJpdHkpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxFeGNsdWRlPGtleW9mIEJOYXZJdGVtUHJvcHMsIGtleW9mIHR5cGVvZiBsaW5rUHJvcHM+PixcbiAgICAgICAgJ0JMaW5rIHByb3BzJzoge1xuICAgICAgICAgIF9vcHRzOiB7XG4gICAgICAgICAgICBsaW5rVG8sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfZGF0YTogb21pdChsaW5rUHJvcHMsIFsncm91dGVyVGFnJ10pLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGVtaXRzOiB7XG4gICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gYSBub24tZGlzYWJsZWQgbmF2IGl0ZW0gaXMgY2xpY2tlZCcsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBjbGFyaXR5KVxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdNb3VzZUV2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDbGljayBldmVudCBkZXRhaWxzJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChyZXBocmFzZWQgZm9yIGNsYXJpdHkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBFbWl0UmVjb3JkPGtleW9mIEJOYXZJdGVtRW1pdHM+LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgYWZ0ZXI6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgcGxhY2VkIGFmdGVyIHRoZSBuYXYgaXRlbSBsaW5rICh1c2VmdWwgZm9yIG5lc3RlZCBuYXZzKScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBjbGFyaXR5KVxuICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCBmb3IgdGhlIG5hdiBpdGVtJyxcbiAgICAgICAgICBzY29wZToge30sXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJOYXZJdGVtU2xvdHM+LFxuICAgIH0sXG4gICAgQk5hdkl0ZW1Ecm9wZG93bjoge1xuICAgICAgc3R5bGVTcGVjOiB7a2luZDogU3R5bGVLaW5kLk92ZXJyaWRlQ2xhc3MsIHZhbHVlOiAnLm5hdi1pdGVtLmRyb3Bkb3duJ30sXG4gICAgICBzb3VyY2VQYXRoOiAnL0JOYXYvQk5hdkl0ZW1Ecm9wZG93bi52dWUnLFxuICAgICAgcHJvcHM6IGRyb3Bkb3duUHJvcHMsXG4gICAgICBlbWl0czogZHJvcGRvd25FbWl0cyxcbiAgICAgIHNsb3RzOiBkcm9wZG93blNsb3RzLFxuICAgIH0sXG4gICAgQk5hdlRleHQ6IHtcbiAgICAgIHN0eWxlU3BlYzoge2tpbmQ6IFN0eWxlS2luZC5PdmVycmlkZUNsYXNzLCB2YWx1ZTogJy5uYXZiYXItdGV4dCd9LFxuICAgICAgc291cmNlUGF0aDogJy9CTmF2L0JOYXZUZXh0LnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxhaW4gdGV4dCB0byBkaXNwbGF5IGluIHRoZSBuYXYnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY29uc2lzdGVuY3kpXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJOYXZUZXh0UHJvcHM+LFxuICAgICAgZW1pdHM6IHt9LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBkaXNwbGF5IGluIHRoZSBuYXYnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY29uc2lzdGVuY3kpXG4gICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCTmF2VGV4dFNsb3RzPixcbiAgICB9LFxuICB9KSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFzQk8sSUFBTSwyQkFBMkI7OztBQ25CakMsSUFBTSxTQUFTO0FBRWYsSUFBTSxZQUFZO0FBQUEsRUFDdkIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0Esa0JBQWtCO0FBQUEsSUFDaEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLElBQ0YsbUJBQW1CO0FBQUEsRUFDckI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtB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
