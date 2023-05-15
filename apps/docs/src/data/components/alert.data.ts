import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAlert',
      props: [
        {
          prop: 'dismissLabel',
          type: 'string',
          description: "Value for the 'aria-label' attribute on the dismiss button",
        },
        {
          prop: 'dismissible',
          type: 'Booleanish',
          description: 'When set, enables the dismiss close button',
          default: 'abc',
        },
        {
          description: '',
          prop: 'modelValue',
          type: 'boolean | number',
        },
        {
          prop: 'fade',
          type: 'Booleanish',
          description: 'When set to true, enables the fade animation/transition on the component',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
          description: 'Applies one of the Bootstrap theme color variants to the component',
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
