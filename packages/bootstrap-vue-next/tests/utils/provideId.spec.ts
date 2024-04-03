/* eslint-disable vue/one-component-per-file */
import {mount} from '@vue/test-utils'
import getId, {provideGetId} from '../../src/utils/getId'
import {describe, expect, it} from 'vitest'
import {defineComponent, h} from 'vue'

export function useSetupWithProvideGetId<V>(setup: () => V) {
  const Comp = defineComponent({
    setup,
    render() {
      return h('div')
    },
  })

  const Provider = defineComponent({
    components: {Comp},
    setup() {
      provideGetId(() => `${Math.random().toString().slice(2, 8)}__PROVIDED__`)
    },
    template: '<Comp />',
  })

  return mount(Provider, {slots: {default: Comp}})
}

describe('provideGetId', () => {
  it('returns something', () => {
    useSetupWithProvideGetId(() => {
      const value = getId()
      expect(value).toBeDefined()
    })
  })

  it('returns a string', () => {
    useSetupWithProvideGetId(() => {
      const value = getId()
      expect(typeof value === 'string').toBe(true)
    })
  })

  it('string contains __PROVIDED__', () => {
    useSetupWithProvideGetId(() => {
      const value = getId()
      expect(value).toContain('__PROVIDED__')
    })
  })

  it('string contains __PROVIDED_____BV_{suffix}__ when suffix is defined', () => {
    useSetupWithProvideGetId(() => {
      const value = getId('foobar')
      expect(value).toContain('__PROVIDED_____BV_foobar__')
    })
  })

  it('string contains __PROVIDED_____BV___ when not suffix', () => {
    useSetupWithProvideGetId(() => {
      const value = getId()
      expect(value).toContain('__PROVIDED_____BV___')
    })
  })
})
