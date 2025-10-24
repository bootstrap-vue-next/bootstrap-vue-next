import type {BToastEmits, BToastProps} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitRecord,
  type PropRecord,
} from '../../types'
import {omit, pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'
import {linkedBLinkSection, type linkProps} from '../../utils/linkProps'
import {showHideEmits, showHideProps} from '../../utils/showHideData'

export default {
  load: (): ComponentReference => ({
    BToast: {
      sourcePath: '/BToast/BToast.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ...omit(showHideProps, ['modelValue']),
          ...pick(buildCommonProps(), [
            'bgVariant',
            'body',
            'bodyClass',
            'closeClass',
            'closeContent',
            'closeLabel',
            'closeVariant',
            'headerClass',
            'headerTag',
            'id',
            'interval',
            'isStatus',
            'noHoverPause',
            'noResumeOnHoverLeave',
            'progressProps',
            'showOnPause',
            'textVariant',
            'title',
            'variant',
          ]),

          modelValue: {
            type: 'boolean | number',
            default: false,
            description:
              'Controls toast visibility (`boolean`) or sets the auto-dismiss duration in milliseconds (`number`).',
          },
          noCloseButton: {
            type: 'boolean',
            default: false,
            description: 'Hides the close button in the toast header.',
          },
          noProgress: {
            type: 'boolean',
            default: false,
            description: 'Hides the progress bar in the toast.',
          },
          solid: {
            type: 'boolean',
            default: false,
            description: 'Renders the toast with a solid background instead of a translucent one.',
          },
          toastClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Sets the CSS class(es) for the toast wrapper element.',
          },
        } satisfies PropRecord<Exclude<keyof BToastProps, keyof typeof linkProps>>,
        'BLink props': linkedBLinkSection,
      },
      emits: {
        ...showHideEmits,
        'update:model-value': {
          description: 'Emitted when the toast visibility changes.',
          args: {
            value: {
              type: 'Boolean',
              description: 'The new visibility state of the toast.',
            },
          },
        },
        'close': {
          description: 'Emitted when the close button is clicked.',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event object for the close button click.',
            },
          },
        },
        'close-countdown': {
          description: 'Emitted during the countdown to auto-dismiss.',
          args: {
            value: {
              type: 'number',
              description: 'The remaining time in milliseconds before the toast is auto-dismissed.',
            },
          },
        },
        // Stubs to satisfy TS, real definitions are in showHideEmits
        'cancel': {
          args: undefined,
          description: undefined,
        },
        'ok': {
          args: undefined,
          description: undefined,
        },
      } satisfies EmitRecord<keyof BToastEmits | 'update:model-value'>,
      slots: {
        default: {
          description: 'Content to place in the toast body',
          scope: {
            id: {
              type: 'string',
              description: 'The toast component ID',
            },
            show: {
              type: '() => void',
              description: 'Function to show the toast',
            },
            hide: {
              type: '(trigger?: string, noTriggerEmit?: boolean) => void',
              description: 'Function to hide the toast',
            },
            toggle: {
              type: '() => void',
              description: 'Function to toggle toast visibility',
            },
            active: {
              type: 'boolean',
              description: 'Whether the countdown timer is active',
            },
            visible: {
              type: 'boolean',
              description: 'Current visibility state of the toast',
            },
          },
        },
        title: {
          description: 'Content to place in the toast header as title',
          scope: {
            id: {
              type: 'string',
              description: 'The toast component ID',
            },
            show: {
              type: '() => void',
              description: 'Function to show the toast',
            },
            hide: {
              type: '(trigger?: string, noTriggerEmit?: boolean) => void',
              description: 'Function to hide the toast',
            },
            toggle: {
              type: '() => void',
              description: 'Function to toggle toast visibility',
            },
            active: {
              type: 'boolean',
              description: 'Whether the countdown timer is active',
            },
            visible: {
              type: 'boolean',
              description: 'Current visibility state of the toast',
            },
          },
        },
        close: {
          description: 'Content to place in the close button',
          scope: {
            id: {
              type: 'string',
              description: 'The toast component ID',
            },
            show: {
              type: '() => void',
              description: 'Function to show the toast',
            },
            hide: {
              type: '(trigger?: string, noTriggerEmit?: boolean) => void',
              description: 'Function to hide the toast',
            },
            toggle: {
              type: '() => void',
              description: 'Function to toggle toast visibility',
            },
            active: {
              type: 'boolean',
              description: 'Whether the countdown timer is active',
            },
            visible: {
              type: 'boolean',
              description: 'Current visibility state of the toast',
            },
          },
        },
      },
    },
  }),
}
