/* eslint-disable @typescript-eslint/no-unused-vars */
// #region snippet
interface BModalSlotsData {
  id: string
  visible: boolean
  active: boolean // Same as visible
  show: () => void
  hide: (noTriggerEmit?: boolean) => void
  toggle: () => void
}
// #endregion snippet
