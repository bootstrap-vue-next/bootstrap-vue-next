import {usePopover} from 'bootstrap-vue-next'

{
  const {popover} = usePopover()

  // #region snippet
  const pop = popover({title: 'Hello World!'})
  pop.show()
  // do something
  pop.destroy()
  // #endregion snippet
}
