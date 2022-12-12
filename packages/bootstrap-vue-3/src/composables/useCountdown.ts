import {
  type MaybeComputedRef,
  resolveUnref,
  useIntervalFn,
  type UseIntervalFnOptions,
} from '@vueuse/core'
import {computed, type ComputedRef, type Ref, ref, watchEffect} from 'vue'

type VoidFn = () => void

interface CountdownReturn {
  isActive: Ref<boolean>
  restart: VoidFn
  stop: VoidFn
  resume: VoidFn
  pause: VoidFn
  value: ComputedRef<number>
}

/**
 * In order to make the timeout reactive if input length changes, the timer restarts.
 * Meaning if you change length from 5 seconds to 2 seconds, it will lower to 2 seconds.
 * If you change from 5 seconds to 10 seconds, it will restart the timer to 10 seconds.
 *
 * @important ensure that you call `stop()` before unmount in the component
 */
export default (
  length: MaybeComputedRef<number>,
  interval: MaybeComputedRef<number> = 1000,
  intervalOpts: UseIntervalFnOptions
): CountdownReturn => {
  const intervalsPassed = ref<number>(0)

  let resolvedLength: number = resolveUnref(length)

  // TODO make sure this is reactive enough
  watchEffect(() => (resolvedLength = resolveUnref(length)))

  let intervalLength: number = resolveUnref(interval)

  watchEffect(() => (intervalLength = resolveUnref(interval)))

  const amountOfIntervals = computed(() => Math.ceil(resolvedLength / intervalLength))

  const computedVal = computed(() =>
    isActive.value
      ? Math.round((resolvedLength - intervalsPassed.value * intervalLength) / 1000)
      : 0
  )

  const {pause, resume, isActive} = useIntervalFn(
    () => {
      intervalsPassed.value = intervalsPassed.value + 1
    },
    interval,
    {...intervalOpts}
  )

  const restart = () => {
    intervalsPassed.value = 0
    resume()
  }

  const stop = () => {
    intervalsPassed.value = amountOfIntervals.value
    // pause() // Only here for the sake of demonstrating the flow. It will be called in the watchEffect
  }

  watchEffect(() => {
    if (intervalsPassed.value > amountOfIntervals.value) {
      intervalsPassed.value = amountOfIntervals.value
    }
    if (intervalsPassed.value === amountOfIntervals.value) {
      pause()
    }
  })
  // TODO
  /**
   * make sure that the time is correct and normalized.
   *
   * Perhaps a better solution is to get the amount of INTERVALS required
   * Then, loop through the amount of INTERVALS.
   * Perhaps we don't even need a Timeout
   * All we would need to do is
   * Get a computed total of the number of intervals
   * on each loop through, add 1 to the amount of times passed
   * add a reset option to reset the amount of times passed to 0
   * Amount of intervals = Math.ceil(length / interval)
   * the output "value" is Math.ceil(times passed * interval) / 1000 to normalize to full seconds
   * interval = 500ms * times passed = 31
   * 500 * 41 = 20500 = 20.5 seconds
   * We then normalize and create these outputs as stated in the below computed
   */

  /**
   * If arg length is changed, reset timer
   */
  // watch(resolvedLength, () => {
  // restart()
  // })

  return {
    isActive,
    restart,
    stop,
    pause,
    resume,
    value: computedVal,
  }
}
