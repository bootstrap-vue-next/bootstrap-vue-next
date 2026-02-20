import type {BFormRatingProps, BFormRatingSlots} from 'bootstrap-vue-next'
import type {ComponentReference, ExposedRecord, PropRecord, SlotRecord} from '../../types'
import {buildCommonProps} from '../../utils/commonProps'
import {pick} from '../../utils/objectUtils'

export default {
  load: (): ComponentReference => ({
    BFormRating: {
      props: {
        ...pick(buildCommonProps(), ['id', 'variant']),
        color: {
          type: 'string',
          default: undefined,
          description:
            'CSS color to use instead of variant. Accepts either a HEX or RGB/RGBA string',
        },
        disabled: {
          type: 'boolean',
          default: 'false',
          description: 'When `true` makes the rating disabled',
        },
        form: {
          type: 'string',
          default: undefined,
          description:
            'The id of the form that the rating input belongs to. If not set, the rating will be associated with the closest parent form',
        },
        inline: {
          type: 'boolean',
          default: 'false',
          description:
            'When `true` renders as an inline element rather than a block (100% width) element',
        },
        locale: {
          type: 'string',
          default: 'undefined',
          description:
            'Locale (or locales) to use when showing the value when prop `show-value` is set. Defaults to the browser default locale. Also affects the left-to-right or right-to-left orientation of the component',
        },
        modelValue: {
          type: 'number',
          default: 0,
          description: 'The current rating value (supports v-model two-way binding).',
        },
        name: {
          type: 'string',
          default: undefined,
          description:
            'Sets the name attribute on the hidden input element. Required for form submission',
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
      } satisfies PropRecord<keyof BFormRatingProps>,
      emits: {
        'update:model-value': {
          args: {
            value: {
              description: 'Currently selected rating value.',
              type: 'number',
            },
          },
          description:
            'Emitted when the selected value(s) are changed. Looking for the `input` or `change` event - use `update:model-value` instead.',
        },
      },
      slots: {
        'default': {
          description: 'Custom renderer for each star.',
          scope: {
            starIndex: {
              type: 'number',
              description: 'The index of the star being rendered (0-based index)',
            },
            isFilled: {
              type: 'boolean',
              description: 'When `true`, the star is filled (selected)',
            },
            isHalf: {
              type: 'boolean',
              description: 'When `true`, the star is half-filled (partially selected)',
            },
          },
        },
        'icon-clear': {
          description: 'Content for the optional clear button',
        },
      } satisfies SlotRecord<keyof BFormRatingSlots>,
      exposed: {
        hoverValue: {
          type: 'Ref<number | null>',
          description: 'Reactive reference to the currently hovered rating value',
        },
      } satisfies ExposedRecord,
    },
  }),
}
