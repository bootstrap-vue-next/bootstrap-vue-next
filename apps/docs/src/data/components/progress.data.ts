import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BProgress',
      sourcePath: '/BProgress/BProgress.vue',
      props: {
        '': {
          animated: {
            type: 'boolean',
            default: undefined,
            description: "Enable the animated background. Also automatically sets 'striped'",
          },
          height: {
            type: 'string',
            default: undefined,
            description:
              'Override the default height by specifying a CSS height value (including units)',
          },
          max: {
            type: 'Numberish',
            default: 100,
            description: 'Set the maximum value',
          },
          precision: {
            type: 'Numberish',
            default: undefined,
            description: 'The number of digits after the decimal to round the value to',
          },
          showProgress: {
            type: 'boolean',
            default: undefined,
            description: 'Displays the current progress value as a percentage',
          },
          showValue: {
            type: 'boolean',
            default: undefined,
            description: 'Displays the current progress value',
          },
          striped: {
            type: 'boolean',
            default: undefined,
            description: 'Enable the striped background',
          },
          value: {
            type: 'Numberish',
            default: undefined,
            description: 'The current value of the progress bar',
          },
          ...pick(buildCommonProps(), ['bgVariant', 'textVariant', 'variant']),
        } satisfies Record<keyof BvnComponentProps['BProgress'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content (progress bars) to place in the progress element',
        },
      ],
    },
    {
      component: 'BProgressBar',
      sourcePath: '/BProgress/BProgressBar.vue',
      props: {
        '': {
          animated: {
            type: 'boolean',
            default: false,
            description: "Enable the animated background. Also automatically sets 'striped'",
          },
          label: {
            type: 'string',
            default: undefined,
            description: 'Text string to explicitly set the label as',
          },
          max: {
            type: 'Numberish',
            default: undefined,
            description: 'Set the maximum value',
          },
          precision: {
            type: 'Numberish',
            default: 0,
            description: 'The number of digits after the decimal to round the value to',
          },
          showProgress: {
            type: 'boolean',
            default: false,
            description: 'Displays the current progress value as a percentage',
          },
          showValue: {
            type: 'boolean',
            default: false,
            description: 'Displays the current progress value',
          },
          striped: {
            type: 'boolean',
            default: false,
            description: 'Enable the striped background',
          },
          value: {
            type: 'Numberish',
            default: 0,
            description: 'The current value of the progress bar',
          },
          ...pick(buildCommonProps(), ['bgVariant', 'textVariant', 'variant']),
        } satisfies Record<keyof BvnComponentProps['BProgressBar'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description:
            'Content to place in the progress bar. Overrides the `label`, `show-progress` and `show-value` props',
        },
      ],
    },
  ],
}
