import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest'
import {nextTick, ref} from 'vue'
import {useCountdown} from './useCountdown'

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('initializes with correct values', () => {
    const length = ref(5000)
    const countdown = useCountdown(length, 1000)

    expect(countdown.value.value).toBeGreaterThan(0)
    expect(countdown.value.value).toBeLessThanOrEqual(5000)
    expect(countdown.isPaused.value).toBe(false)
  })

  it('countdown decreases over time', async () => {
    const length = ref(5000)
    const countdown = useCountdown(length, 1000)

    const initialValue = countdown.value.value

    vi.advanceTimersByTime(1000)
    await nextTick()

    expect(countdown.value.value).toBeLessThan(initialValue)
  })

  it('can pause and resume countdown', async () => {
    const length = ref(5000)
    const countdown = useCountdown(length, 1000)

    countdown.pause()
    expect(countdown.isPaused.value).toBe(true)

    const valueAfterPause = countdown.value.value
    vi.advanceTimersByTime(1000)
    await nextTick()

    // Value should not change while paused
    expect(countdown.value.value).toBe(valueAfterPause)

    countdown.resume()
    expect(countdown.isPaused.value).toBe(false)

    vi.advanceTimersByTime(1000)
    await nextTick()

    // Value should decrease after resume
    expect(countdown.value.value).toBeLessThan(valueAfterPause)
  })

  it('can restart countdown', async () => {
    const length = ref(5000)
    const countdown = useCountdown(length, 1000)

    vi.advanceTimersByTime(2000)
    await nextTick()

    const beforeRestart = countdown.value.value
    expect(beforeRestart).toBeLessThan(5000)

    countdown.restart()
    await nextTick()

    // After restart, value should be close to original length
    expect(countdown.value.value).toBeGreaterThan(beforeRestart)
    expect(countdown.value.value).toBeLessThanOrEqual(5000)
  })

  it('can stop countdown', async () => {
    const length = ref(5000)
    const countdown = useCountdown(length, 1000)

    countdown.stop()
    await nextTick()

    expect(countdown.value.value).toBeLessThanOrEqual(0)
    expect(countdown.isActive.value).toBe(false)
  })

  it('handles document visibility change when countdown has expired', async () => {
    const length = ref(1000)
    const countdown = useCountdown(length, 'requestAnimationFrame')

    // Simulate the countdown being active
    expect(countdown.isActive.value).toBe(true)

    // Simulate time passing beyond the countdown length
    // This would normally trigger the callback, but if the tab is inactive,
    // requestAnimationFrame won't trigger
    vi.advanceTimersByTime(2000)
    await nextTick()

    // Mock document visibility changing from hidden to visible
    const visibilityEvent = new Event('visibilitychange')
    Object.defineProperty(document, 'visibilityState', {
      writable: true,
      configurable: true,
      value: 'visible',
    })
    document.dispatchEvent(visibilityEvent)
    await nextTick()

    // The countdown should have detected that time has expired
    // and should have paused itself
    expect(countdown.isActive.value).toBe(false)
  })

  it('does not interfere with countdown when visibility changes but not expired', async () => {
    const length = ref(5000)
    const countdown = useCountdown(length, 'requestAnimationFrame')

    expect(countdown.isActive.value).toBe(true)

    // Simulate a short time passing (not expired)
    vi.advanceTimersByTime(500)
    await nextTick()

    const valueBeforeVisibilityChange = countdown.value.value

    // Mock document visibility changing
    const visibilityEvent = new Event('visibilitychange')
    Object.defineProperty(document, 'visibilityState', {
      writable: true,
      configurable: true,
      value: 'visible',
    })
    document.dispatchEvent(visibilityEvent)
    await nextTick()

    // The countdown should still be active since it hasn't expired
    expect(countdown.isActive.value).toBe(true)
    // Value should be approximately the same (small variance allowed for timing)
    expect(Math.abs(countdown.value.value - valueBeforeVisibilityChange)).toBeLessThan(100)
  })

  it('does not trigger on visibility change when countdown is paused', async () => {
    const length = ref(5000)
    const countdown = useCountdown(length, 'requestAnimationFrame')

    countdown.pause()
    expect(countdown.isPaused.value).toBe(true)

    // Simulate time passing beyond the countdown length
    vi.advanceTimersByTime(6000)
    await nextTick()

    // Mock document visibility changing
    const visibilityEvent = new Event('visibilitychange')
    Object.defineProperty(document, 'visibilityState', {
      writable: true,
      configurable: true,
      value: 'visible',
    })
    document.dispatchEvent(visibilityEvent)
    await nextTick()

    // The countdown should remain paused and not auto-complete
    // because it was manually paused
    expect(countdown.isPaused.value).toBe(true)
  })
})
