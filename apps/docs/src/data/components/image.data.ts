import {imageProps} from '../../utils/imageProps'
import {type ComponentReference, StyleKind} from '../../types'

export default {
  load: (): ComponentReference => ({
    BImg: {
      styleSpec: {kind: StyleKind.BsvnClass},
      props: imageProps,
      emits: {},
      slots: {},
    },
  }),
}
