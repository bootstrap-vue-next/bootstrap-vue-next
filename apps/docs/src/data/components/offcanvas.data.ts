import type {BOffcanvasEmits, BOffcanvasProps, BOffcanvasSlots} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  type EmitRecord,
  type PropRecord,
  type SlotRecord,
  StyleKind,
} from '../../types'
import {showHideEmits, showHideProps} from '../../utils/showHideData'

export default {
  load: (): ComponentReference => ({
    BOffcanvas: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.offcanvas[-*]'},
      sourcePath: '/BOffcanvas/BOffcanvas.vue',
      props: {
        ...showHideProps,
        backdropFirst: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Animate the backdrop before the offcanvas, and on leave animate the offcanvas before the backdrop',
        },
        bodyAttrs: {
          type: 'Readonly<AttrsValue>',
          default: undefined,
        },
        bodyClass: {
          type: 'ClassValue',
          default: undefined,
        },
        bodyScrolling: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        focus: {
          type: "'ok' | 'cancel' | 'close' | string | ComponentPublicInstance | HTMLElement | null",
          default: undefined,
          description:
            "Specify where to focus once offcanvas opens. Can be built-in button 'close'. Can be ref, HTMLElement, id or selector string. If set to 'false', no focus will be set (if noTrap isn't set the focus trap will focus the modal element or failback element). If set to a string, the element with that id will be focused. If set to a ComponentPublicInstance, the $el property of the instance will be focused.", // TODO grammar check (should say "fallback" instead of "failback")
        },
        footerClass: {
          type: 'string',
          default: undefined,
        },
        headerClass: {
          type: 'string',
          default: undefined,
        },
        headerCloseClass: {
          type: 'ClassValue',
          default: undefined,
        },
        headerCloseLabel: {
          type: 'string',
          default: 'Close',
        },
        headerCloseVariant: {
          type: 'ButtonVariant | null',
          default: 'secondary',
        },
        noBackdrop: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        id: {
          type: 'string',
          default: undefined,
        },
        noCloseOnBackdrop: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noCloseOnEsc: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noHeader: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noHeaderClose: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noTrap: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disables the focus trap feature',
        },
        placement: {
          type: 'Placement',
          default: 'start',
        },
        responsive: {
          type: 'Breakpoint',
        },
        shadow: {
          type: 'Size | boolean',
          default: false, // TODO item not in string format
        },
        teleportDisabled: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        teleportTo: {
          type: 'string | RendererElement | null | undefined',
          default: 'body',
        },
        title: {
          type: 'string',
          default: undefined,
        },
        width: {
          type: 'string',
          default: undefined,
        },
      } satisfies PropRecord<keyof BOffcanvasProps>,
      emits: {
        ...showHideEmits,
        'update:model-value': {
          args: {
            'update:model-value': {
              description: '', // TODO missing description
              type: 'boolean',
            },
          },
          description: '', // TODO missing description
        },
        'breakpoint': {
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event',
            },
            opened: {
              type: 'boolean',
              description: 'Whether or not the offcanvas is above the breakpoint and is open by it',
            },
          },
          description: "Emitted when the offcanvas' breakpoint state changes", // TODO grammar check (should say "offcanvas's" instead of "offcanvas'")
        },
        'close': {
          description: '', // TODO missing description
          args: {
            value: {
              description: '', // TODO missing description
              type: 'BvTriggerableEvent',
            },
          },
        },
        'esc': {
          description: '', // TODO missing description
          args: {
            value: {
              description: '', // TODO missing description
              type: 'BvTriggerableEvent',
            },
          },
        },
        'backdrop': {
          args: undefined,
          description: undefined,
        },
        'cancel': {
          args: undefined,
          description: undefined,
        },
        'ok': {
          args: undefined,
          description: undefined,
        },
      } satisfies EmitRecord<keyof BOffcanvasEmits | 'update:model-value'>,
      slots: {
        'title': {
          description: '', // TODO missing description
          scope: {
            visible: {
              type: 'boolean',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            hide: {
              type: '(trigger?: string) => void',
            },
          },
        },
        'default': {
          description: '', // TODO missing description
          scope: {
            visible: {
              type: 'boolean',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            hide: {
              type: '(trigger?: string) => void',
            },
          },
        },
        'backdrop': {
          description: '', // TODO missing description
          scope: {},
        },
        'footer': {
          description: '', // TODO missing description
          scope: {
            visible: {
              type: 'boolean',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            hide: {
              type: '(trigger?: string) => void',
            },
          },
        },
        'header': {
          description: '', // TODO missing description
          scope: {
            visible: {
              type: 'boolean',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            hide: {
              type: '(trigger?: string) => void',
            },
          },
        },
        'header-close': {
          description: '', // TODO missing description
          scope: {},
        },
      } satisfies SlotRecord<keyof BOffcanvasSlots>,
    },
  }),
}
