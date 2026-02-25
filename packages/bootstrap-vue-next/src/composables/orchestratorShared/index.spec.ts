import {describe, expect, it} from 'vitest'
import {ref} from 'vue'
import {buildPromise} from '.'
import type {ModalOrchestratorArrayValue} from '../../types/ComponentOrchestratorTypes'
import {BvTriggerableEvent} from '../../utils'

describe('buildPromise', () => {
  it('set method does not add undefined title and body when they are not in the value', () => {
    const store = ref<ModalOrchestratorArrayValue[]>([])
    const _self = Symbol('test-modal')

    const {value: promise} = buildPromise<unknown, unknown, ModalOrchestratorArrayValue>(
      _self,
      store
    )

    // First, add an item to the store without title or body
    store.value.push({
      type: 'modal',
      _self,
      position: 'modal',
      modelValue: false,
      _component: {},
      options: {},
      promise: {value: promise, resolve: () => {}},
    } as ModalOrchestratorArrayValue)

    // Now call set with a value that doesn't have title or body
    promise.set({modelValue: true} as never)

    // Get the item from the store
    const item = store.value.find((el) => el._self === _self)
    expect(item).toBeDefined()

    // The key check: title and body should not be in the object
    // This ensures they won't override component-defined props
    expect('title' in (item || {})).toBe(false)
    expect('body' in (item || {})).toBe(false)
  })

  it('set method preserves title and body when they are defined', () => {
    const store = ref<ModalOrchestratorArrayValue[]>([])
    const _self = Symbol('test-modal')

    const {value: promise} = buildPromise<unknown, unknown, ModalOrchestratorArrayValue>(
      _self,
      store
    )

    // Add an item to the store with title
    store.value.push({
      type: 'modal',
      _self,
      position: 'modal',
      modelValue: false,
      title: 'Initial Title',
      _component: {},
      options: {},
      promise: {value: promise, resolve: () => {}},
    } as ModalOrchestratorArrayValue)

    // Call set with a new title
    promise.set({title: 'Updated Title'} as never)

    // Get the item from the store
    const item = store.value.find((el) => el._self === _self)
    expect(item).toBeDefined()
    expect(item?.title).toBe('Updated Title')
  })

  it('set method handles undefined title explicitly passed', () => {
    const store = ref<ModalOrchestratorArrayValue[]>([])
    const _self = Symbol('test-modal')

    const {value: promise} = buildPromise<unknown, unknown, ModalOrchestratorArrayValue>(
      _self,
      store
    )

    // Add an item to the store with title
    store.value.push({
      type: 'modal',
      _self,
      position: 'modal',
      modelValue: false,
      title: 'Initial Title',
      _component: {},
      options: {},
      promise: {value: promise, resolve: () => {}},
    } as ModalOrchestratorArrayValue)

    // Call set without title (title not in the object)
    promise.set({modelValue: true} as never)

    // Get the item from the store
    const item = store.value.find((el) => el._self === _self)
    expect(item).toBeDefined()
    // Title should remain as it was, not be overwritten with undefined
    expect(item?.title).toBe('Initial Title')
  })

  it('show returns a promise with Symbol.asyncDispose on the resolved value', async () => {
    const store = ref<ModalOrchestratorArrayValue[]>([])
    const _self = Symbol('test-modal')

    const {value: promise, resolve} = buildPromise<unknown, unknown, ModalOrchestratorArrayValue>(
      _self,
      store
    )

    store.value.push({
      type: 'modal',
      _self,
      position: 'modal',
      modelValue: false,
      _component: {},
      options: {},
      promise: {value: promise, resolve},
    } as ModalOrchestratorArrayValue)

    const showResult = promise.show()

    // The show result should be a promise (thenable)
    expect(showResult).toBeInstanceOf(Promise)

    // The show result should have Symbol.asyncDispose
    expect(typeof showResult[Symbol.asyncDispose]).toBe('function')

    // Resolve the underlying promise
    const event = new BvTriggerableEvent('test', {trigger: 'ok'})
    resolve(event)

    // The resolved value should have Symbol.asyncDispose
    const resolved = await showResult
    expect(typeof resolved[Symbol.asyncDispose]).toBe('function')
    expect(resolved.trigger).toBe('ok')
  })

  it('show result asyncDispose calls destroy', async () => {
    const store = ref<ModalOrchestratorArrayValue[]>([])
    const _self = Symbol('test-modal')

    const {value: promise, resolve} = buildPromise<unknown, unknown, ModalOrchestratorArrayValue>(
      _self,
      store
    )

    store.value.push({
      type: 'modal',
      _self,
      position: 'modal',
      modelValue: false,
      _component: {},
      options: {},
      promise: {value: promise, resolve},
    } as ModalOrchestratorArrayValue)

    const showResult = promise.show()

    // Resolve the underlying promise
    resolve(new BvTriggerableEvent('test'))

    const resolved = await showResult

    // Store should have the item
    expect(store.value.length).toBe(1)

    // Set modelValue back to false so destroy doesn't wait for onHidden
    store.value[0].modelValue = false

    // Call asyncDispose on the resolved value
    await resolved[Symbol.asyncDispose]()

    // Store should be empty after dispose
    expect(store.value.length).toBe(0)
  })

  it('show result has component control methods', () => {
    const store = ref<ModalOrchestratorArrayValue[]>([])
    const _self = Symbol('test-modal')

    const {value: promise} = buildPromise<unknown, unknown, ModalOrchestratorArrayValue>(
      _self,
      store
    )

    store.value.push({
      type: 'modal',
      _self,
      position: 'modal',
      modelValue: false,
      _component: {},
      options: {},
      promise: {value: promise, resolve: () => {}},
    } as ModalOrchestratorArrayValue)

    const showResult = promise.show()

    // show result should have all control methods for backward compatibility
    expect(typeof showResult.show).toBe('function')
    expect(typeof showResult.hide).toBe('function')
    expect(typeof showResult.toggle).toBe('function')
    expect(typeof showResult.set).toBe('function')
    expect(typeof showResult.get).toBe('function')
    expect(typeof showResult.destroy).toBe('function')
  })
})
