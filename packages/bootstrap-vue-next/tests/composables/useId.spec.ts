import {useId} from '../../src/composables'
import {describe, expect, it} from 'vitest'
import {reactive, toRef} from 'vue'

describe('useId blackbox test', () => {
  it('returns id value when id is defined', () => {
    const props = reactive({id: 'foo'})
    const value = useId(toRef(props, 'id'))
    expect(value.value).toBe('foo')
  })

  it('returns something when id is undefined', () => {
    const value = useId()
    expect(value.value).toBeDefined()
  })

  it('something returned when undefined contains suffix when suffix', () => {
    const value = useId(undefined, 'foobar')
    expect(value.value).toContain('foobar')
  })
})
