import type {
  BListGroupItemProps,
  BListGroupItemSlots,
  BListGroupProps,
  BListGroupSlots,
} from 'bootstrap-vue-next'
import type {ComponentReference, PropRecord, SlotRecord} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'
import type {linkProps} from 'src/utils/linkProps'

export default {
  load: (): ComponentReference => ({
    BListGroup: {
      sourcePath: '/BListGroup/BListGroup.vue',
      props: {
        ...pick(buildCommonProps(), ['tag']),
        flush: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders a flush list group with no left and right borders',
        },
        horizontal: {
          type: 'boolean | Breakpoint',
          default: false, // TODO item not in string format
          description:
            'When set, renders the list group horizontally rather than vertically',
        },
        numbered: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the list group items with a number on the left side',
        },
      } satisfies PropRecord<keyof BListGroupProps>,
      slots: {
        default: {
          description: 'Content (items) to place in the list group',
        },
      } satisfies SlotRecord<keyof BListGroupSlots>,
    },
    BListGroupItem: {
      sourcePath: '/BListGroup/BListGroupItem.vue',
      props: {
        ...pick(buildCommonProps(), ['tag']),
        action: {
          type: 'boolean',
          default: false, // TODO item not in string format
          // TODO missing description
        },
        button: {
          type: 'boolean',
          default: false, // TODO item not in string format
          // TODO missing description
        },
      } satisfies PropRecord<Exclude<keyof BListGroupItemProps, keyof typeof linkProps>>,
      slots: {
        default: {
          description: 'Content to place in the list group item',
        },
      } satisfies SlotRecord<keyof BListGroupItemSlots>,
    },
  }),
}
