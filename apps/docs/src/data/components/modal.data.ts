import type {ComponentReference, SlotScopeReference} from '../../types'

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
    type: 'boolean',
    description:
      "The visibility state of the modal. 'true' if the modal is visible and 'false' if not visible",
  },
]

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BModal',
      props: {
        '': {
          autofocus: {
            type: 'boolean',
            default: true,
            description: "When set to 'false', disables auto focusing the modal when opened",
          },
          autofocusButton: {
            type: "'ok' | 'cancel' | 'close'",
            default: undefined,
            description:
              "Specify which built-in button to focus once the modal opens: 'ok', 'cancel', or 'close'",
          },
          backdropVariant: {
            type: 'ColorVariant | null',
            default: undefined,
            description: 'Applies one of the Bootstrap theme color variants to the backdrop',
          },
          bodyBgVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Applies one of the Bootstrap theme color variants to the body background',
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
            description: "CSS class (or classes) to apply to the '.modal-body' wrapper element",
          },
          bodyScrolling: {
            type: 'boolean',
            default: false,
            description: 'Enables/disables scrolling the body while modal is open',
          },
          bodyTextVariant: {
            type: 'ColorVariant | null',
            default: undefined,
            description: 'Applies one of the Bootstrap theme color variants to the body text',
          },
          bodyVariant: {
            type: 'ColorVariant | null',
            default: null,
            description:
              'Applies one of the Bootstrap theme color variants to the body (this takes priority over bodyBgVariant and bodyTextVariant)',
          },
          busy: {
            type: 'boolean',
            default: false,
            description:
              'Places the built in default footer OK and Cancel buttons in the disabled state',
          },
          cancelDisabled: {
            type: 'boolean',
            default: false,
            description: 'Places the built in default footer Cancel button in the disabled state',
          },
          cancelTitle: {
            type: 'string',
            default: 'Cancel',
            description: 'Text string to place in the default footer Cancel button',
          },
          cancelVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
            description: 'Variant to use for the default footer Cancel button',
          },
          centered: {
            type: 'boolean',
            default: false,
            description: 'Vertically centers the modal in the viewport',
          },
          contentClass: {
            type: 'ClassValue',
            default: undefined,
            description: "CSS class (or classes) to apply to the '.modal-content' wrapper element",
          },
          dialogClass: {
            type: 'ClassValue',
            default: undefined,
            description: "CSS class (or classes) to apply to the '.modal-dialog' wrapper element",
          },
          footerBgVariant: {
            type: 'ColorVariant | null',
            default: null,
            description:
              'Applies one of the Bootstrap theme color variants to the footer background',
          },
          footerBorderVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Applies one of the Bootstrap theme color variants to the footer border',
          },
          footerClass: {
            type: 'ClassValue',
            default: undefined,
            description: "CSS class (or classes) to apply to the '.modal-footer' wrapper element",
          },
          footerTextVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Applies one of the Bootstrap theme color variants to the footer text',
          },
          footerVariant: {
            type: 'ColorVariant | null',
            default: null,
            description:
              'Applies one of the Bootstrap theme color variants to the footer (this takes priority over footerBgVariant and footerTextVariant)',
          },
          fullscreen: {
            type: 'boolean | Breakpoint',
            default: false,
            description:
              "A boolean value will enable/disable full screen mode. A Breakpoint value will set the breakpoint to enable full screen mode below the value of the breakpoint. Breakpoint values are: 'sm', 'md', 'lg', 'xl', 'xxl'",
          },
          headerBgVariant: {
            type: 'ColorVariant | null',
            default: null,
            description:
              'Applies one of the Bootstrap theme color variants to the header background',
          },
          headerBorderVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Applies one of the Bootstrap theme color variants to the header border',
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
            description: "CSS class (or classes) to apply to the '.modal-header' wrapper element",
          },
          headerCloseClass: {
            type: 'ClassValue',
            default: undefined,
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
            description:
              'Applies a variant to the header close button when the header close button uses the header-close slot',
          },
          headerTextVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Applies one of the Bootstrap theme color variants to the header text',
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: null,
            description:
              'Applies one of the Bootstrap theme color variants to the header (this takes priority over headerBgVariant and headerTextVariant)',
          },
          hideBackdrop: {
            type: 'boolean',
            default: false,
            description: 'Disables rendering of the modal backdrop',
          },
          hideFooter: {
            type: 'boolean',
            default: false,
            description: 'Disables rendering of the modal footer',
          },
          hideHeader: {
            type: 'boolean',
            default: false,
            description: 'Disables rendering of the modal header',
          },
          hideHeaderClose: {
            type: 'boolean',
            default: false,
            description: 'Disables rendering of the modal header close button',
          },
          id: {
            type: 'string',
            default: undefined,
            description:
              "Used to set the 'id' attribute on the rendered content, and used as the base to generate any additional element IDs as needed",
          },
          lazy: {
            type: 'boolean',
            default: false,
            description: 'Renders the modal content lazily',
          },
          modalClass: {
            type: 'ClassValue',
            default: undefined,
            description: "CSS class (or classes) to apply to the '.modal' wrapper element",
          },
          modelValue: {
            type: 'boolean',
            default: false,
            description: 'Controls the visibility state of the modal',
          },
          noCloseOnBackdrop: {
            type: 'boolean',
            default: false,
            description:
              'Disables closing the modal when clicking on the modal backdrop (outside the modal window)',
          },
          noCloseOnEsc: {
            type: 'boolean',
            default: false,
            description: 'Disables the ability to close the modal by pressing the ESC key',
          },
          noFade: {
            type: 'boolean',
            default: false,
            description:
              "When set to 'true', disables the fade animation/transition on the component",
          },
          noTrap: {
            type: 'boolean',
            description: 'Disables the focus trap feature',
          },
          okDisabled: {
            type: 'boolean',
            default: false,
            description: 'Places the built in default footer OK button in the disabled state',
          },
          okOnly: {
            type: 'boolean',
            default: false,
            description: 'Disables rendering of the default footer Cancel button',
          },
          okTitle: {
            type: 'string',
            default: 'OK',
            description: 'Text string to place in the default footer OK button',
          },
          okVariant: {
            type: 'ButtonVariant | null',
            default: 'primary',
            description: 'Button color theme variant to apply to the default footer OK button',
          },
          scrollable: {
            type: 'boolean',
            default: false,
            description: 'Enables scrolling of the modal body',
          },
          size: {
            type: "Size | 'xl'",
            default: 'md',
            description: "Set the size of the modal's width. 'sm', 'md' (default), 'lg', or 'xl'",
          },
          teleportDisabled: {
            type: 'boolean',
            default: false,
            description: 'Renders the modal in the exact place it was defined',
          },
          teleportTo: {
            type: 'string | RendererElement | null | undefined',
            default: 'body',
            description: 'Overrides the default teleport location',
          },
          title: {
            type: 'string',
            default: undefined,
            description: 'Text content to place in the title',
          },
          titleClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to apply to the title',
          },
          titleSrOnly: {
            type: 'boolean',
            default: false,
            description: "Wraps the title in an '.sr-only' wrapper",
          },
          titleTag: {
            type: 'string',
            default: 'h5',
            description: 'Specify the HTML tag to render instead of the default tag for the title',
          },
          type: {
            type: 'string',
            default: undefined,
            description: 'Type of the component',
          },
        },
      },
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
          description: 'Always emits just before modal is shown. Cancelable',
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
          description: 'Always emits just after modal is shown. Cancelable',
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
