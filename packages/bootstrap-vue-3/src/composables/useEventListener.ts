import {onBeforeUnmount, onMounted, Ref} from 'vue'

function useEventListener(
  element: Ref<HTMLElement | undefined>,
  event: string,
  callback: EventListener
): void {
  onMounted(() => {
    element?.value?.addEventListener(event, callback)
  })

  onBeforeUnmount(() => {
    element?.value?.removeEventListener(event, callback)
  })
}

export default useEventListener
