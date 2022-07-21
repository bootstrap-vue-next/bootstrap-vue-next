import {resolveBooleanish} from 'src/utils'
import {computed, ComputedRef} from 'vue'
import {Booleanish} from '../types'

export default (item: Booleanish): ComputedRef<boolean> => computed(() => resolveBooleanish(item))
