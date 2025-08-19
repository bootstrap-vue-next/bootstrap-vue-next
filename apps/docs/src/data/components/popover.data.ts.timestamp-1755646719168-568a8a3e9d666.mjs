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
var showHideSlotsData = {
  id: {
    type: 'string',
    description: 'Unique ID for the component',
  },
  show: {
    type: '() => void',
    description: 'Function to show the component',
  },
  hide: {
    type: '(trigger?: string, noTriggerEmit?: boolean) => void',
    description:
      'Function to hide the component. `trigger` is the trigger that caused the hide. `noTriggerEmit` prevents the emit of the trigger event.',
  },
  toggle: {
    type: '() => void',
    description: 'Function to toggle the component visibility',
  },
  active: {
    type: 'boolean',
    description: 'Indicates if the component is active (starting show, before/after animations)',
  },
  visible: {
    type: 'boolean',
    description: 'Indicates if the component is visible (shown)',
  },
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

// src/data/components/popover.data.ts
var popover_data_default = {
  load: () => ({
    BPopover: {
      styleSpec: {kind: 'OVERRIDE-CLASS' /* OverrideClass */, value: '.tooltip, .popover'},
      sourcePath: '/BPopover/BPopover.vue',
      props: {
        ...showHideProps,
        ...pick(
          buildCommonProps({
            placement: {
              type: 'PopoverPlacement',
              default: 'top',
            },
          }),
          ['bodyClass', 'id', 'placement', 'title', 'titleClass']
        ),
        boundary: {
          type: 'Boundary | RootBoundary',
          default: 'clippingAncestors',
          description:
            'The boundary constraint of the popover, using members of `Boundary` or `RootBoundary`.',
        },
        boundaryPadding: {
          type: 'Padding',
          default: void 0,
          description:
            'The number of pixels the popover stays away from the edge of the boundary element.',
        },
        body: {
          type: 'string',
          default: void 0,
          description: 'Text to place in the body of the popover.',
        },
        click: {
          type: 'boolean',
          default: void 0,
          description: 'Enable/disable click trigger. See [Triggers](#triggers) for details.',
        },
        focus: {
          type: 'boolean',
          default: void 0,
          description: 'Enable/disable focus trigger. See [Triggers](#triggers) for details.',
        },
        hover: {
          type: 'boolean',
          default: void 0,
          description: 'Enable/disable hover trigger. See [Triggers](#triggers) for details.',
        },
        delay: {
          type: 'number | { show: number; hide: number }',
          default: '() => ({show: 100, hide: 300})',
          // TODO item not in string format
          description:
            'Sets the show and hide delay. Use a number for both, or an object to set show and hide delays individually.',
        },
        floatingMiddleware: {
          type: 'Middleware[]',
          default: void 0,
          description: 'Directly sets the Floating UI middleware behavior.',
        },
        hideMargin: {
          type: 'number',
          default: 0,
          // TODO item not in string format
          description:
            'The margin applied when hiding the popover on pointer leave, specifying how far the pointer can move off the target before hiding.',
        },
        inline: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Improves positioning for inline reference elements spanning multiple lines (from Floating UI).',
        },
        manual: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Disables all triggers, requiring the programmatic API to show or hide the popover.',
        },
        noAutoClose: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Disables automatic closing on click outside or scroll out of view, overriding `closeOnHide`.',
        },
        noFlip: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Disables automatic flipping of the popover when it goes out of view.',
        },
        noHide: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Prevents the popover from hiding based on `boundary` or `rootBoundary` constraints.',
        },
        noShift: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Disables automatic shifting of the popover to keep it in view.',
        },
        noSize: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Disables automatic sizing of the popover to fit the clipping region.',
        },
        noninteractive: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Makes the popover non-interactive, preventing it from remaining open when hovered or focused.',
        },
        offset: {
          type: 'Numberish | null',
          default: null,
          // TODO item not in string format
          description:
            'Sets the offset of the popover in pixels from the target. If `null`, uses the size of the Bootstrap CSS arrow.',
        },
        realtime: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Updates the popover position on every animation frame if required. CPU-intensive; the default listens to browser events.',
        },
        reference: {
          type: 'string | ComponentPublicInstance | HTMLElement | null',
          default: null,
          // TODO item not in string format
          description:
            'The reference element to which the popover is anchored. If unspecified, the popover is positioned relative to the target element.',
        },
        strategy: {
          type: 'Strategy',
          default: 'absolute',
        },
        target: {
          type: 'string | ComponentPublicInstance | HTMLElement | null',
          default: null,
          // TODO item not in string format
          description:
            'The trigger and reference element for the popover, unless `reference` is defined.',
        },
        teleportDisabled: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Renders the popover in its defined location, disabling teleporting.',
        },
        teleportTo: {
          type: 'string | RendererElement | null | undefined',
          default: void 0,
          description: 'Overrides the default teleport location.',
        },
        tooltip: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Renders the popover as a tooltip (used internally by `BTooltip`).',
        },
        closeOnHide: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Closes the popover when the target is hidden, if `noAutoClose` is set.',
        },
      },
      emits: {
        ...showHideEmits,
        'blur': {
          description: 'Emitted when the target element loses focus.',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '',
              // TODO missing description
            },
          },
        },
        'click-outside': {
          description: 'Emitted when the mouse is clicked outside the popover.',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '',
              // TODO missing description
            },
          },
        },
        'close-on-hide': {
          description: 'Emitted when the popover is closed due to being clipped.',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '',
              // TODO missing description
            },
          },
        },
        'pointerleave': {
          description:
            'Emitted when the pointer leaves the target element, but not when leaving the popover element.',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '',
              // TODO missing description
            },
          },
        },
        'update:model-value': {
          description: 'Emitted when the visibility of the popover changes.',
          // TODO similar content to BAlert/update:model-value (similar purpose)
          args: {
            value: {
              type: 'boolean',
              description: 'New visibility state of the popover.',
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
      slots: {
        title: {
          description: 'Content for the popover title.',
          scope: showHideSlotsData,
        },
        default: {
          description: 'Content for the popover body.',
          scope: showHideSlotsData,
        },
        target: {
          description: 'Content for the target or trigger element.',
          scope: showHideSlotsData,
        },
      },
    },
  }),
}
export {popover_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL3Nob3dIaWRlRGF0YS50cyIsICJzcmMvdXRpbHMvb2JqZWN0VXRpbHMudHMiLCAic3JjL3V0aWxzL2NvbW1vblByb3BzLnRzIiwgInNyYy9kYXRhL2NvbXBvbmVudHMvcG9wb3Zlci5kYXRhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvc2hvd0hpZGVEYXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9zaG93SGlkZURhdGEudHNcIjtpbXBvcnQgdHlwZSB7c2hvd0hpZGV9IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB0eXBlIHtFbWl0UmVjb3JkLCBQcm9wUmVjb3JkLCBTbG90U2NvcGVSZWZlcmVuY2V9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3Qgc2hvd0hpZGVFbWl0cyA9IHtcbiAgJ2hpZGUnOiB7XG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFsd2F5cyBlbWl0cyBqdXN0IGJlZm9yZSB0aGUgY29tcG9uZW50IGhhcyBoaWRkZW4uIENhbmNlbGFibGUgKGFzIGxvbmcgYXMgY29tcG9uZW50IHdhc24ndCBmb3JjaWJseSBoaWRkZW4pXCIsXG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBoaWRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgJ2hpZGUtcHJldmVudGVkJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VtaXR0ZWQgd2hlbiB0aGUgY29tcG9uZW50IHRyaWVkIHRvIGNsb3NlLCBidXQgd2FzIHByZXZlbnRlZCBmcm9tIGNsb3NpbmcuICBUaGlzIG9jY3VycyB3aGVuIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBldmVudCwgdGhlIHVzZXIgY2xpY2tzIGVzY2FwZSBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZSwgb3IgdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBiYWNrZHJvcCBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZS4nLFxuICB9LFxuICAnaGlkZGVuJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiAnQWx3YXlzIGVtaXRzIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgaGlkZGVuJyxcbiAgfSxcbiAgJ3Nob3cnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBzaG93JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjogJ0Fsd2F5cyBlbWl0cyBqdXN0IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHNob3duLiBDYW5jZWxhYmxlJyxcbiAgfSxcbiAgJ3Nob3ctcHJldmVudGVkJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VtaXR0ZWQgd2hlbiB0aGUgY29tcG9uZW50IHRyaWVkIHRvIG9wZW4sIGJ1dCB3YXMgcHJldmVudGVkIGZyb20gb3BlbmluZy4gVGhpcyBvY2N1cnMgd2hlbiBwcmV2ZW50RGVmYXVsdCgpIGlzIGNhbGxlZCBvbiB0aGUgZXZlbnQnLFxuICB9LFxuICAnc2hvd24nOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246ICdBbHdheXMgZW1pdHMganVzdCBhZnRlciBjb21wb25lbnQgaXMgc2hvd24uJyxcbiAgfSxcbiAgJ3RvZ2dsZSc6IHtcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWx3YXlzIGVtaXRzIGp1c3QgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdG9nZ2xlZCB2aWEgdGhlIGV4cG9zZWQgJ3RvZ2dsZSgpJyBmdW5jdGlvbiBvciB1c2VUb2dnbGUgY29tcG9zYWJsZSAuIENhbmNlbGFibGUgKGFzIGxvbmcgYXMgY29tcG9uZW50IHdhc24ndCBmb3JjaWJseSBoaWRkZW4pXCIsXG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBoaWRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgJ3RvZ2dsZS1wcmV2ZW50ZWQnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRW1pdHRlZCB3aGVuIHRoZSBjb21wb25lbnQgdHJpZWQgdG8gdG9nZ2xlLCBidXQgd2FzIHByZXZlbnRlZCBmcm9tIGRvaW5nIHNvLiAgVGhpcyBvY2N1cnMgd2hlbiBwcmV2ZW50RGVmYXVsdCgpIGlzIGNhbGxlZCBvbiB0aGUgZXZlbnQsIHRoZSB1c2VyIGNsaWNrcyBlc2NhcGUgYW5kIG5vLWNsb3NlLW9uYmFja2Ryb3AgaXMgc2V0IHRvIHRydWUsIG9yIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYmFja2Ryb3AgYW5kIG5vLWNsb3NlLW9uYmFja2Ryb3AgaXMgc2V0IHRvIHRydWUuJyxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIEVtaXRSZWNvcmRcblxuZXhwb3J0IGNvbnN0IHNob3dIaWRlUHJvcHMgPSB7XG4gIGluaXRpYWxBbmltYXRpb246IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZW5hYmxlcyB0aGUgaW5pdGlhbCBhbmltYXRpb24gb24gbW91bnQnLFxuICB9LFxuICBsYXp5OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIHRoZSBjb250ZW50IHdpbGwgbm90IGJlIG1vdW50ZWQgdW50aWwgb3BlbmVkJyxcbiAgfSxcbiAgbW9kZWxWYWx1ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0NvbnRyb2xzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjb21wb25lbnQnLFxuICB9LFxuICBub0ZhZGU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdBbGlhcyBmb3IgYG5vQW5pbWF0aW9uYCcsXG4gIH0sXG4gIG5vQW5pbWF0aW9uOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGRpc2FibGVzIHRoZSBhbmltYXRpb24nLFxuICB9LFxuICBzaG93OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXaGVuIHNldCwgYW5kIHByb3AgJ3Zpc2libGUnIGlzIGZhbHNlIG9uIG1vdW50LCB3aWxsIGFuaW1hdGUgZnJvbSBjbG9zZWQgdG8gb3BlbiBvbiBpbml0aWFsIG1vdW50LiBNYWlubHkgdG8gaGVscCB3aXRoIHRlbXBsYXRlIHNob3cuIFVzZSBtb2RlbC12YWx1ZSBmb3IgcmVhY3RpdmUgc2hvdy9oaWRlXCIsXG4gIH0sXG4gIHRyYW5zUHJvcHM6IHtcbiAgICB0eXBlOiAnVHJhbnNpdGlvblByb3BzJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdUcmFuc2l0aW9uIHByb3BlcnRpZXMnLFxuICB9LFxuICB1bm1vdW50TGF6eToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IGFuZCBgbGF6eWAgaXMgdHJ1ZSwgdGhlIGNvbnRlbnQgd2lsbCBiZSB1bm1vdW50ZWQgd2hlbiBjbG9zZWQnLFxuICB9LFxuICB2aXNpYmxlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoZW4gJ3RydWUnLCBvcGVuIHdpdGhvdXQgYW5pbWF0aW9uXCIsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIHNob3dIaWRlIHwgJ21vZGVsVmFsdWUnPlxuXG5leHBvcnQgY29uc3Qgc2hvd0hpZGVTbG90c0RhdGEgPSB7XG4gIGlkOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVzY3JpcHRpb246ICdVbmlxdWUgSUQgZm9yIHRoZSBjb21wb25lbnQnLFxuICB9LFxuICBzaG93OiB7XG4gICAgdHlwZTogJygpID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnVuY3Rpb24gdG8gc2hvdyB0aGUgY29tcG9uZW50JyxcbiAgfSxcbiAgaGlkZToge1xuICAgIHR5cGU6ICcodHJpZ2dlcj86IHN0cmluZywgbm9UcmlnZ2VyRW1pdD86IGJvb2xlYW4pID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Z1bmN0aW9uIHRvIGhpZGUgdGhlIGNvbXBvbmVudC4gYHRyaWdnZXJgIGlzIHRoZSB0cmlnZ2VyIHRoYXQgY2F1c2VkIHRoZSBoaWRlLiBgbm9UcmlnZ2VyRW1pdGAgcHJldmVudHMgdGhlIGVtaXQgb2YgdGhlIHRyaWdnZXIgZXZlbnQuJyxcbiAgfSxcbiAgdG9nZ2xlOiB7XG4gICAgdHlwZTogJygpID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBjb21wb25lbnQgdmlzaWJpbGl0eScsXG4gIH0sXG4gIGFjdGl2ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZXNjcmlwdGlvbjogJ0luZGljYXRlcyBpZiB0aGUgY29tcG9uZW50IGlzIGFjdGl2ZSAoc3RhcnRpbmcgc2hvdywgYmVmb3JlL2FmdGVyIGFuaW1hdGlvbnMpJyxcbiAgfSxcbiAgdmlzaWJsZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZXNjcmlwdGlvbjogJ0luZGljYXRlcyBpZiB0aGUgY29tcG9uZW50IGlzIHZpc2libGUgKHNob3duKScsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBTbG90U2NvcGVSZWZlcmVuY2VcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL29iamVjdFV0aWxzLnRzXCI7ZXhwb3J0IGNvbnN0IHBpY2sgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IFBpY2s8QSwgQltudW1iZXJdPiA9PlxuICBbLi4ua2V5c1RvUGx1Y2tdLnJlZHVjZShcbiAgICAobWVtbywgcHJvcCkgPT4ge1xuICAgICAgbWVtb1twcm9wXSA9IG9ialRvUGx1Y2tbcHJvcF1cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSxcbiAgICB7fSBhcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+XG4gICkgYXMgUGljazxBLCBCW251bWJlcl0+XG5cbmV4cG9ydCBjb25zdCBvbWl0ID0gPFxuICBBIGV4dGVuZHMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPixcbiAgY29uc3QgQiBleHRlbmRzIFJlYWRvbmx5QXJyYXk8UHJvcGVydHlLZXk+LFxuPihcbiAgb2JqVG9QbHVjazogUmVhZG9ubHk8QT4sXG4gIGtleXNUb1BsdWNrOiBSZWFkb25seTxCPiB8IHJlYWRvbmx5IChrZXlvZiBBKVtdXG4pOiBPbWl0PEEsIEJbbnVtYmVyXT4gPT5cbiAgT2JqZWN0LmtleXMob2JqVG9QbHVjaylcbiAgICAuZmlsdGVyKChrZXkpID0+ICFrZXlzVG9QbHVjay5tYXAoKGVsKSA9PiBlbC50b1N0cmluZygpKS5pbmNsdWRlcyhrZXkpKVxuICAgIC5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiAoey4uLnJlc3VsdCwgW2tleV06IG9ialRvUGx1Y2tba2V5XX0pLCB7fSBhcyBPbWl0PEEsIEJbbnVtYmVyXT4pXG5cbi8vIENvbnZlcnRzIFBhc2NhbENhc2Ugb3IgY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcbmV4cG9ydCBjb25zdCBrZWJhYkNhc2UgPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC9cXEIoW0EtWl0pL2csICctJDEnKS50b0xvd2VyQ2FzZSgpXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2NvbW1vblByb3BzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9jb21tb25Qcm9wcy50c1wiO2ltcG9ydCB0eXBlIHtQcm9wUmVmZXJlbmNlfSBmcm9tICcuLi90eXBlcydcblxuY29uc3QgY29tbW9uUHJvcHMgPSAoKSA9PlxuICAoe1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIGB0cnVlYCwgcGxhY2VzIHRoZSBjb21wb25lbnQgaW4gdGhlIGFjdGl2ZSBzdGF0ZSB3aXRoIGFjdGl2ZSBzdHlsaW5nJyxcbiAgICB9LFxuICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiAnYWN0aXZlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkNvbmZpZ3VyZSB0aGUgYWN0aXZlIENTUyBjbGFzcyBhcHBsaWVkIHdoZW4gdGhlIGxpbmsgaXMgYWN0aXZlLiBUeXBpY2FsbHkgeW91IHdpbGwgd2FudCB0byBzZXQgdGhpcyB0byBjbGFzcyBuYW1lICdhY3RpdmUnXCIsXG4gICAgfSxcbiAgICBhbHQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1ZhbHVlIHRvIHNldCBmb3IgdGhlIGBhbHRgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhcmlhQ29udHJvbHM6IHtcbiAgICAgIHR5cGU6ICdBcmlhSW52YWxpZCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0lmIHRoaXMgY29tcG9uZW50IGNvbnRyb2xzIGFub3RoZXIgY29tcG9uZW50IG9yIGVsZW1lbnQsIHNldCB0aGlzIHRvIHRoZSBJRCBvZiB0aGUgY29udHJvbGxlZCBjb21wb25lbnQgb3IgZWxlbWVudCcsXG4gICAgfSxcbiAgICBhcmlhRGVzY3JpYmVkYnk6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIGRlc2NyaXB0aW9uIGZvciB0aGlzIGNvbXBvbmVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgYXJpYS1kZXNjcmliZWRieWAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGFyaWFJbnZhbGlkOiB7XG4gICAgICB0eXBlOiAnQXJpYUludmFsaWQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTZXRzIHRoZSBgYXJpYS1pbnZhbGlkYCBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIHdyYXBwZXIgZWxlbWVudC4gV2hlbiBub3QgcHJvdmlkZWQsIHRoZSBgc3RhdGVgIHByb3Agd2lsbCBjb250cm9sIHRoZSBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXV0b0Nsb3NlOiB7XG4gICAgICB0eXBlOiBcImJvb2xlYW4gfCAnaW5zaWRlJyB8ICdvdXRzaWRlJ1wiLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQ29udHJvbHMgdGhlIGF1dG9tYXRpYyBjbG9zaW5nIG9mIHRoZSBjb21wb25lbnQgd2hlbiBjbGlja2luZy4gU2VlIGFib3ZlIGZvciBkZXRhaWxzLicsXG4gICAgfSxcbiAgICBhdXRvY29tcGxldGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlICdhdXRvY29tcGxldGUnIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgZm9ybSBjb250cm9sXCIsXG4gICAgfSxcbiAgICBhcmlhTGFiZWw6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSB2YWx1ZSBvZiBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBlbGVtZW50JyxcbiAgICB9LFxuICAgIGFyaWFMaXZlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gdGhlIHJlbmRlcmVkIGVsZW1lbnQgaXMgYW4gYGFyaWEtbGl2ZWAgcmVnaW9uIChmb3Igc2NyZWVuIHJlYWRlciB1c2VycyksIHNldCB0byBlaXRoZXIgJ3BvbGl0ZScgb3IgJ2Fzc2VydGl2ZSdcIixcbiAgICB9LFxuICAgIGFyaWFMYWJlbGxlZGJ5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYSBsYWJlbCBmb3IgdGhpcyBjb21wb25lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYGFyaWEtbGFiZWxsZWRieWAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGF1dG9mb2N1czoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIGB0cnVlYCwgYXR0ZW1wdHMgdG8gYXV0by1mb2N1cyB0aGUgY29udHJvbCB3aGVuIGl0IGlzIG1vdW50ZWQsIG9yIHJlLWFjdGl2YXRlZCB3aGVuIGluIGEga2VlcC1hbGl2ZS4gRG9lcyBub3Qgc2V0IHRoZSBgYXV0b2ZvY3VzYCBhdHRyaWJ1dGUgb24gdGhlIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgYmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIGJhY2tncm91bmQgb2YgdGhlIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBib2R5QmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBib2R5Qm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IGJvcmRlcicsXG4gICAgfSxcbiAgICBib2R5Q2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib2R5VGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvZHlUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSB0ZXh0JyxcbiAgICB9LFxuICAgIGJvZHlWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib3JkZXInLFxuICAgIH0sXG4gICAgZGVib3VuY2U6IHtcbiAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgZGVmYXVsdDogJzAnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQgdG8gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGdyZWF0ZXIgdGhhbiB6ZXJvLCB3aWxsIGRlYm91bmNlIHRoZSB1c2VyIGlucHV0LiBIYXMgbm8gZWZmZWN0IGlmIHByb3AgJ2xhenknIGlzIHNldFwiLFxuICAgIH0sXG4gICAgZGVib3VuY2VNYXhXYWl0OiB7XG4gICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgIGRlZmF1bHQ6ICdOYU4nLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG1heGltdW0gdGltZSBpbiBtaWxsaXNlY29uZHMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCcncyBpbnZva2VkXCIsXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCB0byBgdHJ1ZWAsIGRpc2FibGVzIHRoZSBjb21wb25lbnQncyBmdW5jdGlvbmFsaXR5IGFuZCBwbGFjZXMgaXQgaW4gYSBkaXNhYmxlZCBzdGF0ZVwiLFxuICAgIH0sXG4gICAgZGlzYWJsZWRGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGlzYWJsZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGRpc2FibGVkIHN0YXRlJyxcbiAgICB9LFxuICAgIGZsb2F0aW5nOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQsIHJlbmRlcnMgYSBzaW5nbGUgY29udHJvbCBmb3JtIHdpdGggYSBmbG9hdGluZyBsYWJlbC4gVGhpcyBvbmx5IHdvcmtzIGZvciBmb3JtcyB3aGVyZSB0aGUgaW1tZWRpYXRlIGNoaWxkcmVuIGFyZSBhIGxhYmVsIGFuZCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBjb250cm9scy4gU2VlIGFib3ZlIGZvciBkZXRhaWxzLicsXG4gICAgfSxcblxuICAgIGZvb3Rlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlckJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBmb290ZXJCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBib3JkZXInLFxuICAgIH0sXG4gICAgZm9vdGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlclRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvb3RlclRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgdGV4dCcsXG4gICAgfSxcbiAgICBmb290ZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb3JtOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnSUQgb2YgdGhlIGZvcm0gdGhhdCB0aGUgZm9ybSBjb250cm9sIGJlbG9uZ3MgdG8uIFNldHMgdGhlIGBmb3JtYCBhdHRyaWJ1dGUgb24gdGhlIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgZm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnKHZhbDogc3RyaW5nLCBldnQ6IEV2ZW50KSA9PiBzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlZmVyZW5jZSB0byBhIGZ1bmN0aW9uIGZvciBmb3JtYXR0aW5nIHRoZSBpbnB1dCcsXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgaGVhZGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgYm9yZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIHRleHQnLFxuICAgIH0sXG4gICAgaGVhZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdVc2VkIHRvIHNldCB0aGUgYGlkYCBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGNvbnRlbnQsIGFuZCB1c2VkIGFzIHRoZSBiYXNlIHRvIGdlbmVyYXRlIGFueSBhZGRpdGlvbmFsIGVsZW1lbnQgSURzIGFzIG5lZWRlZCcsXG4gICAgfSxcbiAgICBsYXp5Rm9ybWF0dGVyOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCwgdGhlIGlucHV0IGlzIGZvcm1hdHRlZCBvbiBibHVyIGluc3RlYWQgb2YgZWFjaCBrZXlzdHJva2UgKGlmIHRoZXJlIGlzIGEgZm9ybWF0dGVyIHNwZWNpZmllZCknLFxuICAgIH0sXG4gICAgbGlua0NsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NsYXNzIG9yIGNsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGlubmVyIGxpbmsgZWxlbWVudCcsXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgSUQgb2YgdGhlIGFzc29jaWF0ZWQgZGF0YWxpc3QgZWxlbWVudCBvciBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHZhbHVlIG9mIHRoZSBgbmFtZWAgYXR0cmlidXRlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgbm9CYWNrZHJvcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgYmFja2Ryb3AnLFxuICAgIH0sXG4gICAgbm9FbGxpcHNpczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RvIG5vdCBzaG93IGVsbGlwc2lzIGJ1dHRvbnMnLFxuICAgIH0sXG4gICAgbm9Hb3RvRW5kQnV0dG9uczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0hpZGVzIHRoZSBnbyB0byBmaXJzdCBhbmQgZ28gdG8gbGFzdCBwYWdlIGJ1dHRvbnMnLFxuICAgIH0sXG4gICAgbm9IZWFkZXI6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlICBoZWFkZXInLFxuICAgIH0sXG4gICAgbm9IZWFkZXJDbG9zZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgaGVhZGVyIGNsb3NlIGJ1dHRvbicsXG4gICAgfSxcbiAgICBub0hvdmVyUGF1c2U6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byB0cnVlLCBkaXNhYmxlcyBwYXVzaW5nIHRoZSB0aW1lciBvbiBob3ZlciBiZWhhdmlvcicsXG4gICAgfSxcbiAgICBub1Jlc3VtZU9uSG92ZXJMZWF2ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0IHRvIHRydWUsIHRoZSB0aW1lciB3aWxsIG5vdCByZXN1bWUgd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBlbGVtZW50LiBJdCB3aWxsIG5lZWQgdG8gYmUgbWFudWFsbHkgcmVzdW1lZCcsXG4gICAgfSxcbiAgICBub3ZhbGlkYXRlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGRpc2FibGVzIGJyb3dzZXIgbmF0aXZlIEhUTUw1IHZhbGlkYXRpb24gb24gY29udHJvbHMgaW4gdGhlIGZvcm0nLFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogJ3JlYWRvbmx5IENoZWNrYm94T3B0aW9uUmF3W10nLFxuICAgICAgZGVmYXVsdDogJygpID0+IFtdJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXJyYXkgb2YgaXRlbXMgdG8gcmVuZGVyIGluIHRoZSBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgcGxhaW46IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXIgdGhlIGZvcm0gY29udHJvbCBpbiBwbGFpbiBtb2RlLCByYXRoZXIgdGhhbiBjdXN0b20gc3R5bGVkIG1vZGUnLFxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogXCInJ1wiLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHBsYWludGV4dDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU2V0IHRoZSBmb3JtIGNvbnRyb2wgYXMgcmVhZG9ubHkgYW5kIHJlbmRlcnMgdGhlIGNvbnRyb2wgdG8gbG9vayBsaWtlIHBsYWluIHRleHQgKG5vIGJvcmRlcnMpJyxcbiAgICB9LFxuICAgIHJlcXVpcmVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FkZHMgdGhlIGByZXF1aXJlZGAgYXR0cmlidXRlIHRvIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcmVhZG9ubHk6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGByZWFkb25seWAgYXR0cmlidXRlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIEFSSUEgYXR0cmlidXRlIGByb2xlYCB0byBhIHNwZWNpZmljIHZhbHVlJyxcbiAgICB9LFxuICAgIHJvdW5kZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4uIFRoZSBgc3F1YXJlYCBwcm9wIHRha2VzIHByZWNlZGVuY2UuIFJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzJyxcbiAgICB9LFxuICAgIHJvdW5kZWRCb3R0b206IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYGJvdHRvbWAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkRW5kOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBlbmRgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZFN0YXJ0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBzdGFydGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkVG9wOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGB0b3BgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogJ1NpemUnLFxuICAgICAgZGVmYXVsdDogJ21kJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNldCB0aGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50J3MgYXBwZWFyYW5jZS4gJ3NtJywgJ21kJyAoZGVmYXVsdCksIG9yICdsZydcIixcbiAgICB9LFxuICAgIHNyYzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VSTCB0byBzZXQgZm9yIHRoZSBgc3JjYCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgc3RhdGU6IHtcbiAgICAgIHR5cGU6ICdWYWxpZGF0aW9uU3RhdGUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb250cm9scyB0aGUgdmFsaWRhdGlvbiBzdGF0ZSBhcHBlYXJhbmNlIG9mIHRoZSBjb21wb25lbnQuIGB0cnVlYCBmb3IgdmFsaWQsIGBmYWxzZWAgZm9yIGludmFsaWQsIG9yIGBudWxsYCBmb3Igbm8gdmFsaWRhdGlvbiBzdGF0ZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgc3VidGl0bGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGVUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2g2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgc3VidGl0bGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGVUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6ICdib2R5LXNlY29uZGFyeScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIHN1YnRpdGxlIHRleHQnLFxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcnLFxuICAgIH0sXG4gICAgdGV4dEZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSB0ZXh0IGxhYmVsJyxcbiAgICB9LFxuICAgIHRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgdGV4dCcsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdGl0bGVDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0aXRsZVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnaDQnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVycyB0aGUgZmVlZGJhY2sgdGV4dCBpbiBhIHJ1ZGltZW50YXJ5IHRvb2x0aXAgc3R5bGUnLFxuICAgIH0sXG4gICAgdmFsaWRhdGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0LCBhZGRzIHRoZSBCb290c3RyYXAgY2xhc3MgJ3dhcy12YWxpZGF0ZWQnIG9uIHRoZSBmb3JtLCB0cmlnZ2VyaW5nIHRoZSBuYXRpdmUgYnJvd3NlciB2YWxpZGF0aW9uIHN0YXRlc1wiLFxuICAgIH0sXG4gICAgdmFsdWVGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndmFsdWUnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHZhbHVlJyxcbiAgICB9LFxuICAgIHZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGNvbXBvbmVudC4gV2hlbiBpbXBsZW1lbnRlZCBgYmctdmFyaWFudGAgYW5kIGB0ZXh0LXZhcmlhbnRgIHdpbGwgdGFrZSBwcmVjZWRlbmNlJyxcbiAgICB9LFxuICAgIHdyYXBwZXJBdHRyczoge1xuICAgICAgdHlwZTogJ1JlYWRvbmx5PEF0dHJzVmFsdWU+JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXR0cmlidXRlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSB3cmFwcGVyIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgd3JhcHBlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYWRkIHRvIHRoZSB3cmFwcGVyIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgcGxhY2VtZW50OiB7XG4gICAgICB0eXBlOiAnUGxhY2VtZW50JyxcbiAgICAgIGRlZmF1bHQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgZGVzY3JpcHRpb246ICdQbGFjZW1lbnQgb2YgYSBmbG9hdGluZyBlbGVtZW50JyxcbiAgICB9LFxuICB9KSBhcyBjb25zdFxuXG5jb25zdCBzaW5nbGV0b25Qcm9wcyA9IE9iamVjdC5mcmVlemUoY29tbW9uUHJvcHMoKSlcblxuZXhwb3J0IGNvbnN0IGJ1aWxkQ29tbW9uUHJvcHMgPSAoXG4gIG9iaj86IFBhcnRpYWw8UmVjb3JkPGtleW9mIHR5cGVvZiBzaW5nbGV0b25Qcm9wcywgUGFydGlhbDxQcm9wUmVmZXJlbmNlPj4+XG4pOiBSZWFkb25seTx0eXBlb2Ygc2luZ2xldG9uUHJvcHM+ID0+IHtcbiAgaWYgKCFvYmopIHJldHVybiBzaW5nbGV0b25Qcm9wc1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGNvbnN0IG15T2JqZWN0ID0gY29tbW9uUHJvcHMoKSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cbiAgLy8gTWVyZ2UgdGhlIHByb3ZpZGVkIG9iamVjdCBpbnRvIHRoZSBjb21tb24gcHJvcHNcbiAgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBteU9iamVjdFtrZXldID0ge1xuICAgICAgLi4ubXlPYmplY3Rba2V5XSxcbiAgICAgIC4uLnZhbHVlLFxuICAgIH1cbiAgfSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShteU9iamVjdCBhcyBhbnkpXG59XG5cbmV4cG9ydCBjb25zdCBjb21tb25FbWl0cyA9IHtcbiAgY2FuY2VsOiB7fSxcbiAgb2s6IHt9LFxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL3BvcG92ZXIuZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL3BvcG92ZXIuZGF0YS50c1wiO2ltcG9ydCB0eXBlIHtCUG9wb3ZlckVtaXRzLCBCUG9wb3ZlclByb3BzLCBCUG9wb3ZlclNsb3RzfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5pbXBvcnQge1xuICB0eXBlIENvbXBvbmVudFJlZmVyZW5jZSxcbiAgdHlwZSBFbWl0UmVjb3JkLFxuICB0eXBlIFByb3BSZWNvcmQsXG4gIHR5cGUgU2xvdFJlY29yZCxcbiAgU3R5bGVLaW5kLFxufSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB7c2hvd0hpZGVFbWl0cywgc2hvd0hpZGVQcm9wcywgc2hvd0hpZGVTbG90c0RhdGF9IGZyb20gJy4uLy4uL3V0aWxzL3Nob3dIaWRlRGF0YSdcbmltcG9ydCB7cGlja30gZnJvbSAnLi4vLi4vdXRpbHMvb2JqZWN0VXRpbHMnXG5pbXBvcnQge2J1aWxkQ29tbW9uUHJvcHN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vblByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWQ6ICgpOiBDb21wb25lbnRSZWZlcmVuY2UgPT4gKHtcbiAgICBCUG9wb3Zlcjoge1xuICAgICAgc3R5bGVTcGVjOiB7a2luZDogU3R5bGVLaW5kLk92ZXJyaWRlQ2xhc3MsIHZhbHVlOiAnLnRvb2x0aXAsIC5wb3BvdmVyJ30sXG4gICAgICBzb3VyY2VQYXRoOiAnL0JQb3BvdmVyL0JQb3BvdmVyLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5zaG93SGlkZVByb3BzLFxuICAgICAgICAuLi5waWNrKFxuICAgICAgICAgIGJ1aWxkQ29tbW9uUHJvcHMoe1xuICAgICAgICAgICAgcGxhY2VtZW50OiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdQb3BvdmVyUGxhY2VtZW50JyxcbiAgICAgICAgICAgICAgZGVmYXVsdDogJ3RvcCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFsnYm9keUNsYXNzJywgJ2lkJywgJ3BsYWNlbWVudCcsICd0aXRsZScsICd0aXRsZUNsYXNzJ11cbiAgICAgICAgKSxcbiAgICAgICAgYm91bmRhcnk6IHtcbiAgICAgICAgICB0eXBlOiAnQm91bmRhcnkgfCBSb290Qm91bmRhcnknLFxuICAgICAgICAgIGRlZmF1bHQ6ICdjbGlwcGluZ0FuY2VzdG9ycycsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnVGhlIGJvdW5kYXJ5IGNvbnN0cmFpbnQgb2YgdGhlIHBvcG92ZXIsIHVzaW5nIG1lbWJlcnMgb2YgYEJvdW5kYXJ5YCBvciBgUm9vdEJvdW5kYXJ5YC4nLFxuICAgICAgICB9LFxuICAgICAgICBib3VuZGFyeVBhZGRpbmc6IHtcbiAgICAgICAgICB0eXBlOiAnUGFkZGluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ1RoZSBudW1iZXIgb2YgcGl4ZWxzIHRoZSBwb3BvdmVyIHN0YXlzIGF3YXkgZnJvbSB0aGUgZWRnZSBvZiB0aGUgYm91bmRhcnkgZWxlbWVudC4nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCB0byBwbGFjZSBpbiB0aGUgYm9keSBvZiB0aGUgcG9wb3Zlci4nLFxuICAgICAgICB9LFxuICAgICAgICBjbGljazoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbmFibGUvZGlzYWJsZSBjbGljayB0cmlnZ2VyLiBTZWUgW1RyaWdnZXJzXSgjdHJpZ2dlcnMpIGZvciBkZXRhaWxzLicsXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VuYWJsZS9kaXNhYmxlIGZvY3VzIHRyaWdnZXIuIFNlZSBbVHJpZ2dlcnNdKCN0cmlnZ2VycykgZm9yIGRldGFpbHMuJyxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW5hYmxlL2Rpc2FibGUgaG92ZXIgdHJpZ2dlci4gU2VlIFtUcmlnZ2Vyc10oI3RyaWdnZXJzKSBmb3IgZGV0YWlscy4nLFxuICAgICAgICB9LFxuICAgICAgICBkZWxheToge1xuICAgICAgICAgIHR5cGU6ICdudW1iZXIgfCB7IHNob3c6IG51bWJlcjsgaGlkZTogbnVtYmVyIH0nLFxuICAgICAgICAgIGRlZmF1bHQ6ICcoKSA9PiAoe3Nob3c6IDEwMCwgaGlkZTogMzAwfSknLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdTZXRzIHRoZSBzaG93IGFuZCBoaWRlIGRlbGF5LiBVc2UgYSBudW1iZXIgZm9yIGJvdGgsIG9yIGFuIG9iamVjdCB0byBzZXQgc2hvdyBhbmQgaGlkZSBkZWxheXMgaW5kaXZpZHVhbGx5LicsXG4gICAgICAgIH0sXG4gICAgICAgIGZsb2F0aW5nTWlkZGxld2FyZToge1xuICAgICAgICAgIHR5cGU6ICdNaWRkbGV3YXJlW10nLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0RpcmVjdGx5IHNldHMgdGhlIEZsb2F0aW5nIFVJIG1pZGRsZXdhcmUgYmVoYXZpb3IuJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZU1hcmdpbjoge1xuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIGRlZmF1bHQ6IDAsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ1RoZSBtYXJnaW4gYXBwbGllZCB3aGVuIGhpZGluZyB0aGUgcG9wb3ZlciBvbiBwb2ludGVyIGxlYXZlLCBzcGVjaWZ5aW5nIGhvdyBmYXIgdGhlIHBvaW50ZXIgY2FuIG1vdmUgb2ZmIHRoZSB0YXJnZXQgYmVmb3JlIGhpZGluZy4nLFxuICAgICAgICB9LFxuICAgICAgICBpbmxpbmU6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0ltcHJvdmVzIHBvc2l0aW9uaW5nIGZvciBpbmxpbmUgcmVmZXJlbmNlIGVsZW1lbnRzIHNwYW5uaW5nIG11bHRpcGxlIGxpbmVzIChmcm9tIEZsb2F0aW5nIFVJKS4nLFxuICAgICAgICB9LFxuICAgICAgICBtYW51YWw6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0Rpc2FibGVzIGFsbCB0cmlnZ2VycywgcmVxdWlyaW5nIHRoZSBwcm9ncmFtbWF0aWMgQVBJIHRvIHNob3cgb3IgaGlkZSB0aGUgcG9wb3Zlci4nLFxuICAgICAgICB9LFxuICAgICAgICBub0F1dG9DbG9zZToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnRGlzYWJsZXMgYXV0b21hdGljIGNsb3Npbmcgb24gY2xpY2sgb3V0c2lkZSBvciBzY3JvbGwgb3V0IG9mIHZpZXcsIG92ZXJyaWRpbmcgYGNsb3NlT25IaWRlYC4nLFxuICAgICAgICB9LFxuICAgICAgICBub0ZsaXA6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgYXV0b21hdGljIGZsaXBwaW5nIG9mIHRoZSBwb3BvdmVyIHdoZW4gaXQgZ29lcyBvdXQgb2Ygdmlldy4nLFxuICAgICAgICB9LFxuICAgICAgICBub0hpZGU6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ1ByZXZlbnRzIHRoZSBwb3BvdmVyIGZyb20gaGlkaW5nIGJhc2VkIG9uIGBib3VuZGFyeWAgb3IgYHJvb3RCb3VuZGFyeWAgY29uc3RyYWludHMuJyxcbiAgICAgICAgfSxcbiAgICAgICAgbm9TaGlmdDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyBhdXRvbWF0aWMgc2hpZnRpbmcgb2YgdGhlIHBvcG92ZXIgdG8ga2VlcCBpdCBpbiB2aWV3LicsXG4gICAgICAgIH0sXG4gICAgICAgIG5vU2l6ZToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyBhdXRvbWF0aWMgc2l6aW5nIG9mIHRoZSBwb3BvdmVyIHRvIGZpdCB0aGUgY2xpcHBpbmcgcmVnaW9uLicsXG4gICAgICAgIH0sXG4gICAgICAgIG5vbmludGVyYWN0aXZlOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdNYWtlcyB0aGUgcG9wb3ZlciBub24taW50ZXJhY3RpdmUsIHByZXZlbnRpbmcgaXQgZnJvbSByZW1haW5pbmcgb3BlbiB3aGVuIGhvdmVyZWQgb3IgZm9jdXNlZC4nLFxuICAgICAgICB9LFxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICB0eXBlOiAnTnVtYmVyaXNoIHwgbnVsbCcsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbCwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnU2V0cyB0aGUgb2Zmc2V0IG9mIHRoZSBwb3BvdmVyIGluIHBpeGVscyBmcm9tIHRoZSB0YXJnZXQuIElmIGBudWxsYCwgdXNlcyB0aGUgc2l6ZSBvZiB0aGUgQm9vdHN0cmFwIENTUyBhcnJvdy4nLFxuICAgICAgICB9LFxuICAgICAgICByZWFsdGltZToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnVXBkYXRlcyB0aGUgcG9wb3ZlciBwb3NpdGlvbiBvbiBldmVyeSBhbmltYXRpb24gZnJhbWUgaWYgcmVxdWlyZWQuIENQVS1pbnRlbnNpdmU7IHRoZSBkZWZhdWx0IGxpc3RlbnMgdG8gYnJvd3NlciBldmVudHMuJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVmZXJlbmNlOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZyB8IENvbXBvbmVudFB1YmxpY0luc3RhbmNlIHwgSFRNTEVsZW1lbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIHBvcG92ZXIgaXMgYW5jaG9yZWQuIElmIHVuc3BlY2lmaWVkLCB0aGUgcG9wb3ZlciBpcyBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQgZWxlbWVudC4nLFxuICAgICAgICB9LFxuICAgICAgICBzdHJhdGVneToge1xuICAgICAgICAgIHR5cGU6ICdTdHJhdGVneScsXG4gICAgICAgICAgZGVmYXVsdDogJ2Fic29sdXRlJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZyB8IENvbXBvbmVudFB1YmxpY0luc3RhbmNlIHwgSFRNTEVsZW1lbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdUaGUgdHJpZ2dlciBhbmQgcmVmZXJlbmNlIGVsZW1lbnQgZm9yIHRoZSBwb3BvdmVyLCB1bmxlc3MgYHJlZmVyZW5jZWAgaXMgZGVmaW5lZC4nLFxuICAgICAgICB9LFxuICAgICAgICB0ZWxlcG9ydERpc2FibGVkOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlcnMgdGhlIHBvcG92ZXIgaW4gaXRzIGRlZmluZWQgbG9jYXRpb24sIGRpc2FibGluZyB0ZWxlcG9ydGluZy4nLFxuICAgICAgICB9LFxuICAgICAgICB0ZWxlcG9ydFRvOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZyB8IFJlbmRlcmVyRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ092ZXJyaWRlcyB0aGUgZGVmYXVsdCB0ZWxlcG9ydCBsb2NhdGlvbi4nLFxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlcnMgdGhlIHBvcG92ZXIgYXMgYSB0b29sdGlwICh1c2VkIGludGVybmFsbHkgYnkgYEJUb29sdGlwYCkuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VPbkhpZGU6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xvc2VzIHRoZSBwb3BvdmVyIHdoZW4gdGhlIHRhcmdldCBpcyBoaWRkZW4sIGlmIGBub0F1dG9DbG9zZWAgaXMgc2V0LicsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJQb3BvdmVyUHJvcHM+LFxuICAgICAgZW1pdHM6IHtcbiAgICAgICAgLi4uc2hvd0hpZGVFbWl0cyxcbiAgICAgICAgJ2JsdXInOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gdGhlIHRhcmdldCBlbGVtZW50IGxvc2VzIGZvY3VzLicsXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJywgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdjbGljay1vdXRzaWRlJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW1pdHRlZCB3aGVuIHRoZSBtb3VzZSBpcyBjbGlja2VkIG91dHNpZGUgdGhlIHBvcG92ZXIuJyxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLCAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2Nsb3NlLW9uLWhpZGUnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gdGhlIHBvcG92ZXIgaXMgY2xvc2VkIGR1ZSB0byBiZWluZyBjbGlwcGVkLicsXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJywgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdwb2ludGVybGVhdmUnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnRW1pdHRlZCB3aGVuIHRoZSBwb2ludGVyIGxlYXZlcyB0aGUgdGFyZ2V0IGVsZW1lbnQsIGJ1dCBub3Qgd2hlbiBsZWF2aW5nIHRoZSBwb3BvdmVyIGVsZW1lbnQuJyxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLCAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ3VwZGF0ZTptb2RlbC12YWx1ZSc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VtaXR0ZWQgd2hlbiB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcG9wb3ZlciBjaGFuZ2VzLicsIC8vIFRPRE8gc2ltaWxhciBjb250ZW50IHRvIEJBbGVydC91cGRhdGU6bW9kZWwtdmFsdWUgKHNpbWlsYXIgcHVycG9zZSlcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTmV3IHZpc2liaWxpdHkgc3RhdGUgb2YgdGhlIHBvcG92ZXIuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2NhbmNlbCc6IHtcbiAgICAgICAgICBhcmdzOiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgICAgJ29rJzoge1xuICAgICAgICAgIGFyZ3M6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgRW1pdFJlY29yZDxrZXlvZiBCUG9wb3ZlckVtaXRzIHwgJ3VwZGF0ZTptb2RlbC12YWx1ZSc+LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgZm9yIHRoZSBwb3BvdmVyIHRpdGxlLicsXG4gICAgICAgICAgc2NvcGU6IHNob3dIaWRlU2xvdHNEYXRhLFxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IGZvciB0aGUgcG9wb3ZlciBib2R5LicsXG4gICAgICAgICAgc2NvcGU6IHNob3dIaWRlU2xvdHNEYXRhLFxuICAgICAgICB9LFxuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgZm9yIHRoZSB0YXJnZXQgb3IgdHJpZ2dlciBlbGVtZW50LicsXG4gICAgICAgICAgc2NvcGU6IHNob3dIaWRlU2xvdHNEYXRhLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxr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QSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFD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
