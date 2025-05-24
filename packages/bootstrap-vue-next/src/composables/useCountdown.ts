import {useTimestamp, type UseTimestampOptions} from '@vueuse/core'
import {computed, type MaybeRefOrGetter, readonly, ref, toRef, watch} from 'vue'

/**
 * A simple interval timer that counts down the remaining seconds
 *
 * @param {MaybeRefOrGetter<number>} length the total amount of time to loop through in ms
 * @param {MaybeRefOrGetter<number>} interval how often the interval should refresh. Default 1000
 * @param {Readonly<UseIntervalFnOptions>} intervalOpts opts to pass to the interval fn. Default {}
 */
export const useCountdown = (
  length: MaybeRefOrGetter<number>,
  interval: number | 'requestAnimationFrame',
  timestampOpts: UseTimestampOptions<true> = {}
) => {
  const resolvedLength = readonly(toRef(length))

  const isPaused = ref(false)

  const target = ref(Date.now() + resolvedLength.value)

  const {isActive, pause, resume, timestamp} = useTimestamp({
    interval,
    controls: true,
    callback: (v) => {
      if (v >= target.value) {
        isPaused.value = false
        pause()
      }
    },
    ...timestampOpts,
  })

  const value = computed(() => target.value - timestamp.value)

  const restart = () => {
    target.value = Date.now() + resolvedLength.value
    resume()
  }
  watch(resolvedLength, () => {
    if (resolvedLength.value > 0) {
      restart()
    }
  })

  const myPause = () => {
    isPaused.value = true
    pause()
  }
  const myResume = () => {
    isPaused.value = false
    const remainingTime = target.value - timestamp.value
    target.value = Date.now() + remainingTime
    resume()
  }
  const stop = () => {
    pause()
    timestamp.value = target.value
    isPaused.value = false
  }

  return {
    isActive: readonly(isActive),
    isPaused: readonly(isPaused),
    stop,
    pause: myPause,
    resume: myResume,
    restart,
    value,
  }
}
