import {computed, type MaybeRefOrGetter, toValue} from 'vue'

export default (value: MaybeRefOrGetter<boolean | null>) =>
  computed(() => {
    const resolvedValue = toValue(value)

    return resolvedValue === true ? 'is-valid' : resolvedValue === false ? 'is-invalid' : null
  })
