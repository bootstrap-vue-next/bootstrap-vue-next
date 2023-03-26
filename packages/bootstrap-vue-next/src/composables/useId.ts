import {getId} from '../utils'
import {computed, type ComputedRef, type Ref} from 'vue'

export default (id?: Ref<string | undefined>, suffix?: string): ComputedRef<string> =>
  computed(() => id?.value || getId(suffix))
