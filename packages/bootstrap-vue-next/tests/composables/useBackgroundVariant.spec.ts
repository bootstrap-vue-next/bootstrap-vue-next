import type {ColorVariant, TextColorVariant} from '../../src/types'
import {useBackgroundVariant} from '../../src/composables'
import {describe, expect, it} from 'vitest'
import {reactive} from 'vue'

describe('useBackgroundVariant blackbox test', () => {
  it('value to contain property value', () => {
    const backgroundVariant = useBackgroundVariant(() => ({
      bgVariant: 'danger',
      textVariant: 'danger',
      variant: 'danger',
    }))
    expect(backgroundVariant).toHaveProperty('value')
  })

  it('value returns text-bg-{type} when prop variant', () => {
    const backgroundVariant = useBackgroundVariant(() => ({
      bgVariant: null,
      textVariant: null,
      variant: 'danger',
    }))
    expect(backgroundVariant.value).toEqual({
      'text-bg-danger': true,
      'text-null': false,
      'bg-null': false,
    })
  })

  it('value returns bg-{type} when prop bgVariant', () => {
    const backgroundVariant = useBackgroundVariant(() => ({
      bgVariant: 'danger',
      textVariant: null,
      variant: null,
    }))
    expect(backgroundVariant.value).toEqual({
      'text-bg-null': false,
      'text-null': false,
      'bg-danger': true,
    })
  })

  it('value returns text-{type} when prop textVariant', () => {
    const backgroundVariant = useBackgroundVariant(() => ({
      bgVariant: null,
      textVariant: 'danger',
      variant: null,
    }))
    expect(backgroundVariant.value).toEqual({
      'text-bg-null': false,
      'text-danger': true,
      'bg-null': false,
    })
  })

  it('value returns text-{type} bg-{type} when prop textVariant & prop bgVariant', () => {
    const backgroundVariant = useBackgroundVariant(() => ({
      bgVariant: 'danger',
      textVariant: 'danger',
      variant: null,
    }))
    expect(backgroundVariant.value).toEqual({
      'text-bg-null': false,
      'text-danger': true,
      'bg-danger': true,
    })
  })

  it('value returns text-bg-{type} when everything is active, but prop variant takes priority over all', () => {
    const backgroundVariant = useBackgroundVariant(() => ({
      bgVariant: 'danger',
      textVariant: 'danger',
      variant: 'danger',
    }))
    expect(backgroundVariant.value).toEqual({
      'text-bg-danger': true,
      'text-danger': false,
      'bg-danger': false,
    })
  })

  it('value behaves reactively', () => {
    const react = reactive({
      bgVariant: 'danger' as ColorVariant | null,
      textVariant: 'danger' as TextColorVariant | null,
      variant: null as ColorVariant | null,
    })
    const backgroundVariant = useBackgroundVariant(() => react)
    expect(backgroundVariant.value).toEqual({
      'text-bg-null': false,
      'text-danger': true,
      'bg-danger': true,
    })
    react.bgVariant = 'info'
    react.textVariant = 'info'
    react.variant = 'danger'
    expect(backgroundVariant.value).toEqual({
      'text-bg-danger': true,
      'text-info': false,
      'bg-info': false,
    })
  })
})
