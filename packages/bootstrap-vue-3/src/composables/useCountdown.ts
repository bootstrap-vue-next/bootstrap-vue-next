import {
  type MaybeComputedRef,
  resolveUnref,
  useIntervalFn,
  type UseIntervalFnOptions,
} from '@vueuse/core'
import {computed, type ComputedRef, readonly, type Ref, ref, watchEffect} from 'vue'

type VoidFn = () => void

interface CountdownReturn {
  isActive: Readonly<Ref<boolean>>
  isPaused: Readonly<Ref<boolean>>
  restart: VoidFn
  stop: VoidFn
  resume: VoidFn
  pause: VoidFn
  value: ComputedRef<number>
}

/**
 * A simple interval timer that counts down the remaining seconds
 *
 * @param {MaybeComputedRef<number>} length the total amount of time to loop through in ms
 * @param {MaybeComputedRef<number>} interval how often the interval should refresh. Default 1000
 * @param {UseIntervalFnOptions} intervalOpts opts to pass to the interval fn. Default {}
 * @important ensure that you call `stop()` before unmount in the component
 */
export default (
  length: MaybeComputedRef<number>,
  interval: MaybeComputedRef<number> = ref(1000),
  intervalOpts: UseIntervalFnOptions = {}
): CountdownReturn => {
  const isPaused = ref(false)

  const intervalsPassed = ref<number>(0)

  // Has watchEffect to set
  const resolvedLength = ref(resolveUnref(length))

  // Has watchEffect to set
  const intervalLength = ref(resolveUnref(interval))

  const amountOfIntervals = computed(() => Math.ceil(resolvedLength.value / intervalLength.value))

  const value = computed(() =>
    isActive.value || isPaused.value
      ? Math.round(resolvedLength.value - intervalsPassed.value * intervalLength.value)
      : 0
  )

  const {pause, resume, isActive} = useIntervalFn(
    () => (intervalsPassed.value = intervalsPassed.value + 1),
    interval,
    intervalOpts
  )

  const restart = () => {
    isPaused.value = false
    intervalsPassed.value = 0
    resume()
  }

  const stop = () => {
    isPaused.value = false
    intervalsPassed.value = amountOfIntervals.value
    // pause() // Only here for the sake of demonstrating the flow. It will be called in the watchEffect
  }

  watchEffect(() => {
    const newVal = resolveUnref(length)
    const oldVal = resolvedLength.value
    if (newVal === oldVal) return
    resolvedLength.value = newVal
    stop()
    restart()
  })

  watchEffect(() => {
    const newVal = resolveUnref(interval)
    const oldVal = intervalLength.value
    if (newVal === oldVal) return
    intervalLength.value = newVal
    stop()
    restart()
  })

  watchEffect(() => {
    if (intervalsPassed.value > amountOfIntervals.value) {
      intervalsPassed.value = amountOfIntervals.value
    }
    if (intervalsPassed.value === amountOfIntervals.value) {
      pause()
    }
  })

  const myPause = () => {
    if (isActive.value === false) return
    isPaused.value = true
    pause()
  }

  const myResume = () => {
    if (intervalsPassed.value === amountOfIntervals.value) return
    isPaused.value = false
    resume()
  }

  return {
    isActive: readonly(isActive),
    isPaused: readonly(isPaused),
    restart,
    stop,
    pause: myPause,
    resume: myResume,
    value,
  }
}
