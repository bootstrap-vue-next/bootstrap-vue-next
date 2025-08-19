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

// src/utils/imageProps.ts
var linkTo = '/docs/components/image'
var imageProps = {
  blank: {
    type: 'boolean',
    default: false,
    description: 'Creates a blank/transparent image via an SVG data URI',
  },
  blankColor: {
    type: 'string',
    default: 'transparent',
    description: 'Sets the color of the blank image to the CSS color value specified',
  },
  block: {
    type: 'boolean',
    default: false,
    description:
      'Forces the image to display as a block element rather than the browser default of inline-block element',
  },
  fluid: {
    type: 'boolean',
    default: false,
    description:
      "Makes the image responsive. The image will shrink as needed or grow up to the image's native width",
  },
  fluidGrow: {
    type: 'boolean',
    default: false,
    description:
      "Similar to the 'fluid' prop, but allows the image to scale up past its native width",
  },
  height: {
    type: 'Numberish',
    default: void 0,
    description: "The value to set on the image's 'height' attribute",
  },
  lazy: {
    type: 'boolean',
    default: false,
    description:
      'Enables lazy loading of the image via the `loading` attribute on the underlying image.',
  },
  placement: {
    type: "Extract<Placement, 'start' | 'end'> | 'center'",
    default: void 0,
    description:
      'Sets the alignment of the image to the start, end, or center, see above for details',
  },
  sizes: {
    type: 'string | string[]',
    default: void 0,
    description:
      'One or more strings separated by commas (or an array of strings), indicating a set of source sizes. Optionally used in combination with the srcset prop',
  },
  srcset: {
    type: 'string | string[]',
    default: void 0,
    description:
      'One or more strings separated by commas (or an array of strings), indicating possible image sources for the user agent to use',
  },
  thumbnail: {
    type: 'boolean',
    default: false,
    description: 'Adds a thumbnail border around the image',
  },
  width: {
    type: 'Numberish',
    default: void 0,
    description: "The value to set on the image's 'width' attribute",
  },
  ...pick(
    buildCommonProps({
      tag: {
        default: 'img',
      },
    }),
    ['alt', 'rounded', 'roundedBottom', 'roundedEnd', 'roundedStart', 'roundedTop', 'src', 'tag']
  ),
}

