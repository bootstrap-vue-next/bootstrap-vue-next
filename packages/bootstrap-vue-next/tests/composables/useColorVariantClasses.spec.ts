import type {ColorVariant, TextColorVariant} from '../../src/types'
import {useColorVariantClasses} from '../../src/composables/useColorVariantClasses'
import {describe, expect, it} from 'vitest'
import {reactive} from 'vue'

describe('useColorVariantClasses blackbox test', () => {
  it('value to contain property value', () => {
    const backgroundVariant = useColorVariantClasses(() => ({
      bgVariant: 'danger',
      textVariant: 'danger',
      variant: 'danger',
    }))
    expect(backgroundVariant).toHaveProperty('value')
  })

  it('value returns text-bg-{type} when prop variant', () => {
    const backgroundVariant = useColorVariantClasses(() => ({
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
    const backgroundVariant = useColorVariantClasses(() => ({
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
    const backgroundVariant = useColorVariantClasses(() => ({
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
    const backgroundVariant = useColorVariantClasses(() => ({
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

  it('variat props are independent', () => {
    const backgroundVariant = useColorVariantClasses(() => ({
      bgVariant: 'danger',
      textVariant: 'info',
      variant: 'success',
    }))
    expect(backgroundVariant.value).toEqual({
      'text-bg-success': true,
      'text-info': true,
      'bg-danger': true,
    })
  })

  it('value behaves reactively', () => {
    const react = reactive({
      bgVariant: 'danger' as ColorVariant | null,
      textVariant: 'danger' as TextColorVariant | null,
      variant: null as ColorVariant | null,
    })
    const backgroundVariant = useColorVariantClasses(() => react)
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
      'text-info': true,
      'bg-info': true,
    })
  })
})
