import {computed, type EmitFn, nextTick, onMounted, type Ref, ref, watch} from 'vue'
import {BvTriggerableEvent} from '../utils'
import {useEventListener} from '@vueuse/core'

export const fadeBaseTransitionProps = {
  // enterToClass: 'showing',
  // leaveToClass: 'hiding',
  // enterFromClass: '',
  // leaveFromClass: '',
  enterToClass: '',
  leaveToClass: 'showing',
  enterFromClass: 'showing',
  leaveFromClass: '',
  css: true,

  name: 'fade',
  enterActiveClass: '',
  leaveActiveClass: '',
  onEnter: (el: Element) => {
    requestAnimationFrame(() => {
      el.classList.add('show')
    })
  },
  onLeave: (el: Element) => {
    el.classList.remove('show')
  },
}
export const emptyTransitionProps = {
  enterToClass: '',
  leaveToClass: '',
  enterFromClass: '',
  leaveFromClass: '',
  css: true,

  name: 'empty',
  enterActiveClass: '',
  leaveActiveClass: '',
}

interface TransitionProps {
  onBeforeEnter?: (el: Element) => void
  onEnter?: (el: Element) => void
  onAfterEnter?: (el: Element) => void
  onBeforeLeave?: (el: Element) => void
  onLeave?: (el: Element) => void
  onAfterLeave?: (el: Element) => void
  enterToClass?: string
  leaveToClass?: string
  enterFromClass?: string
  leaveFromClass?: string
  enterActiveClass?: string
  leaveActiveClass?: string
}

