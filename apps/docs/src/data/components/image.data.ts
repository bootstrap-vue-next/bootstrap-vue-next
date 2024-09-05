import type {ComponentReference} from '../../types'
import {imageProps} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BImg',
      props: {
        '': imageProps,
      },
      emits: [],
      slots: [],
    },
  ],
}
