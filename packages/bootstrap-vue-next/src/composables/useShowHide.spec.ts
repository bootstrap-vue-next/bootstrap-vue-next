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

  const mountShowHide = (
    emit: (name: string, event: BvTriggerableEvent) => void,
    props: Record<string, unknown> = {},
    modelValue = false
  ) => {
    let state!: ReturnType<typeof useShowHide>
    const wrapper = mount(
      defineComponent({
        setup() {
          state = useShowHide({
            modelValue: ref<boolean | number>(modelValue),
            element: ref(null),
            props,
            emit: emit as EmitFn,
            id: ref('test'),
          })
          return () => null
        },
      })
    )
    return {state, wrapper}
  }
  const count = (emit: ReturnType<typeof vi.fn>, name: string) =>
    emit.mock.calls.filter(([n]) => n === name).length

  it('does not reveal the component when hide() lands before the pending show frame', async () => {
    vi.useFakeTimers()
    const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>()
    const {state, wrapper} = mountShowHide(emit)

    // show() defers revealing to requestAnimationFrame; hide() lands before that frame
    const shown = state.show()
    const hidden = state.hide('ok')
    await vi.runAllTimersAsync()
    expect(state.showRef.value).toBe(false)
    // no leave transition runs, so the hide finishes on its own and leaves nothing behind
    expect(state.isLeaving.value).toBe(false)
    expect(state.renderBackdropRef.value).toBe(false)
    expect(count(emit, 'hidden')).toBe(1)
    expect(await hidden).toBe('ok')
    expect(await shown).toBe('ok')

    // and the next show/hide cycle still works
    state.show()
    await vi.runAllTimersAsync()
    expect(state.showRef.value).toBe(true)
    state.hide('cancel')
    expect(count(emit, 'hide')).toBe(2)
    expect(count(emit, 'cancel')).toBe(1)
    wrapper.unmount()
  })

  it('does not settle a show(true) promise when a hide is prevented', async () => {
    vi.useFakeTimers()
    const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>()
    const {state, wrapper} = mountShowHide(emit, {noCloseOnBackdrop: true})

    const shown = state.show(true)
    await vi.runAllTimersAsync()
    expect(await state.hide('backdrop')).toBe('hide-prevented')

    state.hide('ok')
    await vi.runAllTimersAsync()
    for (const hook of state.transitionProps.onAfterLeave as (() => void)[]) hook()
    expect(await shown).toBe('ok')
    wrapper.unmount()
  })

  it('emits hide once when a listener hides the component from its trigger event', () => {
    const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>((name) => {
      if (name === 'ok') mounted.state.hide()
    })
    const mounted = mountShowHide(emit, {}, true)

    mounted.state.hide('ok')
    expect(count(emit, 'ok')).toBe(1)
    expect(count(emit, 'hide')).toBe(1)
    expect(count(emit, 'hide-prevented')).toBe(0)
    mounted.wrapper.unmount()
  })

  describe('event.signal', () => {
    it('stays live while the request is prevented and aborts once a hide is committed', () => {
      const events: BvTriggerableEvent[] = []
      const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>((name, event) => {
        events.push(event)
        if (name === 'ok') event.preventDefault()
      })
      const {state, wrapper} = mountShowHide(emit, {noCloseOnBackdrop: true}, true)

      state.hide('ok')
      const ok = events.find((e) => e.eventType === 'ok') as BvTriggerableEvent
      expect(ok.signal).toBeInstanceOf(AbortSignal)
      expect(ok.signal?.aborted).toBe(false)

      // a refused backdrop click does not abort it
      state.hide('backdrop')
      expect(ok.signal?.aborted).toBe(false)

      state.hide('cancel')
      expect(ok.signal?.aborted).toBe(true)
      wrapper.unmount()
    })

    it('is already aborted after a request that is not prevented', () => {
      const events: BvTriggerableEvent[] = []
      const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>((_, event) => {
        events.push(event)
      })
      const {state, wrapper} = mountShowHide(emit, {}, true)

      state.hide('ok')
      expect(events.find((e) => e.eventType === 'hide')?.signal?.aborted).toBe(true)
      wrapper.unmount()
    })

    it('aborts when the component unmounts', () => {
      const events: BvTriggerableEvent[] = []
      const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>((name, event) => {
        events.push(event)
        if (name === 'ok') event.preventDefault()
      })
      const {state, wrapper} = mountShowHide(emit, {}, true)

      state.hide('ok')
      const {signal} = events.find((e) => e.eventType === 'ok') as BvTriggerableEvent
      expect(signal?.aborted).toBe(false)
      wrapper.unmount()
      expect(signal?.aborted).toBe(true)
    })

    it('is null on events built outside a show or hide request', () => {
      expect(new BvTriggerableEvent('hidden').signal).toBeNull()
    })
  })

  it('finishes a hide that lands during a delayed show without leaving a backdrop', async () => {
    vi.useFakeTimers()
    const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>()
    const {state, wrapper} = mountShowHide(emit, {delay: {show: 500, hide: 0}})

    state.show()
    await vi.advanceTimersByTimeAsync(100) // frame has run, delay still pending
    expect(state.renderBackdropRef.value).toBe(true)
    state.hide('esc')
    await vi.runAllTimersAsync()

    expect(state.showRef.value).toBe(false)
    expect(state.isLeaving.value).toBe(false)
    expect(state.renderBackdropRef.value).toBe(false)
    const hidden = emit.mock.calls.find(([name]) => name === 'hidden')?.[1]
    expect(hidden?.trigger).toBe('esc')
    wrapper.unmount()
  })

  it('returns the hide promise when a listener hides the component while its show is pending', async () => {
    vi.useFakeTimers()
    const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>((name) => {
      if (name === 'ok') mounted.state.hide()
    })
    const mounted = mountShowHide(emit)

    mounted.state.show()
    const hidden = mounted.state.hide('ok')
    expect(hidden).toBeInstanceOf(Promise)
    expect(await hidden).toBe('')
    expect(count(emit, 'hidden')).toBe(1)
    mounted.wrapper.unmount()
  })

  it('lets a running leave finish a hide that cancels a show started during it', async () => {
    vi.useFakeTimers()
    const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>()
    const {state, wrapper} = mountShowHide(emit, {}, true)

    state.hide('ok')
    await vi.advanceTimersByTimeAsync(1) // hide timer ran: the leave transition is running
    expect(state.isLeaving.value).toBe(true)

    const shown = state.show()
    const hidden = state.hide('cancel') // before the show's frame
    expect(count(emit, 'hidden')).toBe(0)

    for (const hook of state.transitionProps.onAfterLeave as (() => void)[]) hook()
    const hiddenEvents = emit.mock.calls.filter(([name]) => name === 'hidden')
    expect(hiddenEvents).toHaveLength(1)
    expect(hiddenEvents[0]?.[1].trigger).toBe('cancel')
    expect(await hidden).toBe('cancel')
    expect(await shown).toBe('cancel')
    wrapper.unmount()
  })

  it('does not settle a show started from a hidden listener with the finished hide', async () => {
    vi.useFakeTimers()
    let reopened: Promise<boolean | string> | undefined
    const emit = vi.fn<(name: string, event: BvTriggerableEvent) => void>((name) => {
      if (name === 'hidden' && !reopened) reopened = mounted.state.show()
    })
    const mounted = mountShowHide(emit)

    const shown = mounted.state.show()
    const hidden = mounted.state.hide('ok') // before the show's frame
    expect(await hidden).toBe('ok')
    expect(await shown).toBe('ok')

    let reopenedSettled = false
    reopened?.then(() => {
      reopenedSettled = true
    })
    await vi.advanceTimersByTimeAsync(0)
    expect(reopened).toBeInstanceOf(Promise)
    expect(reopenedSettled).toBe(false)
    mounted.wrapper.unmount()
  })
})
