import {BvEvent, BvModalEvent} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('BvModalEvent', () => {
  it('BvModalEvent is instance of BvModalEvent', () => {
    const event = new BvModalEvent('foobar')
    expect(event).instanceof(BvModalEvent)
  })

  it('BvModalEvent extends BvEvent', () => {
    const event = new BvModalEvent('foobar')
    expect(event).toBeInstanceOf(BvEvent)
  })

  it('has default properties', () => {
    const event = new BvModalEvent('foobar')
    expect(event.trigger).toBeNull()
  })

  it('constructor overrides default properties', () => {
    const event = new BvModalEvent('foobar', {
      trigger: 'trigger',
    })
    expect(event.trigger).toBe('trigger')
  })

  it('static Default has expected structure', () => {
    const defaults = BvModalEvent.Defaults
    expect(defaults.trigger).toBeNull()
  })
})
