import {computed, ComputedRef} from 'vue'

import type {Alignment} from '../types'

export default (props: {align: Alignment}): ComputedRef<string> =>
  computed(() => {
    if (props.align === 'center') {
      return 'justify-content-center'
    } else if (props.align === 'end') {
      return 'justify-content-end'
    } else if (props.align === 'start') {
      return 'justify-content-start'
    }
    return 'justify-content-start'
  })
