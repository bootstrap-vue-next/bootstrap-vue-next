import {titleCase} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('titleCase', () => {
  it('uppercases first letters of words', () => {
    const value = titleCase('abc def ghi')
    expect(value).toBe('Abc Def Ghi')
  })

  it('converts underscores to spaces', () => {
    const value = titleCase('abc_def_ghi')
    expect(value).toBe('Abc Def Ghi')
  })

  it('does not uppercase number', () => {
    const value = titleCase('1abc def')
    expect(value).toBe('1abc Def')
  })

  it('does not uppercase symbol', () => {
    const value = titleCase('[abc def')
    expect(value).toBe('[abc Def')
  })
})
