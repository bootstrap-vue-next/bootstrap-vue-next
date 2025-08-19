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

// src/data/components/alert.data.ts
var alert_data_default = {
  load: () => ({
    BAlert: {
      sourcePath: '/BAlert/BAlert.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ...omit(showHideProps, ['modelValue']),
          ...pick(buildCommonProps(), ['variant', 'noHoverPause', 'noResumeOnHoverLeave']),
          alertClass: {
            type: 'ClassValue',
            default: void 0,
            description: 'CSS class (or classes) to add to the alert wrapper element',
          },
          bgVariant: {
            type: 'ColorVariant | null',
            default: null,
            // description: 'Background color variant for the alert' // TODO missing description
          },
          // TODO prop inconsistency ColorVariant | null (matches ColorExtendables, not directly in BAlertProps, but valid via inheritance)
          body: {
            type: 'string',
            default: void 0,
            description: 'The text content of the body',
          },
          bodyClass: {
            type: 'ClassValue',
            default: void 0,
            description: 'CSS class (or classes) to add to the alert body element',
          },
          closeClass: {
            type: 'ClassValue',
            default: void 0,
            description: 'Applies one or more custom classes to the close button',
          },
          closeContent: {
            type: 'string',
            default: void 0,
            description: 'Sets the text of the close button. The `close` slot takes precedence',
          },
          closeLabel: {
            type: 'string',
            default: 'Close',
            description: 'Sets the aria-label attribute on the close button',
          },
          closeVariant: {
            type: 'string | null',
            default: null,
            description: 'Color variant for the close button',
            // TODO prop inconsistency string | null (BAlertProps expects ButtonVariant | null)
          },
          dismissible: {
            type: 'boolean',
            default: false,
            description: 'When set, enables the close button',
          },
          headerClass: {
            type: 'ClassValue',
            default: void 0,
            description: 'CSS class (or classes) to add to the alert header element',
          },
          headerTag: {
            type: 'string',
            default: 'div',
            description: 'Specify the HTML tag to render instead of the default tag for the footer',
            // TODO grammar check (should refer to "header" instead of "footer")
          },
          id: {
            type: 'string',
            default: void 0,
            description:
              'Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed',
          },
          interval: {
            type: 'number | requestAnimationFrame',
            default: 'requestAnimationFrame',
            description: 'The interval in milliseconds to update the countdown timer',
          },
          isStatus: {
            type: 'boolean',
            default: false,
            description:
              "When set to 'true', makes the alert have attributes aria-live=polite and role=status. When 'false' aria-live will be 'assertive' and role will be 'alert'",
          },
          modelValue: {
            type: 'boolean | number',
            default: false,
            description:
              'Controls the visibility of the alert. A `boolean` value directly controls the visibility. A number starts the countdown timer',
          },
          progressProps: {
            type: "Omit<BProgressBarProps, 'label' | 'max' | 'value'>",
            default: void 0,
            description:
              'The properties to define the progress bar in the alert. No progress will be shown if left undefined',
          },
          showOnPause: {
            type: 'boolean',
            default: true,
            description:
              'Setting this property to `false` will override the behavior of showing the Alert when the timer is paused',
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
            // description: 'Text color variant for the alert' // TODO missing description
          },
          // TODO prop inconsistency TextColorVariant | null (matches ColorExtendables, not directly in BAlertProps, but valid via inheritance)
          title: {
            type: 'string',
            default: void 0,
            description: "The alert's title text",
          },
        },
        'BLink props': linkedBLinkSection,
      },
      slots: {
        default: {
          description: 'Content to place in the Alert',
        },
        close: {
          description: 'Content to place in the close button',
        },
        title: {
          description: '',
          scope: {},
          // TODO
        },
      },
      emits: {
        ...showHideEmits,
        'close': {
          description: 'Emitted when the alert begins its transition to close',
        },
        'close-countdown': {
          description: 'Content to place in the alert',
          // TODO grammar check (description is vague and possibly incorrect; should describe the countdown event)
          args: {
            closeCountdown: {
              description: 'Time remaining on the timer',
              type: 'number',
            },
          },
        },
        'update:model-value': {
          description: 'Standard event to update the v-model',
          // TODO similar content to BAccordion/update:model-value (similar description phrasing)
          args: {
            'update:model-value': {
              description: 'modelValue',
              type: 'boolean | number',
            },
          },
        },
        'cancel': {
          args: void 0,
          description: void 0,
        },
        'ok': {
          args: void 0,
          description: void 0,
        },
      },
    },
  }),
}
export {alert_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3R5cGVzL2luZGV4LnRzIiwgInNyYy91dGlscy9saW5rUHJvcHMudHMiLCAic3JjL3V0aWxzL3Nob3dIaWRlRGF0YS50cyIsICJzcmMvdXRpbHMvY29tbW9uUHJvcHMudHMiLCAic3JjL3V0aWxzL29iamVjdFV0aWxzLnRzIiwgInNyYy9kYXRhL2NvbXBvbmVudHMvYWxlcnQuZGF0YS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy90eXBlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3R5cGVzL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy90eXBlcy9pbmRleC50c1wiO2ltcG9ydCB0eXBlIHt1c2VTY3JvbGxzcHl9IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50SXRlbSA9IEV4Y2x1ZGU8a2V5b2YgQ29tcG9uZW50UmVmZXJlbmNlLCAnY29tcG9uZW50JyB8ICdzZWN0aW9ucyc+XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcFJlZmVyZW5jZSB7XG4gIHR5cGU/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZGVmYXVsdD86IHVua25vd25cbiAgbm90WWV0SW1wbGVtZW50ZWQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByb3BSZWNvcmRXaXRoT3B0aW9ucyA9IHtcbiAgX2RhdGE6IFByb3BSZWNvcmQgLy8gQWxsb3dzIGZvciBhIHNpbmdsZSBzZWN0aW9uIG9yIG11bHRpcGxlIHNlY3Rpb25zXG4gIF9vcHRzPzoge2xpbmtUbz86IHN0cmluZ31cbn1cbi8vIEZsYXQgdmFyaWFudFxuZXhwb3J0IHR5cGUgUHJvcFJlY29yZDxUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiA9IFJlY29yZDxULCBQcm9wUmVmZXJlbmNlPlxuLy8gTXVsdGlwbGUgc2VjdGlvbnMgdmFyaWFudFxuZXhwb3J0IHR5cGUgUHJvcFJlY29yZFdpdGhNdWx0aXBsZVNlY3Rpb25zID0ge1xuICBbZGVmYXVsdFByb3BTZWN0aW9uU3ltYm9sXTogUHJvcFJlY29yZCB8IFByb3BSZWNvcmRXaXRoT3B0aW9uc1xufSAmIHtba2V5OiBzdHJpbmddOiBQcm9wUmVjb3JkIHwgUHJvcFJlY29yZFdpdGhPcHRpb25zfVxuLy8gT3B0aW9ucyB2YXJpYW50XG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3BTZWN0aW9uU3ltYm9sID0gJ19kZWZhdWx0UHJvcFNlY3Rpb24nXG5cbmV4cG9ydCB0eXBlIEVtaXRBcmdSZWZlcmVuY2UgPSBSZWNvcmQ8c3RyaW5nLCB7dHlwZTogc3RyaW5nOyBkZXNjcmlwdGlvbj86IHN0cmluZ30+XG5leHBvcnQgdHlwZSBFbWl0UmVmZXJlbmNlID0ge1xuICBhcmdzPzogRW1pdEFyZ1JlZmVyZW5jZVxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xufVxuZXhwb3J0IHR5cGUgRW1pdFJlY29yZDxUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiA9IFJlY29yZDxULCBFbWl0UmVmZXJlbmNlPlxuXG5leHBvcnQgdHlwZSBTbG90U2NvcGVSZWZlcmVuY2UgPSBSZWNvcmQ8XG4gIHN0cmluZyxcbiAge1xuICAgIHR5cGU6IHN0cmluZyB8IHN0cmluZ1tdXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBub3RZZXRJbXBsZW1lbnRlZD86IGJvb2xlYW5cbiAgfVxuPlxuZXhwb3J0IHR5cGUgU2xvdFJlZmVyZW5jZSA9IHtcbiAgc2NvcGU/OiBTbG90U2NvcGVSZWZlcmVuY2VcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn1cbmV4cG9ydCB0eXBlIFNsb3RSZWNvcmQ8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gPSBSZWNvcmQ8VCwgU2xvdFJlZmVyZW5jZT5cblxuZXhwb3J0IGNvbnN0IGVudW0gU3R5bGVLaW5kIHtcbiAgQm9vdHN0cmFwQ2xhc3MgPSAnQk9PVFNUUkFQLUNMQVNTJyxcbiAgQnN2bkNsYXNzID0gJ0JTVk4tQ0xBU1MnLFxuICBPdmVycmlkZUNsYXNzID0gJ09WRVJSSURFLUNMQVNTJyxcbiAgVGFnID0gJ1RBRycsXG4gIE5vbmUgPSAnTk9ORScsXG59XG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlU3BlYyB7XG4gIGtpbmQ6IFN0eWxlS2luZFxuICB2YWx1ZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBDb21wb25lbnRTZWN0aW9uID0gJ1Byb3BlcnRpZXMnIHwgJ0V2ZW50cycgfCAnU2xvdHMnXG5leHBvcnQgdHlwZSBDb21wb25lbnRSZWZlcmVuY2UgPSBSZWNvcmQ8XG4gIHN0cmluZyxcbiAge1xuICAgIHN0eWxlU3BlYz86IFN0eWxlU3BlY1xuICAgIC8qKlxuICAgICAqIFVzZSBwYWNrYWdlIGRpcmVjdG9yeSByZWxhdGl2ZSBsaW5rcy4gZXg6IEJBY2NvcmRpb24udnVlID0+IC9CQWNjb3JkaW9uL0JBY2NvcmRpb24udnVlIChzbGFzaCByZXF1aXJlZClcbiAgICAgKlxuICAgICAqIElmIHBhdGggaXMgZW1wdHkgc3RyaW5nLCBpdCBkZWZhdWx0cyB0byB0aGUgcGFja2FnZSBkaXJlY3RvcnkuIElmIG51bGwsIGl0IGRvZXMgbm90IHJlbmRlciB0aGUgYnV0dG9uXG4gICAgICovXG4gICAgc291cmNlUGF0aDogc3RyaW5nIHwgbnVsbFxuICAgIHByb3BzOiBQcm9wUmVjb3JkV2l0aE9wdGlvbnMgfCBQcm9wUmVjb3JkIHwgUHJvcFJlY29yZFdpdGhNdWx0aXBsZVNlY3Rpb25zXG4gICAgZW1pdHM/OiBFbWl0UmVjb3JkXG4gICAgc2xvdHM/OiBTbG90UmVjb3JkXG4gICAgc2VjdGlvbnM/OiBDb21wb25lbnRTZWN0aW9uW11cbiAgfVxuPlxuXG5leHBvcnQgdHlwZSBDb2xsZWN0aXZlTWVtYmVyc1Jlc3BvbnNlID0ge1xuICBNZW1iZXJJZDogbnVtYmVyXG4gIGNyZWF0ZWRBdDogc3RyaW5nXG4gIHR5cGU6IHN0cmluZ1xuICByb2xlOiBzdHJpbmdcbiAgdGllcjogc3RyaW5nXG4gIGlzQWN0aXZlOiBib29sZWFuXG4gIHRvdGFsQW1vdW50RG9uYXRlZDogbnVtYmVyXG4gIGN1cnJlbmN5OiBzdHJpbmdcbiAgbGFzdFRyYW5zYWN0aW9uQXQ6IHN0cmluZ1xuICBsYXN0VHJhbnNhY3Rpb25BbW91bnQ6IG51bWJlclxuICBwcm9maWxlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGNvbXBhbnk6IG51bGwgfCBudWxsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBudWxsXG4gIGltYWdlOiBzdHJpbmcgfCBudWxsXG4gIGVtYWlsOiBudWxsIHwgc3RyaW5nXG4gIHR3aXR0ZXI6IG51bGwgfCBzdHJpbmdcbiAgZ2l0aHViOiBzdHJpbmcgfCBudWxsXG4gIHdlYnNpdGU6IG51bGwgfCBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgQ29sbGVjdGl2ZVBhcnRpYWxSZXNwb25zZSA9IHtcbiAgbWVtYmVyczogQ29sbGVjdGl2ZU1lbWJlcnNSZXNwb25zZVtdXG59XG5cbmV4cG9ydCB0eXBlIFNjcm9sbHNweUl0ZW0gPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VTY3JvbGxzcHk+WydsaXN0J11bJ3ZhbHVlJ11bMF1cbmV4cG9ydCB0eXBlIEhlYWRlckl0ZW0gPSBTY3JvbGxzcHlJdGVtICYge3RhZzogc3RyaW5nOyBsZXZlbDogbnVtYmVyfVxuZXhwb3J0IHR5cGUgQ29udGVudHNJdGVtID0gSGVhZGVySXRlbSAmIHtjaGlsZHJlbjogQ29udGVudHNJdGVtW119XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2xpbmtQcm9wcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvbGlua1Byb3BzLnRzXCI7aW1wb3J0IHR5cGUge0JMaW5rUHJvcHN9IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB0eXBlIHtQcm9wUmVjb3JkLCBQcm9wUmVjb3JkV2l0aE9wdGlvbnN9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgbGlua1RvID0gJy9kb2NzL2NvbXBvbmVudHMvbGluaydcblxuZXhwb3J0IGNvbnN0IGxpbmtQcm9wcyA9IHtcbiAgYWN0aXZlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIGB0cnVlYCwgcGxhY2VzIHRoZSBjb21wb25lbnQgaW4gdGhlIGFjdGl2ZSBzdGF0ZSB3aXRoIGFjdGl2ZSBzdHlsaW5nJyxcbiAgfSxcbiAgYWN0aXZlQ2xhc3M6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAncm91dGVyLWxpbmstYWN0aXZlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0NvbmZpZ3VyZSB0aGUgYWN0aXZlIENTUyBjbGFzcyBhcHBsaWVkIHdoZW4gdGhlIGxpbmsgaXMgYWN0aXZlLicsXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXaGVuIHNldCB0byBgdHJ1ZWAsIGRpc2FibGVzIHRoZSBsaW5rJ3MgZnVuY3Rpb25hbGl0eS4gU2VlIGFib3ZlIGZvciBkZXRhaWxzIGFuZCBsaW1pdGF0aW9uc1wiLFxuICB9LFxuICBleGFjdEFjdGl2ZUNsYXNzOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3JvdXRlci1saW5rLWV4YWN0LWFjdGl2ZScsXG4gICAgZGVzY3JpcHRpb246ICdDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZSB3aXRoIGV4YWN0IG1hdGNoLicsXG4gIH0sXG4gIGhyZWY6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdEZW5vdGVzIHRoZSB0YXJnZXQgVVJMIG9mIHRoZSBsaW5rIGZvciBzdGFuZGFyZCBhIGxpbmtzJyxcbiAgfSxcbiAgaWNvbjoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIGB0cnVlYCwgc3R5bGVzIGFuIGljb24gYXQgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIGxpbmsgdGV4dCcsXG4gIH0sXG4gIG5vUHJlZmV0Y2g6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVG8gaW1wcm92ZSB0aGUgcmVzcG9uc2l2ZW5lc3Mgb2YgeW91ciBOdXh0LmpzIGFwcGxpY2F0aW9ucywgd2hlbiB0aGUgbGluayB3aWxsIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIHZpZXdwb3J0LCBOdXh0LmpzIHdpbGwgYXV0b21hdGljYWxseSBwcmVmZXRjaCB0aGUgY29kZSBzcGxpdHRlZCBwYWdlLiBTZXR0aW5nIGBuby1wcmVmZXRjaGAgd2lsbCBkaXNhYmxlZCB0aGlzIGZlYXR1cmUgZm9yIHRoZSBzcGVjaWZpYyBsaW5rJyxcbiAgICBub3RZZXRJbXBsZW1lbnRlZDogdHJ1ZSxcbiAgfSxcbiAgb3BhY2l0eToge1xuICAgIHR5cGU6IFwiMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGFscGhhIG9wYWNpdHkgb2YgdGhlIGxpbmsgYHJnYmEoKWAgY29sb3IgdmFsdWUnLFxuICB9LFxuICBvcGFjaXR5SG92ZXI6IHtcbiAgICB0eXBlOiBcIjEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBhbHBoYSBvcGFjaXR5IG9mIHRoZSBsaW5rIGByZ2JhKClgIGNvbG9yIHZhbHVlIG9uIGhvdmVyJyxcbiAgfSxcbiAgcHJlZmV0Y2g6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RvIGltcHJvdmUgdGhlIHJlc3BvbnNpdmVuZXNzIG9mIHlvdXIgTnV4dC5qcyBhcHBsaWNhdGlvbnMsIHdoZW4gdGhlIGxpbmsgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSB2aWV3cG9ydCwgTnV4dC5qcyB3aWxsIGF1dG9tYXRpY2FsbHkgcHJlZmV0Y2ggdGhlIGNvZGUgc3BsaXR0ZWQgcGFnZS4gU2V0dGluZyBgcHJlZmV0Y2hgIHRvIGB0cnVlYCBvciBgZmFsc2VgIHdpbGwgb3ZlcndyaXRlIHRoZSBkZWZhdWx0IHZhbHVlIG9mIGByb3V0ZXIucHJlZmV0Y2hMaW5rc2AnLFxuICB9LFxuICBwcmVmZXRjaGVkQ2xhc3M6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdOb3QgWWV0IEltcGxtZW50ZWQ6IEEgY2xhc3MgdG8gYXBwbHkgdG8gbGlua3MgdGhhdCBoYXZlIGJlZW4gcHJlZmV0Y2hlZC4nLFxuICB9LFxuICBwcmVmZXRjaE9uOiB7XG4gICAgdHlwZTogJ1BhcnRpYWw8e3Zpc2liaWxpdHk6IGJvb2xlYW4sIGludGVyYWN0aW9uOiBib29sZWFufT4nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWxsb3dzIGN1c3RvbSBjb250cm9sIG9mIHdoZW4gdG8gcHJlZmV0Y2ggbGlua3MuIFBvc3NpYmxlIG9wdGlvbnMgYXJlICdpbnRlcmFjdGlvbicgYW5kICd2aXNpYmlsaXR5JyAoZGVmYXVsdCkuXCIsXG4gIH0sXG4gIG5vUmVsOiB7fSxcbiAgcmVsOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlICdyZWwnIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgbGlua1wiLFxuICB9LFxuICByZXBsYWNlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1NldHRpbmcgcmVwbGFjZSBwcm9wIHdpbGwgY2FsbCByb3V0ZXIucmVwbGFjZSgpIGluc3RlYWQgb2Ygcm91dGVyLnB1c2goKSB3aGVuIGNsaWNrZWQnLFxuICB9LFxuICByb3V0ZXJDb21wb25lbnROYW1lOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3JvdXRlci1saW5rJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdCb290c3RyYXBWdWUgYXV0byBkZXRlY3RzIGJldHdlZW4gYDxyb3V0ZXItbGluaz5gIGFuZCBgPG51eHQtbGluaz5gLiBTZXQgdGhpcyB0aGlzIHByb3BlcnR5IHRvIGV4cGxpY2l0eSBzZXQgdGhlIG5hbWUgb2YgdGhlIHJvdXRlciBjb21wb25lbnQuJyxcbiAgfSxcbiAgcm91dGVyVGFnOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ2EnLFxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSB0YWcgdHlwZSBmb3IgdGhlIGxpbmsnLFxuICB9LFxuICBzdHJldGNoZWQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldoZW4gc2V0IHRvIGB0cnVlYCwgbWFrZXMgdGhlIGxpbmsncyBgY29udGFpbmluZyBibG9ja2AgY2xpY2thYmxlIHZpYSBhbiBgOjphZnRlcmAgcHNldWRvIGVsZW1lbnRcIixcbiAgfSxcbiAgdGFyZ2V0OiB7XG4gICAgdHlwZTogJ0xpbmtUYXJnZXQnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAndGFyZ2V0JyBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGxpbmtcIixcbiAgfSxcbiAgdG86IHtcbiAgICB0eXBlOiAnUm91dGVMb2NhdGlvblJhdycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Rlbm90ZXMgdGhlIHRhcmdldCByb3V0ZSBvZiB0aGUgbGluay4gV2hlbiBjbGlja2VkLCB0aGUgdmFsdWUgb2YgdGhlIHRvIHByb3Agd2lsbCBiZSBwYXNzZWQgdG8gYHJvdXRlci5wdXNoKClgIGludGVybmFsbHknLFxuICB9LFxuICB1bmRlcmxpbmVPZmZzZXQ6IHtcbiAgICB0eXBlOiBcIjEgfCAyIHwgMyB8ICcxJyB8ICcyJyB8ICczJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NoYW5nZSB0aGUgZGlzdGFuY2Ugb2YgdGhlIHVuZGVybGluZSBmcm9tIHRoZSBib3R0b20gb2YgdGhlIGxpbmsgdGV4dCcsXG4gIH0sXG4gIHVuZGVybGluZU9mZnNldEhvdmVyOiB7XG4gICAgdHlwZTogXCIxIHwgMiB8IDMgfCAnMScgfCAnMicgfCAnMydcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGRpc3RhbmNlIG9mIHRoZSB1bmRlcmxpbmUgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBsaW5rIHRleHQgb24gaG92ZXInLFxuICB9LFxuICB1bmRlcmxpbmVPcGFjaXR5OiB7XG4gICAgdHlwZTogXCIwIHwgMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMCcgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0J3MgdGhlIG9wYWNpdHkgb2YgdGhlIGxpbmsncyB1bmRlcmxpbmVcIixcbiAgfSxcbiAgdW5kZXJsaW5lT3BhY2l0eUhvdmVyOiB7XG4gICAgdHlwZTogXCIwIHwgMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMCcgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0J3MgdGhlIG9wYWNpdHkgb2YgdGhlIGxpbmsncyB1bmRlcmxpbmUgb24gaG92ZXJcIixcbiAgfSxcbiAgdW5kZXJsaW5lVmFyaWFudDoge1xuICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICBkZWZhdWx0OiBudWxsLFxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSBjb2xvciB2YXJpYW50IGZvciB0aGUgbGluayB1bmRlcmxpbmUgaW5kZXBlbmRlbnRseSBvZiB0aGUgbGluayB0ZXh0JyxcbiAgfSxcbiAgdmFyaWFudDoge1xuICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICBkZWZhdWx0OiBudWxsLFxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSBjb2xvciB2YXJpYW50IGZvciB0aGUgbGluaycsXG4gIH0sXG4gIC8vIFRPRE86IHJlbW92ZSB0aGUgaGFyZC1jb2RlZCBOWUkgcHJvcHMgYmVsb3cgd2hlbiB0aGV5IGFyZSBpbXBsZW1lbnRlZFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCTGlua1Byb3BzIHwgJ25vUHJlZmV0Y2gnIHwgJ3ByZWZldGNoJyB8ICdwcmVmZXRjaGVkQ2xhc3MnPlxuXG5leHBvcnQgY29uc3QgbGlua2VkQkxpbmtTZWN0aW9uID0ge1xuICBfb3B0czoge1xuICAgIGxpbmtUbyxcbiAgfSxcbiAgX2RhdGE6IGxpbmtQcm9wcyxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmRXaXRoT3B0aW9uc1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9zaG93SGlkZURhdGEudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL3Nob3dIaWRlRGF0YS50c1wiO2ltcG9ydCB0eXBlIHtzaG93SGlkZX0gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuaW1wb3J0IHR5cGUge0VtaXRSZWNvcmQsIFByb3BSZWNvcmQsIFNsb3RTY29wZVJlZmVyZW5jZX0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBzaG93SGlkZUVtaXRzID0ge1xuICAnaGlkZSc6IHtcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWx3YXlzIGVtaXRzIGp1c3QgYmVmb3JlIHRoZSBjb21wb25lbnQgaGFzIGhpZGRlbi4gQ2FuY2VsYWJsZSAoYXMgbG9uZyBhcyBjb21wb25lbnQgd2Fzbid0IGZvcmNpYmx5IGhpZGRlbilcIixcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYWxsIHZhbHVlLnByZXZlbnREZWZhdWx0KCkgdG8gY2FuY2VsIGhpZGUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAnaGlkZS1wcmV2ZW50ZWQnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRW1pdHRlZCB3aGVuIHRoZSBjb21wb25lbnQgdHJpZWQgdG8gY2xvc2UsIGJ1dCB3YXMgcHJldmVudGVkIGZyb20gY2xvc2luZy4gIFRoaXMgb2NjdXJzIHdoZW4gcHJldmVudERlZmF1bHQoKSBpcyBjYWxsZWQgb24gdGhlIGV2ZW50LCB0aGUgdXNlciBjbGlja3MgZXNjYXBlIGFuZCBuby1jbG9zZS1vbmJhY2tkcm9wIGlzIHNldCB0byB0cnVlLCBvciB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJhY2tkcm9wIGFuZCBuby1jbG9zZS1vbmJhY2tkcm9wIGlzIHNldCB0byB0cnVlLicsXG4gIH0sXG4gICdoaWRkZW4nOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246ICdBbHdheXMgZW1pdHMgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyBoaWRkZW4nLFxuICB9LFxuICAnc2hvdyc6IHtcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYWxsIHZhbHVlLnByZXZlbnREZWZhdWx0KCkgdG8gY2FuY2VsIHNob3cnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiAnQWx3YXlzIGVtaXRzIGp1c3QgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgc2hvd24uIENhbmNlbGFibGUnLFxuICB9LFxuICAnc2hvdy1wcmV2ZW50ZWQnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRW1pdHRlZCB3aGVuIHRoZSBjb21wb25lbnQgdHJpZWQgdG8gb3BlbiwgYnV0IHdhcyBwcmV2ZW50ZWQgZnJvbSBvcGVuaW5nLiBUaGlzIG9jY3VycyB3aGVuIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBldmVudCcsXG4gIH0sXG4gICdzaG93bic6IHtcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjogJ0Fsd2F5cyBlbWl0cyBqdXN0IGFmdGVyIGNvbXBvbmVudCBpcyBzaG93bi4nLFxuICB9LFxuICAndG9nZ2xlJzoge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbHdheXMgZW1pdHMganVzdCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyB0b2dnbGVkIHZpYSB0aGUgZXhwb3NlZCAndG9nZ2xlKCknIGZ1bmN0aW9uIG9yIHVzZVRvZ2dsZSBjb21wb3NhYmxlIC4gQ2FuY2VsYWJsZSAoYXMgbG9uZyBhcyBjb21wb25lbnQgd2Fzbid0IGZvcmNpYmx5IGhpZGRlbilcIixcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYWxsIHZhbHVlLnByZXZlbnREZWZhdWx0KCkgdG8gY2FuY2VsIGhpZGUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAndG9nZ2xlLXByZXZlbnRlZCc6IHtcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdFbWl0dGVkIHdoZW4gdGhlIGNvbXBvbmVudCB0cmllZCB0byB0b2dnbGUsIGJ1dCB3YXMgcHJldmVudGVkIGZyb20gZG9pbmcgc28uICBUaGlzIG9jY3VycyB3aGVuIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBldmVudCwgdGhlIHVzZXIgY2xpY2tzIGVzY2FwZSBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZSwgb3IgdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBiYWNrZHJvcCBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZS4nLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgRW1pdFJlY29yZFxuXG5leHBvcnQgY29uc3Qgc2hvd0hpZGVQcm9wcyA9IHtcbiAgaW5pdGlhbEFuaW1hdGlvbjoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCBlbmFibGVzIHRoZSBpbml0aWFsIGFuaW1hdGlvbiBvbiBtb3VudCcsXG4gIH0sXG4gIGxhenk6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgdGhlIGNvbnRlbnQgd2lsbCBub3QgYmUgbW91bnRlZCB1bnRpbCBvcGVuZWQnLFxuICB9LFxuICBtb2RlbFZhbHVlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29udHJvbHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNvbXBvbmVudCcsXG4gIH0sXG4gIG5vRmFkZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0FsaWFzIGZvciBgbm9BbmltYXRpb25gJyxcbiAgfSxcbiAgbm9BbmltYXRpb246IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZGlzYWJsZXMgdGhlIGFuaW1hdGlvbicsXG4gIH0sXG4gIHNob3c6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldoZW4gc2V0LCBhbmQgcHJvcCAndmlzaWJsZScgaXMgZmFsc2Ugb24gbW91bnQsIHdpbGwgYW5pbWF0ZSBmcm9tIGNsb3NlZCB0byBvcGVuIG9uIGluaXRpYWwgbW91bnQuIE1haW5seSB0byBoZWxwIHdpdGggdGVtcGxhdGUgc2hvdy4gVXNlIG1vZGVsLXZhbHVlIGZvciByZWFjdGl2ZSBzaG93L2hpZGVcIixcbiAgfSxcbiAgdHJhbnNQcm9wczoge1xuICAgIHR5cGU6ICdUcmFuc2l0aW9uUHJvcHMnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ1RyYW5zaXRpb24gcHJvcGVydGllcycsXG4gIH0sXG4gIHVubW91bnRMYXp5OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgYW5kIGBsYXp5YCBpcyB0cnVlLCB0aGUgY29udGVudCB3aWxsIGJlIHVubW91bnRlZCB3aGVuIGNsb3NlZCcsXG4gIH0sXG4gIHZpc2libGU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246IFwiV2hlbiAndHJ1ZScsIG9wZW4gd2l0aG91dCBhbmltYXRpb25cIixcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2Ygc2hvd0hpZGUgfCAnbW9kZWxWYWx1ZSc+XG5cbmV4cG9ydCBjb25zdCBzaG93SGlkZVNsb3RzRGF0YSA9IHtcbiAgaWQ6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXF1ZSBJRCBmb3IgdGhlIGNvbXBvbmVudCcsXG4gIH0sXG4gIHNob3c6IHtcbiAgICB0eXBlOiAnKCkgPT4gdm9pZCcsXG4gICAgZGVzY3JpcHRpb246ICdGdW5jdGlvbiB0byBzaG93IHRoZSBjb21wb25lbnQnLFxuICB9LFxuICBoaWRlOiB7XG4gICAgdHlwZTogJyh0cmlnZ2VyPzogc3RyaW5nLCBub1RyaWdnZXJFbWl0PzogYm9vbGVhbikgPT4gdm9pZCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRnVuY3Rpb24gdG8gaGlkZSB0aGUgY29tcG9uZW50LiBgdHJpZ2dlcmAgaXMgdGhlIHRyaWdnZXIgdGhhdCBjYXVzZWQgdGhlIGhpZGUuIGBub1RyaWdnZXJFbWl0YCBwcmV2ZW50cyB0aGUgZW1pdCBvZiB0aGUgdHJpZ2dlciBldmVudC4nLFxuICB9LFxuICB0b2dnbGU6IHtcbiAgICB0eXBlOiAnKCkgPT4gdm9pZCcsXG4gICAgZGVzY3JpcHRpb246ICdGdW5jdGlvbiB0byB0b2dnbGUgdGhlIGNvbXBvbmVudCB2aXNpYmlsaXR5JyxcbiAgfSxcbiAgYWN0aXZlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlc2NyaXB0aW9uOiAnSW5kaWNhdGVzIGlmIHRoZSBjb21wb25lbnQgaXMgYWN0aXZlIChzdGFydGluZyBzaG93LCBiZWZvcmUvYWZ0ZXIgYW5pbWF0aW9ucyknLFxuICB9LFxuICB2aXNpYmxlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlc2NyaXB0aW9uOiAnSW5kaWNhdGVzIGlmIHRoZSBjb21wb25lbnQgaXMgdmlzaWJsZSAoc2hvd24pJyxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFNsb3RTY29wZVJlZmVyZW5jZVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9jb21tb25Qcm9wcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvY29tbW9uUHJvcHMudHNcIjtpbXBvcnQgdHlwZSB7UHJvcFJlZmVyZW5jZX0gZnJvbSAnLi4vdHlwZXMnXG5cbmNvbnN0IGNvbW1vblByb3BzID0gKCkgPT5cbiAgKHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byBgdHJ1ZWAsIHBsYWNlcyB0aGUgY29tcG9uZW50IGluIHRoZSBhY3RpdmUgc3RhdGUgd2l0aCBhY3RpdmUgc3R5bGluZycsXG4gICAgfSxcbiAgICBhY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogJ2FjdGl2ZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZS4gVHlwaWNhbGx5IHlvdSB3aWxsIHdhbnQgdG8gc2V0IHRoaXMgdG8gY2xhc3MgbmFtZSAnYWN0aXZlJ1wiLFxuICAgIH0sXG4gICAgYWx0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdWYWx1ZSB0byBzZXQgZm9yIHRoZSBgYWx0YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXJpYUNvbnRyb2xzOiB7XG4gICAgICB0eXBlOiAnQXJpYUludmFsaWQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdJZiB0aGlzIGNvbXBvbmVudCBjb250cm9scyBhbm90aGVyIGNvbXBvbmVudCBvciBlbGVtZW50LCBzZXQgdGhpcyB0byB0aGUgSUQgb2YgdGhlIGNvbnRyb2xsZWQgY29tcG9uZW50IG9yIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgYXJpYURlc2NyaWJlZGJ5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYSBkZXNjcmlwdGlvbiBmb3IgdGhpcyBjb21wb25lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYGFyaWEtZGVzY3JpYmVkYnlgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhcmlhSW52YWxpZDoge1xuICAgICAgdHlwZTogJ0FyaWFJbnZhbGlkJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU2V0cyB0aGUgYGFyaWEtaW52YWxpZGAgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSB3cmFwcGVyIGVsZW1lbnQuIFdoZW4gbm90IHByb3ZpZGVkLCB0aGUgYHN0YXRlYCBwcm9wIHdpbGwgY29udHJvbCB0aGUgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGF1dG9DbG9zZToge1xuICAgICAgdHlwZTogXCJib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZSdcIixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRyb2xzIHRoZSBhdXRvbWF0aWMgY2xvc2luZyBvZiB0aGUgY29tcG9uZW50IHdoZW4gY2xpY2tpbmcuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgIH0sXG4gICAgYXV0b2NvbXBsZXRlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAnYXV0b2NvbXBsZXRlJyBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIGZvcm0gY29udHJvbFwiLFxuICAgIH0sXG4gICAgYXJpYUxhYmVsOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdmFsdWUgb2YgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgZWxlbWVudCcsXG4gICAgfSxcbiAgICBhcmlhTGl2ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHRoZSByZW5kZXJlZCBlbGVtZW50IGlzIGFuIGBhcmlhLWxpdmVgIHJlZ2lvbiAoZm9yIHNjcmVlbiByZWFkZXIgdXNlcnMpLCBzZXQgdG8gZWl0aGVyICdwb2xpdGUnIG9yICdhc3NlcnRpdmUnXCIsXG4gICAgfSxcbiAgICBhcmlhTGFiZWxsZWRieToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgbGFiZWwgZm9yIHRoaXMgY29tcG9uZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBhcmlhLWxhYmVsbGVkYnlgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhdXRvZm9jdXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byBgdHJ1ZWAsIGF0dGVtcHRzIHRvIGF1dG8tZm9jdXMgdGhlIGNvbnRyb2wgd2hlbiBpdCBpcyBtb3VudGVkLCBvciByZS1hY3RpdmF0ZWQgd2hlbiBpbiBhIGtlZXAtYWxpdmUuIERvZXMgbm90IHNldCB0aGUgYGF1dG9mb2N1c2AgYXR0cmlidXRlIG9uIHRoZSBjb250cm9sJyxcbiAgICB9LFxuICAgIGJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byBiYWNrZ3JvdW5kIG9mIHRoZSBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgYm9keUJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgYm9keUJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBib3JkZXInLFxuICAgIH0sXG4gICAgYm9keUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9keVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib2R5VGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgdGV4dCcsXG4gICAgfSxcbiAgICBib2R5VmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9yZGVyJyxcbiAgICB9LFxuICAgIGRlYm91bmNlOiB7XG4gICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgIGRlZmF1bHQ6ICcwJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0IHRvIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBncmVhdGVyIHRoYW4gemVybywgd2lsbCBkZWJvdW5jZSB0aGUgdXNlciBpbnB1dC4gSGFzIG5vIGVmZmVjdCBpZiBwcm9wICdsYXp5JyBpcyBzZXRcIixcbiAgICB9LFxuICAgIGRlYm91bmNlTWF4V2FpdDoge1xuICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICBkZWZhdWx0OiAnTmFOJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBtYXhpbXVtIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQnJ3MgaW52b2tlZFwiLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQgdG8gYHRydWVgLCBkaXNhYmxlcyB0aGUgY29tcG9uZW50J3MgZnVuY3Rpb25hbGl0eSBhbmQgcGxhY2VzIGl0IGluIGEgZGlzYWJsZWQgc3RhdGVcIixcbiAgICB9LFxuICAgIGRpc2FibGVkRmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2Rpc2FibGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBkaXNhYmxlZCBzdGF0ZScsXG4gICAgfSxcbiAgICBmbG9hdGluZzoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0LCByZW5kZXJzIGEgc2luZ2xlIGNvbnRyb2wgZm9ybSB3aXRoIGEgZmxvYXRpbmcgbGFiZWwuIFRoaXMgb25seSB3b3JrcyBmb3IgZm9ybXMgd2hlcmUgdGhlIGltbWVkaWF0ZSBjaGlsZHJlbiBhcmUgYSBsYWJlbCBhbmQgb25lIG9mIHRoZSBzdXBwb3J0ZWQgY29udHJvbHMuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgIH0sXG5cbiAgICBmb290ZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgZm9vdGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgYm9yZGVyJyxcbiAgICB9LFxuICAgIGZvb3RlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIHRleHQnLFxuICAgIH0sXG4gICAgZm9vdGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0lEIG9mIHRoZSBmb3JtIHRoYXQgdGhlIGZvcm0gY29udHJvbCBiZWxvbmdzIHRvLiBTZXRzIHRoZSBgZm9ybWAgYXR0cmlidXRlIG9uIHRoZSBjb250cm9sJyxcbiAgICB9LFxuICAgIGZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJyh2YWw6IHN0cmluZywgZXZ0OiBFdmVudCkgPT4gc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdSZWZlcmVuY2UgdG8gYSBmdW5jdGlvbiBmb3IgZm9ybWF0dGluZyB0aGUgaW5wdXQnLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyQmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGhlYWRlckJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIGJvcmRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciB0ZXh0JyxcbiAgICB9LFxuICAgIGhlYWRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVXNlZCB0byBzZXQgdGhlIGBpZGAgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBjb250ZW50LCBhbmQgdXNlZCBhcyB0aGUgYmFzZSB0byBnZW5lcmF0ZSBhbnkgYWRkaXRpb25hbCBlbGVtZW50IElEcyBhcyBuZWVkZWQnLFxuICAgIH0sXG4gICAgbGF6eUZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQsIHRoZSBpbnB1dCBpcyBmb3JtYXR0ZWQgb24gYmx1ciBpbnN0ZWFkIG9mIGVhY2gga2V5c3Ryb2tlIChpZiB0aGVyZSBpcyBhIGZvcm1hdHRlciBzcGVjaWZpZWQpJyxcbiAgICB9LFxuICAgIGxpbmtDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDbGFzcyBvciBjbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBpbm5lciBsaW5rIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIElEIG9mIHRoZSBhc3NvY2lhdGVkIGRhdGFsaXN0IGVsZW1lbnQgb3IgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYG5hbWVgIGF0dHJpYnV0ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIG5vQmFja2Ryb3A6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGJhY2tkcm9wJyxcbiAgICB9LFxuICAgIG5vRWxsaXBzaXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEbyBub3Qgc2hvdyBlbGxpcHNpcyBidXR0b25zJyxcbiAgICB9LFxuICAgIG5vR290b0VuZEJ1dHRvbnM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdIaWRlcyB0aGUgZ28gdG8gZmlyc3QgYW5kIGdvIHRvIGxhc3QgcGFnZSBidXR0b25zJyxcbiAgICB9LFxuICAgIG5vSGVhZGVyOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSAgaGVhZGVyJyxcbiAgICB9LFxuICAgIG5vSGVhZGVyQ2xvc2U6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGhlYWRlciBjbG9zZSBidXR0b24nLFxuICAgIH0sXG4gICAgbm9Ib3ZlclBhdXNlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgdG8gdHJ1ZSwgZGlzYWJsZXMgcGF1c2luZyB0aGUgdGltZXIgb24gaG92ZXIgYmVoYXZpb3InLFxuICAgIH0sXG4gICAgbm9SZXN1bWVPbkhvdmVyTGVhdmU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byB0cnVlLCB0aGUgdGltZXIgd2lsbCBub3QgcmVzdW1lIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgZWxlbWVudC4gSXQgd2lsbCBuZWVkIHRvIGJlIG1hbnVhbGx5IHJlc3VtZWQnLFxuICAgIH0sXG4gICAgbm92YWxpZGF0ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCBkaXNhYmxlcyBicm93c2VyIG5hdGl2ZSBIVE1MNSB2YWxpZGF0aW9uIG9uIGNvbnRyb2xzIGluIHRoZSBmb3JtJyxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6ICdyZWFkb25seSBDaGVja2JveE9wdGlvblJhd1tdJyxcbiAgICAgIGRlZmF1bHQ6ICcoKSA9PiBbXScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FycmF5IG9mIGl0ZW1zIHRvIHJlbmRlciBpbiB0aGUgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIHBsYWluOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVyIHRoZSBmb3JtIGNvbnRyb2wgaW4gcGxhaW4gbW9kZSwgcmF0aGVyIHRoYW4gY3VzdG9tIHN0eWxlZCBtb2RlJyxcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IFwiJydcIixcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICBwbGFpbnRleHQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NldCB0aGUgZm9ybSBjb250cm9sIGFzIHJlYWRvbmx5IGFuZCByZW5kZXJzIHRoZSBjb250cm9sIHRvIGxvb2sgbGlrZSBwbGFpbiB0ZXh0IChubyBib3JkZXJzKScsXG4gICAgfSxcbiAgICByZXF1aXJlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBZGRzIHRoZSBgcmVxdWlyZWRgIGF0dHJpYnV0ZSB0byB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBgcmVhZG9ubHlgIGF0dHJpYnV0ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBBUklBIGF0dHJpYnV0ZSBgcm9sZWAgdG8gYSBzcGVjaWZpYyB2YWx1ZScsXG4gICAgfSxcbiAgICByb3VuZGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuLiBUaGUgYHNxdWFyZWAgcHJvcCB0YWtlcyBwcmVjZWRlbmNlLiBSZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlscycsXG4gICAgfSxcbiAgICByb3VuZGVkQm90dG9tOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBib3R0b21gIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZEVuZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgZW5kYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRTdGFydDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgc3RhcnRgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZFRvcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgdG9wYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6ICdTaXplJyxcbiAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXQgdGhlIHNpemUgb2YgdGhlIGNvbXBvbmVudCdzIGFwcGVhcmFuY2UuICdzbScsICdtZCcgKGRlZmF1bHQpLCBvciAnbGcnXCIsXG4gICAgfSxcbiAgICBzcmM6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdVUkwgdG8gc2V0IGZvciB0aGUgYHNyY2AgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIHN0YXRlOiB7XG4gICAgICB0eXBlOiAnVmFsaWRhdGlvblN0YXRlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQ29udHJvbHMgdGhlIHZhbGlkYXRpb24gc3RhdGUgYXBwZWFyYW5jZSBvZiB0aGUgY29tcG9uZW50LiBgdHJ1ZWAgZm9yIHZhbGlkLCBgZmFsc2VgIGZvciBpbnZhbGlkLCBvciBgbnVsbGAgZm9yIG5vIHZhbGlkYXRpb24gc3RhdGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIHN1YnRpdGxlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdoNicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHN1YnRpdGxlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiAnYm9keS1zZWNvbmRhcnknLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBzdWJ0aXRsZSB0ZXh0JyxcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnJyxcbiAgICB9LFxuICAgIHRleHRGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdGV4dCBsYWJlbCcsXG4gICAgfSxcbiAgICB0ZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIHRleHQnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRpdGxlQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdGl0bGVUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2g0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlcnMgdGhlIGZlZWRiYWNrIHRleHQgaW4gYSBydWRpbWVudGFyeSB0b29sdGlwIHN0eWxlJyxcbiAgICB9LFxuICAgIHZhbGlkYXRlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCwgYWRkcyB0aGUgQm9vdHN0cmFwIGNsYXNzICd3YXMtdmFsaWRhdGVkJyBvbiB0aGUgZm9ybSwgdHJpZ2dlcmluZyB0aGUgbmF0aXZlIGJyb3dzZXIgdmFsaWRhdGlvbiBzdGF0ZXNcIixcbiAgICB9LFxuICAgIHZhbHVlRmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSB2YWx1ZScsXG4gICAgfSxcbiAgICB2YXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBjb21wb25lbnQuIFdoZW4gaW1wbGVtZW50ZWQgYGJnLXZhcmlhbnRgIGFuZCBgdGV4dC12YXJpYW50YCB3aWxsIHRha2UgcHJlY2VkZW5jZScsXG4gICAgfSxcbiAgICB3cmFwcGVyQXR0cnM6IHtcbiAgICAgIHR5cGU6ICdSZWFkb25seTxBdHRyc1ZhbHVlPicsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0F0dHJpYnV0ZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgd3JhcHBlciBlbGVtZW50JyxcbiAgICB9LFxuICAgIHdyYXBwZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFkZCB0byB0aGUgd3JhcHBlciBlbGVtZW50JyxcbiAgICB9LFxuICAgIHBsYWNlbWVudDoge1xuICAgICAgdHlwZTogJ1BsYWNlbWVudCcsXG4gICAgICBkZWZhdWx0OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGxhY2VtZW50IG9mIGEgZmxvYXRpbmcgZWxlbWVudCcsXG4gICAgfSxcbiAgfSkgYXMgY29uc3RcblxuY29uc3Qgc2luZ2xldG9uUHJvcHMgPSBPYmplY3QuZnJlZXplKGNvbW1vblByb3BzKCkpXG5cbmV4cG9ydCBjb25zdCBidWlsZENvbW1vblByb3BzID0gKFxuICBvYmo/OiBQYXJ0aWFsPFJlY29yZDxrZXlvZiB0eXBlb2Ygc2luZ2xldG9uUHJvcHMsIFBhcnRpYWw8UHJvcFJlZmVyZW5jZT4+PlxuKTogUmVhZG9ubHk8dHlwZW9mIHNpbmdsZXRvblByb3BzPiA9PiB7XG4gIGlmICghb2JqKSByZXR1cm4gc2luZ2xldG9uUHJvcHNcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBjb25zdCBteU9iamVjdCA9IGNvbW1vblByb3BzKCkgYXMgUmVjb3JkPHN0cmluZywgYW55PlxuXG4gIC8vIE1lcmdlIHRoZSBwcm92aWRlZCBvYmplY3QgaW50byB0aGUgY29tbW9uIHByb3BzXG4gIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgbXlPYmplY3Rba2V5XSA9IHtcbiAgICAgIC4uLm15T2JqZWN0W2tleV0sXG4gICAgICAuLi52YWx1ZSxcbiAgICB9XG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobXlPYmplY3QgYXMgYW55KVxufVxuXG5leHBvcnQgY29uc3QgY29tbW9uRW1pdHMgPSB7XG4gIGNhbmNlbDoge30sXG4gIG9rOiB7fSxcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL29iamVjdFV0aWxzLnRzXCI7ZXhwb3J0IGNvbnN0IHBpY2sgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IFBpY2s8QSwgQltudW1iZXJdPiA9PlxuICBbLi4ua2V5c1RvUGx1Y2tdLnJlZHVjZShcbiAgICAobWVtbywgcHJvcCkgPT4ge1xuICAgICAgbWVtb1twcm9wXSA9IG9ialRvUGx1Y2tbcHJvcF1cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSxcbiAgICB7fSBhcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+XG4gICkgYXMgUGljazxBLCBCW251bWJlcl0+XG5cbmV4cG9ydCBjb25zdCBvbWl0ID0gPFxuICBBIGV4dGVuZHMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPixcbiAgY29uc3QgQiBleHRlbmRzIFJlYWRvbmx5QXJyYXk8UHJvcGVydHlLZXk+LFxuPihcbiAgb2JqVG9QbHVjazogUmVhZG9ubHk8QT4sXG4gIGtleXNUb1BsdWNrOiBSZWFkb25seTxCPiB8IHJlYWRvbmx5IChrZXlvZiBBKVtdXG4pOiBPbWl0PEEsIEJbbnVtYmVyXT4gPT5cbiAgT2JqZWN0LmtleXMob2JqVG9QbHVjaylcbiAgICAuZmlsdGVyKChrZXkpID0+ICFrZXlzVG9QbHVjay5tYXAoKGVsKSA9PiBlbC50b1N0cmluZygpKS5pbmNsdWRlcyhrZXkpKVxuICAgIC5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiAoey4uLnJlc3VsdCwgW2tleV06IG9ialRvUGx1Y2tba2V5XX0pLCB7fSBhcyBPbWl0PEEsIEJbbnVtYmVyXT4pXG5cbi8vIENvbnZlcnRzIFBhc2NhbENhc2Ugb3IgY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcbmV4cG9ydCBjb25zdCBrZWJhYkNhc2UgPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC9cXEIoW0EtWl0pL2csICctJDEnKS50b0xvd2VyQ2FzZSgpXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHMvYWxlcnQuZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2FsZXJ0LmRhdGEudHNcIjtpbXBvcnQgdHlwZSB7QkFsZXJ0RW1pdHMsIEJBbGVydFByb3BzLCBCQWxlcnRTbG90c30gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuaW1wb3J0IHtcbiAgdHlwZSBDb21wb25lbnRSZWZlcmVuY2UsXG4gIGRlZmF1bHRQcm9wU2VjdGlvblN5bWJvbCxcbiAgdHlwZSBFbWl0UmVjb3JkLFxuICB0eXBlIFByb3BSZWNvcmQsXG4gIHR5cGUgU2xvdFJlY29yZCxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQge2xpbmtlZEJMaW5rU2VjdGlvbiwgdHlwZSBsaW5rUHJvcHN9IGZyb20gJy4uLy4uL3V0aWxzL2xpbmtQcm9wcydcbmltcG9ydCB7c2hvd0hpZGVFbWl0cywgc2hvd0hpZGVQcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvc2hvd0hpZGVEYXRhJ1xuaW1wb3J0IHtidWlsZENvbW1vblByb3BzfSBmcm9tICcuLi8uLi91dGlscy9jb21tb25Qcm9wcydcbmltcG9ydCB7b21pdCwgcGlja30gZnJvbSAnLi4vLi4vdXRpbHMvb2JqZWN0VXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZDogKCk6IENvbXBvbmVudFJlZmVyZW5jZSA9PiAoe1xuICAgIEJBbGVydDoge1xuICAgICAgc291cmNlUGF0aDogJy9CQWxlcnQvQkFsZXJ0LnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICBbZGVmYXVsdFByb3BTZWN0aW9uU3ltYm9sXToge1xuICAgICAgICAgIC4uLm9taXQoc2hvd0hpZGVQcm9wcywgWydtb2RlbFZhbHVlJ10pLFxuICAgICAgICAgIC4uLnBpY2soYnVpbGRDb21tb25Qcm9wcygpLCBbJ3ZhcmlhbnQnLCAnbm9Ib3ZlclBhdXNlJywgJ25vUmVzdW1lT25Ib3ZlckxlYXZlJ10pLFxuICAgICAgICAgIGFsZXJ0Q2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhZGQgdG8gdGhlIGFsZXJ0IHdyYXBwZXIgZWxlbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiZ1ZhcmlhbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICAvLyBkZXNjcmlwdGlvbjogJ0JhY2tncm91bmQgY29sb3IgdmFyaWFudCBmb3IgdGhlIGFsZXJ0JyAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb25cbiAgICAgICAgICB9LCAvLyBUT0RPIHByb3AgaW5jb25zaXN0ZW5jeSBDb2xvclZhcmlhbnQgfCBudWxsIChtYXRjaGVzIENvbG9yRXh0ZW5kYWJsZXMsIG5vdCBkaXJlY3RseSBpbiBCQWxlcnRQcm9wcywgYnV0IHZhbGlkIHZpYSBpbmhlcml0YW5jZSlcbiAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHRleHQgY29udGVudCBvZiB0aGUgYm9keScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5Q2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhZGQgdG8gdGhlIGFsZXJ0IGJvZHkgZWxlbWVudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbG9zZUNsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9yIG1vcmUgY3VzdG9tIGNsYXNzZXMgdG8gdGhlIGNsb3NlIGJ1dHRvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbG9zZUNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSB0ZXh0IG9mIHRoZSBjbG9zZSBidXR0b24uIFRoZSBgY2xvc2VgIHNsb3QgdGFrZXMgcHJlY2VkZW5jZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbG9zZUxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdDbG9zZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGFyaWEtbGFiZWwgYXR0cmlidXRlIG9uIHRoZSBjbG9zZSBidXR0b24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xvc2VWYXJpYW50OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nIHwgbnVsbCcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb2xvciB2YXJpYW50IGZvciB0aGUgY2xvc2UgYnV0dG9uJywgLy8gVE9ETyBwcm9wIGluY29uc2lzdGVuY3kgc3RyaW5nIHwgbnVsbCAoQkFsZXJ0UHJvcHMgZXhwZWN0cyBCdXR0b25WYXJpYW50IHwgbnVsbClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpc21pc3NpYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGVuYWJsZXMgdGhlIGNsb3NlIGJ1dHRvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXJDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFkZCB0byB0aGUgYWxlcnQgaGVhZGVyIGVsZW1lbnQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGVhZGVyVGFnOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBmb290ZXInLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCByZWZlciB0byBcImhlYWRlclwiIGluc3RlYWQgb2YgXCJmb290ZXJcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAnVXNlZCB0byBzZXQgdGhlIGBpZGAgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBjb250ZW50LCBhbmQgdXNlZCBhcyB0aGUgYmFzZSB0byBnZW5lcmF0ZSBhbnkgYWRkaXRpb25hbCBlbGVtZW50IElEcyBhcyBuZWVkZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW50ZXJ2YWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXIgfCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUnLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHMgdG8gdXBkYXRlIHRoZSBjb3VudGRvd24gdGltZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdGF0dXM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiV2hlbiBzZXQgdG8gJ3RydWUnLCBtYWtlcyB0aGUgYWxlcnQgaGF2ZSBhdHRyaWJ1dGVzIGFyaWEtbGl2ZT1wb2xpdGUgYW5kIHJvbGU9c3RhdHVzLiBXaGVuICdmYWxzZScgYXJpYS1saXZlIHdpbGwgYmUgJ2Fzc2VydGl2ZScgYW5kIHJvbGUgd2lsbCBiZSAnYWxlcnQnXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbFZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbiB8IG51bWJlcicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAnQ29udHJvbHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGFsZXJ0LiBBIGBib29sZWFuYCB2YWx1ZSBkaXJlY3RseSBjb250cm9scyB0aGUgdmlzaWJpbGl0eS4gQSBudW1iZXIgc3RhcnRzIHRoZSBjb3VudGRvd24gdGltZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvZ3Jlc3NQcm9wczoge1xuICAgICAgICAgICAgdHlwZTogXCJPbWl0PEJQcm9ncmVzc0JhclByb3BzLCAnbGFiZWwnIHwgJ21heCcgfCAndmFsdWUnPlwiLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICdUaGUgcHJvcGVydGllcyB0byBkZWZpbmUgdGhlIHByb2dyZXNzIGJhciBpbiB0aGUgYWxlcnQuIE5vIHByb2dyZXNzIHdpbGwgYmUgc2hvd24gaWYgbGVmdCB1bmRlZmluZWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvd09uUGF1c2U6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgJ1NldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byBgZmFsc2VgIHdpbGwgb3ZlcnJpZGUgdGhlIGJlaGF2aW9yIG9mIHNob3dpbmcgdGhlIEFsZXJ0IHdoZW4gdGhlIHRpbWVyIGlzIHBhdXNlZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0VmFyaWFudDoge1xuICAgICAgICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICAvLyBkZXNjcmlwdGlvbjogJ1RleHQgY29sb3IgdmFyaWFudCBmb3IgdGhlIGFsZXJ0JyAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb25cbiAgICAgICAgICB9LCAvLyBUT0RPIHByb3AgaW5jb25zaXN0ZW5jeSBUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCAobWF0Y2hlcyBDb2xvckV4dGVuZGFibGVzLCBub3QgZGlyZWN0bHkgaW4gQkFsZXJ0UHJvcHMsIGJ1dCB2YWxpZCB2aWEgaW5oZXJpdGFuY2UpXG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGFsZXJ0J3MgdGl0bGUgdGV4dFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0gc2F0aXNmaWVzIFByb3BSZWNvcmQ8RXhjbHVkZTxrZXlvZiBCQWxlcnRQcm9wcywga2V5b2YgdHlwZW9mIGxpbmtQcm9wcz4+LFxuICAgICAgICAnQkxpbmsgcHJvcHMnOiBsaW5rZWRCTGlua1NlY3Rpb24sXG4gICAgICB9LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBwbGFjZSBpbiB0aGUgQWxlcnQnLFxuICAgICAgICB9LFxuICAgICAgICBjbG9zZToge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBwbGFjZSBpbiB0aGUgY2xvc2UgYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgc2NvcGU6IHt9LCAvLyBUT0RPXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJBbGVydFNsb3RzPixcbiAgICAgIGVtaXRzOiB7XG4gICAgICAgIC4uLnNob3dIaWRlRW1pdHMsXG4gICAgICAgICdjbG9zZSc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VtaXR0ZWQgd2hlbiB0aGUgYWxlcnQgYmVnaW5zIGl0cyB0cmFuc2l0aW9uIHRvIGNsb3NlJyxcbiAgICAgICAgfSxcbiAgICAgICAgJ2Nsb3NlLWNvdW50ZG93bic6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGFsZXJ0JywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChkZXNjcmlwdGlvbiBpcyB2YWd1ZSBhbmQgcG9zc2libHkgaW5jb3JyZWN0OyBzaG91bGQgZGVzY3JpYmUgdGhlIGNvdW50ZG93biBldmVudClcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICBjbG9zZUNvdW50ZG93bjoge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RpbWUgcmVtYWluaW5nIG9uIHRoZSB0aW1lcicsXG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAndXBkYXRlOm1vZGVsLXZhbHVlJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3RhbmRhcmQgZXZlbnQgdG8gdXBkYXRlIHRoZSB2LW1vZGVsJywgLy8gVE9ETyBzaW1pbGFyIGNvbnRlbnQgdG8gQkFjY29yZGlvbi91cGRhdGU6bW9kZWwtdmFsdWUgKHNpbWlsYXIgZGVzY3JpcHRpb24gcGhyYXNpbmcpXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgJ3VwZGF0ZTptb2RlbC12YWx1ZSc6IHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtb2RlbFZhbHVlJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnY2FuY2VsJzoge1xuICAgICAgICAgIGFyZ3M6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICAnb2snOiB7XG4gICAgICAgICAgYXJnczogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBFbWl0UmVjb3JkPGtleW9mIEJBbGVydEVtaXRzIHwgJ3VwZGF0ZTptb2RlbC12YWx1ZSc+LFxuICAgIH0sXG4gIH0pLFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQXNCTyxJQUFNLDJCQUEyQjs7O0FDbkJqQyxJQUFNLFNBQVM7QUFFZixJQUFNLFlBQVk7QUFBQSxFQUN2QixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxrQkFBa0I7QUFBQSxJQUNoQixNQUFNO0FBQUEsSUFDTixT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QSxhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxlQUFlO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFD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
