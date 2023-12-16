import type {ComponentReference, SlotScopeReference} from './ComponentReference'

const sharedSlots: SlotScopeReference[] = [
  {
    prop: 'cancel',
    type: 'Function',
    description:
      "Closes the modal and fires the 'cancel' and 'hide' events, with `bvModalEvent.trigger = 'cancel'`",
  },
  {
    prop: 'close',
    type: 'Function',
    description:
      "Closes the modal and fires the close and hide events, with `bvModalEvent.trigger = 'headerclose'`",
  },
  {
    prop: 'hide',
    type: 'Function',
    description:
      "Accepts one argument 'trigger'. Closes the modal and fires the 'hide' event, with the `bvModalEvent.trigger = trigger` (`trigger` is optional)",
  },
  {
    prop: 'ok',
    type: 'Function',
    description:
      "Closes the modal and fires the 'ok' and 'hide' events, with `bvModalEvent.trigger = 'ok'`",
  },
  {
    prop: 'visible',
    type: 'Booleanish',
    description:
      "The visibility state of the modal. 'true' if the modal is visible and 'false' if not visible",
  },
]

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BModal',
      props: [
        {
          prop: 'autoFocus',
          type: 'Booleanish',
          default: true,
          description: "When set to 'false', disables auto focusing the modal when opened",
        },
        {
          prop: 'autoFocusButton',
          type: "'ok' | 'cancel' | 'close'",
          default: undefined,
          description:
            "Specify which built-in button to focus once the modal opens: 'ok', 'cancel', or 'close'",
        },
        {
          prop: 'backdropVariant',
          type: 'ColorVariant | null',
          default: undefined,
          description: 'Applies one of the Bootstrap theme color variants to the backdrop',
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
          prop: 'bodyScrolling',
          type: 'Booleanish',
          default: false,
          description: 'Enables/disables scrolling the body while modal is open',
        },
        {
          prop: 'bodyTextVariant',
          type: 'ColorVariant | null',
          default: undefined,
          description: 'Applies one of the Bootstrap theme color variants to the body text',
        },
        {
          prop: 'bodyVariant',
          type: 'ColorVariant | null',
          default: null,
          description:
            'Applies one of the Bootstrap theme color variants to the body (this takes priority over bodyBgVariant and bodyTextVariant)',
        },
        {
          prop: 'busy',
          type: 'Booleanish',
          default: false,
          description:
            'Places the built in default footer OK and Cancel buttons in the disabled state',
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
          prop: 'footerVariant',
          type: 'ColorVariant | null',
          default: null,
          description:
            'Applies one of the Bootstrap theme color variants to the footer (this takes priority over footerBgVariant and footerTextVariant)',
        },
        {
          prop: 'fullscreen',
          type: 'Booleanish | Breakpoint',
          default: false,
          description:
            "A Booleanish value will enable/disable full screen mode. A Breakpoint value will set the breakpoint to enable full screen mode below the value of the breakpoint. Breakpoint values are: 'sm', 'md', 'lg', 'xl', 'xxl'",
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
          description: 'CSS class (or classes) to apply to the header close button',
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
          description:
            'Applies a variant to the header close button when the header close button uses the header-close slot',
        },
        {
          prop: 'headerTextVariant',
          type: 'ColorVariant | null',
          default: null,
          description: 'Applies one of the Bootstrap theme color variants to the header text',
        },
        {
          prop: 'headerVariant',
          type: 'ColorVariant | null',
          default: null,
          description:
            'Applies one of the Bootstrap theme color variants to the header (this takes priority over headerBgVariant and headerTextVariant)',
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
            "Used to set the 'id' attribute on the rendered content, and used as the base to generate any additional element IDs as needed",
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
          default: false,
          description: 'Renders the modal content lazily',
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
          prop: 'teleportDisabled',
          type: 'Booleanish',
          default: false,
          description: 'Renders the modal in the exact place it was defined',
        },
        {
          prop: 'teleportTo',
          type: 'string | RendererElement | null | undefined',
          default: 'body',
          description: 'Overrides the default teleport location',
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
          prop: 'type',
          type: 'string',
          default: undefined,
          description: 'Type of the component',
        },
      ],
      emits: [
        {
          event: 'update:modelValue',
          args: [
            {
              arg: 'value',
              description: "The new value of the modal's visible state",
              type: 'boolean',
            },
          ],
          description: 'Emitted when modal visibility changes',
        },
        {
          event: 'show',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Always emits just after modal is shown. Cancelable',
        },
        {
          event: 'shown',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Always emits just before modal is shown. Cancelable',
        },
        {
          event: 'hide',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description:
            "Always emits just before modal has hidden. Cancelable (as long as modal wasn't forcibly hidden)",
        },
        {
          event: 'hidden',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Always emits after modal is hidden',
        },
        {
          event: 'hide-prevented',
          args: [],
          description:
            'Emitted when the modal tried to close, but was prevented from closing.  This occurs when preventDefault() is called on the event, the user clicks escape and no-close-onbackdrop is set to true, or the user clicks on the backdrop and no-close-onbackdrop is set to true.',
        },
        {
          event: 'show-prevented',
          args: [],
          description:
            'Emitted when the modal tried to open, but was prevented from opening. This occurs when preventDefault() is called on the event',
        },
        {
          event: 'ok',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Emitted when the default footer ok button is clicked. Cancelable',
        },
        {
          event: 'cancel',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Emitted when the default footer cancel button is clicked. Cancelable',
        },
        {
          event: 'close',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Emitted when the default header close button is clicked. Cancelable',
        },
      ],
      slots: [
        {
          name: 'backdrop',
          description: 'Modal Backdrop content',
          scope: [],
        },
        {
          name: 'cancel',
          description: 'Modal CANCEL button content. Optionally scoped',
          scope: sharedSlots,
        },
        {
          name: 'default',
          description: 'Content of modal body. Optionally scoped',
          scope: sharedSlots,
        },
        {
          name: 'footer',
          description:
            'Modal footer content. Also removes default OK and Cancel buttons. Optionally scoped',
          scope: sharedSlots,
        },
        {
          name: 'header',
          description:
            'Entire modal header container contents. Also removes the top right X close button. Optionally scoped',
          scope: sharedSlots,
        },
        {
          name: 'header-close',
          description:
            "Content of Modal header close button. If 'header' slot is used, this slot will not be shown",
          scope: [],
        },
        {
          name: 'ok',
          description: 'Modal OK button content. Optionally scoped',
          scope: sharedSlots,
        },
        {
          name: 'title',
          description:
            "Modal title. If 'header' slot is used, this slot will not be shown. Optionally scoped",
          scope: sharedSlots,
        },
      ],
    },
  ],
}
