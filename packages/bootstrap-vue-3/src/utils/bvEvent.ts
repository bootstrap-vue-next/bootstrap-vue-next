import {Component} from 'vue'
import {readonlyDescriptor} from './object'

/**
 * @external
 */
export default class BvEvent {
  cancelable = true
  componentId: string | null = null
  defaultPrevented = false
  nativeEvent: any = null
  preventDefault: () => void
  relatedTarget: any = null
  target: any = null
  eventType = ''
  vueTarget: Component | null = null

  constructor(eventType: string, eventInit = {}) {
    // Start by emulating native Event constructor
    if (!eventType) {
      /* istanbul ignore next */
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      )
    }

    // Merge defaults first, the eventInit, and the type last
    // so, it can't be overwritten
    // TODO: Find a better way to avoid the original error...
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Object.assign(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {eventType})

    // Freeze some props as readonly, but leave them enumerable
    Object.defineProperties(this, {
      type: readonlyDescriptor(),
      cancelable: readonlyDescriptor(),
      nativeEvent: readonlyDescriptor(),
      target: readonlyDescriptor(),
      relatedTarget: readonlyDescriptor(),
      vueTarget: readonlyDescriptor(),
      componentId: readonlyDescriptor(),
    })

    // Create a private variable using closure scoping
    let defaultPrevented = false
    // Recreate preventDefault method. One way setter
    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true
      }
    }

    // Create `defaultPrevented` publicly accessible prop that
    // can only be altered by the preventDefault method
    Object.defineProperty(this, 'defaultPrevented', {
      enumerable: true,
      get() {
        return defaultPrevented
      },
    })
  }

  static get Defaults() {
    return {
      eventType: '',
      cancelable: true,
      nativeEvent: null,
      target: null,
      relatedTarget: null,
      vueTarget: null,
      componentId: null,
    }
  }
}
