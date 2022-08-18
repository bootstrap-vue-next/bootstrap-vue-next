import {isBooleanish} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('isBooleanish', () => {
  it('value is booleanish, returns true', () => {
    let value = isBooleanish(true)
    expect(value).toBe(true)

    value = isBooleanish('false')
    expect(value).toBe(true)

    value = isBooleanish('')
    expect(value).toBe(true)

    value = isBooleanish('true')
    expect(value).toBe(true)

    value = isBooleanish(false)
    expect(value).toBe(true)
  })

  it('value is not booleanish, returns false', () => {
    let value = isBooleanish('abc')
    expect(value).toBe(false)

    value = isBooleanish(123)
    expect(value).toBe(false)

    value = isBooleanish(1)
    expect(value).toBe(false)

    value = isBooleanish([123])
    expect(value).toBe(false)

    value = isBooleanish({a: 1})
    expect(value).toBe(false)
  })
})
