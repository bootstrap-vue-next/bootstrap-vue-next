import type {BListGroupItemSlots, BListGroupSlots, BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference, SlotsReference} from '../../types'
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
            'When set, renders the list group horizontally rather than the default vertical', // TODO grammar check (should say "default of vertical" instead of "default of vertical" for clarity)
        },
        numbered: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the list group items with a number on the left side',
        },
      } satisfies Record<keyof BvnComponentProps['BListGroup'], PropertyReference>,
      slots: {
        default: {
          description: 'Content (items) to place in the list group',
        },
      } satisfies Record<keyof BListGroupSlots, SlotsReference>,
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
      } satisfies Record<
        Exclude<keyof BvnComponentProps['BListGroupItem'], keyof typeof linkProps>,
        PropertyReference
      >,
      slots: {
        default: {
          description: 'Content to place in the list group item',
        },
      } satisfies Record<keyof BListGroupItemSlots, SlotsReference>,
    },
  }),
}
