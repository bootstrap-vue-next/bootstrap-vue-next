import { usePopover } from 'bootstrap-vue-next/composables/usePopover'

{
  const { popover } = usePopover()

  // #region snippet
  const pop = popover({ title: 'Hello World!' })
  pop.show()
  // do something
  pop.hide()
  // #endregion snippet
}
