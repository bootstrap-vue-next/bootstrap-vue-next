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

// src/data/components/formTags.data.ts
var formTags_data_default = {
  load: () => ({
    BFormTag: {
      styleSpec: {kind: 'BSVN-CLASS' /* BsvnClass */},
      sourcePath: '/BFormTag/BFormTag.vue',
      props: {
        ...pick(
          buildCommonProps({
            title: {
              description:
                "Value to place in the 'title' attribute of the tag. Will also be used for the tag content if no default slot provided",
            },
            tag: {
              default: '<span>',
            },
            variant: {
              default: 'secondary',
            },
          }),
          ['disabled', 'id', 'tag', 'title', 'variant']
        ),
        noRemove: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'When set, the tag will not have a remove button',
        },
        pill: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Makes the tag have a pill appearance',
        },
        removeLabel: {
          type: 'string',
          default: 'Remove tag',
          description: "The value of the 'aria-label' attribute on the remove button in the tag",
        },
      },
      emits: {
        remove: {
          description: 'Emitted when the remove button is clicked',
          args: {
            remove: {
              type: 'string',
              description: 'text of the tag to remove',
              // TODO grammar check (should capitalize "Text" for consistency)
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content to place in the tag. Overrides the `title` prop',
        },
      },
    },
    BFormTags: {
      styleSpec: {kind: 'BSVN-CLASS' /* BsvnClass */},
      sourcePath: '/BFormTags/BFormTags.vue',
      props: {
        ...pick(
          buildCommonProps({
            name: {
              description:
                "Sets the value of the 'name' attribute on the form control. When set, creates a hidden input for each tag",
            },
            placeholder: {
              default: 'Add tag...',
            },
          }),
          ['autofocus', 'disabled', 'form', 'name', 'placeholder', 'required', 'size', 'state']
        ),
        addButtonText: {
          type: 'string',
          default: 'Add',
          description:
            "Text for the built in 'Add' button. Slot `add-button-text` takes precedence",
          // TODO grammar check (should say "built-in" instead of "built in")
        },
        addButtonVariant: {
          type: 'ButtonVariant | null',
          default: 'outline-secondary',
          description: "Applies one of the Bootstrap theme color variants to the 'Add' button",
        },
        addOnChange: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: "When set, enables adding the tag on the input's 'change' event",
        },
        duplicateTagText: {
          type: 'string',
          default: 'Duplicate tag(s)',
          description:
            'The message when duplicate tags are detected. Set to an empty string to disable the message',
        },
        feedbackAriaLive: {
          type: 'string',
          default: "'assertive'",
          description: 'Value to use for the `aria-live` attribute on the feedback text',
        },
        inputAttrs: {
          type: 'Readonly<AttrsValue>',
          default: void 0,
          description: 'Additional attributes to apply to the new tag input element',
        },
        inputClass: {
          type: 'ClassValue',
          default: void 0,
          description: 'Class (or classes) to apply to the new tag input element',
        },
        inputId: {
          type: 'string',
          default: void 0,
          description:
            'Id to apply to the new tag input element. If not provided, a unique Id will be auto generated',
          // TODO grammar check (should say "ID" consistently instead of "Id")
        },
        inputType: {
          type: 'InputType',
          default: 'text',
          description:
            "Specifies the type of input to use: 'text', 'email', 'tel', 'url', or 'number'. Default is 'text'",
        },
        invalidTagText: {
          type: 'string',
          default: 'Invalid tag(s)',
          description:
            'The error message when invalid tags are detected. Set to an empty string to disable the message',
        },
        limit: {
          type: 'Numberish',
          default: void 0,
          description:
            'The maximum amount of tags that can be added. The limit can still be exceeded if manipulated outside of the component',
          // TODO grammar check (should say "number" instead of "amount" for countable items)
        },
        limitTagsText: {
          type: 'string',
          default: 'Tag limit reached',
          description:
            'The message when the limit is reached. Set to an empty string to disable the message',
        },
        modelValue: {
          type: 'string[]',
          default: '() => []',
          // TODO item not in string format (though string literal, it represents a function)
          // TODO missing description
        },
        noAddOnEnter: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: "When set, disables adding the tag on the input's 'keydown.enter' event",
        },
        noOuterFocus: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'When set, disables the focus styling of the component root element',
        },
        noTagRemove: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'When set, the tags will not have a remove button',
        },
        removeOnDelete: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'When set, enables removal of last tag in tags when user presses delete or backspace and the input is empty',
        },
        separator: {
          type: 'string | readonly string[]',
          default: void 0,
          description: 'Separator character(s) that will trigger a tag to be created',
        },
        tagClass: {
          type: 'ClassValue',
          default: void 0,
          description: 'Class (or classes) to apply to the tags',
        },
        tagPills: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Makes the built in tags have a pill appearance',
          // TODO grammar check (should say "built-in" instead of "built in")
        },
        tagRemoveLabel: {
          type: 'string',
          default: void 0,
          description: "The value of the 'aria-label' attribute on the remove button in the tag",
        },
        tagRemovedLabel: {
          type: 'string',
          default: 'Tag removed',
          // TODO missing description
        },
        tagValidator: {
          type: '(t: string) => boolean',
          default: '() => true',
          // TODO item not in string format (though string literal, it represents a function)
          description:
            "Optional tag validator method. Passed a single argument of tag being added. Should return 'true' if the tag passes validation, or 'false' if the tag cannot be added",
        },
        tagVariant: {
          type: 'ColorVariant | null',
          default: 'secondary',
          description: 'Applies one of the Bootstrap theme color variants to the tags',
        },
      },
      emits: {
        'blur': {
          description: 'Emitted when component loses focus',
          args: {
            event: {
              type: 'FocusEvent',
              description: 'Native blur event (before any formatting)',
            },
          },
        },
        'focus': {
          description: 'Emitted when component gains focus',
          args: {
            event: {
              type: 'FocusEvent',
              description: 'Native focus event (before any formatting)',
            },
          },
        },
        'focusin': {
          description: 'Emitted when internal elements of component gain focus.',
          // TODO grammar check (should remove trailing period for consistency)
          args: {
            event: {
              type: 'FocusEvent',
              description: 'Native focusin event (before any formatting)',
            },
          },
        },
        'focusout': {
          description: 'Emitted when internal elements of component lose focus.',
          // TODO grammar check (should remove trailing period for consistency)
          args: {
            event: {
              type: 'FocusEvent',
              description: 'Native focusout event (before any formatting)',
            },
          },
        },
        'tag-state': {
          description: 'Emitted when tags in the user input are parsed',
          args: {
            validTags: {
              type: 'Array',
              description:
                'Array of new tag(s) added (or that will be added). Will be zero length if no tags added',
            },
            invalidTags: {
              type: 'Array',
              description:
                'Array of tag(s) that cannot be added because they did not pass validation. Will be zero length if no invalid tags',
            },
            duplicateTags: {
              type: 'Array',
              description:
                'Array of tag(s) that cannot be added because they would be a duplicate tag. Will be zero length if no duplicate tags',
            },
          },
        },
        'update:model-value': {
          description: 'Emitted when the tags changes. Updates the v-model',
          // TODO grammar check (should say "change" instead of "changes") // TODO similar content to BFormSelect/update:model-value (similar purpose)
          args: {
            value: {
              type: 'Array',
              description: 'Array of current tags',
            },
          },
        },
      },
      slots: {
        'add-button-text': {
          description:
            "Content to place in the built in 'Add' button. Takes precedence over the 'add-button-text' prop. Not used when the default scoped slot is provided",
          // TODO grammar check (should say "built-in" instead of "built in")
        },
        'default': {
          description: 'Slot to override the default rendering of the tags component',
          scope: {
            addButtonText: {
              type: 'string',
              description: "Value of the 'add-button-text' prop",
            },
            addButtonVariant: {
              type: 'string',
              description: "Value of the 'add-button-variant' prop",
            },
            addTag: {
              type: '(tag?: string) => void',
              description:
                'Method to add a new tag. Assumes the tag is the value of the input, but optionally accepts one argument which is the tag value to be added',
            },
            disableAddButton: {
              type: 'boolean',
              description:
                'Will be `true` if the tag(s) in the input cannot be added (all invalid and/or duplicates)',
            },
            disabled: {
              type: 'boolean',
              description:
                "If the component is in the disabled state. Value of the 'disabled' prop",
            },
            duplicateTagText: {
              type: 'string',
              description: "The value of the 'duplicate-tag-text' prop",
            },
            duplicateTags: {
              type: 'Array',
              description: 'Array of duplicate tag(s) that could not be added',
            },
            form: {
              type: 'string',
              description: "Value of the 'form' prop",
            },
            inputAttrs: {
              type: 'Record<string, unknown>',
              description: `Object of attributes to apply to native input elements via 'v-bind="inputAttrs"'`,
            },
            inputClass: {
              type: 'ClassValue',
              description:
                "Class (or classes) to apply to the new tag input element. Value of the 'input-class' prop",
            },
            inputHandlers: {
              type: 'Object',
              description: `Object of event handlers to apply to native input elements via 'v-on="inputHandlers"'`,
            },
            inputId: {
              type: 'string',
              description:
                "Id to add to the new tag input element. Defaults to prop 'input-id'. If not provided a unique Id is auto-generated. Also available via 'inputAttrs.id'",
              // TODO grammar check (should say "ID" consistently instead of "Id")
            },
            inputType: {
              type: 'InputType',
              description:
                "The type of input to use: 'type', 'email', 'tel', 'url', or 'number'. Default is 'text'. Normalized value of the 'input-type' prop",
              // TODO grammar check (should say "'text'" instead of "'type'" in the list)
            },
            invalidTagText: {
              type: 'string',
              description: "The value of the 'invalid-tag-text' prop",
            },
            invalidTags: {
              type: 'Array',
              description:
                "Array of invalid tag(s) that could not be added. Requires a validator function via the 'tag-validator' prop",
            },
            isDuplicate: {
              type: 'boolean',
              description: 'Will be `true` if the user has attempted to add duplicate tag(s)',
            },
            isInvalid: {
              type: 'boolean',
              description:
                "Will be `true` if the input has invalid tag(s). Requires a validator function via the 'tag-validator' prop",
            },
            isLimitReached: {
              type: 'boolean',
              description:
                "Will be `true` if the input has reached the maximum amount of tags defined by the 'limit' prop",
              // TODO grammar check (should say "number" instead of "amount" for countable items)
            },
            limitTagsText: {
              type: 'string',
              description: "The value of the 'limit-tag-text' prop",
            },
            noTagRemove: {
              type: 'boolean',
              description: "The value of the 'no-tag-remove' prop",
            },
            placeholder: {
              type: 'string',
              description: "The value of the 'placeholder' prop",
            },
            remove: {
              type: '() => void',
              description: 'Method to fully reset the tags input',
              notYetImplemented: true,
            },
            removeTag: {
              type: '(tag?: string) => void',
              description:
                'Method to remove a tag. Accepts one argument which is the tag value to remove',
            },
            required: {
              type: 'boolean',
              description: "Value of the 'required' prop",
            },
            separator: {
              type: 'string | readonly string[]',
              description: "The value of the 'separator' prop",
            },
            size: {
              type: 'Size',
              description: "The value of the 'size' prop",
            },
            state: {
              type: 'ValidationState',
              description:
                "The contextual state of the component. Value of the 'state' prop. Possible values are true, false or null",
            },
            tagClass: {
              type: 'ClassValue',
              description:
                "Class (or classes) to apply to the tag elements. Value of the 'tag-class' prop",
            },
            tagPills: {
              type: 'boolean',
              description: 'Value of the `tag-pills` prop',
            },
            tagRemoveLabel: {
              type: 'string',
              description:
                "ARIA label for the remove button on tags. Value of the 'tag-remove-label' prop",
            },
            tagRemovedLabel: {
              type: 'string',
              description: "Value of the 'tag-removed-label' prop",
            },
            tagValidator: {
              type: '(t: string) => boolean',
              description: "Value of the 'tag-validator' prop",
            },
            tagVariant: {
              type: 'ColorVariant | null',
              description: "Value of the 'tag-variant' prop",
            },
          },
        },
        'tag': {
          description: 'Slot to override the default rendering an individual tag',
          // TODO grammar check (should say "rendering of an" instead of "rendering an")
          scope: {
            tag: {
              type: 'string',
              description: 'Value of the tag',
            },
            tagClass: {
              type: 'ClassValue',
              description: 'Class (or classes) to apply to the tag element',
            },
            tagVariant: {
              type: 'ColorVariant | null',
              description: 'Color variant to apply to the tag',
            },
            tagPills: {
              type: 'boolean',
              description: 'Render the tag as a pill',
            },
            removeTag: {
              type: '(tag?: string) => void',
              description:
                'Method to remove a tag. Accepts one argument which is the tag value to remove',
            },
          },
        },
      },
    },
  }),
}
export {formTags_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL29iamVjdFV0aWxzLnRzIiwgInNyYy91dGlscy9jb21tb25Qcm9wcy50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL2Zvcm1UYWdzLmRhdGEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9vYmplY3RVdGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHNcIjtleHBvcnQgY29uc3QgcGljayA9IDxcbiAgQSBleHRlbmRzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj4sXG4gIGNvbnN0IEIgZXh0ZW5kcyBSZWFkb25seUFycmF5PFByb3BlcnR5S2V5Pixcbj4oXG4gIG9ialRvUGx1Y2s6IFJlYWRvbmx5PEE+LFxuICBrZXlzVG9QbHVjazogUmVhZG9ubHk8Qj4gfCByZWFkb25seSAoa2V5b2YgQSlbXVxuKTogUGljazxBLCBCW251bWJlcl0+ID0+XG4gIFsuLi5rZXlzVG9QbHVja10ucmVkdWNlKFxuICAgIChtZW1vLCBwcm9wKSA9PiB7XG4gICAgICBtZW1vW3Byb3BdID0gb2JqVG9QbHVja1twcm9wXVxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LFxuICAgIHt9IGFzIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj5cbiAgKSBhcyBQaWNrPEEsIEJbbnVtYmVyXT5cblxuZXhwb3J0IGNvbnN0IG9taXQgPSA8XG4gIEEgZXh0ZW5kcyBSZWNvcmQ8UHJvcGVydHlLZXksIHVua25vd24+LFxuICBjb25zdCBCIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxQcm9wZXJ0eUtleT4sXG4+KFxuICBvYmpUb1BsdWNrOiBSZWFkb25seTxBPixcbiAga2V5c1RvUGx1Y2s6IFJlYWRvbmx5PEI+IHwgcmVhZG9ubHkgKGtleW9mIEEpW11cbik6IE9taXQ8QSwgQltudW1iZXJdPiA9PlxuICBPYmplY3Qua2V5cyhvYmpUb1BsdWNrKVxuICAgIC5maWx0ZXIoKGtleSkgPT4gIWtleXNUb1BsdWNrLm1hcCgoZWwpID0+IGVsLnRvU3RyaW5nKCkpLmluY2x1ZGVzKGtleSkpXG4gICAgLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+ICh7Li4ucmVzdWx0LCBba2V5XTogb2JqVG9QbHVja1trZXldfSksIHt9IGFzIE9taXQ8QSwgQltudW1iZXJdPilcblxuLy8gQ29udmVydHMgUGFzY2FsQ2FzZSBvciBjYW1lbENhc2UgdG8ga2ViYWItY2FzZVxuZXhwb3J0IGNvbnN0IGtlYmFiQ2FzZSA9IChzdHI6IHN0cmluZykgPT4gc3RyLnJlcGxhY2UoL1xcQihbQS1aXSkvZywgJy0kMScpLnRvTG93ZXJDYXNlKClcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvY29tbW9uUHJvcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2NvbW1vblByb3BzLnRzXCI7aW1wb3J0IHR5cGUge1Byb3BSZWZlcmVuY2V9IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCBjb21tb25Qcm9wcyA9ICgpID0+XG4gICh7XG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gYHRydWVgLCBwbGFjZXMgdGhlIGNvbXBvbmVudCBpbiB0aGUgYWN0aXZlIHN0YXRlIHdpdGggYWN0aXZlIHN0eWxpbmcnLFxuICAgIH0sXG4gICAgYWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6ICdhY3RpdmUnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiQ29uZmlndXJlIHRoZSBhY3RpdmUgQ1NTIGNsYXNzIGFwcGxpZWQgd2hlbiB0aGUgbGluayBpcyBhY3RpdmUuIFR5cGljYWxseSB5b3Ugd2lsbCB3YW50IHRvIHNldCB0aGlzIHRvIGNsYXNzIG5hbWUgJ2FjdGl2ZSdcIixcbiAgICB9LFxuICAgIGFsdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmFsdWUgdG8gc2V0IGZvciB0aGUgYGFsdGAgYXR0cmlidXRlJyxcbiAgICB9LFxuICAgIGFyaWFDb250cm9sczoge1xuICAgICAgdHlwZTogJ0FyaWFJbnZhbGlkJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnSWYgdGhpcyBjb21wb25lbnQgY29udHJvbHMgYW5vdGhlciBjb21wb25lbnQgb3IgZWxlbWVudCwgc2V0IHRoaXMgdG8gdGhlIElEIG9mIHRoZSBjb250cm9sbGVkIGNvbXBvbmVudCBvciBlbGVtZW50JyxcbiAgICB9LFxuICAgIGFyaWFEZXNjcmliZWRieToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgZGVzY3JpcHRpb24gZm9yIHRoaXMgY29tcG9uZW50LiBVc2VkIGFzIHRoZSB2YWx1ZSBmb3IgdGhlIGBhcmlhLWRlc2NyaWJlZGJ5YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXJpYUludmFsaWQ6IHtcbiAgICAgIHR5cGU6ICdBcmlhSW52YWxpZCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NldHMgdGhlIGBhcmlhLWludmFsaWRgIGF0dHJpYnV0ZSB2YWx1ZSBvbiB0aGUgd3JhcHBlciBlbGVtZW50LiBXaGVuIG5vdCBwcm92aWRlZCwgdGhlIGBzdGF0ZWAgcHJvcCB3aWxsIGNvbnRyb2wgdGhlIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBhdXRvQ2xvc2U6IHtcbiAgICAgIHR5cGU6IFwiYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnXCIsXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdDb250cm9scyB0aGUgYXV0b21hdGljIGNsb3Npbmcgb2YgdGhlIGNvbXBvbmVudCB3aGVuIGNsaWNraW5nLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgICB9LFxuICAgIGF1dG9jb21wbGV0ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ2F1dG9jb21wbGV0ZScgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSBmb3JtIGNvbnRyb2xcIixcbiAgICB9LFxuICAgIGFyaWFMYWJlbDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIHZhbHVlIG9mIGBhcmlhLWxhYmVsYCBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGVsZW1lbnQnLFxuICAgIH0sXG4gICAgYXJpYUxpdmU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiB0aGUgcmVuZGVyZWQgZWxlbWVudCBpcyBhbiBgYXJpYS1saXZlYCByZWdpb24gKGZvciBzY3JlZW4gcmVhZGVyIHVzZXJzKSwgc2V0IHRvIGVpdGhlciAncG9saXRlJyBvciAnYXNzZXJ0aXZlJ1wiLFxuICAgIH0sXG4gICAgYXJpYUxhYmVsbGVkYnk6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIGxhYmVsIGZvciB0aGlzIGNvbXBvbmVudC4gVXNlZCBhcyB0aGUgdmFsdWUgZm9yIHRoZSBgYXJpYS1sYWJlbGxlZGJ5YCBhdHRyaWJ1dGUnLFxuICAgIH0sXG4gICAgYXV0b2ZvY3VzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gYHRydWVgLCBhdHRlbXB0cyB0byBhdXRvLWZvY3VzIHRoZSBjb250cm9sIHdoZW4gaXQgaXMgbW91bnRlZCwgb3IgcmUtYWN0aXZhdGVkIHdoZW4gaW4gYSBrZWVwLWFsaXZlLiBEb2VzIG5vdCBzZXQgdGhlIGBhdXRvZm9jdXNgIGF0dHJpYnV0ZSBvbiB0aGUgY29udHJvbCcsXG4gICAgfSxcbiAgICBiZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gYmFja2dyb3VuZCBvZiB0aGUgY29tcG9uZW50JyxcbiAgICB9LFxuICAgIGJvZHlCZ1ZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keSBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGJvZHlCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvZHkgYm9yZGVyJyxcbiAgICB9LFxuICAgIGJvZHlDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBib2R5JyxcbiAgICB9LFxuICAgIGJvZHlUYWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIGJvZHknLFxuICAgIH0sXG4gICAgYm9keVRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBib2R5IHRleHQnLFxuICAgIH0sXG4gICAgYm9keVZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgYm9keScsXG4gICAgfSxcbiAgICBib3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGJvcmRlcicsXG4gICAgfSxcbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICBkZWZhdWx0OiAnMCcsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXaGVuIHNldCB0byBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZ3JlYXRlciB0aGFuIHplcm8sIHdpbGwgZGVib3VuY2UgdGhlIHVzZXIgaW5wdXQuIEhhcyBubyBlZmZlY3QgaWYgcHJvcCAnbGF6eScgaXMgc2V0XCIsXG4gICAgfSxcbiAgICBkZWJvdW5jZU1heFdhaXQ6IHtcbiAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgZGVmYXVsdDogJ05hTicsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbWF4aW11bSB0aW1lIGluIG1pbGxpc2Vjb25kcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0JydzIGludm9rZWRcIixcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldoZW4gc2V0IHRvIGB0cnVlYCwgZGlzYWJsZXMgdGhlIGNvbXBvbmVudCdzIGZ1bmN0aW9uYWxpdHkgYW5kIHBsYWNlcyBpdCBpbiBhIGRpc2FibGVkIHN0YXRlXCIsXG4gICAgfSxcbiAgICBkaXNhYmxlZEZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXNhYmxlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgZGlzYWJsZWQgc3RhdGUnLFxuICAgIH0sXG4gICAgZmxvYXRpbmc6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdXaGVuIHNldCwgcmVuZGVycyBhIHNpbmdsZSBjb250cm9sIGZvcm0gd2l0aCBhIGZsb2F0aW5nIGxhYmVsLiBUaGlzIG9ubHkgd29ya3MgZm9yIGZvcm1zIHdoZXJlIHRoZSBpbW1lZGlhdGUgY2hpbGRyZW4gYXJlIGEgbGFiZWwgYW5kIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGNvbnRyb2xzLiBTZWUgYWJvdmUgZm9yIGRldGFpbHMuJyxcbiAgICB9LFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyQmdWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciBiYWNrZ3JvdW5kJyxcbiAgICB9LFxuICAgIGZvb3RlckJvcmRlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyIGJvcmRlcicsXG4gICAgfSxcbiAgICBmb290ZXJDbGFzczoge1xuICAgICAgdHlwZTogJ0NsYXNzVmFsdWUnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdDU1MgY2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBmb290ZXInLFxuICAgIH0sXG4gICAgZm9vdGVyVGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGZvb3RlciB0ZXh0JyxcbiAgICB9LFxuICAgIGZvb3RlclZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgZm9vdGVyJyxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdJRCBvZiB0aGUgZm9ybSB0aGF0IHRoZSBmb3JtIGNvbnRyb2wgYmVsb25ncyB0by4gU2V0cyB0aGUgYGZvcm1gIGF0dHJpYnV0ZSBvbiB0aGUgY29udHJvbCcsXG4gICAgfSxcbiAgICBmb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICcodmFsOiBzdHJpbmcsIGV2dDogRXZlbnQpID0+IHN0cmluZycsXG4gICAgICBkZWZhdWx0OiAndW5kZWZpbmVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVmZXJlbmNlIHRvIGEgZnVuY3Rpb24gZm9yIGZvcm1hdHRpbmcgdGhlIGlucHV0JyxcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RleHQgY29udGVudCB0byBwbGFjZSBpbiB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlckJnVmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgYmFja2dyb3VuZCcsXG4gICAgfSxcbiAgICBoZWFkZXJCb3JkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlciBib3JkZXInLFxuICAgIH0sXG4gICAgaGVhZGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhcHBseSB0byB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlclRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3BlY2lmeSB0aGUgSFRNTCB0YWcgdG8gcmVuZGVyIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGFnIGZvciB0aGUgaGVhZGVyJyxcbiAgICB9LFxuICAgIGhlYWRlclRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSBoZWFkZXIgdGV4dCcsXG4gICAgfSxcbiAgICBoZWFkZXJWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlIGhlYWRlcicsXG4gICAgfSxcbiAgICBpZDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1VzZWQgdG8gc2V0IHRoZSBgaWRgIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgY29udGVudCwgYW5kIHVzZWQgYXMgdGhlIGJhc2UgdG8gZ2VuZXJhdGUgYW55IGFkZGl0aW9uYWwgZWxlbWVudCBJRHMgYXMgbmVlZGVkJyxcbiAgICB9LFxuICAgIGxhenlGb3JtYXR0ZXI6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1doZW4gc2V0LCB0aGUgaW5wdXQgaXMgZm9ybWF0dGVkIG9uIGJsdXIgaW5zdGVhZCBvZiBlYWNoIGtleXN0cm9rZSAoaWYgdGhlcmUgaXMgYSBmb3JtYXR0ZXIgc3BlY2lmaWVkKScsXG4gICAgfSxcbiAgICBsaW5rQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3Mgb3IgY2xhc3NlcyB0byBhcHBseSB0byB0aGUgaW5uZXIgbGluayBlbGVtZW50JyxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3VuZGVmaW5lZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBJRCBvZiB0aGUgYXNzb2NpYXRlZCBkYXRhbGlzdCBlbGVtZW50IG9yIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBuYW1lYCBhdHRyaWJ1dGUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICBub0JhY2tkcm9wOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSBiYWNrZHJvcCcsXG4gICAgfSxcbiAgICBub0VsbGlwc2lzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRG8gbm90IHNob3cgZWxsaXBzaXMgYnV0dG9ucycsXG4gICAgfSxcbiAgICBub0dvdG9FbmRCdXR0b25zOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSGlkZXMgdGhlIGdvIHRvIGZpcnN0IGFuZCBnbyB0byBsYXN0IHBhZ2UgYnV0dG9ucycsXG4gICAgfSxcbiAgICBub0hlYWRlcjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGVzIHJlbmRlcmluZyBvZiB0aGUgIGhlYWRlcicsXG4gICAgfSxcbiAgICBub0hlYWRlckNsb3NlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZXMgcmVuZGVyaW5nIG9mIHRoZSBoZWFkZXIgY2xvc2UgYnV0dG9uJyxcbiAgICB9LFxuICAgIG5vSG92ZXJQYXVzZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIHRydWUsIGRpc2FibGVzIHBhdXNpbmcgdGhlIHRpbWVyIG9uIGhvdmVyIGJlaGF2aW9yJyxcbiAgICB9LFxuICAgIG5vUmVzdW1lT25Ib3ZlckxlYXZlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnV2hlbiBzZXQgdG8gdHJ1ZSwgdGhlIHRpbWVyIHdpbGwgbm90IHJlc3VtZSB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIGVsZW1lbnQuIEl0IHdpbGwgbmVlZCB0byBiZSBtYW51YWxseSByZXN1bWVkJyxcbiAgICB9LFxuICAgIG5vdmFsaWRhdGU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZGlzYWJsZXMgYnJvd3NlciBuYXRpdmUgSFRNTDUgdmFsaWRhdGlvbiBvbiBjb250cm9scyBpbiB0aGUgZm9ybScsXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiAncmVhZG9ubHkgQ2hlY2tib3hPcHRpb25SYXdbXScsXG4gICAgICBkZWZhdWx0OiAnKCkgPT4gW10nLFxuICAgICAgZGVzY3JpcHRpb246ICdBcnJheSBvZiBpdGVtcyB0byByZW5kZXIgaW4gdGhlIGNvbXBvbmVudCcsXG4gICAgfSxcbiAgICBwbGFpbjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlbmRlciB0aGUgZm9ybSBjb250cm9sIGluIHBsYWluIG1vZGUsIHJhdGhlciB0aGFuIGN1c3RvbSBzdHlsZWQgbW9kZScsXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiBcIicnXCIsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NldHMgdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIHZhbHVlIG9uIHRoZSBmb3JtIGNvbnRyb2wnLFxuICAgIH0sXG4gICAgcGxhaW50ZXh0OiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkZWZhdWx0OiAnZmFsc2UnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdTZXQgdGhlIGZvcm0gY29udHJvbCBhcyByZWFkb25seSBhbmQgcmVuZGVycyB0aGUgY29udHJvbCB0byBsb29rIGxpa2UgcGxhaW4gdGV4dCAobm8gYm9yZGVycyknLFxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWRkcyB0aGUgYHJlcXVpcmVkYCBhdHRyaWJ1dGUgdG8gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICByZWFkb25seToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogJ2ZhbHNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgYHJlYWRvbmx5YCBhdHRyaWJ1dGUgb24gdGhlIGZvcm0gY29udHJvbCcsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgQVJJQSBhdHRyaWJ1dGUgYHJvbGVgIHRvIGEgc3BlY2lmaWMgdmFsdWUnLFxuICAgIH0sXG4gICAgcm91bmRlZDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6ICdmYWxzZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbi4gVGhlIGBzcXVhcmVgIHByb3AgdGFrZXMgcHJlY2VkZW5jZS4gUmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMnLFxuICAgIH0sXG4gICAgcm91bmRlZEJvdHRvbToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4gfCBSYWRpdXNFbGVtZW50JyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3BlY2lmaWVzIHRoZSB0eXBlIG9mIHJvdW5kaW5nIHRvIGFwcGx5IHRvIHRoZSBgYm90dG9tYCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRFbmQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYGVuZGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICByb3VuZGVkU3RhcnQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYHN0YXJ0YCBjb3JuZXJzIG9mIHRoZSBjb21wb25lbnQgb3IgaXRzIGNoaWxkcmVuJyxcbiAgICB9LFxuICAgIHJvdW5kZWRUb3A6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuIHwgUmFkaXVzRWxlbWVudCcsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1NwZWNpZmllcyB0aGUgdHlwZSBvZiByb3VuZGluZyB0byBhcHBseSB0byB0aGUgYHRvcGAgY29ybmVycyBvZiB0aGUgY29tcG9uZW50IG9yIGl0cyBjaGlsZHJlbicsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiAnU2l6ZScsXG4gICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0IHRoZSBzaXplIG9mIHRoZSBjb21wb25lbnQncyBhcHBlYXJhbmNlLiAnc20nLCAnbWQnIChkZWZhdWx0KSwgb3IgJ2xnJ1wiLFxuICAgIH0sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVVJMIHRvIHNldCBmb3IgdGhlIGBzcmNgIGF0dHJpYnV0ZScsXG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgdHlwZTogJ1ZhbGlkYXRpb25TdGF0ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NvbnRyb2xzIHRoZSB2YWxpZGF0aW9uIHN0YXRlIGFwcGVhcmFuY2Ugb2YgdGhlIGNvbXBvbmVudC4gYHRydWVgIGZvciB2YWxpZCwgYGZhbHNlYCBmb3IgaW52YWxpZCwgb3IgYG51bGxgIGZvciBubyB2YWxpZGF0aW9uIHN0YXRlJyxcbiAgICB9LFxuICAgIHN1YnRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSBzdWJ0aXRsZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZVRhZzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnaDYnLFxuICAgICAgZGVzY3JpcHRpb246ICdTcGVjaWZ5IHRoZSBIVE1MIHRhZyB0byByZW5kZXIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0YWcgZm9yIHRoZSBzdWJ0aXRsZScsXG4gICAgfSxcbiAgICBzdWJ0aXRsZVRleHRWYXJpYW50OiB7XG4gICAgICB0eXBlOiAnVGV4dENvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogJ2JvZHktc2Vjb25kYXJ5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgc3VidGl0bGUgdGV4dCcsXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2RpdicsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZycsXG4gICAgfSxcbiAgICB0ZXh0RmllbGQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgZGVzY3JpcHRpb246ICdGaWVsZCBuYW1lIGluIHRoZSBgb3B0aW9uc2AgYXJyYXkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHRleHQgbGFiZWwnLFxuICAgIH0sXG4gICAgdGV4dFZhcmlhbnQ6IHtcbiAgICAgIHR5cGU6ICdUZXh0Q29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSB0ZXh0JyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGV4dCBjb250ZW50IHRvIHBsYWNlIGluIHRoZSB0aXRsZScsXG4gICAgfSxcbiAgICB0aXRsZUNsYXNzOiB7XG4gICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NTUyBjbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRpdGxlVGFnOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdoNCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NwZWNpZnkgdGhlIEhUTUwgdGFnIHRvIHJlbmRlciBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRhZyBmb3IgdGhlIHRpdGxlJyxcbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXJzIHRoZSBmZWVkYmFjayB0ZXh0IGluIGEgcnVkaW1lbnRhcnkgdG9vbHRpcCBzdHlsZScsXG4gICAgfSxcbiAgICB2YWxpZGF0ZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiV2hlbiBzZXQsIGFkZHMgdGhlIEJvb3RzdHJhcCBjbGFzcyAnd2FzLXZhbGlkYXRlZCcgb24gdGhlIGZvcm0sIHRyaWdnZXJpbmcgdGhlIG5hdGl2ZSBicm93c2VyIHZhbGlkYXRpb24gc3RhdGVzXCIsXG4gICAgfSxcbiAgICB2YWx1ZUZpZWxkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd2YWx1ZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZpZWxkIG5hbWUgaW4gdGhlIGBvcHRpb25zYCBhcnJheSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgdmFsdWUnLFxuICAgIH0sXG4gICAgdmFyaWFudDoge1xuICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQXBwbGllcyBvbmUgb2YgdGhlIEJvb3RzdHJhcCB0aGVtZSBjb2xvciB2YXJpYW50cyB0byB0aGUgY29tcG9uZW50LiBXaGVuIGltcGxlbWVudGVkIGBiZy12YXJpYW50YCBhbmQgYHRleHQtdmFyaWFudGAgd2lsbCB0YWtlIHByZWNlZGVuY2UnLFxuICAgIH0sXG4gICAgd3JhcHBlckF0dHJzOiB7XG4gICAgICB0eXBlOiAnUmVhZG9ubHk8QXR0cnNWYWx1ZT4nLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgZGVzY3JpcHRpb246ICdBdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCcsXG4gICAgfSxcbiAgICB3cmFwcGVyQ2xhc3M6IHtcbiAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ1NTIGNsYXNzIChvciBjbGFzc2VzKSB0byBhZGQgdG8gdGhlIHdyYXBwZXIgZWxlbWVudCcsXG4gICAgfSxcbiAgICBwbGFjZW1lbnQ6IHtcbiAgICAgIHR5cGU6ICdQbGFjZW1lbnQnLFxuICAgICAgZGVmYXVsdDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1BsYWNlbWVudCBvZiBhIGZsb2F0aW5nIGVsZW1lbnQnLFxuICAgIH0sXG4gIH0pIGFzIGNvbnN0XG5cbmNvbnN0IHNpbmdsZXRvblByb3BzID0gT2JqZWN0LmZyZWV6ZShjb21tb25Qcm9wcygpKVxuXG5leHBvcnQgY29uc3QgYnVpbGRDb21tb25Qcm9wcyA9IChcbiAgb2JqPzogUGFydGlhbDxSZWNvcmQ8a2V5b2YgdHlwZW9mIHNpbmdsZXRvblByb3BzLCBQYXJ0aWFsPFByb3BSZWZlcmVuY2U+Pj5cbik6IFJlYWRvbmx5PHR5cGVvZiBzaW5nbGV0b25Qcm9wcz4gPT4ge1xuICBpZiAoIW9iaikgcmV0dXJuIHNpbmdsZXRvblByb3BzXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgY29uc3QgbXlPYmplY3QgPSBjb21tb25Qcm9wcygpIGFzIFJlY29yZDxzdHJpbmcsIGFueT5cblxuICAvLyBNZXJnZSB0aGUgcHJvdmlkZWQgb2JqZWN0IGludG8gdGhlIGNvbW1vbiBwcm9wc1xuICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIG15T2JqZWN0W2tleV0gPSB7XG4gICAgICAuLi5teU9iamVjdFtrZXldLFxuICAgICAgLi4udmFsdWUsXG4gICAgfVxuICB9KVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG15T2JqZWN0IGFzIGFueSlcbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1vbkVtaXRzID0ge1xuICBjYW5jZWw6IHt9LFxuICBvazoge30sXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHMvZm9ybVRhZ3MuZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2Zvcm1UYWdzLmRhdGEudHNcIjtpbXBvcnQgdHlwZSB7XG4gIEJGb3JtVGFnRW1pdHMsXG4gIEJGb3JtVGFnUHJvcHMsXG4gIEJGb3JtVGFnc0VtaXRzLFxuICBCRm9ybVRhZ1Nsb3RzLFxuICBCRm9ybVRhZ3NQcm9wcyxcbiAgQkZvcm1UYWdzU2xvdHMsXG59IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB7XG4gIHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlLFxuICB0eXBlIEVtaXRSZWNvcmQsXG4gIHR5cGUgUHJvcFJlY29yZCxcbiAgdHlwZSBTbG90UmVjb3JkLFxuICBTdHlsZUtpbmQsXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHtwaWNrfSBmcm9tICcuLi8uLi91dGlscy9vYmplY3RVdGlscydcbmltcG9ydCB7YnVpbGRDb21tb25Qcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uUHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZDogKCk6IENvbXBvbmVudFJlZmVyZW5jZSA9PiAoe1xuICAgIEJGb3JtVGFnOiB7XG4gICAgICBzdHlsZVNwZWM6IHtraW5kOiBTdHlsZUtpbmQuQnN2bkNsYXNzfSxcbiAgICAgIHNvdXJjZVBhdGg6ICcvQkZvcm1UYWcvQkZvcm1UYWcudnVlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIC4uLnBpY2soXG4gICAgICAgICAgYnVpbGRDb21tb25Qcm9wcyh7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIlZhbHVlIHRvIHBsYWNlIGluIHRoZSAndGl0bGUnIGF0dHJpYnV0ZSBvZiB0aGUgdGFnLiBXaWxsIGFsc28gYmUgdXNlZCBmb3IgdGhlIHRhZyBjb250ZW50IGlmIG5vIGRlZmF1bHQgc2xvdCBwcm92aWRlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZzoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiAnPHNwYW4+JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YXJpYW50OiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICdzZWNvbmRhcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBbJ2Rpc2FibGVkJywgJ2lkJywgJ3RhZycsICd0aXRsZScsICd2YXJpYW50J11cbiAgICAgICAgKSxcbiAgICAgICAgbm9SZW1vdmU6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIHRoZSB0YWcgd2lsbCBub3QgaGF2ZSBhIHJlbW92ZSBidXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICBwaWxsOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ01ha2VzIHRoZSB0YWcgaGF2ZSBhIHBpbGwgYXBwZWFyYW5jZScsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxhYmVsOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ1JlbW92ZSB0YWcnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB2YWx1ZSBvZiB0aGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBvbiB0aGUgcmVtb3ZlIGJ1dHRvbiBpbiB0aGUgdGFnXCIsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIEJGb3JtVGFnUHJvcHM+LFxuICAgICAgZW1pdHM6IHtcbiAgICAgICAgcmVtb3ZlOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gdGhlIHJlbW92ZSBidXR0b24gaXMgY2xpY2tlZCcsXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgcmVtb3ZlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RleHQgb2YgdGhlIHRhZyB0byByZW1vdmUnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCBjYXBpdGFsaXplIFwiVGV4dFwiIGZvciBjb25zaXN0ZW5jeSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIEVtaXRSZWNvcmQ8a2V5b2YgQkZvcm1UYWdFbWl0cz4sXG4gICAgICBzbG90czoge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IHRvIHBsYWNlIGluIHRoZSB0YWcuIE92ZXJyaWRlcyB0aGUgYHRpdGxlYCBwcm9wJyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFNsb3RSZWNvcmQ8a2V5b2YgQkZvcm1UYWdTbG90cz4sXG4gICAgfSxcbiAgICBCRm9ybVRhZ3M6IHtcbiAgICAgIHN0eWxlU3BlYzoge2tpbmQ6IFN0eWxlS2luZC5Cc3ZuQ2xhc3N9LFxuICAgICAgc291cmNlUGF0aDogJy9CRm9ybVRhZ3MvQkZvcm1UYWdzLnZ1ZScsXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5waWNrKFxuICAgICAgICAgIGJ1aWxkQ29tbW9uUHJvcHMoe1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIlNldHMgdGhlIHZhbHVlIG9mIHRoZSAnbmFtZScgYXR0cmlidXRlIG9uIHRoZSBmb3JtIGNvbnRyb2wuIFdoZW4gc2V0LCBjcmVhdGVzIGEgaGlkZGVuIGlucHV0IGZvciBlYWNoIHRhZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICdBZGQgdGFnLi4uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgWydhdXRvZm9jdXMnLCAnZGlzYWJsZWQnLCAnZm9ybScsICduYW1lJywgJ3BsYWNlaG9sZGVyJywgJ3JlcXVpcmVkJywgJ3NpemUnLCAnc3RhdGUnXVxuICAgICAgICApLFxuICAgICAgICBhZGRCdXR0b25UZXh0OiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ0FkZCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIlRleHQgZm9yIHRoZSBidWlsdCBpbiAnQWRkJyBidXR0b24uIFNsb3QgYGFkZC1idXR0b24tdGV4dGAgdGFrZXMgcHJlY2VkZW5jZVwiLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCBzYXkgXCJidWlsdC1pblwiIGluc3RlYWQgb2YgXCJidWlsdCBpblwiKVxuICAgICAgICB9LFxuICAgICAgICBhZGRCdXR0b25WYXJpYW50OiB7XG4gICAgICAgICAgdHlwZTogJ0J1dHRvblZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiAnb3V0bGluZS1zZWNvbmRhcnknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFwcGxpZXMgb25lIG9mIHRoZSBCb290c3RyYXAgdGhlbWUgY29sb3IgdmFyaWFudHMgdG8gdGhlICdBZGQnIGJ1dHRvblwiLFxuICAgICAgICB9LFxuICAgICAgICBhZGRPbkNoYW5nZToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiV2hlbiBzZXQsIGVuYWJsZXMgYWRkaW5nIHRoZSB0YWcgb24gdGhlIGlucHV0J3MgJ2NoYW5nZScgZXZlbnRcIixcbiAgICAgICAgfSxcbiAgICAgICAgZHVwbGljYXRlVGFnVGV4dDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6ICdEdXBsaWNhdGUgdGFnKHMpJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdUaGUgbWVzc2FnZSB3aGVuIGR1cGxpY2F0ZSB0YWdzIGFyZSBkZXRlY3RlZC4gU2V0IHRvIGFuIGVtcHR5IHN0cmluZyB0byBkaXNhYmxlIHRoZSBtZXNzYWdlJyxcbiAgICAgICAgfSxcbiAgICAgICAgZmVlZGJhY2tBcmlhTGl2ZToge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IFwiJ2Fzc2VydGl2ZSdcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1ZhbHVlIHRvIHVzZSBmb3IgdGhlIGBhcmlhLWxpdmVgIGF0dHJpYnV0ZSBvbiB0aGUgZmVlZGJhY2sgdGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0QXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiAnUmVhZG9ubHk8QXR0cnNWYWx1ZT4nLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FkZGl0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IHRhZyBpbnB1dCBlbGVtZW50JyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRDbGFzczoge1xuICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIG5ldyB0YWcgaW5wdXQgZWxlbWVudCcsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0SWQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnSWQgdG8gYXBwbHkgdG8gdGhlIG5ldyB0YWcgaW5wdXQgZWxlbWVudC4gSWYgbm90IHByb3ZpZGVkLCBhIHVuaXF1ZSBJZCB3aWxsIGJlIGF1dG8gZ2VuZXJhdGVkJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaG91bGQgc2F5IFwiSURcIiBjb25zaXN0ZW50bHkgaW5zdGVhZCBvZiBcIklkXCIpXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0VHlwZToge1xuICAgICAgICAgIHR5cGU6ICdJbnB1dFR5cGUnLFxuICAgICAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGlucHV0IHRvIHVzZTogJ3RleHQnLCAnZW1haWwnLCAndGVsJywgJ3VybCcsIG9yICdudW1iZXInLiBEZWZhdWx0IGlzICd0ZXh0J1wiLFxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkVGFnVGV4dDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6ICdJbnZhbGlkIHRhZyhzKScsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnVGhlIGVycm9yIG1lc3NhZ2Ugd2hlbiBpbnZhbGlkIHRhZ3MgYXJlIGRldGVjdGVkLiBTZXQgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIGRpc2FibGUgdGhlIG1lc3NhZ2UnLFxuICAgICAgICB9LFxuICAgICAgICBsaW1pdDoge1xuICAgICAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdUaGUgbWF4aW11bSBhbW91bnQgb2YgdGFncyB0aGF0IGNhbiBiZSBhZGRlZC4gVGhlIGxpbWl0IGNhbiBzdGlsbCBiZSBleGNlZWRlZCBpZiBtYW5pcHVsYXRlZCBvdXRzaWRlIG9mIHRoZSBjb21wb25lbnQnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCBzYXkgXCJudW1iZXJcIiBpbnN0ZWFkIG9mIFwiYW1vdW50XCIgZm9yIGNvdW50YWJsZSBpdGVtcylcbiAgICAgICAgfSxcbiAgICAgICAgbGltaXRUYWdzVGV4dDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6ICdUYWcgbGltaXQgcmVhY2hlZCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnVGhlIG1lc3NhZ2Ugd2hlbiB0aGUgbGltaXQgaXMgcmVhY2hlZC4gU2V0IHRvIGFuIGVtcHR5IHN0cmluZyB0byBkaXNhYmxlIHRoZSBtZXNzYWdlJyxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWxWYWx1ZToge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmdbXScsXG4gICAgICAgICAgZGVmYXVsdDogJygpID0+IFtdJywgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0ICh0aG91Z2ggc3RyaW5nIGxpdGVyYWwsIGl0IHJlcHJlc2VudHMgYSBmdW5jdGlvbilcbiAgICAgICAgICAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb25cbiAgICAgICAgfSxcbiAgICAgICAgbm9BZGRPbkVudGVyOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJXaGVuIHNldCwgZGlzYWJsZXMgYWRkaW5nIHRoZSB0YWcgb24gdGhlIGlucHV0J3MgJ2tleWRvd24uZW50ZXInIGV2ZW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIG5vT3V0ZXJGb2N1czoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZGlzYWJsZXMgdGhlIGZvY3VzIHN0eWxpbmcgb2YgdGhlIGNvbXBvbmVudCByb290IGVsZW1lbnQnLFxuICAgICAgICB9LFxuICAgICAgICBub1RhZ1JlbW92ZToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgdGhlIHRhZ3Mgd2lsbCBub3QgaGF2ZSBhIHJlbW92ZSBidXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVPbkRlbGV0ZToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnV2hlbiBzZXQsIGVuYWJsZXMgcmVtb3ZhbCBvZiBsYXN0IHRhZyBpbiB0YWdzIHdoZW4gdXNlciBwcmVzc2VzIGRlbGV0ZSBvciBiYWNrc3BhY2UgYW5kIHRoZSBpbnB1dCBpcyBlbXB0eScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlcGFyYXRvcjoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXScsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2VwYXJhdG9yIGNoYXJhY3RlcihzKSB0aGF0IHdpbGwgdHJpZ2dlciBhIHRhZyB0byBiZSBjcmVhdGVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGFnQ2xhc3M6IHtcbiAgICAgICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhc3MgKG9yIGNsYXNzZXMpIHRvIGFwcGx5IHRvIHRoZSB0YWdzJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGFnUGlsbHM6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWFrZXMgdGhlIGJ1aWx0IGluIHRhZ3MgaGF2ZSBhIHBpbGwgYXBwZWFyYW5jZScsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2hvdWxkIHNheSBcImJ1aWx0LWluXCIgaW5zdGVhZCBvZiBcImJ1aWx0IGluXCIpXG4gICAgICAgIH0sXG4gICAgICAgIHRhZ1JlbW92ZUxhYmVsOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB2YWx1ZSBvZiB0aGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBvbiB0aGUgcmVtb3ZlIGJ1dHRvbiBpbiB0aGUgdGFnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRhZ1JlbW92ZWRMYWJlbDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6ICdUYWcgcmVtb3ZlZCcsXG4gICAgICAgICAgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIHRhZ1ZhbGlkYXRvcjoge1xuICAgICAgICAgIHR5cGU6ICcodDogc3RyaW5nKSA9PiBib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiAnKCkgPT4gdHJ1ZScsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdCAodGhvdWdoIHN0cmluZyBsaXRlcmFsLCBpdCByZXByZXNlbnRzIGEgZnVuY3Rpb24pXG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIk9wdGlvbmFsIHRhZyB2YWxpZGF0b3IgbWV0aG9kLiBQYXNzZWQgYSBzaW5nbGUgYXJndW1lbnQgb2YgdGFnIGJlaW5nIGFkZGVkLiBTaG91bGQgcmV0dXJuICd0cnVlJyBpZiB0aGUgdGFnIHBhc3NlcyB2YWxpZGF0aW9uLCBvciAnZmFsc2UnIGlmIHRoZSB0YWcgY2Fubm90IGJlIGFkZGVkXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRhZ1ZhcmlhbnQ6IHtcbiAgICAgICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICAgICAgZGVmYXVsdDogJ3NlY29uZGFyeScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWVzIG9uZSBvZiB0aGUgQm9vdHN0cmFwIHRoZW1lIGNvbG9yIHZhcmlhbnRzIHRvIHRoZSB0YWdzJyxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkZvcm1UYWdzUHJvcHM+LFxuICAgICAgZW1pdHM6IHtcbiAgICAgICAgJ2JsdXInOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gY29tcG9uZW50IGxvc2VzIGZvY3VzJyxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICB0eXBlOiAnRm9jdXNFdmVudCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTmF0aXZlIGJsdXIgZXZlbnQgKGJlZm9yZSBhbnkgZm9ybWF0dGluZyknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnZm9jdXMnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gY29tcG9uZW50IGdhaW5zIGZvY3VzJyxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICB0eXBlOiAnRm9jdXNFdmVudCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTmF0aXZlIGZvY3VzIGV2ZW50IChiZWZvcmUgYW55IGZvcm1hdHRpbmcpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ZvY3VzaW4nOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gaW50ZXJuYWwgZWxlbWVudHMgb2YgY29tcG9uZW50IGdhaW4gZm9jdXMuJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaG91bGQgcmVtb3ZlIHRyYWlsaW5nIHBlcmlvZCBmb3IgY29uc2lzdGVuY3kpXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0ZvY3VzRXZlbnQnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ05hdGl2ZSBmb2N1c2luIGV2ZW50IChiZWZvcmUgYW55IGZvcm1hdHRpbmcpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ZvY3Vzb3V0Jzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW1pdHRlZCB3aGVuIGludGVybmFsIGVsZW1lbnRzIG9mIGNvbXBvbmVudCBsb3NlIGZvY3VzLicsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2hvdWxkIHJlbW92ZSB0cmFpbGluZyBwZXJpb2QgZm9yIGNvbnNpc3RlbmN5KVxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdGb2N1c0V2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOYXRpdmUgZm9jdXNvdXQgZXZlbnQgKGJlZm9yZSBhbnkgZm9ybWF0dGluZyknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAndGFnLXN0YXRlJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW1pdHRlZCB3aGVuIHRhZ3MgaW4gdGhlIHVzZXIgaW5wdXQgYXJlIHBhcnNlZCcsXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdmFsaWRUYWdzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdBcnJheScsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdBcnJheSBvZiBuZXcgdGFnKHMpIGFkZGVkIChvciB0aGF0IHdpbGwgYmUgYWRkZWQpLiBXaWxsIGJlIHplcm8gbGVuZ3RoIGlmIG5vIHRhZ3MgYWRkZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludmFsaWRUYWdzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdBcnJheScsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdBcnJheSBvZiB0YWcocykgdGhhdCBjYW5ub3QgYmUgYWRkZWQgYmVjYXVzZSB0aGV5IGRpZCBub3QgcGFzcyB2YWxpZGF0aW9uLiBXaWxsIGJlIHplcm8gbGVuZ3RoIGlmIG5vIGludmFsaWQgdGFncycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVwbGljYXRlVGFnczoge1xuICAgICAgICAgICAgICB0eXBlOiAnQXJyYXknLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAnQXJyYXkgb2YgdGFnKHMpIHRoYXQgY2Fubm90IGJlIGFkZGVkIGJlY2F1c2UgdGhleSB3b3VsZCBiZSBhIGR1cGxpY2F0ZSB0YWcuIFdpbGwgYmUgemVybyBsZW5ndGggaWYgbm8gZHVwbGljYXRlIHRhZ3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAndXBkYXRlOm1vZGVsLXZhbHVlJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW1pdHRlZCB3aGVuIHRoZSB0YWdzIGNoYW5nZXMuIFVwZGF0ZXMgdGhlIHYtbW9kZWwnLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCBzYXkgXCJjaGFuZ2VcIiBpbnN0ZWFkIG9mIFwiY2hhbmdlc1wiKSAvLyBUT0RPIHNpbWlsYXIgY29udGVudCB0byBCRm9ybVNlbGVjdC91cGRhdGU6bW9kZWwtdmFsdWUgKHNpbWlsYXIgcHVycG9zZSlcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICB0eXBlOiAnQXJyYXknLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FycmF5IG9mIGN1cnJlbnQgdGFncycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBFbWl0UmVjb3JkPGtleW9mIEJGb3JtVGFnc0VtaXRzIHwgJ3VwZGF0ZTptb2RlbC12YWx1ZSc+LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgJ2FkZC1idXR0b24tdGV4dCc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiQ29udGVudCB0byBwbGFjZSBpbiB0aGUgYnVpbHQgaW4gJ0FkZCcgYnV0dG9uLiBUYWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlICdhZGQtYnV0dG9uLXRleHQnIHByb3AuIE5vdCB1c2VkIHdoZW4gdGhlIGRlZmF1bHQgc2NvcGVkIHNsb3QgaXMgcHJvdmlkZWRcIiwgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaG91bGQgc2F5IFwiYnVpbHQtaW5cIiBpbnN0ZWFkIG9mIFwiYnVpbHQgaW5cIilcbiAgICAgICAgfSxcbiAgICAgICAgJ2RlZmF1bHQnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTbG90IHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHJlbmRlcmluZyBvZiB0aGUgdGFncyBjb21wb25lbnQnLFxuICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBhZGRCdXR0b25UZXh0OiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWYWx1ZSBvZiB0aGUgJ2FkZC1idXR0b24tdGV4dCcgcHJvcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZEJ1dHRvblZhcmlhbnQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZhbHVlIG9mIHRoZSAnYWRkLWJ1dHRvbi12YXJpYW50JyBwcm9wXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkVGFnOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICcodGFnPzogc3RyaW5nKSA9PiB2b2lkJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgJ01ldGhvZCB0byBhZGQgYSBuZXcgdGFnLiBBc3N1bWVzIHRoZSB0YWcgaXMgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCwgYnV0IG9wdGlvbmFsbHkgYWNjZXB0cyBvbmUgYXJndW1lbnQgd2hpY2ggaXMgdGhlIHRhZyB2YWx1ZSB0byBiZSBhZGRlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZUFkZEJ1dHRvbjoge1xuICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdXaWxsIGJlIGB0cnVlYCBpZiB0aGUgdGFnKHMpIGluIHRoZSBpbnB1dCBjYW5ub3QgYmUgYWRkZWQgKGFsbCBpbnZhbGlkIGFuZC9vciBkdXBsaWNhdGVzKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIklmIHRoZSBjb21wb25lbnQgaXMgaW4gdGhlIGRpc2FibGVkIHN0YXRlLiBWYWx1ZSBvZiB0aGUgJ2Rpc2FibGVkJyBwcm9wXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVwbGljYXRlVGFnVGV4dDoge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHZhbHVlIG9mIHRoZSAnZHVwbGljYXRlLXRhZy10ZXh0JyBwcm9wXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVwbGljYXRlVGFnczoge1xuICAgICAgICAgICAgICB0eXBlOiAnQXJyYXknLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FycmF5IG9mIGR1cGxpY2F0ZSB0YWcocykgdGhhdCBjb3VsZCBub3QgYmUgYWRkZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZhbHVlIG9mIHRoZSAnZm9ybScgcHJvcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0QXR0cnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ1JlY29yZDxzdHJpbmcsIHVua25vd24+JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgJ09iamVjdCBvZiBhdHRyaWJ1dGVzIHRvIGFwcGx5IHRvIG5hdGl2ZSBpbnB1dCBlbGVtZW50cyB2aWEgXFwndi1iaW5kPVwiaW5wdXRBdHRyc1wiXFwnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dENsYXNzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCJDbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIG5ldyB0YWcgaW5wdXQgZWxlbWVudC4gVmFsdWUgb2YgdGhlICdpbnB1dC1jbGFzcycgcHJvcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0SGFuZGxlcnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ09iamVjdCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdPYmplY3Qgb2YgZXZlbnQgaGFuZGxlcnMgdG8gYXBwbHkgdG8gbmF0aXZlIGlucHV0IGVsZW1lbnRzIHZpYSBcXCd2LW9uPVwiaW5wdXRIYW5kbGVyc1wiXFwnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dElkOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIklkIHRvIGFkZCB0byB0aGUgbmV3IHRhZyBpbnB1dCBlbGVtZW50LiBEZWZhdWx0cyB0byBwcm9wICdpbnB1dC1pZCcuIElmIG5vdCBwcm92aWRlZCBhIHVuaXF1ZSBJZCBpcyBhdXRvLWdlbmVyYXRlZC4gQWxzbyBhdmFpbGFibGUgdmlhICdpbnB1dEF0dHJzLmlkJ1wiLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCBzYXkgXCJJRFwiIGNvbnNpc3RlbnRseSBpbnN0ZWFkIG9mIFwiSWRcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dFR5cGU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0lucHV0VHlwZScsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwiVGhlIHR5cGUgb2YgaW5wdXQgdG8gdXNlOiAndHlwZScsICdlbWFpbCcsICd0ZWwnLCAndXJsJywgb3IgJ251bWJlcicuIERlZmF1bHQgaXMgJ3RleHQnLiBOb3JtYWxpemVkIHZhbHVlIG9mIHRoZSAnaW5wdXQtdHlwZScgcHJvcFwiLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCBzYXkgXCIndGV4dCdcIiBpbnN0ZWFkIG9mIFwiJ3R5cGUnXCIgaW4gdGhlIGxpc3QpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW52YWxpZFRhZ1RleHQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB2YWx1ZSBvZiB0aGUgJ2ludmFsaWQtdGFnLXRleHQnIHByb3BcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnZhbGlkVGFnczoge1xuICAgICAgICAgICAgICB0eXBlOiAnQXJyYXknLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIkFycmF5IG9mIGludmFsaWQgdGFnKHMpIHRoYXQgY291bGQgbm90IGJlIGFkZGVkLiBSZXF1aXJlcyBhIHZhbGlkYXRvciBmdW5jdGlvbiB2aWEgdGhlICd0YWctdmFsaWRhdG9yJyBwcm9wXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNEdXBsaWNhdGU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dpbGwgYmUgYHRydWVgIGlmIHRoZSB1c2VyIGhhcyBhdHRlbXB0ZWQgdG8gYWRkIGR1cGxpY2F0ZSB0YWcocyknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzSW52YWxpZDoge1xuICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwiV2lsbCBiZSBgdHJ1ZWAgaWYgdGhlIGlucHV0IGhhcyBpbnZhbGlkIHRhZyhzKS4gUmVxdWlyZXMgYSB2YWxpZGF0b3IgZnVuY3Rpb24gdmlhIHRoZSAndGFnLXZhbGlkYXRvcicgcHJvcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzTGltaXRSZWFjaGVkOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCJXaWxsIGJlIGB0cnVlYCBpZiB0aGUgaW5wdXQgaGFzIHJlYWNoZWQgdGhlIG1heGltdW0gYW1vdW50IG9mIHRhZ3MgZGVmaW5lZCBieSB0aGUgJ2xpbWl0JyBwcm9wXCIsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2hvdWxkIHNheSBcIm51bWJlclwiIGluc3RlYWQgb2YgXCJhbW91bnRcIiBmb3IgY291bnRhYmxlIGl0ZW1zKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbWl0VGFnc1RleHQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB2YWx1ZSBvZiB0aGUgJ2xpbWl0LXRhZy10ZXh0JyBwcm9wXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9UYWdSZW1vdmU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdmFsdWUgb2YgdGhlICduby10YWctcmVtb3ZlJyBwcm9wXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB2YWx1ZSBvZiB0aGUgJ3BsYWNlaG9sZGVyJyBwcm9wXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICcoKSA9PiB2b2lkJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNZXRob2QgdG8gZnVsbHkgcmVzZXQgdGhlIHRhZ3MgaW5wdXQnLFxuICAgICAgICAgICAgICBub3RZZXRJbXBsZW1lbnRlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVUYWc6IHtcbiAgICAgICAgICAgICAgdHlwZTogJyh0YWc/OiBzdHJpbmcpID0+IHZvaWQnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAnTWV0aG9kIHRvIHJlbW92ZSBhIHRhZy4gQWNjZXB0cyBvbmUgYXJndW1lbnQgd2hpY2ggaXMgdGhlIHRhZyB2YWx1ZSB0byByZW1vdmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmFsdWUgb2YgdGhlICdyZXF1aXJlZCcgcHJvcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcGFyYXRvcjoge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10nLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdmFsdWUgb2YgdGhlICdzZXBhcmF0b3InIHByb3BcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdTaXplJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHZhbHVlIG9mIHRoZSAnc2l6ZScgcHJvcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdWYWxpZGF0aW9uU3RhdGUnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIlRoZSBjb250ZXh0dWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuIFZhbHVlIG9mIHRoZSAnc3RhdGUnIHByb3AuIFBvc3NpYmxlIHZhbHVlcyBhcmUgdHJ1ZSwgZmFsc2Ugb3IgbnVsbFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ0NsYXNzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCJDbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIHRhZyBlbGVtZW50cy4gVmFsdWUgb2YgdGhlICd0YWctY2xhc3MnIHByb3BcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdQaWxsczoge1xuICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVmFsdWUgb2YgdGhlIGB0YWctcGlsbHNgIHByb3AnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ1JlbW92ZUxhYmVsOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcIkFSSUEgbGFiZWwgZm9yIHRoZSByZW1vdmUgYnV0dG9uIG9uIHRhZ3MuIFZhbHVlIG9mIHRoZSAndGFnLXJlbW92ZS1sYWJlbCcgcHJvcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ1JlbW92ZWRMYWJlbDoge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmFsdWUgb2YgdGhlICd0YWctcmVtb3ZlZC1sYWJlbCcgcHJvcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ1ZhbGlkYXRvcjoge1xuICAgICAgICAgICAgICB0eXBlOiAnKHQ6IHN0cmluZykgPT4gYm9vbGVhbicsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZhbHVlIG9mIHRoZSAndGFnLXZhbGlkYXRvcicgcHJvcFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ1ZhcmlhbnQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWYWx1ZSBvZiB0aGUgJ3RhZy12YXJpYW50JyBwcm9wXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICd0YWcnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTbG90IHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHJlbmRlcmluZyBhbiBpbmRpdmlkdWFsIHRhZycsIC8vIFRPRE8gZ3JhbW1hciBjaGVjayAoc2hvdWxkIHNheSBcInJlbmRlcmluZyBvZiBhblwiIGluc3RlYWQgb2YgXCJyZW5kZXJpbmcgYW5cIilcbiAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgdGFnOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1ZhbHVlIG9mIHRoZSB0YWcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ0NsYXNzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdDbGFzc1ZhbHVlJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDbGFzcyAob3IgY2xhc3NlcykgdG8gYXBwbHkgdG8gdGhlIHRhZyBlbGVtZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdWYXJpYW50OiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb2xvciB2YXJpYW50IHRvIGFwcGx5IHRvIHRoZSB0YWcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ1BpbGxzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSZW5kZXIgdGhlIHRhZyBhcyBhIHBpbGwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZVRhZzoge1xuICAgICAgICAgICAgICB0eXBlOiAnKHRhZz86IHN0cmluZykgPT4gdm9pZCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICdNZXRob2QgdG8gcmVtb3ZlIGEgdGFnLiBBY2NlcHRzIG9uZSBhcmd1bWVudCB3aGljaCBpcyB0aGUgdGFnIHZhbHVlIHRvIHJlbW92ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJGb3JtVGFnc1Nsb3RzPixcbiAgICB9LFxuICB9KSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFosSUFBTSxPQUFPLENBSXJhLFlBQ0EsZ0JBRUEsQ0FB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
