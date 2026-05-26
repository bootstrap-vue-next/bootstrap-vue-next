import {describe, expect, it} from 'vitest'
import {deepEqual, get, isReadOnlyArray, omit, pick, set} from './object'

describe('object utils', () => {
  describe('isReadOnlyArray', () => {
    it('returns true for an array', () => {
      expect(isReadOnlyArray([1, 2, 3])).toBe(true)
    })

    it('returns true for an empty array', () => {
      expect(isReadOnlyArray([])).toBe(true)
    })

    it('returns false for non-array values', () => {
      expect(isReadOnlyArray('hello')).toBe(false)
      expect(isReadOnlyArray(123)).toBe(false)
      expect(isReadOnlyArray({})).toBe(false)
      expect(isReadOnlyArray(null)).toBe(false)
      expect(isReadOnlyArray(undefined)).toBe(false)
    })
  })

  describe('omit', () => {
    it('removes specified keys from object', () => {
      const obj = {a: 1, b: 2, c: 3}
      expect(omit(obj, ['b'])).toEqual({a: 1, c: 3})
    })

    it('removes multiple keys', () => {
      const obj = {a: 1, b: 2, c: 3, d: 4}
      expect(omit(obj, ['a', 'c'])).toEqual({b: 2, d: 4})
    })

    it('returns full object when empty array passed', () => {
      const obj = {a: 1, b: 2}
      expect(omit(obj, [])).toEqual({a: 1, b: 2})
    })

    it('handles keys not present in object', () => {
      const obj = {a: 1, b: 2}
      expect(omit(obj, ['c' as keyof typeof obj])).toEqual({a: 1, b: 2})
    })
  })

  describe('pick', () => {
    it('picks specified keys from object', () => {
      const obj = {a: 1, b: 2, c: 3}
      expect(pick(obj, ['a', 'c'])).toEqual({a: 1, c: 3})
    })

    it('returns empty object for empty array', () => {
      const obj = {a: 1, b: 2}
      expect(pick(obj, [])).toEqual({})
    })

    it('handles keys not present in object', () => {
      const obj = {a: 1, b: 2} as Record<string, unknown>
      expect(pick(obj, ['a', 'z'])).toEqual({a: 1, z: undefined})
    })

    it('picks single key', () => {
      const obj = {a: 1, b: 2, c: 3}
      expect(pick(obj, ['b'])).toEqual({b: 2})
    })
  })

  describe('get', () => {
    it('gets nested value with dot notation', () => {
      const obj = {a: {b: {c: 42}}}
      expect(get(obj, 'a.b.c')).toBe(42)
    })

    it('gets array value with bracket notation', () => {
      const obj = {arr: [10, 20, 30]}
      expect(get(obj, 'arr[1]')).toBe(20)
    })

    it('returns default value when path not found', () => {
      const obj = {a: 1}
      expect(get(obj, 'b.c', 'default')).toBe('default')
    })

    it('returns default value for null in path', () => {
      const obj = {a: null}
      expect(get(obj, 'a.b', 'fallback')).toBe('fallback')
    })

    it('returns undefined when path not found and no default', () => {
      const obj = {a: 1}
      expect(get(obj, 'b.c')).toBeUndefined()
    })

    it('handles deeply nested access', () => {
      const obj = {a: {b: [{c: 'found'}]}}
      expect(get(obj, 'a.b[0].c')).toBe('found')
    })
  })

  describe('set', () => {
    it('sets a simple property', () => {
      const result = set({}, 'name', 'test')
      expect(result).toEqual({name: 'test'})
    })

    it('sets a nested property', () => {
      const result = set({}, 'a.b.c', 42)
      expect(result).toEqual({a: {b: {c: 42}}})
    })

    it('sets array value with bracket notation', () => {
      const result = set({}, 'cards[0].value', 2)
      expect(result).toEqual({cards: [{value: 2}]})
    })

    it('does not modify original object', () => {
      const original = {a: 1}
      const result = set(original, 'b', 2)
      expect(original).not.toHaveProperty('b')
      expect(result).toEqual({a: 1, b: 2})
    })

    it('returns empty object when initial is falsy', () => {
      expect(set(null as unknown as object, 'a', 1)).toEqual({})
    })

    it('returns initial when path is empty', () => {
      const obj = {a: 1}
      expect(set(obj, '', 2)).toBe(obj)
    })

    it('returns initial when value is undefined', () => {
      const obj = {a: 1}
      expect(set(obj, 'b', undefined)).toBe(obj)
    })
  })

  describe('deepEqual', () => {
    it('returns true for identical primitives', () => {
      expect(deepEqual(1, 1)).toBe(true)
      expect(deepEqual('a', 'a')).toBe(true)
      expect(deepEqual(true, true)).toBe(true)
    })

    it('returns false for different primitives', () => {
      expect(deepEqual(1, 2)).toBe(false)
      expect(deepEqual('a', 'b')).toBe(false)
    })

    it('returns true for same reference', () => {
      const obj = {a: 1}
      expect(deepEqual(obj, obj)).toBe(true)
    })

    it('returns true for deeply equal objects', () => {
      expect(deepEqual({a: {b: 1}}, {a: {b: 1}})).toBe(true)
    })

    it('returns false for different objects', () => {
      expect(deepEqual({a: 1}, {a: 2})).toBe(false)
    })

    it('returns false for objects with different keys', () => {
      expect(deepEqual({a: 1}, {b: 1})).toBe(false)
    })

    it('returns false for objects with different number of keys', () => {
      expect(deepEqual({a: 1, b: 2}, {a: 1})).toBe(false)
    })

    it('returns false for null vs object', () => {
      expect(deepEqual(null, {})).toBe(false)
    })

    it('returns true for both null', () => {
      expect(deepEqual(null, null)).toBe(true)
    })

    it('handles nested arrays', () => {
      expect(deepEqual({a: [1, 2]}, {a: [1, 2]})).toBe(true)
      expect(deepEqual({a: [1, 2]}, {a: [1, 3]})).toBe(false)
    })
  })
})
