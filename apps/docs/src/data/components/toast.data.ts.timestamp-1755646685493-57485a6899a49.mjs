// src/types/index.ts
var defaultPropSectionSymbol = '_defaultPropSection'

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

// src/data/components/toast.data.ts
var toast_data_default = {
  load: () => ({
    BToast: {
      sourcePath: '/BToast/BToast.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ...omit(showHideProps, ['modelValue']),
          ...pick(buildCommonProps(), ['variant', 'noHoverPause', 'noResumeOnHoverLeave']),
          bgVariant: {
            type: 'ColorVariant | null',
            default: null,
            // TODO item not in string format
            description: 'Sets the background color variant for the toast.',
          },
          body: {
            type: 'string',
            default: void 0,
            description: 'Sets the text content of the toast body.',
          },
          bodyClass: {
            type: 'ClassValue',
            default: void 0,
            description: 'Sets the CSS class(es) for the toast body element.',
          },
          closeClass: {
            type: 'ClassValue',
            default: void 0,
            description: 'Sets the CSS class(es) for the close button.',
          },
          closeContent: {
            type: 'string',
            default: void 0,
            description: 'Sets the text for the close button. The `close` slot takes precedence.',
          },
          closeLabel: {
            type: 'string',
            default: 'Close',
            description: 'Sets the `aria-label` attribute for the close button.',
          },
          closeVariant: {
            type: 'string | null',
            default: null,
            // TODO item not in string format
            description: 'Sets the color variant for the close button.',
          },
          headerClass: {
            type: 'ClassValue',
            default: void 0,
            description: 'Sets the CSS class(es) for the toast header element.',
          },
          headerTag: {
            type: 'string',
            default: 'div',
            description: 'Specifies the HTML tag for the toast header, replacing the default tag.',
          },
          id: {
            type: 'string',
            default: void 0,
            description:
              'Sets the `id` attribute for the toast and generates additional element IDs as needed.',
          },
          interval: {
            type: 'number | requestAnimationFrame',
            default: 'requestAnimationFrame',
            // TODO item not in string format
            description: 'Sets the interval for refreshing the countdown timer.',
          },
          isStatus: {
            type: 'boolean',
            default: false,
            // TODO item not in string format
            description:
              'Sets `aria-live="polite"` and `role="status"` when `true`; otherwise, `aria-live="assertive"` and `role="alert"`.',
          },
          modelValue: {
            type: 'boolean | number',
            default: false,
            // TODO item not in string format
            description:
              'Controls toast visibility (`boolean`) or sets the auto-dismiss duration in milliseconds (`number`).',
          },
          noCloseButton: {
            type: 'boolean',
            default: false,
            // TODO item not in string format
            description: 'Hides the close button in the toast header.',
          },
          noProgress: {
            type: 'boolean',
            default: false,
            // TODO item not in string format
            description: 'Hides the progress bar in the toast.',
          },
          progressProps: {
            type: "Omit<BProgressBarProps, 'label' | 'max' | 'value'>",
            default: void 0,
            description:
              'Configures the progress bar in the toast. No progress bar is shown if undefined.',
          },
          showOnPause: {
            type: 'boolean',
            default: true,
            // TODO item not in string format
            description: 'Keeps the toast visible when paused.',
          },
          solid: {
            type: 'boolean',
            default: false,
            // TODO item not in string format
            description: 'Renders the toast with a solid background instead of a translucent one.',
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
            // TODO item not in string format
            description: 'Sets the text color variant for the toast.',
          },
          title: {
            type: 'string',
            default: void 0,
            description: 'Sets the title text for the toast.',
          },
          toastClass: {
            type: 'ClassValue',
            default: void 0,
            description: 'Sets the CSS class(es) for the toast wrapper element.',
          },
        },
        'BLink props': linkedBLinkSection,
      },
      emits: {
        ...showHideEmits,
        'update:model-value': {
          description: 'Emitted when the toast visibility changes.',
          // TODO similar content to BAlert/update:model-value (similar purpose)
          args: {
            value: {
              type: 'Boolean',
              description: 'The new visibility state of the toast.',
            },
          },
        },
        'close': {
          description: 'Emitted when the close button is clicked.',
          // TODO missing description in original
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '',
              // TODO missing description
            },
          },
        },
        'close-countdown': {
          description: 'Emitted during the countdown to auto-dismiss.',
          // TODO missing description in original
          args: {
            value: {
              type: 'number',
              description: '',
              // TODO missing description
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
      slots: {},
    },
    BToastOrchestrator: {
      sourcePath: '/BToast/BToastOrchestrator.vue',
      props: {
        teleportTo: {
          type: 'string | RendererElement | null | undefined',
          default: 'body',
          description: 'Overrides the default teleport location for toasts.',
        },
        teleportDisabled: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Renders the toaster in its defined location, disabling teleporting.',
        },
        appendToast: {
          type: '',
          // TODO missing type
          default: void 0,
          description: '',
          // TODO missing description
        },
      },
      emits: {},
      slots: {},
    },
  }),
}
export {toast_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3R5cGVzL2luZGV4LnRzIiwgInNyYy91dGlscy9vYmplY3RVdGlscy50cyIsICJzcmMvdXRpbHMvY29tbW9uUHJvcHMudHMiLCAic3JjL3V0aWxzL2xpbmtQcm9wcy50cyIsICJzcmMvdXRpbHMvc2hvd0hpZGVEYXRhLnRzIiwgInNyYy9kYXRhL2NvbXBvbmVudHMvdG9hc3QuZGF0YS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy90eXBlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3R5cGVzL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy90eXBlcy9pbmRleC50c1wiO2ltcG9ydCB0eXBlIHt1c2VTY3JvbGxzcHl9IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50SXRlbSA9IEV4Y2x1ZGU8a2V5b2YgQ29tcG9uZW50UmVmZXJlbmNlLCAnY29tcG9uZW50JyB8ICdzZWN0aW9ucyc+XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcFJlZmVyZW5jZSB7XG4gIHR5cGU/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZGVmYXVsdD86IHVua25vd25cbiAgbm90WWV0SW1wbGVtZW50ZWQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByb3BSZWNvcmRXaXRoT3B0aW9ucyA9IHtcbiAgX2RhdGE6IFByb3BSZWNvcmQgLy8gQWxsb3dzIGZvciBhIHNpbmdsZSBzZWN0aW9uIG9yIG11bHRpcGxlIHNlY3Rpb25zXG4gIF9vcHRzPzoge2xpbmtUbz86IHN0cmluZ31cbn1cbi8vIEZsYXQgdmFyaWFudFxuZXhwb3J0IHR5cGUgUHJvcFJlY29yZDxUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiA9IFJlY29yZDxULCBQcm9wUmVmZXJlbmNlPlxuLy8gTXVsdGlwbGUgc2VjdGlvbnMgdmFyaWFudFxuZXhwb3J0IHR5cGUgUHJvcFJlY29yZFdpdGhNdWx0aXBsZVNlY3Rpb25zID0ge1xuICBbZGVmYXVsdFByb3BTZWN0aW9uU3ltYm9sXTogUHJvcFJlY29yZCB8IFByb3BSZWNvcmRXaXRoT3B0aW9uc1xufSAmIHtba2V5OiBzdHJpbmddOiBQcm9wUmVjb3JkIHwgUHJvcFJlY29yZFdpdGhPcHRpb25zfVxuLy8gT3B0aW9ucyB2YXJpYW50XG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3BTZWN0aW9uU3ltYm9sID0gJ19kZWZhdWx0UHJvcFNlY3Rpb24nXG5cbmV4cG9ydCB0eXBlIEVtaXRBcmdSZWZlcmVuY2UgPSBSZWNvcmQ8c3RyaW5nLCB7dHlwZTogc3RyaW5nOyBkZXNjcmlwdGlvbj86IHN0cmluZ30+XG5leHBvcnQgdHlwZSBFbWl0UmVmZXJlbmNlID0ge1xuICBhcmdzPzogRW1pdEFyZ1JlZmVyZW5jZVxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xufVxuZXhwb3J0IHR5cGUgRW1pdFJlY29yZDxUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiA9IFJlY29yZDxULCBFbWl0UmVmZXJlbmNlPlxuXG5leHBvcnQgdHlwZSBTbG90U2NvcGVSZWZlcmVuY2UgPSBSZWNvcmQ8XG4gIHN0cmluZyxcbiAge1xuICAgIHR5cGU6IHN0cmluZyB8IHN0cmluZ1tdXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBub3RZZXRJbXBsZW1lbnRlZD86IGJvb2xlYW5cbiAgfVxuPlxuZXhwb3J0IHR5cGUgU2xvdFJlZmVyZW5jZSA9IHtcbiAgc2NvcGU/OiBTbG90U2NvcGVSZWZlcmVuY2VcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn1cbmV4cG9ydCB0eXBlIFNsb3RSZWNvcmQ8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gPSBSZWNvcmQ8VCwgU2xvdFJlZmVyZW5jZT5cblxuZXhwb3J0IGNvbnN0IGVudW0gU3R5bGVLaW5kIHtcbiAgQm9vdHN0cmFwQ2xhc3MgPSAnQk9PVFNUUkFQLUNMQVNTJyxcbiAgQnN2bkNsYXNzID0gJ0JTVk4tQ0xBU1MnLFxuICBPdmVycmlkZUNsYXNzID0gJ09WRVJSSURFLUNMQVNTJyxcbiAgVGFnID0gJ1RBRycsXG4gIE5vbmUgPSAnTk9ORScsXG59XG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlU3BlYyB7XG4gIGtpbmQ6IFN0eWxlS2luZFxuICB2YWx1ZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBDb21wb25lbnRTZWN0aW9uID0gJ1Byb3BlcnRpZXMnIHwgJ0V2ZW50cycgfCAnU2xvdHMnXG5leHBvcnQgdHlwZSBDb21wb25lbnRSZWZlcmVuY2UgPSBSZWNvcmQ8XG4gIHN0cmluZyxcbiAge1xuICAgIHN0eWxlU3BlYz86IFN0eWxlU3BlY1xuICAgIC8qKlxuICAgICAqIFVzZSBwYWNrYWdlIGRpcmVjdG9yeSByZWxhdGl2ZSBsaW5rcy4gZXg6IEJBY2NvcmRpb24udnVlID0+IC9CQWNjb3JkaW9uL0JBY2NvcmRpb24udnVlIChzbGFzaCByZXF1aXJlZClcbiAgICAgKlxuICAgICAqIElmIHBhdGggaXMgZW1wdHkgc3RyaW5nLCBpdCBkZWZhdWx0cyB0byB0aGUgcGFja2FnZSBkaXJlY3RvcnkuIElmIG51bGwsIGl0IGRvZXMgbm90IHJlbmRlciB0aGUgYnV0dG9uXG4gICAgICovXG4gICAgc291cmNlUGF0aDogc3RyaW5nIHwgbnVsbFxuICAgIHByb3BzOiBQcm9wUmVjb3JkV2l0aE9wdGlvbnMgfCBQcm9wUmVjb3JkIHwgUHJvcFJlY29yZFdpdGhNdWx0aXBsZVNlY3Rpb25zXG4gICAgZW1pdHM/OiBFbWl0UmVjb3JkXG4gICAgc2xvdHM/OiBTbG90UmVjb3JkXG4gICAgc2VjdGlvbnM/OiBDb21wb25lbnRTZWN0aW9uW11cbiAgfVxuPlxuXG5leHBvcnQgdHlwZSBDb2xsZWN0aXZlTWVtYmVyc1Jlc3BvbnNlID0ge1xuICBNZW1iZXJJZDogbnVtYmVyXG4gIGNyZWF0ZWRBdDogc3RyaW5nXG4gIHR5cGU6IHN0cmluZ1xuICByb2xlOiBzdHJpbmdcbiAgdGllcjogc3RyaW5nXG4gIGlzQWN0aXZlOiBib29sZWFuXG4gIHRvdGFsQW1vdW50RG9uYXRlZDogbnVtYmVyXG4gIGN1cnJlbmN5OiBzdHJpbmdcbiAgbGFzdFRyYW5zYWN0aW9uQXQ6IHN0cmluZ1xuICBsYXN0VHJhbnNhY3Rpb25BbW91bnQ6IG51bWJlclxuICBwcm9maWxlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGNvbXBhbnk6IG51bGwgfCBudWxsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBudWxsXG4gIGltYWdlOiBzdHJpbmcgfCBudWxsXG4gIGVtYWlsOiBudWxsIHwgc3RyaW5nXG4gIHR3aXR0ZXI6IG51bGwgfCBzdHJpbmdcbiAgZ2l0aHViOiBzdHJpbmcgfCBudWxsXG4gIHdlYnNpdGU6IG51bGwgfCBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgQ29sbGVjdGl2ZVBhcnRpYWxSZXNwb25zZSA9IHtcbiAgbWVtYmVyczogQ29sbGVjdGl2ZU1lbWJlcnNSZXNwb25zZVtdXG59XG5cbmV4cG9ydCB0eXBlIFNjcm9sbHNweUl0ZW0gPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VTY3JvbGxzcHk+WydsaXN0J11bJ3ZhbHVlJ11bMF1cbmV4cG9ydCB0eXBlIEhlYWRlckl0ZW0gPSBTY3JvbGxzcHlJdGVtICYge3RhZzogc3RyaW5nOyBsZXZlbDogbnVtYmVyfVxuZXhwb3J0IHR5cGUgQ29udGVudHNJdGVtID0gSGVhZGVySXRlbSAmIHtjaGlsZHJlbjogQ29udGVudHNJdGVtW119XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL29iamVjdFV0aWxzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9vYmplY3RVdGlscy50c1wiO2V4cG9ydCBjb25zdCBwaWNrID0gPFxuICBBIGV4dGVuZHMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPixcbiAgY29uc3QgQiBleHRlbmRzIFJlYWRvbmx5QXJyYXk8UHJvcGVydHlLZXk+LFxuPihcbiAgb2JqVG9QbHVjazogUmVhZG9ubHk8QT4sXG4gIGtleXNUb1BsdWNrOiBSZWFkb25seTxCPiB8IHJlYWRvbmx5IChrZXlvZiBBKVtdXG4pOiBQaWNrPEEsIEJbbnVtYmVyXT4gPT5cbiAgWy4uLmtleXNUb1BsdWNrXS5yZWR1Y2UoXG4gICAgKG1lbW8sIHByb3ApID0+IHtcbiAgICAgIG1lbW9bcHJvcF0gPSBvYmpUb1BsdWNrW3Byb3BdXG4gICAgICByZXR1cm4gbWVtb1xuICAgIH0sXG4gICAge30gYXMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPlxuICApIGFzIFBpY2s8QSwgQltudW1iZXJdPlxuXG5leHBvcnQgY29uc3Qgb21pdCA9IDxcbiAgQSBleHRlbmRzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj4sXG4gIGNvbnN0IEIgZXh0ZW5kcyBSZWFkb25seUFycmF5PFByb3BlcnR5S2V5Pixcbj4oXG4gIG9ialRvUGx1Y2s6IFJlYWRvbmx5PEE+LFxuICBrZXlzVG9QbHVjazogUmVhZG9ubHk8Qj4gfCByZWFkb25seSAoa2V5b2YgQSlbXVxuKTogT21pdDxBLCBCW251bWJlcl0+ID0+XG4gIE9iamVjdC5rZXlzKG9ialRvUGx1Y2spXG4gICAgLmZpbHRlcigoa2V5KSA9PiAha2V5c1RvUGx1Y2subWFwKChlbCkgPT4gZWwudG9TdHJpbmcoKSkuaW5jbHVkZXMoa2V5KSlcbiAgICAucmVkdWNlKChyZXN1bHQsIGtleSkgPT4gKHsuLi5yZXN1bHQsIFtrZXldOiBvYmpUb1BsdWNrW2tleV19KSwge30gYXMgT21pdDxBLCBCW251bWJlcl0+KVxuXG4vLyBDb252ZXJ0cyBQYXNjYWxDYXNlIG9yIGNhbWVsQ2FzZSB0byBrZWJhYi1jYXNlXG5leHBvcnQgY29uc3Qga2ViYWJDYXNlID0gKHN0cjogc3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvXFxCKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9jb21tb25Qcm9wcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvY29tbW9uUHJvcHMudHNcIjtpbXBvcnQgdHlwZSB7UHJvcFJlZmVyZW5jZX0gZnJvbSAnLi4vdHlwZXMnXG5cbmNvbnN0IGNvbW1vblByb3BzID0gKCkgPT5cbiAgKHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byBgdHJ1ZWAsIHBsYWNlcyB0aGUgY29tcG9uZW50IGluIHRoZSBhY3RpdmUgc3RhdGUgd2l0aCBhY3RpdmUgc3R5bGluZycsXG4gICAgfSxcbiAgICBhY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogJ2FjdGl2ZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZS4gVHlwaWNhbGx5IHlvdSB3aWxsIHdhbnQgdG8gc2V0IHRoaXMgdG8gY2xhc3MgbmFtZSAnYWN0aXZlJ1wiLFxuICAgIH0sXG4gICAgYWx0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdWYWx1ZSB0byBzZXQgZm9yIHRoZSBgYWx0YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXJpYUNvbnRyb2xzOiB7XG4gICAgICB0eXBlOiAnQXJpYUludmFsaWQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdJZiB0aGlzIGNvbXBvbmVudCBjb250cm9scyBhbm90aGVyIGNvbXBvbmVudCBvciBlbGVtZW50LCBzZXQgdGhpcyB0byB0aGUgSUQgb2YgdGhlIGNvbnRyb2xsZWQgY29tcG9uZW50IG9yIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgYXJpYURlc2NyaWJlZGJ5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYSBkZXNjcmlwdGlvbiBmb3IgdGhpcyBjb21wb25lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYGFyaWEtZGVzY3JpYmVkYnlgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhcmlhSW52YWxpZDoge1xuICAgICAgdHlwZTogJ0FyaWFJbnZhbGlkJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU2V0cyB0aGUgYGFyaWEtaW52YWxpZGAgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSB3cmFwcGVyIGVsZW1lbnQuIFdoZW4gbm90IHByb3ZpZGVkLCB0aGUgYHN0YXRlYCBwcm9wIHdpbGwgY29udHJvbCB0aGUgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGF1dG9DbG9zZToge1xuICAgICAgdHlwZTogXCJib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZSdcIixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRyb2xzIHRoZSBhdXRvbWF0aWMgY2xvc2luZyBvZiB0aGUgY29tcG9uZW50IHdoZW4gY2xpY2tpbmcuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgIH0sXG4gICAgYXV0b2NvbXBsZXRlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAnYXV0b2NvbXBsZXRlJyBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIGZvcm0gY29udHJvbFwiLFxuICAgIH0sXG4gICAgYXJpYUxhYmVsOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdmFsdWUgb2YgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgZWxlbWVudCcsXG4gICAgfSxcbiAgICBhcmlhTGl2ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHRoZSByZW5kZXJlZCBlbGVtZW50IGlzIGFuIGBhcmlhLWxpdmVgIHJlZ2lvbiAoZm9yIHNjcmVlbiByZWFkZXIgdXNlcnMpLCBzZXQgdG8gZWl0aGVyICdwb2xpdGUnIG9yICdhc3NlcnRpdmUnXCIsXG4gICAgfSxcbiAgICBhcmlhTGFiZWxsZWRieToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgbGFiZWwgZm9yIHRoaXMgY29tcG9uZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBhcmlhLWxhYmVsbGVkYnlgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhdXRvZm9jdXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byBgdHJ1ZWAsIGF0dGVtcHRzIHRvIGF1dG8tZm9jdXMgdGhlIGNvbnRyb2wgd2hlbiBpdCBpcyBtb3VudGVkLCBvciByZS1hY3RpdmF0ZWQgd2hlbiBpbiBhIGtlZXAtYWxpdmUuIERvZXMgbm90IHNldCB0aGUgYGF1dG9mb2N1c2AgYXR0cmlidXRlIG9uIHRoZSBjb250cm9sJyxcbiAgICB9LFxuICAgIGJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byBiYWNrZ3JvdW5kIG9mIHRoZSBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgYm9keUJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgYm9keUJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBib3JkZXInLFxuICAgIH0sXG4gICAgYm9keUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9keVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib2R5VGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgdGV4dCcsXG4gICAgfSxcbiAgICBib2R5VmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9yZGVyJyxcbiAgICB9LFxuICAgIGRlYm91bmNlOiB7XG4gICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgIGRlZmF1bHQ6ICcwJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0IHRvIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBncmVhdGVyIHRoYW4gemVybywgd2lsbCBkZWJvdW5jZSB0aGUgdXNlciBpbnB1dC4gSGFzIG5vIGVmZmVjdCBpZiBwcm9wICdsYXp5JyBpcyBzZXRcIixcbiAgICB9LFxuICAgIGRlYm91bmNlTWF4V2FpdDoge1xuICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICBkZWZhdWx0OiAnTmFOJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBtYXhpbXVtIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQnJ3MgaW52b2tlZFwiLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQgdG8gYHRydWVgLCBkaXNhYmxlcyB0aGUgY29tcG9uZW50J3MgZnVuY3Rpb25hbGl0eSBhbmQgcGxhY2VzIGl0IGluIGEgZGlzYWJsZWQgc3RhdGVcIixcbiAgICB9LFxuICAgIGRpc2FibGVkRmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2Rpc2FibGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBkaXNhYmxlZCBzdGF0ZScsXG4gICAgfSxcbiAgICBmbG9hdGluZzoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0LCByZW5kZXJzIGEgc2luZ2xlIGNvbnRyb2wgZm9ybSB3aXRoIGEgZmxvYXRpbmcgbGFiZWwuIFRoaXMgb25seSB3b3JrcyBmb3IgZm9ybXMgd2hlcmUgdGhlIGltbWVkaWF0ZSBjaGlsZHJlbiBhcmUgYSBsYWJlbCBhbmQgb25lIG9mIHRoZSBzdXBwb3J0ZWQgY29udHJvbHMuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgIH0sXG5cbiAgICBmb290ZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgZm9vdGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgYm9yZGVyJyxcbiAgICB9LFxuICAgIGZvb3RlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIHRleHQnLFxuICAgIH0sXG4gICAgZm9vdGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0lEIG9mIHRoZSBmb3JtIHRoYXQgdGhlIGZvcm0gY29udHJvbCBiZWxvbmdzIHRvLiBTZXRzIHRoZSBgZm9ybWAgYXR0cmlidXRlIG9uIHRoZSBjb250cm9sJyxcbiAgICB9LFxuICAgIGZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJyh2YWw6IHN0cmluZywgZXZ0OiBFdmVudCkgPT4gc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdSZWZlcmVuY2UgdG8gYSBmdW5jdGlvbiBmb3IgZm9ybWF0dGluZyB0aGUgaW5wdXQnLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyQmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGhlYWRlckJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIGJvcmRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciB0ZXh0JyxcbiAgICB9LFxuICAgIGhlYWRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVXNlZCB0byBzZXQgdGhlIGBpZGAgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBjb250ZW50LCBhbmQgdXNlZCBhcyB0aGUgYmFzZSB0byBnZW5lcmF0ZSBhbnkgYWRkaXRpb25hbCBlbGVtZW50IElEcyBhcyBuZWVkZWQnLFxuICAgIH0sXG4gICAgbGF6eUZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQsIHRoZSBpbnB1dCBpcyBmb3JtYXR0ZWQgb24gYmx1ciBpbnN0ZWFkIG9mIGVhY2gga2V5c3Ryb2tlIChpZiB0aGVyZSBpcyBhIGZvcm1hdHRlciBzcGVjaWZpZWQpJyxcbiAgICB9LFxuICAgIGxpbmtDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDbGFzcyBvciBjbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBpbm5lciBsaW5rIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIElEIG9mIHRoZSBhc3NvY2lhdGVkIGRhdGFsaXN0IGVsZW1lbnQgb3IgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYG5hbWVgIGF0dHJpYnV0ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIG5vQmFja2Ryb3A6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGJhY2tkcm9wJyxcbiAgICB9LFxuICAgIG5vRWxsaXBzaXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEbyBub3Qgc2hvdyBlbGxpcHNpcyBidXR0b25zJyxcbiAgICB9LFxuICAgIG5vR290b0VuZEJ1dHRvbnM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdIaWRlcyB0aGUgZ28gdG8gZmlyc3QgYW5kIGdvIHRvIGxhc3QgcGFnZSBidXR0b25zJyxcbiAgICB9LFxuICAgIG5vSGVhZGVyOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSAgaGVhZGVyJyxcbiAgICB9LFxuICAgIG5vSGVhZGVyQ2xvc2U6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGhlYWRlciBjbG9zZSBidXR0b24nLFxuICAgIH0sXG4gICAgbm9Ib3ZlclBhdXNlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgdG8gdHJ1ZSwgZGlzYWJsZXMgcGF1c2luZyB0aGUgdGltZXIgb24gaG92ZXIgYmVoYXZpb3InLFxuICAgIH0sXG4gICAgbm9SZXN1bWVPbkhvdmVyTGVhdmU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byB0cnVlLCB0aGUgdGltZXIgd2lsbCBub3QgcmVzdW1lIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgZWxlbWVudC4gSXQgd2lsbCBuZWVkIHRvIGJlIG1hbnVhbGx5IHJlc3VtZWQnLFxuICAgIH0sXG4gICAgbm92YWxpZGF0ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCBkaXNhYmxlcyBicm93c2VyIG5hdGl2ZSBIVE1MNSB2YWxpZGF0aW9uIG9uIGNvbnRyb2xzIGluIHRoZSBmb3JtJyxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6ICdyZWFkb25seSBDaGVja2JveE9wdGlvblJhd1tdJyxcbiAgICAgIGRlZmF1bHQ6ICcoKSA9PiBbXScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FycmF5IG9mIGl0ZW1zIHRvIHJlbmRlciBpbiB0aGUgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIHBsYWluOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVyIHRoZSBmb3JtIGNvbnRyb2wgaW4gcGxhaW4gbW9kZSwgcmF0aGVyIHRoYW4gY3VzdG9tIHN0eWxlZCBtb2RlJyxcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IFwiJydcIixcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICBwbGFpbnRleHQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NldCB0aGUgZm9ybSBjb250cm9sIGFzIHJlYWRvbmx5IGFuZCByZW5kZXJzIHRoZSBjb250cm9sIHRvIGxvb2sgbGlrZSBwbGFpbiB0ZXh0IChubyBib3JkZXJzKScsXG4gICAgfSxcbiAgICByZXF1aXJlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBZGRzIHRoZSBgcmVxdWlyZWRgIGF0dHJpYnV0ZSB0byB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBgcmVhZG9ubHlgIGF0dHJpYnV0ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBBUklBIGF0dHJpYnV0ZSBgcm9sZWAgdG8gYSBzcGVjaWZpYyB2YWx1ZScsXG4gICAgfSxcbiAgICByb3VuZGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuLiBUaGUgYHNxdWFyZWAgcHJvcCB0YWtlcyBwcmVjZWRlbmNlLiBSZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlscycsXG4gICAgfSxcbiAgICByb3VuZGVkQm90dG9tOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBib3R0b21gIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZEVuZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgZW5kYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRTdGFydDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgc3RhcnRgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZFRvcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgdG9wYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6ICdTaXplJyxcbiAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXQgdGhlIHNpemUgb2YgdGhlIGNvbXBvbmVudCdzIGFwcGVhcmFuY2UuICdzbScsICdtZCcgKGRlZmF1bHQpLCBvciAnbGcnXCIsXG4gICAgfSxcbiAgICBzcmM6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdVUkwgdG8gc2V0IGZvciB0aGUgYHNyY2AgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIHN0YXRlOiB7XG4gICAgICB0eXBlOiAnVmFsaWRhdGlvblN0YXRlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQ29udHJvbHMgdGhlIHZhbGlkYXRpb24gc3RhdGUgYXBwZWFyYW5jZSBvZiB0aGUgY29tcG9uZW50LiBgdHJ1ZWAgZm9yIHZhbGlkLCBgZmFsc2VgIGZvciBpbnZhbGlkLCBvciBgbnVsbGAgZm9yIG5vIHZhbGlkYXRpb24gc3RhdGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIHN1YnRpdGxlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdoNicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHN1YnRpdGxlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiAnYm9keS1zZWNvbmRhcnknLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBzdWJ0aXRsZSB0ZXh0JyxcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnJyxcbiAgICB9LFxuICAgIHRleHRGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdGV4dCBsYWJlbCcsXG4gICAgfSxcbiAgICB0ZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIHRleHQnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRpdGxlQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdGl0bGVUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2g0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlcnMgdGhlIGZlZWRiYWNrIHRleHQgaW4gYSBydWRpbWVudGFyeSB0b29sdGlwIHN0eWxlJyxcbiAgICB9LFxuICAgIHZhbGlkYXRlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCwgYWRkcyB0aGUgQm9vdHN0cmFwIGNsYXNzICd3YXMtdmFsaWRhdGVkJyBvbiB0aGUgZm9ybSwgdHJpZ2dlcmluZyB0aGUgbmF0aXZlIGJyb3dzZXIgdmFsaWRhdGlvbiBzdGF0ZXNcIixcbiAgICB9LFxuICAgIHZhbHVlRmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSB2YWx1ZScsXG4gICAgfSxcbiAgICB2YXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBjb21wb25lbnQuIFdoZW4gaW1wbGVtZW50ZWQgYGJnLXZhcmlhbnRgIGFuZCBgdGV4dC12YXJpYW50YCB3aWxsIHRha2UgcHJlY2VkZW5jZScsXG4gICAgfSxcbiAgICB3cmFwcGVyQXR0cnM6IHtcbiAgICAgIHR5cGU6ICdSZWFkb25seTxBdHRyc1ZhbHVlPicsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0F0dHJpYnV0ZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgd3JhcHBlciBlbGVtZW50JyxcbiAgICB9LFxuICAgIHdyYXBwZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFkZCB0byB0aGUgd3JhcHBlciBlbGVtZW50JyxcbiAgICB9LFxuICAgIHBsYWNlbWVudDoge1xuICAgICAgdHlwZTogJ1BsYWNlbWVudCcsXG4gICAgICBkZWZhdWx0OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGxhY2VtZW50IG9mIGEgZmxvYXRpbmcgZWxlbWVudCcsXG4gICAgfSxcbiAgfSkgYXMgY29uc3RcblxuY29uc3Qgc2luZ2xldG9uUHJvcHMgPSBPYmplY3QuZnJlZXplKGNvbW1vblByb3BzKCkpXG5cbmV4cG9ydCBjb25zdCBidWlsZENvbW1vblByb3BzID0gKFxuICBvYmo/OiBQYXJ0aWFsPFJlY29yZDxrZXlvZiB0eXBlb2Ygc2luZ2xldG9uUHJvcHMsIFBhcnRpYWw8UHJvcFJlZmVyZW5jZT4+PlxuKTogUmVhZG9ubHk8dHlwZW9mIHNpbmdsZXRvblByb3BzPiA9PiB7XG4gIGlmICghb2JqKSByZXR1cm4gc2luZ2xldG9uUHJvcHNcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBjb25zdCBteU9iamVjdCA9IGNvbW1vblByb3BzKCkgYXMgUmVjb3JkPHN0cmluZywgYW55PlxuXG4gIC8vIE1lcmdlIHRoZSBwcm92aWRlZCBvYmplY3QgaW50byB0aGUgY29tbW9uIHByb3BzXG4gIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgbXlPYmplY3Rba2V5XSA9IHtcbiAgICAgIC4uLm15T2JqZWN0W2tleV0sXG4gICAgICAuLi52YWx1ZSxcbiAgICB9XG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobXlPYmplY3QgYXMgYW55KVxufVxuXG5leHBvcnQgY29uc3QgY29tbW9uRW1pdHMgPSB7XG4gIGNhbmNlbDoge30sXG4gIG9rOiB7fSxcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvbGlua1Byb3BzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9saW5rUHJvcHMudHNcIjtpbXBvcnQgdHlwZSB7QkxpbmtQcm9wc30gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuaW1wb3J0IHR5cGUge1Byb3BSZWNvcmQsIFByb3BSZWNvcmRXaXRoT3B0aW9uc30gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBsaW5rVG8gPSAnL2RvY3MvY29tcG9uZW50cy9saW5rJ1xuXG5leHBvcnQgY29uc3QgbGlua1Byb3BzID0ge1xuICBhY3RpdmU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgdG8gYHRydWVgLCBwbGFjZXMgdGhlIGNvbXBvbmVudCBpbiB0aGUgYWN0aXZlIHN0YXRlIHdpdGggYWN0aXZlIHN0eWxpbmcnLFxuICB9LFxuICBhY3RpdmVDbGFzczoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdyb3V0ZXItbGluay1hY3RpdmUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29uZmlndXJlIHRoZSBhY3RpdmUgQ1NTIGNsYXNzIGFwcGxpZWQgd2hlbiB0aGUgbGluayBpcyBhY3RpdmUuJyxcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldoZW4gc2V0IHRvIGB0cnVlYCwgZGlzYWJsZXMgdGhlIGxpbmsncyBmdW5jdGlvbmFsaXR5LiBTZWUgYWJvdmUgZm9yIGRldGFpbHMgYW5kIGxpbWl0YXRpb25zXCIsXG4gIH0sXG4gIGV4YWN0QWN0aXZlQ2xhc3M6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAncm91dGVyLWxpbmstZXhhY3QtYWN0aXZlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0NvbmZpZ3VyZSB0aGUgYWN0aXZlIENTUyBjbGFzcyBhcHBsaWVkIHdoZW4gdGhlIGxpbmsgaXMgYWN0aXZlIHdpdGggZXhhY3QgbWF0Y2guJyxcbiAgfSxcbiAgaHJlZjoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlbm90ZXMgdGhlIHRhcmdldCBVUkwgb2YgdGhlIGxpbmsgZm9yIHN0YW5kYXJkIGEgbGlua3MnLFxuICB9LFxuICBpY29uOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgdG8gYHRydWVgLCBzdHlsZXMgYW4gaWNvbiBhdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgbGluayB0ZXh0JyxcbiAgfSxcbiAgbm9QcmVmZXRjaDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUbyBpbXByb3ZlIHRoZSByZXNwb25zaXZlbmVzcyBvZiB5b3VyIE51eHQuanMgYXBwbGljYXRpb25zLCB3aGVuIHRoZSBsaW5rIHdpbGwgYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgdmlld3BvcnQsIE51eHQuanMgd2lsbCBhdXRvbWF0aWNhbGx5IHByZWZldGNoIHRoZSBjb2RlIHNwbGl0dGVkIHBhZ2UuIFNldHRpbmcgYG5vLXByZWZldGNoYCB3aWxsIGRpc2FibGVkIHRoaXMgZmVhdHVyZSBmb3IgdGhlIHNwZWNpZmljIGxpbmsnLFxuICAgIG5vdFlldEltcGxlbWVudGVkOiB0cnVlLFxuICB9LFxuICBvcGFjaXR5OiB7XG4gICAgdHlwZTogXCIxMCB8IDI1IHwgNTAgfCA3NSB8IDEwMCB8ICcxMCcgfCAnMjUnIHwgJzUwJyB8ICc3NScgfCAnMTAwJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NoYW5nZSB0aGUgYWxwaGEgb3BhY2l0eSBvZiB0aGUgbGluayBgcmdiYSgpYCBjb2xvciB2YWx1ZScsXG4gIH0sXG4gIG9wYWNpdHlIb3Zlcjoge1xuICAgIHR5cGU6IFwiMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGFscGhhIG9wYWNpdHkgb2YgdGhlIGxpbmsgYHJnYmEoKWAgY29sb3IgdmFsdWUgb24gaG92ZXInLFxuICB9LFxuICBwcmVmZXRjaDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVG8gaW1wcm92ZSB0aGUgcmVzcG9uc2l2ZW5lc3Mgb2YgeW91ciBOdXh0LmpzIGFwcGxpY2F0aW9ucywgd2hlbiB0aGUgbGluayB3aWxsIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIHZpZXdwb3J0LCBOdXh0LmpzIHdpbGwgYXV0b21hdGljYWxseSBwcmVmZXRjaCB0aGUgY29kZSBzcGxpdHRlZCBwYWdlLiBTZXR0aW5nIGBwcmVmZXRjaGAgdG8gYHRydWVgIG9yIGBmYWxzZWAgd2lsbCBvdmVyd3JpdGUgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYHJvdXRlci5wcmVmZXRjaExpbmtzYCcsXG4gIH0sXG4gIHByZWZldGNoZWRDbGFzczoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ05vdCBZZXQgSW1wbG1lbnRlZDogQSBjbGFzcyB0byBhcHBseSB0byBsaW5rcyB0aGF0IGhhdmUgYmVlbiBwcmVmZXRjaGVkLicsXG4gIH0sXG4gIHByZWZldGNoT246IHtcbiAgICB0eXBlOiAnUGFydGlhbDx7dmlzaWJpbGl0eTogYm9vbGVhbiwgaW50ZXJhY3Rpb246IGJvb2xlYW59PicsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbGxvd3MgY3VzdG9tIGNvbnRyb2wgb2Ygd2hlbiB0byBwcmVmZXRjaCBsaW5rcy4gUG9zc2libGUgb3B0aW9ucyBhcmUgJ2ludGVyYWN0aW9uJyBhbmQgJ3Zpc2liaWxpdHknIChkZWZhdWx0KS5cIixcbiAgfSxcbiAgbm9SZWw6IHt9LFxuICByZWw6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ3JlbCcgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBsaW5rXCIsXG4gIH0sXG4gIHJlcGxhY2U6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnU2V0dGluZyByZXBsYWNlIHByb3Agd2lsbCBjYWxsIHJvdXRlci5yZXBsYWNlKCkgaW5zdGVhZCBvZiByb3V0ZXIucHVzaCgpIHdoZW4gY2xpY2tlZCcsXG4gIH0sXG4gIHJvdXRlckNvbXBvbmVudE5hbWU6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAncm91dGVyLWxpbmsnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Jvb3RzdHJhcFZ1ZSBhdXRvIGRldGVjdHMgYmV0d2VlbiBgPHJvdXRlci1saW5rPmAgYW5kIGA8bnV4dC1saW5rPmAuIFNldCB0aGlzIHRoaXMgcHJvcGVydHkgdG8gZXhwbGljaXR5IHNldCB0aGUgbmFtZSBvZiB0aGUgcm91dGVyIGNvbXBvbmVudC4nLFxuICB9LFxuICByb3V0ZXJUYWc6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAnYScsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgdGhlIHRhZyB0eXBlIGZvciB0aGUgbGluaycsXG4gIH0sXG4gIHN0cmV0Y2hlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2hlbiBzZXQgdG8gYHRydWVgLCBtYWtlcyB0aGUgbGluaydzIGBjb250YWluaW5nIGJsb2NrYCBjbGlja2FibGUgdmlhIGFuIGA6OmFmdGVyYCBwc2V1ZG8gZWxlbWVudFwiLFxuICB9LFxuICB0YXJnZXQ6IHtcbiAgICB0eXBlOiAnTGlua1RhcmdldCcsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlICd0YXJnZXQnIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgbGlua1wiLFxuICB9LFxuICB0bzoge1xuICAgIHR5cGU6ICdSb3V0ZUxvY2F0aW9uUmF3JyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRGVub3RlcyB0aGUgdGFyZ2V0IHJvdXRlIG9mIHRoZSBsaW5rLiBXaGVuIGNsaWNrZWQsIHRoZSB2YWx1ZSBvZiB0aGUgdG8gcHJvcCB3aWxsIGJlIHBhc3NlZCB0byBgcm91dGVyLnB1c2goKWAgaW50ZXJuYWxseScsXG4gIH0sXG4gIHVuZGVybGluZU9mZnNldDoge1xuICAgIHR5cGU6IFwiMSB8IDIgfCAzIHwgJzEnIHwgJzInIHwgJzMnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBkaXN0YW5jZSBvZiB0aGUgdW5kZXJsaW5lIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgbGluayB0ZXh0JyxcbiAgfSxcbiAgdW5kZXJsaW5lT2Zmc2V0SG92ZXI6IHtcbiAgICB0eXBlOiBcIjEgfCAyIHwgMyB8ICcxJyB8ICcyJyB8ICczJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NoYW5nZSB0aGUgZGlzdGFuY2Ugb2YgdGhlIHVuZGVybGluZSBmcm9tIHRoZSBib3R0b20gb2YgdGhlIGxpbmsgdGV4dCBvbiBob3ZlcicsXG4gIH0sXG4gIHVuZGVybGluZU9wYWNpdHk6IHtcbiAgICB0eXBlOiBcIjAgfCAxMCB8IDI1IHwgNTAgfCA3NSB8IDEwMCB8ICcwJyB8ICcxMCcgfCAnMjUnIHwgJzUwJyB8ICc3NScgfCAnMTAwJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJTZXQncyB0aGUgb3BhY2l0eSBvZiB0aGUgbGluaydzIHVuZGVybGluZVwiLFxuICB9LFxuICB1bmRlcmxpbmVPcGFjaXR5SG92ZXI6IHtcbiAgICB0eXBlOiBcIjAgfCAxMCB8IDI1IHwgNTAgfCA3NSB8IDEwMCB8ICcwJyB8ICcxMCcgfCAnMjUnIHwgJzUwJyB8ICc3NScgfCAnMTAwJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJTZXQncyB0aGUgb3BhY2l0eSBvZiB0aGUgbGluaydzIHVuZGVybGluZSBvbiBob3ZlclwiLFxuICB9LFxuICB1bmRlcmxpbmVWYXJpYW50OiB7XG4gICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgdGhlIGNvbG9yIHZhcmlhbnQgZm9yIHRoZSBsaW5rIHVuZGVybGluZSBpbmRlcGVuZGVudGx5IG9mIHRoZSBsaW5rIHRleHQnLFxuICB9LFxuICB2YXJpYW50OiB7XG4gICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgdGhlIGNvbG9yIHZhcmlhbnQgZm9yIHRoZSBsaW5rJyxcbiAgfSxcbiAgLy8gVE9ETzogcmVtb3ZlIHRoZSBoYXJkLWNvZGVkIE5ZSSBwcm9wcyBiZWxvdyB3aGVuIHRoZXkgYXJlIGltcGxlbWVudGVkXG59IGFzIGNvbnN0IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJMaW5rUHJvcHMgfCAnbm9QcmVmZXRjaCcgfCAncHJlZmV0Y2gnIHwgJ3ByZWZldGNoZWRDbGFzcyc+XG5cbmV4cG9ydCBjb25zdCBsaW5rZWRCTGlua1NlY3Rpb24gPSB7XG4gIF9vcHRzOiB7XG4gICAgbGlua1RvLFxuICB9LFxuICBfZGF0YTogbGlua1Byb3BzLFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUHJvcFJlY29yZFdpdGhPcHRpb25zXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL3Nob3dIaWRlRGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvc2hvd0hpZGVEYXRhLnRzXCI7aW1wb3J0IHR5cGUge3Nob3dIaWRlfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5pbXBvcnQgdHlwZSB7RW1pdFJlY29yZCwgUHJvcFJlY29yZCwgU2xvdFNjb3BlUmVmZXJlbmNlfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IHNob3dIaWRlRW1pdHMgPSB7XG4gICdoaWRlJzoge1xuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbHdheXMgZW1pdHMganVzdCBiZWZvcmUgdGhlIGNvbXBvbmVudCBoYXMgaGlkZGVuLiBDYW5jZWxhYmxlIChhcyBsb25nIGFzIGNvbXBvbmVudCB3YXNuJ3QgZm9yY2libHkgaGlkZGVuKVwiLFxuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NhbGwgdmFsdWUucHJldmVudERlZmF1bHQoKSB0byBjYW5jZWwgaGlkZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gICdoaWRlLXByZXZlbnRlZCc6IHtcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdFbWl0dGVkIHdoZW4gdGhlIGNvbXBvbmVudCB0cmllZCB0byBjbG9zZSwgYnV0IHdhcyBwcmV2ZW50ZWQgZnJvbSBjbG9zaW5nLiAgVGhpcyBvY2N1cnMgd2hlbiBwcmV2ZW50RGVmYXVsdCgpIGlzIGNhbGxlZCBvbiB0aGUgZXZlbnQsIHRoZSB1c2VyIGNsaWNrcyBlc2NhcGUgYW5kIG5vLWNsb3NlLW9uYmFja2Ryb3AgaXMgc2V0IHRvIHRydWUsIG9yIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYmFja2Ryb3AgYW5kIG5vLWNsb3NlLW9uYmFja2Ryb3AgaXMgc2V0IHRvIHRydWUuJyxcbiAgfSxcbiAgJ2hpZGRlbic6IHtcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjogJ0Fsd2F5cyBlbWl0cyBhZnRlciB0aGUgY29tcG9uZW50IGlzIGhpZGRlbicsXG4gIH0sXG4gICdzaG93Jzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NhbGwgdmFsdWUucHJldmVudERlZmF1bHQoKSB0byBjYW5jZWwgc2hvdycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246ICdBbHdheXMgZW1pdHMganVzdCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBzaG93bi4gQ2FuY2VsYWJsZScsXG4gIH0sXG4gICdzaG93LXByZXZlbnRlZCc6IHtcbiAgICBhcmdzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdFbWl0dGVkIHdoZW4gdGhlIGNvbXBvbmVudCB0cmllZCB0byBvcGVuLCBidXQgd2FzIHByZXZlbnRlZCBmcm9tIG9wZW5pbmcuIFRoaXMgb2NjdXJzIHdoZW4gcHJldmVudERlZmF1bHQoKSBpcyBjYWxsZWQgb24gdGhlIGV2ZW50JyxcbiAgfSxcbiAgJ3Nob3duJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiAnQWx3YXlzIGVtaXRzIGp1c3QgYWZ0ZXIgY29tcG9uZW50IGlzIHNob3duLicsXG4gIH0sXG4gICd0b2dnbGUnOiB7XG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFsd2F5cyBlbWl0cyBqdXN0IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHRvZ2dsZWQgdmlhIHRoZSBleHBvc2VkICd0b2dnbGUoKScgZnVuY3Rpb24gb3IgdXNlVG9nZ2xlIGNvbXBvc2FibGUgLiBDYW5jZWxhYmxlIChhcyBsb25nIGFzIGNvbXBvbmVudCB3YXNuJ3QgZm9yY2libHkgaGlkZGVuKVwiLFxuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NhbGwgdmFsdWUucHJldmVudERlZmF1bHQoKSB0byBjYW5jZWwgaGlkZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gICd0b2dnbGUtcHJldmVudGVkJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VtaXR0ZWQgd2hlbiB0aGUgY29tcG9uZW50IHRyaWVkIHRvIHRvZ2dsZSwgYnV0IHdhcyBwcmV2ZW50ZWQgZnJvbSBkb2luZyBzby4gIFRoaXMgb2NjdXJzIHdoZW4gcHJldmVudERlZmF1bHQoKSBpcyBjYWxsZWQgb24gdGhlIGV2ZW50LCB0aGUgdXNlciBjbGlja3MgZXNjYXBlIGFuZCBuby1jbG9zZS1vbmJhY2tkcm9wIGlzIHNldCB0byB0cnVlLCBvciB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJhY2tkcm9wIGFuZCBuby1jbG9zZS1vbmJhY2tkcm9wIGlzIHNldCB0byB0cnVlLicsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBFbWl0UmVjb3JkXG5cbmV4cG9ydCBjb25zdCBzaG93SGlkZVByb3BzID0ge1xuICBpbml0aWFsQW5pbWF0aW9uOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGVuYWJsZXMgdGhlIGluaXRpYWwgYW5pbWF0aW9uIG9uIG1vdW50JyxcbiAgfSxcbiAgbGF6eToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCB0aGUgY29udGVudCB3aWxsIG5vdCBiZSBtb3VudGVkIHVudGlsIG9wZW5lZCcsXG4gIH0sXG4gIG1vZGVsVmFsdWU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdDb250cm9scyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY29tcG9uZW50JyxcbiAgfSxcbiAgbm9GYWRlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnQWxpYXMgZm9yIGBub0FuaW1hdGlvbmAnLFxuICB9LFxuICBub0FuaW1hdGlvbjoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCBkaXNhYmxlcyB0aGUgYW5pbWF0aW9uJyxcbiAgfSxcbiAgc2hvdzoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2hlbiBzZXQsIGFuZCBwcm9wICd2aXNpYmxlJyBpcyBmYWxzZSBvbiBtb3VudCwgd2lsbCBhbmltYXRlIGZyb20gY2xvc2VkIHRvIG9wZW4gb24gaW5pdGlhbCBtb3VudC4gTWFpbmx5IHRvIGhlbHAgd2l0aCB0ZW1wbGF0ZSBzaG93LiBVc2UgbW9kZWwtdmFsdWUgZm9yIHJlYWN0aXZlIHNob3cvaGlkZVwiLFxuICB9LFxuICB0cmFuc1Byb3BzOiB7XG4gICAgdHlwZTogJ1RyYW5zaXRpb25Qcm9wcycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnVHJhbnNpdGlvbiBwcm9wZXJ0aWVzJyxcbiAgfSxcbiAgdW5tb3VudExhenk6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCBhbmQgYGxhenlgIGlzIHRydWUsIHRoZSBjb250ZW50IHdpbGwgYmUgdW5tb3VudGVkIHdoZW4gY2xvc2VkJyxcbiAgfSxcbiAgdmlzaWJsZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogXCJXaGVuICd0cnVlJywgb3BlbiB3aXRob3V0IGFuaW1hdGlvblwiLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBzaG93SGlkZSB8ICdtb2RlbFZhbHVlJz5cblxuZXhwb3J0IGNvbnN0IHNob3dIaWRlU2xvdHNEYXRhID0ge1xuICBpZDoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pcXVlIElEIGZvciB0aGUgY29tcG9uZW50JyxcbiAgfSxcbiAgc2hvdzoge1xuICAgIHR5cGU6ICcoKSA9PiB2b2lkJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Z1bmN0aW9uIHRvIHNob3cgdGhlIGNvbXBvbmVudCcsXG4gIH0sXG4gIGhpZGU6IHtcbiAgICB0eXBlOiAnKHRyaWdnZXI/OiBzdHJpbmcsIG5vVHJpZ2dlckVtaXQ/OiBib29sZWFuKSA9PiB2b2lkJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdGdW5jdGlvbiB0byBoaWRlIHRoZSBjb21wb25lbnQuIGB0cmlnZ2VyYCBpcyB0aGUgdHJpZ2dlciB0aGF0IGNhdXNlZCB0aGUgaGlkZS4gYG5vVHJpZ2dlckVtaXRgIHByZXZlbnRzIHRoZSBlbWl0IG9mIHRoZSB0cmlnZ2VyIGV2ZW50LicsXG4gIH0sXG4gIHRvZ2dsZToge1xuICAgIHR5cGU6ICcoKSA9PiB2b2lkJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Z1bmN0aW9uIHRvIHRvZ2dsZSB0aGUgY29tcG9uZW50IHZpc2liaWxpdHknLFxuICB9LFxuICBhY3RpdmU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVzY3JpcHRpb246ICdJbmRpY2F0ZXMgaWYgdGhlIGNvbXBvbmVudCBpcyBhY3RpdmUgKHN0YXJ0aW5nIHNob3csIGJlZm9yZS9hZnRlciBhbmltYXRpb25zKScsXG4gIH0sXG4gIHZpc2libGU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVzY3JpcHRpb246ICdJbmRpY2F0ZXMgaWYgdGhlIGNvbXBvbmVudCBpcyB2aXNpYmxlIChzaG93biknLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgU2xvdFNjb3BlUmVmZXJlbmNlXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHMvdG9hc3QuZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL3RvYXN0LmRhdGEudHNcIjtpbXBvcnQgdHlwZSB7QlRvYXN0RW1pdHMsIEJUb2FzdE9yY2hlc3RyYXRvclByb3BzLCBCVG9hc3RQcm9wc30gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuaW1wb3J0IHtcbiAgdHlwZSBDb21wb25lbnRSZWZlcmVuY2UsXG4gIGRlZmF1bHRQcm9wU2VjdGlvblN5bWJvbCxcbiAgdHlwZSBFbWl0UmVjb3JkLFxuICB0eXBlIFByb3BSZWNvcmQsXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHtvbWl0LCBwaWNrfSBmcm9tICcuLi8uLi91dGlscy9vYmplY3RVdGlscydcbmltcG9ydCB7YnVpbGRDb21tb25Qcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uUHJvcHMnXG5pbXBvcnQge2xpbmtlZEJMaW5rU2VjdGlvbiwgdHlwZSBsaW5rUHJvcHN9IGZyb20gJy4uLy4uL3V0aWxzL2xpbmtQcm9wcydcbmltcG9ydCB7c2hvd0hpZGVFbWl0cywgc2hvd0hpZGVQcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvc2hvd0hpZGVEYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWQ6ICgpOiBDb21wb25lbnRSZWZlcmVuY2UgPT4gKHtcbiAgICBCVG9hc3Q6IHtcbiAgICAgIHNvdXJjZVBhdGg6ICcvQlRvYXN0L0JUb2FzdC52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgW2RlZmF1bHRQcm9wU2VjdGlvblN5bWJvbF06IHtcbiAgICAgICAgICAuLi5vbWl0KHNob3dIaWRlUHJvcHMsIFsnbW9kZWxWYWx1ZSddKSxcbiAgICAgICAgICAuLi5waWNrKGJ1aWxkQ29tbW9uUHJvcHMoKSwgWyd2YXJpYW50JywgJ25vSG92ZXJQYXVzZScsICdub1Jlc3VtZU9uSG92ZXJMZWF2ZSddKSxcbiAgICAgICAgICBiZ1ZhcmlhbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHZhcmlhbnQgZm9yIHRoZSB0b2FzdC4nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgdG9hc3QgYm9keS4nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keUNsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIENTUyBjbGFzcyhlcykgZm9yIHRoZSB0b2FzdCBib2R5IGVsZW1lbnQuJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsb3NlQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgQ1NTIGNsYXNzKGVzKSBmb3IgdGhlIGNsb3NlIGJ1dHRvbi4nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xvc2VDb250ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdGV4dCBmb3IgdGhlIGNsb3NlIGJ1dHRvbi4gVGhlIGBjbG9zZWAgc2xvdCB0YWtlcyBwcmVjZWRlbmNlLicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbG9zZUxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdDbG9zZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGBhcmlhLWxhYmVsYCBhdHRyaWJ1dGUgZm9yIHRoZSBjbG9zZSBidXR0b24uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsb3NlVmFyaWFudDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZyB8IG51bGwnLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGNvbG9yIHZhcmlhbnQgZm9yIHRoZSBjbG9zZSBidXR0b24uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlYWRlckNsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIENTUyBjbGFzcyhlcykgZm9yIHRoZSB0b2FzdCBoZWFkZXIgZWxlbWVudC4nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGVhZGVyVGFnOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZpZXMgdGhlIEhUTUwgdGFnIGZvciB0aGUgdG9hc3QgaGVhZGVyLCByZXBsYWNpbmcgdGhlIGRlZmF1bHQgdGFnLicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgJ1NldHMgdGhlIGBpZGAgYXR0cmlidXRlIGZvciB0aGUgdG9hc3QgYW5kIGdlbmVyYXRlcyBhZGRpdGlvbmFsIGVsZW1lbnQgSURzIGFzIG5lZWRlZC4nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW50ZXJ2YWw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXIgfCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUnLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBpbnRlcnZhbCBmb3IgcmVmcmVzaGluZyB0aGUgY291bnRkb3duIHRpbWVyLicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N0YXR1czoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICdTZXRzIGBhcmlhLWxpdmU9XCJwb2xpdGVcImAgYW5kIGByb2xlPVwic3RhdHVzXCJgIHdoZW4gYHRydWVgOyBvdGhlcndpc2UsIGBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcImAgYW5kIGByb2xlPVwiYWxlcnRcImAuJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuIHwgbnVtYmVyJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAnQ29udHJvbHMgdG9hc3QgdmlzaWJpbGl0eSAoYGJvb2xlYW5gKSBvciBzZXRzIHRoZSBhdXRvLWRpc21pc3MgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIChgbnVtYmVyYCkuJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5vQ2xvc2VCdXR0b246IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGlkZXMgdGhlIGNsb3NlIGJ1dHRvbiBpbiB0aGUgdG9hc3QgaGVhZGVyLicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBub1Byb2dyZXNzOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hpZGVzIHRoZSBwcm9ncmVzcyBiYXIgaW4gdGhlIHRvYXN0LicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9ncmVzc1Byb3BzOiB7XG4gICAgICAgICAgICB0eXBlOiBcIk9taXQ8QlByb2dyZXNzQmFyUHJvcHMsICdsYWJlbCcgfCAnbWF4JyB8ICd2YWx1ZSc+XCIsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgJ0NvbmZpZ3VyZXMgdGhlIHByb2dyZXNzIGJhciBpbiB0aGUgdG9hc3QuIE5vIHByb2dyZXNzIGJhciBpcyBzaG93biBpZiB1bmRlZmluZWQuJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3dPblBhdXNlOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnS2VlcHMgdGhlIHRvYXN0IHZpc2libGUgd2hlbiBwYXVzZWQuJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNvbGlkOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlcnMgdGhlIHRvYXN0IHdpdGggYSBzb2xpZCBiYWNrZ3JvdW5kIGluc3RlYWQgb2YgYSB0cmFuc2x1Y2VudCBvbmUuJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHRWYXJpYW50OiB7XG4gICAgICAgICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHRleHQgY29sb3IgdmFyaWFudCBmb3IgdGhlIHRvYXN0LicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHRpdGxlIHRleHQgZm9yIHRoZSB0b2FzdC4nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9hc3RDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBDU1MgY2xhc3MoZXMpIGZvciB0aGUgdG9hc3Qgd3JhcHBlciBlbGVtZW50LicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxFeGNsdWRlPGtleW9mIEJUb2FzdFByb3BzLCBrZXlvZiB0eXBlb2YgbGlua1Byb3BzPj4sXG4gICAgICAgICdCTGluayBwcm9wcyc6IGxpbmtlZEJMaW5rU2VjdGlvbixcbiAgICAgIH0sXG4gICAgICBlbWl0czoge1xuICAgICAgICAuLi5zaG93SGlkZUVtaXRzLFxuICAgICAgICAndXBkYXRlOm1vZGVsLXZhbHVlJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW1pdHRlZCB3aGVuIHRoZSB0b2FzdCB2aXNpYmlsaXR5IGNoYW5nZXMuJywgLy8gVE9ETyBzaW1pbGFyIGNvbnRlbnQgdG8gQkFsZXJ0L3VwZGF0ZTptb2RlbC12YWx1ZSAoc2ltaWxhciBwdXJwb3NlKVxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdCb29sZWFuJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbmV3IHZpc2liaWxpdHkgc3RhdGUgb2YgdGhlIHRvYXN0LicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdjbG9zZSc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VtaXR0ZWQgd2hlbiB0aGUgY2xvc2UgYnV0dG9uIGlzIGNsaWNrZWQuJywgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uIGluIG9yaWdpbmFsXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJywgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdjbG9zZS1jb3VudGRvd24nOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIGR1cmluZyB0aGUgY291bnRkb3duIHRvIGF1dG8tZGlzbWlzcy4nLCAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb24gaW4gb3JpZ2luYWxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLCAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2NhbmNlbCc6IHtcbiAgICAgICAgICBhcmdzOiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgICAgJ29rJzoge1xuICAgICAgICAgIGFyZ3M6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgRW1pdFJlY29yZDxrZXlvZiBCVG9hc3RFbWl0cyB8ICd1cGRhdGU6bW9kZWwtdmFsdWUnPixcbiAgICAgIHNsb3RzOiB7fSxcbiAgICB9LFxuICAgIEJUb2FzdE9yY2hlc3RyYXRvcjoge1xuICAgICAgc291cmNlUGF0aDogJy9CVG9hc3QvQlRvYXN0T3JjaGVzdHJhdG9yLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICB0ZWxlcG9ydFRvOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZyB8IFJlbmRlcmVyRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQnLFxuICAgICAgICAgIGRlZmF1bHQ6ICdib2R5JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ092ZXJyaWRlcyB0aGUgZGVmYXVsdCB0ZWxlcG9ydCBsb2NhdGlvbiBmb3IgdG9hc3RzLicsXG4gICAgICAgIH0sXG4gICAgICAgIHRlbGVwb3J0RGlzYWJsZWQ6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVycyB0aGUgdG9hc3RlciBpbiBpdHMgZGVmaW5lZCBsb2NhdGlvbiwgZGlzYWJsaW5nIHRlbGVwb3J0aW5nLicsXG4gICAgICAgIH0sXG4gICAgICAgIGFwcGVuZFRvYXN0OiB7XG4gICAgICAgICAgdHlwZTogJycsIC8vIFRPRE8gbWlzc2luZyB0eXBlXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJywgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJUb2FzdE9yY2hlc3RyYXRvclByb3BzPixcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7fSxcbiAgICB9LFxuICB9KSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFzQk8sSUFBTSwyQkFBMkI7OztBQ3RCa1gsSUFBTSxPQUFPLENBSXJhLFlBQ0EsZ0JBRUEsQ0FBQyxHQUFHLFdBQVcsRUFBRTtBQUFBLEVBQ2YsQ0FBQyxNQUFNLFNBQVM7QUFDZCxTQUFLLElBQUksSUFBSSxXQUFXLElBQUk7QUFDNUIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLENBQUM7QUFDSDtBQUVLLElBQU0sT0FBTyxDQUlsQixZQUNBLGdCQUVBLE9BQU8sS0FBSyxVQUFVLEVBQ25CLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQ3JFLE9BQU8sQ0FBQyxRQUFRLFNBQVMsRUFBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsV0FBVyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQXVCOzs7QUN0QjVGLElBQU0sY0FBYyxPQUNqQjtBQUFBLEVBQ0MsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxF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TixTQUFTO0FBQUE7QUFBQSxZQUNULGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQSxNQUFNO0FBQUEsWUFDSixNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsWUFDVCxhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0EsV0FBVztBQUFBLFlBQ1QsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFlBQ1QsYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBLFlBQVk7QUFBQSxZQUNWLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxZQUNULGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQSxjQUFjO0FBQUEsWUFDWixNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsWUFDVCxhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0EsWUFBWTtBQUFBLFlBQ1YsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFlBQ1QsYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBLGNBQWM7QUFBQSxZQUNaLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQTtBQUFBLFlBQ1QsYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBLGFBQWE7QUFBQSxZQUNYLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxZQUNULGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQSxXQUFXO0FBQUEsWUFDVCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsWUFDVCxhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0EsSUFBSTtBQUFBLFlBQ0YsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFlBQ1QsYUFDRTtBQUFBLFVBQ0o7QUFBQSxVQUNBLFVBQVU7QUFBQSxZQUNSLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQTtBQUFBLFlBQ1QsYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBLFVBQVU7QUFBQSxZQUNSLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQTtBQUFBLFlBQ1QsYUFDRTtBQUFBLFVBQ0o7QUFBQSxVQUNBLFlBQVk7QUFBQSxZQUNWLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQTtBQUFBLFlBQ1QsYUFDRTtBQUFBLFVBQ0o7QUFB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
