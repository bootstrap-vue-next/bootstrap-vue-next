import {type MaybeComputedRef, resolveUnref, useTimeoutFn, UseTimeoutFnOptions} from '@vueuse/core'
import {computed, type ComputedRef, onBeforeUnmount, type Ref, ref, toRef, watch} from 'vue'

type VoidFn = () => void

interface CountdownReturn {
  isPending: Ref<boolean>
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
 */
export default (
  length: MaybeComputedRef<number>,
  opts: UseTimeoutFnOptions = {immediate: false}
): CountdownReturn => {
  const timePassed = ref(0)

  const pausedAtTime = ref<null | number>(null)

  const resolvedLength = computed(() => resolveUnref(length))

  /**
   * When starting the timer, check if there is a paused set-point.
   * If there is, that is how long the timer should last. If not, use arg time
   */
  const computedLength = computed(() => pausedAtTime.value ?? resolvedLength.value)

  let interval: ReturnType<typeof setInterval> = setInterval(() => {
    timePassed.value = timePassed.value + 1000
  }, 1000)

  const resetTimePassed = () => {
    timePassed.value = 0
  }

  const resetPauseTimer = () => {
    pausedAtTime.value = null
  }

  const resetInterval = () => {
    clearInterval(interval)
    interval = setInterval(() => {
      timePassed.value = timePassed.value + 1000
    }, 1000)
  }

  const {isPending, start, stop} = useTimeoutFn(
    () => clearInterval(interval),
    toRef(computedLength, 'value'),
    {immediate: opts.immediate}
  )

  const myResume = () => {
    // If there is no pause set-point OR if there is not a FULL SECOND to pass, do not resume
    // ie if length is 5400ms, and timePassed is at 5s, remaining is 400, check 400/1000 for if there is a full second to pass
    if (pausedAtTime.value === null || computedLength.value / 1000 < 1) return
    resetInterval()
    start()
    resetPauseTimer()
  }

  const myPause = () => {
    // Check if the timePassed is passed the initial length of the timer. Do not create a pause set-point if the timer is done
    // OR if the timer has not started, do not create a pause set-point
    if (timePassed.value >= resolvedLength.value || timePassed.value === 0) return
    pausedAtTime.value = resolvedLength.value - timePassed.value
    clearInterval(interval)
    stop()
  }

  const myRestart = () => {
    resetTimePassed()
    resetPauseTimer()
    resetInterval()
    start()
  }

  const myStop = () => {
    resetTimePassed()
    resetPauseTimer()
    clearInterval(interval)
    stop()
  }

  const computedVal = computed(() =>
    isPending.value ? Math.round((computedLength.value - timePassed.value) / 1000) : 0
  )

  /**
   * If arg length is changed, reset timer
   */
  watch(resolvedLength, () => {
    myRestart()
  })

  /**
   * Cleanup
   */
  onBeforeUnmount(() => {
    stop()
    clearInterval(interval)
  })

  return {
    isPending,
    restart: myRestart,
    stop: myStop,
    pause: myPause,
    resume: myResume,
    value: computedVal,
  }
}
