import {type MaybeRefOrGetter, nextTick, readonly, type Ref, toRef, watch} from 'vue'
import {useFocusTrap, type UseFocusTrapOptions} from '@vueuse/integrations/useFocusTrap'

export const useActivatedFocusTrap = (
  {
    element,
    isActive,
    noTrap,
  }: {
    element: Ref<HTMLElement | null>
    isActive: MaybeRefOrGetter<boolean>
    noTrap: MaybeRefOrGetter<boolean>
  },
  focusTrapOpts: UseFocusTrapOptions = {
    allowOutsideClick: true,
  }
) => {
  const resolvedIsActive = readonly(toRef(isActive))
  const resolvedNoTrap = readonly(toRef(noTrap))

  const trap = useFocusTrap(element, focusTrapOpts)
  watch(resolvedIsActive, async (newValue) => {
    await nextTick()
    if (newValue && resolvedNoTrap.value === false) {
      trap.activate()
    } else {
      trap.deactivate()
    }
  })

  watch(resolvedNoTrap, (newValue) => {
    if (newValue === true) {
      trap.deactivate()
    }
  })
}
