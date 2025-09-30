import type {BModalEmits, BModalProps, BModalSlots} from 'bootstrap-vue-next'
import type {
  ComponentReference,
  EmitRecord,
  PropRecord,
  SlotRecord,
  SlotScopeReference,
} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'
import {showHideEmits, showHideProps} from '../../utils/showHideData'

const sharedSlots: SlotScopeReference = {
  cancel: {
    type: 'Function',
    description:
      "Closes the modal and fires the 'cancel' and 'hide' events, with `bvModalEvent.trigger = 'cancel'`",
  },
  close: {
    type: 'Function',
    description:
      "Closes the modal and fires the 'close' and 'hide' events, with `bvModalEvent.trigger = 'headerclose'`",
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
} as const

export default {
  load: (): ComponentReference => ({
    BModal: {
      sourcePath: '/BModal/BModal.vue',
      props: {
        ...showHideProps,
        ...pick(
          buildCommonProps({
            size: {
              type: "Size | 'xl'",
              description: "Sets the modal's width. Options: 'sm', 'md' (default), 'lg', or 'xl'",
            },
          }),
          [
            'body',
            'bodyAttrs',
            'bodyBgVariant',
            'bodyClass',
            'bodyTextVariant',
            'bodyVariant',
            'footerBgVariant',
            'footerBorderVariant',
            'footerClass',
            'footerTextVariant',
            'footerVariant',
            'headerBgVariant',
            'headerBorderVariant',
            'headerClass',
            'headerTextVariant',
            'headerVariant',
            'id',
            'noBackdrop',
            'noHeader',
            'noHeaderClose',
            'size',
            'title',
            'titleClass',
            'titleTag',
          ]
        ),
        focus: {
          type: "'ok' | 'cancel' | 'close' | string | ComponentPublicInstance | HTMLElement | null",
          default: undefined,
          description:
            "Specify where to focus once modal opens. Can be built-in button: 'ok', 'cancel', or 'close'. Can be ref, HTMLElement, ID, or selector string. If set to 'false', no focus will be set (if noTrap isn't set, the focus trap will focus the modal element or fallback element). If set to a string, the element with that ID will be focused. If set to a ComponentPublicInstance, the $el property of the instance will be focused.",
        },
        backdropFirst: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Animates the backdrop before the modal and, on leave, animates the modal before the backdrop',
        },
        bodyScrolling: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Enables or disables scrolling the body while the modal is open',
        },
        busy: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Places the built-in default footer OK and Cancel buttons in a disabled state',
        },
        buttonSize: {
          type: 'Size',
          default: 'md',
          // TODO missing description
        },
        cancelClass: {
          type: 'ClassValue',
          default: undefined,
          description: "CSS class (or classes) to apply to the '.modal-cancel' button",
        },
        cancelDisabled: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Places the built-in default footer Cancel button in a disabled state',
        },
        cancelTitle: {
          type: 'string',
          default: 'Cancel',
          description: 'Text to place in the default footer Cancel button',
        },
        cancelVariant: {
          type: 'ButtonVariant | null',
          default: 'secondary',
          description: 'Variant for the default footer Cancel button',
        },
        centered: {
          type: 'boolean',
          default: false, // TODO item not in string format
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

        fullscreen: {
          type: 'boolean | Breakpoint',
          default: false, // TODO item not in string format
          description:
            "Enables full-screen mode with a boolean value or sets the breakpoint for full-screen mode below the specified breakpoint value ('sm', 'md', 'lg', 'xl', 'xxl')",
        },
        headerAttrs: {
          type: 'Readonly<AttrsValue>',
          default: undefined,
          description: 'Attributes to be applied to the modal header element',
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
          description: 'Variant for the header close button when using the header-close slot',
        },

        noFooter: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disables rendering of the modal footer',
        },
        modalClass: {
          type: 'ClassValue',
          default: undefined,
          description: "CSS class (or classes) to apply to the '.modal' wrapper element",
        },
        noCloseOnBackdrop: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Prevents closing the modal when clicking the backdrop outside the modal window',
        },
        noCloseOnEsc: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Prevents closing the modal by pressing the Esc key',
        },
        noStacking: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Prevents other modals from stacking over this one',
        },
        noTrap: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disables the focus trap feature',
        },
        okClass: {
          type: 'ClassValue',
          default: undefined,
          description: "CSS class (or classes) to apply to the '.modal-ok' button",
        },
        okDisabled: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Places the built-in default footer OK button in a disabled state',
        },
        okOnly: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disables rendering of the default footer Cancel button',
        },
        okTitle: {
          type: 'string',
          default: 'OK',
          description: 'Text to place in the default footer OK button',
        },
        okVariant: {
          type: 'ButtonVariant | null',
          default: 'primary',
          description: 'Button color theme variant for the default footer OK button',
        },
        scrollable: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Enables scrolling of the modal body',
        },
        teleportDisabled: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Renders the modal where it is defined, disabling teleport',
        },
        teleportTo: {
          type: 'string | RendererElement | null | undefined',
          default: 'body',
          description: 'Overrides the default teleport location',
        },
        titleVisuallyHidden: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: "Wraps the title in a '.visually-hidden' wrapper",
        },
      } satisfies PropRecord<keyof BModalProps>,
      emits: {
        ...showHideEmits,
        'update:model-value': {
          description: "Emitted when the modal's visibility changes",
          args: {
            value: {
              type: 'boolean',
              description: "The new value of the modal's visibility state",
            },
          },
        },
        'ok': {
          description: 'Emitted when the default footer OK button is clicked. Cancelable',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The OK button click event details', // TODO added description for clarity
            },
          },
        },
        'cancel': {
          description: 'Emitted when the default footer Cancel button is clicked. Cancelable',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The Cancel button click event details', // TODO added description for clarity
            },
          },
        },
        'close': {
          description: 'Emitted when the default header close button is clicked. Cancelable',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The close button click event details', // TODO added description for clarity
            },
          },
        },
        'backdrop': {
          description: 'Emitted when the backdrop is clicked. Cancelable',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The backdrop click event details', // TODO added description for clarity
            },
          },
        },
        'esc': {
          description: 'Emitted when the Esc key is pressed. Cancelable',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The Esc key press event details', // TODO added description for clarity
            },
          },
        },
      } satisfies EmitRecord<keyof BModalEmits | 'update:model-value'>,
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
          scope: sharedSlots,
        },
        'header': {
          description:
            'Content for the modal header. Removes the top-right close button. Optionally scoped',
          scope: sharedSlots,
        },
        'header-close': {
          description:
            "Content for the modal header close button. Not shown if the 'header' slot is used",
          scope: {},
        },
        'ok': {
          description: 'Content for the modal OK button. Optionally scoped',
          scope: sharedSlots,
        },
        'title': {
          description:
            "Content for the modal title. Not shown if the 'header' slot is used. Optionally scoped",
          scope: sharedSlots,
        },
      } satisfies SlotRecord<keyof BModalSlots>,
    },
  }),
}
