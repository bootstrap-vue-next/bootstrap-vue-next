/* eslint-disable @typescript-eslint/no-unused-vars */
import {usePopover} from 'bootstrap-vue-next'

{
  const {popover} = usePopover()

  // #region snippet
  await using pop = popover({title: 'Hello World!'})
  // #endregion snippet
}
