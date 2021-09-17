import getID from '../utils/getID'
import {computed, ComputedRef} from 'vue'

function useId(id?: string, suffix?: string): ComputedRef<string> {
  return computed(() => id || getID(suffix))
}

export default useId
