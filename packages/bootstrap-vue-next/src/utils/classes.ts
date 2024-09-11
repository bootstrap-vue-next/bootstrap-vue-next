/**
 * Items that are omitted from the BvEventInit constructor arg
 */
export type BvEventConstructorOmittables = 'eventType' | 'defaultPrevented'

export class BvEvent {
  readonly cancelable: boolean = true
  readonly componentId: string | null = null
  private _defaultPrevented = false
  readonly eventType: string = ''
  readonly nativeEvent: string | null = null
  private _preventDefault: () => void
  readonly relatedTarget: EventTarget | null = null
  readonly target: EventTarget | null = null
  // Readable by everyone,
  // But only overwritten by inherrited constructors
  public get defaultPrevented() {
    return this._defaultPrevented
  }
  protected set defaultPrevented(prop) {
    this._defaultPrevented = prop
  }
  // I think this is right
  // We want to be able to have it callable to everyone,
  // But only overwritten by inherrited constructors
  public get preventDefault() {
    return this._preventDefault
  }
  // This may not be correct, because it doesn't get correct type inferences in children
  // Ex overwrite this.preventDefault = () => true is valid. Could be a TS issue
  protected set preventDefault(setter: () => void) {
    this._preventDefault = setter
  }

  constructor(
    eventType: string,
    eventInit: Partial<Omit<BvEvent, BvEventConstructorOmittables>> = {}
  ) {
    if (!eventType) {
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      )
    }

    // Merge defaults first, the eventInit, and the type last
    // so, it can't be overwritten
    Object.assign(this, BvEvent.Defaults, eventInit, {eventType})

    this._preventDefault = function _preventDefault() {
      if (this.cancelable) {
        this.defaultPrevented = true
      }
    }
  }

  static get Defaults() {
    return {
      cancelable: true,
      componentId: null,
      eventType: '',
      nativeEvent: null,
      relatedTarget: null,
      target: null,
    }
  }
}

export class BvTriggerableEvent extends BvEvent {
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

export class BvCarouselEvent extends BvEvent {
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
