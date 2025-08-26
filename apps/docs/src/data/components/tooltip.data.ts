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
    BPopover: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tooltip, .popover'},
      sourcePath: '/BTooltip.vue',
      props: {
        ...popoverSharedProps('popover'),
        interactive: {
          type: 'boolean',
          default: false,
          description:
            'Whether the tooltip is interactive (can be hovered/focused without closing).',
        },
      } satisfies PropRecord<keyof BTooltipProps>,
      emits: popoverSharedEmits('popover') satisfies EmitRecord<
        keyof BTooltipEmits | 'update:model-value'
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
      } satisfies SlotRecord<keyof BTooltipSlots>,
    },
  }),
}
