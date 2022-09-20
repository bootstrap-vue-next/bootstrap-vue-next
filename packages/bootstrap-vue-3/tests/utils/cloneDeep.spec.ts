import {cloneDeep} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('cloneDeep', () => {
  it('gives a clone', () => {
    const value = cloneDeep({a: 1, b: 1})
    expect(value).toEqual({a: 1, b: 1})
  })

  it('clone does not share nested properties', () => {
    const obj: {a: {b: {c: number} | number}} = {a: {b: {c: 1}}}
    const value = cloneDeep(obj)
    obj.a.b = 2
    expect(value).toEqual({a: {b: {c: 1}}})
  })

  it('clones an array', () => {
    const obj: {a: {b: number[] | number}} = {a: {b: [1, 2, 3]}}
    const value = cloneDeep(obj)
    obj.a.b = 2
    expect(value).toEqual({a: {b: [1, 2, 3]}})
  })

  it('clones a Date', () => {
    const now = new Date(Date.now())
    const obj: {a: {b: Date | number}} = {a: {b: now}}
    const value = cloneDeep(obj)
    obj.a.b = 2
    expect(value).toEqual({a: {b: now}})
  })

  it('clones a null', () => {
    const obj: {a: {b: null | number}} = {a: {b: null}}
    const value = cloneDeep(obj)
    obj.a.b = 2
    expect(value).toEqual({a: {b: null}})
  })

  it('clones a undefined', () => {
    const obj: {a: {b: number | undefined}} = {a: {b: undefined}}
    const value = cloneDeep(obj)
    obj.a.b = 2
    expect(value).toEqual({a: {b: undefined}})
  })

  it('clones anything else', () => {
    const value = cloneDeep(1)
    expect(value).toBe(1)
  })
})
