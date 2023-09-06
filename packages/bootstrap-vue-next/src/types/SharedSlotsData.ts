export type SharedSlotsData = {
  cancel: () => void
  close: () => void
  hide: (trigger?: string) => void
  ok: () => void
  visible: boolean
}
