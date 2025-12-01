import type {BTooltipEmits, BTooltipProps, BTooltipSlots} from 'bootstrap-vue-next'
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
    BTooltip: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tooltip, .popover'},
      props: {
        ...popoverSharedProps('tooltip'),
        interactive: {
          type: 'boolean',
          default: false,
          description:
            'Whether the tooltip is interactive (can be hovered/focused without closing).',
        },
      } satisfies PropRecord<keyof BTooltipProps>,
      emits: popoverSharedEmits('tooltip') satisfies EmitRecord<
        keyof BTooltipEmits | 'update:model-value'
      >,
      slots: {
        title: {
          description: 'Content for the tooltip title.',
          scope: showHideSlotsData,
        },
        default: {
          description: 'Content for the tooltip body.',
          scope: showHideSlotsData,
        },
        target: {
          description: 'Content for the target or trigger element.',
          scope: showHideSlotsData,
        },
      } satisfies SlotRecord<keyof BTooltipSlots>,
    },
  }),
}
