import {suffixPropName} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('suffixPropName', () => {
  it('adds suffix to name', () => {
    const value = suffixPropName('suffix', 'value')
    expect(value).toBe('valueSuffix')
  })

  it('uppercases suffix first letter', () => {
    const value = suffixPropName('suffix', 'value$')
    const suffix = value.slice(value.indexOf('$') + 1).slice(0, 1)
    expect(suffix).toBe('S')
  })

  it('suffix is empty when empty suffix', () => {
    const value = suffixPropName('', 'value')
    expect(value).toBe('value')
  })
})
