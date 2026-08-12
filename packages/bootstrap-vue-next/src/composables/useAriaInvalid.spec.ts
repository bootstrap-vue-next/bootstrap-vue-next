import {describe, expect, it} from 'vitest'
import {ref} from 'vue'
import {useAriaInvalid} from './useAriaInvalid'

describe('useAriaInvalid', () => {
  it('returns "true" when ariaInvalid is true', () => {
    const result = useAriaInvalid(true, null)
    expect(result.value).toBe('true')
  })

  it('returns the string value when ariaInvalid is a string', () => {
    const result = useAriaInvalid('grammar', null)
    expect(result.value).toBe('grammar')
  })

  it('returns "true" when state is false and ariaInvalid is undefined', () => {
    const result = useAriaInvalid(undefined, false)
    expect(result.value).toBe('true')
  })

  it('returns "false" when ariaInvalid is explicitly false', () => {
    const result = useAriaInvalid(false, null)
    expect(result.value).toBe('false')
  })

  it('returns undefined when ariaInvalid is undefined and state is null', () => {
    const result = useAriaInvalid(undefined, null)
    expect(result.value).toBeUndefined()
  })

  it('returns undefined when ariaInvalid is undefined and state is true', () => {
    const result = useAriaInvalid(undefined, true)
    expect(result.value).toBeUndefined()
  })

  it('is reactive to ref changes', () => {
    const ariaInvalid = ref<boolean | string | undefined>(undefined)
    const state = ref<boolean | null>(null)

    const result = useAriaInvalid(ariaInvalid, state)
    expect(result.value).toBeUndefined()

    state.value = false
    expect(result.value).toBe('true')

    ariaInvalid.value = true
    expect(result.value).toBe('true')

    ariaInvalid.value = 'spelling'
    expect(result.value).toBe('spelling')
  })
})
