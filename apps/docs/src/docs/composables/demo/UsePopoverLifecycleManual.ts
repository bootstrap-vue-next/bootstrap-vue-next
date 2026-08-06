import {usePopover} from 'bootstrap-vue-next'

{
  const {popover} = usePopover()

  // #region snippet
  await using pop = popover({title: 'Hello World!'})
  pop.show()
  // do something
  pop.hide()
  // #endregion snippet
}
