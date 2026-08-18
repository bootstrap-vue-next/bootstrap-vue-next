import {nextTick, readonly, ref, unref, watch, type MaybeRef, type Ref} from 'vue'

/**
 * Manages an ARIA live region message with a clear-then-set pattern.
 *
 * Screen readers only announce `aria-live` content on a transition from empty
 * to non-empty text. By clearing the message first and then setting it in the
 * next tick we guarantee that every file selection produces that empty→non-empty
 * transition, even when the same file is selected again.
 */
export const useAriaLiveMessage = (
  selectedFiles: Ref<readonly File[]>,
  formatter: MaybeRef<((files: readonly File[]) => string) | undefined>
) => {
  const ariaLiveMessage = ref('')

  const buildMessage = (files: readonly File[]): string => {
    if (files.length === 0) return ''
    const fn = unref(formatter)
    if (fn) {
      return fn(files)
    }
    if (files.length === 1) {
      return `File selected: ${files[0]?.name}`
    }
    return `${files.length} files selected`
  }

  watch(selectedFiles, async (files) => {
    ariaLiveMessage.value = ''
    await nextTick()
    ariaLiveMessage.value = buildMessage(files)
  })

  return readonly(ariaLiveMessage)
}
