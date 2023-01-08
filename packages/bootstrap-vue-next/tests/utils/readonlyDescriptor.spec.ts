import {readonlyDescriptor} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('readonlyDescriptor', () => {
  it('gives exact object', () => {
    const value = readonlyDescriptor()
    expect(value).toEqual({enumerable: true, configurable: false, writable: false})
  })
})
