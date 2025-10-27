import {linkProps} from '../../utils/linkProps'
import {type ComponentReference, type EmitRecord, type SlotRecord, StyleKind} from '../../types'
import type {BLinkEmits, BLinkSlots} from 'bootstrap-vue-next'

export default {
  load: (): ComponentReference => ({
    BLink: {
      styleSpec: {kind: StyleKind.Tag, value: 'a, router-link'},

      props: linkProps,
      emits: {
        click: {
          description: 'Emitted when the link is clicked',
          args: {
            value: {
              type: 'MouseEvent',
              description: 'Native click event',
            },
          },
        },
      } satisfies EmitRecord<keyof BLinkEmits>,
      slots: {
        default: {
          description: 'Content to place in the link',
        },
      } satisfies SlotRecord<keyof BLinkSlots>,
    },
  }),
}
