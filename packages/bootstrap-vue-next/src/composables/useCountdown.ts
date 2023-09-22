import {useIntervalFn, type UseIntervalFnOptions} from '@vueuse/core'
import {type MaybeRefOrGetter, readonly, ref, type Ref, toRef, watch, watchEffect} from 'vue'

type VoidFn = () => void

interface CountdownReturn {
  isActive: Readonly<Ref<boolean>>
  isPaused: Readonly<Ref<boolean>>
  restart: VoidFn
  stop: VoidFn
  resume: VoidFn
  pause: VoidFn
  value: Readonly<Ref<number>>
}

/**
 * A simple interval timer that counts down the remaining seconds
 *
 * @param {MaybeRefOrGetter<number>} length the total amount of time to loop through in ms
 * @param {MaybeRefOrGetter<number>} interval how often the interval should refresh. Default 1000
 * @param {UseIntervalFnOptions} intervalOpts opts to pass to the interval fn. Default {}
 * @important ensure that you call `stop()` before unmount in the component
 */
export default (
  length: MaybeRefOrGetter<number>,
  interval: MaybeRefOrGetter<number> = ref(1000),
  intervalOpts: UseIntervalFnOptions = {}
): CountdownReturn => {
  const resolvedLength = readonly(toRef(length))

  const resolvedInterval = readonly(toRef(interval))

  const isPaused = ref(false)

  const intervalsPassed = ref(0)

  const amountOfIntervals = toRef(() => Math.ceil(resolvedLength.value / resolvedInterval.value))

  const value = toRef(() =>
    isActive.value || isPaused.value
      ? Math.round(resolvedLength.value - intervalsPassed.value * resolvedInterval.value)
      : 0
  )

  const {pause, resume, isActive} = useIntervalFn(
    () => {
      intervalsPassed.value = intervalsPassed.value + 1
    },
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
    if (intervalsPassed.value > amountOfIntervals.value) {
      intervalsPassed.value = amountOfIntervals.value
    }
    if (intervalsPassed.value === amountOfIntervals.value) {
      pause()
    }
  })

  watch([resolvedInterval, resolvedLength], () => {
    stop()
    restart()
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
