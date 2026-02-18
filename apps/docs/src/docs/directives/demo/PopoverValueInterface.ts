/* eslint-disable @typescript-eslint/no-unused-vars */
// #region interface
interface PopoverValue {
  title?: string // Popover title
  body?: string // Popover body content
  delay?: number | {show: number; hide: number} // Delay in milliseconds
  placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right' // Popover placement
  click?: boolean // Enable click trigger
  hover?: boolean // Enable hover trigger
  focus?: boolean // Enable focus trigger
  manual?: boolean // Disable automatic triggers
}
// #endregion interface
