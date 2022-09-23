import {isElement} from '../../src/utils'
import {beforeEach, describe, expect, it} from 'vitest'

describe('isElement', () => {
  beforeEach(() => {
    const el = document.createElement('a')
    el.id = 'foobar'
    document.body.appendChild(el)
  })

  it('a', () => {
    const el = document.getElementById('foobar')
    const value = isElement(el as HTMLElement)
    expect(value).toBe(true)
  })
})
