import {describe, expect, it} from 'vitest'
import {toString} from '../../src/utils'

describe('toString', () => {
  it('returns empty string when undefined', () => {
    const value = toString(undefined)
    expect(value).toBe('')
  })

  it('returns empty string when null', () => {
    const value = toString(null)
    expect(value).toBe('')
  })

  it('returns "[]" a when empty array', () => {
    const value = toString([])
    expect(value).toBe('[]')
  })

  it('returns string a when array', () => {
    const value = toString(['foo', 'bar'])
    expect(value).toBe('[\n  "foo",\n  "bar"\n]')
  })

  it('returns string when string', () => {
    const value = toString('foobar')
    expect(value).toBe('foobar')
  })

  it('returns "["foo","bar"]" when array and spaces 0', () => {
    const value = toString(['foo', 'bar'], 0)
    expect(value).toBe('["foo","bar"]')
  })

  it('returns "{\n  "foo": "bar"\n}" when object', () => {
    const value = toString({foo: 'bar'})
    expect(value).toBe('{\n  "foo": "bar"\n}')
  })

  it('returns "{"foo":"bar"}" when object with spaces 0', () => {
    const value = toString({foo: 'bar'}, 0)
    expect(value).toBe('{"foo":"bar"}')
  })

  it('returns "1" when is number', () => {
    const value = toString(1)
    expect(value).toBe('1')
  })

  it('returns "true" when is bool', () => {
    const value = toString(true)
    expect(value).toBe('true')
  })

  it('returns "false" when is bool', () => {
    const value = toString(false)
    expect(value).toBe('false')
  })

  it('returns same string when string', () => {
    const value = toString('abc')
    expect(value).toBe('abc')
  })
})
