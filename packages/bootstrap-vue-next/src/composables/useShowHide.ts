import {
  type ComponentInternalInstance,
  computed,
  type EmitFn,
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  readonly,
  ref,
  type Ref,
  type TransitionProps,
  watch,
} from 'vue'
import {showHideRegistryKey} from '../utils/keys'
import {BvTriggerableEvent} from '../utils'
import {useEventListener, useThrottleFn} from '@vueuse/core'
import {noop} from '../utils/functions'

export const fadeBaseTransitionProps = {
  name: 'fade',
  enterActiveClass: '',
  enterFromClass: 'showing',
  enterToClass: '',
  leaveActiveClass: '',
  leaveFromClass: '',
  leaveToClass: 'showing',
  css: true,
} as const satisfies TransitionProps

export const useShowHide = (
  {
    modelValue,
    element,
    props,
    emit,
    id,
  }: {
    modelValue: Ref<boolean | number>
    props: {
      visible?: boolean
      show?: boolean
      noAnimation?: boolean
      noFade?: boolean
      noCloseOnBackdrop?: boolean
      noCloseOnEsc?: boolean
      transitionProps?: TransitionProps
      lazy?: boolean
      initialAnimation?: boolean
      delay?:
        | number
        | {
            show: number
            hide: number
          }
    } & Record<string, unknown>
    emit: EmitFn
    element: Ref<HTMLElement | null>
    id: Ref<string>
  },
  options: {
    transitionProps?: TransitionProps
    showFn?: () => void
    hideFn?: () => void
  } = {
    transitionProps: {},
    showFn: () => {},
    hideFn: () => {},
  }
) => {
  let noAction = false
  const initialShow = (!!modelValue.value && !props.initialAnimation) || props.visible || false
  const showRef = ref<boolean>(initialShow)
  const renderRef = ref<boolean>(initialShow)
  const renderBackdropRef = ref<boolean>(initialShow)

  let isCountdown = typeof modelValue.value !== 'boolean'

  watch(modelValue, () => {
    isCountdown = typeof modelValue.value !== 'boolean'
    if (noAction) {
      noAction = false
      return
    }
    if (modelValue.value) {
      show()
    } else {
      hide('modelValue', true)
    }
  })

  const localNoAnimation = ref(initialShow)
  const localTemporaryHide = ref(false)
  const computedNoAnimation = computed(
    () => props.noAnimation || props.noFade || localNoAnimation.value || false
  )
  let isMounted = false
  onMounted(() => {
    isMounted = true
    if (!props.show && initialShow) {
      // show without delay or animation
      const requestSignal = currentRequestSignal()
      const event = buildTriggerableEvent('show', {cancelable: true, signal: requestSignal})
      emit('show', event)

      if (event.defaultPrevented) {
        emit('show-prevented', buildTriggerableEvent('show-prevented', {signal: requestSignal}))
        return
      }
      endRequests()
      localNoAnimation.value = true
      if (!modelValue.value) {
        noAction = true
        modelValue.value = true
      }
      renderRef.value = true
      renderBackdropRef.value = true
      isVisible.value = true
      backdropVisible.value = true
      backdropReady.value = true
      showRef.value = true
      options.showFn?.()
    } else if (props.show || (!!modelValue.value && props.initialAnimation)) {
      show()
    }
  })

  watch(
    () => props.visible,
    (newVal) => {
      localNoAnimation.value = true

      nextTick(() => {
        if (newVal) isVisible.value = true
        if (newVal) {
          show()
        } else {
          hide('visible-prop', true)
        }
      })
    }
  )
  watch(
    () => props.show,
    (newVal) => {
      if (newVal) {
        show()
      } else {
        hide('show-prop', true)
      }
    }
  )
  // todo: remove
  useEventListener(
    element,
    'bv-toggle',
    () => {
      modelValue.value = !modelValue.value
    },
    {passive: true}
  )

  const buildTriggerableEvent = (
    type: string,
    opts: Readonly<Partial<BvTriggerableEvent>> = {}
  ): BvTriggerableEvent =>
    new BvTriggerableEvent(type, {
      cancelable: false,
      target: element?.value || null,
      relatedTarget: null,
      trigger: null,
      ...opts,
      componentId: id?.value,
    })

  let showTimeout: ReturnType<typeof setTimeout> | undefined
  let hideTimeout: ReturnType<typeof setTimeout> | undefined
  let _Resolve: ((value: boolean | string) => void) | undefined
  let _Promise: Promise<boolean | string> | undefined
  let _resolveOnHide: boolean | undefined

  /**
   * The show or hide that was last committed. Committing the next one aborts it, which cancels its
   * pending frame and timer, so a superseded show can't reveal the component after a hide (or the
   * reverse). It stays 'hide' after the component is hidden, so repeated hides are ignored until
   * the next show
   */
  let transition: {type: 'show' | 'hide'; controller: AbortController} | undefined
  /**
   * Backs `event.signal` on show and hide request events. Requests share it until the component
   * commits to a show or hide (or unmounts), which aborts it. A prevented request leaves it running,
   * so async work started for it stops only once the component actually changes state
   */
  let requestScope: AbortController | undefined
  const currentRequestSignal = (): AbortSignal => (requestScope ??= new AbortController()).signal
  const endRequests = () => {
    requestScope?.abort()
    requestScope = undefined
  }
  const beginTransition = (type: 'show' | 'hide'): AbortSignal => {
    endRequests()
    transition?.controller.abort()
    const controller = new AbortController()
    transition = {type, controller}
    return controller.signal
  }

  const afterFrame = (signal: AbortSignal, fn: () => void) => {
    const frame = requestAnimationFrame(() => {
      if (!signal.aborted) fn()
    })
    signal.addEventListener('abort', () => cancelAnimationFrame(frame), {once: true})
  }

  const show = (resolveOnHide: boolean = false): Promise<boolean | string> => {
    if (showRef.value && !hideTimeout && !_Promise) return Promise.resolve(true)
    _resolveOnHide = resolveOnHide
    if (showRef.value && !hideTimeout && _Promise) return _Promise

    _Promise = new Promise<boolean | string>((resolve) => {
      _Resolve = resolve
    })

    const requestSignal = currentRequestSignal()
    const event = buildTriggerableEvent('show', {cancelable: true, signal: requestSignal})
    emit('show', event)

    if (event.defaultPrevented) {
      emit('show-prevented', buildTriggerableEvent('show-prevented', {signal: requestSignal}))
      if (isVisible.value) {
        isVisible.value = false
      }
      if (modelValue.value && !isCountdown) {
        noAction = true
        nextTick(() => {
          modelValue.value = false
        })
      }
      _Resolve?.('show-prevented')
      return _Promise
    }
    const signal = beginTransition('show')
    renderRef.value = true
    renderBackdropRef.value = true
    const reveal = () => {
      if (!isMounted) return
      showTimeout = undefined
      showRef.value = true
      options.showFn?.()
      if (!modelValue.value) {
        noAction = true
        nextTick(() => {
          modelValue.value = true
        })
      }
    }
    afterFrame(signal, () => {
      if (localNoAnimation.value || props.delay === undefined) {
        reveal()
        return
      }
      showTimeout = setTimeout(
        reveal,
        typeof props.delay === 'number' ? props.delay : props.delay?.show || 0
      )
      signal.addEventListener(
        'abort',
        () => {
          clearTimeout(showTimeout)
          showTimeout = undefined
        },
        {once: true}
      )
    })
    return _Promise
  }

  let leaveTrigger: string | undefined
  const hide = (trigger?: string, noTriggerEmit?: boolean): Promise<string> => {
    // A hide is already committed: report on it rather than emitting the hide events again
    if (transition?.type === 'hide') {
      return (_Promise as Promise<string> | undefined) ?? Promise.resolve('')
    }
    if (!showRef.value && !showTimeout && !renderRef.value) return Promise.resolve('')
    // The promise may belong to a show (still entering, or show(true) waiting for the hide).
    // A prevented hide must leave that one alone
    const ownsPromise = !_Promise
    if (!_Promise)
      _Promise = new Promise<string>((resolve) => {
        ;(_Resolve as (value: string | PromiseLike<string>) => void) = resolve
      })
    // Captured because a hide started by a listener may settle and clear _Promise before we return
    const hidePromise = _Promise as Promise<string>
    if (typeof trigger !== 'string') trigger = undefined
    const transitionBefore = transition
    const requestSignal = currentRequestSignal()
    const prevented = (): Promise<string> => {
      emit(
        'hide-prevented',
        buildTriggerableEvent('hide-prevented', {trigger, signal: requestSignal})
      )
      if (!ownsPromise) return Promise.resolve('hide-prevented')
      // Settle and drop this hide's promise, so the next hide gets its own
      const promise = _Promise as Promise<string>
      _Resolve?.('hide-prevented')
      _Promise = undefined
      _Resolve = undefined
      return promise
    }
    const event = buildTriggerableEvent('hide', {cancelable: true, trigger, signal: requestSignal})
    const event2 = buildTriggerableEvent(trigger || 'ignore', {
      cancelable: true,
      trigger,
      signal: requestSignal,
    })
    if (
      (trigger === 'backdrop' && props.noCloseOnBackdrop) ||
      (trigger === 'esc' && props.noCloseOnEsc)
    ) {
      return prevented()
    }
    // A listener hid the component itself (for example `@ok="modal.hide()"`). That hide is the one
    // that counts
    const hiddenByListener = () => transition !== transitionBefore && transition?.type === 'hide'
    if (trigger && !noTriggerEmit) {
      emit(trigger, event2)
      if (hiddenByListener()) return hidePromise
    }
    emit('hide', event)
    if (hiddenByListener()) return hidePromise

    if (event.defaultPrevented || event2.defaultPrevented) {
      if (!modelValue.value) {
        nextTick(() => {
          noAction = true
          modelValue.value = true
        })
      }
      return prevented()
    }
    // The show is still waiting for its frame or delay, so nothing was revealed
    const showWasPending = transition?.type === 'show' && !showRef.value
    // That show began while the previous hide's leave transition was still running
    const leaveIsRunning = showWasPending && isLeaving.value
    trapActive.value = false
    const signal = beginTransition('hide')
    if (showWasPending && modelValue.value) {
      noAction = true
      modelValue.value = isCountdown ? 0 : false
    }
    if (leaveIsRunning) {
      // The running leave finishes this hide too: it emits hidden and settles the promise
      leaveTrigger = trigger
      return hidePromise
    }
    if (showWasPending) {
      // No leave transition will run to finish this hide, so finish it here. Leaving isLeaving
      // false matters: with backdropFirst the backdrop stays visible while it is true
      if (!localTemporaryHide.value) renderRef.value = false
      renderBackdropRef.value = false
      // Settle before emitting: a hidden listener may call show(), which replaces _Promise
      const resolve = _Resolve
      _Promise = undefined
      _Resolve = undefined
      emit('hidden', buildTriggerableEvent('hidden', {trigger, cancelable: false}))
      resolve?.(trigger || '')
      return hidePromise
    }
    leaveTrigger = trigger
    hideTimeout = setTimeout(
      () => {
        if (!isMounted) return
        hideTimeout = undefined
        isLeaving.value = true
        showRef.value = false
        options.hideFn?.()
        if (modelValue.value) {
          noAction = true
          modelValue.value = isCountdown ? 0 : false
        }
      },
      localNoAnimation.value
        ? 0
        : typeof props.delay === 'number'
          ? props.delay
          : props.delay?.hide || 0
    )
    signal.addEventListener(
      'abort',
      () => {
        clearTimeout(hideTimeout)
        hideTimeout = undefined
      },
      {once: true}
    )
    return _Promise as Promise<string>
  }
  const throttleHide = useThrottleFn((a) => hide(a), 500)
  const throttleShow = useThrottleFn(() => show(), 500)

  const toggle = (resolveOnHide: boolean = false): Promise<boolean | string> => {
    const e = buildTriggerableEvent('toggle', {cancelable: true})
    emit('toggle', e)
    if (e.defaultPrevented) {
      emit('toggle-prevented', buildTriggerableEvent('toggle-prevented'))
      return Promise.resolve('toggle-prevented')
    }
    if (showRef.value) {
      return hide('toggle-function', true)
    }
    return show(resolveOnHide)
  }
  const triggerToggle = () => {
    const e = buildTriggerableEvent('toggle', {cancelable: true})
    emit('toggle', e)
    if (e.defaultPrevented) {
      emit('toggle-prevented', buildTriggerableEvent('toggle-prevented'))
      return
    }
    if (showRef.value) {
      hide('toggle-trigger', true)
    } else {
      show()
    }
  }
  const triggerRegistry: {trigger: string; el: Element}[] = []
  const registerTrigger = (trigger: string, el: Element) => {
    triggerRegistry.push({trigger, el})
    el.addEventListener(trigger, triggerToggle)
    checkVisibility(el)
  }
  const unregisterTrigger = (trigger: string, el: Element, clean = true) => {
    const idx = triggerRegistry.findIndex((t) => t?.trigger === trigger && t.el === el)
    if (idx > -1) {
      triggerRegistry.splice(idx, 1)
      el.removeEventListener(trigger, triggerToggle)
      if (clean) {
        el.removeAttribute('aria-expanded')
        el.classList.remove('collapsed')
        el.classList.remove('not-collapsed')
      }
    }
  }

  const appRegistry = inject(showHideRegistryKey, null)?.register({
    id: id.value,
    toggle,
    show,
    hide,
    value: readonly(showRef),
    registerTrigger,
    unregisterTrigger,
    component: getCurrentInstance() as ComponentInternalInstance,
  })
  const checkVisibility = (el: Element) => {
    el.setAttribute('aria-expanded', modelValue.value ? 'true' : 'false')
    el.classList.toggle('collapsed', !modelValue.value)
    el.classList.toggle('not-collapsed', !!modelValue.value)
  }

  watch(modelValue, () => {
    triggerRegistry.forEach((t) => {
      checkVisibility(t.el)
    })
  })

  watch(id, (newId, oldId) => {
    appRegistry?.updateId(newId, oldId)
  })

  onBeforeUnmount(() => {
    appRegistry?.unregister()
    triggerRegistry.forEach((t) => {
      t.el.removeEventListener(t.trigger, triggerToggle)
    })
  })
  onUnmounted(() => {
    isMounted = false
    // Cancels whichever frame or timer the last show or hide still has pending
    transition?.controller.abort()
    endRequests()
  })

  const lazyLoadCompleted = ref(false)
  const markLazyLoadCompleted = () => {
    if (props.lazy === true) lazyLoadCompleted.value = true
  }

  const isLeaving = ref(false)
  const isActive = ref(initialShow)
  const isVisible = ref(initialShow)

  const onBeforeEnter: TransitionProps['onBeforeEnter'] = [
    ...[
      options.transitionProps?.onBeforeEnter ?? noop,
      props.transitionProps?.onBeforeEnter ?? noop,
    ].flat(),
    () => {
      isActive.value = true
    },
  ]

  const onEnter: TransitionProps['onEnter'] = [
    () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // sometimes one just isn't enough (offcanvas on the first load after refresh)
          isVisible.value = true
        })
      })
    },
    ...[options.transitionProps?.onEnter ?? noop, props.transitionProps?.onEnter ?? noop].flat(),
  ]
  const onAfterEnter: TransitionProps['onAfterEnter'] = [
    markLazyLoadCompleted,
    ...[
      options.transitionProps?.onAfterEnter ?? noop,
      props.transitionProps?.onAfterEnter ?? noop,
    ].flat(),
    () => {
      if (localNoAnimation.value) {
        requestAnimationFrame(() => {
          localNoAnimation.value = false
        })
      }
      if (localTemporaryHide.value) {
        localTemporaryHide.value = false
      }
      requestAnimationFrame(() => {
        trapActive.value = true
        nextTick(() => {
          emit('shown', buildTriggerableEvent('shown', {cancelable: false}))
        })
      })
      if (!_resolveOnHide) {
        _Resolve?.(true)
        _Promise = undefined
        _Resolve = undefined
      }
    },
  ]

  const onBeforeLeave: TransitionProps['onBeforeLeave'] = [
    () => {
      if (!isLeaving.value) isLeaving.value = true
    },
    ...[
      options.transitionProps?.onBeforeLeave ?? noop,
      props.transitionProps?.onBeforeLeave ?? noop,
    ].flat(),
    () => {
      trapActive.value = false
    },
  ]

  const onLeave: TransitionProps['onLeave'] = [
    () => {
      isVisible.value = false
    },
    ...[options.transitionProps?.onLeave ?? noop, props.transitionProps?.onLeave ?? noop].flat(),
  ]

  const onAfterLeave: TransitionProps['onAfterLeave'] = [
    () => {
      emit('hidden', buildTriggerableEvent('hidden', {trigger: leaveTrigger, cancelable: false}))
    },
    ...[
      options.transitionProps?.onAfterLeave ?? noop,
      props.transitionProps?.onAfterLeave ?? noop,
    ].flat(),
    () => {
      isLeaving.value = false
      isActive.value = false
      if (localNoAnimation.value) {
        requestAnimationFrame(() => {
          localNoAnimation.value = false
        })
      }
      requestAnimationFrame(() => {
        if (!localTemporaryHide.value) renderRef.value = false
      })
      _Resolve?.(leaveTrigger || '')
      _Promise = undefined
      _Resolve = undefined
      leaveTrigger = undefined
    },
  ]

  const contentShowing = computed(
    () =>
      localTemporaryHide.value === true ||
      isActive.value === true ||
      props.lazy === false ||
      (props.lazy === true && lazyLoadCompleted.value === true && props.unmountLazy === false)
  )
  const trapActive = ref(false)
  const backdropVisible = ref(false)
  const backdropReady = ref(false)

  const transitionFunctions = {
    ...options.transitionProps,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
  } satisfies TransitionProps
  return {
    showRef: readonly(showRef),
    renderRef: readonly(renderRef),
    renderBackdropRef: readonly(renderBackdropRef),
    isVisible: readonly(isVisible),
    isActive: readonly(isActive),
    trapActive: readonly(trapActive),
    show,
    hide,
    toggle,
    throttleHide,
    throttleShow,
    buildTriggerableEvent,
    computedNoAnimation,
    localNoAnimation: readonly(localNoAnimation),
    setLocalNoAnimation: (value: boolean) => {
      localNoAnimation.value = value
    },
    localTemporaryHide: readonly(localTemporaryHide),
    setLocalTemporaryHide: (value: boolean) => {
      localTemporaryHide.value = value
    },
    isLeaving: readonly(isLeaving),
    transitionProps: {
      ...fadeBaseTransitionProps,
      ...props.transitionProps,
      ...transitionFunctions,
    } satisfies TransitionProps,

    lazyLoadCompleted: readonly(lazyLoadCompleted),
    markLazyLoadCompleted,
    contentShowing,
    backdropReady: readonly(backdropReady),
    backdropVisible: readonly(backdropVisible),
    backdropTransitionProps: {
      ...fadeBaseTransitionProps,
      onBeforeEnter: () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            backdropVisible.value = true
          })
        })
        backdropReady.value = false
      },
      onAfterEnter: () => {
        backdropReady.value = true
      },
      onBeforeLeave: () => {
        backdropVisible.value = false
      },
      onAfterLeave: () => {
        backdropReady.value = false
        requestAnimationFrame(() => {
          renderBackdropRef.value = false
        })
      },
    } satisfies TransitionProps,
  }
}