export const useShowHide = (
  modelValue: Ref<boolean | number>,
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
  } & Record<string, unknown>,
  emit: EmitFn,
  element: Ref<HTMLElement | null>,
  computedId: Ref<string>,
  options: {
    transitionProps?: TransitionProps
    addShowClass?: boolean
    showFn?: () => void
    hideFn?: () => void
  } = {
    transitionProps: {},
    addShowClass: true,
    showFn: () => {},
    hideFn: () => {},
  }
) => {
  let noAction = false
  const initialShow = (!!modelValue.value && !props.initialAnimation) || props.visible || false
  const showRef = ref<boolean>(initialShow)

  let isCountdown = typeof modelValue.value !== 'boolean'

  watch(modelValue, () => {
    isCountdown = typeof modelValue.value !== 'boolean'
    if (noAction) {
      noAction = false
      return
    }
    modelValue.value ? show() : hide()
  })

  const localNoAnimation = ref(initialShow)
  const computedNoAnimation = computed(
    () => props.noAnimation || props.noFade || localNoAnimation.value || false
  )
  onMounted(() => {
    if (props.visible || (!props.show && initialShow)) {
      localNoAnimation.value = true
      if (!modelValue.value) {
        noAction = true
        modelValue.value = true
      }
      nextTick(() => {
        isVisible.value = true
        show()
      })
    } else if (props.show || (!!modelValue.value && props.initialAnimation)) {
      show()
    }
  })

  watch(
    () => props.visible,
    (newval) => {
      localNoAnimation.value = true

      nextTick(() => {
        if (newval) isVisible.value = true
        newval ? show() : hide()
      })
    }
  )
  watch(
    () => props.show,
    (newval) => {
      newval ? show() : hide()
    }
  )
  useEventListener(element, 'bv-toggle', () => {
    modelValue.value = !modelValue.value
  })

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
      componentId: computedId?.value,
    })

  let showTimeout: ReturnType<typeof setTimeout> | undefined

  const show = () => {
    if (showRef.value) return
    const event = buildTriggerableEvent('show', {cancelable: true})
    emit('show', event)

    if (event.defaultPrevented) {
      emit('show-prevented', buildTriggerableEvent('show-prevented'))
      if (isVisible.value) {
        isVisible.value = false
      }
      if (modelValue.value && !isCountdown) {
        noAction = true
        nextTick(() => {
          modelValue.value = false
        })
      }
      return
    }
    showTimeout = setTimeout(
      () => {
        showRef.value = true
        options.showFn?.()
        if (!modelValue.value) {
          noAction = true
          nextTick(() => {
            modelValue.value = true
          })
        }
      },
      localNoAnimation.value
        ? 0
        : typeof props.delay === 'number'
          ? props.delay
          : props.delay?.show || 0
    )
  }

  const hide = (trigger?: string) => {
    if (!showRef.value) return
    const event = buildTriggerableEvent('hide', {cancelable: true, trigger})
    const event2 = buildTriggerableEvent(trigger || 'ignore', {cancelable: true, trigger})
    if (
      (trigger === 'backdrop' && props.noCloseOnBackdrop) ||
      (trigger === 'esc' && props.noCloseOnEsc)
    ) {
      emit('hide-prevented', buildTriggerableEvent('hide-prevented'))
      return
    }
    if (showTimeout) {
      clearTimeout(showTimeout)
      showTimeout = undefined
    }
    if (trigger) {
      emit(trigger, event2)
    }
    emit('hide', event)

    if (event.defaultPrevented || event2.defaultPrevented) {
      emit('hide-prevented', buildTriggerableEvent('hide-prevented'))
      noAction = true
      nextTick(() => {
        modelValue.value = true
      })
      return
    }
    setTimeout(
      () => {
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
  }

  const toggle = () => {
    const e = buildTriggerableEvent('toggle', {cancelable: true})
    emit('toggle', e)
    if (e.defaultPrevented) {
      emit('toggle-prevented', buildTriggerableEvent('toggle-prevented'))
      return
    }
    showRef.value ? hide() : show()
  }

  const lazyLoadCompleted = ref(false)
  const markLazyLoadCompleted = () => {
    if (props.lazy === true) lazyLoadCompleted.value = true
  }

  const isLeaving = ref(false)
  const isActive = ref(false)
  const isVisible = ref(false)
  const onBeforeEnter = (el: Element) => {
    options.transitionProps?.onBeforeEnter?.(el)
    props.transitionProps?.onBeforeEnter?.(el)
    isActive.value = true
  }
  const onEnter = (el: Element) => {
    requestAnimationFrame(() => {
      if (options.addShowClass) {
        el.classList.add('show')
      }
      isVisible.value = true
    })
    options.transitionProps?.onEnter?.(el)
    props.transitionProps?.onEnter?.(el)
  }
  const onLeave = (el: Element) => {
    if (options.addShowClass) {
      el.classList.remove('show')
    }
    isVisible.value = false
    options.transitionProps?.onLeave?.(el)
    props.transitionProps?.onLeave?.(el)
  }
  const onAfterEnter = (el: Element) => {
    emit('shown', buildTriggerableEvent('shown'))
    markLazyLoadCompleted()
    options.transitionProps?.onAfterEnter?.(el)
    props.transitionProps?.onAfterEnter?.(el)
    if (localNoAnimation.value) {
      requestAnimationFrame(() => {
        localNoAnimation.value = false
      })
    }
  }
  const onBeforeLeave = (el: Element) => {
    isLeaving.value = true
    options.transitionProps?.onBeforeLeave?.(el)
    props.transitionProps?.onBeforeLeave
  }
  const onAfterLeave = (el: Element) => {
    emit('hidden', buildTriggerableEvent('hidden'))
    options.transitionProps?.onAfterLeave?.(el)
    props.transitionProps?.onAfterLeave?.(el)
    isLeaving.value = false
    isActive.value = false
    if (localNoAnimation.value) {
      requestAnimationFrame(() => {
        localNoAnimation.value = false
      })
    }
  }

  const contentShowing = computed(
    () =>
      props.lazy === false ||
      (props.lazy === true && props.unmountLazy === true && showRef.value === true) ||
      (props.lazy === true && lazyLoadCompleted.value === true && props.unmountLazy === false)
  )
  const transitionFunctions = {
    ...options.transitionProps,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
  }
  return {
    showRef,
    isVisible,
    isActive,
    show,
    hide,
    toggle,
    buildTriggerableEvent,
    computedNoAnimation,
    isLeaving,
    fadeTransitionProps: {
      ...fadeBaseTransitionProps,
      ...(props.transitionProps || {}),
      ...transitionFunctions,
    },
    basicTransitionProps: {
      ...emptyTransitionProps,
      ...(props.transitionProps || {}),
      ...transitionFunctions,
    },
    lazyLoadCompleted,
    markLazyLoadCompleted,
    contentShowing,
  }
}
