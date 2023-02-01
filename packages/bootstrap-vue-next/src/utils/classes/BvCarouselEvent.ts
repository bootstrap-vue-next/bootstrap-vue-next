import BvEvent, {type BvEventConstructorOmittables} from './BvEvent'

export default class BvCarouselEvent extends BvEvent {
  readonly from: number
  readonly to: number
  readonly direction: 'left' | 'right'

  constructor(
    eventType: string,
    eventInit: Partial<Omit<BvEvent, BvEventConstructorOmittables>> & {
      from: number
      to: number
      direction: 'left' | 'right'
    }
  ) {
    super(eventType, eventInit)
    Object.assign(this, BvEvent.Defaults, eventInit, {eventType})
    const {from, direction, to} = eventInit
    this.from = from
    this.to = to
    this.direction = direction
  }

  static get Defaults() {
    return {
      ...super.Defaults,
    }
  }
}
