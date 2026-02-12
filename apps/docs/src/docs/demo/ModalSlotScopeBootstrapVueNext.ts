/* eslint-disable @typescript-eslint/no-unused-vars */
// #region snippet
interface BModalSlotsData {
  id: string
  visible: boolean
  active: boolean // Same as visible
  cancel: () => void
  close: () => void
  ok: () => void
  show: (trigger?: string, noTriggerEmit?: boolean) => void
  hide: (trigger?: string, noTriggerEmit?: boolean) => void
  toggle: (trigger?: string, noTriggerEmit?: boolean) => void
}
// #endregion snippet
