import mitt, {Emitter} from 'mitt'
import {ModalEvent} from 'src/types/Modal'

export default class BVModal {
  private static _instance: BVModal
  private _emitter: Emitter<Record<ModalEvent, string>>

  constructor() {
    this._emitter = mitt<Record<ModalEvent, string>>()
  }

  private static get instance(): BVModal {
    if (!this._instance) this._instance = new BVModal()

    return this._instance
  }

  public static get emitter(): Emitter<Record<ModalEvent, string>> {
    return this.instance._emitter
  }

  public static show(id: string) {
    this.instance._emitter.emit('BVMODAL-SHOW', id)
  }

  public static hide(id: string) {
    this.instance._emitter.emit('BVMODAL-HIDE', id)
  }
}
