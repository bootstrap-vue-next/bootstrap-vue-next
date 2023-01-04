import {onBeforeUnmount, onMounted, type Ref} from 'vue'

/**
 * @param element
 * @param event
 * @param callback
 */
export default (
  element: Ref<HTMLElement | undefined>,
  event: string,
  callback: EventListener
): void => {
  onMounted(() => {
    element?.value?.addEventListener(event, callback)
  })
  onBeforeUnmount(() => {
    element?.value?.removeEventListener(event, callback)
  })
}
