import {
  type MaybeComputedRef,
  resolveUnref,
  useIntervalFn,
  useTimeoutFn,
  UseTimeoutFnOptions,
} from '@vueuse/core'
import {computed, type ComputedRef, type Ref, ref, toRef, watch} from 'vue'

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
 *
 * @important ensure that you call `stop()` before unmount in the component
 */
export default (
  length: MaybeComputedRef<number>,
  interval = 1000,
  opts: UseTimeoutFnOptions = {immediate: true}
): CountdownReturn => {
  const timePassed = ref(0)

  const pausedAtTime = ref<null | number>(null)

  const resolvedLength = computed(() => resolveUnref(length))

  /**
   * When starting the timer, check if there is a paused set-point.
   * If there is, that is how long the timer should last. If not, use arg time
   */
  const computedLength = computed(() => pausedAtTime.value ?? resolvedLength.value)

  const {pause: pauseInterval, resume: resumeInterval} = useIntervalFn(
    () => {
      timePassed.value = timePassed.value + interval
    },
    interval,
    {immediate: opts.immediate}
  )

  const {
    isPending,
    start: startTimeout,
    stop: stopTimeout,
  } = useTimeoutFn(
    () => {
      pauseInterval()
    },
    toRef(computedLength, 'value'),
    {
      immediate: opts.immediate,
    }
  )

  const coldStart = () => {
    resumeInterval()
    startTimeout()
  }

  const coldStop = () => {
    pauseInterval()
    stopTimeout()
  }

  const restartTimeAndPaused = () => {
    timePassed.value = 0
    pausedAtTime.value = null
  }

  const resume = () => {
    // If there is no pause set-point OR if there is not a FULL INTERVAL to pass, do not resume
    // ie if there is length 5450 and interval 100, and 54 intervals have passed, (54*100=5400ms have passed)
    // there would be a remaining 50ms, so check check 50/100 to check if there is a full interval to pass
    if (pausedAtTime.value === null || computedLength.value / interval < 1) return
    coldStart()
    pausedAtTime.value = null
  }

  const pause = () => {
    // Check if the timePassed is passed the initial length of the timer. Do not create a pause set-point if the timer is done
    // OR if the timer has not started, do not create a pause set-point
    if (timePassed.value >= resolvedLength.value || timePassed.value === 0) return
    pausedAtTime.value = resolvedLength.value - timePassed.value
    coldStop()
  }

  const restart = () => {
    restartTimeAndPaused()
    pauseInterval()
    coldStart()
  }

  const stop = () => {
    restartTimeAndPaused()
    coldStop()
  }

  const computedVal = computed(() =>
    isPending.value || pausedAtTime.value !== null
      ? Math.round((computedLength.value - timePassed.value) / 1000)
      : 0
  )

  /**
   * If arg length is changed, reset timer
   */
  watch(resolvedLength, () => {
    restart()
  })

  return {
    isPending,
    restart,
    stop,
    pause,
    resume,
    value: computedVal,
  }
}
