import {type ComponentPublicInstance, inject, nextTick, provide, readonly, type Ref, ref} from 'vue'
import type {ComponentController, ControllerKey, PromiseWithController} from '../../types/ComponentOrchestratorTypes'
import type {BvTriggerableEvent} from '../../utils'
import {orchestratorRegistryKey, type OrchestratorStoreObject} from '../../utils/keys'

/* oxlint-disable-next-line no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type ValueInMapRecord<MapRecord> = MapRecord extends Map<any, infer I> ? I : never

export const buildController = <
  TComponent,
  TStore extends Readonly<Ref<OrchestratorStoreObject[keyof OrchestratorStoreObject]>>,
>(
  id: ControllerKey,
  store: TStore
): PromiseWithController<TComponent, ValueInMapRecord<TStore['value']>> => {
  let resolveFunc: (value: BvTriggerableEvent) => void = () => {}

  const basePromise = new Promise<BvTriggerableEvent>((resolve) => {
    resolveFunc = resolve
  })

  type RefWithMethods = ComponentPublicInstance<TComponent> & {
    show?: () => void
    hide?: (trigger?: string, noEmit?: boolean) => void
    toggle?: () => void
  }
  const findItem = () => store.value.get(id)

  const controller = {
    id,
    ref: null as RefWithMethods | null,
    async show() {
      const refWithMethods = controller.ref
      if (
        refWithMethods !== null &&
        'show' in refWithMethods &&
        typeof refWithMethods.show === 'function'
      ) {
        refWithMethods.show()
      } else {
        controller.set({modelValue: true})
      }
      const event = await basePromise
      return Object.assign(Object.create(event), {
        [Symbol.asyncDispose]: controller.destroy,
      })
    },
    hide(trigger?: string) {
      const refWithMethods = controller.ref
      if (
        refWithMethods !== null &&
        'hide' in refWithMethods &&
        typeof refWithMethods.hide === 'function'
      ) {
        refWithMethods.hide(trigger, true)
      } else {
        controller.set({modelValue: false})
      }
    },
    toggle() {
      const currentItem = controller.get()
      const refWithMethods = controller.ref
      if (
        refWithMethods !== null &&
        'toggle' in refWithMethods &&
        typeof refWithMethods.toggle === 'function'
      ) {
        refWithMethods.toggle()
      } else {
        controller.set({modelValue: !currentItem?.value.props.modelValue})
      }
    },
    get: findItem,
    set(val: Partial<ValueInMapRecord<TStore['value']>['value']['props']>) {
      const current = findItem()
      if (current?.value) {
        current.value = {
          ...current.value,
          props: {
            ...current.value.props,
            ...val,
            /* oxlint-disable no-explicit-any */
            /* eslint-disable @typescript-eslint/no-explicit-any */
          } as any,
        }
      }
    },
    async destroy() {
      const item = findItem()
      if (!item) return
      if (item.value.props.modelValue) {
        await new Promise<BvTriggerableEvent>((resolve) => {
          const prev = item.value.props['onHidden'] as unknown
          item.value.props['onHidden'] = (e: BvTriggerableEvent) => {
            if (typeof prev === 'function') {
              prev(e)
            }
            resolve(e)
          }
          nextTick(() => {
            controller.hide('destroy')
          })
        })
      }
      store.value.delete(id)
    },
    [Symbol.asyncDispose]() {
      return controller.destroy()
    },
  } as ComponentController<TComponent, ValueInMapRecord<TStore['value']>>

  return {
    controller,
    resolve: resolveFunc,
  }
}

export const _newOrchestratorRegistry = (): {
  store: Readonly<Ref<OrchestratorStoreObject>>
  _isToastAppend: Readonly<Ref<boolean>>
  _setToastAppend: (value: boolean) => void
  _isOrchestratorInstalled: Readonly<Ref<boolean>>
  _setOrchestratorInstalled: (value: boolean) => void
} => {
  const _isOrchestratorInstalled = ref(false)
  const _isToastAppend = ref(false)

  return {
    store: ref({
      modal: new Map(),
      tooltip: new Map(),
      popover: new Map(),
      toast: new Map(),
    }),
    _isOrchestratorInstalled: readonly(_isOrchestratorInstalled),
    _setOrchestratorInstalled: (v) => {
      _isOrchestratorInstalled.value = v
    },
    _isToastAppend: readonly(_isToastAppend),
    _setToastAppend: (v) => {
      _isToastAppend.value = v
    },
  }
}

export const useOrchestratorRegistry = () => {
  const orchestratorRegistry = inject(orchestratorRegistryKey, null)

  if (orchestratorRegistry) {
    return orchestratorRegistry
  }
  const newOrchestratorRegistry = _newOrchestratorRegistry()
  provide(orchestratorRegistryKey, newOrchestratorRegistry)
  return newOrchestratorRegistry
}
