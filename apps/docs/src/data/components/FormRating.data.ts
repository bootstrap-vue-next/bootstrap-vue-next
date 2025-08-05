import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormRating',
      sourcePath: '/BFormRating/BFormRating.vue',
      props: {
        '': {
          color: {
            type: 'string',
            default: undefined,
            description:
              'CSS color to use instead of variant. Accepts either a HEX or RGB/RGBA string',
          },
          inline: {
            type: 'boolean',
            default: 'false',
            description:
              'When `true` renders as an inline element rather than a block (100% width) element',
          },
          modelValue: {
            type: 'number',
            default: 0,
            description: 'The current rating value (supports v-model two-way binding).',
          },
          noBorder: {
            type: 'boolean',
            default: 'false',
            description: 'When `true`, removes the border around the rating component',
          },
          precision: {
            type: 'number',
            default: undefined,
            description:
              'Specify the number of digits after the decimal to show. Defaults to to no defined precision',
          },
          readonly: {
            type: 'boolean',
            default: 'false',
            description:
              'When `true` makes the rating readonly. When `true`, fractional ratings values are allowed (half icons will be shown)',
          },
          disabled: {
            type: 'boolean',
            default: 'false',
            description: 'When `true` makes the rating disabled',
          },
          showClear: {
            type: 'boolean',
            default: 'false',
            description: 'When `true`, shows a clear button to reset the rating',
          },
          showValue: {
            type: 'boolean',
            default: 'false',
            description: 'When `true` shows the current rating value in the control',
          },
          showValueMax: {
            type: 'boolean',
            default: 'false',
            description:
              'When set to `true` and prop `show-value` is `true`, includes the maximum star rating possible in the formatted value',
          },
          size: {
            type: "'sm' | 'lg' | string",
            default: '1rem',
            description:
              "Icon size: accepts CSS units (e.g. '1.5rem', '24px') or the presets 'sm' (.875rem) and 'lg' (1.25rem); defaults to 1rem.",
          },
          stars: {
            type: 'number',
            default: 5,
            description: 'The number of stars to show. Minimum value is `3`, default is `5`',
          },
          ...pick(buildCommonProps(), ['id', 'variant']),
        } satisfies Record<keyof BvnComponentProps['BFormRating'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              description: 'Currently selected rating value.',
              type: 'number',
            },
          ],
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:model-value` instead.',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Custom renderer for each star.',
          scope: [
            {
              prop: 'starIndex',
              type: 'number',
              description: 'The index of the star being rendered (0-based index)',
            },
            {
              prop: 'isFilled',
              type: 'boolean',
              description: 'When `true`, the star is filled (selected)',
            },
            {
              prop: 'isHalf',
              type: 'boolean',
              description: 'When `true`, the star is half-filled (partially selected)',
            },
          ],
        },
      ],
    },
  ],
}
