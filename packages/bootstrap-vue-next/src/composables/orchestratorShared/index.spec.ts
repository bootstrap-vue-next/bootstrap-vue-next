import {describe, expect, it} from 'vitest'
import {ref, type Ref} from 'vue'
import {buildController} from '.'
import type {ControllerKey, ModalOrchestratorArrayValue} from '../../types/ComponentOrchestratorTypes'
import {BvTriggerableEvent} from '../../utils'

type ModalStore = Ref<Map<ControllerKey, Ref<ModalOrchestratorArrayValue>>>

const newStore = (): ModalStore => ref(new Map())

const pushItem = (
  store: ModalStore,
  id: ControllerKey,
  props: ModalOrchestratorArrayValue['props']
) => {
  store.value.set(
    id,
    ref({
      component: {} as never,
      id,
      fns: {
        resolve: () => {},
        setRef: () => {},
        destroy: async () => {},
      },
      props,
    } as ModalOrchestratorArrayValue)
  )
}

describe('buildController', () => {
  it('set method does not add undefined title and body when they are not in the value', () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: false})

    controller.set({modelValue: true} as never)

    const item = store.value.get(_self)
    expect(item).toBeDefined()
    expect('title' in (item?.value.props ?? {})).toBe(false)
    expect('body' in (item?.value.props ?? {})).toBe(false)
  })

  it('set method preserves title and body when they are defined', () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: false, title: 'Initial Title'})

    controller.set({title: 'Updated Title'} as never)

    const item = store.value.get(_self)
    expect(item).toBeDefined()
    expect(item?.value.props.title).toBe('Updated Title')
  })

  it('set method handles undefined title explicitly passed', () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: false, title: 'Initial Title'})

    controller.set({modelValue: true} as never)

    const item = store.value.get(_self)
    expect(item).toBeDefined()
    expect(item?.value.props.title).toBe('Initial Title')
  })

  it('controller implements AsyncDisposable', () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: false})

    expect(typeof controller[Symbol.asyncDispose]).toBe('function')
  })

  it('show sets modelValue to true in the store', () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: false})

    expect(store.value.get(_self)?.value.props.modelValue).toBe(false)

    controller.show()

    expect(store.value.get(_self)?.value.props.modelValue).toBe(true)
  })

  it('show resolves to BvTriggerableEvent when the promise is resolved', async () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller, resolve} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: false})

    const showPromise = controller.show()

    const event = new BvTriggerableEvent('hidden', {trigger: 'ok'})
    event.ok = true
    resolve(event)

    const result = await showPromise
    expect(result).toBeInstanceOf(BvTriggerableEvent)
    expect(result.trigger).toBe('ok')
    expect(result.ok).toBe(true)
  })

  it('show result has Symbol.asyncDispose that calls destroy', async () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller, resolve} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: false})

    const showPromise = controller.show()
    resolve(new BvTriggerableEvent('test'))

    const resolved = await showPromise
    expect(typeof resolved[Symbol.asyncDispose]).toBe('function')

    expect(store.value.size).toBe(1)
    // modelValue is still true here, so set it back to false so destroy doesn't wait on hide
    controller.set({modelValue: false} as never)

    await resolved[Symbol.asyncDispose]()
    expect(store.value.size).toBe(0)
  })

  it('hide sets modelValue to false in the store', () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: true})

    expect(store.value.get(_self)?.value.props.modelValue).toBe(true)

    controller.hide()

    expect(store.value.get(_self)?.value.props.modelValue).toBe(false)
  })

  it('toggle flips modelValue in the store', () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: false})

    controller.toggle()
    expect(store.value.get(_self)?.value.props.modelValue).toBe(true)

    controller.toggle()
    expect(store.value.get(_self)?.value.props.modelValue).toBe(false)
  })

  it('get returns the current store item', () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: false, title: 'Test Title'})

    const item = controller.get()
    expect(item).toBeDefined()
    expect(item?.value.props.title).toBe('Test Title')
  })

  it('destroy removes item from store immediately when modelValue is false', async () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: false})

    expect(store.value.size).toBe(1)

    await controller.destroy()

    expect(store.value.size).toBe(0)
  })

  it('destroy waits for hide to resolve before removing the item when modelValue is true', async () => {
    const store = newStore()
    const _self = Symbol('test-modal')

    const {controller, resolve} = buildController<unknown, ModalStore>(_self, store)
    pushItem(store, _self, {modelValue: true})

    const destroyPromise = controller.destroy()

    // destroy awaits the base promise before it will hide + remove the item
    resolve(new BvTriggerableEvent('hidden'))
    await destroyPromise

    expect(store.value.size).toBe(0)
  })
})
