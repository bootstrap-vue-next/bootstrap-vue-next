import {describe, expect, it} from 'vitest'
import {normalizeInput} from './normalizeInput'

describe('normalizeInput', () => {
  it('returns undefined for null value', () => {
    expect(
      normalizeInput(null, {number: undefined, lazy: undefined, trim: undefined})
    ).toBeUndefined()
  })

  it('returns string value as-is without modifiers', () => {
    expect(normalizeInput('hello', {number: undefined, lazy: undefined, trim: undefined})).toBe(
      'hello'
    )
  })

  it('converts numeric string to number with number modifier', () => {
    expect(normalizeInput('42', {number: true, lazy: undefined, trim: undefined})).toBe(42)
  })

  it('converts float string to number with number modifier', () => {
    expect(normalizeInput('3.14', {number: true, lazy: undefined, trim: undefined})).toBe(3.14)
  })

  it('returns original string when not parseable as number with number modifier', () => {
    expect(normalizeInput('abc', {number: true, lazy: undefined, trim: undefined})).toBe('abc')
  })

  it('returns empty string unchanged even with number modifier', () => {
    expect(normalizeInput('', {number: true, lazy: undefined, trim: undefined})).toBe('')
  })

  it('returns number value as-is', () => {
    expect(normalizeInput(99, {number: undefined, lazy: undefined, trim: undefined})).toBe(99)
  })

  it('handles number modifier with numeric value', () => {
    expect(normalizeInput(5, {number: true, lazy: undefined, trim: undefined})).toBe(5)
  })
})
