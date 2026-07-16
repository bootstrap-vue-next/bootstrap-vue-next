import {describe, expect, it} from 'vitest'
import {ref} from 'vue'
import {useId} from './useId'

describe('useId', () => {
  it('returns provided id when given', () => {
    const result = useId('my-custom-id')
    expect(result.value).toBe('my-custom-id')
  })

  it('generates an id with prefix when no id provided', () => {
    const result = useId(undefined, 'button')
    expect(result.value).toContain('BootstrapVueNext__')
    expect(result.value).toContain('button')
  })

  it('generates an id without suffix when neither id nor suffix provided', () => {
    const result = useId()
    expect(result.value).toContain('BootstrapVueNext__')
  })

  it('is reactive to ref changes', () => {
    const id = ref<string | undefined>('initial-id')
    const result = useId(id)

    expect(result.value).toBe('initial-id')

    id.value = 'updated-id'
    expect(result.value).toBe('updated-id')
  })

  it('falls back to generated id when ref changes to undefined', () => {
    const id = ref<string | undefined>('initial-id')
    const result = useId(id, 'test')

    expect(result.value).toBe('initial-id')

    id.value = undefined
    expect(result.value).toContain('BootstrapVueNext__')
    expect(result.value).toContain('test')
  })

  it('returns empty string id when provided', () => {
    // Empty string is falsy, so it should fall back to generated
    const result = useId('', 'fallback')
    expect(result.value).toContain('BootstrapVueNext__')
  })
})
