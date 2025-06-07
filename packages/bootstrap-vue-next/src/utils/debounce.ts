import {type MaybeRefOrGetter, toValue} from 'vue'
import type {
  AnyFn,
  ArgumentsType,
  DebounceFilterOptions,
  EventFilter,
  FunctionArgs,
  UseDebounceFnReturn,
} from '@vueuse/core'

export const noop = () => {}

/**
 * @internal
 */
function createFilterWrapper<T extends AnyFn>(filter: EventFilter & {cancel: () => void}, fn: T) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  function wrapper(this: any, ...args: ArgumentsType<T>) {
    return new Promise<Awaited<ReturnType<T>>>((resolve, reject) => {
      // make sure it's a promise
      Promise.resolve(filter(() => fn.apply(this, args), {fn, thisArg: this, args}))
        .then(resolve)
        .catch(reject)
    })
  }

  // https://github.com/vueuse/vueuse/pull/4561
  wrapper.cancel = filter.cancel
  return wrapper
}

/**
 * Create an EventFilter that debounce the events
 */
function debounceFilter(ms: MaybeRefOrGetter<number>, options: DebounceFilterOptions = {}) {
  let timer: ReturnType<typeof setTimeout> | undefined
  let maxTimer: ReturnType<typeof setTimeout> | undefined | null
  let lastRejector: AnyFn = noop

  const _clearTimeout = (timer: ReturnType<typeof setTimeout>) => {
    clearTimeout(timer)
    lastRejector()
    lastRejector = noop
  }

  let lastInvoker: () => void

  const filter: EventFilter & {cancel: () => void} = (invoke) => {
    const duration = toValue(ms)
    const maxDuration = toValue(options.maxWait)

    if (timer) _clearTimeout(timer)

    if (duration <= 0 || (maxDuration !== undefined && maxDuration <= 0)) {
      if (maxTimer) {
        _clearTimeout(maxTimer)
        maxTimer = null
      }
      return Promise.resolve(invoke())
    }

    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve
      lastInvoker = invoke
      // Create the maxTimer. Clears the regular timer on invoke
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer) _clearTimeout(timer)
          maxTimer = null
          resolve(lastInvoker())
        }, maxDuration)
      }

      // Create the regular timer. Clears the max timer on invoke
      timer = setTimeout(() => {
        if (maxTimer) _clearTimeout(maxTimer)
        maxTimer = null
        resolve(invoke())
      }, duration)
    })
  }

  // https://github.com/vueuse/vueuse/pull/4561
  filter.cancel = () => {
    if (timer) _clearTimeout(timer)
    if (maxTimer) _clearTimeout(maxTimer)
    maxTimer = null
  }

  return filter
}

/**
 * Debounce execution of a function.
 *
 * @see https://vueuse.org/useDebounceFn
 * @param  fn          A function to be executed after delay milliseconds debounced.
 * @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  options     Options
 *
 * @return A new, debounce, function, provided with a cancel method.
 */
export function useDebounceFn<T extends FunctionArgs>(
  fn: T,
  ms: MaybeRefOrGetter<number> = 200,
  options: DebounceFilterOptions = {}
): UseDebounceFnReturn<T> & {cancel: () => void} {
  return createFilterWrapper(debounceFilter(ms, options), fn)
}
