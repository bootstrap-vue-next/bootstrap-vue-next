import type { BAspectProps, BAspectSlots } from 'bootstrap-vue-next'
import { type ComponentReference, type PropRecord, type SlotRecord, StyleKind } from '../../types'
import { pick } from '../../utils/objectUtils'
import { buildCommonProps } from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BAspect: {
      styleSpec: { kind: StyleKind.BsvnClass },
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'div',
            },
          }),
          ['tag'],
        ),
        aspect: {
          type: 'string | number',
          default: undefined,
          description: 'Aspect ratio of the container, eg: 16/9, 16:9, 16x9, 1.77',
        },
      } satisfies PropRecord<keyof BAspectProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the aspect container.',
        },
      } satisfies SlotRecord<keyof BAspectSlots>,
    },
  }),
}
