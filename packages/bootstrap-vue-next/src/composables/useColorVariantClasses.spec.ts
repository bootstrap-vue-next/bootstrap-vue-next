import {describe, expect, it} from 'vitest'
import {ref} from 'vue'
import {useColorVariantClasses} from './useColorVariantClasses'

describe('useColorVariantClasses', () => {
  it('returns class for variant', () => {
    const result = useColorVariantClasses({
      variant: 'primary',
      bgVariant: null,
      textVariant: null,
    })
    expect(result.value).toEqual({
      'text-bg-primary': true,
      'text-null': false,
      'bg-null': false,
      'border-null': false,
    })
  })

  it('returns class for bgVariant', () => {
    const result = useColorVariantClasses({
      variant: null,
      bgVariant: 'danger',
      textVariant: null,
    })
    expect(result.value['bg-danger']).toBe(true)
    expect(result.value['text-bg-null']).toBe(false)
  })

  it('returns class for textVariant', () => {
    const result = useColorVariantClasses({
      variant: null,
      bgVariant: null,
      textVariant: 'success',
    })
    expect(result.value['text-success']).toBe(true)
  })

  it('returns class for borderVariant', () => {
    const result = useColorVariantClasses({
      variant: null,
      bgVariant: null,
      textVariant: null,
      borderVariant: 'warning',
    })
    expect(result.value['border-warning']).toBe(true)
  })

  it('returns all false classes when all variants are null', () => {
    const result = useColorVariantClasses({
      variant: null,
      bgVariant: null,
      textVariant: null,
      borderVariant: null,
    })
    expect(result.value['text-bg-null']).toBe(false)
    expect(result.value['text-null']).toBe(false)
    expect(result.value['bg-null']).toBe(false)
    expect(result.value['border-null']).toBe(false)
  })

  it('handles multiple variants simultaneously', () => {
    const result = useColorVariantClasses({
      variant: 'primary',
      bgVariant: 'dark',
      textVariant: 'light',
      borderVariant: 'info',
    })
    expect(result.value['text-bg-primary']).toBe(true)
    expect(result.value['bg-dark']).toBe(true)
    expect(result.value['text-light']).toBe(true)
    expect(result.value['border-info']).toBe(true)
  })

  it('is reactive with ref input', () => {
    const props = ref({
      variant: 'primary' as const,
      bgVariant: null,
      textVariant: null,
      borderVariant: null,
    })
    const result = useColorVariantClasses(props)
    expect(result.value['text-bg-primary']).toBe(true)

    props.value = {
      variant: 'danger',
      bgVariant: null,
      textVariant: null,
      borderVariant: null,
    }
    expect(result.value['text-bg-danger']).toBe(true)
  })

  it('defaults undefined variants to null', () => {
    const result = useColorVariantClasses({
      variant: undefined as unknown as null,
      bgVariant: undefined as unknown as null,
      textVariant: undefined as unknown as null,
    })
    // undefined gets defaulted to null via ?? operator
    expect(result.value['text-bg-null']).toBe(false)
    expect(result.value['text-null']).toBe(false)
    expect(result.value['bg-null']).toBe(false)
    expect(result.value['border-null']).toBe(false)
  })
})
