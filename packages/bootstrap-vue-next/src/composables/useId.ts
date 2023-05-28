import {getId} from '../utils'
import {computed, type ComputedRef, type MaybeRefOrGetter, toValue} from 'vue'

export default (id?: MaybeRefOrGetter<string | undefined>, suffix?: string): ComputedRef<string> =>
  computed(() => toValue(id) || getId(suffix))
