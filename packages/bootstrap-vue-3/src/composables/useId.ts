import getID from '../utils/getID'
import {computed, ComputedRef} from 'vue'

export default (id?: string, suffix?: string): ComputedRef<string> =>
  computed(() => id || getID(suffix))
