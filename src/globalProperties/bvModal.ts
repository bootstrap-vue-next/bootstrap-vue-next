import {EventBusKey, useEventBus, UseEventBusReturn} from '@vueuse/core'
import {ModalEvent} from 'src/types/Modal'

const ModalEventKey: EventBusKey<ModalEvent> = Symbol('MODAL-EVENT-KEY')

export default class BVModal {
  private static _instance: BVModal
  private _bus: UseEventBusReturn<ModalEvent, any>

  constructor() {
    this._bus = useEventBus(ModalEventKey)
  }

  private static get instance(): BVModal {
    if (!this._instance) this._instance = new BVModal()

    return this._instance
  }

  public static get bus(): UseEventBusReturn<ModalEvent, any> {
    return this.instance._bus
  }

  public static show(id: string) {
    this.bus.emit({type: 'BVMODAL-SHOW', id})
  }

  public static hide(id: string) {
    this.bus.emit({type: 'BVMODAL-HIDE', id})
  }
}
