import BvEvent, {type BvEventConstructorOmittables} from './BvEvent'

/**
 * @external
 */
export default class BvModalEvent extends BvEvent {
  readonly trigger: string | null = null

  constructor(
    eventType: string,
    eventInit: Partial<Omit<BvModalEvent, BvEventConstructorOmittables>> = {}
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
