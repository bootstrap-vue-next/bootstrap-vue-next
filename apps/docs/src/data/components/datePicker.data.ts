import type {
  BDatePickerEmits,
  BDatePickerProps,
  BDatePickerSlots,
  BDateRangePickerEmits,
  BDateRangePickerProps,
  BDateRangePickerSlots,
} from 'bootstrap-vue-next'
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
    BDatePicker: {
      styleSpec: { kind: StyleKind.BsvnClass },
      props: {
        ...pick(buildCommonProps(), [
          'disabled',
          'id',
          'name',
          'readonly',
          'required',
          'size',
          'state',
        ]),
        closeOnSelect: {
          type: 'boolean',
          default: 'true',
          description: 'Whether or not to close the popover when a date is selected',
        },
        defaultOpen: {
          type: 'boolean',
          default: 'false',
          description: 'Whether the popover is open by default',
        },
        defaultPlaceholder: {
          type: 'DateValue',
          default: undefined,
          description: 'The default placeholder date displayed when no date is selected',
        },
        defaultValue: {
          type: 'DateValue',
          default: undefined,
          description: 'The default value for the date picker',
        },
        dir: {
          type: "'ltr' | 'rtl'",
          default: undefined,
          description:
            'The reading direction of the date picker. If omitted, inherits globally from ConfigProvider or assumes LTR',
        },
        fixedWeeks: {
          type: 'boolean',
          default: 'false',
          description:
            'Whether the calendar always displays 6 weeks, filling extra days from adjacent months',
        },
        granularity: {
          type: "'day' | 'hour' | 'minute' | 'second'",
          default: undefined,
          description:
            'The granularity to use for formatting dates. The field will render segments for each part of the date up to and including the specified granularity',
        },
        hideTimeZone: {
          type: 'boolean',
          default: undefined,
          description: 'Whether or not to hide the time zone segment of the field',
        },
        hourCycle: {
          type: '12 | 24',
          default: undefined,
          description: 'The hour cycle used for formatting times. Defaults to the local preference',
        },
        isDateDisabled: {
          type: 'Matcher',
          default: undefined,
          description: 'A function that returns whether or not a date is disabled',
        },
        isDateUnavailable: {
          type: 'Matcher',
          default: undefined,
          description: 'A function that returns whether or not a date is unavailable',
        },
        locale: {
          type: 'string',
          default: undefined,
          description: 'The locale to use for formatting dates',
        },
        maxValue: {
          type: 'DateValue',
          default: undefined,
          description: 'The maximum date that can be selected',
        },
        minValue: {
          type: 'DateValue',
          default: undefined,
          description: 'The minimum date that can be selected',
        },
        modal: {
          type: 'boolean',
          default: 'false',
          description: 'Whether the popover is modal',
        },
        modelValue: {
          type: 'DateValue | null',
          default: 'null',
          description: 'The controlled value of the date picker. Can be bound as v-model',
        },
        numberOfMonths: {
          type: 'number',
          default: '1',
          description: 'The number of months to display in the calendar',
        },
        open: {
          type: 'boolean',
          default: 'false',
          description: 'The controlled open state of the popover. Can be bound as v-model:open',
        },
        pagedNavigation: {
          type: 'boolean',
          default: 'false',
          description:
            'Whether to use paged navigation for the calendar, moving by numberOfMonths at a time',
        },
        placeholder: {
          type: 'DateValue',
          default: undefined,
          description:
            'The placeholder date, used to determine what month to display when no date is selected',
        },
        preventDeselect: {
          type: 'boolean',
          default: 'false',
          description: 'Whether to prevent deselecting the selected date',
        },
        step: {
          type: 'DateStep',
          default: undefined,
          description: 'The stepping interval for the date field segments. Defaults to 1',
        },
        weekStartsOn: {
          type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
          default: undefined,
          description: 'The day of the week the calendar starts on. 0 is Sunday, 6 is Saturday',
        },
        weekdayFormat: {
          type: "'narrow' | 'short' | 'long'",
          default: undefined,
          description: 'The format to use for the weekday headers in the calendar',
        },
      } satisfies PropRecord<keyof BDatePickerProps>,
      emits: {
        'update:placeholder': {
          description: 'Emitted when the placeholder value changes',
          args: {
            value: {
              type: 'DateValue',
              description: 'The new placeholder value',
            },
          },
        },
        'update:model-value': {
          description: 'Emitted to update the v-model on each value change',
          args: {
            value: {
              type: 'DateValue | null',
              description: 'The current date value of the picker',
            },
          },
        },
        'update:open': {
          description: 'Emitted when the popover open state changes',
          args: {
            value: {
              type: 'boolean',
              description: 'Whether the popover is open',
            },
          },
        },
      } satisfies EmitRecord<keyof BDatePickerEmits | 'update:model-value' | 'update:open'>,
      slots: {
        field: {
          description: 'Custom content for the date field area',
          scope: {
            segments: {
              type: '{part: SegmentPart; value: string}[]',
              description: 'The date field segment contents',
            },
          },
        },
        calendar: {
          description: 'Custom content for the calendar dropdown',
          scope: {
            weekDays: {
              type: 'string[]',
              description: 'The formatted weekday headers',
            },
            grid: {
              type: 'Grid[]',
              description: 'The calendar grid data for each month',
            },
          },
        },
        'trigger-icon': {
          description: 'Custom icon for the date picker trigger button',
        },
        'prev-icon': {
          description: 'Custom icon for the previous month navigation button',
        },
        'next-icon': {
          description: 'Custom icon for the next month navigation button',
        },
      } satisfies SlotRecord<keyof BDatePickerSlots>,
    },
    BDateRangePicker: {
      sourcePath: '/BDatePicker/BDateRangePicker.vue',
      styleSpec: { kind: StyleKind.BsvnClass },
      props: {
        ...pick(buildCommonProps(), [
          'disabled',
          'id',
          'name',
          'readonly',
          'required',
          'size',
          'state',
        ]),
        allowNonContiguousRanges: {
          type: 'boolean',
          default: 'false',
          description: 'Whether to allow non-contiguous date ranges',
        },
        closeOnSelect: {
          type: 'boolean',
          default: 'true',
          description: 'Whether or not to close the popover when a date range is selected',
        },
        defaultOpen: {
          type: 'boolean',
          default: 'false',
          description: 'Whether the popover is open by default',
        },
        defaultPlaceholder: {
          type: 'DateValue',
          default: undefined,
          description: 'The default placeholder date displayed when no date is selected',
        },
        defaultValue: {
          type: 'DateRange',
          default: undefined,
          description: 'The default value for the date range picker',
        },
        dir: {
          type: "'ltr' | 'rtl'",
          default: undefined,
          description:
            'The reading direction of the date range picker. If omitted, inherits globally from ConfigProvider or assumes LTR',
        },
        fixedDate: {
          type: "'start' | 'end'",
          default: undefined,
          description:
            'Which end of the range to keep fixed when selecting. When set, only the opposite end can be changed',
        },
        fixedWeeks: {
          type: 'boolean',
          default: 'false',
          description:
            'Whether the calendar always displays 6 weeks, filling extra days from adjacent months',
        },
        granularity: {
          type: "'day' | 'hour' | 'minute' | 'second'",
          default: undefined,
          description:
            'The granularity to use for formatting dates. The field will render segments for each part of the date up to and including the specified granularity',
        },
        hideTimeZone: {
          type: 'boolean',
          default: undefined,
          description: 'Whether or not to hide the time zone segment of the field',
        },
        hourCycle: {
          type: '12 | 24',
          default: undefined,
          description: 'The hour cycle used for formatting times. Defaults to the local preference',
        },
        isDateDisabled: {
          type: 'Matcher',
          default: undefined,
          description: 'A function that returns whether or not a date is disabled',
        },
        isDateHighlightable: {
          type: 'Matcher',
          default: undefined,
          description:
            'A function that returns whether or not a date should be highlighted in the range',
        },
        isDateUnavailable: {
          type: 'Matcher',
          default: undefined,
          description: 'A function that returns whether or not a date is unavailable',
        },
        locale: {
          type: 'string',
          default: undefined,
          description: 'The locale to use for formatting dates',
        },
        maxValue: {
          type: 'DateValue',
          default: undefined,
          description: 'The maximum date that can be selected',
        },
        maximumDays: {
          type: 'number',
          default: undefined,
          description: 'The maximum number of days that can be selected in a range',
        },
        minValue: {
          type: 'DateValue',
          default: undefined,
          description: 'The minimum date that can be selected',
        },
        modal: {
          type: 'boolean',
          default: 'false',
          description: 'Whether the popover is modal',
        },
        modelValue: {
          type: 'DateRange | null',
          default: 'null',
          description: 'The controlled value of the date range picker. Can be bound as v-model',
        },
        numberOfMonths: {
          type: 'number',
          default: '1',
          description: 'The number of months to display in the calendar',
        },
        open: {
          type: 'boolean',
          default: 'false',
          description: 'The controlled open state of the popover. Can be bound as v-model:open',
        },
        pagedNavigation: {
          type: 'boolean',
          default: 'false',
          description:
            'Whether to use paged navigation for the calendar, moving by numberOfMonths at a time',
        },
        placeholder: {
          type: 'DateValue',
          default: undefined,
          description:
            'The placeholder date, used to determine what month to display when no date is selected',
        },
        preventDeselect: {
          type: 'boolean',
          default: 'false',
          description: 'Whether to prevent deselecting the selected date range',
        },
        step: {
          type: 'DateStep',
          default: undefined,
          description: 'The stepping interval for the date field segments. Defaults to 1',
        },
        weekStartsOn: {
          type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
          default: undefined,
          description: 'The day of the week the calendar starts on. 0 is Sunday, 6 is Saturday',
        },
        weekdayFormat: {
          type: "'narrow' | 'short' | 'long'",
          default: undefined,
          description: 'The format to use for the weekday headers in the calendar',
        },
      } satisfies PropRecord<keyof BDateRangePickerProps>,
      emits: {
        'update:placeholder': {
          description: 'Emitted when the placeholder value changes',
          args: {
            value: {
              type: 'DateValue',
              description: 'The new placeholder value',
            },
          },
        },
        'update:startValue': {
          description: 'Emitted when the start value of the range changes',
          args: {
            value: {
              type: 'DateValue | undefined',
              description: 'The start date value',
            },
          },
        },
        'update:model-value': {
          description: 'Emitted to update the v-model on each value change',
          args: {
            value: {
              type: 'DateRange | null',
              description: 'The current date range value of the picker',
            },
          },
        },
        'update:open': {
          description: 'Emitted when the popover open state changes',
          args: {
            value: {
              type: 'boolean',
              description: 'Whether the popover is open',
            },
          },
        },
      } satisfies EmitRecord<keyof BDateRangePickerEmits | 'update:model-value' | 'update:open'>,
      slots: {
        field: {
          description: 'Custom content for the date range field area',
          scope: {
            segments: {
              type: '{start: {part: SegmentPart; value: string}[]; end: {part: SegmentPart; value: string}[]}',
              description: 'The date range field segment contents for start and end',
            },
          },
        },
        calendar: {
          description: 'Custom content for the calendar dropdown',
          scope: {
            weekDays: {
              type: 'string[]',
              description: 'The formatted weekday headers',
            },
            grid: {
              type: 'Grid[]',
              description: 'The calendar grid data for each month',
            },
          },
        },
        'trigger-icon': {
          description: 'Custom icon for the date range picker trigger button',
        },
        'prev-icon': {
          description: 'Custom icon for the previous month navigation button',
        },
        'next-icon': {
          description: 'Custom icon for the next month navigation button',
        },
      } satisfies SlotRecord<keyof BDateRangePickerSlots>,
    },
  }),
}
