import type {BOffcanvasEmits, BOffcanvasProps, BOffcanvasSlots} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  type EmitRecord,
  type ExposedRecord,
  type PropRecord,
  type SlotRecord,
  StyleKind,
} from '../../types'
import {buildCommonProps} from '../../utils/commonProps'
import {pick} from '../../utils/objectUtils'
import {showHideEmits, showHideProps} from '../../utils/showHideData'

export default {
  load: (): ComponentReference => ({
    BOffcanvas: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.offcanvas[-*]'},
      props: {
        ...showHideProps,
        ...pick(
          buildCommonProps({
            id: {
              description: 'The Id to be injected to offcanvas and used for state management',
            },
            placement: {
              description: "Position of the offcanvas: 'start', 'end', 'top', or 'bottom'",
            },
          }),
          [
            'bodyAttrs',
            'bodyClass',
            'footerClass',
            'headerClass',
            'id',
            'noBackdrop',
            'noHeader',
            'noHeaderClose',
            'placement',
            'title',
          ]
        ),
        backdropFirst: {
          type: 'boolean',
          default: false,
          description:
            'Animate the backdrop before the offcanvas, and on leave animate the offcanvas before the backdrop',
        },
        bodyScrolling: {
          type: 'boolean',
          default: false,
          description:
            'Allow body scrolling while offcanvas is open. By default, body scrolling is disabled when the offcanvas is open',
        },
        focus: {
          type: "'ok' | 'cancel' | 'close' | string | ComponentPublicInstance | HTMLElement | null",
          default: undefined,
          description:
            "Specify where to focus once offcanvas opens. Can be built-in button 'close'. Can be ref, HTMLElement, id or selector string. If set to 'false', no focus will be set (if noTrap isn't set the focus trap will focus the modal element or fallback element). If set to a string, the element with that id will be focused. If set to a ComponentPublicInstance, the $el property of the instance will be focused.",
        },
        headerAttrs: {
          type: 'Readonly<AttrsValue>',
          default: undefined,
          description: 'Attributes to be applied to the offcanvas header element',
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
            'Button variant to use for the header close button when using a custom close slot',
        },
        noCloseOnBackdrop: {
          type: 'boolean',
          default: false,
          description: 'Disable closing the offcanvas when the backdrop is clicked',
        },
        noCloseOnEsc: {
          type: 'boolean',
          default: false,
          description: 'Disable closing the offcanvas when the Escape key is pressed',
        },
        noTrap: {
          type: 'boolean',
          default: false,
          description: 'Disables the focus trap feature',
        },
        responsive: {
          type: 'Breakpoint',
          default: undefined,
          description:
            'Makes offcanvas responsive - displays as offcanvas below the breakpoint and inline above it',
        },
        shadow: {
          type: 'Size | boolean',
          default: false,
          description: "Add a shadow to the offcanvas. Can be 'sm', true (medium), or 'lg'",
        },
        teleportDisabled: {
          type: 'boolean',
          default: false,
          description: 'Disable teleporting the offcanvas to the body',
        },
        teleportTo: {
          type: 'string | RendererElement | null | undefined',
          default: 'body',
          description: 'Teleport the offcanvas to a specific element',
        },
        width: {
          type: 'string',
          default: undefined,
          description: 'Width of the offcanvas (e.g., "320px", "20rem")',
        },
      } satisfies PropRecord<keyof BOffcanvasProps>,
      emits: {
        ...showHideEmits,
        'update:model-value': {
          args: {
            'update:model-value': {
              description: 'Emitted when the offcanvas visibility state changes',
              type: 'boolean',
            },
          },
          description: 'Standard event to update the v-model',
        },
        'breakpoint': {
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
            opened: {
              type: 'boolean',
              description: 'Whether or not the offcanvas is above the breakpoint and is open by it',
            },
          },
          description: "Emitted when the offcanvas's responsive breakpoint state changes",
        },
        'close': {
          description: 'Emitted when the close button is clicked',
          args: {
            value: {
              description: 'BvTriggerableEvent object',
              type: 'BvTriggerableEvent',
            },
          },
        },
        'esc': {
          description: 'Emitted when the Escape key is pressed while the offcanvas is open',
          args: {
            value: {
              description: 'BvTriggerableEvent object',
              type: 'BvTriggerableEvent',
            },
          },
        },
        'backdrop': {
          description: 'Emitted when the backdrop is clicked',
          args: {
            value: {
              description: 'BvTriggerableEvent object',
              type: 'BvTriggerableEvent',
            },
          },
        },
      } satisfies EmitRecord<keyof BOffcanvasEmits | 'update:model-value'>,
      slots: {
        'title': {
          description: 'Content to place in the title section of the header',
          scope: {
            visible: {
              type: 'boolean',
              description: 'Current visibility state of the offcanvas',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
              description: 'Current placement of the offcanvas',
            },
            hide: {
              type: '(trigger?: string) => void',
              description: 'Function to close the offcanvas',
            },
          },
        },
        'default': {
          description: 'Content to place in the body of the offcanvas',
          scope: {
            visible: {
              type: 'boolean',
              description: 'Current visibility state of the offcanvas',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
              description: 'Current placement of the offcanvas',
            },
            hide: {
              type: '(trigger?: string) => void',
              description: 'Function to close the offcanvas',
            },
          },
        },
        'backdrop': {
          description: 'Content to replace the default backdrop',
          scope: {},
        },
        'footer': {
          description: 'Content to place in the footer of the offcanvas',
          scope: {
            visible: {
              type: 'boolean',
              description: 'Current visibility state of the offcanvas',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
              description: 'Current placement of the offcanvas',
            },
            hide: {
              type: '(trigger?: string) => void',
              description: 'Function to close the offcanvas',
            },
          },
        },
        'header': {
          description: 'Content to replace the entire default header',
          scope: {
            visible: {
              type: 'boolean',
              description: 'Current visibility state of the offcanvas',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
              description: 'Current placement of the offcanvas',
            },
            hide: {
              type: '(trigger?: string) => void',
              description: 'Function to close the offcanvas',
            },
          },
        },
        'header-close': {
          description: 'Content to replace the default close button in the header',
          scope: {},
        },
      } satisfies SlotRecord<keyof BOffcanvasSlots>,
      exposed: {
        show: {
          type: '() => void',
          description: 'Shows the offcanvas',
        },
        hide: {
          type: '() => void',
          description: 'Hides the offcanvas',
        },
        toggle: {
          type: '() => void',
          description: 'Toggles the visibility of the offcanvas',
        },
        isOpenByBreakpoint: {
          type: 'Ref<boolean>',
          description:
            'Reactive boolean indicating if the offcanvas is opened by responsive breakpoint',
        },
      } satisfies ExposedRecord,
    },
  }),
}
