import BvEvent, {type BvEventConstructorOmittables} from './BvEvent'

export default class BvTriggerableEvent extends BvEvent {
  readonly trigger: string | null = null

  constructor(
    eventType: string,
    eventInit: Partial<Omit<BvTriggerableEvent, BvEventConstructorOmittables>> = {}
  ) {
    super(eventType, eventInit)

    // Merge defaults first, the eventInit, and the type last
    // so, it can't be overwritten
    Object.assign(this, BvEvent.Defaults, eventInit, {eventType})
  }

  static get Defaults() {
    return {
      ...super.Defaults,
      trigger: null,
    }
  }
}
