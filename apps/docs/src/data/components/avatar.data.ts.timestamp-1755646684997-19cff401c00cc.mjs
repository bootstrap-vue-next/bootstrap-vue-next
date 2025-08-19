// src/types/index.ts
var defaultPropSectionSymbol = '_defaultPropSection'

// src/utils/objectUtils.ts
var pick = (objToPluck, keysToPluck) =>
  [...keysToPluck].reduce((memo, prop) => {
    memo[prop] = objToPluck[prop]
    return memo
  }, {})

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

// src/data/components/avatar.data.ts
var avatar_data_default = {
  load: () => ({
    BAvatar: {
      styleSpec: {kind: 'BSVN-CLASS' /* BsvnClass */},
      sourcePath: '/BAvatar/BAvatar.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ...pick(
            buildCommonProps({
              alt: {
                default: 'avatar',
              },
              rounded: {
                default: 'circle',
                description:
                  'Specifies the type of rounding to apply to the component or its children. The `square` prop takes precedence',
              },
              src: {
                description: 'Image URL to use for the avatar',
              },
              variant: {
                default: 'secondary',
              },
            }),
            [
              'ariaLabel',
              'alt',
              'bgVariant',
              'rounded',
              'roundedBottom',
              'roundedEnd',
              'roundedStart',
              'roundedTop',
              'src',
              'textVariant',
              'variant',
            ]
          ),
          badge: {
            type: 'boolean | string',
            default: false,
            description:
              'When `true` shows an empty badge on the avatar, alternatively set to a string for content in the badge',
          },
          badgeBgVariant: {
            type: 'ColorVariant | null',
            default: null,
            description:
              'Applies one of the Bootstrap theme color variants to the background of the badge',
          },
          badgeDotIndicator: {
            type: 'boolean',
            default: false,
            description:
              'When `true` shows a small dot indicator on the Avatar. All of the badge props are applied to the dot. `badge-dot-indicator` takes precedence over `badge`',
          },
          badgeTextVariant: {
            type: 'TextColorVariant | null',
            default: null,
            description: 'Applies one of the Bootstrap theme color variants to the text',
          },
          badgeVariant: {
            type: 'ColorVariant | null',
            default: 'primary',
            description: 'Applies one of the Bootstrap theme color variants to the badge',
          },
          badgePlacement: {
            type: 'CombinedPlacement',
            default: 'bottom-end',
            description:
              'Placement of the badge relative to the avatar. One of the values of `CombinedPlacement`',
          },
          badgePill: {
            type: 'boolean',
            default: false,
            description: 'Renders the badge with pill styling',
          },
          button: {
            type: 'boolean',
            default: false,
            description: 'When set to `true`, renders the avatar as a button',
          },
          buttonType: {
            type: 'ButtonType',
            default: 'button',
            description:
              'Type of button to render (i.e. `button`, `submit`, `reset`). Has no effect if prop button is not set',
          },
          size: {
            type: 'Size | string',
            default: void 0,
            description: 'Size of the avatar. Refer to the documentation for details',
          },
          square: {
            type: 'boolean',
            default: false,
            description:
              'Disables rounding of the avatar, rendering the avatar with square corners',
          },
          text: {
            type: 'string',
            default: void 0,
            description: 'Text to place in the avatar',
          },
        },
        'BLink props': linkedBLinkSection,
      },
      emits: {
        'click': {
          description: '',
          // TODO missing description
          args: {
            click: {
              description: 'Native click event',
              type: 'MouseEvent',
            },
          },
        },
        'img-error': {
          description: 'On image error',
          args: {
            'img-error': {
              description: 'On img-error',
              type: 'Event',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content to place in the avatars optional badge. Overrides the `badge` prop',
        },
        badge: {
          description:
            'Content to place in the avatar. Overrides props `text`, `src`, and `icon-name`',
          // TODO prop inconsistency (mentions `icon-name`, which is not in BAvatarProps)
        },
      },
    },
    BAvatarGroup: {
      styleSpec: {kind: 'BSVN-CLASS' /* BsvnClass */},
      sourcePath: '/BAvatar/BAvatarGroup.vue',
      props: {
        ...pick(
          buildCommonProps({
            rounded: {
              default: 'circle',
              description:
                'Specifies the type of rounding to apply to the component or its children. The `square` prop takes precedence. Refer to the documentation for details.',
            },
            variant: {
              default: 'secondary',
            },
          }),
          [
            'bgVariant',
            'rounded',
            'roundedBottom',
            'roundedEnd',
            'roundedStart',
            'roundedTop',
            'tag',
            'textVariant',
            'variant',
          ]
        ),
        overlap: {
          type: 'Numberish',
          default: 0.3,
          description:
            'Content to place in the avatar. Overrides props `text`, `src`, and `icon-name`',
          // TODO grammar check (description is incorrect; should describe overlap behavior, not avatar content)
        },
        size: {
          type: 'Size | string',
          default: void 0,
          description: 'Size of the child avatars. Refer to the documentation for details',
        },
        square: {
          type: 'boolean',
          default: false,
          description:
            'Disables rounding of the child avatars, rending the avatar with square corners',
          // TODO grammar check (typo: "rending" should be "rendering")
        },
      },
      slots: {
        default: {
          description: 'Content (avatars) to place in the avatar group',
        },
      },
    },
  }),
}
export {avatar_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3R5cGVzL2luZGV4LnRzIiwgInNyYy91dGlscy9vYmplY3RVdGlscy50cyIsICJzcmMvdXRpbHMvbGlua1Byb3BzLnRzIiwgInNyYy91dGlscy9jb21tb25Qcm9wcy50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL2F2YXRhci5kYXRhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3R5cGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdHlwZXMvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3R5cGVzL2luZGV4LnRzXCI7aW1wb3J0IHR5cGUge3VzZVNjcm9sbHNweX0gZnJvbSAnYm9vdHN0cmFwLXZ1ZS1uZXh0J1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRJdGVtID0gRXhjbHVkZTxrZXlvZiBDb21wb25lbnRSZWZlcmVuY2UsICdjb21wb25lbnQnIHwgJ3NlY3Rpb25zJz5cblxuZXhwb3J0IGludGVyZmFjZSBQcm9wUmVmZXJlbmNlIHtcbiAgdHlwZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBkZWZhdWx0PzogdW5rbm93blxuICBub3RZZXRJbXBsZW1lbnRlZD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJvcFJlY29yZFdpdGhPcHRpb25zID0ge1xuICBfZGF0YTogUHJvcFJlY29yZCAvLyBBbGxvd3MgZm9yIGEgc2luZ2xlIHNlY3Rpb24gb3IgbXVsdGlwbGUgc2VjdGlvbnNcbiAgX29wdHM/OiB7bGlua1RvPzogc3RyaW5nfVxufVxuLy8gRmxhdCB2YXJpYW50XG5leHBvcnQgdHlwZSBQcm9wUmVjb3JkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+ID0gUmVjb3JkPFQsIFByb3BSZWZlcmVuY2U+XG4vLyBNdWx0aXBsZSBzZWN0aW9ucyB2YXJpYW50XG5leHBvcnQgdHlwZSBQcm9wUmVjb3JkV2l0aE11bHRpcGxlU2VjdGlvbnMgPSB7XG4gIFtkZWZhdWx0UHJvcFNlY3Rpb25TeW1ib2xdOiBQcm9wUmVjb3JkIHwgUHJvcFJlY29yZFdpdGhPcHRpb25zXG59ICYge1trZXk6IHN0cmluZ106IFByb3BSZWNvcmQgfCBQcm9wUmVjb3JkV2l0aE9wdGlvbnN9XG4vLyBPcHRpb25zIHZhcmlhbnRcbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvcFNlY3Rpb25TeW1ib2wgPSAnX2RlZmF1bHRQcm9wU2VjdGlvbidcblxuZXhwb3J0IHR5cGUgRW1pdEFyZ1JlZmVyZW5jZSA9IFJlY29yZDxzdHJpbmcsIHt0eXBlOiBzdHJpbmc7IGRlc2NyaXB0aW9uPzogc3RyaW5nfT5cbmV4cG9ydCB0eXBlIEVtaXRSZWZlcmVuY2UgPSB7XG4gIGFyZ3M/OiBFbWl0QXJnUmVmZXJlbmNlXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG59XG5leHBvcnQgdHlwZSBFbWl0UmVjb3JkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+ID0gUmVjb3JkPFQsIEVtaXRSZWZlcmVuY2U+XG5cbmV4cG9ydCB0eXBlIFNsb3RTY29wZVJlZmVyZW5jZSA9IFJlY29yZDxcbiAgc3RyaW5nLFxuICB7XG4gICAgdHlwZTogc3RyaW5nIHwgc3RyaW5nW11cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIG5vdFlldEltcGxlbWVudGVkPzogYm9vbGVhblxuICB9XG4+XG5leHBvcnQgdHlwZSBTbG90UmVmZXJlbmNlID0ge1xuICBzY29wZT86IFNsb3RTY29wZVJlZmVyZW5jZVxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xufVxuZXhwb3J0IHR5cGUgU2xvdFJlY29yZDxUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiA9IFJlY29yZDxULCBTbG90UmVmZXJlbmNlPlxuXG5leHBvcnQgY29uc3QgZW51bSBTdHlsZUtpbmQge1xuICBCb290c3RyYXBDbGFzcyA9ICdCT09UU1RSQVAtQ0xBU1MnLFxuICBCc3ZuQ2xhc3MgPSAnQlNWTi1DTEFTUycsXG4gIE92ZXJyaWRlQ2xhc3MgPSAnT1ZFUlJJREUtQ0xBU1MnLFxuICBUYWcgPSAnVEFHJyxcbiAgTm9uZSA9ICdOT05FJyxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVTcGVjIHtcbiAga2luZDogU3R5bGVLaW5kXG4gIHZhbHVlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudFNlY3Rpb24gPSAnUHJvcGVydGllcycgfCAnRXZlbnRzJyB8ICdTbG90cydcbmV4cG9ydCB0eXBlIENvbXBvbmVudFJlZmVyZW5jZSA9IFJlY29yZDxcbiAgc3RyaW5nLFxuICB7XG4gICAgc3R5bGVTcGVjPzogU3R5bGVTcGVjXG4gICAgLyoqXG4gICAgICogVXNlIHBhY2thZ2UgZGlyZWN0b3J5IHJlbGF0aXZlIGxpbmtzLiBleDogQkFjY29yZGlvbi52dWUgPT4gL0JBY2NvcmRpb24vQkFjY29yZGlvbi52dWUgKHNsYXNoIHJlcXVpcmVkKVxuICAgICAqXG4gICAgICogSWYgcGF0aCBpcyBlbXB0eSBzdHJpbmcsIGl0IGRlZmF1bHRzIHRvIHRoZSBwYWNrYWdlIGRpcmVjdG9yeS4gSWYgbnVsbCwgaXQgZG9lcyBub3QgcmVuZGVyIHRoZSBidXR0b25cbiAgICAgKi9cbiAgICBzb3VyY2VQYXRoOiBzdHJpbmcgfCBudWxsXG4gICAgcHJvcHM6IFByb3BSZWNvcmRXaXRoT3B0aW9ucyB8IFByb3BSZWNvcmQgfCBQcm9wUmVjb3JkV2l0aE11bHRpcGxlU2VjdGlvbnNcbiAgICBlbWl0cz86IEVtaXRSZWNvcmRcbiAgICBzbG90cz86IFNsb3RSZWNvcmRcbiAgICBzZWN0aW9ucz86IENvbXBvbmVudFNlY3Rpb25bXVxuICB9XG4+XG5cbmV4cG9ydCB0eXBlIENvbGxlY3RpdmVNZW1iZXJzUmVzcG9uc2UgPSB7XG4gIE1lbWJlcklkOiBudW1iZXJcbiAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgdHlwZTogc3RyaW5nXG4gIHJvbGU6IHN0cmluZ1xuICB0aWVyOiBzdHJpbmdcbiAgaXNBY3RpdmU6IGJvb2xlYW5cbiAgdG90YWxBbW91bnREb25hdGVkOiBudW1iZXJcbiAgY3VycmVuY3k6IHN0cmluZ1xuICBsYXN0VHJhbnNhY3Rpb25BdDogc3RyaW5nXG4gIGxhc3RUcmFuc2FjdGlvbkFtb3VudDogbnVtYmVyXG4gIHByb2ZpbGU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgY29tcGFueTogbnVsbCB8IG51bGxcbiAgZGVzY3JpcHRpb246IHN0cmluZyB8IG51bGxcbiAgaW1hZ2U6IHN0cmluZyB8IG51bGxcbiAgZW1haWw6IG51bGwgfCBzdHJpbmdcbiAgdHdpdHRlcjogbnVsbCB8IHN0cmluZ1xuICBnaXRodWI6IHN0cmluZyB8IG51bGxcbiAgd2Vic2l0ZTogbnVsbCB8IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBDb2xsZWN0aXZlUGFydGlhbFJlc3BvbnNlID0ge1xuICBtZW1iZXJzOiBDb2xsZWN0aXZlTWVtYmVyc1Jlc3BvbnNlW11cbn1cblxuZXhwb3J0IHR5cGUgU2Nyb2xsc3B5SXRlbSA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVNjcm9sbHNweT5bJ2xpc3QnXVsndmFsdWUnXVswXVxuZXhwb3J0IHR5cGUgSGVhZGVySXRlbSA9IFNjcm9sbHNweUl0ZW0gJiB7dGFnOiBzdHJpbmc7IGxldmVsOiBudW1iZXJ9XG5leHBvcnQgdHlwZSBDb250ZW50c0l0ZW0gPSBIZWFkZXJJdGVtICYge2NoaWxkcmVuOiBDb250ZW50c0l0ZW1bXX1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL29iamVjdFV0aWxzLnRzXCI7ZXhwb3J0IGNvbnN0IHBpY2sgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IFBpY2s8QSwgQltudW1iZXJdPiA9PlxuICBbLi4ua2V5c1RvUGx1Y2tdLnJlZHVjZShcbiAgICAobWVtbywgcHJvcCkgPT4ge1xuICAgICAgbWVtb1twcm9wXSA9IG9ialRvUGx1Y2tbcHJvcF1cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSxcbiAgICB7fSBhcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+XG4gICkgYXMgUGljazxBLCBCW251bWJlcl0+XG5cbmV4cG9ydCBjb25zdCBvbWl0ID0gPFxuICBBIGV4dGVuZHMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPixcbiAgY29uc3QgQiBleHRlbmRzIFJlYWRvbmx5QXJyYXk8UHJvcGVydHlLZXk+LFxuPihcbiAgb2JqVG9QbHVjazogUmVhZG9ubHk8QT4sXG4gIGtleXNUb1BsdWNrOiBSZWFkb25seTxCPiB8IHJlYWRvbmx5IChrZXlvZiBBKVtdXG4pOiBPbWl0PEEsIEJbbnVtYmVyXT4gPT5cbiAgT2JqZWN0LmtleXMob2JqVG9QbHVjaylcbiAgICAuZmlsdGVyKChrZXkpID0+ICFrZXlzVG9QbHVjay5tYXAoKGVsKSA9PiBlbC50b1N0cmluZygpKS5pbmNsdWRlcyhrZXkpKVxuICAgIC5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiAoey4uLnJlc3VsdCwgW2tleV06IG9ialRvUGx1Y2tba2V5XX0pLCB7fSBhcyBPbWl0PEEsIEJbbnVtYmVyXT4pXG5cbi8vIENvbnZlcnRzIFBhc2NhbENhc2Ugb3IgY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcbmV4cG9ydCBjb25zdCBrZWJhYkNhc2UgPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC9cXEIoW0EtWl0pL2csICctJDEnKS50b0xvd2VyQ2FzZSgpXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2xpbmtQcm9wcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvbGlua1Byb3BzLnRzXCI7aW1wb3J0IHR5cGUge0JMaW5rUHJvcHN9IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB0eXBlIHtQcm9wUmVjb3JkLCBQcm9wUmVjb3JkV2l0aE9wdGlvbnN9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgbGlua1RvID0gJy9kb2NzL2NvbXBvbmVudHMvbGluaydcblxuZXhwb3J0IGNvbnN0IGxpbmtQcm9wcyA9IHtcbiAgYWN0aXZlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIGB0cnVlYCwgcGxhY2VzIHRoZSBjb21wb25lbnQgaW4gdGhlIGFjdGl2ZSBzdGF0ZSB3aXRoIGFjdGl2ZSBzdHlsaW5nJyxcbiAgfSxcbiAgYWN0aXZlQ2xhc3M6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAncm91dGVyLWxpbmstYWN0aXZlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0NvbmZpZ3VyZSB0aGUgYWN0aXZlIENTUyBjbGFzcyBhcHBsaWVkIHdoZW4gdGhlIGxpbmsgaXMgYWN0aXZlLicsXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXaGVuIHNldCB0byBgdHJ1ZWAsIGRpc2FibGVzIHRoZSBsaW5rJ3MgZnVuY3Rpb25hbGl0eS4gU2VlIGFib3ZlIGZvciBkZXRhaWxzIGFuZCBsaW1pdGF0aW9uc1wiLFxuICB9LFxuICBleGFjdEFjdGl2ZUNsYXNzOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3JvdXRlci1saW5rLWV4YWN0LWFjdGl2ZScsXG4gICAgZGVzY3JpcHRpb246ICdDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZSB3aXRoIGV4YWN0IG1hdGNoLicsXG4gIH0sXG4gIGhyZWY6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdEZW5vdGVzIHRoZSB0YXJnZXQgVVJMIG9mIHRoZSBsaW5rIGZvciBzdGFuZGFyZCBhIGxpbmtzJyxcbiAgfSxcbiAgaWNvbjoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIGB0cnVlYCwgc3R5bGVzIGFuIGljb24gYXQgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIGxpbmsgdGV4dCcsXG4gIH0sXG4gIG5vUHJlZmV0Y2g6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVG8gaW1wcm92ZSB0aGUgcmVzcG9uc2l2ZW5lc3Mgb2YgeW91ciBOdXh0LmpzIGFwcGxpY2F0aW9ucywgd2hlbiB0aGUgbGluayB3aWxsIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIHZpZXdwb3J0LCBOdXh0LmpzIHdpbGwgYXV0b21hdGljYWxseSBwcmVmZXRjaCB0aGUgY29kZSBzcGxpdHRlZCBwYWdlLiBTZXR0aW5nIGBuby1wcmVmZXRjaGAgd2lsbCBkaXNhYmxlZCB0aGlzIGZlYXR1cmUgZm9yIHRoZSBzcGVjaWZpYyBsaW5rJyxcbiAgICBub3RZZXRJbXBsZW1lbnRlZDogdHJ1ZSxcbiAgfSxcbiAgb3BhY2l0eToge1xuICAgIHR5cGU6IFwiMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGFscGhhIG9wYWNpdHkgb2YgdGhlIGxpbmsgYHJnYmEoKWAgY29sb3IgdmFsdWUnLFxuICB9LFxuICBvcGFjaXR5SG92ZXI6IHtcbiAgICB0eXBlOiBcIjEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBhbHBoYSBvcGFjaXR5IG9mIHRoZSBsaW5rIGByZ2JhKClgIGNvbG9yIHZhbHVlIG9uIGhvdmVyJyxcbiAgfSxcbiAgcHJlZmV0Y2g6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RvIGltcHJvdmUgdGhlIHJlc3BvbnNpdmVuZXNzIG9mIHlvdXIgTnV4dC5qcyBhcHBsaWNhdGlvbnMsIHdoZW4gdGhlIGxpbmsgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSB2aWV3cG9ydCwgTnV4dC5qcyB3aWxsIGF1dG9tYXRpY2FsbHkgcHJlZmV0Y2ggdGhlIGNvZGUgc3BsaXR0ZWQgcGFnZS4gU2V0dGluZyBgcHJlZmV0Y2hgIHRvIGB0cnVlYCBvciBgZmFsc2VgIHdpbGwgb3ZlcndyaXRlIHRoZSBkZWZhdWx0IHZhbHVlIG9mIGByb3V0ZXIucHJlZmV0Y2hMaW5rc2AnLFxuICB9LFxuICBwcmVmZXRjaGVkQ2xhc3M6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdOb3QgWWV0IEltcGxtZW50ZWQ6IEEgY2xhc3MgdG8gYXBwbHkgdG8gbGlua3MgdGhhdCBoYXZlIGJlZW4gcHJlZmV0Y2hlZC4nLFxuICB9LFxuICBwcmVmZXRjaE9uOiB7XG4gICAgdHlwZTogJ1BhcnRpYWw8e3Zpc2liaWxpdHk6IGJvb2xlYW4sIGludGVyYWN0aW9uOiBib29sZWFufT4nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWxsb3dzIGN1c3RvbSBjb250cm9sIG9mIHdoZW4gdG8gcHJlZmV0Y2ggbGlua3MuIFBvc3NpYmxlIG9wdGlvbnMgYXJlICdpbnRlcmFjdGlvbicgYW5kICd2aXNpYmlsaXR5JyAoZGVmYXVsdCkuXCIsXG4gIH0sXG4gIG5vUmVsOiB7fSxcbiAgcmVsOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlICdyZWwnIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgbGlua1wiLFxuICB9LFxuICByZXBsYWNlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1NldHRpbmcgcmVwbGFjZSBwcm9wIHdpbGwgY2FsbCByb3V0ZXIucmVwbGFjZSgpIGluc3RlYWQgb2Ygcm91dGVyLnB1c2goKSB3aGVuIGNsaWNrZWQnLFxuICB9LFxuICByb3V0ZXJDb21wb25lbnROYW1lOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3JvdXRlci1saW5rJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdCb290c3RyYXBWdWUgYXV0byBkZXRlY3RzIGJldHdlZW4gYDxyb3V0ZXItbGluaz5gIGFuZCBgPG51eHQtbGluaz5gLiBTZXQgdGhpcyB0aGlzIHByb3BlcnR5IHRvIGV4cGxpY2l0eSBzZXQgdGhlIG5hbWUgb2YgdGhlIHJvdXRlciBjb21wb25lbnQuJyxcbiAgfSxcbiAgcm91dGVyVGFnOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ2EnLFxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSB0YWcgdHlwZSBmb3IgdGhlIGxpbmsnLFxuICB9LFxuICBzdHJldGNoZWQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldoZW4gc2V0IHRvIGB0cnVlYCwgbWFrZXMgdGhlIGxpbmsncyBgY29udGFpbmluZyBibG9ja2AgY2xpY2thYmxlIHZpYSBhbiBgOjphZnRlcmAgcHNldWRvIGVsZW1lbnRcIixcbiAgfSxcbiAgdGFyZ2V0OiB7XG4gICAgdHlwZTogJ0xpbmtUYXJnZXQnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAndGFyZ2V0JyBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGxpbmtcIixcbiAgfSxcbiAgdG86IHtcbiAgICB0eXBlOiAnUm91dGVMb2NhdGlvblJhdycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Rlbm90ZXMgdGhlIHRhcmdldCByb3V0ZSBvZiB0aGUgbGluay4gV2hlbiBjbGlja2VkLCB0aGUgdmFsdWUgb2YgdGhlIHRvIHByb3Agd2lsbCBiZSBwYXNzZWQgdG8gYHJvdXRlci5wdXNoKClgIGludGVybmFsbHknLFxuICB9LFxuICB1bmRlcmxpbmVPZmZzZXQ6IHtcbiAgICB0eXBlOiBcIjEgfCAyIHwgMyB8ICcxJyB8ICcyJyB8ICczJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NoYW5nZSB0aGUgZGlzdGFuY2Ugb2YgdGhlIHVuZGVybGluZSBmcm9tIHRoZSBib3R0b20gb2YgdGhlIGxpbmsgdGV4dCcsXG4gIH0sXG4gIHVuZGVybGluZU9mZnNldEhvdmVyOiB7XG4gICAgdHlwZTogXCIxIHwgMiB8IDMgfCAnMScgfCAnMicgfCAnMydcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGRpc3RhbmNlIG9mIHRoZSB1bmRlcmxpbmUgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBsaW5rIHRleHQgb24gaG92ZXInLFxuICB9LFxuICB1bmRlcmxpbmVPcGFjaXR5OiB7XG4gICAgdHlwZTogXCIwIHwgMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMCcgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0J3MgdGhlIG9wYWNpdHkgb2YgdGhlIGxpbmsncyB1bmRlcmxpbmVcIixcbiAgfSxcbiAgdW5kZXJsaW5lT3BhY2l0eUhvdmVyOiB7XG4gICAgdHlwZTogXCIwIHwgMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMCcgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0J3MgdGhlIG9wYWNpdHkgb2YgdGhlIGxpbmsncyB1bmRlcmxpbmUgb24gaG92ZXJcIixcbiAgfSxcbiAgdW5kZXJsaW5lVmFyaWFudDoge1xuICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICBkZWZhdWx0OiBudWxsLFxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSBjb2xvciB2YXJpYW50IGZvciB0aGUgbGluayB1bmRlcmxpbmUgaW5kZXBlbmRlbnRseSBvZiB0aGUgbGluayB0ZXh0JyxcbiAgfSxcbiAgdmFyaWFudDoge1xuICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICBkZWZhdWx0OiBudWxsLFxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSBjb2xvciB2YXJpYW50IGZvciB0aGUgbGluaycsXG4gIH0sXG4gIC8vIFRPRE86IHJlbW92ZSB0aGUgaGFyZC1jb2RlZCBOWUkgcHJvcHMgYmVsb3cgd2hlbiB0aGV5IGFyZSBpbXBsZW1lbnRlZFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCTGlua1Byb3BzIHwgJ25vUHJlZmV0Y2gnIHwgJ3ByZWZldGNoJyB8ICdwcmVmZXRjaGVkQ2xhc3MnPlxuXG5leHBvcnQgY29uc3QgbGlua2VkQkxpbmtTZWN0aW9uID0ge1xuICBfb3B0czoge1xuICAgIGxpbmtUbyxcbiAgfSxcbiAgX2RhdGE6IGxpbmtQcm9wcyxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmRXaXRoT3B0aW9uc1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9jb21tb25Qcm9wcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvY29tbW9uUHJvcHMudHNcIjtpbXBvcnQgdHlwZSB7UHJvcFJlZmVyZW5jZX0gZnJvbSAnLi4vdHlwZXMnXG5cbmNvbnN0IGNvbW1vblByb3BzID0gKCkgPT5cbiAgKHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byBgdHJ1ZWAsIHBsYWNlcyB0aGUgY29tcG9uZW50IGluIHRoZSBhY3RpdmUgc3RhdGUgd2l0aCBhY3RpdmUgc3R5bGluZycsXG4gICAgfSxcbiAgICBhY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogJ2FjdGl2ZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZS4gVHlwaWNhbGx5IHlvdSB3aWxsIHdhbnQgdG8gc2V0IHRoaXMgdG8gY2xhc3MgbmFtZSAnYWN0aXZlJ1wiLFxuICAgIH0sXG4gICAgYWx0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdWYWx1ZSB0byBzZXQgZm9yIHRoZSBgYWx0YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXJpYUNvbnRyb2xzOiB7XG4gICAgICB0eXBlOiAnQXJpYUludmFsaWQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdJZiB0aGlzIGNvbXBvbmVudCBjb250cm9scyBhbm90aGVyIGNvbXBvbmVudCBvciBlbGVtZW50LCBzZXQgdGhpcyB0byB0aGUgSUQgb2YgdGhlIGNvbnRyb2xsZWQgY29tcG9uZW50IG9yIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgYXJpYURlc2NyaWJlZGJ5OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgcHJvdmlkZXMgYSBkZXNjcmlwdGlvbiBmb3IgdGhpcyBjb21wb25lbnQuIFVzZWQgYXMgdGhlIHZhbHVlIGZvciB0aGUgYGFyaWEtZGVzY3JpYmVkYnlgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhcmlhSW52YWxpZDoge1xuICAgICAgdHlwZTogJ0FyaWFJbnZhbGlkJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU2V0cyB0aGUgYGFyaWEtaW52YWxpZGAgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSB3cmFwcGVyIGVsZW1lbnQuIFdoZW4gbm90IHByb3ZpZGVkLCB0aGUgYHN0YXRlYCBwcm9wIHdpbGwgY29udHJvbCB0aGUgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGF1dG9DbG9zZToge1xuICAgICAgdHlwZTogXCJib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZSdcIixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRyb2xzIHRoZSBhdXRvbWF0aWMgY2xvc2luZyBvZiB0aGUgY29tcG9uZW50IHdoZW4gY2xpY2tpbmcuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgIH0sXG4gICAgYXV0b2NvbXBsZXRlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAnYXV0b2NvbXBsZXRlJyBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIGZvcm0gY29udHJvbFwiLFxuICAgIH0sXG4gICAgYXJpYUxhYmVsOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdmFsdWUgb2YgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgZWxlbWVudCcsXG4gICAgfSxcbiAgICBhcmlhTGl2ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHRoZSByZW5kZXJlZCBlbGVtZW50IGlzIGFuIGBhcmlhLWxpdmVgIHJlZ2lvbiAoZm9yIHNjcmVlbiByZWFkZXIgdXNlcnMpLCBzZXQgdG8gZWl0aGVyICdwb2xpdGUnIG9yICdhc3NlcnRpdmUnXCIsXG4gICAgfSxcbiAgICBhcmlhTGFiZWxsZWRieToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgbGFiZWwgZm9yIHRoaXMgY29tcG9uZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBhcmlhLWxhYmVsbGVkYnlgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhdXRvZm9jdXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byBgdHJ1ZWAsIGF0dGVtcHRzIHRvIGF1dG8tZm9jdXMgdGhlIGNvbnRyb2wgd2hlbiBpdCBpcyBtb3VudGVkLCBvciByZS1hY3RpdmF0ZWQgd2hlbiBpbiBhIGtlZXAtYWxpdmUuIERvZXMgbm90IHNldCB0aGUgYGF1dG9mb2N1c2AgYXR0cmlidXRlIG9uIHRoZSBjb250cm9sJyxcbiAgICB9LFxuICAgIGJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byBiYWNrZ3JvdW5kIG9mIHRoZSBjb21wb25lbnQnLFxuICAgIH0sXG4gICAgYm9keUJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgYm9keUJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBib3JkZXInLFxuICAgIH0sXG4gICAgYm9keUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9keVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib2R5VGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgdGV4dCcsXG4gICAgfSxcbiAgICBib2R5VmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9yZGVyJyxcbiAgICB9LFxuICAgIGRlYm91bmNlOiB7XG4gICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgIGRlZmF1bHQ6ICcwJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0IHRvIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBncmVhdGVyIHRoYW4gemVybywgd2lsbCBkZWJvdW5jZSB0aGUgdXNlciBpbnB1dC4gSGFzIG5vIGVmZmVjdCBpZiBwcm9wICdsYXp5JyBpcyBzZXRcIixcbiAgICB9LFxuICAgIGRlYm91bmNlTWF4V2FpdDoge1xuICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICBkZWZhdWx0OiAnTmFOJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBtYXhpbXVtIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQnJ3MgaW52b2tlZFwiLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQgdG8gYHRydWVgLCBkaXNhYmxlcyB0aGUgY29tcG9uZW50J3MgZnVuY3Rpb25hbGl0eSBhbmQgcGxhY2VzIGl0IGluIGEgZGlzYWJsZWQgc3RhdGVcIixcbiAgICB9LFxuICAgIGRpc2FibGVkRmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2Rpc2FibGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBkaXNhYmxlZCBzdGF0ZScsXG4gICAgfSxcbiAgICBmbG9hdGluZzoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0LCByZW5kZXJzIGEgc2luZ2xlIGNvbnRyb2wgZm9ybSB3aXRoIGEgZmxvYXRpbmcgbGFiZWwuIFRoaXMgb25seSB3b3JrcyBmb3IgZm9ybXMgd2hlcmUgdGhlIGltbWVkaWF0ZSBjaGlsZHJlbiBhcmUgYSBsYWJlbCBhbmQgb25lIG9mIHRoZSBzdXBwb3J0ZWQgY29udHJvbHMuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgIH0sXG5cbiAgICBmb290ZXI6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIGJhY2tncm91bmQnLFxuICAgIH0sXG4gICAgZm9vdGVyQm9yZGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXIgYm9yZGVyJyxcbiAgICB9LFxuICAgIGZvb3RlckNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGZvb3RlcicsXG4gICAgfSxcbiAgICBmb290ZXJUZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIHRleHQnLFxuICAgIH0sXG4gICAgZm9vdGVyVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0lEIG9mIHRoZSBmb3JtIHRoYXQgdGhlIGZvcm0gY29udHJvbCBiZWxvbmdzIHRvLiBTZXRzIHRoZSBgZm9ybWAgYXR0cmlidXRlIG9uIHRoZSBjb250cm9sJyxcbiAgICB9LFxuICAgIGZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJyh2YWw6IHN0cmluZywgZXZ0OiBFdmVudCkgPT4gc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd1bmRlZmluZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdSZWZlcmVuY2UgdG8gYSBmdW5jdGlvbiBmb3IgZm9ybWF0dGluZyB0aGUgaW5wdXQnLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyQmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGhlYWRlckJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyIGJvcmRlcicsXG4gICAgfSxcbiAgICBoZWFkZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBoZWFkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciB0ZXh0JyxcbiAgICB9LFxuICAgIGhlYWRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVXNlZCB0byBzZXQgdGhlIGBpZGAgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBjb250ZW50LCBhbmQgdXNlZCBhcyB0aGUgYmFzZSB0byBnZW5lcmF0ZSBhbnkgYWRkaXRpb25hbCBlbGVtZW50IElEcyBhcyBuZWVkZWQnLFxuICAgIH0sXG4gICAgbGF6eUZvcm1hdHRlcjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQsIHRoZSBpbnB1dCBpcyBmb3JtYXR0ZWQgb24gYmx1ciBpbnN0ZWFkIG9mIGVhY2gga2V5c3Ryb2tlIChpZiB0aGVyZSBpcyBhIGZvcm1hdHRlciBzcGVjaWZpZWQpJyxcbiAgICB9LFxuICAgIGxpbmtDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDbGFzcyBvciBjbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBpbm5lciBsaW5rIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIElEIG9mIHRoZSBhc3NvY2lhdGVkIGRhdGFsaXN0IGVsZW1lbnQgb3IgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYG5hbWVgIGF0dHJpYnV0ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIG5vQmFja2Ryb3A6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGJhY2tkcm9wJyxcbiAgICB9LFxuICAgIG5vRWxsaXBzaXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEbyBub3Qgc2hvdyBlbGxpcHNpcyBidXR0b25zJyxcbiAgICB9LFxuICAgIG5vR290b0VuZEJ1dHRvbnM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdIaWRlcyB0aGUgZ28gdG8gZmlyc3QgYW5kIGdvIHRvIGxhc3QgcGFnZSBidXR0b25zJyxcbiAgICB9LFxuICAgIG5vSGVhZGVyOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSAgaGVhZGVyJyxcbiAgICB9LFxuICAgIG5vSGVhZGVyQ2xvc2U6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyByZW5kZXJpbmcgb2YgdGhlIGhlYWRlciBjbG9zZSBidXR0b24nLFxuICAgIH0sXG4gICAgbm9Ib3ZlclBhdXNlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQgdG8gdHJ1ZSwgZGlzYWJsZXMgcGF1c2luZyB0aGUgdGltZXIgb24gaG92ZXIgYmVoYXZpb3InLFxuICAgIH0sXG4gICAgbm9SZXN1bWVPbkhvdmVyTGVhdmU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCB0byB0cnVlLCB0aGUgdGltZXIgd2lsbCBub3QgcmVzdW1lIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgZWxlbWVudC4gSXQgd2lsbCBuZWVkIHRvIGJlIG1hbnVhbGx5IHJlc3VtZWQnLFxuICAgIH0sXG4gICAgbm92YWxpZGF0ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0LCBkaXNhYmxlcyBicm93c2VyIG5hdGl2ZSBIVE1MNSB2YWxpZGF0aW9uIG9uIGNvbnRyb2xzIGluIHRoZSBmb3JtJyxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6ICdyZWFkb25seSBDaGVja2JveE9wdGlvblJhd1tdJyxcbiAgICAgIGRlZmF1bHQ6ICcoKSA9PiBbXScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FycmF5IG9mIGl0ZW1zIHRvIHJlbmRlciBpbiB0aGUgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIHBsYWluOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVyIHRoZSBmb3JtIGNvbnRyb2wgaW4gcGxhaW4gbW9kZSwgcmF0aGVyIHRoYW4gY3VzdG9tIHN0eWxlZCBtb2RlJyxcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IFwiJydcIixcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgdmFsdWUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICBwbGFpbnRleHQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NldCB0aGUgZm9ybSBjb250cm9sIGFzIHJlYWRvbmx5IGFuZCByZW5kZXJzIHRoZSBjb250cm9sIHRvIGxvb2sgbGlrZSBwbGFpbiB0ZXh0IChubyBib3JkZXJzKScsXG4gICAgfSxcbiAgICByZXF1aXJlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBZGRzIHRoZSBgcmVxdWlyZWRgIGF0dHJpYnV0ZSB0byB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBgcmVhZG9ubHlgIGF0dHJpYnV0ZSBvbiB0aGUgZm9ybSBjb250cm9sJyxcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXRzIHRoZSBBUklBIGF0dHJpYnV0ZSBgcm9sZWAgdG8gYSBzcGVjaWZpYyB2YWx1ZScsXG4gICAgfSxcbiAgICByb3VuZGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuLiBUaGUgYHNxdWFyZWAgcHJvcCB0YWtlcyBwcmVjZWRlbmNlLiBSZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlscycsXG4gICAgfSxcbiAgICByb3VuZGVkQm90dG9tOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbiB8IFJhZGl1c0VsZW1lbnQnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGBib3R0b21gIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZEVuZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgZW5kYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRTdGFydDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgc3RhcnRgIGNvcm5lcnMgb2YgdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4nLFxuICAgIH0sXG4gICAgcm91bmRlZFRvcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgdG9wYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6ICdTaXplJyxcbiAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZXQgdGhlIHNpemUgb2YgdGhlIGNvbXBvbmVudCdzIGFwcGVhcmFuY2UuICdzbScsICdtZCcgKGRlZmF1bHQpLCBvciAnbGcnXCIsXG4gICAgfSxcbiAgICBzcmM6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdVUkwgdG8gc2V0IGZvciB0aGUgYHNyY2AgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIHN0YXRlOiB7XG4gICAgICB0eXBlOiAnVmFsaWRhdGlvblN0YXRlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQ29udHJvbHMgdGhlIHZhbGlkYXRpb24gc3RhdGUgYXBwZWFyYW5jZSBvZiB0aGUgY29tcG9uZW50LiBgdHJ1ZWAgZm9yIHZhbGlkLCBgZmFsc2VgIGZvciBpbnZhbGlkLCBvciBgbnVsbGAgZm9yIG5vIHZhbGlkYXRpb24gc3RhdGUnLFxuICAgIH0sXG4gICAgc3VidGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIHN1YnRpdGxlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdoNicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHN1YnRpdGxlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiAnYm9keS1zZWNvbmRhcnknLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBzdWJ0aXRsZSB0ZXh0JyxcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnJyxcbiAgICB9LFxuICAgIHRleHRGaWVsZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdGV4dCBsYWJlbCcsXG4gICAgfSxcbiAgICB0ZXh0VmFyaWFudDoge1xuICAgICAgdHlwZTogJ1RleHRDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIHRleHQnLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdUZXh0IGNvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRpdGxlQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdGl0bGVUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2g0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgdGl0bGUnLFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlcnMgdGhlIGZlZWRiYWNrIHRleHQgaW4gYSBydWRpbWVudGFyeSB0b29sdGlwIHN0eWxlJyxcbiAgICB9LFxuICAgIHZhbGlkYXRlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCwgYWRkcyB0aGUgQm9vdHN0cmFwIGNsYXNzICd3YXMtdmFsaWRhdGVkJyBvbiB0aGUgZm9ybSwgdHJpZ2dlcmluZyB0aGUgbmF0aXZlIGJyb3dzZXIgdmFsaWRhdGlvbiBzdGF0ZXNcIixcbiAgICB9LFxuICAgIHZhbHVlRmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3ZhbHVlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRmllbGQgbmFtZSBpbiB0aGUgYG9wdGlvbnNgIGFycmF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSB2YWx1ZScsXG4gICAgfSxcbiAgICB2YXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBjb21wb25lbnQuIFdoZW4gaW1wbGVtZW50ZWQgYGJnLXZhcmlhbnRgIGFuZCBgdGV4dC12YXJpYW50YCB3aWxsIHRha2UgcHJlY2VkZW5jZScsXG4gICAgfSxcbiAgICB3cmFwcGVyQXR0cnM6IHtcbiAgICAgIHR5cGU6ICdSZWFkb25seTxBdHRyc1ZhbHVlPicsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0F0dHJpYnV0ZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgd3JhcHBlciBlbGVtZW50JyxcbiAgICB9LFxuICAgIHdyYXBwZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFkZCB0byB0aGUgd3JhcHBlciBlbGVtZW50JyxcbiAgICB9LFxuICAgIHBsYWNlbWVudDoge1xuICAgICAgdHlwZTogJ1BsYWNlbWVudCcsXG4gICAgICBkZWZhdWx0OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGxhY2VtZW50IG9mIGEgZmxvYXRpbmcgZWxlbWVudCcsXG4gICAgfSxcbiAgfSkgYXMgY29uc3RcblxuY29uc3Qgc2luZ2xldG9uUHJvcHMgPSBPYmplY3QuZnJlZXplKGNvbW1vblByb3BzKCkpXG5cbmV4cG9ydCBjb25zdCBidWlsZENvbW1vblByb3BzID0gKFxuICBvYmo/OiBQYXJ0aWFsPFJlY29yZDxrZXlvZiB0eXBlb2Ygc2luZ2xldG9uUHJvcHMsIFBhcnRpYWw8UHJvcFJlZmVyZW5jZT4+PlxuKTogUmVhZG9ubHk8dHlwZW9mIHNpbmdsZXRvblByb3BzPiA9PiB7XG4gIGlmICghb2JqKSByZXR1cm4gc2luZ2xldG9uUHJvcHNcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBjb25zdCBteU9iamVjdCA9IGNvbW1vblByb3BzKCkgYXMgUmVjb3JkPHN0cmluZywgYW55PlxuXG4gIC8vIE1lcmdlIHRoZSBwcm92aWRlZCBvYmplY3QgaW50byB0aGUgY29tbW9uIHByb3BzXG4gIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgbXlPYmplY3Rba2V5XSA9IHtcbiAgICAgIC4uLm15T2JqZWN0W2tleV0sXG4gICAgICAuLi52YWx1ZSxcbiAgICB9XG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobXlPYmplY3QgYXMgYW55KVxufVxuXG5leHBvcnQgY29uc3QgY29tbW9uRW1pdHMgPSB7XG4gIGNhbmNlbDoge30sXG4gIG9rOiB7fSxcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50cy9hdmF0YXIuZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2F2YXRhci5kYXRhLnRzXCI7aW1wb3J0IHR5cGUge1xuICBCQXZhdGFyRW1pdHMsXG4gIEJBdmF0YXJHcm91cFByb3BzLFxuICBCQXZhdGFyR3JvdXBTbG90cyxcbiAgQkF2YXRhclByb3BzLFxuICBCQXZhdGFyU2xvdHMsXG59IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB7XG4gIHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlLFxuICBkZWZhdWx0UHJvcFNlY3Rpb25TeW1ib2wsXG4gIHR5cGUgRW1pdFJlY29yZCxcbiAgdHlwZSBQcm9wUmVjb3JkLFxuICB0eXBlIFNsb3RSZWNvcmQsXG4gIFN0eWxlS2luZCxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQge3BpY2t9IGZyb20gJy4uLy4uL3V0aWxzL29iamVjdFV0aWxzJ1xuaW1wb3J0IHtsaW5rZWRCTGlua1NlY3Rpb24sIHR5cGUgbGlua1Byb3BzfSBmcm9tICcuLi8uLi91dGlscy9saW5rUHJvcHMnXG5pbXBvcnQge2J1aWxkQ29tbW9uUHJvcHN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vblByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWQ6ICgpOiBDb21wb25lbnRSZWZlcmVuY2UgPT4gKHtcbiAgICBCQXZhdGFyOiB7XG4gICAgICBzdHlsZVNwZWM6IHtraW5kOiBTdHlsZUtpbmQuQnN2bkNsYXNzfSxcbiAgICAgIHNvdXJjZVBhdGg6ICcvQkF2YXRhci9CQXZhdGFyLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICBbZGVmYXVsdFByb3BTZWN0aW9uU3ltYm9sXToge1xuICAgICAgICAgIC4uLnBpY2soXG4gICAgICAgICAgICBidWlsZENvbW1vblByb3BzKHtcbiAgICAgICAgICAgICAgYWx0OiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2F2YXRhcicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJvdW5kZWQ6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICdTcGVjaWZpZXMgdGhlIHR5cGUgb2Ygcm91bmRpbmcgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCBvciBpdHMgY2hpbGRyZW4uIFRoZSBgc3F1YXJlYCBwcm9wIHRha2VzIHByZWNlZGVuY2UnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzcmM6IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ltYWdlIFVSTCB0byB1c2UgZm9yIHRoZSBhdmF0YXInLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2YXJpYW50OiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ3NlY29uZGFyeScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgJ2FyaWFMYWJlbCcsXG4gICAgICAgICAgICAgICdhbHQnLFxuICAgICAgICAgICAgICAnYmdWYXJpYW50JyxcbiAgICAgICAgICAgICAgJ3JvdW5kZWQnLFxuICAgICAgICAgICAgICAncm91bmRlZEJvdHRvbScsXG4gICAgICAgICAgICAgICdyb3VuZGVkRW5kJyxcbiAgICAgICAgICAgICAgJ3JvdW5kZWRTdGFydCcsXG4gICAgICAgICAgICAgICdyb3VuZGVkVG9wJyxcbiAgICAgICAgICAgICAgJ3NyYycsXG4gICAgICAgICAgICAgICd0ZXh0VmFyaWFudCcsXG4gICAgICAgICAgICAgICd2YXJpYW50JyxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIGJhZGdlOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbiB8IHN0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAnV2hlbiBgdHJ1ZWAgc2hvd3MgYW4gZW1wdHkgYmFkZ2Ugb24gdGhlIGF2YXRhciwgYWx0ZXJuYXRpdmVseSBzZXQgdG8gYSBzdHJpbmcgZm9yIGNvbnRlbnQgaW4gdGhlIGJhZGdlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJhZGdlQmdWYXJpYW50OiB7XG4gICAgICAgICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBiYWRnZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiYWRnZURvdEluZGljYXRvcjoge1xuICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgJ1doZW4gYHRydWVgIHNob3dzIGEgc21hbGwgZG90IGluZGljYXRvciBvbiB0aGUgQXZhdGFyLiBBbGwgb2YgdGhlIGJhZGdlIHByb3BzIGFyZSBhcHBsaWVkIHRvIHRoZSBkb3QuIGBiYWRnZS1kb3QtaW5kaWNhdG9yYCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgYGJhZGdlYCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiYWRnZVRleHRWYXJpYW50OiB7XG4gICAgICAgICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgdGV4dCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiYWRnZVZhcmlhbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYmFkZ2UnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmFkZ2VQbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdDb21iaW5lZFBsYWNlbWVudCcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnYm90dG9tLWVuZCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgJ1BsYWNlbWVudCBvZiB0aGUgYmFkZ2UgcmVsYXRpdmUgdG8gdGhlIGF2YXRhci4gT25lIG9mIHRoZSB2YWx1ZXMgb2YgYENvbWJpbmVkUGxhY2VtZW50YCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiYWRnZVBpbGw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXJzIHRoZSBiYWRnZSB3aXRoIHBpbGwgc3R5bGluZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byBgdHJ1ZWAsIHJlbmRlcnMgdGhlIGF2YXRhciBhcyBhIGJ1dHRvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBidXR0b25UeXBlOiB7XG4gICAgICAgICAgICB0eXBlOiAnQnV0dG9uVHlwZScsXG4gICAgICAgICAgICBkZWZhdWx0OiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAnVHlwZSBvZiBidXR0b24gdG8gcmVuZGVyIChpLmUuIGBidXR0b25gLCBgc3VibWl0YCwgYHJlc2V0YCkuIEhhcyBubyBlZmZlY3QgaWYgcHJvcCBidXR0b24gaXMgbm90IHNldCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiAnU2l6ZSB8IHN0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NpemUgb2YgdGhlIGF2YXRhci4gUmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3F1YXJlOiB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAnRGlzYWJsZXMgcm91bmRpbmcgb2YgdGhlIGF2YXRhciwgcmVuZGVyaW5nIHRoZSBhdmF0YXIgd2l0aCBzcXVhcmUgY29ybmVycycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCB0byBwbGFjZSBpbiB0aGUgYXZhdGFyJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPEV4Y2x1ZGU8a2V5b2YgQkF2YXRhclByb3BzLCBrZXlvZiB0eXBlb2YgbGlua1Byb3BzPj4sXG4gICAgICAgICdCTGluayBwcm9wcyc6IGxpbmtlZEJMaW5rU2VjdGlvbixcbiAgICAgIH0sXG4gICAgICBlbWl0czoge1xuICAgICAgICAnY2xpY2snOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLCAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb25cbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ05hdGl2ZSBjbGljayBldmVudCcsXG4gICAgICAgICAgICAgIHR5cGU6ICdNb3VzZUV2ZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ltZy1lcnJvcic6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ09uIGltYWdlIGVycm9yJyxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAnaW1nLWVycm9yJzoge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ09uIGltZy1lcnJvcicsXG4gICAgICAgICAgICAgIHR5cGU6ICdFdmVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBFbWl0UmVjb3JkPGtleW9mIEJBdmF0YXJFbWl0cz4sXG4gICAgICBzbG90czoge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IHRvIHBsYWNlIGluIHRoZSBhdmF0YXJzIG9wdGlvbmFsIGJhZGdlLiBPdmVycmlkZXMgdGhlIGBiYWRnZWAgcHJvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIGJhZGdlOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnQ29udGVudCB0byBwbGFjZSBpbiB0aGUgYXZhdGFyLiBPdmVycmlkZXMgcHJvcHMgYHRleHRgLCBgc3JjYCwgYW5kIGBpY29uLW5hbWVgJywgLy8gVE9ETyBwcm9wIGluY29uc2lzdGVuY3kgKG1lbnRpb25zIGBpY29uLW5hbWVgLCB3aGljaCBpcyBub3QgaW4gQkF2YXRhclByb3BzKVxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCQXZhdGFyU2xvdHM+LFxuICAgIH0sXG4gICAgQkF2YXRhckdyb3VwOiB7XG4gICAgICBzdHlsZVNwZWM6IHtraW5kOiBTdHlsZUtpbmQuQnN2bkNsYXNzfSxcbiAgICAgIHNvdXJjZVBhdGg6ICcvQkF2YXRhci9CQXZhdGFyR3JvdXAudnVlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIC4uLnBpY2soXG4gICAgICAgICAgYnVpbGRDb21tb25Qcm9wcyh7XG4gICAgICAgICAgICByb3VuZGVkOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuLiBUaGUgYHNxdWFyZWAgcHJvcCB0YWtlcyBwcmVjZWRlbmNlLiBSZWZlciB0byB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlscy4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogJ3NlY29uZGFyeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICdiZ1ZhcmlhbnQnLFxuICAgICAgICAgICAgJ3JvdW5kZWQnLFxuICAgICAgICAgICAgJ3JvdW5kZWRCb3R0b20nLFxuICAgICAgICAgICAgJ3JvdW5kZWRFbmQnLFxuICAgICAgICAgICAgJ3JvdW5kZWRTdGFydCcsXG4gICAgICAgICAgICAncm91bmRlZFRvcCcsXG4gICAgICAgICAgICAndGFnJyxcbiAgICAgICAgICAgICd0ZXh0VmFyaWFudCcsXG4gICAgICAgICAgICAndmFyaWFudCcsXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBvdmVybGFwOiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogMC4zLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGF2YXRhci4gT3ZlcnJpZGVzIHByb3BzIGB0ZXh0YCwgYHNyY2AsIGFuZCBgaWNvbi1uYW1lYCcsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoZGVzY3JpcHRpb24gaXMgaW5jb3JyZWN0OyBzaG91bGQgZGVzY3JpYmUgb3ZlcmxhcCBiZWhhdmlvciwgbm90IGF2YXRhciBjb250ZW50KVxuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgdHlwZTogJ1NpemUgfCBzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NpemUgb2YgdGhlIGNoaWxkIGF2YXRhcnMuIFJlZmVyIHRvIHRoZSBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3F1YXJlOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgJ0Rpc2FibGVzIHJvdW5kaW5nIG9mIHRoZSBjaGlsZCBhdmF0YXJzLCByZW5kaW5nIHRoZSBhdmF0YXIgd2l0aCBzcXVhcmUgY29ybmVycycsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAodHlwbzogXCJyZW5kaW5nXCIgc2hvdWxkIGJlIFwicmVuZGVyaW5nXCIpXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJBdmF0YXJHcm91cFByb3BzPixcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgKGF2YXRhcnMpIHRvIHBsYWNlIGluIHRoZSBhdmF0YXIgZ3JvdXAnLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCQXZhdGFyR3JvdXBTbG90cz4sXG4gICAgfSxcbiAgfSksXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBc0JPLElBQU0sMkJBQTJCOzs7QUN0QmtYLElBQU0sT0FBTyxDQUlyYSxZQUNBLGdCQUVBLENBQUMsR0FBRyxXQUFXLEVBQUU7QUFBQSxFQUNmLENBQUMsTUFBTSxTQUFTO0FBQ2QsU0FBSyxJQUFJLElBQUksV0FBVyxJQUFJO0FBQzVCLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxDQUFDO0FBQ0g7OztBQ1ZLLElBQU0sU0FBUztBQUVmLElBQU0sWUFBWTtBQUFBLEVBQ3ZCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGtCQUFrQjtBQUFBLElBQ2hCLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxJQUNGLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTyxDQUFDO0FBQUEsRUFDUixLQUFLO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLHFCQUFxQjtBQUFBLElBQ25CLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxJQUFJO0FBQUEsSUFDRixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0Esc0JBQXNCO0FBQUEsSUFDcEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGtCQUFrQjtBQUFBLElBQ2hCLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSx1QkFBdUI7QUFBQSxJQUNyQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0Esa0JBQWtCO0FBQUEsSUFDaEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUE7QUFFRjtBQUVPLElBQU0scUJBQXFCO0FBQUEsRUFDaEMsT0FBTztBQUFBLElBQ0w7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQ1Q7OztBQ25KQSxJQUFNLGNBQWMsT0FDakI7QUFBQSxFQUNDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGdCQUFnQjtBQUFBLElBQ2QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLG1CQUFtQjtBQUFBLElBQ2pCLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLElBQ2YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxlQUFlO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLElBQ2YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxlQUFlO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxxQkFBcUI7QUFBQSxJQUNuQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxtQkFBbUI7QUFBQSxJQUNqQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLElBQ2YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLHFCQUFxQjtBQUFBLElBQ25CLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLG1CQUFtQjtBQUFBLElBQ2pCLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxlQUFlO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsSUFBSTtBQUFBLElBQ0YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGtCQUFrQjtBQUFBLElBQ2hCLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxzQkFBc0I7QUFBQSxJQUNwQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEs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QUFBLFFBQ0Y7QUFBQSxRQUNBLGVBQWU7QUFBQSxNQUNqQjtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBQ1AsYUFBYTtBQUFBO0FBQUEsVUFDYixNQUFNO0FBQUEsWUFDSixPQUFPO0FBQUEsY0FDTCxhQUFhO0FBQUEsY0FDYixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixNQUFNO0FBQUEsWUFDSixhQUFhO0FBQUEsY0FDWCxhQUFhO0FBQUEsY0FDYixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBLE9BQU87QUFBQSxVQUNMLGFBQ0U7QUFBQTtBQUFBLFFBQ0o7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1osV0FBVyxFQUFDLG1DQUF5QjtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxRQUNMLEdBQUc7QUFBQSxVQUNELGlCQUFpQjtBQUFBLFlBQ2YsU0FBUztBQUFBLGNBQ1AsU0FBUztBQUFBLGNBQ1QsYUFDRTtBQUFBLFlBQ0o7QUFBQSxZQUNBLFNBQVM7QUFBQSxjQUNQLFNBQVM7QUFBQSxZQUNYO0FBQUEsVUFDRixDQUFDO0FBQUEsVUFDRDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxhQUNFO0FBQUE7QUFBQSxRQUNKO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDSixNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1QsYUFDRTtBQUFBO0FBQUEsUUFDSjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE9BQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
