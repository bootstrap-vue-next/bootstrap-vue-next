import {getID} from '../utils'
import {computed, ComputedRef} from 'vue'

/**
 * @param id
 * @param suffix
 * @returns
 */
export default (id?: string, suffix?: string): ComputedRef<string> =>
  computed(() => id || getID(suffix))
