import {describe, expect, it} from 'vitest'
import {getClasses} from './getClasses'

describe('getClasses', () => {
  it('returns classes for truthy props', () => {
    const props = {borderColor: 'primary', borderWidth: true}
    const result = getClasses(props, ['borderColor', 'borderWidth'], 'border')
    expect(result).toContain('border-color-primary')
    expect(result).toContain('border-width')
  })

  it('skips falsy props', () => {
    const props = {borderColor: null, borderWidth: undefined}
    const result = getClasses(props, ['borderColor', 'borderWidth'], 'border')
    expect(result).toEqual([])
  })

  it('returns empty array when no props match', () => {
    const props = {}
    const result = getClasses(props, ['color', 'size'], 'btn')
    expect(result).toEqual([])
  })

  it('handles boolean true prop values (omits "true" from class)', () => {
    const props = {bgColor: true}
    const result = getClasses(props, ['bgColor'], 'bg')
    expect(result).toContain('bg-color')
  })

  it('uses custom classPrefix when provided', () => {
    const props = {textVariant: 'danger'}
    const result = getClasses(props, ['textVariant'], 'text', 'txt')
    expect(result).toContain('txt-variant-danger')
  })
})
