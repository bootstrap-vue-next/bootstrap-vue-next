import {upperFirst} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('upperFirst', () => {
  it('uppercases the first letter', () => {
    const value = upperFirst('abc')
    expect(value).toBe('Abc')
  })

  it('trims the string', () => {
    const value = upperFirst('    abc')
    expect(value).toBe('Abc')
  })

  it('cannot uppercase number', () => {
    const value = upperFirst('1abc')
    expect(value).toBe('1abc')
  })

  it('cannot uppercase symbol', () => {
    const value = upperFirst('#abc')
    expect(value).toBe('#abc')
  })
})
