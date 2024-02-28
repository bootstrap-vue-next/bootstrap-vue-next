import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAlert',
      props: [
        {
          prop: 'closeVariant',
          type: 'ButtonVariant | null',
          default: 'secondary',
        },
        {
          prop: 'closeClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'closeLabel',
          type: 'string',
          default: 'Close',
        },
        {
          prop: 'closeContent',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'noHoverPause',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'dismissible',
          type: 'boolean',
          default: false,
          description: 'When set, enables the dismiss close button',
        },
        {
          prop: 'fade',
          type: 'boolean',
          default: false,
          description: 'When set to true, enables the fade animation/transition on the component',
        },
        {
          prop: 'modelValue',
          type: 'boolean | number',
          default: false,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: 'info',
          description: 'Applies one of the Bootstrap theme color variants to the component',
        },
        {
          prop: 'immediate',
          type: 'boolean',
          default: true,
        },
        {
          prop: 'interval',
          type: 'number | string',
          default: 1000,
        },
        {
          prop: 'showOnPause',
          type: 'boolean',
          default: true,
        },
      ],
      slots: [],
      emits: [
        {
          args: [],
          event: 'dismissed',
          description:
            'Alert dismissed either via the dismiss close button or when the dismiss countdown has expired',
        },
        {
          event: 'close-countdown',
          description: 'Content to place in the alert',
          args: [
            {
              arg: 'closeCountdown',
              description: 'Time remaining on the timer',
              type: 'number',
            },
          ],
        },
        {
          event: 'update:modelValue',
          description: 'Standard event to update the v-model',
          args: [
            {
              arg: 'update:modelValue',
              description: 'modelValue',
              type: 'boolean | number',
            },
          ],
        },
      ],
    },
  ],
}
