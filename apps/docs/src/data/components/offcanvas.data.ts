import type {BOffcanvasEmits, BOffcanvasSlots, BvnComponentProps} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  type EmitReference,
  type PropertyReference,
  type SlotsReference,
  StyleKind,
} from '../../types'
import {showHideProps} from '../../utils/showHideData'

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
      } satisfies Record<keyof BvnComponentProps['BOffcanvas'], PropertyReference>,
      emits: {
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
        'show': {
          args: {
            value: {
              description: '', // TODO missing description
              type: 'BvTriggerableEvent',
            },
          },
          description: '', // TODO missing description
        },
        'show-prevented': {
          description: '', // TODO missing description
          args: {},
        },
        'shown': {
          args: {
            value: {
              description: '', // TODO missing description
              type: 'BvTriggerableEvent',
            },
          },
          description: '', // TODO missing description
        },
        'hide': {
          args: {
            value: {
              description: '', // TODO missing description
              type: 'BvTriggerableEvent',
            },
          },
          description: '', // TODO missing description
        },
        'hide-prevented': {
          description: '', // TODO missing description
          args: {},
        },
        'hidden': {
          args: {
            value: {
              description: '', // TODO missing description
              type: 'BvTriggerableEvent',
            },
          },
          description: '', // TODO missing description
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
      } satisfies Record<keyof BOffcanvasEmits | 'update:model-value', EmitReference>,
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
      } satisfies Record<keyof BOffcanvasSlots, SlotsReference>,
    },
  }),
}
