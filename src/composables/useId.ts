import getID from '../utils/getID'
import {computed, ComputedRef} from 'vue'

function useId(id?: string, suffix?: string): ComputedRef<string> {
  const computedId = computed(() => id || getID(suffix))

  return computedId
}

export default useId
