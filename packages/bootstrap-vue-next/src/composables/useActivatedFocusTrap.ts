import {type MaybeRefOrGetter, onMounted, readonly, type Ref, toRef, watch} from 'vue'
import {useFocusTrap} from '@vueuse/integrations/useFocusTrap'

export const useActivatedFocusTrap = ({
  element,
  isActive,
  noTrap,
}: {
  element: Ref<HTMLElement | null>
  isActive: MaybeRefOrGetter<boolean>
  noTrap: MaybeRefOrGetter<boolean>
}) => {
  const resolvedIsActive = readonly(toRef(isActive))
  const resolvedNoTrap = readonly(toRef(noTrap))

  onMounted(() => {
    const trap = useFocusTrap(element, {
      allowOutsideClick: true,
      fallbackFocus: window?.document?.body,
    })
    watch(resolvedIsActive, (newValue) => {
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
  })
}
