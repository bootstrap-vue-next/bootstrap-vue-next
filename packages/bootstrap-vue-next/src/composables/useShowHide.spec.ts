import {mount} from '@vue/test-utils'
import {afterEach, describe, expect, it, vi} from 'vitest'
import {defineComponent, ref, type EmitFn} from 'vue'
import {BvTriggerableEvent} from '../utils'
import {useShowHide} from './useShowHide'

describe('useShowHide', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('ignores repeated hides during the delay and leave, then allows hiding after showing again', async () => {
    vi.useFakeTimers()
    const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>()
    let state!: ReturnType<typeof useShowHide>
    const wrapper = mount(
      defineComponent({
        setup() {
          state = useShowHide({
            modelValue: ref<boolean | number>(true),
            element: ref(null),
            props: {noCloseOnBackdrop: true},
            emit: emit as EmitFn,
            id: ref('test'),
          })
          return () => null
        },
      })
    )

    const first = state.hide('ok')
    expect(state.hide('ok')).toBe(first)
    await vi.runAllTimersAsync()
    expect(state.hide('backdrop')).toBe(first)
    expect(emit.mock.calls.filter(([name]) => name === 'ok')).toHaveLength(1)
    expect(emit.mock.calls.filter(([name]) => name === 'hide')).toHaveLength(1)
    expect(emit.mock.calls.filter(([name]) => name === 'hide-prevented')).toHaveLength(0)

    for (const hook of state.transitionProps.onAfterLeave as (() => void)[]) hook()
    expect(await first).toBe('ok')
    const hidden = emit.mock.calls.find(([name]) => name === 'hidden')?.[1] as BvTriggerableEvent
    expect(hidden.trigger).toBe('ok')
    expect(await state.hide('cancel')).toBe('')

    state.show()
    await vi.runAllTimersAsync()
    state.hide('cancel')
    expect(emit.mock.calls.filter(([name]) => name === 'hide')).toHaveLength(2)
    wrapper.unmount()
  })

  it('allows another hide after a prevented hide', async () => {
    const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>((name, event) => {
      if (name === 'ok') event.preventDefault()
    })
    let state!: ReturnType<typeof useShowHide>
    const wrapper = mount(
      defineComponent({
        setup() {
          state = useShowHide({
            modelValue: ref<boolean | number>(true),
            element: ref(null),
            props: {noCloseOnBackdrop: true},
            emit: emit as EmitFn,
            id: ref('test'),
          })
          return () => null
        },
      })
    )

    expect(await state.hide('backdrop')).toBe('hide-prevented')
    expect(await state.hide('ok')).toBe('hide-prevented')
    const hide = state.hide('cancel')
    expect(state.hide('cancel')).toBe(hide)
    expect(emit.mock.calls.filter(([name]) => name === 'hide-prevented')).toHaveLength(2)
    expect(emit.mock.calls.filter(([name]) => name === 'hide')).toHaveLength(2)
    expect(emit.mock.calls.filter(([name]) => name === 'cancel')).toHaveLength(1)
    for (const hook of state.transitionProps.onAfterLeave as (() => void)[]) hook()
    expect(await hide).toBe('cancel')
    wrapper.unmount()
  })

  it('allows hiding after show cancels a pending hide', () => {
    let state!: ReturnType<typeof useShowHide>
    const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>()
    const wrapper = mount(
      defineComponent({
        setup() {
          state = useShowHide({
            modelValue: ref<boolean | number>(true),
            element: ref(null),
            props: {},
            emit: emit as EmitFn,
            id: ref('test'),
          })
          return () => null
        },
      })
    )

    state.hide('ok')
    state.show()
    state.hide('cancel')
    expect(emit.mock.calls.filter(([name]) => name === 'hide')).toHaveLength(2)
    wrapper.unmount()
  })
})
