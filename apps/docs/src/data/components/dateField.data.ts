import type {
  BDateFieldEmits,
  BDateFieldProps,
  BDateFieldSlots,
  BDateRangeFieldEmits,
  BDateRangeFieldProps,
  BDateRangeFieldSlots,
  BTimeRangeFieldEmits,
  BTimeRangeFieldProps,
  BTimeRangeFieldSlots,
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
    BDateField: {
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
        defaultPlaceholder: {
          type: 'DateValue',
          default: undefined,
          description: 'The default placeholder date displayed when no date is selected',
        },
        defaultValue: {
          type: 'DateValue',
          default: undefined,
          description: 'The default value for the date field',
        },
        dir: {
          type: "'ltr' | 'rtl'",
          default: undefined,
          description:
            'The reading direction of the date field. If omitted, inherits globally from ConfigProvider or assumes LTR',
        },
        granularity: {
          type: "'day' | 'hour' | 'minute' | 'second'",
          default: undefined,
          description:
            'The granularity to use for formatting dates. Defaults to day if a CalendarDate is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity',
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
        modelValue: {
          type: 'DateValue | null',
          default: 'null',
          description: 'The controlled value of the date field. Can be bound as v-model',
        },
        placeholder: {
          type: 'DateValue',
          default: undefined,
          description:
            'The placeholder date, used to determine what date to display when no date is selected. Updates as the user navigates the field',
        },
        step: {
          type: 'DateStep',
          default: undefined,
          description: 'The stepping interval for the date field segments. Defaults to 1',
        },
      } satisfies PropRecord<keyof BDateFieldProps>,
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
              description: 'The current date value of the field',
            },
          },
        },
      } satisfies EmitRecord<keyof BDateFieldEmits | 'update:model-value'>,
      slots: {
        default: {
          description:
            'Content to place in the date field. Receives segment data for custom rendering',
          scope: {
            modelValue: {
              type: 'DateValue | undefined',
              description: 'The current date value',
            },
            segments: {
              type: '{part: SegmentPart; value: string}[]',
              description: 'The date field segment contents',
            },
            isInvalid: {
              type: 'boolean',
              description: 'Whether the current input is invalid',
            },
          },
        },
      } satisfies SlotRecord<keyof BDateFieldSlots>,
    },
    BDateRangeField: {
      sourcePath: '/BDateField/BDateRangeField.vue',
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
        defaultPlaceholder: {
          type: 'DateValue',
          default: undefined,
          description: 'The default placeholder date displayed when no date is selected',
        },
        defaultValue: {
          type: 'DateRange',
          default: undefined,
          description: 'The default value for the date range field',
        },
        dir: {
          type: "'ltr' | 'rtl'",
          default: undefined,
          description:
            'The reading direction of the date range field. If omitted, inherits globally from ConfigProvider or assumes LTR',
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
        modelValue: {
          type: 'DateRange | null',
          default: 'null',
          description: 'The controlled value of the date range field. Can be bound as v-model',
        },
        placeholder: {
          type: 'DateValue',
          default: undefined,
          description:
            'The placeholder date, used to determine what date to display when no date is selected',
        },
        step: {
          type: 'DateStep',
          default: undefined,
          description: 'The stepping interval for the date field segments. Defaults to 1',
        },
      } satisfies PropRecord<keyof BDateRangeFieldProps>,
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
              type: 'DateRange | null',
              description: 'The current date range value of the field',
            },
          },
        },
      } satisfies EmitRecord<keyof BDateRangeFieldEmits | 'update:model-value'>,
      slots: {
        default: {
          description:
            'Content to place in the date range field. Receives segment data for custom rendering',
          scope: {
            modelValue: {
              type: 'DateRange | null',
              description: 'The current date range value',
            },
            segments: {
              type: '{start: {part: SegmentPart; value: string}[]; end: {part: SegmentPart; value: string}[]}',
              description: 'The date range field segment contents for start and end',
            },
            isInvalid: {
              type: 'boolean',
              description: 'Whether the current input is invalid',
            },
          },
        },
      } satisfies SlotRecord<keyof BDateRangeFieldSlots>,
    },
    BTimeRangeField: {
      sourcePath: '/BDateField/BTimeRangeField.vue',
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
        defaultPlaceholder: {
          type: 'TimeValue',
          default: undefined,
          description: 'The default placeholder time displayed when no time is selected',
        },
        defaultValue: {
          type: 'TimeRange',
          default: undefined,
          description: 'The default value for the time range field',
        },
        dir: {
          type: "'ltr' | 'rtl'",
          default: undefined,
          description:
            'The reading direction of the time range field. If omitted, inherits globally from ConfigProvider or assumes LTR',
        },
        granularity: {
          type: "'hour' | 'minute' | 'second'",
          default: undefined,
          description:
            'The granularity to use for formatting times. Defaults to minute. The field will render segments for each part of the time up to and including the specified granularity',
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
        isTimeUnavailable: {
          type: 'Matcher',
          default: undefined,
          description: 'A function that returns whether or not a time is unavailable',
        },
        locale: {
          type: 'string',
          default: undefined,
          description: 'The locale to use for formatting times',
        },
        maxValue: {
          type: 'TimeValue',
          default: undefined,
          description: 'The maximum time that can be selected',
        },
        minValue: {
          type: 'TimeValue',
          default: undefined,
          description: 'The minimum time that can be selected',
        },
        modelValue: {
          type: 'TimeRange | null',
          default: 'null',
          description: 'The controlled value of the time range field. Can be bound as v-model',
        },
        placeholder: {
          type: 'TimeValue',
          default: undefined,
          description:
            'The placeholder time, used to determine what time to display when no time is selected',
        },
        step: {
          type: 'DateStep',
          default: undefined,
          description: 'The stepping interval for the time field segments. Defaults to 1',
        },
        stepSnapping: {
          type: 'boolean',
          default: 'false',
          description:
            'Whether to enforce snapping the value to the nearest step increment after input',
        },
      } satisfies PropRecord<keyof BTimeRangeFieldProps>,
      emits: {
        'update:placeholder': {
          description: 'Emitted when the placeholder value changes',
          args: {
            value: {
              type: 'TimeValue',
              description: 'The new placeholder value',
            },
          },
        },
        'update:model-value': {
          description: 'Emitted to update the v-model on each value change',
          args: {
            value: {
              type: 'TimeRange | null',
              description: 'The current time range value of the field',
            },
          },
        },
      } satisfies EmitRecord<keyof BTimeRangeFieldEmits | 'update:model-value'>,
      slots: {
        default: {
          description:
            'Content to place in the time range field. Receives segment data for custom rendering',
          scope: {
            modelValue: {
              type: 'TimeRange | undefined',
              description: 'The current time range value',
            },
            segments: {
              type: '{start: {part: SegmentPart; value: string}[]; end: {part: SegmentPart; value: string}[]}',
              description: 'The time range field segment contents for start and end',
            },
            isInvalid: {
              type: 'boolean',
              description: 'Whether the current input is invalid',
            },
          },
        },
      } satisfies SlotRecord<keyof BTimeRangeFieldSlots>,
    },
  }),
}
