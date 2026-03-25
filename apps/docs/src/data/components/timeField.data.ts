import type { BTimeFieldEmits, BTimeFieldProps, BTimeFieldSlots } from 'bootstrap-vue-next'
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
    BTimeField: {
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
          type: 'TimeValue',
          default: undefined,
          description: 'The default value for the time field',
        },
        dir: {
          type: "'ltr' | 'rtl'",
          default: undefined,
          description:
            'The reading direction of the time field. If omitted, inherits globally from ConfigProvider or assumes LTR',
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
          type: 'TimeValue | null',
          default: 'null',
          description: 'The controlled value of the time field. Can be bound as v-model',
        },
        placeholder: {
          type: 'TimeValue',
          default: undefined,
          description:
            'The placeholder time, used to determine what time to display when no time is selected. Updates as the user navigates the field',
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
      } satisfies PropRecord<keyof BTimeFieldProps>,
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
              type: 'TimeValue | null',
              description: 'The current time value of the field',
            },
          },
        },
      } satisfies EmitRecord<keyof BTimeFieldEmits | 'update:model-value'>,
      slots: {
        default: {
          description:
            'Content to place in the time field. Receives segment data for custom rendering',
          scope: {
            modelValue: {
              type: 'TimeValue | undefined',
              description: 'The current time value',
            },
            segments: {
              type: '{part: SegmentPart; value: string}[]',
              description: 'The time field segment contents',
            },
            isInvalid: {
              type: 'boolean',
              description: 'Whether the current input is invalid',
            },
          },
        },
      } satisfies SlotRecord<keyof BTimeFieldSlots>,
    },
  }),
}
