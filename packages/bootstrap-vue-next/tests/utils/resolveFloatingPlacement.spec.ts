import {describe, expect, it} from 'vitest'
import {resolveFloatingPlacement} from '../../src/utils'

describe('resolveFloatingPlacement', () => {
  it('is top-end when everything enabled', () => {
    const value = resolveFloatingPlacement({
      alignEnd: true,
      alignCenter: true,
      end: true,
      start: true,
      top: true,
    })
    expect(value).toBe('top-end')
  })

  it('is top-start when top and dropstart true', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: false,
      end: false,
      start: false,
      top: true,
    })
    expect(value).toBe('top-start')
  })

  it('is top-end when top and alignEnd true', () => {
    const value = resolveFloatingPlacement({
      alignEnd: true,
      alignCenter: true,
      end: false,
      start: false,
      top: true,
    })
    expect(value).toBe('top-end')
  })

  it('is left-start when start and dropstart true', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: false,
      end: false,
      start: true,
      top: false,
    })
    expect(value).toBe('left-start')
  })

  it('is left-end when start and alignEnd true', () => {
    const value = resolveFloatingPlacement({
      alignEnd: true,
      alignCenter: true,
      end: false,
      start: true,
      top: false,
    })
    expect(value).toBe('left-end')
  })

  it('is right-start when end and dropstart true', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: false,
      end: true,
      start: false,
      top: false,
    })
    expect(value).toBe('right-start')
  })

  it('is right-end when end and alignEnd true', () => {
    const value = resolveFloatingPlacement({
      alignEnd: true,
      alignCenter: true,
      end: true,
      start: false,
      top: false,
    })
    expect(value).toBe('right-end')
  })

  it('is top when top', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: true,
      end: false,
      start: false,
      top: true,
    })
    expect(value).toBe('top')
  })

  it('is left when start', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: true,
      end: false,
      start: true,
      top: false,
    })
    expect(value).toBe('left')
  })

  it('is right when end', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: true,
      end: true,
      start: false,
      top: false,
    })
    expect(value).toBe('right')
  })

  it('is bottom when bottom', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: true,
      end: false,
      start: false,
      top: false,
    })
    expect(value).toBe('bottom')
  })

  it('is bottom-start when dropstart and bottom true', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: false,
      end: false,
      start: false,
      top: false,
    })
    expect(value).toBe('bottom-start')
  })

  it('is bottom-end when alignEnd and bottom true', () => {
    const value = resolveFloatingPlacement({
      alignEnd: true,
      alignCenter: true,
      end: false,
      start: false,
      top: false,
    })
    expect(value).toBe('bottom-end')
  })

  it('top-start takes priority over left-start', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: false,
      end: false,
      start: true,
      top: true,
    })
    expect(value).toBe('top-start')
  })

  it('top-end takes priority over left-end', () => {
    const value = resolveFloatingPlacement({
      alignEnd: true,
      alignCenter: true,
      end: false,
      start: true,
      top: true,
    })
    expect(value).toBe('top-end')
  })
  //

  it('left-start takes priority over right-start', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: false,
      end: true,
      start: true,
      top: false,
    })
    expect(value).toBe('left-start')
  })

  it('left-end takes priority over right-end', () => {
    const value = resolveFloatingPlacement({
      alignEnd: true,
      alignCenter: true,
      end: true,
      start: true,
      top: false,
    })
    expect(value).toBe('left-end')
  })

  //

  it('right-start takes priority over bottom-start', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: false,
      end: true,
      start: false,
      top: false,
    })
    expect(value).toBe('right-start')
  })

  it('right-end takes priority over bottom-end', () => {
    const value = resolveFloatingPlacement({
      alignEnd: true,
      alignCenter: true,
      end: true,
      start: false,
      top: false,
    })
    expect(value).toBe('right-end')
  })

  it('top takes priority over left', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: true,
      end: false,
      start: true,
      top: true,
    })
    expect(value).toBe('top')
  })

  it('left takes priority over right', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: true,
      end: true,
      start: true,
      top: false,
    })
    expect(value).toBe('left')
  })

  it('right takes priority over bottom', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: true,
      end: true,
      start: false,
      top: false,
    })
    expect(value).toBe('right')
  })

  it('bottom-end takes priority over bottom', () => {
    const value = resolveFloatingPlacement({
      alignEnd: true,
      alignCenter: true,
      end: false,
      start: false,
      top: false,
    })
    expect(value).toBe('bottom-end')
  })

  it('is bottom when bottom true', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: true,
      end: false,
      start: false,
      top: false,
    })
    expect(value).toBe('bottom')
  })

  it('is bottom by default', () => {
    const value = resolveFloatingPlacement({
      alignEnd: false,
      alignCenter: false,
      end: false,
      start: false,
      top: false,
    })
    expect(value).toBe('bottom-start')
  })
})
