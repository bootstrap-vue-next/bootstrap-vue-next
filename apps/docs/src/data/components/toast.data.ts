import type {BToastEmits, BToastProps} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitRecord,
  type ExposedRecord,
  type PropRecord,
} from '../../types'
import {omit, pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'
import {linkedBLinkSection, type linkProps} from '../../utils/linkProps'
import {buildDismissibleEmits, showHideProps} from '../../utils/showHideData'

export default {
  load: (): ComponentReference => ({
    BToast: {
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
        ...buildDismissibleEmits(),
        'update:model-value': {
          description: 'Emitted when the toast visibility or countdown duration changes.',
          args: {
            value: {
              type: 'boolean | number',
              description:
                'The new visibility state (boolean) or countdown duration in milliseconds (number). When boolean: true = visible, false = hidden. When number: > 0 = countdown duration, 0 = countdown finished.',
            },
          },
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
      exposed: {
        show: {
          type: '() => void',
          description: 'Shows the toast',
        },
        hide: {
          type: '() => void',
          description: 'Hides the toast',
        },
        toggle: {
          type: '() => void',
          description: 'Toggles the visibility of the toast',
        },
        pause: {
          type: '() => void',
          description: 'Pauses the countdown timer',
        },
        resume: {
          type: '() => void',
          description: 'Resumes the countdown timer',
        },
        restart: {
          type: '() => void',
          description: 'Restarts the countdown timer',
        },
        stop: {
          type: '() => void',
          description: 'Stops the countdown timer',
        },
      } satisfies ExposedRecord,
    },
  }),
}
