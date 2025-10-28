import type {BSpinnerProps, BSpinnerSlots} from 'bootstrap-vue-next'
import {type ComponentReference, type PropRecord, type SlotRecord, StyleKind} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BSpinner: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.spinner-*'},
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'span',
            },
          }),
          ['role', 'tag', 'variant']
        ),
        label: {
          type: 'string',
          default: undefined,
          description: 'Text content for the visually-hidden label.',
        },
        small: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Renders a smaller spinner suitable for placement in buttons.',
        },
        type: {
          type: 'SpinnerType',
          default: 'border',
          description: "Sets the spinner type. Supported types are 'border' and 'grow'.",
        },
      } satisfies PropRecord<keyof BSpinnerProps>,
      emits: {},
      slots: {
        label: {
          description: 'Content for the visually hidden label.',
        },
      } satisfies SlotRecord<keyof BSpinnerSlots>,
    },
  }),
}
