import type {BButtonGroupSlots, BButtonToolbarProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropRecord, StyleKind} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BButtonToolbar: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn-toolbar'},
      sourcePath: '/BButton/BButtonToolbar.vue',
      props: {
        ...pick(buildCommonProps(), ['ariaLabel', 'role']),
        justify: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups and dropdowns', // TODO grammar check (add comma after "input groups")
        },
      } satisfies PropRecord<keyof BButtonToolbarProps>,
      slots: {
        default: {
          description: 'Content to place in the button toolbar',
        },
      } satisfies PropRecord<keyof BButtonGroupSlots>,
    },
  }),
}
