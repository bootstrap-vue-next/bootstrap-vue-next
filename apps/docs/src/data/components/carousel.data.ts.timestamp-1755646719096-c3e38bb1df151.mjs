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

// src/data/components/carousel.data.ts
var carousel_data_default = {
  load: () => ({
    BCarousel: {
      sourcePath: '/BCarousel/BCarousel.vue',
      props: {
        ...pick(buildCommonProps(), ['id']),
        background: {
          type: 'string',
          default: void 0,
          description: "Set the CSS color of the carousel's background",
        },
        controls: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Enable the previous and next controls',
        },
        controlsNextText: {
          type: 'string',
          default: 'Next',
          description: 'Set the text for the "Next" control',
        },
        controlsPrevText: {
          type: 'string',
          default: 'Previous',
          description: 'Set the text for the "Previous" control',
        },
        fade: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'When set, changes the slide animation to a crossfade instead of a sliding effect',
        },
        imgHeight: {
          type: 'string',
          default: void 0,
          description: "Set the default image 'height' attribute for all b-tab children",
          // TODO grammar check (should say "b-carousel-slide children" instead of "b-tab children")
        },
        imgWidth: {
          type: 'string',
          default: void 0,
          description: "Set the default image 'width' attribute for all b-tab children",
          // TODO grammar check (should say "b-carousel-slide children" instead of "b-tab children")
        },
        indicators: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Enable the indicator buttons for jumping to specific slides',
        },
        indicatorsButtonLabel: {
          type: 'string',
          default: 'Slide',
          description: 'Set the aria-label for the indicator buttons',
        },
        interval: {
          type: 'number',
          default: 5e3,
          // TODO item not in string format
          description: 'Set the delay time (in milliseconds) between slides',
        },
        keyboard: {
          type: 'boolean',
          default: true,
          // TODO item not in string format
          description: 'Enable keyboard navigation with the right and left arrow keys',
        },
        labelIndicators: {
          type: 'string',
          default: 'Select a slide to display',
          description: 'Set the aria-label for the indicators',
        },
        modelValue: {
          type: 'number',
          default: 0,
          // TODO item not in string format
          description: 'The index of the currently active slide',
        },
        noAnimation: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'When set, disables the animation',
        },
        noHoverPause: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'When set, disables the pausing of the slide show when the current slide is hovered',
        },
        noTouch: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Disable controlling the slides via touch swipes',
        },
        noWrap: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Do not restart the slide show when then end is reached',
          // TODO grammar check (typo: "then" should be "the")
        },
        ride: {
          type: "boolean | 'carousel'",
          default: false,
          // TODO item not in string format
          description:
            'Set to "carousel" to animate slides automatically, true to animate on first interaction, false to disable animation',
        },
        rideReverse: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'When set, the carousel will animate in the reverse direction',
        },
        touchThreshold: {
          type: 'Numberish',
          default: 50,
          // TODO item not in string format
          description:
            'The minimum distance the touch swipe must move to prevent the slide show from being paused',
        },
      },
      emits: {
        'update:model-value': {
          description: 'Standard event to update the v-model',
          // TODO similar content to BAlert/update:model-value (identical description)
          args: {
            'update:model-value': {
              description: 'modelValue',
              type: 'number',
            },
          },
        },
        'slide': {
          description: 'Fires immediately when the carousel starts its slide transition.',
          args: {
            value: {
              type: 'BvCarouselEvent',
              description: 'Indicates the slide `direction`, `from`, and `to` indices',
            },
          },
        },
        'slid': {
          description: 'Fired when the carousel has completed its slide transition.',
          args: {
            value: {
              type: 'BvCarouselEvent',
              description: 'Indicates the slide `direction`, `from`, and `to` indices',
            },
          },
        },
        'prev-click': {
          description: '',
          // TODO missing description
          args: {
            click: {
              description: 'Native click event',
              type: 'MouseEvent',
            },
          },
        },
        'next-click': {
          description: '',
          // TODO missing description
          args: {
            click: {
              description: 'Native click event',
              type: 'MouseEvent',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content (slides) to place in the carousel',
        },
      },
    },
    BCarouselSlide: {
      styleSpec: {kind: 'OVERRIDE-CLASS' /* OverrideClass */, value: '.carousel-item'},
      sourcePath: '/BCarousel/BCarouselSlide.vue',
      props: {
        ...pick(buildCommonProps(), ['id']),
        background: {
          type: 'string',
          default: void 0,
          description: "CSS color to use as the slide's background color",
          // TODO similar content to BCarousel/background (similar description)
        },
        caption: {
          type: 'string',
          default: void 0,
          description: 'Text content to place in the caption',
        },
        captionTag: {
          type: 'string',
          default: 'h3',
          description:
            'Specify the HTML tag to render instead of the default tag for the caption wrapper',
        },
        contentTag: {
          type: 'string',
          default: 'div',
          description:
            'Specify the HTML tag to render instead of the default tag for the content wrapper',
        },
        contentVisibleUp: {
          type: 'string',
          default: void 0,
          description:
            'Specify the breakpoint that the textual content will start to be shown. Leave at default to always show the textual content',
        },
        imgAlt: {
          type: 'string',
          default: void 0,
          description: "Sets the value of the 'alt' attribute on the image",
        },
        imgBlank: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'If set, will render a blank image instead of the img-src',
        },
        imgBlankColor: {
          type: 'string',
          default: 'transparent',
          description: 'Set the CSS color to use as the fill of the blank image',
        },
        imgHeight: {
          type: 'Numberish',
          default: void 0,
          description: "Set the default image 'height' attribute for all b-tab children",
          // TODO grammar check (should say "b-carousel-slide" instead of "b-tab children")
        },
        imgSrc: {
          type: 'string',
          default: void 0,
          description: 'Sets the URL of the image',
        },
        imgSrcset: {
          type: 'string | string[]',
          default: void 0,
          // description: 'Sets the srcset attribute for the image' // TODO missing description
        },
        imgWidth: {
          type: 'Numberish',
          default: void 0,
          description: "Set the default image 'width' attribute for all b-tab children",
          // TODO grammar check (should say "b-carousel-slide" instead of "b-tab children")
        },
        interval: {
          type: 'number',
          default: void 0,
          description: 'Set the delay time (in milliseconds) before the slide is shown',
          // TODO similar content to BCarousel/interval (similar description)
        },
        text: {
          type: 'string',
          default: void 0,
          description: 'Text content to place in the text of the slide',
        },
        textTag: {
          type: 'string',
          default: 'p',
          description:
            'Specify the HTML tag to render instead of the default tag for the text wrapper',
        },
      },
      emits: {},
      slots: {
        caption: {
          description: 'Content to place in caption',
        },
        default: {
          description: 'Content to place in the carousel slide',
        },
        img: {
          description: 'Slot for img element or image component',
        },
        text: {
          description: 'Content to place in text area of the slide',
        },
      },
    },
  }),
}
export {carousel_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL29iamVjdFV0aWxzLnRzIiwgInNyYy91dGlscy9jb21tb25Qcm9wcy50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL2Nhcm91c2VsLmRhdGEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9vYmplY3RVdGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtleHBvcnQgY29uc3QgcGljayA9IDxcbiAgQSBleHRlbmRzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj4sXG4gIGNvbnN0IEIgZXh0ZW5kcyBSZWFkb25seUFycmF5PFByb3BlcnR5S2V5Pixcbj4oXG4gIG9ialRvUGx1Y2s6IFJlYWRvbmx5PEE+LFxuICBrZXlzVG9QbHVjazogUmVhZG9ubHk8Qj4gfCByZWFkb25seSAoa2V5b2YgQSlbXVxuKTogUGljazxBLCBCW251bWJlcl0+ID0+XG4gIFsuLi5rZXlzVG9QbHVja10ucmVkdWNlKFxuICAgIChtZW1vLCBwcm9wKSA9PiB7XG4gICAgICBtZW1vW3Byb3BdID0gb2JqVG9QbHVja1twcm9wXVxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LFxuICAgIHt9IGFzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj5cbiAgKSBhcyBQaWNrPEEsIEJbbnVtYmVyXT5cblxuZXhwb3J0IGNvbnN0IG9taXQgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IE9taXQ8QSwgQltudW1iZXJdPiA9PlxuICBPYmplY3Qua2V5cyhvYmpUb1BsdWNrKVxuICAgIC5maWx0ZXIoKGtleSkgPT4gIWtleXNUb1BsdWNrLm1hcCgoZWwpID0+IGVsLnRvU3RyaW5nKCkpLmluY2x1ZGVzKGtleSkpXG4gICAgLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+ICh7Li4ucmVzdWx0LCBba2V5XTogb2JqVG9QbHVja1trZXldfSksIHt9IGFzIE9taXQ8QSwgQltudW1iZXJdPilcblxuLy8gQ29udmVydHMgUGFzY2FsQ2FzZSBvciBjYW1lbENhc2UgdG8ga2ViYWItY2FzZVxuZXhwb3J0IGNvbnN0IGtlYmFiQ2FzZSA9IChzdHI6IHN0cmluZykgPT4gc3RyLnJlcGxhY2UoL1xcQihbQS1aXSkvZywgJy0kMScpLnRvTG93ZXJDYXNlKClcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvY29tbW9uUHJvcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2NvbW1vblByb3BzLnRzXCI7aW1wb3J0IHR5cGUge1Byb3BSZWZlcmVuY2V9IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCBjb21tb25Qcm9wcyA9ICgpID0+XG4gICh7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gYHRydWVgLCBwbGFjZXMgdGhlIGNvbXBvbmVudCBpbiB0aGUgYWN0aXZlIHN0YXRlIHdpdGggYWN0aXZlIHN0eWxpbmcnLFxuICAgIH0sXG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6ICdhY3RpdmUnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiQ29uZmlndXJlIHRoZSBhY3RpdmUgQ1NTIGNsYXNzIGFwcGxpZWQgd2hlbiB0aGUgbGluayBpcyBhY3RpdmUuIFR5cGljYWxseSB5b3Ugd2lsbCB3YW50IHRvIHNldCB0aGlzIHRvIGNsYXNzIG5hbWUgJ2FjdGl2ZSdcIixcbiAgICB9LFxuICAgIGFsdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmFsdWUgdG8gc2V0IGZvciB0aGUgYGFsdGAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGFyaWFDb250cm9sczoge1xuICAgICAgdHlwZTogJ0FyaWFJbnZhbGlkJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnSWYgdGhpcyBjb21wb25lbnQgY29udHJvbHMgYW5vdGhlciBjb21wb25lbnQgb3IgZWxlbWVudCwgc2V0IHRoaXMgdG8gdGhlIElEIG9mIHRoZSBjb250cm9sbGVkIGNvbXBvbmVudCBvciBlbGVtZW50JyxcbiAgICB9LFxuICAgIGFyaWFEZXNjcmliZWRieToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgZGVzY3JpcHRpb24gZm9yIHRoaXMgY29tcG9uZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBhcmlhLWRlc2NyaWJlZGJ5YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXJpYUludmFsaWQ6IHtcbiAgICAgIHR5cGU6ICdBcmlhSW52YWxpZCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NldHMgdGhlIGBhcmlhLWludmFsaWRgIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgd3JhcHBlciBlbGVtZW50LiBXaGVuIG5vdCBwcm92aWRlZCwgdGhlIGBzdGF0ZWAgcHJvcCB3aWxsIGNvbnRyb2wgdGhlIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhdXRvQ2xvc2U6IHtcbiAgICAgIHR5cGU6IFwiYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnXCIsXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb250cm9scyB0aGUgYXV0b21hdGljIGNsb3Npbmcgb2YgdGhlIGNvbXBvbmVudCB3aGVuIGNsaWNraW5nLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgICB9LFxuICAgIGF1dG9jb21wbGV0ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ2F1dG9jb21wbGV0ZScgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSBmb3JtIGNvbnRyb2xcIixcbiAgICB9LFxuICAgIGFyaWFMYWJlbDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHZhbHVlIG9mIGBhcmlhLWxhYmVsYCBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgYXJpYUxpdmU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiB0aGUgcmVuZGVyZWQgZWxlbWVudCBpcyBhbiBgYXJpYS1saXZlYCByZWdpb24gKGZvciBzY3JlZW4gcmVhZGVyIHVzZXJzKSwgc2V0IHRvIGVpdGhlciAncG9saXRlJyBvciAnYXNzZXJ0aXZlJ1wiLFxuICAgIH0sXG4gICAgYXJpYUxhYmVsbGVkYnk6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIGxhYmVsIGZvciB0aGlzIGNvbXBvbmVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgYXJpYS1sYWJlbGxlZGJ5YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXV0b2ZvY3VzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gYHRydWVgLCBhdHRlbXB0cyB0byBhdXRvLWZvY3VzIHRoZSBjb250cm9sIHdoZW4gaXQgaXMgbW91bnRlZCwgb3IgcmUtYWN0aXZhdGVkIHdoZW4gaW4gYSBrZWVwLWFsaXZlLiBEb2VzIG5vdCBzZXQgdGhlIGBhdXRvZm9jdXNgIGF0dHJpYnV0ZSBvbiB0aGUgY29udHJvbCcsXG4gICAgfSxcbiAgICBiZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gYmFja2dyb3VuZCBvZiB0aGUgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIGJvZHlCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGJvZHlCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgYm9yZGVyJyxcbiAgICB9LFxuICAgIGJvZHlDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvZHlUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9keVRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IHRleHQnLFxuICAgIH0sXG4gICAgYm9keVZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvcmRlcicsXG4gICAgfSxcbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICBkZWZhdWx0OiAnMCcsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCB0byBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZ3JlYXRlciB0aGFuIHplcm8sIHdpbGwgZGVib3VuY2UgdGhlIHVzZXIgaW5wdXQuIEhhcyBubyBlZmZlY3QgaWYgcHJvcCAnbGF6eScgaXMgc2V0XCIsXG4gICAgfSxcbiAgICBkZWJvdW5jZU1heFdhaXQ6IHtcbiAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgZGVmYXVsdDogJ05hTicsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbWF4aW11bSB0aW1lIGluIG1pbGxpc2Vjb25kcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0JydzIGludm9rZWRcIixcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0IHRvIGB0cnVlYCwgZGlzYWJsZXMgdGhlIGNvbXBvbmVudCdzIGZ1bmN0aW9uYWxpdHkgYW5kIHBsYWNlcyBpdCBpbiBhIGRpc2FibGVkIHN0YXRlXCIsXG4gICAgfSxcbiAgICBkaXNhYmxlZEZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXNhYmxlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgZGlzYWJsZWQgc3RhdGUnLFxuICAgIH0sXG4gICAgZmxvYXRpbmc6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCwgcmVuZGVycyBhIHNpbmdsZSBjb250cm9sIGZvcm0gd2l0aCBhIGZsb2F0aW5nIGxhYmVsLiBUaGlzIG9ubHkgd29ya3MgZm9yIGZvcm1zIHdoZXJlIHRoZSBpbW1lZGlhdGUgY2hpbGRyZW4gYXJlIGEgbGFiZWwgYW5kIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGNvbnRyb2xzLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgICB9LFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyQmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGZvb3RlckJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIGJvcmRlcicsXG4gICAgfSxcbiAgICBmb290ZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciB0ZXh0JyxcbiAgICB9LFxuICAgIGZvb3RlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdJRCBvZiB0aGUgZm9ybSB0aGF0IHRoZSBmb3JtIGNvbnRyb2wgYmVsb25ncyB0by4gU2V0cyB0aGUgYGZvcm1gIGF0dHJpYnV0ZSBvbiB0aGUgY29udHJvbCcsXG4gICAgfSxcbiAgICBmb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICcodmFsOiBzdHJpbmcsIGV2dDogRXZlbnQpID0+IHN0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVmZXJlbmNlIHRvIGEgZnVuY3Rpb24gZm9yIGZvcm1hdHRpbmcgdGhlIGlucHV0JyxcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlckJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBoZWFkZXJCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBib3JkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlclRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlclRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgdGV4dCcsXG4gICAgfSxcbiAgICBoZWFkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1VzZWQgdG8gc2V0IHRoZSBgaWRgIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgY29udGVudCwgYW5kIHVzZWQgYXMgdGhlIGJhc2UgdG8gZ2VuZXJhdGUgYW55IGFkZGl0aW9uYWwgZWxlbWVudCBJRHMgYXMgbmVlZGVkJyxcbiAgICB9LFxuICAgIGxhenlGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0LCB0aGUgaW5wdXQgaXMgZm9ybWF0dGVkIG9uIGJsdXIgaW5zdGVhZCBvZiBlYWNoIGtleXN0cm9rZSAoaWYgdGhlcmUgaXMgYSBmb3JtYXR0ZXIgc3BlY2lmaWVkKScsXG4gICAgfSxcbiAgICBsaW5rQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3Mgb3IgY2xhc3NlcyB0byBhcHBseSB0byB0aGUgaW5uZXIgbGluayBlbGVtZW50JyxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBJRCBvZiB0aGUgYXNzb2NpYXRlZCBkYXRhbGlzdCBlbGVtZW50IG9yIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBuYW1lYCBhdHRyaWJ1dGUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICBub0JhY2tkcm9wOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSBiYWNrZHJvcCcsXG4gICAgfSxcbiAgICBub0VsbGlwc2lzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRG8gbm90IHNob3cgZWxsaXBzaXMgYnV0dG9ucycsXG4gICAgfSxcbiAgICBub0dvdG9FbmRCdXR0b25zOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSGlkZXMgdGhlIGdvIHRvIGZpcnN0IGFuZCBnbyB0byBsYXN0IHBhZ2UgYnV0dG9ucycsXG4gICAgfSxcbiAgICBub0hlYWRlcjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgIGhlYWRlcicsXG4gICAgfSxcbiAgICBub0hlYWRlckNsb3NlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSBoZWFkZXIgY2xvc2UgYnV0dG9uJyxcbiAgICB9LFxuICAgIG5vSG92ZXJQYXVzZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIHRydWUsIGRpc2FibGVzIHBhdXNpbmcgdGhlIHRpbWVyIG9uIGhvdmVyIGJlaGF2aW9yJyxcbiAgICB9LFxuICAgIG5vUmVzdW1lT25Ib3ZlckxlYXZlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gdHJ1ZSwgdGhlIHRpbWVyIHdpbGwgbm90IHJlc3VtZSB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIGVsZW1lbnQuIEl0IHdpbGwgbmVlZCB0byBiZSBtYW51YWxseSByZXN1bWVkJyxcbiAgICB9LFxuICAgIG5vdmFsaWRhdGU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZGlzYWJsZXMgYnJvd3NlciBuYXRpdmUgSFRNTDUgdmFsaWRhdGlvbiBvbiBjb250cm9scyBpbiB0aGUgZm9ybScsXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiAncmVhZG9ubHkgQ2hlY2tib3hPcHRpb25SYXdbXScsXG4gICAgICBkZWZhdWx0OiAnKCkgPT4gW10nLFxuICAgICAgZGVzY3JpcHRpb246ICdBcnJheSBvZiBpdGVtcyB0byByZW5kZXIgaW4gdGhlIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBwbGFpbjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlciB0aGUgZm9ybSBjb250cm9sIGluIHBsYWluIG1vZGUsIHJhdGhlciB0aGFuIGN1c3RvbSBzdHlsZWQgbW9kZScsXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiBcIicnXCIsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcGxhaW50ZXh0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTZXQgdGhlIGZvcm0gY29udHJvbCBhcyByZWFkb25seSBhbmQgcmVuZGVycyB0aGUgY29udHJvbCB0byBsb29rIGxpa2UgcGxhaW4gdGV4dCAobm8gYm9yZGVycyknLFxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWRkcyB0aGUgYHJlcXVpcmVkYCBhdHRyaWJ1dGUgdG8gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICByZWFkb25seToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgYHJlYWRvbmx5YCBhdHRyaWJ1dGUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgQVJJQSBhdHRyaWJ1dGUgYHJvbGVgIHRvIGEgc3BlY2lmaWMgdmFsdWUnLFxuICAgIH0sXG4gICAgcm91bmRlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbi4gVGhlIGBzcXVhcmVgIHByb3AgdGFrZXMgcHJlY2VkZW5jZS4gUmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMnLFxuICAgIH0sXG4gICAgcm91bmRlZEJvdHRvbToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgYm90dG9tYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRFbmQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYGVuZGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkU3RhcnQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYHN0YXJ0YCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRUb3A6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYHRvcGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiAnU2l6ZScsXG4gICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0IHRoZSBzaXplIG9mIHRoZSBjb21wb25lbnQncyBhcHBlYXJhbmNlLiAnc20nLCAnbWQnIChkZWZhdWx0KSwgb3IgJ2xnJ1wiLFxuICAgIH0sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVVJMIHRvIHNldCBmb3IgdGhlIGBzcmNgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgdHlwZTogJ1ZhbGlkYXRpb25TdGF0ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRyb2xzIHRoZSB2YWxpZGF0aW9uIHN0YXRlIGFwcGVhcmFuY2Ugb2YgdGhlIGNvbXBvbmVudC4gYHRydWVgIGZvciB2YWxpZCwgYGZhbHNlYCBmb3IgaW52YWxpZCwgb3IgYG51bGxgIGZvciBubyB2YWxpZGF0aW9uIHN0YXRlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBzdWJ0aXRsZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnaDYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBzdWJ0aXRsZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZVRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogJ2JvZHktc2Vjb25kYXJ5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgc3VidGl0bGUgdGV4dCcsXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZycsXG4gICAgfSxcbiAgICB0ZXh0RmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHRleHQgbGFiZWwnLFxuICAgIH0sXG4gICAgdGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSB0ZXh0JyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0aXRsZUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRpdGxlVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdoNCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXJzIHRoZSBmZWVkYmFjayB0ZXh0IGluIGEgcnVkaW1lbnRhcnkgdG9vbHRpcCBzdHlsZScsXG4gICAgfSxcbiAgICB2YWxpZGF0ZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQsIGFkZHMgdGhlIEJvb3RzdHJhcCBjbGFzcyAnd2FzLXZhbGlkYXRlZCcgb24gdGhlIGZvcm0sIHRyaWdnZXJpbmcgdGhlIG5hdGl2ZSBicm93c2VyIHZhbGlkYXRpb24gc3RhdGVzXCIsXG4gICAgfSxcbiAgICB2YWx1ZUZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd2YWx1ZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdmFsdWUnLFxuICAgIH0sXG4gICAgdmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgY29tcG9uZW50LiBXaGVuIGltcGxlbWVudGVkIGBiZy12YXJpYW50YCBhbmQgYHRleHQtdmFyaWFudGAgd2lsbCB0YWtlIHByZWNlZGVuY2UnLFxuICAgIH0sXG4gICAgd3JhcHBlckF0dHJzOiB7XG4gICAgICB0eXBlOiAnUmVhZG9ubHk8QXR0cnNWYWx1ZT4nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCcsXG4gICAgfSxcbiAgICB3cmFwcGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhZGQgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCcsXG4gICAgfSxcbiAgICBwbGFjZW1lbnQ6IHtcbiAgICAgIHR5cGU6ICdQbGFjZW1lbnQnLFxuICAgICAgZGVmYXVsdDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1BsYWNlbWVudCBvZiBhIGZsb2F0aW5nIGVsZW1lbnQnLFxuICAgIH0sXG4gIH0pIGFzIGNvbnN0XG5cbmNvbnN0IHNpbmdsZXRvblByb3BzID0gT2JqZWN0LmZyZWV6ZShjb21tb25Qcm9wcygpKVxuXG5leHBvcnQgY29uc3QgYnVpbGRDb21tb25Qcm9wcyA9IChcbiAgb2JqPzogUGFydGlhbDxSZWNvcmQ8a2V5b2YgdHlwZW9mIHNpbmdsZXRvblByb3BzLCBQYXJ0aWFsPFByb3BSZWZlcmVuY2U+Pj5cbik6IFJlYWRvbmx5PHR5cGVvZiBzaW5nbGV0b25Qcm9wcz4gPT4ge1xuICBpZiAoIW9iaikgcmV0dXJuIHNpbmdsZXRvblByb3BzXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgY29uc3QgbXlPYmplY3QgPSBjb21tb25Qcm9wcygpIGFzIFJlY29yZDxzdHJpbmcsIGFueT5cblxuICAvLyBNZXJnZSB0aGUgcHJvdmlkZWQgb2JqZWN0IGludG8gdGhlIGNvbW1vbiBwcm9wc1xuICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIG15T2JqZWN0W2tleV0gPSB7XG4gICAgICAuLi5teU9iamVjdFtrZXldLFxuICAgICAgLi4udmFsdWUsXG4gICAgfVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG15T2JqZWN0IGFzIGFueSlcbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1vbkVtaXRzID0ge1xuICBjYW5jZWw6IHt9LFxuICBvazoge30sXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHMvY2Fyb3VzZWwuZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2Nhcm91c2VsLmRhdGEudHNcIjtpbXBvcnQgdHlwZSB7XG4gIEJDYXJvdXNlbEVtaXRzLFxuICBCQ2Fyb3VzZWxQcm9wcyxcbiAgQkNhcm91c2VsU2xpZGVQcm9wcyxcbiAgQkNhcm91c2VsU2xpZGVTbG90cyxcbiAgQkNhcm91c2VsU2xvdHMsXG59IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB7XG4gIHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlLFxuICB0eXBlIEVtaXRSZWNvcmQsXG4gIHR5cGUgUHJvcFJlY29yZCxcbiAgdHlwZSBTbG90UmVjb3JkLFxuICBTdHlsZUtpbmQsXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHtwaWNrfSBmcm9tICcuLi8uLi91dGlscy9vYmplY3RVdGlscydcbmltcG9ydCB7YnVpbGRDb21tb25Qcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uUHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZDogKCk6IENvbXBvbmVudFJlZmVyZW5jZSA9PiAoe1xuICAgIEJDYXJvdXNlbDoge1xuICAgICAgc291cmNlUGF0aDogJy9CQ2Fyb3VzZWwvQkNhcm91c2VsLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5waWNrKGJ1aWxkQ29tbW9uUHJvcHMoKSwgWydpZCddKSxcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZXQgdGhlIENTUyBjb2xvciBvZiB0aGUgY2Fyb3VzZWwncyBiYWNrZ3JvdW5kXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VuYWJsZSB0aGUgcHJldmlvdXMgYW5kIG5leHQgY29udHJvbHMnLFxuICAgICAgICB9LFxuICAgICAgICBjb250cm9sc05leHRUZXh0OiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ05leHQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSB0ZXh0IGZvciB0aGUgXCJOZXh0XCIgY29udHJvbCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2xzUHJldlRleHQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiAnUHJldmlvdXMnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSB0ZXh0IGZvciB0aGUgXCJQcmV2aW91c1wiIGNvbnRyb2wnLFxuICAgICAgICB9LFxuICAgICAgICBmYWRlOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdXaGVuIHNldCwgY2hhbmdlcyB0aGUgc2xpZGUgYW5pbWF0aW9uIHRvIGEgY3Jvc3NmYWRlIGluc3RlYWQgb2YgYSBzbGlkaW5nIGVmZmVjdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGltZ0hlaWdodDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZXQgdGhlIGRlZmF1bHQgaW1hZ2UgJ2hlaWdodCcgYXR0cmlidXRlIGZvciBhbGwgYi10YWIgY2hpbGRyZW5cIiwgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaG91bGQgc2F5IFwiYi1jYXJvdXNlbC1zbGlkZSBjaGlsZHJlblwiIGluc3RlYWQgb2YgXCJiLXRhYiBjaGlsZHJlblwiKVxuICAgICAgICB9LFxuICAgICAgICBpbWdXaWR0aDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZXQgdGhlIGRlZmF1bHQgaW1hZ2UgJ3dpZHRoJyBhdHRyaWJ1dGUgZm9yIGFsbCBiLXRhYiBjaGlsZHJlblwiLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCBzYXkgXCJiLWNhcm91c2VsLXNsaWRlIGNoaWxkcmVuXCIgaW5zdGVhZCBvZiBcImItdGFiIGNoaWxkcmVuXCIpXG4gICAgICAgIH0sXG4gICAgICAgIGluZGljYXRvcnM6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW5hYmxlIHRoZSBpbmRpY2F0b3IgYnV0dG9ucyBmb3IganVtcGluZyB0byBzcGVjaWZpYyBzbGlkZXMnLFxuICAgICAgICB9LFxuICAgICAgICBpbmRpY2F0b3JzQnV0dG9uTGFiZWw6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiAnU2xpZGUnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSBhcmlhLWxhYmVsIGZvciB0aGUgaW5kaWNhdG9yIGJ1dHRvbnMnLFxuICAgICAgICB9LFxuICAgICAgICBpbnRlcnZhbDoge1xuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIGRlZmF1bHQ6IDUwMDAsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSBkZWxheSB0aW1lIChpbiBtaWxsaXNlY29uZHMpIGJldHdlZW4gc2xpZGVzJyxcbiAgICAgICAgfSxcbiAgICAgICAga2V5Ym9hcmQ6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogdHJ1ZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbmFibGUga2V5Ym9hcmQgbmF2aWdhdGlvbiB3aXRoIHRoZSByaWdodCBhbmQgbGVmdCBhcnJvdyBrZXlzJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxJbmRpY2F0b3JzOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ1NlbGVjdCBhIHNsaWRlIHRvIGRpc3BsYXknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSBhcmlhLWxhYmVsIGZvciB0aGUgaW5kaWNhdG9ycycsXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICBkZWZhdWx0OiAwLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBpbmRleCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBzbGlkZScsXG4gICAgICAgIH0sXG4gICAgICAgIG5vQW5pbWF0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCBkaXNhYmxlcyB0aGUgYW5pbWF0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgbm9Ib3ZlclBhdXNlOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdXaGVuIHNldCwgZGlzYWJsZXMgdGhlIHBhdXNpbmcgb2YgdGhlIHNsaWRlIHNob3cgd2hlbiB0aGUgY3VycmVudCBzbGlkZSBpcyBob3ZlcmVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgbm9Ub3VjaDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlIGNvbnRyb2xsaW5nIHRoZSBzbGlkZXMgdmlhIHRvdWNoIHN3aXBlcycsXG4gICAgICAgIH0sXG4gICAgICAgIG5vV3JhcDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEbyBub3QgcmVzdGFydCB0aGUgc2xpZGUgc2hvdyB3aGVuIHRoZW4gZW5kIGlzIHJlYWNoZWQnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHR5cG86IFwidGhlblwiIHNob3VsZCBiZSBcInRoZVwiKVxuICAgICAgICB9LFxuICAgICAgICByaWRlOiB7XG4gICAgICAgICAgdHlwZTogXCJib29sZWFuIHwgJ2Nhcm91c2VsJ1wiLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdTZXQgdG8gXCJjYXJvdXNlbFwiIHRvIGFuaW1hdGUgc2xpZGVzIGF1dG9tYXRpY2FsbHksIHRydWUgdG8gYW5pbWF0ZSBvbiBmaXJzdCBpbnRlcmFjdGlvbiwgZmFsc2UgdG8gZGlzYWJsZSBhbmltYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgICByaWRlUmV2ZXJzZToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgdGhlIGNhcm91c2VsIHdpbGwgYW5pbWF0ZSBpbiB0aGUgcmV2ZXJzZSBkaXJlY3Rpb24nLFxuICAgICAgICB9LFxuICAgICAgICB0b3VjaFRocmVzaG9sZDoge1xuICAgICAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgICAgIGRlZmF1bHQ6IDUwLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdUaGUgbWluaW11bSBkaXN0YW5jZSB0aGUgdG91Y2ggc3dpcGUgbXVzdCBtb3ZlIHRvIHByZXZlbnQgdGhlIHNsaWRlIHNob3cgZnJvbSBiZWluZyBwYXVzZWQnLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCQ2Fyb3VzZWxQcm9wcz4sXG4gICAgICBlbWl0czoge1xuICAgICAgICAndXBkYXRlOm1vZGVsLXZhbHVlJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU3RhbmRhcmQgZXZlbnQgdG8gdXBkYXRlIHRoZSB2LW1vZGVsJywgLy8gVE9ETyBzaW1pbGFyIGNvbnRlbnQgdG8gQkFsZXJ0L3VwZGF0ZTptb2RlbC12YWx1ZSAoaWRlbnRpY2FsIGRlc2NyaXB0aW9uKVxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgICd1cGRhdGU6bW9kZWwtdmFsdWUnOiB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbW9kZWxWYWx1ZScsXG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnc2xpZGUnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdGaXJlcyBpbW1lZGlhdGVseSB3aGVuIHRoZSBjYXJvdXNlbCBzdGFydHMgaXRzIHNsaWRlIHRyYW5zaXRpb24uJyxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICB0eXBlOiAnQnZDYXJvdXNlbEV2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdJbmRpY2F0ZXMgdGhlIHNsaWRlIGBkaXJlY3Rpb25gLCBgZnJvbWAsIGFuZCBgdG9gIGluZGljZXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnc2xpZCc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpcmVkIHdoZW4gdGhlIGNhcm91c2VsIGhhcyBjb21wbGV0ZWQgaXRzIHNsaWRlIHRyYW5zaXRpb24uJyxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICB0eXBlOiAnQnZDYXJvdXNlbEV2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdJbmRpY2F0ZXMgdGhlIHNsaWRlIGBkaXJlY3Rpb25gLCBgZnJvbWAsIGFuZCBgdG9gIGluZGljZXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAncHJldi1jbGljayc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTmF0aXZlIGNsaWNrIGV2ZW50JyxcbiAgICAgICAgICAgICAgdHlwZTogJ01vdXNlRXZlbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnbmV4dC1jbGljayc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTmF0aXZlIGNsaWNrIGV2ZW50JyxcbiAgICAgICAgICAgICAgdHlwZTogJ01vdXNlRXZlbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgRW1pdFJlY29yZDxrZXlvZiBCQ2Fyb3VzZWxFbWl0cyB8ICd1cGRhdGU6bW9kZWwtdmFsdWUnPixcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgKHNsaWRlcykgdG8gcGxhY2UgaW4gdGhlIGNhcm91c2VsJyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFNsb3RSZWNvcmQ8a2V5b2YgQkNhcm91c2VsU2xvdHM+LFxuICAgIH0sXG4gICAgQkNhcm91c2VsU2xpZGU6IHtcbiAgICAgIHN0eWxlU3BlYzoge2tpbmQ6IFN0eWxlS2luZC5PdmVycmlkZUNsYXNzLCB2YWx1ZTogJy5jYXJvdXNlbC1pdGVtJ30sXG4gICAgICBzb3VyY2VQYXRoOiAnL0JDYXJvdXNlbC9CQ2Fyb3VzZWxTbGlkZS52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucGljayhidWlsZENvbW1vblByb3BzKCksIFsnaWQnXSksXG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQ1NTIGNvbG9yIHRvIHVzZSBhcyB0aGUgc2xpZGUncyBiYWNrZ3JvdW5kIGNvbG9yXCIsIC8vIFRPRE8gc2ltaWxhciBjb250ZW50IHRvIEJDYXJvdXNlbC9iYWNrZ3JvdW5kIChzaW1pbGFyIGRlc2NyaXB0aW9uKVxuICAgICAgICB9LFxuICAgICAgICBjYXB0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBjYXB0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FwdGlvblRhZzoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6ICdoMycsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgY2FwdGlvbiB3cmFwcGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudFRhZzoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGNvbnRlbnQgd3JhcHBlcicsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRWaXNpYmxlVXA6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnU3BlY2lmeSB0aGUgYnJlYWtwb2ludCB0aGF0IHRoZSB0ZXh0dWFsIGNvbnRlbnQgd2lsbCBzdGFydCB0byBiZSBzaG93bi4gTGVhdmUgYXQgZGVmYXVsdCB0byBhbHdheXMgc2hvdyB0aGUgdGV4dHVhbCBjb250ZW50JyxcbiAgICAgICAgfSxcbiAgICAgICAgaW1nQWx0OiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlIHZhbHVlIG9mIHRoZSAnYWx0JyBhdHRyaWJ1dGUgb24gdGhlIGltYWdlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGltZ0JsYW5rOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lmIHNldCwgd2lsbCByZW5kZXIgYSBibGFuayBpbWFnZSBpbnN0ZWFkIG9mIHRoZSBpbWctc3JjJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW1nQmxhbmtDb2xvcjoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTZXQgdGhlIENTUyBjb2xvciB0byB1c2UgYXMgdGhlIGZpbGwgb2YgdGhlIGJsYW5rIGltYWdlJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW1nSGVpZ2h0OiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNldCB0aGUgZGVmYXVsdCBpbWFnZSAnaGVpZ2h0JyBhdHRyaWJ1dGUgZm9yIGFsbCBiLXRhYiBjaGlsZHJlblwiLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCBzYXkgXCJiLWNhcm91c2VsLXNsaWRlXCIgaW5zdGVhZCBvZiBcImItdGFiIGNoaWxkcmVuXCIpXG4gICAgICAgIH0sXG4gICAgICAgIGltZ1NyYzoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIFVSTCBvZiB0aGUgaW1hZ2UnLFxuICAgICAgICB9LFxuICAgICAgICBpbWdTcmNzZXQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nIHwgc3RyaW5nW10nLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAvLyBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHNyY3NldCBhdHRyaWJ1dGUgZm9yIHRoZSBpbWFnZScgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGltZ1dpZHRoOiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNldCB0aGUgZGVmYXVsdCBpbWFnZSAnd2lkdGgnIGF0dHJpYnV0ZSBmb3IgYWxsIGItdGFiIGNoaWxkcmVuXCIsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2hvdWxkIHNheSBcImItY2Fyb3VzZWwtc2xpZGVcIiBpbnN0ZWFkIG9mIFwiYi10YWIgY2hpbGRyZW5cIilcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJ2YWw6IHtcbiAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTZXQgdGhlIGRlbGF5IHRpbWUgKGluIG1pbGxpc2Vjb25kcykgYmVmb3JlIHRoZSBzbGlkZSBpcyBzaG93bicsIC8vIFRPRE8gc2ltaWxhciBjb250ZW50IHRvIEJDYXJvdXNlbC9pbnRlcnZhbCAoc2ltaWxhciBkZXNjcmlwdGlvbilcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgdGV4dCBvZiB0aGUgc2xpZGUnLFxuICAgICAgICB9LFxuICAgICAgICB0ZXh0VGFnOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ3AnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHRleHQgd3JhcHBlcicsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJDYXJvdXNlbFNsaWRlUHJvcHM+LFxuICAgICAgZW1pdHM6IHt9LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgY2FwdGlvbjoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBwbGFjZSBpbiBjYXB0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBwbGFjZSBpbiB0aGUgY2Fyb3VzZWwgc2xpZGUnLFxuICAgICAgICB9LFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Nsb3QgZm9yIGltZyBlbGVtZW50IG9yIGltYWdlIGNvbXBvbmVudCcsXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGV4dCBhcmVhIG9mIHRoZSBzbGlkZScsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJDYXJvdXNlbFNsaWRlU2xvdHM+LFxuICAgIH0sXG4gIH0pLFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwWixJQUFNLE9BQU8sQ0FJcmEsWUFDQSxnQkFFQSxDQUFDLEdBQUcsV0FBVyxFQUFFO0FBQUEsRUFDZixDQUFDLE1BQU0sU0FBUztBQUNkLFNBQUssSUFBSSxJQUFJLFdBQVcsSUFBSTtBQUM1QixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsQ0FBQztBQUNIOzs7QUNYRixJQUFNLGNBQWMsT0FDakI7QUFBQSxFQUNDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFB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
