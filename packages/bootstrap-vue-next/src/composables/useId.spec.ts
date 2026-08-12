import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import {defineComponent, h, ref, type MaybeRefOrGetter} from 'vue'
import {useId} from './useId'

const renderUseId = (id?: MaybeRefOrGetter<string | undefined>, suffix?: string) => {
  let result: ReturnType<typeof useId> | undefined
  const TestComponent = defineComponent({
    setup() {
      result = useId(id, suffix)
      return () => h('div')
    },
  })

  mount(TestComponent)

  return result!
}

describe('useId', () => {
  it('returns provided id when given', () => {
    const result = renderUseId('my-custom-id')
    expect(result.value).toBe('my-custom-id')
  })

  it('generates an id with prefix when no id provided', () => {
    const result = renderUseId(undefined, 'button')
    expect(result.value).toContain('BootstrapVueNext__')
    expect(result.value).toContain('button')
  })

  it('generates an id without suffix when neither id nor suffix provided', () => {
    const result = renderUseId()
    expect(result.value).toContain('BootstrapVueNext__')
  })

  it('is reactive to ref changes', () => {
    const id = ref<string | undefined>('initial-id')
    const result = renderUseId(id)

    expect(result.value).toBe('initial-id')

    id.value = 'updated-id'
    expect(result.value).toBe('updated-id')
  })

  it('falls back to generated id when ref changes to undefined', () => {
    const id = ref<string | undefined>('initial-id')
    const result = renderUseId(id, 'test')

    expect(result.value).toBe('initial-id')

    id.value = undefined
    expect(result.value).toContain('BootstrapVueNext__')
    expect(result.value).toContain('test')
  })

  it('returns empty string id when provided', () => {
    // Empty string is falsy, so it should fall back to generated
    const result = renderUseId('', 'fallback')
    expect(result.value).toContain('BootstrapVueNext__')
  })
})
