/* eslint-disable @typescript-eslint/no-unused-vars */
// BootstrapVueNext slot scope interfaces
{
  // #region snippet
  interface BModalSlotsData extends ShowHideSlotsData {
    cancel: () => void // Closes modal with trigger 'cancel'
    close: () => void // Closes modal with trigger 'close' (note: 'close' not 'headerclose')
    ok: () => void // Closes modal with trigger 'ok'
  }

  interface ShowHideSlotsData {
    id: string // Modal ID string
    show: () => void // Show the modal
    hide: (trigger?: string, noTriggerEmit?: boolean) => void // Enhanced hide method
    toggle: () => void // Toggle modal visibility
    active: boolean // Boolean - true when modal is active/visible
    visible: boolean // Boolean - same as active, for compatibility
  }
  // #endregion snippet
}
