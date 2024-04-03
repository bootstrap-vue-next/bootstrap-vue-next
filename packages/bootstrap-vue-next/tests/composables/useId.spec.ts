import {useSetup} from '../../tests/utils'
import {useId} from '../../src/composables'
import {describe, expect, it} from 'vitest'
import {reactive} from 'vue'

describe('useId blackbox test', () => {
  it('returns id value when id is defined', () => {
    useSetup(() => {
      const props = reactive({id: 'foo'})
      const value = useId(() => props.id)
      expect(value.value).toBe('foo')
    })
  })

  it('returns something when id is undefined', () => {
    useSetup(() => {
      const value = useId()
      expect(value.value).toBeDefined()
    })
  })

  it('something returned when undefined contains suffix when suffix', () => {
    useSetup(() => {
      const value = useId(undefined, 'foobar')
      expect(value.value).toContain('foobar')
    })
  })
})