// src/data/components/card.data.ts
var card_data_default = {
  load: () => ({
    BCard: {
      sourcePath: '/BCard/BCard.vue',
      props: {
        ...pick(
          buildCommonProps({
            bodyBorderVariant: {
              description:
                'Applies one of the Bootstrap theme color variants to the body border (NYI?)',
            },
          }),
          [
            'bgVariant',
            'bodyBgVariant',
            'bodyBorderVariant',
            'bodyClass',
            'bodyTag',
            'bodyTextVariant',
            'borderVariant',
            'footer',
            'footerBgVariant',
            'footerBorderVariant',
            'footerClass',
            'footerTag',
            'footerTextVariant',
            'footerVariant',
            'header',
            'headerBgVariant',
            'headerBorderVariant',
            'headerClass',
            'headerTag',
            'headerTextVariant',
            'headerVariant',
            'subtitle',
            'subtitleTag',
            'subtitleTextVariant',
            'tag',
            'textVariant',
            'title',
            'titleTag',
            'variant',
          ]
        ),
        align: {
          type: 'AlignmentTextHorizontal',
          default: void 0,
          description: "Text alignment for the card's content: 'start', 'center' or 'end'",
        },
        bodyText: {
          type: 'string',
          default: "''",
          description: 'Text content to place in the card body, default slot takes precedence',
        },
        imgAlt: {
          type: 'string',
          default: void 0,
          description: 'URL for the optional image',
          // TODO grammar check (description incorrect; should describe alt text, not URL)
        },
        imgHeight: {
          type: 'Numberish',
          default: void 0,
          description: "The value to set on the image's 'height' attribute",
        },
        imgPlacement: {
          type: 'Placement | "overlay"',
          default: 'top',
          description:
            "Placement for the optional image ('top', 'bottom', 'start', 'end', or 'overlay')",
          // TODO similar content to BCardImg/placement (similar description and type)
        },
        imgSrc: {
          type: 'string',
          default: void 0,
          description: 'URL for the optional image',
        },
        imgWidth: {
          type: 'Numberish',
          default: void 0,
          description: "The value to set on the image's 'width' attribute",
        },
        noBody: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Disable rendering of the default inner card-body element',
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card',
        },
        footer: {
          description: 'For custom rendering of footer content',
        },
        header: {
          description: 'For custom rendering of header content',
        },
        img: {
          description: 'For custom rendering of image content',
        },
      },
    },
    BCardBody: {
      styleSpec: {
        kind: 'OVERRIDE-CLASS' /* OverrideClass */,
        value: '.card-body, .card-img-overlay',
      },
      sourcePath: '/BCard/BCardBody.vue',
      props: {
        ...pick(buildCommonProps(), [
          'bgVariant',
          'subtitle',
          'subtitleTag',
          'subtitleTextVariant',
          'tag',
          'textVariant',
          'title',
          'titleTag',
          'variant',
        ]),
        overlay: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          // description: 'When set, applies overlay styling to the card body' // TODO missing description
        },
        text: {
          type: 'string',
          default: void 0,
          description: 'Text content to place in the card body, default slot takes precedence',
          // TODO similar content to BCard/bodyText (similar description)
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card body',
        },
        title: {
          description: 'Content to place in the card title',
        },
        subtitle: {
          description: 'Content to place in the card subtitle',
        },
      },
    },
    BCardFooter: {
      sourcePath: '/BCard/BCardFooter.vue',
      props: {
        ...pick(buildCommonProps(), [
          'bgVariant',
          'borderVariant',
          'tag',
          'textVariant',
          'variant',
        ]),
        text: {
          type: 'string',
          default: void 0,
          description: 'Text content to place in the card footer, default slot takes precedence',
          // TODO similar content to BCard/bodyText (similar description structure)
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card footer',
        },
      },
    },
    BCardGroup: {
      styleSpec: {
        kind: 'OVERRIDE-CLASS' /* OverrideClass */,
        value: '.card-deck, .card-group, .card-columns',
      },
      sourcePath: '/BCard/BCardGroup.vue',
      props: {
        ...pick(buildCommonProps(), ['tag']),
        columns: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'When set, renders the card group in a masonry-like columnar style',
        },
        deck: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'When set renders the card group with gutters between cards',
          // TODO grammar check (add comma after "When set")
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content (cards) to place in the card group',
        },
      },
    },
    BCardHeader: {
      sourcePath: '/BCard/BCardHeader.vue',
      props: {
        ...pick(buildCommonProps(), [
          'bgVariant',
          'borderVariant',
          'tag',
          'textVariant',
          'variant',
        ]),
        text: {
          type: 'string',
          default: void 0,
          description: 'Text content to place in the card header, default slot takes precedence',
          // TODO similar content to BCard/bodyText (similar description structure)
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card header',
        },
      },
    },
    BCardImg: {
      sourcePath: '/BCard/BCardImg.vue',
      props: {
        [defaultPropSectionSymbol]: {
          placement: {
            type: 'Placement | "overlay"',
            default: 'top',
            // description: 'Placement for the image ("top", "bottom", "start", "end", or "overlay")' // TODO missing description // TODO similar content to BCard/imgPlacement (similar type)
          },
        },
        'BImg props': {
          _opts: {
            linkTo,
          },
          _data: omit(imageProps, ['placement']),
        },
      },
      emits: {},
      slots: {},
    },
    BCardSubtitle: {
      sourcePath: '/BCard/BCardSubtitle.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'h6',
            },
            textVariant: {
              default: 'body-secondary',
            },
          }),
          ['tag', 'textVariant']
        ),
        text: {
          type: 'string',
          default: void 0,
          description: 'Text content to place in the card body, default slot takes precedence',
          // TODO grammar check (should say "card subtitle" instead of "card body") // TODO similar content to BCard/bodyText (similar description structure)
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card subtitle',
        },
      },
    },
    BCardText: {
      sourcePath: '/BCard/BCardText.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'p',
            },
          }),
          ['tag']
        ),
        text: {
          type: 'string',
          default: void 0,
          description: 'Text content to place in the card text, default slot takes precedence',
          // TODO similar content to BCard/bodyText (similar description structure)
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card text',
        },
      },
    },
    BCardTitle: {
      sourcePath: '/BCard/BCardTitle.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'h4',
            },
          }),
          ['tag']
        ),
        text: {
          type: 'string',
          default: void 0,
          description: 'Text content to place in the card title, default slot takes precedence',
          // TODO similar content to BCard/bodyText (similar description structure)
        },
      },
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card title',
        },
      },
    },
  }),
}
export {card_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3R5cGVzL2luZGV4LnRzIiwgInNyYy91dGlscy9vYmplY3RVdGlscy50cyIsICJzcmMvdXRpbHMvY29tbW9uUHJvcHMudHMiLCAic3JjL3V0aWxzL2ltYWdlUHJvcHMudHMiLCAic3JjL2RhdGEvY29tcG9uZW50cy9jYXJkLmRhdGEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdHlwZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy90eXBlcy9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdHlwZXMvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7dXNlU2Nyb2xsc3B5fSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudEl0ZW0gPSBFeGNsdWRlPGtleW9mIENvbXBvbmVudFJlZmVyZW5jZSwgJ2NvbXBvbmVudCcgfCAnc2VjdGlvbnMnPlxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BSZWZlcmVuY2Uge1xuICB0eXBlPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRlZmF1bHQ/OiB1bmtub3duXG4gIG5vdFlldEltcGxlbWVudGVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcm9wUmVjb3JkV2l0aE9wdGlvbnMgPSB7XG4gIF9kYXRhOiBQcm9wUmVjb3JkIC8vIEFsbG93cyBmb3IgYSBzaW5nbGUgc2VjdGlvbiBvciBtdWx0aXBsZSBzZWN0aW9uc1xuICBfb3B0cz86IHtsaW5rVG8/OiBzdHJpbmd9XG59XG4vLyBGbGF0IHZhcmlhbnRcbmV4cG9ydCB0eXBlIFByb3BSZWNvcmQ8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gPSBSZWNvcmQ8VCwgUHJvcFJlZmVyZW5jZT5cbi8vIE11bHRpcGxlIHNlY3Rpb25zIHZhcmlhbnRcbmV4cG9ydCB0eXBlIFByb3BSZWNvcmRXaXRoTXVsdGlwbGVTZWN0aW9ucyA9IHtcbiAgW2RlZmF1bHRQcm9wU2VjdGlvblN5bWJvbF06IFByb3BSZWNvcmQgfCBQcm9wUmVjb3JkV2l0aE9wdGlvbnNcbn0gJiB7W2tleTogc3RyaW5nXTogUHJvcFJlY29yZCB8IFByb3BSZWNvcmRXaXRoT3B0aW9uc31cbi8vIE9wdGlvbnMgdmFyaWFudFxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9wU2VjdGlvblN5bWJvbCA9ICdfZGVmYXVsdFByb3BTZWN0aW9uJ1xuXG5leHBvcnQgdHlwZSBFbWl0QXJnUmVmZXJlbmNlID0gUmVjb3JkPHN0cmluZywge3R5cGU6IHN0cmluZzsgZGVzY3JpcHRpb24/OiBzdHJpbmd9PlxuZXhwb3J0IHR5cGUgRW1pdFJlZmVyZW5jZSA9IHtcbiAgYXJncz86IEVtaXRBcmdSZWZlcmVuY2VcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn1cbmV4cG9ydCB0eXBlIEVtaXRSZWNvcmQ8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gPSBSZWNvcmQ8VCwgRW1pdFJlZmVyZW5jZT5cblxuZXhwb3J0IHR5cGUgU2xvdFNjb3BlUmVmZXJlbmNlID0gUmVjb3JkPFxuICBzdHJpbmcsXG4gIHtcbiAgICB0eXBlOiBzdHJpbmcgfCBzdHJpbmdbXVxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgbm90WWV0SW1wbGVtZW50ZWQ/OiBib29sZWFuXG4gIH1cbj5cbmV4cG9ydCB0eXBlIFNsb3RSZWZlcmVuY2UgPSB7XG4gIHNjb3BlPzogU2xvdFNjb3BlUmVmZXJlbmNlXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG59XG5leHBvcnQgdHlwZSBTbG90UmVjb3JkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+ID0gUmVjb3JkPFQsIFNsb3RSZWZlcmVuY2U+XG5cbmV4cG9ydCBjb25zdCBlbnVtIFN0eWxlS2luZCB7XG4gIEJvb3RzdHJhcENsYXNzID0gJ0JPT1RTVFJBUC1DTEFTUycsXG4gIEJzdm5DbGFzcyA9ICdCU1ZOLUNMQVNTJyxcbiAgT3ZlcnJpZGVDbGFzcyA9ICdPVkVSUklERS1DTEFTUycsXG4gIFRhZyA9ICdUQUcnLFxuICBOb25lID0gJ05PTkUnLFxufVxuZXhwb3J0IGludGVyZmFjZSBTdHlsZVNwZWMge1xuICBraW5kOiBTdHlsZUtpbmRcbiAgdmFsdWU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50U2VjdGlvbiA9ICdQcm9wZXJ0aWVzJyB8ICdFdmVudHMnIHwgJ1Nsb3RzJ1xuZXhwb3J0IHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlID0gUmVjb3JkPFxuICBzdHJpbmcsXG4gIHtcbiAgICBzdHlsZVNwZWM/OiBTdHlsZVNwZWNcbiAgICAvKipcbiAgICAgKiBVc2UgcGFja2FnZSBkaXJlY3RvcnkgcmVsYXRpdmUgbGlua3MuIGV4OiBCQWNjb3JkaW9uLnZ1ZSA9PiAvQkFjY29yZGlvbi9CQWNjb3JkaW9uLnZ1ZSAoc2xhc2ggcmVxdWlyZWQpXG4gICAgICpcbiAgICAgKiBJZiBwYXRoIGlzIGVtcHR5IHN0cmluZywgaXQgZGVmYXVsdHMgdG8gdGhlIHBhY2thZ2UgZGlyZWN0b3J5LiBJZiBudWxsLCBpdCBkb2VzIG5vdCByZW5kZXIgdGhlIGJ1dHRvblxuICAgICAqL1xuICAgIHNvdXJjZVBhdGg6IHN0cmluZyB8IG51bGxcbiAgICBwcm9wczogUHJvcFJlY29yZFdpdGhPcHRpb25zIHwgUHJvcFJlY29yZCB8IFByb3BSZWNvcmRXaXRoTXVsdGlwbGVTZWN0aW9uc1xuICAgIGVtaXRzPzogRW1pdFJlY29yZFxuICAgIHNsb3RzPzogU2xvdFJlY29yZFxuICAgIHNlY3Rpb25zPzogQ29tcG9uZW50U2VjdGlvbltdXG4gIH1cbj5cblxuZXhwb3J0IHR5cGUgQ29sbGVjdGl2ZU1lbWJlcnNSZXNwb25zZSA9IHtcbiAgTWVtYmVySWQ6IG51bWJlclxuICBjcmVhdGVkQXQ6IHN0cmluZ1xuICB0eXBlOiBzdHJpbmdcbiAgcm9sZTogc3RyaW5nXG4gIHRpZXI6IHN0cmluZ1xuICBpc0FjdGl2ZTogYm9vbGVhblxuICB0b3RhbEFtb3VudERvbmF0ZWQ6IG51bWJlclxuICBjdXJyZW5jeTogc3RyaW5nXG4gIGxhc3RUcmFuc2FjdGlvbkF0OiBzdHJpbmdcbiAgbGFzdFRyYW5zYWN0aW9uQW1vdW50OiBudW1iZXJcbiAgcHJvZmlsZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBjb21wYW55OiBudWxsIHwgbnVsbFxuICBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbFxuICBpbWFnZTogc3RyaW5nIHwgbnVsbFxuICBlbWFpbDogbnVsbCB8IHN0cmluZ1xuICB0d2l0dGVyOiBudWxsIHwgc3RyaW5nXG4gIGdpdGh1Yjogc3RyaW5nIHwgbnVsbFxuICB3ZWJzaXRlOiBudWxsIHwgc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIENvbGxlY3RpdmVQYXJ0aWFsUmVzcG9uc2UgPSB7XG4gIG1lbWJlcnM6IENvbGxlY3RpdmVNZW1iZXJzUmVzcG9uc2VbXVxufVxuXG5leHBvcnQgdHlwZSBTY3JvbGxzcHlJdGVtID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlU2Nyb2xsc3B5PlsnbGlzdCddWyd2YWx1ZSddWzBdXG5leHBvcnQgdHlwZSBIZWFkZXJJdGVtID0gU2Nyb2xsc3B5SXRlbSAmIHt0YWc6IHN0cmluZzsgbGV2ZWw6IG51bWJlcn1cbmV4cG9ydCB0eXBlIENvbnRlbnRzSXRlbSA9IEhlYWRlckl0ZW0gJiB7Y2hpbGRyZW46IENvbnRlbnRzSXRlbVtdfVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9vYmplY3RVdGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtleHBvcnQgY29uc3QgcGljayA9IDxcbiAgQSBleHRlbmRzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj4sXG4gIGNvbnN0IEIgZXh0ZW5kcyBSZWFkb25seUFycmF5PFByb3BlcnR5S2V5Pixcbj4oXG4gIG9ialRvUGx1Y2s6IFJlYWRvbmx5PEE+LFxuICBrZXlzVG9QbHVjazogUmVhZG9ubHk8Qj4gfCByZWFkb25seSAoa2V5b2YgQSlbXVxuKTogUGljazxBLCBCW251bWJlcl0+ID0+XG4gIFsuLi5rZXlzVG9QbHVja10ucmVkdWNlKFxuICAgIChtZW1vLCBwcm9wKSA9PiB7XG4gICAgICBtZW1vW3Byb3BdID0gb2JqVG9QbHVja1twcm9wXVxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LFxuICAgIHt9IGFzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj5cbiAgKSBhcyBQaWNrPEEsIEJbbnVtYmVyXT5cblxuZXhwb3J0IGNvbnN0IG9taXQgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IE9taXQ8QSwgQltudW1iZXJdPiA9PlxuICBPYmplY3Qua2V5cyhvYmpUb1BsdWNrKVxuICAgIC5maWx0ZXIoKGtleSkgPT4gIWtleXNUb1BsdWNrLm1hcCgoZWwpID0+IGVsLnRvU3RyaW5nKCkpLmluY2x1ZGVzKGtleSkpXG4gICAgLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+ICh7Li4ucmVzdWx0LCBba2V5XTogb2JqVG9QbHVja1trZXldfSksIHt9IGFzIE9taXQ8QSwgQltudW1iZXJdPilcblxuLy8gQ29udmVydHMgUGFzY2FsQ2FzZSBvciBjYW1lbENhc2UgdG8ga2ViYWItY2FzZVxuZXhwb3J0IGNvbnN0IGtlYmFiQ2FzZSA9IChzdHI6IHN0cmluZykgPT4gc3RyLnJlcGxhY2UoL1xcQihbQS1aXSkvZywgJy0kMScpLnRvTG93ZXJDYXNlKClcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvY29tbW9uUHJvcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2NvbW1vblByb3BzLnRzXCI7aW1wb3J0IHR5cGUge1Byb3BSZWZlcmVuY2V9IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCBjb21tb25Qcm9wcyA9ICgpID0+XG4gICh7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gYHRydWVgLCBwbGFjZXMgdGhlIGNvbXBvbmVudCBpbiB0aGUgYWN0aXZlIHN0YXRlIHdpdGggYWN0aXZlIHN0eWxpbmcnLFxuICAgIH0sXG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6ICdhY3RpdmUnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiQ29uZmlndXJlIHRoZSBhY3RpdmUgQ1NTIGNsYXNzIGFwcGxpZWQgd2hlbiB0aGUgbGluayBpcyBhY3RpdmUuIFR5cGljYWxseSB5b3Ugd2lsbCB3YW50IHRvIHNldCB0aGlzIHRvIGNsYXNzIG5hbWUgJ2FjdGl2ZSdcIixcbiAgICB9LFxuICAgIGFsdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmFsdWUgdG8gc2V0IGZvciB0aGUgYGFsdGAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGFyaWFDb250cm9sczoge1xuICAgICAgdHlwZTogJ0FyaWFJbnZhbGlkJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnSWYgdGhpcyBjb21wb25lbnQgY29udHJvbHMgYW5vdGhlciBjb21wb25lbnQgb3IgZWxlbWVudCwgc2V0IHRoaXMgdG8gdGhlIElEIG9mIHRoZSBjb250cm9sbGVkIGNvbXBvbmVudCBvciBlbGVtZW50JyxcbiAgICB9LFxuICAgIGFyaWFEZXNjcmliZWRieToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgZGVzY3JpcHRpb24gZm9yIHRoaXMgY29tcG9uZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBhcmlhLWRlc2NyaWJlZGJ5YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXJpYUludmFsaWQ6IHtcbiAgICAgIHR5cGU6ICdBcmlhSW52YWxpZCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NldHMgdGhlIGBhcmlhLWludmFsaWRgIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgd3JhcHBlciBlbGVtZW50LiBXaGVuIG5vdCBwcm92aWRlZCwgdGhlIGBzdGF0ZWAgcHJvcCB3aWxsIGNvbnRyb2wgdGhlIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhdXRvQ2xvc2U6IHtcbiAgICAgIHR5cGU6IFwiYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnXCIsXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb250cm9scyB0aGUgYXV0b21hdGljIGNsb3Npbmcgb2YgdGhlIGNvbXBvbmVudCB3aGVuIGNsaWNraW5nLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgICB9LFxuICAgIGF1dG9jb21wbGV0ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ2F1dG9jb21wbGV0ZScgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSBmb3JtIGNvbnRyb2xcIixcbiAgICB9LFxuICAgIGFyaWFMYWJlbDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHZhbHVlIG9mIGBhcmlhLWxhYmVsYCBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgYXJpYUxpdmU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiB0aGUgcmVuZGVyZWQgZWxlbWVudCBpcyBhbiBgYXJpYS1saXZlYCByZWdpb24gKGZvciBzY3JlZW4gcmVhZGVyIHVzZXJzKSwgc2V0IHRvIGVpdGhlciAncG9saXRlJyBvciAnYXNzZXJ0aXZlJ1wiLFxuICAgIH0sXG4gICAgYXJpYUxhYmVsbGVkYnk6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIGxhYmVsIGZvciB0aGlzIGNvbXBvbmVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgYXJpYS1sYWJlbGxlZGJ5YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXV0b2ZvY3VzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gYHRydWVgLCBhdHRlbXB0cyB0byBhdXRvLWZvY3VzIHRoZSBjb250cm9sIHdoZW4gaXQgaXMgbW91bnRlZCwgb3IgcmUtYWN0aXZhdGVkIHdoZW4gaW4gYSBrZWVwLWFsaXZlLiBEb2VzIG5vdCBzZXQgdGhlIGBhdXRvZm9jdXNgIGF0dHJpYnV0ZSBvbiB0aGUgY29udHJvbCcsXG4gICAgfSxcbiAgICBiZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gYmFja2dyb3VuZCBvZiB0aGUgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIGJvZHlCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGJvZHlCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgYm9yZGVyJyxcbiAgICB9LFxuICAgIGJvZHlDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvZHlUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9keVRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IHRleHQnLFxuICAgIH0sXG4gICAgYm9keVZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvcmRlcicsXG4gICAgfSxcbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICBkZWZhdWx0OiAnMCcsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCB0byBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZ3JlYXRlciB0aGFuIHplcm8sIHdpbGwgZGVib3VuY2UgdGhlIHVzZXIgaW5wdXQuIEhhcyBubyBlZmZlY3QgaWYgcHJvcCAnbGF6eScgaXMgc2V0XCIsXG4gICAgfSxcbiAgICBkZWJvdW5jZU1heFdhaXQ6IHtcbiAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgZGVmYXVsdDogJ05hTicsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbWF4aW11bSB0aW1lIGluIG1pbGxpc2Vjb25kcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0JydzIGludm9rZWRcIixcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0IHRvIGB0cnVlYCwgZGlzYWJsZXMgdGhlIGNvbXBvbmVudCdzIGZ1bmN0aW9uYWxpdHkgYW5kIHBsYWNlcyBpdCBpbiBhIGRpc2FibGVkIHN0YXRlXCIsXG4gICAgfSxcbiAgICBkaXNhYmxlZEZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXNhYmxlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgZGlzYWJsZWQgc3RhdGUnLFxuICAgIH0sXG4gICAgZmxvYXRpbmc6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCwgcmVuZGVycyBhIHNpbmdsZSBjb250cm9sIGZvcm0gd2l0aCBhIGZsb2F0aW5nIGxhYmVsLiBUaGlzIG9ubHkgd29ya3MgZm9yIGZvcm1zIHdoZXJlIHRoZSBpbW1lZGlhdGUgY2hpbGRyZW4gYXJlIGEgbGFiZWwgYW5kIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGNvbnRyb2xzLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgICB9LFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyQmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGZvb3RlckJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIGJvcmRlcicsXG4gICAgfSxcbiAgICBmb290ZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciB0ZXh0JyxcbiAgICB9LFxuICAgIGZvb3RlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdJRCBvZiB0aGUgZm9ybSB0aGF0IHRoZSBmb3JtIGNvbnRyb2wgYmVsb25ncyB0by4gU2V0cyB0aGUgYGZvcm1gIGF0dHJpYnV0ZSBvbiB0aGUgY29udHJvbCcsXG4gICAgfSxcbiAgICBmb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICcodmFsOiBzdHJpbmcsIGV2dDogRXZlbnQpID0+IHN0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVmZXJlbmNlIHRvIGEgZnVuY3Rpb24gZm9yIGZvcm1hdHRpbmcgdGhlIGlucHV0JyxcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlckJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBoZWFkZXJCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBib3JkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlclRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlclRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgdGV4dCcsXG4gICAgfSxcbiAgICBoZWFkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1VzZWQgdG8gc2V0IHRoZSBgaWRgIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgY29udGVudCwgYW5kIHVzZWQgYXMgdGhlIGJhc2UgdG8gZ2VuZXJhdGUgYW55IGFkZGl0aW9uYWwgZWxlbWVudCBJRHMgYXMgbmVlZGVkJyxcbiAgICB9LFxuICAgIGxhenlGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0LCB0aGUgaW5wdXQgaXMgZm9ybWF0dGVkIG9uIGJsdXIgaW5zdGVhZCBvZiBlYWNoIGtleXN0cm9rZSAoaWYgdGhlcmUgaXMgYSBmb3JtYXR0ZXIgc3BlY2lmaWVkKScsXG4gICAgfSxcbiAgICBsaW5rQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3Mgb3IgY2xhc3NlcyB0byBhcHBseSB0byB0aGUgaW5uZXIgbGluayBlbGVtZW50JyxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBJRCBvZiB0aGUgYXNzb2NpYXRlZCBkYXRhbGlzdCBlbGVtZW50IG9yIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBuYW1lYCBhdHRyaWJ1dGUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICBub0JhY2tkcm9wOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSBiYWNrZHJvcCcsXG4gICAgfSxcbiAgICBub0VsbGlwc2lzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRG8gbm90IHNob3cgZWxsaXBzaXMgYnV0dG9ucycsXG4gICAgfSxcbiAgICBub0dvdG9FbmRCdXR0b25zOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSGlkZXMgdGhlIGdvIHRvIGZpcnN0IGFuZCBnbyB0byBsYXN0IHBhZ2UgYnV0dG9ucycsXG4gICAgfSxcbiAgICBub0hlYWRlcjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgIGhlYWRlcicsXG4gICAgfSxcbiAgICBub0hlYWRlckNsb3NlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSBoZWFkZXIgY2xvc2UgYnV0dG9uJyxcbiAgICB9LFxuICAgIG5vSG92ZXJQYXVzZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIHRydWUsIGRpc2FibGVzIHBhdXNpbmcgdGhlIHRpbWVyIG9uIGhvdmVyIGJlaGF2aW9yJyxcbiAgICB9LFxuICAgIG5vUmVzdW1lT25Ib3ZlckxlYXZlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gdHJ1ZSwgdGhlIHRpbWVyIHdpbGwgbm90IHJlc3VtZSB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIGVsZW1lbnQuIEl0IHdpbGwgbmVlZCB0byBiZSBtYW51YWxseSByZXN1bWVkJyxcbiAgICB9LFxuICAgIG5vdmFsaWRhdGU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZGlzYWJsZXMgYnJvd3NlciBuYXRpdmUgSFRNTDUgdmFsaWRhdGlvbiBvbiBjb250cm9scyBpbiB0aGUgZm9ybScsXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiAncmVhZG9ubHkgQ2hlY2tib3hPcHRpb25SYXdbXScsXG4gICAgICBkZWZhdWx0OiAnKCkgPT4gW10nLFxuICAgICAgZGVzY3JpcHRpb246ICdBcnJheSBvZiBpdGVtcyB0byByZW5kZXIgaW4gdGhlIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBwbGFpbjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlciB0aGUgZm9ybSBjb250cm9sIGluIHBsYWluIG1vZGUsIHJhdGhlciB0aGFuIGN1c3RvbSBzdHlsZWQgbW9kZScsXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiBcIicnXCIsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcGxhaW50ZXh0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTZXQgdGhlIGZvcm0gY29udHJvbCBhcyByZWFkb25seSBhbmQgcmVuZGVycyB0aGUgY29udHJvbCB0byBsb29rIGxpa2UgcGxhaW4gdGV4dCAobm8gYm9yZGVycyknLFxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWRkcyB0aGUgYHJlcXVpcmVkYCBhdHRyaWJ1dGUgdG8gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICByZWFkb25seToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgYHJlYWRvbmx5YCBhdHRyaWJ1dGUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgQVJJQSBhdHRyaWJ1dGUgYHJvbGVgIHRvIGEgc3BlY2lmaWMgdmFsdWUnLFxuICAgIH0sXG4gICAgcm91bmRlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbi4gVGhlIGBzcXVhcmVgIHByb3AgdGFrZXMgcHJlY2VkZW5jZS4gUmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMnLFxuICAgIH0sXG4gICAgcm91bmRlZEJvdHRvbToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgYm90dG9tYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRFbmQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYGVuZGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkU3RhcnQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYHN0YXJ0YCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRUb3A6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYHRvcGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiAnU2l6ZScsXG4gICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0IHRoZSBzaXplIG9mIHRoZSBjb21wb25lbnQncyBhcHBlYXJhbmNlLiAnc20nLCAnbWQnIChkZWZhdWx0KSwgb3IgJ2xnJ1wiLFxuICAgIH0sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVVJMIHRvIHNldCBmb3IgdGhlIGBzcmNgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgdHlwZTogJ1ZhbGlkYXRpb25TdGF0ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRyb2xzIHRoZSB2YWxpZGF0aW9uIHN0YXRlIGFwcGVhcmFuY2Ugb2YgdGhlIGNvbXBvbmVudC4gYHRydWVgIGZvciB2YWxpZCwgYGZhbHNlYCBmb3IgaW52YWxpZCwgb3IgYG51bGxgIGZvciBubyB2YWxpZGF0aW9uIHN0YXRlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBzdWJ0aXRsZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnaDYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBzdWJ0aXRsZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZVRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogJ2JvZHktc2Vjb25kYXJ5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgc3VidGl0bGUgdGV4dCcsXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZycsXG4gICAgfSxcbiAgICB0ZXh0RmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHRleHQgbGFiZWwnLFxuICAgIH0sXG4gICAgdGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSB0ZXh0JyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0aXRsZUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRpdGxlVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdoNCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXJzIHRoZSBmZWVkYmFjayB0ZXh0IGluIGEgcnVkaW1lbnRhcnkgdG9vbHRpcCBzdHlsZScsXG4gICAgfSxcbiAgICB2YWxpZGF0ZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQsIGFkZHMgdGhlIEJvb3RzdHJhcCBjbGFzcyAnd2FzLXZhbGlkYXRlZCcgb24gdGhlIGZvcm0sIHRyaWdnZXJpbmcgdGhlIG5hdGl2ZSBicm93c2VyIHZhbGlkYXRpb24gc3RhdGVzXCIsXG4gICAgfSxcbiAgICB2YWx1ZUZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd2YWx1ZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdmFsdWUnLFxuICAgIH0sXG4gICAgdmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgY29tcG9uZW50LiBXaGVuIGltcGxlbWVudGVkIGBiZy12YXJpYW50YCBhbmQgYHRleHQtdmFyaWFudGAgd2lsbCB0YWtlIHByZWNlZGVuY2UnLFxuICAgIH0sXG4gICAgd3JhcHBlckF0dHJzOiB7XG4gICAgICB0eXBlOiAnUmVhZG9ubHk8QXR0cnNWYWx1ZT4nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCcsXG4gICAgfSxcbiAgICB3cmFwcGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhZGQgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCcsXG4gICAgfSxcbiAgICBwbGFjZW1lbnQ6IHtcbiAgICAgIHR5cGU6ICdQbGFjZW1lbnQnLFxuICAgICAgZGVmYXVsdDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1BsYWNlbWVudCBvZiBhIGZsb2F0aW5nIGVsZW1lbnQnLFxuICAgIH0sXG4gIH0pIGFzIGNvbnN0XG5cbmNvbnN0IHNpbmdsZXRvblByb3BzID0gT2JqZWN0LmZyZWV6ZShjb21tb25Qcm9wcygpKVxuXG5leHBvcnQgY29uc3QgYnVpbGRDb21tb25Qcm9wcyA9IChcbiAgb2JqPzogUGFydGlhbDxSZWNvcmQ8a2V5b2YgdHlwZW9mIHNpbmdsZXRvblByb3BzLCBQYXJ0aWFsPFByb3BSZWZlcmVuY2U+Pj5cbik6IFJlYWRvbmx5PHR5cGVvZiBzaW5nbGV0b25Qcm9wcz4gPT4ge1xuICBpZiAoIW9iaikgcmV0dXJuIHNpbmdsZXRvblByb3BzXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgY29uc3QgbXlPYmplY3QgPSBjb21tb25Qcm9wcygpIGFzIFJlY29yZDxzdHJpbmcsIGFueT5cblxuICAvLyBNZXJnZSB0aGUgcHJvdmlkZWQgb2JqZWN0IGludG8gdGhlIGNvbW1vbiBwcm9wc1xuICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIG15T2JqZWN0W2tleV0gPSB7XG4gICAgICAuLi5teU9iamVjdFtrZXldLFxuICAgICAgLi4udmFsdWUsXG4gICAgfVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG15T2JqZWN0IGFzIGFueSlcbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1vbkVtaXRzID0ge1xuICBjYW5jZWw6IHt9LFxuICBvazoge30sXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2ltYWdlUHJvcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2ltYWdlUHJvcHMudHNcIjtpbXBvcnQgdHlwZSB7QkltZ1Byb3BzfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5pbXBvcnQgdHlwZSB7UHJvcFJlY29yZH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQge2J1aWxkQ29tbW9uUHJvcHN9IGZyb20gJy4vY29tbW9uUHJvcHMnXG5pbXBvcnQge3BpY2t9IGZyb20gJy4vb2JqZWN0VXRpbHMnXG5cbmV4cG9ydCBjb25zdCBsaW5rVG8gPSAnL2RvY3MvY29tcG9uZW50cy9pbWFnZSdcblxuZXhwb3J0IGNvbnN0IGltYWdlUHJvcHMgPSB7XG4gIGJsYW5rOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnQ3JlYXRlcyBhIGJsYW5rL3RyYW5zcGFyZW50IGltYWdlIHZpYSBhbiBTVkcgZGF0YSBVUkknLFxuICB9LFxuICBibGFua0NvbG9yOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3RyYW5zcGFyZW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGNvbG9yIG9mIHRoZSBibGFuayBpbWFnZSB0byB0aGUgQ1NTIGNvbG9yIHZhbHVlIHNwZWNpZmllZCcsXG4gIH0sXG4gIGJsb2NrOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0ZvcmNlcyB0aGUgaW1hZ2UgdG8gZGlzcGxheSBhcyBhIGJsb2NrIGVsZW1lbnQgcmF0aGVyIHRoYW4gdGhlIGJyb3dzZXIgZGVmYXVsdCBvZiBpbmxpbmUtYmxvY2sgZWxlbWVudCcsXG4gIH0sXG4gIGZsdWlkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNYWtlcyB0aGUgaW1hZ2UgcmVzcG9uc2l2ZS4gVGhlIGltYWdlIHdpbGwgc2hyaW5rIGFzIG5lZWRlZCBvciBncm93IHVwIHRvIHRoZSBpbWFnZSdzIG5hdGl2ZSB3aWR0aFwiLFxuICB9LFxuICBmbHVpZEdyb3c6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNpbWlsYXIgdG8gdGhlICdmbHVpZCcgcHJvcCwgYnV0IGFsbG93cyB0aGUgaW1hZ2UgdG8gc2NhbGUgdXAgcGFzdCBpdHMgbmF0aXZlIHdpZHRoXCIsXG4gIH0sXG4gIGhlaWdodDoge1xuICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpbWFnZSdzICdoZWlnaHQnIGF0dHJpYnV0ZVwiLFxuICB9LFxuICBsYXp5OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VuYWJsZXMgbGF6eSBsb2FkaW5nIG9mIHRoZSBpbWFnZSB2aWEgdGhlIGBsb2FkaW5nYCBhdHRyaWJ1dGUgb24gdGhlIHVuZGVybHlpbmcgaW1hZ2UuJyxcbiAgfSxcbiAgcGxhY2VtZW50OiB7XG4gICAgdHlwZTogXCJFeHRyYWN0PFBsYWNlbWVudCwgJ3N0YXJ0JyB8ICdlbmQnPiB8ICdjZW50ZXInXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1NldHMgdGhlIGFsaWdubWVudCBvZiB0aGUgaW1hZ2UgdG8gdGhlIHN0YXJ0LCBlbmQsIG9yIGNlbnRlciwgc2VlIGFib3ZlIGZvciBkZXRhaWxzJyxcbiAgfSxcbiAgc2l6ZXM6IHtcbiAgICB0eXBlOiAnc3RyaW5nIHwgc3RyaW5nW10nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdPbmUgb3IgbW9yZSBzdHJpbmdzIHNlcGFyYXRlZCBieSBjb21tYXMgKG9yIGFuIGFycmF5IG9mIHN0cmluZ3MpLCBpbmRpY2F0aW5nIGEgc2V0IG9mIHNvdXJjZSBzaXplcy4gT3B0aW9uYWxseSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggdGhlIHNyY3NldCBwcm9wJyxcbiAgfSxcbiAgc3Jjc2V0OiB7XG4gICAgdHlwZTogJ3N0cmluZyB8IHN0cmluZ1tdJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnT25lIG9yIG1vcmUgc3RyaW5ncyBzZXBhcmF0ZWQgYnkgY29tbWFzIChvciBhbiBhcnJheSBvZiBzdHJpbmdzKSwgaW5kaWNhdGluZyBwb3NzaWJsZSBpbWFnZSBzb3VyY2VzIGZvciB0aGUgdXNlciBhZ2VudCB0byB1c2UnLFxuICB9LFxuICB0aHVtYm5haWw6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdBZGRzIGEgdGh1bWJuYWlsIGJvcmRlciBhcm91bmQgdGhlIGltYWdlJyxcbiAgfSxcbiAgd2lkdGg6IHtcbiAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIHZhbHVlIHRvIHNldCBvbiB0aGUgaW1hZ2UncyAnd2lkdGgnIGF0dHJpYnV0ZVwiLFxuICB9LFxuICAuLi5waWNrKFxuICAgIGJ1aWxkQ29tbW9uUHJvcHMoe1xuICAgICAgdGFnOiB7XG4gICAgICAgIGRlZmF1bHQ6ICdpbWcnLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBbJ2FsdCcsICdyb3VuZGVkJywgJ3JvdW5kZWRCb3R0b20nLCAncm91bmRlZEVuZCcsICdyb3VuZGVkU3RhcnQnLCAncm91bmRlZFRvcCcsICdzcmMnLCAndGFnJ11cbiAgKSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkltZ1Byb3BzPlxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2NhcmQuZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2NhcmQuZGF0YS50c1wiO2ltcG9ydCB0eXBlIHtcbiAgQkNhcmRCb2R5UHJvcHMsXG4gIEJDYXJkQm9keVNsb3RzLFxuICBCQ2FyZEZvb3RlclByb3BzLFxuICBCQ2FyZEZvb3RlclNsb3RzLFxuICBCQ2FyZEdyb3VwUHJvcHMsXG4gIEJDYXJkR3JvdXBTbG90cyxcbiAgQkNhcmRIZWFkZXJQcm9wcyxcbiAgQkNhcmRIZWFkZXJTbG90cyxcbiAgQkNhcmRJbWdQcm9wcyxcbiAgQkNhcmRQcm9wcyxcbiAgQkNhcmRTbG90cyxcbiAgQkNhcmRTdWJ0aXRsZVByb3BzLFxuICBCQ2FyZFN1YnRpdGxlU2xvdHMsXG4gIEJDYXJkVGV4dFByb3BzLFxuICBCQ2FyZFRleHRTbG90cyxcbiAgQkNhcmRUaXRsZVByb3BzLFxuICBCQ2FyZFRpdGxlU2xvdHMsXG59IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB7XG4gIHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlLFxuICBkZWZhdWx0UHJvcFNlY3Rpb25TeW1ib2wsXG4gIHR5cGUgUHJvcFJlY29yZCxcbiAgdHlwZSBTbG90UmVjb3JkLFxuICBTdHlsZUtpbmQsXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHtvbWl0LCBwaWNrfSBmcm9tICcuLi8uLi91dGlscy9vYmplY3RVdGlscydcbmltcG9ydCB7aW1hZ2VQcm9wcywgbGlua1RvfSBmcm9tICcuLi8uLi91dGlscy9pbWFnZVByb3BzJ1xuaW1wb3J0IHtidWlsZENvbW1vblByb3BzfSBmcm9tICcuLi8uLi91dGlscy9jb21tb25Qcm9wcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2FkOiAoKTogQ29tcG9uZW50UmVmZXJlbmNlID0+ICh7XG4gICAgQkNhcmQ6IHtcbiAgICAgIHNvdXJjZVBhdGg6ICcvQkNhcmQvQkNhcmQudnVlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIC4uLnBpY2soXG4gICAgICAgICAgYnVpbGRDb21tb25Qcm9wcyh7XG4gICAgICAgICAgICBib2R5Qm9yZGVyVmFyaWFudDoge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBib3JkZXIgKE5ZST8pJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ2JnVmFyaWFudCcsXG4gICAgICAgICAgICAnYm9keUJnVmFyaWFudCcsXG4gICAgICAgICAgICAnYm9keUJvcmRlclZhcmlhbnQnLFxuICAgICAgICAgICAgJ2JvZHlDbGFzcycsXG4gICAgICAgICAgICAnYm9keVRhZycsXG4gICAgICAgICAgICAnYm9keVRleHRWYXJpYW50JyxcbiAgICAgICAgICAgICdib3JkZXJWYXJpYW50JyxcbiAgICAgICAgICAgICdmb290ZXInLFxuICAgICAgICAgICAgJ2Zvb3RlckJnVmFyaWFudCcsXG4gICAgICAgICAgICAnZm9vdGVyQm9yZGVyVmFyaWFudCcsXG4gICAgICAgICAgICAnZm9vdGVyQ2xhc3MnLFxuICAgICAgICAgICAgJ2Zvb3RlclRhZycsXG4gICAgICAgICAgICAnZm9vdGVyVGV4dFZhcmlhbnQnLFxuICAgICAgICAgICAgJ2Zvb3RlclZhcmlhbnQnLFxuICAgICAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICAgICAnaGVhZGVyQmdWYXJpYW50JyxcbiAgICAgICAgICAgICdoZWFkZXJCb3JkZXJWYXJpYW50JyxcbiAgICAgICAgICAgICdoZWFkZXJDbGFzcycsXG4gICAgICAgICAgICAnaGVhZGVyVGFnJyxcbiAgICAgICAgICAgICdoZWFkZXJUZXh0VmFyaWFudCcsXG4gICAgICAgICAgICAnaGVhZGVyVmFyaWFudCcsXG4gICAgICAgICAgICAnc3VidGl0bGUnLFxuICAgICAgICAgICAgJ3N1YnRpdGxlVGFnJyxcbiAgICAgICAgICAgICdzdWJ0aXRsZVRleHRWYXJpYW50JyxcbiAgICAgICAgICAgICd0YWcnLFxuICAgICAgICAgICAgJ3RleHRWYXJpYW50JyxcbiAgICAgICAgICAgICd0aXRsZScsXG4gICAgICAgICAgICAndGl0bGVUYWcnLFxuICAgICAgICAgICAgJ3ZhcmlhbnQnLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgYWxpZ246IHtcbiAgICAgICAgICB0eXBlOiAnQWxpZ25tZW50VGV4dEhvcml6b250YWwnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZXh0IGFsaWdubWVudCBmb3IgdGhlIGNhcmQncyBjb250ZW50OiAnc3RhcnQnLCAnY2VudGVyJyBvciAnZW5kJ1wiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5VGV4dDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IFwiJydcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgY2FyZCBib2R5LCBkZWZhdWx0IHNsb3QgdGFrZXMgcHJlY2VkZW5jZScsXG4gICAgICAgIH0sXG4gICAgICAgIGltZ0FsdDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VSTCBmb3IgdGhlIG9wdGlvbmFsIGltYWdlJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChkZXNjcmlwdGlvbiBpbmNvcnJlY3Q7IHNob3VsZCBkZXNjcmliZSBhbHQgdGV4dCwgbm90IFVSTClcbiAgICAgICAgfSxcbiAgICAgICAgaW1nSGVpZ2h0OiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB2YWx1ZSB0byBzZXQgb24gdGhlIGltYWdlJ3MgJ2hlaWdodCcgYXR0cmlidXRlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGltZ1BsYWNlbWVudDoge1xuICAgICAgICAgIHR5cGU6ICdQbGFjZW1lbnQgfCBcIm92ZXJsYXlcIicsXG4gICAgICAgICAgZGVmYXVsdDogJ3RvcCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIlBsYWNlbWVudCBmb3IgdGhlIG9wdGlvbmFsIGltYWdlICgndG9wJywgJ2JvdHRvbScsICdzdGFydCcsICdlbmQnLCBvciAnb3ZlcmxheScpXCIsIC8vIFRPRE8gc2ltaWxhciBjb250ZW50IHRvIEJDYXJkSW1nL3BsYWNlbWVudCAoc2ltaWxhciBkZXNjcmlwdGlvbiBhbmQgdHlwZSlcbiAgICAgICAgfSxcbiAgICAgICAgaW1nU3JjOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVVJMIGZvciB0aGUgb3B0aW9uYWwgaW1hZ2UnLFxuICAgICAgICB9LFxuICAgICAgICBpbWdXaWR0aDoge1xuICAgICAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpbWFnZSdzICd3aWR0aCcgYXR0cmlidXRlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG5vQm9keToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlIHJlbmRlcmluZyBvZiB0aGUgZGVmYXVsdCBpbm5lciBjYXJkLWJvZHkgZWxlbWVudCcsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJDYXJkUHJvcHM+LFxuICAgICAgZW1pdHM6IHt9LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBwbGFjZSBpbiB0aGUgY2FyZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIGN1c3RvbSByZW5kZXJpbmcgb2YgZm9vdGVyIGNvbnRlbnQnLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvciBjdXN0b20gcmVuZGVyaW5nIG9mIGhlYWRlciBjb250ZW50JyxcbiAgICAgICAgfSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdGb3IgY3VzdG9tIHJlbmRlcmluZyBvZiBpbWFnZSBjb250ZW50JyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkNhcmRTbG90cz4sXG4gICAgfSxcbiAgICBCQ2FyZEJvZHk6IHtcbiAgICAgIHN0eWxlU3BlYzoge2tpbmQ6IFN0eWxlS2luZC5PdmVycmlkZUNsYXNzLCB2YWx1ZTogJy5jYXJkLWJvZHksIC5jYXJkLWltZy1vdmVybGF5J30sXG4gICAgICBzb3VyY2VQYXRoOiAnL0JDYXJkL0JDYXJkQm9keS52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucGljayhidWlsZENvbW1vblByb3BzKCksIFtcbiAgICAgICAgICAnYmdWYXJpYW50JyxcbiAgICAgICAgICAnc3VidGl0bGUnLFxuICAgICAgICAgICdzdWJ0aXRsZVRhZycsXG4gICAgICAgICAgJ3N1YnRpdGxlVGV4dFZhcmlhbnQnLFxuICAgICAgICAgICd0YWcnLFxuICAgICAgICAgICd0ZXh0VmFyaWFudCcsXG4gICAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgICAndGl0bGVUYWcnLFxuICAgICAgICAgICd2YXJpYW50JyxcbiAgICAgICAgXSksXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIC8vIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGFwcGxpZXMgb3ZlcmxheSBzdHlsaW5nIHRvIHRoZSBjYXJkIGJvZHknIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBjYXJkIGJvZHksIGRlZmF1bHQgc2xvdCB0YWtlcyBwcmVjZWRlbmNlJywgLy8gVE9ETyBzaW1pbGFyIGNvbnRlbnQgdG8gQkNhcmQvYm9keVRleHQgKHNpbWlsYXIgZGVzY3JpcHRpb24pXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJDYXJkQm9keVByb3BzPixcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGNhcmQgYm9keScsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IHRvIHBsYWNlIGluIHRoZSBjYXJkIHRpdGxlJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3VidGl0bGU6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGNhcmQgc3VidGl0bGUnLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCQ2FyZEJvZHlTbG90cz4sXG4gICAgfSxcbiAgICBCQ2FyZEZvb3Rlcjoge1xuICAgICAgc291cmNlUGF0aDogJy9CQ2FyZC9CQ2FyZEZvb3Rlci52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucGljayhidWlsZENvbW1vblByb3BzKCksIFtcbiAgICAgICAgICAnYmdWYXJpYW50JyxcbiAgICAgICAgICAnYm9yZGVyVmFyaWFudCcsXG4gICAgICAgICAgJ3RhZycsXG4gICAgICAgICAgJ3RleHRWYXJpYW50JyxcbiAgICAgICAgICAndmFyaWFudCcsXG4gICAgICAgIF0pLFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBjYXJkIGZvb3RlciwgZGVmYXVsdCBzbG90IHRha2VzIHByZWNlZGVuY2UnLCAvLyBUT0RPIHNpbWlsYXIgY29udGVudCB0byBCQ2FyZC9ib2R5VGV4dCAoc2ltaWxhciBkZXNjcmlwdGlvbiBzdHJ1Y3R1cmUpXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJDYXJkRm9vdGVyUHJvcHM+LFxuICAgICAgZW1pdHM6IHt9LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBwbGFjZSBpbiB0aGUgY2FyZCBmb290ZXInLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCQ2FyZEZvb3RlclNsb3RzPixcbiAgICB9LFxuICAgIEJDYXJkR3JvdXA6IHtcbiAgICAgIHN0eWxlU3BlYzoge2tpbmQ6IFN0eWxlS2luZC5PdmVycmlkZUNsYXNzLCB2YWx1ZTogJy5jYXJkLWRlY2ssIC5jYXJkLWdyb3VwLCAuY2FyZC1jb2x1bW5zJ30sXG4gICAgICBzb3VyY2VQYXRoOiAnL0JDYXJkL0JDYXJkR3JvdXAudnVlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIC4uLnBpY2soYnVpbGRDb21tb25Qcm9wcygpLCBbJ3RhZyddKSxcbiAgICAgICAgY29sdW1uczoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgcmVuZGVycyB0aGUgY2FyZCBncm91cCBpbiBhIG1hc29ucnktbGlrZSBjb2x1bW5hciBzdHlsZScsXG4gICAgICAgIH0sXG4gICAgICAgIGRlY2s6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgcmVuZGVycyB0aGUgY2FyZCBncm91cCB3aXRoIGd1dHRlcnMgYmV0d2VlbiBjYXJkcycsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoYWRkIGNvbW1hIGFmdGVyIFwiV2hlbiBzZXRcIilcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkNhcmRHcm91cFByb3BzPixcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgKGNhcmRzKSB0byBwbGFjZSBpbiB0aGUgY2FyZCBncm91cCcsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJDYXJkR3JvdXBTbG90cz4sXG4gICAgfSxcbiAgICBCQ2FyZEhlYWRlcjoge1xuICAgICAgc291cmNlUGF0aDogJy9CQ2FyZC9CQ2FyZEhlYWRlci52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucGljayhidWlsZENvbW1vblByb3BzKCksIFtcbiAgICAgICAgICAnYmdWYXJpYW50JyxcbiAgICAgICAgICAnYm9yZGVyVmFyaWFudCcsXG4gICAgICAgICAgJ3RhZycsXG4gICAgICAgICAgJ3RleHRWYXJpYW50JyxcbiAgICAgICAgICAndmFyaWFudCcsXG4gICAgICAgIF0pLFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBjYXJkIGhlYWRlciwgZGVmYXVsdCBzbG90IHRha2VzIHByZWNlZGVuY2UnLCAvLyBUT0RPIHNpbWlsYXIgY29udGVudCB0byBCQ2FyZC9ib2R5VGV4dCAoc2ltaWxhciBkZXNjcmlwdGlvbiBzdHJ1Y3R1cmUpXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJDYXJkSGVhZGVyUHJvcHM+LFxuICAgICAgZW1pdHM6IHt9LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBwbGFjZSBpbiB0aGUgY2FyZCBoZWFkZXInLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCQ2FyZEhlYWRlclNsb3RzPixcbiAgICB9LFxuICAgIEJDYXJkSW1nOiB7XG4gICAgICBzb3VyY2VQYXRoOiAnL0JDYXJkL0JDYXJkSW1nLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICBbZGVmYXVsdFByb3BTZWN0aW9uU3ltYm9sXToge1xuICAgICAgICAgIHBsYWNlbWVudDoge1xuICAgICAgICAgICAgdHlwZTogJ1BsYWNlbWVudCB8IFwib3ZlcmxheVwiJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICd0b3AnLFxuICAgICAgICAgICAgLy8gZGVzY3JpcHRpb246ICdQbGFjZW1lbnQgZm9yIHRoZSBpbWFnZSAoXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJzdGFydFwiLCBcImVuZFwiLCBvciBcIm92ZXJsYXlcIiknIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvbiAvLyBUT0RPIHNpbWlsYXIgY29udGVudCB0byBCQ2FyZC9pbWdQbGFjZW1lbnQgKHNpbWlsYXIgdHlwZSlcbiAgICAgICAgICB9LFxuICAgICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPEV4Y2x1ZGU8a2V5b2YgQkNhcmRJbWdQcm9wcywga2V5b2YgdHlwZW9mIGltYWdlUHJvcHM+PixcbiAgICAgICAgJ0JJbWcgcHJvcHMnOiB7XG4gICAgICAgICAgX29wdHM6IHtcbiAgICAgICAgICAgIGxpbmtUbyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9kYXRhOiBvbWl0KGltYWdlUHJvcHMsIFsncGxhY2VtZW50J10pLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7fSxcbiAgICB9LFxuICAgIEJDYXJkU3VidGl0bGU6IHtcbiAgICAgIHNvdXJjZVBhdGg6ICcvQkNhcmQvQkNhcmRTdWJ0aXRsZS52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucGljayhcbiAgICAgICAgICBidWlsZENvbW1vblByb3BzKHtcbiAgICAgICAgICAgIHRhZzoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiAnaDYnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHRWYXJpYW50OiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICdib2R5LXNlY29uZGFyeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFsndGFnJywgJ3RleHRWYXJpYW50J11cbiAgICAgICAgKSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgY2FyZCBib2R5LCBkZWZhdWx0IHNsb3QgdGFrZXMgcHJlY2VkZW5jZScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2hvdWxkIHNheSBcImNhcmQgc3VidGl0bGVcIiBpbnN0ZWFkIG9mIFwiY2FyZCBib2R5XCIpIC8vIFRPRE8gc2ltaWxhciBjb250ZW50IHRvIEJDYXJkL2JvZHlUZXh0IChzaW1pbGFyIGRlc2NyaXB0aW9uIHN0cnVjdHVyZSlcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkNhcmRTdWJ0aXRsZVByb3BzPixcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGNhcmQgc3VidGl0bGUnLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCQ2FyZFN1YnRpdGxlU2xvdHM+LFxuICAgIH0sXG4gICAgQkNhcmRUZXh0OiB7XG4gICAgICBzb3VyY2VQYXRoOiAnL0JDYXJkL0JDYXJkVGV4dC52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4ucGljayhcbiAgICAgICAgICBidWlsZENvbW1vblByb3BzKHtcbiAgICAgICAgICAgIHRhZzoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiAncCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFsndGFnJ11cbiAgICAgICAgKSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgY2FyZCB0ZXh0LCBkZWZhdWx0IHNsb3QgdGFrZXMgcHJlY2VkZW5jZScsIC8vIFRPRE8gc2ltaWxhciBjb250ZW50IHRvIEJDYXJkL2JvZHlUZXh0IChzaW1pbGFyIGRlc2NyaXB0aW9uIHN0cnVjdHVyZSlcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkNhcmRUZXh0UHJvcHM+LFxuICAgICAgZW1pdHM6IHt9LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBwbGFjZSBpbiB0aGUgY2FyZCB0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFNsb3RSZWNvcmQ8a2V5b2YgQkNhcmRUZXh0U2xvdHM+LFxuICAgIH0sXG4gICAgQkNhcmRUaXRsZToge1xuICAgICAgc291cmNlUGF0aDogJy9CQ2FyZC9CQ2FyZFRpdGxlLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5waWNrKFxuICAgICAgICAgIGJ1aWxkQ29tbW9uUHJvcHMoe1xuICAgICAgICAgICAgdGFnOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICdoNCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFsndGFnJ11cbiAgICAgICAgKSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgY2FyZCB0aXRsZSwgZGVmYXVsdCBzbG90IHRha2VzIHByZWNlZGVuY2UnLCAvLyBUT0RPIHNpbWlsYXIgY29udGVudCB0byBCQ2FyZC9ib2R5VGV4dCAoc2ltaWxhciBkZXNjcmlwdGlvbiBzdHJ1Y3R1cmUpXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJDYXJkVGl0bGVQcm9wcz4sXG4gICAgICBlbWl0czoge30sXG4gICAgICBzbG90czoge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IHRvIHBsYWNlIGluIHRoZSBjYXJkIHRpdGxlJyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFNsb3RSZWNvcmQ8a2V5b2YgQkNhcmRUaXRsZVNsb3RzPixcbiAgICB9LFxuICB9KSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFzQk8sSUFBTSwyQkFBMkI7OztBQ3RCa1gsSUFBTSxPQUFPLENBSXJhLFlBQ0EsZ0JBRUEsQ0FBQyxHQUFHLFdBQVcsRUFBRTtBQUFBLEVBQ2YsQ0FBQyxNQUFNLFNBQVM7QUFDZCxTQUFLLElBQUksSUFBSSxXQUFXLElBQUk7QUFDNUIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLENBQUM7QUFDSDtBQUVLLElBQU0sT0FBTyxDQUlsQixZQUNBLGdCQUVBLE9BQU8sS0FBSyxVQUFVLEVBQ25CLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQ3JFLE9BQU8sQ0FBQyxRQUFRLFNBQVMsRUFBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsV0FBVyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQXVCOzs7QUN0QjVGLElBQU0sY0FBYyxPQUNqQjtBQUFBLEVBQ0MsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1os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QSxZQUNmLG1CQUFtQjtBQUFBLGNBQ2pCLGFBQ0U7QUFBQSxZQUNKO0FBQUEsVUFDRixDQUFDO0FBQUEsVUFDRDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE9BQU87QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxVQUNULGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1QsYUFBYTtBQUFBO0FBQUEsUUFDZjtBQUFBLFFBQ0EsV0FBVztBQUFBLFVBQ1QsTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1QsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBLGNBQWM7QUFBQSxVQUNaLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxVQUNULGFBQ0U7QUFBQTtBQUFBLFFBQ0o7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxVQUNULGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ04s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
