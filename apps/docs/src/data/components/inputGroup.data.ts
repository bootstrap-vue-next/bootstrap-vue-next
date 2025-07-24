import type {BInputGroupSlots, BInputGroupTextSlots, BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference, SlotsReference} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BInputGroup: {
      sourcePath: '/BInputGroup/BInputGroup.vue',
      props: {
        ...pick(buildCommonProps(buildCommonProps()), ['id', 'size', 'tag']),
        append: {
          type: 'string',
          default: undefined,
          description: 'Text to append to the input group',
        },
        prepend: {
          type: 'string',
          default: undefined,
          description: 'Text to prepend to the input group',
        },
      } satisfies Record<keyof BvnComponentProps['BInputGroup'], PropertyReference>,
      emits: {},
      slots: {
        append: {
          description: 'Content to append to the input group',
        },
        default: {
          description: 'Content to place in the input group',
        },
        prepend: {
          description: 'Content to prepend to the input group',
        },
      }satisfies Record<keyof BInputGroupSlots, SlotsReference>,
    },
    BInputGroupText: {
      sourcePath: '/BInputGroup/BInputGroupText.vue',
      props: {
        ...pick(buildCommonProps(buildCommonProps()), ['tag']),
        text: {
          type: 'string',
          default: undefined,
          description: 'Content to place in the input group text',
        },
      } satisfies Record<keyof BvnComponentProps['BInputGroupText'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the input group text',
        },
      }satisfies Record<keyof BInputGroupTextSlots, SlotsReference>,
    },
  }),
}
