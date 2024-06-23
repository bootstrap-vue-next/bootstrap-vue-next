import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormTag',
      props: { '': {
        id: {
          type: 'string',
          default: undefined,
        },
        title: {
          type: 'string',
          default: undefined,
          description:
            "Value to place in the 'title' attribute of the tag. Will also be used for the tag content if no default slot provided",
        },
        disabled: {
          type: 'boolean',
          default: false,
        },
        noRemove: {
          type: 'boolean',
          default: false,
          description: 'When set, the tag will not have a remove button',
        },
        pill: {
          type: 'boolean',
          default: false,
          description: 'Makes the tag have a pill appearance',
        },
        removeLabel: {
          type: 'string',
          default: 'Remove tag',
          description: "The value of the 'aria-label' attribute on the remove button in the tag",
        },
        tag: {
          type: 'string',
          default: 'span',
        },
        variant: {
          type: 'ColorVariant | null',
          default: 'secondary',
          description: 'Applies one of the Bootstrap theme color variants to the component',
        },
      ],
      emits: [
        {
          event: 'remove',
          args: [
            {
              arg: 'remove',
              description: '',
              type: 'VNodeNormalizedChildren',
            },
          ],
          description: 'Emitted when the remove button is clicked',
        },
      ],
      slots: [
        {
          scope: [],
          name: 'default',
          description: 'Content to place in the tag. Overrides the `title` prop',
        },
      ],
    },
    {
      component: 'BFormTags',
      props: [
        addButtonText: {
          type: 'string',
          default: 'Add',
          description:
            "Text for the built in 'Add' button. Slot `add-button-text` takes precedence",
        },
        addButtonVariant: {
          type: 'ButtonVariant | null',
          default: 'outline-secondary',
          description: "Applies one of the Bootstrap theme color variants to the 'Add' button",
        },
        addOnChange: {
          type: 'boolean',
          default: false,
          description: "When set, enables adding the tag on the input's 'change' event",
        },
        autofocus: {
          type: 'boolean',
          default: false,
        },
        disabled: {
          type: 'boolean',
          default: false,
        },
        duplicateTagText: {
          type: 'string',
          default: 'Duplicate tag(s)',
          description:
            'The message when duplicate tags are detected. Set to an empty string to disable the message',
        },
        inputAttrs: {
          type: 'Record<string, unknown>',
          default: undefined,
          description: 'Additional attributes to apply to the new tag input element',
        },
        inputClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class (or classes) to apply to the new tag input element',
        },
        inputId: {
          type: 'string',
          default: undefined,
          description:
            'Id to apply to the new tag input element. If not provided, a unique Id will be auto generated',
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
        form: {
          type: 'string',
          default: undefined,
          description: 'The value of the form prop',
        },
        limit: {
          type: 'number | string',
          default: undefined,
          description:
            'The maximum amount of tags that can be added. The limit can still be exceeded if manipulated outside of the component',
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
        },
        name: {
          type: 'string',
          default: undefined,
          description:
            "Sets the value of the 'name' attribute on the form control. When set, creates a hidden input for each tag",
        },
        noAddOnEnter: {
          type: 'boolean',
          default: false,
          description: "When set, disables adding the tag on the input's 'keydown.enter' event",
        },
        noOuterFocus: {
          type: 'boolean',
          default: false,
          description: 'When set, disables the focus styling of the component root element',
        },
        noTagRemove: {
          type: 'boolean',
          default: false,
          description: 'When set, the tags will not have a remove button',
        },
        placeholder: {
          type: 'string',
          default: 'Add tag...',
          description: "Sets the 'placeholder' attribute value on the form control",
        },
        removeOnDelete: {
          type: 'boolean',
          default: false,
          description:
            'When set, enables removal of last tag in tags when user presses delete or backspace and the input is empty',
        },
        required: {
          type: 'boolean',
          default: false,
        },
        separator: {
          type: 'string | string[]',
          default: undefined,
          description: 'Separator character(s) that will trigger a tag to be created',
        },
        state: {
          type: 'boolean | null',
          default: null,
        },
        size: {
          type: 'Size',
          default: 'md',
        },
        tagClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class (or classes) to apply to the tags',
        },
        tagPills: {
          type: 'boolean',
          default: false,
          description: 'Makes the built in tags have a pill appearance',
        },
        tagRemoveLabel: {
          type: 'string',
          default: undefined,
          description: "The value of the 'aria-label' attribute on the remove button in the tag",
        },
        tagRemovedLabel: {
          type: 'string',
          default: 'Tag removed',
        },
        tagValidator: {
          type: '(t: string) => boolean',
          default: '() => true',
          description:
            "Optional tag validator method. Passed a single argument of tag being added. Should return 'true' if the tag passes validation, or 'false' if the tag cannot be added",
        },
        tagVariant: {
          type: 'ColorVariant | null',
          default: 'secondary',
          description: 'Applies one of the Bootstrap theme color variants to the tags',
        },
      ],
      emits: [
        {
          event: 'blur',
          description: 'Emitted when component loses focus',
          args: [
            {
              arg: 'event',
              type: 'FocusEvent',
              description: 'Native blur event (before any formatting)',
            },
          ],
        },
        {
          event: 'focus',
          description: 'Emitted when component gains focus',
          args: [
            {
              arg: 'event',
              type: 'FocusEvent',
              description: 'Native focus event (before any formatting)',
            },
          ],
        },
        {
          event: 'focusin',
          description: 'Emitted when internal elements of component gain focus.',
          args: [
            {
              arg: 'event',
              type: 'FocusEvent',
              description: 'Native focusin event (before any formatting)',
            },
          ],
        },
        {
          event: 'focusout',
          description: 'Emitted when internal elements of component lose focus.',
          args: [
            {
              arg: 'event',
              type: 'FocusEvent',
              description: 'Native focusout event (before any formatting)',
            },
          ],
        },
        {
          event: 'input',
          description: 'Emitted when the tags changes. Updates the v-model',
          args: [
            {
              arg: 'value',
              type: 'Array',
              description: 'Array of current tags',
            },
          ],
        },
        {
          event: 'tag-state',
          description: 'Emitted when tags in the user input are parsed',
          args: [
            {
              arg: 'validTags',
              type: 'Array',
              description:
                'Array of new tag(s) added (or that will be added). Will be zero length if no tags added',
            },
            {
              arg: 'invalidTags',
              type: 'Array',
              description:
                'Array of tag(s) that cannot be added because they did not pass validation. Will be zero length if no invalid tags',
            },
            {
              arg: 'duplicateTags',
              type: 'Array',
              description:
                'Array of tag(s) that cannot be added because they would be a duplicate tag. Will be zero length if no duplicate tags',
            },
          ],
        },
      ],
      slots: [
        {
          scope: [],
          name: 'add-button-text',
          description:
            "Content to place in the built in  'Add' button. Takes precedence over the 'add-button-text' prop. Not used when the default scoped slot is provided",
        },
        {
          name: 'default',
          description: 'Slot to override the default rendering of the tags component',
          scope: [
            addButtonText: {
              type: 'string',
              description: "Value of the 'add-button-text' prop",
            },
            addButtonVariant: {
              type: 'string',
              description: "Value of the 'add-button-variant' prop",
            },
            addTag: {
              type: 'Function',
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
              description:
                'Object of attributes to apply to native input elements via \'v-bind="inputAttrs"\'',
            },
            inputClass: {
              type: 'ClassValue',
              description:
                "Class (or classes) to apply to the new tag input element. Value of the 'input-class' prop",
            },
            inputHandlers: {
              type: 'Object',
              description:
                'Object of event handlers to apply to native input elements via \'v-on="inputHandlers"\'',
            },
            inputId: {
              type: 'string',
              description:
                "Id to add to the new tag input element. Defaults to prop 'input-id'. If not provided a unique Id is auto-generated. Also available via 'inputAttrs.id'",
            },
            inputType: {
              type: 'InputType',
              description:
                "The type of input to use: 'type', 'email', 'tel', 'url', or 'number'. Default is 'text'. Normalized value of the 'input-type' prop",
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
              type: 'Function',
              description: 'Method to fully reset the tags input',
            },
            removeTag: {
              type: 'Function',
              description:
                'Method to remove a tag. Accepts one argument which is the tag value to remove',
            },
            required: {
              type: 'boolean',
              description: "Value of the 'required' prop",
            },
            separator: {
              type: 'string | unknown[]',
              description: "The value of the 'separator' prop",
            },
            size: {
              type: 'Size',
              description: "The value of the 'size' prop",
            },
            state: {
              type: 'boolean',
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
            {
              description: '',
              prop: 'tagRemovedLabel',
              type: 'string',
            },
            tagVariant: {
              type: 'ColorVariant',
              description: "Value of the 'tag-variant' prop",
            },
          ],
        },
      ],
    },
  ],
}
