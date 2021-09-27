/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {computed, ComputedRef} from 'vue'

import Alignment from '../types/Alignment'

function alignment(props: any): ComputedRef<string> {
  const {align}: {align: Alignment} = props
  return computed(() => {
    if (align === 'center') {
      return 'justify-content-center'
    } else if (align === 'end') {
      return 'justify-content-end'
    } else if (align === 'start') {
      return 'justify-content-start'
    }
    return 'justify-content-start'
  })
}

export default alignment
