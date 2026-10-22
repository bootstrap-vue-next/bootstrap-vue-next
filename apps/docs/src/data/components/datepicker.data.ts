import type { BDatepickerEmits, BDatepickerProps, BDatepickerSlots } from 'bootstrap-vue-next'
import {
  type ComponentReference,
  type EmitRecord,
  type PropRecord,
  type SlotRecord,
  StyleKind,
} from '../../types'
import { pick } from '../../utils/objectUtils'
import { buildCommonProps } from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BDatepicker: {
      styleSpec: { kind: StyleKind.BsvnClass },
      props: {
        ...pick(buildCommonProps(), [
          'disabled',
          'id',
          'name',
          'placeholder',
          'plaintext',
          'readonly',
          'required',
          'size',
          'state',
        ]),
        dateFormat: {
          type: 'Intl.DateTimeFormatOptions | ((date: Date, locale: string | undefined) => string)',
          default: undefined,
          description: 'Formats the dates displayed in the input or trigger button',
        },
        dateMax: {
          type: 'string | number | Date',
          default: undefined,
          description: 'The latest selectable date',
        },
        dateMin: {
          type: 'string | number | Date',
          default: undefined,
          description: 'The earliest selectable date',
        },
        datepickerTheme: {
          type: "'light' | 'dark' | 'auto'",
          default: undefined,
          description: 'The color theme of the calendar popup',
        },
        displayElement: {
          type: 'string | HTMLElement | boolean',
          default: undefined,
          description: 'The element that shows the selected dates (used with `trigger="button"`)',
        },
        displayMonthsCount: {
          type: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12',
          default: undefined,
          description: 'The number of months rendered side by side',
        },
        firstWeekday: {
          type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
          default: undefined,
          description: 'The first day of the week. 0 is Sunday',
        },
        inline: {
          type: 'boolean',
          default: false,
          description: 'Renders the calendar inline instead of in a popup',
        },
        locale: {
          type: 'string',
          default: undefined,
          description: 'The locale used to render the calendar',
        },
        modelValue: {
          type: 'string | null | string[]',
          default: undefined,
          description:
            'The selected value. A `string` (ISO `YYYY-MM-DD`) when `selectionMode` is `single`, otherwise a `string[]`',
        },
        placement: {
          type: "'left' | 'center' | 'right' | 'auto'",
          default: undefined,
          description: 'The placement of the popup relative to its anchor',
        },
        positionElement: {
          type: 'string | HTMLElement',
          default: undefined,
          description: 'The element the popup is positioned against',
        },
        selectionMode: {
          type: "'single' | 'multiple' | 'multiple-ranged'",
          default: 'single',
          description:
            'The selection mode. `multiple` and `multiple-ranged` (date range) make the model a `string[]`',
        },
        trigger: {
          type: "'input' | 'button'",
          default: 'input',
          description: 'Whether the popup is opened from a text input or from a button',
        },
        vcpOptions: {
          type: 'Record<string, unknown>',
          default: undefined,
          description: 'Additional options passed through to Vanilla Calendar Pro',
        },
      } satisfies PropRecord<keyof BDatepickerProps>,
      emits: {
        change: {
          description: 'Emitted when the selected dates change',
          args: {
            value: {
              type: '{dates: string[]; event: Event}',
              description: 'The selected dates and the original `change.bs.datepicker` event',
            },
          },
        },
        hidden: {
          description: 'Emitted after the calendar popup has been hidden',
          args: { event: { type: 'Event', description: 'The native event' } },
        },
        hide: {
          description: 'Emitted when the calendar popup starts hiding',
          args: { event: { type: 'Event', description: 'The native event' } },
        },
        shown: {
          description: 'Emitted after the calendar popup is shown',
          args: { event: { type: 'Event', description: 'The native event' } },
        },
        show: {
          description: 'Emitted when the calendar popup starts showing',
          args: { event: { type: 'Event', description: 'The native event' } },
        },
        'update:model-value': {
          description: 'Emitted to update the v-model on each value change',
          args: {
            value: {
              type: 'string | null | string[]',
              description: 'The selected date, or dates for the multiple modes',
            },
          },
        },
      } satisfies EmitRecord<keyof BDatepickerEmits | 'update:model-value'>,
      slots: {
        default: {
          description: 'Content of the trigger button when `trigger="button"`',
          scope: {},
        },
        icon: {
          description: 'Icon shown in the trigger button when `trigger="button"`',
          scope: {},
        },
      } satisfies SlotRecord<keyof BDatepickerSlots>,
    },
  }),
}
