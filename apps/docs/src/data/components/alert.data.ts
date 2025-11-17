import type {BAlertEmits, BAlertProps, BAlertSlots} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitRecord,
  type PropRecord,
  type SlotRecord,
} from '../../types'
import {linkedBLinkSection, type linkProps} from '../../utils/linkProps'
import {buildDismissibleEmits, showHideProps} from '../../utils/showHideData'
import {buildCommonProps} from '../../utils/commonProps'
import {omit, pick} from '../../utils/objectUtils'

export default {
  load: (): ComponentReference => ({
    BAlert: {
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
          alertClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the alert wrapper element',
          },
          dismissible: {
            type: 'boolean',
            default: false,
            description: 'When set, enables the close button',
          },
          modelValue: {
            type: 'boolean | number',
            default: false,
            description:
              'Controls the visibility of the alert. A `boolean` value directly controls the visibility. A number starts the countdown timer',
          },
        } satisfies PropRecord<Exclude<keyof BAlertProps, keyof typeof linkProps>>,
        'BLink props': linkedBLinkSection,
      },
      slots: {
        default: {
          description: 'Content to place in the Alert',
        },
        close: {
          description: 'Content to place in the close button',
        },
        title: {
          description: '',
          scope: {}, // TODO
        },
      } satisfies SlotRecord<keyof BAlertSlots>,
      emits: {
        ...buildDismissibleEmits(),
        'close-countdown': {
          description: 'Emitted during the countdown with the time remaining',
          args: {
            closeCountdown: {
              description: 'Time remaining on the timer',
              type: 'number',
            },
          },
        },
        'update:model-value': {
          description: 'Standard event to update the v-model',
          args: {
            'update:model-value': {
              description: 'modelValue',
              type: 'boolean | number',
            },
          },
        },
      } satisfies EmitRecord<keyof BAlertEmits | 'update:model-value'>,
    },
  }),
}
