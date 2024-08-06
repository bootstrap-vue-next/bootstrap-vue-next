import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAlert',
      props: {
        '': {
          closeVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
            description: 'Applies one of the Bootstrap button variants to the close button',
          },
          closeClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Applies one or more custom classes to the close button',
          },
          closeLabel: {
            type: 'string',
            default: 'Close',
            description: 'Sets the aria-label attribute on the close button',
          },
          closeContent: {
            type: 'string',
            default: undefined,
            description: 'Sets the text of the close button. The `close` slot takes precedence',
          },
          noHoverPause: {
            type: 'boolean',
            default: false,
            description: 'When set to true, disables pausing the timer on hover behavior',
          },
          dismissible: {
            type: 'boolean',
            default: false,
            description: 'When set, enables the close button',
          },
          fade: {
            type: 'boolean',
            default: false,
            description: 'When set to true, enables the fade animation/transition on the component',
          },
          modelValue: {
            type: 'boolean | number',
            default: false,
            description:
              'Controls the visibility of the alert. A `boolean` value directly controls the visibility. A number starts the countdown timer',
          },
          immediate: {
            type: 'boolean',
            default: true,
            description:
              'Setting this property to `false` will cause a timer to not start immediately upon render. A timer that is not started is not rendered. It must manually be started with `resume()` or `restart()`',
          },
          interval: {
            type: 'Numberish',
            default: 1000,
            description: 'The interval in milliseconds to update the countdown timer',
          },
          showOnPause: {
            type: 'boolean',
            default: true,
            description:
              'Setting this property to `false` will override the behavior of showing the Alert when the timer is paused',
          },
          ...pick(
            buildCommonProps({
              id: {
                description:
                  'The Id to be injected to accordion items and used to in BCollapse for state managment',
              },
            }),
            ['variant']
          ),
        },
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the Alert',
        },
        {
          name: 'close',
          description: 'Content to place in the close button',
        },
      ],
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
          event: 'update:model-value',
          description: 'Standard event to update the v-model',
          args: [
            {
              arg: 'update:model-value',
              description: 'modelValue',
              type: 'boolean | number',
            },
          ],
        },
      ],
    },
  ],
}
