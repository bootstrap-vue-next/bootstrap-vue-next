import {usePopover} from 'bootstrap-vue-next'

{
  const { popover } = usePopover()

  // #region snippet
  await using pop = await popover({ title: 'Hello World!' }).show()
  // #endregion snippet
}
