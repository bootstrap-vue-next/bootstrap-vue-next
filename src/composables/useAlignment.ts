/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {computed, ComputedRef} from 'vue'

import Alignment from '../types/Alignment'

function alignment(props: any): ComputedRef<string> {
  return computed(() => {
    if (props.align === 'center') {
      return 'justify-content-center'
    } else if (props.align === 'end') {
      return 'justify-content-end'
    } else if (props.align === 'start') {
      return 'justify-content-start'
    }
    return 'justify-content-start'
  })
}

export default alignment
