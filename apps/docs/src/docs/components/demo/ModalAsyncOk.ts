import type { BvTriggerableEvent } from 'bootstrap-vue-next'
import { ref } from 'vue'

{
  const modal = ref<{ hide: (trigger?: string) => void } | null>(null)
  const body = JSON.stringify({ name: 'example' })

  // #region snippet
  const onOk = async (event: BvTriggerableEvent) => {
    event.preventDefault()
    try {
      await fetch('/api/save', { method: 'POST', body, signal: event.signal })
      modal.value?.hide('saved')
    } catch (error) {
      if (event.signal?.aborted) return // closed while saving: nothing left to do
      throw error
    }
  }
  // #endregion snippet

  void onOk
}
