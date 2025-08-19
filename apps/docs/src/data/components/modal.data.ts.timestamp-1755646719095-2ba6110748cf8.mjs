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

// src/data/components/modal.data.ts
var sharedSlots = {
  cancel: {
    type: 'Function',
    description:
      "Closes the modal and fires the 'cancel' and 'hide' events, with `bvModalEvent.trigger = 'cancel'`",
  },
  close: {
    type: 'Function',
    description:
      "Closes the modal and fires the 'close' and 'hide' events, with `bvModalEvent.trigger = 'headerclose'`",
    // TODO grammar check (should say "fires the 'close' and 'hide' events" for consistency with others)
  },
  hide: {
    type: 'Function',
    description:
      "Accepts one argument 'trigger'. Closes the modal and fires the 'hide' event, with `bvModalEvent.trigger = trigger` (`trigger` is optional)",
  },
  ok: {
    type: 'Function',
    description:
      "Closes the modal and fires the 'ok' and 'hide' events, with `bvModalEvent.trigger = 'ok'`",
  },
  visible: {
    type: 'boolean',
    description:
      "The visibility state of the modal. 'true' if the modal is visible and 'false' if not visible",
  },
}
var modal_data_default = {
  load: () => ({
    BModal: {
      sourcePath: '/BModal/BModal.vue',
      props: {
        ...showHideProps,
        ...pick(buildCommonProps(), ['id', 'noBackdrop', 'noHeader', 'noHeaderClose']),
        focus: {
          type: "'ok' | 'cancel' | 'close' | string | ComponentPublicInstance | HTMLElement | null",
          default: void 0,
          description:
            "Specify where to focus once modal opens. Can be built-in button: 'ok', 'cancel', or 'close'. Can be ref, HTMLElement, ID, or selector string. If set to 'false', no focus will be set (if noTrap isn't set, the focus trap will focus the modal element or fallback element). If set to a string, the element with that ID will be focused. If set to a ComponentPublicInstance, the $el property of the instance will be focused.",
          // TODO grammar check (should say "ID" instead of "id" for consistency; corrected "failback" to "fallback")
        },
        backdropFirst: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Animates the backdrop before the modal and, on leave, animates the modal before the backdrop',
          // TODO grammar check (rephrased for clarity and parallel structure)
        },
        body: {
          type: 'string',
          default: void 0,
          // TODO missing description
        },
        bodyAttrs: {
          type: 'Readonly<AttrsValue>',
          default: void 0,
          // TODO missing description
        },
        bodyBgVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description: 'Applies one of the Bootstrap theme color variants to the body background',
        },
        bodyClass: {
          type: 'ClassValue',
          default: null,
          // TODO item not in string format
          description: "CSS class (or classes) to apply to the '.modal-body' wrapper element",
        },
        bodyScrolling: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Enables or disables scrolling the body while the modal is open',
          // TODO grammar check (rephrased for consistency with other props)
        },
        bodyTextVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description: 'Applies one of the Bootstrap theme color variants to the body text',
        },
        bodyVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description:
            'Applies one of the Bootstrap theme color variants to the body (takes priority over bodyBgVariant and bodyTextVariant)',
          // TODO grammar check (simplified for brevity)
        },
        busy: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Places the built-in default footer OK and Cancel buttons in a disabled state',
          // TODO grammar check (should say "built-in" instead of "built in")
        },
        buttonSize: {
          type: 'Size',
          default: 'md',
          // TODO missing description
        },
        cancelClass: {
          type: 'ClassValue',
          default: void 0,
          description: "CSS class (or classes) to apply to the '.modal-cancel' button",
        },
        cancelDisabled: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Places the built-in default footer Cancel button in a disabled state',
          // TODO grammar check (should say "built-in" instead of "built in")
        },
        cancelTitle: {
          type: 'string',
          default: 'Cancel',
          description: 'Text to place in the default footer Cancel button',
          // TODO grammar check (simplified "Text string" to "Text")
        },
        cancelVariant: {
          type: 'ButtonVariant | null',
          default: 'secondary',
          description: 'Variant for the default footer Cancel button',
          // TODO grammar check (simplified for brevity)
        },
        centered: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Vertically centers the modal in the viewport',
        },
        contentClass: {
          type: 'ClassValue',
          default: void 0,
          description: "CSS class (or classes) to apply to the '.modal-content' wrapper element",
        },
        dialogClass: {
          type: 'ClassValue',
          default: void 0,
          description: "CSS class (or classes) to apply to the '.modal-dialog' wrapper element",
        },
        footerBgVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description: 'Applies one of the Bootstrap theme color variants to the footer background',
        },
        footerBorderVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description: 'Applies one of the Bootstrap theme color variants to the footer border',
        },
        footerClass: {
          type: 'ClassValue',
          default: void 0,
          description: "CSS class (or classes) to apply to the '.modal-footer' wrapper element",
        },
        footerTextVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description: 'Applies one of the Bootstrap theme color variants to the footer text',
        },
        footerVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description:
            'Applies one of the Bootstrap theme color variants to the footer (takes priority over footerBgVariant and footerTextVariant)',
          // TODO grammar check (simplified for brevity)
        },
        fullscreen: {
          type: 'boolean | Breakpoint',
          default: false,
          // TODO item not in string format
          description:
            "Enables full-screen mode with a boolean value or sets the breakpoint for full-screen mode below the specified breakpoint value ('sm', 'md', 'lg', 'xl', 'xxl')",
          // TODO grammar check (rephrased for clarity)
        },
        headerBgVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description: 'Applies one of the Bootstrap theme color variants to the header background',
        },
        headerBorderVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description: 'Applies one of the Bootstrap theme color variants to the header border',
        },
        headerClass: {
          type: 'ClassValue',
          default: void 0,
          description: "CSS class (or classes) to apply to the '.modal-header' wrapper element",
        },
        headerCloseClass: {
          type: 'ClassValue',
          default: void 0,
          description: 'CSS class (or classes) to apply to the header close button',
        },
        headerCloseLabel: {
          type: 'string',
          default: 'Close',
          description: 'Accessibility label for the header close button',
        },
        headerCloseVariant: {
          type: 'ButtonVariant | null',
          default: 'secondary',
          description: 'Variant for the header close button when using the header-close slot',
          // TODO grammar check (simplified for brevity)
        },
        headerTextVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description: 'Applies one of the Bootstrap theme color variants to the header text',
        },
        headerVariant: {
          type: 'ColorVariant | null',
          default: null,
          // TODO item not in string format
          description:
            'Applies one of the Bootstrap theme color variants to the header (takes priority over headerBgVariant and headerTextVariant)',
          // TODO grammar check (simplified for brevity)
        },
        noFooter: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Disables rendering of the modal footer',
        },
        modalClass: {
          type: 'ClassValue',
          default: void 0,
          description: "CSS class (or classes) to apply to the '.modal' wrapper element",
        },
        noCloseOnBackdrop: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Prevents closing the modal when clicking the backdrop outside the modal window',
          // TODO grammar check (rephrased for clarity)
        },
        noCloseOnEsc: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Prevents closing the modal by pressing the Esc key',
          // TODO grammar check (rephrased for clarity; "ESC" changed to "Esc" for consistency)
        },
        noStacking: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          // TODO missing description
        },
        noTrap: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Disables the focus trap feature',
        },
        okClass: {
          type: 'ClassValue',
          default: void 0,
          description: "CSS class (or classes) to apply to the '.modal-ok' button",
        },
        okDisabled: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Places the built-in default footer OK button in a disabled state',
          // TODO grammar check (should say "built-in" instead of "built in")
        },
        okOnly: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Disables rendering of the default footer Cancel button',
        },
        okTitle: {
          type: 'string',
          default: 'OK',
          description: 'Text to place in the default footer OK button',
          // TODO grammar check (simplified "Text string" to "Text")
        },
        okVariant: {
          type: 'ButtonVariant | null',
          default: 'primary',
          description: 'Button color theme variant for the default footer OK button',
          // TODO grammar check (simplified for brevity)
        },
        scrollable: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Enables scrolling of the modal body',
        },
        size: {
          type: "Size | 'xl'",
          default: 'md',
          description: "Sets the modal's width. Options: 'sm', 'md' (default), 'lg', or 'xl'",
          // TODO grammar check (rephrased for clarity)
        },
        teleportDisabled: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Renders the modal where it is defined, disabling teleport',
          // TODO grammar check (rephrased for clarity)
        },
        teleportTo: {
          type: 'string | RendererElement | null | undefined',
          default: 'body',
          description: 'Overrides the default teleport location',
        },
        title: {
          type: 'string',
          default: void 0,
          description: 'Text content for the modal title',
          // TODO grammar check (rephrased for clarity)
        },
        titleClass: {
          type: 'ClassValue',
          default: void 0,
          description: 'CSS class (or classes) to apply to the modal title',
          // TODO grammar check (rephrased for clarity)
        },
        titleVisuallyHidden: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: "Wraps the title in a '.visually-hidden' wrapper",
        },
        titleTag: {
          type: 'string',
          default: 'h5',
          description: 'HTML tag to render for the title instead of the default',
          // TODO grammar check (rephrased for clarity)
        },
      },
      emits: {
        ...showHideEmits,
        'update:model-value': {
          description: 'Emitted when the modal visibility changes',
          // TODO grammar check (should say "modal's visibility" for clarity)
          args: {
            value: {
              type: 'boolean',
              description: "The new value of the modal's visibility state",
              // TODO grammar check (should say "visibility state" instead of "visible state")
            },
          },
        },
        'ok': {
          description: 'Emitted when the default footer OK button is clicked. Cancelable',
          // TODO grammar check (rephrased for consistency)
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The OK button click event details',
              // TODO added description for clarity
            },
          },
        },
        'cancel': {
          description: 'Emitted when the default footer Cancel button is clicked. Cancelable',
          // TODO grammar check (rephrased for consistency)
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The Cancel button click event details',
              // TODO added description for clarity
            },
          },
        },
        'close': {
          description: 'Emitted when the default header close button is clicked. Cancelable',
          // TODO grammar check (rephrased for consistency)
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The close button click event details',
              // TODO added description for clarity
            },
          },
        },
        'backdrop': {
          description: 'Emitted when the backdrop is clicked. Cancelable',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The backdrop click event details',
              // TODO added description for clarity
            },
          },
        },
        'esc': {
          description: 'Emitted when the Esc key is pressed. Cancelable',
          // TODO grammar check (corrected "esc keyboard button is clicked" to "Esc key is pressed")
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The Esc key press event details',
              // TODO added description for clarity
            },
          },
        },
      },
      slots: {
        'backdrop': {
          description: 'Content for the modal backdrop',
          scope: {},
        },
        'cancel': {
          description: 'Content for the modal Cancel button. Optionally scoped',
          scope: sharedSlots,
        },
        'default': {
          description: 'Content for the modal body. Optionally scoped',
          scope: sharedSlots,
        },
        'footer': {
          description:
            'Content for the modal footer. Removes default OK and Cancel buttons. Optionally scoped',
          // TODO grammar check (rephrased for clarity)
          scope: sharedSlots,
        },
        'header': {
          description:
            'Content for the modal header. Removes the top-right close button. Optionally scoped',
          // TODO grammar check (rephrased for clarity)
          scope: sharedSlots,
        },
        'header-close': {
          description:
            "Content for the modal header close button. Not shown if the 'header' slot is used",
          // TODO grammar check (rephrased for clarity)
          scope: {},
        },
        'ok': {
          description: 'Content for the modal OK button. Optionally scoped',
          scope: sharedSlots,
        },
        'title': {
          description:
            "Content for the modal title. Not shown if the 'header' slot is used. Optionally scoped",
          // TODO grammar check (rephrased for clarity)
          scope: sharedSlots,
        },
      },
    },
  }),
}
export {modal_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL29iamVjdFV0aWxzLnRzIiwgInNyYy91dGlscy9jb21tb25Qcm9wcy50cyIsICJzcmMvdXRpbHMvc2hvd0hpZGVEYXRhLnRzIiwgInNyYy9kYXRhL2NvbXBvbmVudHMvbW9kYWwuZGF0YS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL29iamVjdFV0aWxzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9vYmplY3RVdGlscy50c1wiO2V4cG9ydCBjb25zdCBwaWNrID0gPFxuICBBIGV4dGVuZHMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPixcbiAgY29uc3QgQiBleHRlbmRzIFJlYWRvbmx5QXJyYXk8UHJvcGVydHlLZXk+LFxuPihcbiAgb2JqVG9QbHVjazogUmVhZG9ubHk8QT4sXG4gIGtleXNUb1BsdWNrOiBSZWFkb25seTxCPiB8IHJlYWRvbmx5IChrZXlvZiBBKVtdXG4pOiBQaWNrPEEsIEJbbnVtYmVyXT4gPT5cbiAgWy4uLmtleXNUb1BsdWNrXS5yZWR1Y2UoXG4gICAgKG1lbW8sIHByb3ApID0+IHtcbiAgICAgIG1lbW9bcHJvcF0gPSBvYmpUb1BsdWNrW3Byb3BdXG4gICAgICByZXR1cm4gbWVtb1xuICAgIH0sXG4gICAge30gYXMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPlxuICApIGFzIFBpY2s8QSwgQltudW1iZXJdPlxuXG5leHBvcnQgY29uc3Qgb21pdCA9IDxcbiAgQSBleHRlbmRzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj4sXG4gIGNvbnN0IEIgZXh0ZW5kcyBSZWFkb25seUFycmF5PFByb3BlcnR5S2V5Pixcbj4oXG4gIG9ialRvUGx1Y2s6IFJlYWRvbmx5PEE+LFxuICBrZXlzVG9QbHVjazogUmVhZG9ubHk8Qj4gfCByZWFkb25seSAoa2V5b2YgQSlbXVxuKTogT21pdDxBLCBCW251bWJlcl0+ID0+XG4gIE9iamVjdC5rZXlzKG9ialRvUGx1Y2spXG4gICAgLmZpbHRlcigoa2V5KSA9PiAha2V5c1RvUGx1Y2subWFwKChlbCkgPT4gZWwudG9TdHJpbmcoKSkuaW5jbHVkZXMoa2V5KSlcbiAgICAucmVkdWNlKChyZXN1bHQsIGtleSkgPT4gKHsuLi5yZXN1bHQsIFtrZXldOiBvYmpUb1BsdWNrW2tleV19KSwge30gYXMgT21pdDxBLCBCW251bWJlcl0+KVxuXG4vLyBDb252ZXJ0cyBQYXNjYWxDYXNlIG9yIGNhbWVsQ2FzZSB0byBrZWJhYi1jYXNlXG5leHBvcnQgY29uc3Qga2ViYWJDYXNlID0gKHN0cjogc3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvXFxCKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9jb21tb25Qcm9wcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvY29tbW9uUHJvcHMudHNcIjtpbXBvcnQgdHlwZSB7UHJvcFJlZmVyZW5jZX0gZnJvbSAnLi4vdHlwZXMnXG5cbmNvbnN0IGNvbW1vblByb3BzID0gKCkgPT5cbiAgKHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byBgdHJ1ZWAsIHBsYWNlcyB0aGUgY29tcG9uZW50IGluIHRoZSBhY3RpdmUgc3RhdGUgd2l0aCBhY3RpdmUgc3R5bGluZycsXG4gICAgfSxcbiAgICBhY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogJ2FjdGl2ZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZS4gVHlwaWNhbGx5IHlvdSB3aWxsIHdhbnQgdG8gc2V0IHRoaXMgdG8gY2xhc3MgbmFtZSAnYWN0aXZlJ1wiLFxuICAgIH0sXG4gICAgYWx0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdWYWx1ZSB0byBzZXQgZm9yIHRoZSBgYWx0YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXJpYUNvbnRyb2xzOiB7XG4gICAgICB0eXBlOiAnQXJpYUludmFsaWQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdJZiB0aGlzIGNvbXBvbmVudCBjb250cm9scyBhbm90aGVyIGNvbXBvbmVudCBvciBlbGVtZW50LCBzZXQgdGhpcyB0byB0aGUgSUQgb2YgdGhlIGNvbnRyb2xsZWQgY29tcG9uZW50IG9yIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgYXJpYURlc2NyaWJlZGJ5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYSBkZXNjcmlwdGlvbiBmb3IgdGhpcyBjb21wb25lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYGFyaWEtZGVzY3JpYmVkYnlgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhcmlhSW52YWxpZDoge1xuICAgICAgdHlwZTogJ0FyaWFJbnZhbGlkJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU2V0cyB0aGUgYGFyaWEtaW52YWxpZGAgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSB3cmFwcGVyIGVsZW1lbnQuIFdoZW4gbm90IHByb3ZpZGVkLCB0aGUgYHN0YXRlYCBwcm9wIHdpbGwgY29udHJvbCB0aGUgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGF1dG9DbG9zZToge1xuICAgICAgdHlwZTogXCJib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZSdcIixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRyb2xzIHRoZSBhdXRvbWF0aWMgY2xvc2luZyBvZiB0aGUgY29tcG9uZW50IHdoZW4gY2xpY2tpbmcuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgIH0sXG4gICAgYXV0b2NvbXBsZXRlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAnYXV0b2NvbXBsZXRlJyBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIGZvcm0gY29udHJvbFwiLFxuICAgIH0sXG4gICAgYXJpYUxhYmVsOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdmFsdWUgb2YgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgZWxlbWVudCcsXG4gICAgfSxcbiAgICBhcmlhTGl2ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHRoZSByZW5kZXJlZCBlbGVtZW50IGlzIGFuIGBhcmlhLWxpdmVgIHJlZ2lvbiAoZm9yIHNjcmVlbiByZWFkZXIgdXNlcnMpLCBzZXQgdG8gZWl0aGVyICdwb2xpdGUnIG9yICdhc3NlcnRpdmUnXCIsXG4gICAgfSxcbiAgICBhcmlhTGFiZWxsZWRieToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgbGFiZWwgZm9yIHRoaXMgY29tcG9uZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBhcmlhLWxhYmVsbGVkYnlgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhdXRvZm9jdXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byBgdHJ1ZWAsIGF0dGVtcHRzIHRvIGF1dG8tZm9jdXMgdGhlIGNvbnRyb2wgd2hlbiBpdCBpcyBtb3VudGVkLCBvciByZS1hY3RpdmF0ZWQgd2hlbiBpbiBhIGtlZXAtYWxpdmUuIERvZXMgbm90IHNldCB0aGUgYGF1dG9mb2N1c2AgYXR0cmlidXRlIG9uIHRoZSBjb250cm9sJyxcbiAgICB9LFxuICAgIGJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byBiYWNrZ3JvdW5kIG9mIHRoZSBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgYm9keUJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgYm9keUJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBib3JkZXInLFxuICAgIH0sXG4gICAgYm9keUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9keVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib2R5VGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgdGV4dCcsXG4gICAgfSxcbiAgICBib2R5VmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9yZGVyJyxcbiAgICB9LFxuICAgIGRlYm91bmNlOiB7XG4gICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgIGRlZmF1bHQ6ICcwJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0IHRvIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBncmVhdGVyIHRoYW4gemVybywgd2lsbCBkZWJvdW5jZSB0aGUgdXNlciBpbnB1dC4gSGFzIG5vIGVmZmVjdCBpZiBwcm9wICdsYXp5JyBpcyBzZXRcIixcbiAgICB9LFxuICAgIGRlYm91bmNlTWF4V2FpdDoge1xuICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICBkZWZhdWx0OiAnTmFOJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBtYXhpbXVtIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQnJ3MgaW52b2tlZFwiLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQgdG8gYHRydWVgLCBkaXNhYmxlcyB0aGUgY29tcG9uZW50J3MgZnVuY3Rpb25hbGl0eSBhbmQgcGxhY2VzIGl0IGluIGEgZGlzYWJsZWQgc3RhdGVcIixcbiAgICB9LFxuICAgIGRpc2FibGVkRmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2Rpc2FibGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBkaXNhYmxlZCBzdGF0ZScsXG4gICAgfSxcbiAgICBmbG9hdGluZzoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0LCByZW5kZXJzIGEgc2luZ2xlIGNvbnRyb2wgZm9ybSB3aXRoIGEgZmxvYXRpbmcgbGFiZWwuIFRoaXMgb25seSB3b3JrcyBmb3IgZm9ybXMgd2hlcmUgdGhlIGltbWVkaWF0ZSBjaGlsZHJlbiBhcmUgYSBsYWJlbCBhbmQgb25lIG9mIHRoZSBzdXBwb3J0ZWQgY29udHJvbHMuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgIH0sXG5cbiAgICBmb290ZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgZm9vdGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgYm9yZGVyJyxcbiAgICB9LFxuICAgIGZvb3RlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIHRleHQnLFxuICAgIH0sXG4gICAgZm9vdGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0lEIG9mIHRoZSBmb3JtIHRoYXQgdGhlIGZvcm0gY29udHJvbCBiZWxvbmdzIHRvLiBTZXRzIHRoZSBgZm9ybWAgYXR0cmlidXRlIG9uIHRoZSBjb250cm9sJyxcbiAgICB9LFxuICAgIGZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJyh2YWw6IHN0cmluZywgZXZ0OiBFdmVudCkgPT4gc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdSZWZlcmVuY2UgdG8gYSBmdW5jdGlvbiBmb3IgZm9ybWF0dGluZyB0aGUgaW5wdXQnLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyQmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGhlYWRlckJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIGJvcmRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciB0ZXh0JyxcbiAgICB9LFxuICAgIGhlYWRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVXNlZCB0byBzZXQgdGhlIGBpZGAgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBjb250ZW50LCBhbmQgdXNlZCBhcyB0aGUgYmFzZSB0byBnZW5lcmF0ZSBhbnkgYWRkaXRpb25hbCBlbGVtZW50IElEcyBhcyBuZWVkZWQnLFxuICAgIH0sXG4gICAgbGF6eUZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQsIHRoZSBpbnB1dCBpcyBmb3JtYXR0ZWQgb24gYmx1ciBpbnN0ZWFkIG9mIGVhY2gga2V5c3Ryb2tlIChpZiB0aGVyZSBpcyBhIGZvcm1hdHRlciBzcGVjaWZpZWQpJyxcbiAgICB9LFxuICAgIGxpbmtDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDbGFzcyBvciBjbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBpbm5lciBsaW5rIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIElEIG9mIHRoZSBhc3NvY2lhdGVkIGRhdGFsaXN0IGVsZW1lbnQgb3IgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYG5hbWVgIGF0dHJpYnV0ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIG5vQmFja2Ryb3A6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGJhY2tkcm9wJyxcbiAgICB9LFxuICAgIG5vRWxsaXBzaXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEbyBub3Qgc2hvdyBlbGxpcHNpcyBidXR0b25zJyxcbiAgICB9LFxuICAgIG5vR290b0VuZEJ1dHRvbnM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdIaWRlcyB0aGUgZ28gdG8gZmlyc3QgYW5kIGdvIHRvIGxhc3QgcGFnZSBidXR0b25zJyxcbiAgICB9LFxuICAgIG5vSGVhZGVyOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSAgaGVhZGVyJyxcbiAgICB9LFxuICAgIG5vSGVhZGVyQ2xvc2U6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGhlYWRlciBjbG9zZSBidXR0b24nLFxuICAgIH0sXG4gICAgbm9Ib3ZlclBhdXNlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgdG8gdHJ1ZSwgZGlzYWJsZXMgcGF1c2luZyB0aGUgdGltZXIgb24gaG92ZXIgYmVoYXZpb3InLFxuICAgIH0sXG4gICAgbm9SZXN1bWVPbkhvdmVyTGVhdmU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byB0cnVlLCB0aGUgdGltZXIgd2lsbCBub3QgcmVzdW1lIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgZWxlbWVudC4gSXQgd2lsbCBuZWVkIHRvIGJlIG1hbnVhbGx5IHJlc3VtZWQnLFxuICAgIH0sXG4gICAgbm92YWxpZGF0ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCBkaXNhYmxlcyBicm93c2VyIG5hdGl2ZSBIVE1MNSB2YWxpZGF0aW9uIG9uIGNvbnRyb2xzIGluIHRoZSBmb3JtJyxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6ICdyZWFkb25seSBDaGVja2JveE9wdGlvblJhd1tdJyxcbiAgICAgIGRlZmF1bHQ6ICcoKSA9PiBbXScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FycmF5IG9mIGl0ZW1zIHRvIHJlbmRlciBpbiB0aGUgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIHBsYWluOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVyIHRoZSBmb3JtIGNvbnRyb2wgaW4gcGxhaW4gbW9kZSwgcmF0aGVyIHRoYW4gY3VzdG9tIHN0eWxlZCBtb2RlJyxcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IFwiJydcIixcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICBwbGFpbnRleHQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NldCB0aGUgZm9ybSBjb250cm9sIGFzIHJlYWRvbmx5IGFuZCByZW5kZXJzIHRoZSBjb250cm9sIHRvIGxvb2sgbGlrZSBwbGFpbiB0ZXh0IChubyBib3JkZXJzKScsXG4gICAgfSxcbiAgICByZXF1aXJlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBZGRzIHRoZSBgcmVxdWlyZWRgIGF0dHJpYnV0ZSB0byB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBgcmVhZG9ubHlgIGF0dHJpYnV0ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBBUklBIGF0dHJpYnV0ZSBgcm9sZWAgdG8gYSBzcGVjaWZpYyB2YWx1ZScsXG4gICAgfSxcbiAgICByb3VuZGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuLiBUaGUgYHNxdWFyZWAgcHJvcCB0YWtlcyBwcmVjZWRlbmNlLiBSZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlscycsXG4gICAgfSxcbiAgICByb3VuZGVkQm90dG9tOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBib3R0b21gIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZEVuZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgZW5kYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRTdGFydDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgc3RhcnRgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZFRvcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgdG9wYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6ICdTaXplJyxcbiAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXQgdGhlIHNpemUgb2YgdGhlIGNvbXBvbmVudCdzIGFwcGVhcmFuY2UuICdzbScsICdtZCcgKGRlZmF1bHQpLCBvciAnbGcnXCIsXG4gICAgfSxcbiAgICBzcmM6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdVUkwgdG8gc2V0IGZvciB0aGUgYHNyY2AgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIHN0YXRlOiB7XG4gICAgICB0eXBlOiAnVmFsaWRhdGlvblN0YXRlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQ29udHJvbHMgdGhlIHZhbGlkYXRpb24gc3RhdGUgYXBwZWFyYW5jZSBvZiB0aGUgY29tcG9uZW50LiBgdHJ1ZWAgZm9yIHZhbGlkLCBgZmFsc2VgIGZvciBpbnZhbGlkLCBvciBgbnVsbGAgZm9yIG5vIHZhbGlkYXRpb24gc3RhdGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIHN1YnRpdGxlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdoNicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHN1YnRpdGxlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiAnYm9keS1zZWNvbmRhcnknLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBzdWJ0aXRsZSB0ZXh0JyxcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnJyxcbiAgICB9LFxuICAgIHRleHRGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdGV4dCBsYWJlbCcsXG4gICAgfSxcbiAgICB0ZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIHRleHQnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRpdGxlQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdGl0bGVUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2g0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlcnMgdGhlIGZlZWRiYWNrIHRleHQgaW4gYSBydWRpbWVudGFyeSB0b29sdGlwIHN0eWxlJyxcbiAgICB9LFxuICAgIHZhbGlkYXRlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCwgYWRkcyB0aGUgQm9vdHN0cmFwIGNsYXNzICd3YXMtdmFsaWRhdGVkJyBvbiB0aGUgZm9ybSwgdHJpZ2dlcmluZyB0aGUgbmF0aXZlIGJyb3dzZXIgdmFsaWRhdGlvbiBzdGF0ZXNcIixcbiAgICB9LFxuICAgIHZhbHVlRmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSB2YWx1ZScsXG4gICAgfSxcbiAgICB2YXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBjb21wb25lbnQuIFdoZW4gaW1wbGVtZW50ZWQgYGJnLXZhcmlhbnRgIGFuZCBgdGV4dC12YXJpYW50YCB3aWxsIHRha2UgcHJlY2VkZW5jZScsXG4gICAgfSxcbiAgICB3cmFwcGVyQXR0cnM6IHtcbiAgICAgIHR5cGU6ICdSZWFkb25seTxBdHRyc1ZhbHVlPicsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0F0dHJpYnV0ZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgd3JhcHBlciBlbGVtZW50JyxcbiAgICB9LFxuICAgIHdyYXBwZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFkZCB0byB0aGUgd3JhcHBlciBlbGVtZW50JyxcbiAgICB9LFxuICAgIHBsYWNlbWVudDoge1xuICAgICAgdHlwZTogJ1BsYWNlbWVudCcsXG4gICAgICBkZWZhdWx0OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGxhY2VtZW50IG9mIGEgZmxvYXRpbmcgZWxlbWVudCcsXG4gICAgfSxcbiAgfSkgYXMgY29uc3RcblxuY29uc3Qgc2luZ2xldG9uUHJvcHMgPSBPYmplY3QuZnJlZXplKGNvbW1vblByb3BzKCkpXG5cbmV4cG9ydCBjb25zdCBidWlsZENvbW1vblByb3BzID0gKFxuICBvYmo/OiBQYXJ0aWFsPFJlY29yZDxrZXlvZiB0eXBlb2Ygc2luZ2xldG9uUHJvcHMsIFBhcnRpYWw8UHJvcFJlZmVyZW5jZT4+PlxuKTogUmVhZG9ubHk8dHlwZW9mIHNpbmdsZXRvblByb3BzPiA9PiB7XG4gIGlmICghb2JqKSByZXR1cm4gc2luZ2xldG9uUHJvcHNcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBjb25zdCBteU9iamVjdCA9IGNvbW1vblByb3BzKCkgYXMgUmVjb3JkPHN0cmluZywgYW55PlxuXG4gIC8vIE1lcmdlIHRoZSBwcm92aWRlZCBvYmplY3QgaW50byB0aGUgY29tbW9uIHByb3BzXG4gIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgbXlPYmplY3Rba2V5XSA9IHtcbiAgICAgIC4uLm15T2JqZWN0W2tleV0sXG4gICAgICAuLi52YWx1ZSxcbiAgICB9XG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobXlPYmplY3QgYXMgYW55KVxufVxuXG5leHBvcnQgY29uc3QgY29tbW9uRW1pdHMgPSB7XG4gIGNhbmNlbDoge30sXG4gIG9rOiB7fSxcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvc2hvd0hpZGVEYXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9zaG93SGlkZURhdGEudHNcIjtpbXBvcnQgdHlwZSB7c2hvd0hpZGV9IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB0eXBlIHtFbWl0UmVjb3JkLCBQcm9wUmVjb3JkLCBTbG90U2NvcGVSZWZlcmVuY2V9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3Qgc2hvd0hpZGVFbWl0cyA9IHtcbiAgJ2hpZGUnOiB7XG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFsd2F5cyBlbWl0cyBqdXN0IGJlZm9yZSB0aGUgY29tcG9uZW50IGhhcyBoaWRkZW4uIENhbmNlbGFibGUgKGFzIGxvbmcgYXMgY29tcG9uZW50IHdhc24ndCBmb3JjaWJseSBoaWRkZW4pXCIsXG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBoaWRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgJ2hpZGUtcHJldmVudGVkJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VtaXR0ZWQgd2hlbiB0aGUgY29tcG9uZW50IHRyaWVkIHRvIGNsb3NlLCBidXQgd2FzIHByZXZlbnRlZCBmcm9tIGNsb3NpbmcuICBUaGlzIG9jY3VycyB3aGVuIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBldmVudCwgdGhlIHVzZXIgY2xpY2tzIGVzY2FwZSBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZSwgb3IgdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBiYWNrZHJvcCBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZS4nLFxuICB9LFxuICAnaGlkZGVuJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiAnQWx3YXlzIGVtaXRzIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgaGlkZGVuJyxcbiAgfSxcbiAgJ3Nob3cnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBzaG93JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjogJ0Fsd2F5cyBlbWl0cyBqdXN0IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHNob3duLiBDYW5jZWxhYmxlJyxcbiAgfSxcbiAgJ3Nob3ctcHJldmVudGVkJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VtaXR0ZWQgd2hlbiB0aGUgY29tcG9uZW50IHRyaWVkIHRvIG9wZW4sIGJ1dCB3YXMgcHJldmVudGVkIGZyb20gb3BlbmluZy4gVGhpcyBvY2N1cnMgd2hlbiBwcmV2ZW50RGVmYXVsdCgpIGlzIGNhbGxlZCBvbiB0aGUgZXZlbnQnLFxuICB9LFxuICAnc2hvd24nOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246ICdBbHdheXMgZW1pdHMganVzdCBhZnRlciBjb21wb25lbnQgaXMgc2hvd24uJyxcbiAgfSxcbiAgJ3RvZ2dsZSc6IHtcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWx3YXlzIGVtaXRzIGp1c3QgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdG9nZ2xlZCB2aWEgdGhlIGV4cG9zZWQgJ3RvZ2dsZSgpJyBmdW5jdGlvbiBvciB1c2VUb2dnbGUgY29tcG9zYWJsZSAuIENhbmNlbGFibGUgKGFzIGxvbmcgYXMgY29tcG9uZW50IHdhc24ndCBmb3JjaWJseSBoaWRkZW4pXCIsXG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBoaWRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgJ3RvZ2dsZS1wcmV2ZW50ZWQnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRW1pdHRlZCB3aGVuIHRoZSBjb21wb25lbnQgdHJpZWQgdG8gdG9nZ2xlLCBidXQgd2FzIHByZXZlbnRlZCBmcm9tIGRvaW5nIHNvLiAgVGhpcyBvY2N1cnMgd2hlbiBwcmV2ZW50RGVmYXVsdCgpIGlzIGNhbGxlZCBvbiB0aGUgZXZlbnQsIHRoZSB1c2VyIGNsaWNrcyBlc2NhcGUgYW5kIG5vLWNsb3NlLW9uYmFja2Ryb3AgaXMgc2V0IHRvIHRydWUsIG9yIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYmFja2Ryb3AgYW5kIG5vLWNsb3NlLW9uYmFja2Ryb3AgaXMgc2V0IHRvIHRydWUuJyxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIEVtaXRSZWNvcmRcblxuZXhwb3J0IGNvbnN0IHNob3dIaWRlUHJvcHMgPSB7XG4gIGluaXRpYWxBbmltYXRpb246IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZW5hYmxlcyB0aGUgaW5pdGlhbCBhbmltYXRpb24gb24gbW91bnQnLFxuICB9LFxuICBsYXp5OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIHRoZSBjb250ZW50IHdpbGwgbm90IGJlIG1vdW50ZWQgdW50aWwgb3BlbmVkJyxcbiAgfSxcbiAgbW9kZWxWYWx1ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0NvbnRyb2xzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjb21wb25lbnQnLFxuICB9LFxuICBub0ZhZGU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdBbGlhcyBmb3IgYG5vQW5pbWF0aW9uYCcsXG4gIH0sXG4gIG5vQW5pbWF0aW9uOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGRpc2FibGVzIHRoZSBhbmltYXRpb24nLFxuICB9LFxuICBzaG93OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXaGVuIHNldCwgYW5kIHByb3AgJ3Zpc2libGUnIGlzIGZhbHNlIG9uIG1vdW50LCB3aWxsIGFuaW1hdGUgZnJvbSBjbG9zZWQgdG8gb3BlbiBvbiBpbml0aWFsIG1vdW50LiBNYWlubHkgdG8gaGVscCB3aXRoIHRlbXBsYXRlIHNob3cuIFVzZSBtb2RlbC12YWx1ZSBmb3IgcmVhY3RpdmUgc2hvdy9oaWRlXCIsXG4gIH0sXG4gIHRyYW5zUHJvcHM6IHtcbiAgICB0eXBlOiAnVHJhbnNpdGlvblByb3BzJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdUcmFuc2l0aW9uIHByb3BlcnRpZXMnLFxuICB9LFxuICB1bm1vdW50TGF6eToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IGFuZCBgbGF6eWAgaXMgdHJ1ZSwgdGhlIGNvbnRlbnQgd2lsbCBiZSB1bm1vdW50ZWQgd2hlbiBjbG9zZWQnLFxuICB9LFxuICB2aXNpYmxlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoZW4gJ3RydWUnLCBvcGVuIHdpdGhvdXQgYW5pbWF0aW9uXCIsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIHNob3dIaWRlIHwgJ21vZGVsVmFsdWUnPlxuXG5leHBvcnQgY29uc3Qgc2hvd0hpZGVTbG90c0RhdGEgPSB7XG4gIGlkOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVzY3JpcHRpb246ICdVbmlxdWUgSUQgZm9yIHRoZSBjb21wb25lbnQnLFxuICB9LFxuICBzaG93OiB7XG4gICAgdHlwZTogJygpID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnVuY3Rpb24gdG8gc2hvdyB0aGUgY29tcG9uZW50JyxcbiAgfSxcbiAgaGlkZToge1xuICAgIHR5cGU6ICcodHJpZ2dlcj86IHN0cmluZywgbm9UcmlnZ2VyRW1pdD86IGJvb2xlYW4pID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Z1bmN0aW9uIHRvIGhpZGUgdGhlIGNvbXBvbmVudC4gYHRyaWdnZXJgIGlzIHRoZSB0cmlnZ2VyIHRoYXQgY2F1c2VkIHRoZSBoaWRlLiBgbm9UcmlnZ2VyRW1pdGAgcHJldmVudHMgdGhlIGVtaXQgb2YgdGhlIHRyaWdnZXIgZXZlbnQuJyxcbiAgfSxcbiAgdG9nZ2xlOiB7XG4gICAgdHlwZTogJygpID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBjb21wb25lbnQgdmlzaWJpbGl0eScsXG4gIH0sXG4gIGFjdGl2ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZXNjcmlwdGlvbjogJ0luZGljYXRlcyBpZiB0aGUgY29tcG9uZW50IGlzIGFjdGl2ZSAoc3RhcnRpbmcgc2hvdywgYmVmb3JlL2FmdGVyIGFuaW1hdGlvbnMpJyxcbiAgfSxcbiAgdmlzaWJsZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZXNjcmlwdGlvbjogJ0luZGljYXRlcyBpZiB0aGUgY29tcG9uZW50IGlzIHZpc2libGUgKHNob3duKScsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBTbG90U2NvcGVSZWZlcmVuY2VcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50cy9tb2RhbC5kYXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHMvbW9kYWwuZGF0YS50c1wiO2ltcG9ydCB0eXBlIHtCTW9kYWxFbWl0cywgQk1vZGFsUHJvcHMsIEJNb2RhbFNsb3RzfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5pbXBvcnQgdHlwZSB7XG4gIENvbXBvbmVudFJlZmVyZW5jZSxcbiAgRW1pdFJlY29yZCxcbiAgUHJvcFJlY29yZCxcbiAgU2xvdFJlY29yZCxcbiAgU2xvdFNjb3BlUmVmZXJlbmNlLFxufSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB7cGlja30gZnJvbSAnLi4vLi4vdXRpbHMvb2JqZWN0VXRpbHMnXG5pbXBvcnQge2J1aWxkQ29tbW9uUHJvcHN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vblByb3BzJ1xuaW1wb3J0IHtzaG93SGlkZUVtaXRzLCBzaG93SGlkZVByb3BzfSBmcm9tICcuLi8uLi91dGlscy9zaG93SGlkZURhdGEnXG5cbmNvbnN0IHNoYXJlZFNsb3RzOiBTbG90U2NvcGVSZWZlcmVuY2UgPSB7XG4gIGNhbmNlbDoge1xuICAgIHR5cGU6ICdGdW5jdGlvbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkNsb3NlcyB0aGUgbW9kYWwgYW5kIGZpcmVzIHRoZSAnY2FuY2VsJyBhbmQgJ2hpZGUnIGV2ZW50cywgd2l0aCBgYnZNb2RhbEV2ZW50LnRyaWdnZXIgPSAnY2FuY2VsJ2BcIixcbiAgfSxcbiAgY2xvc2U6IHtcbiAgICB0eXBlOiAnRnVuY3Rpb24nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJDbG9zZXMgdGhlIG1vZGFsIGFuZCBmaXJlcyB0aGUgJ2Nsb3NlJyBhbmQgJ2hpZGUnIGV2ZW50cywgd2l0aCBgYnZNb2RhbEV2ZW50LnRyaWdnZXIgPSAnaGVhZGVyY2xvc2UnYFwiLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCBzYXkgXCJmaXJlcyB0aGUgJ2Nsb3NlJyBhbmQgJ2hpZGUnIGV2ZW50c1wiIGZvciBjb25zaXN0ZW5jeSB3aXRoIG90aGVycylcbiAgfSxcbiAgaGlkZToge1xuICAgIHR5cGU6ICdGdW5jdGlvbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFjY2VwdHMgb25lIGFyZ3VtZW50ICd0cmlnZ2VyJy4gQ2xvc2VzIHRoZSBtb2RhbCBhbmQgZmlyZXMgdGhlICdoaWRlJyBldmVudCwgd2l0aCBgYnZNb2RhbEV2ZW50LnRyaWdnZXIgPSB0cmlnZ2VyYCAoYHRyaWdnZXJgIGlzIG9wdGlvbmFsKVwiLFxuICB9LFxuICBvazoge1xuICAgIHR5cGU6ICdGdW5jdGlvbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkNsb3NlcyB0aGUgbW9kYWwgYW5kIGZpcmVzIHRoZSAnb2snIGFuZCAnaGlkZScgZXZlbnRzLCB3aXRoIGBidk1vZGFsRXZlbnQudHJpZ2dlciA9ICdvaydgXCIsXG4gIH0sXG4gIHZpc2libGU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoZSB2aXNpYmlsaXR5IHN0YXRlIG9mIHRoZSBtb2RhbC4gJ3RydWUnIGlmIHRoZSBtb2RhbCBpcyB2aXNpYmxlIGFuZCAnZmFsc2UnIGlmIG5vdCB2aXNpYmxlXCIsXG4gIH0sXG59IGFzIGNvbnN0XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZDogKCk6IENvbXBvbmVudFJlZmVyZW5jZSA9PiAoe1xuICAgIEJNb2RhbDoge1xuICAgICAgc291cmNlUGF0aDogJy9CTW9kYWwvQk1vZGFsLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5zaG93SGlkZVByb3BzLFxuICAgICAgICAuLi5waWNrKGJ1aWxkQ29tbW9uUHJvcHMoKSwgWydpZCcsICdub0JhY2tkcm9wJywgJ25vSGVhZGVyJywgJ25vSGVhZGVyQ2xvc2UnXSksXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgdHlwZTogXCInb2snIHwgJ2NhbmNlbCcgfCAnY2xvc2UnIHwgc3RyaW5nIHwgQ29tcG9uZW50UHVibGljSW5zdGFuY2UgfCBIVE1MRWxlbWVudCB8IG51bGxcIixcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIlNwZWNpZnkgd2hlcmUgdG8gZm9jdXMgb25jZSBtb2RhbCBvcGVucy4gQ2FuIGJlIGJ1aWx0LWluIGJ1dHRvbjogJ29rJywgJ2NhbmNlbCcsIG9yICdjbG9zZScuIENhbiBiZSByZWYsIEhUTUxFbGVtZW50LCBJRCwgb3Igc2VsZWN0b3Igc3RyaW5nLiBJZiBzZXQgdG8gJ2ZhbHNlJywgbm8gZm9jdXMgd2lsbCBiZSBzZXQgKGlmIG5vVHJhcCBpc24ndCBzZXQsIHRoZSBmb2N1cyB0cmFwIHdpbGwgZm9jdXMgdGhlIG1vZGFsIGVsZW1lbnQgb3IgZmFsbGJhY2sgZWxlbWVudCkuIElmIHNldCB0byBhIHN0cmluZywgdGhlIGVsZW1lbnQgd2l0aCB0aGF0IElEIHdpbGwgYmUgZm9jdXNlZC4gSWYgc2V0IHRvIGEgQ29tcG9uZW50UHVibGljSW5zdGFuY2UsIHRoZSAkZWwgcHJvcGVydHkgb2YgdGhlIGluc3RhbmNlIHdpbGwgYmUgZm9jdXNlZC5cIiwgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaG91bGQgc2F5IFwiSURcIiBpbnN0ZWFkIG9mIFwiaWRcIiBmb3IgY29uc2lzdGVuY3k7IGNvcnJlY3RlZCBcImZhaWxiYWNrXCIgdG8gXCJmYWxsYmFja1wiKVxuICAgICAgICB9LFxuICAgICAgICBiYWNrZHJvcEZpcnN0OiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdBbmltYXRlcyB0aGUgYmFja2Ryb3AgYmVmb3JlIHRoZSBtb2RhbCBhbmQsIG9uIGxlYXZlLCBhbmltYXRlcyB0aGUgbW9kYWwgYmVmb3JlIHRoZSBiYWNrZHJvcCcsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBjbGFyaXR5IGFuZCBwYXJhbGxlbCBzdHJ1Y3R1cmUpXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHlBdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdSZWFkb25seTxBdHRyc1ZhbHVlPicsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgICBib2R5QmdWYXJpYW50OiB7XG4gICAgICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGwsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBiYWNrZ3JvdW5kJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keUNsYXNzOiB7XG4gICAgICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGwsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlICcubW9kYWwtYm9keScgd3JhcHBlciBlbGVtZW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHlTY3JvbGxpbmc6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW5hYmxlcyBvciBkaXNhYmxlcyBzY3JvbGxpbmcgdGhlIGJvZHkgd2hpbGUgdGhlIG1vZGFsIGlzIG9wZW4nLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY29uc2lzdGVuY3kgd2l0aCBvdGhlciBwcm9wcylcbiAgICAgICAgfSxcbiAgICAgICAgYm9keVRleHRWYXJpYW50OiB7XG4gICAgICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGwsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSB0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keVZhcmlhbnQ6IHtcbiAgICAgICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbCwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSAodGFrZXMgcHJpb3JpdHkgb3ZlciBib2R5QmdWYXJpYW50IGFuZCBib2R5VGV4dFZhcmlhbnQpJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaW1wbGlmaWVkIGZvciBicmV2aXR5KVxuICAgICAgICB9LFxuICAgICAgICBidXN5OiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdQbGFjZXMgdGhlIGJ1aWx0LWluIGRlZmF1bHQgZm9vdGVyIE9LIGFuZCBDYW5jZWwgYnV0dG9ucyBpbiBhIGRpc2FibGVkIHN0YXRlJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaG91bGQgc2F5IFwiYnVpbHQtaW5cIiBpbnN0ZWFkIG9mIFwiYnVpbHQgaW5cIilcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uU2l6ZToge1xuICAgICAgICAgIHR5cGU6ICdTaXplJyxcbiAgICAgICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgICAgIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgICBjYW5jZWxDbGFzczoge1xuICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgJy5tb2RhbC1jYW5jZWwnIGJ1dHRvblwiLFxuICAgICAgICB9LFxuICAgICAgICBjYW5jZWxEaXNhYmxlZDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQbGFjZXMgdGhlIGJ1aWx0LWluIGRlZmF1bHQgZm9vdGVyIENhbmNlbCBidXR0b24gaW4gYSBkaXNhYmxlZCBzdGF0ZScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2hvdWxkIHNheSBcImJ1aWx0LWluXCIgaW5zdGVhZCBvZiBcImJ1aWx0IGluXCIpXG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbFRpdGxlOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ0NhbmNlbCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdUZXh0IHRvIHBsYWNlIGluIHRoZSBkZWZhdWx0IGZvb3RlciBDYW5jZWwgYnV0dG9uJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaW1wbGlmaWVkIFwiVGV4dCBzdHJpbmdcIiB0byBcIlRleHRcIilcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdCdXR0b25WYXJpYW50IHwgbnVsbCcsXG4gICAgICAgICAgZGVmYXVsdDogJ3NlY29uZGFyeScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdWYXJpYW50IGZvciB0aGUgZGVmYXVsdCBmb290ZXIgQ2FuY2VsIGJ1dHRvbicsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2ltcGxpZmllZCBmb3IgYnJldml0eSlcbiAgICAgICAgfSxcbiAgICAgICAgY2VudGVyZWQ6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVmVydGljYWxseSBjZW50ZXJzIHRoZSBtb2RhbCBpbiB0aGUgdmlld3BvcnQnLFxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50Q2xhc3M6IHtcbiAgICAgICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlICcubW9kYWwtY29udGVudCcgd3JhcHBlciBlbGVtZW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGRpYWxvZ0NsYXNzOiB7XG4gICAgICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSAnLm1vZGFsLWRpYWxvZycgd3JhcHBlciBlbGVtZW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3RlckJnVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBiYWNrZ3JvdW5kJyxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBib3JkZXInLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJDbGFzczoge1xuICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgJy5tb2RhbC1mb290ZXInIHdyYXBwZXIgZWxlbWVudFwiLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJUZXh0VmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciB0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgKHRha2VzIHByaW9yaXR5IG92ZXIgZm9vdGVyQmdWYXJpYW50IGFuZCBmb290ZXJUZXh0VmFyaWFudCknLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNpbXBsaWZpZWQgZm9yIGJyZXZpdHkpXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxzY3JlZW46IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbiB8IEJyZWFrcG9pbnQnLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiRW5hYmxlcyBmdWxsLXNjcmVlbiBtb2RlIHdpdGggYSBib29sZWFuIHZhbHVlIG9yIHNldHMgdGhlIGJyZWFrcG9pbnQgZm9yIGZ1bGwtc2NyZWVuIG1vZGUgYmVsb3cgdGhlIHNwZWNpZmllZCBicmVha3BvaW50IHZhbHVlICgnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJylcIiwgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChyZXBocmFzZWQgZm9yIGNsYXJpdHkpXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlckJnVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBiYWNrZ3JvdW5kJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBib3JkZXInLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJDbGFzczoge1xuICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgJy5tb2RhbC1oZWFkZXInIHdyYXBwZXIgZWxlbWVudFwiLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJDbG9zZUNsYXNzOiB7XG4gICAgICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGhlYWRlciBjbG9zZSBidXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJDbG9zZUxhYmVsOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ0Nsb3NlJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FjY2Vzc2liaWxpdHkgbGFiZWwgZm9yIHRoZSBoZWFkZXIgY2xvc2UgYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyQ2xvc2VWYXJpYW50OiB7XG4gICAgICAgICAgdHlwZTogJ0J1dHRvblZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiAnc2Vjb25kYXJ5JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1ZhcmlhbnQgZm9yIHRoZSBoZWFkZXIgY2xvc2UgYnV0dG9uIHdoZW4gdXNpbmcgdGhlIGhlYWRlci1jbG9zZSBzbG90JywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaW1wbGlmaWVkIGZvciBicmV2aXR5KVxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJUZXh0VmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciB0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgKHRha2VzIHByaW9yaXR5IG92ZXIgaGVhZGVyQmdWYXJpYW50IGFuZCBoZWFkZXJUZXh0VmFyaWFudCknLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNpbXBsaWZpZWQgZm9yIGJyZXZpdHkpXG4gICAgICAgIH0sXG4gICAgICAgIG5vRm9vdGVyOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgbW9kYWwgZm9vdGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kYWxDbGFzczoge1xuICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgJy5tb2RhbCcgd3JhcHBlciBlbGVtZW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIG5vQ2xvc2VPbkJhY2tkcm9wOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdQcmV2ZW50cyBjbG9zaW5nIHRoZSBtb2RhbCB3aGVuIGNsaWNraW5nIHRoZSBiYWNrZHJvcCBvdXRzaWRlIHRoZSBtb2RhbCB3aW5kb3cnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY2xhcml0eSlcbiAgICAgICAgfSxcbiAgICAgICAgbm9DbG9zZU9uRXNjOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1ByZXZlbnRzIGNsb3NpbmcgdGhlIG1vZGFsIGJ5IHByZXNzaW5nIHRoZSBFc2Mga2V5JywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChyZXBocmFzZWQgZm9yIGNsYXJpdHk7IFwiRVNDXCIgY2hhbmdlZCB0byBcIkVzY1wiIGZvciBjb25zaXN0ZW5jeSlcbiAgICAgICAgfSxcbiAgICAgICAgbm9TdGFja2luZzoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIG5vVHJhcDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyB0aGUgZm9jdXMgdHJhcCBmZWF0dXJlJyxcbiAgICAgICAgfSxcbiAgICAgICAgb2tDbGFzczoge1xuICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgJy5tb2RhbC1vaycgYnV0dG9uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9rRGlzYWJsZWQ6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxhY2VzIHRoZSBidWlsdC1pbiBkZWZhdWx0IGZvb3RlciBPSyBidXR0b24gaW4gYSBkaXNhYmxlZCBzdGF0ZScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2hvdWxkIHNheSBcImJ1aWx0LWluXCIgaW5zdGVhZCBvZiBcImJ1aWx0IGluXCIpXG4gICAgICAgIH0sXG4gICAgICAgIG9rT25seToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGRlZmF1bHQgZm9vdGVyIENhbmNlbCBidXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICBva1RpdGxlOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ09LJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RleHQgdG8gcGxhY2UgaW4gdGhlIGRlZmF1bHQgZm9vdGVyIE9LIGJ1dHRvbicsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2ltcGxpZmllZCBcIlRleHQgc3RyaW5nXCIgdG8gXCJUZXh0XCIpXG4gICAgICAgIH0sXG4gICAgICAgIG9rVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdCdXR0b25WYXJpYW50IHwgbnVsbCcsXG4gICAgICAgICAgZGVmYXVsdDogJ3ByaW1hcnknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQnV0dG9uIGNvbG9yIHRoZW1lIHZhcmlhbnQgZm9yIHRoZSBkZWZhdWx0IGZvb3RlciBPSyBidXR0b24nLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNpbXBsaWZpZWQgZm9yIGJyZXZpdHkpXG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbGFibGU6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW5hYmxlcyBzY3JvbGxpbmcgb2YgdGhlIG1vZGFsIGJvZHknLFxuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgdHlwZTogXCJTaXplIHwgJ3hsJ1wiLFxuICAgICAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgbW9kYWwncyB3aWR0aC4gT3B0aW9uczogJ3NtJywgJ21kJyAoZGVmYXVsdCksICdsZycsIG9yICd4bCdcIiwgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChyZXBocmFzZWQgZm9yIGNsYXJpdHkpXG4gICAgICAgIH0sXG4gICAgICAgIHRlbGVwb3J0RGlzYWJsZWQ6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVycyB0aGUgbW9kYWwgd2hlcmUgaXQgaXMgZGVmaW5lZCwgZGlzYWJsaW5nIHRlbGVwb3J0JywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChyZXBocmFzZWQgZm9yIGNsYXJpdHkpXG4gICAgICAgIH0sXG4gICAgICAgIHRlbGVwb3J0VG86IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nIHwgUmVuZGVyZXJFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCcsXG4gICAgICAgICAgZGVmYXVsdDogJ2JvZHknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IHRlbGVwb3J0IGxvY2F0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgZm9yIHRoZSBtb2RhbCB0aXRsZScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBjbGFyaXR5KVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZUNsYXNzOiB7XG4gICAgICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIG1vZGFsIHRpdGxlJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChyZXBocmFzZWQgZm9yIGNsYXJpdHkpXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlVmlzdWFsbHlIaWRkZW46IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIldyYXBzIHRoZSB0aXRsZSBpbiBhICcudmlzdWFsbHktaGlkZGVuJyB3cmFwcGVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlVGFnOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ2g1JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hUTUwgdGFnIHRvIHJlbmRlciBmb3IgdGhlIHRpdGxlIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY2xhcml0eSlcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQk1vZGFsUHJvcHM+LFxuICAgICAgZW1pdHM6IHtcbiAgICAgICAgLi4uc2hvd0hpZGVFbWl0cyxcbiAgICAgICAgJ3VwZGF0ZTptb2RlbC12YWx1ZSc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VtaXR0ZWQgd2hlbiB0aGUgbW9kYWwgdmlzaWJpbGl0eSBjaGFuZ2VzJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaG91bGQgc2F5IFwibW9kYWwncyB2aXNpYmlsaXR5XCIgZm9yIGNsYXJpdHkpXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbmV3IHZhbHVlIG9mIHRoZSBtb2RhbCdzIHZpc2liaWxpdHkgc3RhdGVcIiwgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaG91bGQgc2F5IFwidmlzaWJpbGl0eSBzdGF0ZVwiIGluc3RlYWQgb2YgXCJ2aXNpYmxlIHN0YXRlXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdvayc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VtaXR0ZWQgd2hlbiB0aGUgZGVmYXVsdCBmb290ZXIgT0sgYnV0dG9uIGlzIGNsaWNrZWQuIENhbmNlbGFibGUnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY29uc2lzdGVuY3kpXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIE9LIGJ1dHRvbiBjbGljayBldmVudCBkZXRhaWxzJywgLy8gVE9ETyBhZGRlZCBkZXNjcmlwdGlvbiBmb3IgY2xhcml0eVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnY2FuY2VsJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW1pdHRlZCB3aGVuIHRoZSBkZWZhdWx0IGZvb3RlciBDYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuIENhbmNlbGFibGUnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY29uc2lzdGVuY3kpXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIENhbmNlbCBidXR0b24gY2xpY2sgZXZlbnQgZGV0YWlscycsIC8vIFRPRE8gYWRkZWQgZGVzY3JpcHRpb24gZm9yIGNsYXJpdHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2Nsb3NlJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW1pdHRlZCB3aGVuIHRoZSBkZWZhdWx0IGhlYWRlciBjbG9zZSBidXR0b24gaXMgY2xpY2tlZC4gQ2FuY2VsYWJsZScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAocmVwaHJhc2VkIGZvciBjb25zaXN0ZW5jeSlcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgY2xvc2UgYnV0dG9uIGNsaWNrIGV2ZW50IGRldGFpbHMnLCAvLyBUT0RPIGFkZGVkIGRlc2NyaXB0aW9uIGZvciBjbGFyaXR5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdiYWNrZHJvcCc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VtaXR0ZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC4gQ2FuY2VsYWJsZScsXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJhY2tkcm9wIGNsaWNrIGV2ZW50IGRldGFpbHMnLCAvLyBUT0RPIGFkZGVkIGRlc2NyaXB0aW9uIGZvciBjbGFyaXR5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdlc2MnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gdGhlIEVzYyBrZXkgaXMgcHJlc3NlZC4gQ2FuY2VsYWJsZScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoY29ycmVjdGVkIFwiZXNjIGtleWJvYXJkIGJ1dHRvbiBpcyBjbGlja2VkXCIgdG8gXCJFc2Mga2V5IGlzIHByZXNzZWRcIilcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgRXNjIGtleSBwcmVzcyBldmVudCBkZXRhaWxzJywgLy8gVE9ETyBhZGRlZCBkZXNjcmlwdGlvbiBmb3IgY2xhcml0eVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgRW1pdFJlY29yZDxrZXlvZiBCTW9kYWxFbWl0cyB8ICd1cGRhdGU6bW9kZWwtdmFsdWUnPixcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgICdiYWNrZHJvcCc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgZm9yIHRoZSBtb2RhbCBiYWNrZHJvcCcsXG4gICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICB9LFxuICAgICAgICAnY2FuY2VsJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCBmb3IgdGhlIG1vZGFsIENhbmNlbCBidXR0b24uIE9wdGlvbmFsbHkgc2NvcGVkJyxcbiAgICAgICAgICBzY29wZTogc2hhcmVkU2xvdHMsXG4gICAgICAgIH0sXG4gICAgICAgICdkZWZhdWx0Jzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCBmb3IgdGhlIG1vZGFsIGJvZHkuIE9wdGlvbmFsbHkgc2NvcGVkJyxcbiAgICAgICAgICBzY29wZTogc2hhcmVkU2xvdHMsXG4gICAgICAgIH0sXG4gICAgICAgICdmb290ZXInOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnQ29udGVudCBmb3IgdGhlIG1vZGFsIGZvb3Rlci4gUmVtb3ZlcyBkZWZhdWx0IE9LIGFuZCBDYW5jZWwgYnV0dG9ucy4gT3B0aW9uYWxseSBzY29wZWQnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY2xhcml0eSlcbiAgICAgICAgICBzY29wZTogc2hhcmVkU2xvdHMsXG4gICAgICAgIH0sXG4gICAgICAgICdoZWFkZXInOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnQ29udGVudCBmb3IgdGhlIG1vZGFsIGhlYWRlci4gUmVtb3ZlcyB0aGUgdG9wLXJpZ2h0IGNsb3NlIGJ1dHRvbi4gT3B0aW9uYWxseSBzY29wZWQnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY2xhcml0eSlcbiAgICAgICAgICBzY29wZTogc2hhcmVkU2xvdHMsXG4gICAgICAgIH0sXG4gICAgICAgICdoZWFkZXItY2xvc2UnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkNvbnRlbnQgZm9yIHRoZSBtb2RhbCBoZWFkZXIgY2xvc2UgYnV0dG9uLiBOb3Qgc2hvd24gaWYgdGhlICdoZWFkZXInIHNsb3QgaXMgdXNlZFwiLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHJlcGhyYXNlZCBmb3IgY2xhcml0eSlcbiAgICAgICAgICBzY29wZToge30sXG4gICAgICAgIH0sXG4gICAgICAgICdvayc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgZm9yIHRoZSBtb2RhbCBPSyBidXR0b24uIE9wdGlvbmFsbHkgc2NvcGVkJyxcbiAgICAgICAgICBzY29wZTogc2hhcmVkU2xvdHMsXG4gICAgICAgIH0sXG4gICAgICAgICd0aXRsZSc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiQ29udGVudCBmb3IgdGhlIG1vZGFsIHRpdGxlLiBOb3Qgc2hvd24gaWYgdGhlICdoZWFkZXInIHNsb3QgaXMgdXNlZC4gT3B0aW9uYWxseSBzY29wZWRcIiwgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChyZXBocmFzZWQgZm9yIGNsYXJpdHkpXG4gICAgICAgICAgc2NvcGU6IHNoYXJlZFNsb3RzLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCTW9kYWxTbG90cz4sXG4gICAgfSxcbiAgfSksXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBaLElBQU0sT0FBTyxDQUlyYSxZQUNBLGdCQUVBLENBQUMsR0FBRyxXQUFXLEVBQUU7QUFBQSxFQUNmLENBQUMsTUFBTSxTQUFTO0FBQ2QsU0FBSyxJQUFJLElBQUksV0FBVyxJQUFJO0FBQzVCLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxDQUFDO0FBQ0g7OztBQ1hGLElBQU0sY0FBYyxPQUNqQjtBQUFBLEVBQ0MsUUFBUTtBQUFBLElBQ04s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
