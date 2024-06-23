import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAlert',
      props: {
        '': {
          closeVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
          },
          closeClass: {
            type: 'ClassValue',
            default: undefined,
          },
          closeLabel: {
            type: 'string',
            default: 'Close',
          },
          closeContent: {
            type: 'string',
            default: undefined,
          },
          noHoverPause: {
            type: 'boolean',
            default: false,
          },
          dismissible: {
            type: 'boolean',
            default: false,
            description: 'When set, enables the dismiss close button',
          },
          fade: {
            type: 'boolean',
            default: false,
            description: 'When set to true, enables the fade animation/transition on the component',
          },
          modelValue: {
            type: 'boolean | number',
            default: false,
          },
          variant: {
            type: 'ColorVariant | null',
            default: 'info',
            description: 'Applies one of the Bootstrap theme color variants to the component',
          },
          immediate: {
            type: 'boolean',
            default: true,
          },
          interval: {
            type: 'number | string',
            default: 1000,
          },
          showOnPause: {
            type: 'boolean',
            default: true,
          },
        },
      },
      slots: [],
      emits: [
        {
          args: [],
          event: 'close',
          description: 'Emitted when the alert begins its transition to close',
        },
        {
          args: [],
          event: 'closed',
          description: 'Emitted after the alert ends its transition to close',
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
