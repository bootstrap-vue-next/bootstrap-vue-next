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
          modelValue: {
            type: 'number',
            default: undefined,
            description: 'The current rating value (supports v-model two-way binding).',
          },
          precision: {
            type: 'Number or String',
            default: undefined,
            description:
              'Specify the number of digits after the decimal to show. Defaults to to no defined precision',
          },
          readonly: {
            type: 'Boolean',
            default: 'false',
            description:
              'When `true` makes the rating readonly. When `true`, fractional ratings values are allowed (half icons will be shown)',
          }, //
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
          stars: {
            type: 'number | string',
            default: '5',
            description: 'The number of stars to show. Minimum value is `3`, default is `5`',
          },
          variant: {
            type: 'String',
            default: undefined,
            description: 'Applies one of the Bootstrap theme color variants to the component',
          },
          size: {
            type: 'String',
            default: 'md',
            description:
              "Icon size: accepts CSS units (e.g. '1.5rem', '24px') or the presets 'sm' (small) and 'lg' (large); defaults to medium.",
          },
          //modify icons props later on
          iconFull: {
            type: 'String',
            default: '',
            description: 'Icon name to render for a full star',
          },
          iconHalf: {
            type: 'String',
            default: '',
            description: 'Icon name to render for a half-filled star',
          },
          iconEmpty: {
            type: 'String',
            default: '',
            description: 'Icon name to render for an empty star',
          },
          ...pick(buildCommonProps(), ['form', 'id', 'name']),
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
          description:
            'Custom renderer for each star. Receives `starIndex`, `isFilled`, and `isHalf` as slot-scope props.',
        },
      ],
    },
  ],
}
