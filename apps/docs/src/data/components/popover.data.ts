import type {BPopoverEmits, BPopoverProps, BPopoverSlots} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  type EmitRecord,
  type PropRecord,
  type SlotRecord,
  StyleKind,
} from '../../types'
import {showHideSlotsData} from '../../utils/showHideData'
import {popoverSharedEmits, popoverSharedProps} from '../../utils/popover-shared'

export default {
  load: (): ComponentReference => ({
    BPopover: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tooltip, .popover'},
      props: popoverSharedProps('popover') satisfies PropRecord<keyof BPopoverProps>,
      emits: popoverSharedEmits('popover') satisfies EmitRecord<
        keyof BPopoverEmits | 'update:model-value'
      >,
      slots: {
        title: {
          description: 'Content for the popover title.',
          scope: showHideSlotsData,
        },
        default: {
          description: 'Content for the popover body.',
          scope: showHideSlotsData,
        },
        target: {
          description: 'Content for the target or trigger element.',
          scope: showHideSlotsData,
        },
      } satisfies SlotRecord<keyof BPopoverSlots>,
    },
  }),
}
