import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BModal',
      props: [
        {
          prop: 'bodyVariant',
          type: 'ColorVariant | null',
          default: null,
          description:
            'Applies one of the Bootstrap theme color variants to the body (this takes priority over bodyBgVariant and bodyTextVariant)',
        },
        {
          prop: 'bodyBgVariant',
          type: 'ColorVariant | null',
          default: null,
          description: 'Applies one of the Bootstrap theme color variants to the body background',
        },
        {
          prop: 'bodyClass',
          type: 'ClassValue',
          default: undefined,
          description: "CSS class (or classes) to apply to the '.modal-body' wrapper element",
        },
        {
          prop: 'bodyTextVariant',
          type: 'ColorVariant | null',
          default: 'Applies one of the Bootstrap theme color variants to the body text',
        },
        {
          prop: 'busy',
          type: 'Booleanish',
          default: false,
          default: 'Places the built in default footer OK and Cancel buttons in the disabled state',
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
          default: false,
          description: 'Renders the modal content lazily',
        },
        {
          prop: 'buttonSize',
          type: 'Size',
          default: 'md',
          description: "Size of the built in footer buttons: 'sm', 'md'  or 'lg'",
        },
        {
          prop: 'cancelDisabled',
          type: 'Booleanish',
          default: false,
          description: 'Places the built in default footer Cancel button in the disabled state',
        },
        {
          prop: 'cancelTitle',
          type: 'string',
          default: 'Cancel',
          description: 'Text string to place in the default footer Cancel button',
        },
        {
          prop: 'cancelVariant',
          type: 'ButtonVariant | null',
          default: 'secondary',
          description: 'Variant to use for the default footer Cancel button',
        },
        {
          prop: 'centered',
          type: 'Booleanish',
          default: false,
          description: 'Vertically centers the modal in the viewport',
        },
        {
          prop: 'contentClass',
          type: 'ClassValue',
          default: undefined,
          description: "CSS class (or classes) to apply to the '.modal-content' wrapper element",
        },
        {
          prop: 'dialogClass',
          type: 'ClassValue',
          default: undefined,
          description: "CSS class (or classes) to apply to the '.modal-dialog' wrapper element",
        },
        {
          prop: 'footerBgVariant',
          type: 'ColorVariant | null',
          default: null,
          description: 'Applies one of the Bootstrap theme color variants to the footer background',
        },
        {
          prop: 'footerBorderVariant',
          type: 'ColorVariant | null',
          default: null,
          description: 'Applies one of the Bootstrap theme color variants to the footer border',
        },
        {
          prop: 'footerClass',
          type: 'ClassValue',
          default: undefined,
          description: "CSS class (or classes) to apply to the '.modal-footer' wrapper element",
        },
        {
          prop: 'footerTextVariant',
          type: 'ColorVariant | null',
          default: null,
          description: 'Applies one of the Bootstrap theme color variants to the footer text',
        },
        {
          prop: 'fullscreen',
          type: 'boolean | string',
          default: false,
          description:
            "A boolean value will enable/disable full screen mode. A string value will set the breakpoint to enable full screen mode below the value of the breakpoint. Breakpoint values are: 'sm', 'md', 'lg', 'xl', 'xxl'",
        },
        {
          prop: 'headerBgVariant',
          type: 'ColorVariant | null',
          default: null,
          description: 'Applies one of the Bootstrap theme color variants to the header background',
        },
        {
          prop: 'headerBorderVariant',
          type: 'ColorVariant | null',
          default: null,
          description: 'Applies one of the Bootstrap theme color variants to the header border',
        },
        {
          prop: 'headerClass',
          type: 'ClassValue',
          default: undefined,
          description: "CSS class (or classes) to apply to the '.modal-header' wrapper element",
        },
        {
          prop: 'headerCloseClass',
          type: 'ClassValue',
          default: undefined,
          description: 'Deprecated by BS V5',
        },
        {
          prop: 'headerCloseLabel',
          type: 'string',
          default: 'Close',
          description: 'Accessibility label for the header close button',
        },
        {
          prop: 'headerCloseVariant',
          type: 'ButtonVariant | null',
          default: 'secondary',
          description: 'Deprecated by BS V5',
        },
        {
          prop: 'headerTextVariant',
          type: 'ColorVariant | null',
          default: null,
          description: 'Applies one of the Bootstrap theme color variants to the header text',
        },
        {
          prop: 'hideBackdrop',
          type: 'Booleanish',
          default: false,
          description: 'Disables rendering of the modal backdrop',
        },
        {
          prop: 'hideFooter',
          type: 'Booleanish',
          default: false,
          description: 'Disables rendering of the modal footer',
        },
        {
          prop: 'hideHeader',
          type: 'Booleanish',
          default: false,
          description: 'Disables rendering of the modal header',
        },
        {
          prop: 'hideHeaderClose',
          type: 'Booleanish',
          default: false,
          description: 'Disables rendering of the modal header close button',
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
          description:
            'Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed',
        },
        {
          prop: 'modalClass',
          type: 'ClassValue',
          default: undefined,
          description: "CSS class (or classes) to apply to the '.modal' wrapper element",
        },
        {
          prop: 'modelValue',
          type: 'Booleanish',
          default: false,
          description: 'Controls the visibility state of the modal',
        },
        {
          prop: 'noCloseOnBackdrop',
          type: 'Booleanish',
          default: false,
          description:
            'Disables closing the modal when clicking on the modal backdrop (outside the modal window)',
        },
        {
          prop: 'noCloseOnEsc',
          type: 'Booleanish',
          default: false,
          description: 'Disables the ability to close the modal by pressing the ESC key',
        },
        {
          prop: 'noFade',
          type: 'Booleanish',
          default: false,
          description:
            "When set to 'true', disables the fade animation/transition on the component",
        },
        {
          prop: 'autoFocus',
          type: 'Booleanish',
          default: true,
          description: "When set to 'false', disables auto focusing the modal when opened",
        },
        {
          prop: 'okDisabled',
          type: 'Booleanish',
          default: false,
          description: 'Places the built in default footer OK button in the disabled state',
        },
        {
          prop: 'okOnly',
          type: 'Booleanish',
          default: false,
          description: 'Disables rendering of the default footer Cancel button',
        },
        {
          prop: 'okTitle',
          type: 'string',
          default: 'Ok',
          description: 'Text string to place in the default footer OK button',
        },
        {
          prop: 'okVariant',
          type: 'ButtonVariant | null',
          default: 'primary',
          description: 'Button color theme variant to apply to the default footer OK button',
        },
        {
          prop: 'scrollable',
          type: 'Booleanish',
          default: false,
          description: 'Enables scrolling of the modal body',
        },
        {
          prop: 'size',
          type: "Size | 'xl'",
          default: 'md',
          description: "Set the size of the modal's width. 'sm', 'md' (default), 'lg', or 'xl'",
        },
        {
          prop: 'title',
          type: 'string',
          default: undefined,
          description: 'Text content to place in the title',
        },
        {
          prop: 'titleClass',
          type: 'ClassValue',
          default: undefined,
          description: 'CSS class (or classes) to apply to the title',
        },
        {
          prop: 'titleSrOnly',
          type: 'Booleanish',
          default: false,
          description: "Wraps the title in an '.sr-only' wrapper",
        },
        {
          prop: 'titleTag',
          type: 'string',
          default: 'h5',
          description: 'Specify the HTML tag to render instead of the default tag for the title',
        },
        {
          prop: 'autoFocusButton',
          type: "'ok' | 'cancel' | 'close'",
          default: undefined,
          description:
            "Specify which built-in button to focus once the modal opens: 'ok', 'cancel', or 'close'",
        },
        {
          prop: 'teleportDisabled',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'teleportTo',
          type: 'string | RendererElement | null | undefined',
          default: 'body',
        },
        {
          prop: 'bodyScrolling',
          type: 'Booleanish',
          default: false,
          default: 'Enables/disables scrolling the body while modal is open',
        },
        {
          prop: 'backdropVariant',
          type: 'ColorVariant | null',
          default: undefined,
          description: 'Applies one of the Bootstrap theme color variants to the backdrop',
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'boolean',
            },
          ],
          description: '',
          event: 'update:modelValue',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'show',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'shown',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'hide',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'hidden',
        },
        {
          args: [],
          description: '',
          event: 'hide-prevented',
        },
        {
          args: [],
          description: '',
          event: 'show-prevented',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'ok',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'cancel',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'close',
        },
      ],
      slots: [
        {
          description: '',
          name: 'title',
          scope: [],
        },
        {
          description: '',
          name: 'header-close',
          scope: [],
        },
        {
          description: '',
          name: 'header',
          scope: [],
        },
        {
          description: '',
          name: 'default',
          scope: [],
        },
        {
          description: '',
          name: 'footer',
          scope: [],
        },
        {
          description: '',
          name: 'cancel',
          scope: [],
        },
        {
          description: '',
          name: 'ok',
          scope: [],
        },
        {
          description: '',
          name: 'backdrop',
          scope: [],
        },
      ],
    },
  ],
}
