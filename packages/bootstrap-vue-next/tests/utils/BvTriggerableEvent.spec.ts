import {BvEvent, BvTriggerableEvent} from '../../src/utils'
import {describe, expect, it} from 'vitest'

describe('BvTriggerableEvent', () => {
  it('BvTriggerableEvent is instance of BvTriggerableEvent', () => {
    const event = new BvTriggerableEvent('foobar')
    expect(event).instanceof(BvTriggerableEvent)
  })

  it('BvTriggerableEvent extends BvEvent', () => {
    const event = new BvTriggerableEvent('foobar')
    expect(event).toBeInstanceOf(BvEvent)
  })

  it('has default properties', () => {
    const event = new BvTriggerableEvent('foobar')
    expect(event.trigger).toBeNull()
  })

  it('constructor overrides default properties', () => {
    const event = new BvTriggerableEvent('foobar', {
      trigger: 'trigger',
    })
    expect(event.trigger).toBe('trigger')
  })

  it('static Default has expected structure', () => {
    const defaults = BvTriggerableEvent.Defaults
    expect(defaults.trigger).toBeNull()
  })
})
