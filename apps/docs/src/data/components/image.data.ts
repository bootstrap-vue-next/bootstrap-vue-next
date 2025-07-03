import {imageProps} from '../../utils/imageProps'
import {type ComponentReference, StyleKind} from '../../types'

export default {
  load: (): ComponentReference => ({
    BImg: {
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BImg/BImg.vue',
      props: imageProps,
      emits: {
        load: {
          description: 'Fired when the image has finished loading',
          args: {
            load: {
              type: 'Event',
              description: 'The native load event',
            },
          },
        },
      },
      slots: {},
    },
  }),
}
