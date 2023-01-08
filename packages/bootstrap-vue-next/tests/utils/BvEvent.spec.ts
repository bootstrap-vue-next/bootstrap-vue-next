import {BvEvent} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('utils/BvEvent class', () => {
  it('BvEvent is instance of BvEvent', () => {
    const event = new BvEvent('foobar')
    expect(event).toBeInstanceOf(BvEvent)
    expect(event.eventType).toBe('foobar')
  })

  /**
   * Already throws a TS compile-time error, so it shouldn't occur in reality
   */
  it('throws exception if no type given', () => {
    let event = null
    let failed = false
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      event = new BvEvent()
    } catch (e) {
      failed = true
    }
    expect(event).not.toBeInstanceOf(BvEvent)
    expect(event).toBe(null)
    expect(failed).toBe(true)
  })

  it('supports cancelable events', () => {
    const event = new BvEvent('foobar', {
      cancelable: true,
    })
    expect(event).toBeInstanceOf(BvEvent)
    expect(event.eventType).toBe('foobar')
    expect(event.cancelable).toBe(true)
    expect(event.defaultPrevented).toBe(false)
    event.preventDefault()
    expect(event.defaultPrevented).toBe(true)
  })

  it('supports non cancelable events', () => {
    const event = new BvEvent('foobar', {
      cancelable: false,
    })
    expect(event).toBeInstanceOf(BvEvent)
    expect(event.eventType).toBe('foobar')
    expect(event.cancelable).toBe(false)
    expect(event.defaultPrevented).toBe(false)
    event.preventDefault()
    expect(event.defaultPrevented).toBe(false)
  })

  it('has default properties', () => {
    const event = new BvEvent('foobar')
    expect(event).toBeInstanceOf(BvEvent)
    expect(event.cancelable).toBe(true)
    expect(event.componentId).toBeNull()
    expect(event.defaultPrevented).toBe(false)
    expect(event.eventType).toBe('foobar')
    expect(event.nativeEvent).toBeNull()
    expect(event.relatedTarget).toBeNull()
    expect(event.target).toBeNull()
  })

  it('constructor overrides default properties', () => {
    const event = new BvEvent('foobar', {
      cancelable: true,
      componentId: 'componentId',
      nativeEvent: 'nativeEvent',
      relatedTarget: 'relatedTarget',
      target: new EventTarget(),
    })
    expect(event).toBeInstanceOf(BvEvent)
    expect(event.cancelable).toBe(true)
    expect(event.componentId).toBe('componentId')
    expect(event.eventType).toBe('foobar')
    expect(event.nativeEvent).toBe('nativeEvent')
    expect(event.relatedTarget).toBe('relatedTarget')
    expect(event.target).toBeInstanceOf(EventTarget)
  })

  it('static Default has expected structure', () => {
    const defaults = BvEvent.Defaults
    expect(defaults.cancelable).toBe(true)
    expect(defaults.componentId).toBeNull()
    expect(defaults.eventType).toBe('')
    expect(defaults.nativeEvent).toBeNull()
    expect(defaults.relatedTarget).toBeNull()
    expect(defaults.target).toBeNull()
  })

  // Does not support custom properties. TS only
  // it('supports custom properties', async () => {
  //   const event = new BvEvent('foobar', {
  //     custom: 123,
  //   })
  //   expect(event).toBeInstanceOf(BvEvent)
  //   expect(event.eventType).toBe('foobar')
  //   expect(event.cancelable).toBe(true)
  //   expect(event.custom).toBe(123)
  // })
})
