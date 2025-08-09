import type {BButtonGroupProps, BButtonGroupSlots} from 'bootstrap-vue-next'
import {type ComponentReference, type PropRecord, type SlotRecord, StyleKind} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BButtonGroup: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn-group'},
      sourcePath: '/BButton/BButtonGroup.vue',
      props: {
        ...pick(buildCommonProps(), ['ariaLabel', 'size', 'tag']),
        vertical: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the button group in vertical mode',
        },
      } satisfies PropRecord<keyof BButtonGroupProps>,
      slots: {
        default: {
          description: 'Content (buttons) to place in the button group',
        },
      } satisfies SlotRecord<keyof BButtonGroupSlots>,
    },
  }),
}
