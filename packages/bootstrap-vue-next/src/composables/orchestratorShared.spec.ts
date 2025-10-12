import {describe, expect, it} from 'vitest'
import {ref} from 'vue'
import {buildPromise} from './orchestratorShared'
import type {ModalOrchestratorArrayValue} from '../types/ComponentOrchestratorTypes'

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
})
