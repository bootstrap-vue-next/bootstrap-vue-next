import {describe, expect, it} from 'vitest'
import {
  escapeRegExp,
  escapeRegExpChars,
  startCase,
  titleCase,
  toPascalCase,
  upperFirst,
} from './stringUtils'

describe('stringUtils', () => {
  describe('startCase', () => {
    it('converts camelCase to start case', () => {
      expect(startCase('helloWorld')).toBe('Hello World')
    })

    it('converts snake_case to start case', () => {
      expect(startCase('hello_world')).toBe('Hello world')
    })

    it('handles single word', () => {
      expect(startCase('hello')).toBe('Hello')
    })

    it('handles empty string', () => {
      expect(startCase('')).toBe('')
    })

    it('only capitalizes the first word', () => {
      expect(startCase('hello world foo')).toBe('Hello world foo')
    })
  })

  describe('titleCase', () => {
    it('converts camelCase to title case', () => {
      expect(titleCase('helloWorld')).toBe('Hello World')
    })

    it('converts snake_case to title case', () => {
      expect(titleCase('hello_world')).toBe('Hello World')
    })

    it('capitalizes all words', () => {
      expect(titleCase('hello world foo')).toBe('Hello World Foo')
    })

    it('handles single word', () => {
      expect(titleCase('hello')).toBe('Hello')
    })

    it('handles empty string', () => {
      expect(titleCase('')).toBe('')
    })
  })

  describe('upperFirst', () => {
    it('capitalizes the first letter', () => {
      expect(upperFirst('hello')).toBe('Hello')
    })

    it('handles already capitalized string', () => {
      expect(upperFirst('Hello')).toBe('Hello')
    })

    it('handles empty string', () => {
      expect(upperFirst('')).toBe('')
    })

    it('trims whitespace before capitalizing', () => {
      expect(upperFirst('  hello')).toBe('Hello')
    })

    it('handles single character', () => {
      expect(upperFirst('a')).toBe('A')
    })
  })

  describe('escapeRegExp', () => {
    it('escapes special regex characters', () => {
      expect(escapeRegExp('hello.world')).toBe('hello\\.world')
    })

    it('escapes brackets', () => {
      expect(escapeRegExp('[test]')).toBe('\\[test\\]')
    })

    it('escapes multiple special chars', () => {
      expect(escapeRegExp('a*b+c?d')).toBe('a\\*b\\+c\\?d')
    })

    it('returns plain string unchanged', () => {
      expect(escapeRegExp('hello')).toBe('hello')
    })

    it('handles empty string', () => {
      expect(escapeRegExp('')).toBe('')
    })
  })

  describe('escapeRegExpChars', () => {
    it('escapes special chars and replaces spaces with \\s', () => {
      expect(escapeRegExpChars('hello world')).toBe('hello\\sworld')
    })

    it('handles multiple spaces', () => {
      expect(escapeRegExpChars('hello   world')).toBe('hello\\sworld')
    })

    it('escapes special regex chars and spaces together', () => {
      expect(escapeRegExpChars('a.b c')).toBe('a\\.b\\sc')
    })
  })

  describe('toPascalCase', () => {
    it('converts kebab-case to PascalCase', () => {
      expect(toPascalCase('hello-world')).toBe('HelloWorld')
    })

    it('capitalizes first letter of single word', () => {
      expect(toPascalCase('hello')).toBe('Hello')
    })

    it('handles already PascalCase', () => {
      expect(toPascalCase('HelloWorld')).toBe('HelloWorld')
    })

    it('handles multi-segment kebab-case', () => {
      expect(toPascalCase('my-component-name')).toBe('MyComponentName')
    })

    it('handles empty string', () => {
      expect(toPascalCase('')).toBe('')
    })
  })
})
