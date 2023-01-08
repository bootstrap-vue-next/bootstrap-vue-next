import {startCase} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('startCase', () => {
  it('replaces first letter', () => {
    const value = startCase('abc def')
    expect(value).toBe('Abc def')
  })

  it('does not uppercase second word', () => {
    const value = startCase('abc def')
    expect(value).not.toBe('Abc Def')
  })

  it('cannot uppercase number', () => {
    const value = startCase('1abc def')
    expect(value).toBe('1abc def')
  })

  it('replaces underscore with space', () => {
    const value = startCase('abc_def')
    expect(value).toBe('Abc def')
  })
})
