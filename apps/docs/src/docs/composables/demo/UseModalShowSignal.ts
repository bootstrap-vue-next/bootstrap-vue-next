import { useModal } from 'bootstrap-vue-next/composables/useModal'
import { onBeforeUnmount } from 'vue'

const discard = () => {}

export const confirmDiscard = async () => {
  const { create } = useModal()

  // #region snippet
  const scope = new AbortController()
  onBeforeUnmount(() => scope.abort())

  const result = await create({ title: 'Discard changes?' }).show({ signal: scope.signal })
  if (result.trigger === 'ok') discard()
  // #endregion snippet
}
