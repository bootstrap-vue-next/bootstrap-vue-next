import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BProgress: {
      sourcePath: '/BProgress/BProgress.vue',
      props: {
        ...pick(buildCommonProps(), ['bgVariant', 'textVariant', 'variant']),
        animated: {
          type: 'boolean',
          default: undefined,
          description: "Enables the animated background. Automatically sets 'striped'.",
        },
        height: {
          type: 'string',
          default: undefined,
          description: 'Overrides the default height with a CSS height value (including units).',
        },
        max: {
          type: 'Numberish',
          default: 100, // TODO item not in string format
          description: 'Sets the maximum value.',
        },
        precision: {
          type: 'Numberish',
          default: undefined,
          description: 'Specifies the number of digits after the decimal to round the value to.',
        },
        showProgress: {
          type: 'boolean',
          default: undefined,
          description: 'Displays the current progress value as a percentage.',
        },
        showValue: {
          type: 'boolean',
          default: undefined,
          description: 'Displays the current progress value.',
        },
        striped: {
          type: 'boolean',
          default: undefined,
          description: 'Enables the striped background.',
        },
        value: {
          type: 'Numberish',
          default: undefined,
          description: 'Sets the current value of the progress bar.',
        },
      } satisfies Record<keyof BvnComponentProps['BProgress'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content (progress bars) to place in the progress element.',
        },
      },
    },
    BProgressBar: {
      sourcePath: '/BProgress/BProgressBar.vue',
      props: {
        ...pick(buildCommonProps(), ['bgVariant', 'textVariant', 'variant']),
        animated: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: "Enables the animated background. Automatically sets 'striped'.",
        },
        label: {
          type: 'string',
          default: undefined,
          description: 'Sets the text string for the label.',
        },
        max: {
          type: 'Numberish',
          default: undefined,
          description: 'Sets the maximum value.',
        },
        precision: {
          type: 'Numberish',
          default: 0, // TODO item not in string format
          description: 'Specifies the number of digits after the decimal to round the value to.',
        },
        showProgress: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Displays the current progress value as a percentage.',
        },
        showValue: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Displays the current progress value.',
        },
        striped: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Enables the striped background.',
        },
        value: {
          type: 'Numberish',
          default: 0, // TODO item not in string format
          description: 'Sets the current value of the progress bar.',
        },
      } satisfies Record<keyof BvnComponentProps['BProgressBar'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description:
            'Content to place in the progress bar, overriding the `label`, `showProgress`, and `showValue` props.',
        },
      },
    },
  }),
}
