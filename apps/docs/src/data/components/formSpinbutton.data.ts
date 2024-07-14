import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormSpinbutton',
      props: {
        '': {
          inline: {
            type: 'boolean',
            default: 'false',
            description: 'When set, renders the component as an inline element',
          },
          labelDecrement: {
            type: 'string',
            default: 'Decrement',
            description: 'Text to be used for the `aria-label` attribute on the decrement button',
          },
          labelIncrement: {
            type: 'string',
            default: 'Increment',
            description: 'Text to be used for the `aria-label` attribute on the increment button',
          },
          locale: {
            type: 'string',
            default: 'undefined',
            description:
              'Specify the local to use for formatting the number. Defaults to the browser locale. Only applicable when using the internal formatter',
          },
          max: {
            type: 'Numberish',
            default: '100',
            description:
              'The maximum value that can be selected. Must be greater than the `min` prop. Negative numbers are allowed',
          },
          min: {
            type: 'Numberish',
            default: '1',
            description: 'The minimum value that can be selected. Negative numbers are allowed',
          },
          placeholder: {
            type: 'string',
            default: 'undefined',
            description: 'Value to show when the v-model is `null`',
          },
          repeatDelay: {
            type: 'Numberish',
            default: '500',
            description:
              'Delay in milliseconds after before auto repeat increment or decrement happens. Must be a positive integer. Requires the user to click/keydown and hold',
          },
          repeatInterval: {
            type: 'Numberish',
            default: '100',
            description:
              'Interval in milliseconds between increment or decrement repeats. Must be a positive integer',
          },
          repeatStepMultiplier: {
            type: 'Numberish',
            default: '4',
            description:
              'Number of steps to jump by once the `repeat-threshold` has been reached. Must be a positive integer. This value is also used for the page up and down keys',
          },
          repeatThreshold: {
            type: 'Numberish',
            default: '10',
            description:
              'Number of repeats to occur before increasing the step size by `repeat-step-multiplier`. Must be a positive integer',
          },
          step: {
            type: 'Numberish',
            default: '1',
            description:
              'A positive number that specifies the granularity that the value must adhere to',
          },
          vertical: {
            type: 'boolean',
            default: 'false',
            description: 'When set, renders the component with a vertical layout',
          },
          wrap: {
            type: 'boolean',
            default: 'false',
            description: 'When set, renders the component with a vertical layout',
          },
          ...pick(buildCommonProps(), [
            'ariaControls',
            'ariaLabel',
            'disabled',
            'form',
            'id',
            'name',
            'readonly',
            'required',
            'size',
            'state',
          ]),
        },
      },
      emits: [
        {
          event: 'change',
          args: [
            {
              arg: 'value',
              type: 'number | null',
              description: 'Currently value of the spinbutton control.',
            },
          ],
          description: 'Emitted when the user releases the mouse button or key',
        },

        {
          event: 'update:modelValue',
          args: [
            {
              arg: 'value',
              type: 'number | null',
              description: 'Currently value of the spinbutton control.',
            },
          ],
          description: 'Emitted to update the v-model on each value change',
        },
      ],
      slots: [
        {
          name: 'decrement',
          description: 'Custom content to place in the decrement button',
          scope: [
            {
              prop: 'hasFocus',
              type: 'boolean',
              description: '`true` when the spinbutton has focus',
            },
          ],
        },
        {
          name: 'increment',
          description: 'Custom content to place in the increment button',
          scope: [
            {
              prop: 'hasFocus',
              type: 'boolean',
              description: '`true` when the spinbutton has focus',
            },
          ],
        },
      ],
    },
  ],
}
