import {type MaybeRef, type MaybeRefOrGetter, onUnmounted, shallowRef, toValue} from 'vue'

// I've made something wild here
export const useManualTransition = (
  el: MaybeRef<HTMLElement | null>,
  classEnter: MaybeRefOrGetter<string | string[]>,
  classLeave: MaybeRefOrGetter<string | string[]>
) => {
  const element = shallowRef(el)

  const transitionListener = shallowRef<() => void>()

  const closeActiveListener = () => {
    if (transitionListener.value) {
      element.value?.removeEventListener('transitionend', transitionListener.value)
    }
  }

  const resolveClassList = (val: string | readonly string[]) =>
    typeof val === 'string' ? val.split(/\s+/) : val

  const startTransition = (onEnd?: () => void) => {
    // Ensure any previous ones are closed before starting a new one
    closeActiveListener()

    const currentClasses = resolveClassList(toValue(classEnter))

    element.value?.classList.add(...currentClasses)

    transitionListener.value = () => {
      element.value?.classList.remove(...currentClasses)
      onEnd?.()
    }

    element.value?.addEventListener('transitionend', transitionListener.value, {once: true})
  }

  const endTransition = (onEnd?: () => void) => {
    // Ensure any previous ones are closed before starting a new one
    closeActiveListener()

    const currentClasses = resolveClassList(toValue(classLeave))

    element.value?.classList.add(...currentClasses)

    transitionListener.value = () => {
      element.value?.classList.remove(...currentClasses)
      onEnd?.()
    }

    element.value?.addEventListener('transitionend', transitionListener.value, {once: true})
  }

  // Close out any remaining listeners
  onUnmounted(closeActiveListener)

  return {
    startTransition,
    endTransition,
  }
}
