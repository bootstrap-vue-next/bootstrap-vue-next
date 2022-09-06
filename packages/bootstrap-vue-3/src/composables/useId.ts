import {getId} from '../utils'
import {computed, ComputedRef, Ref} from 'vue'

/**
 * @param id
 * @param suffix
 * @returns
 */
export default (id?: Ref<string | undefined>, suffix?: string): ComputedRef<string> =>
  computed(() => id?.value || getId(suffix))
