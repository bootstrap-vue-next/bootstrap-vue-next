import type {SlotScopeReference} from '../types'

export const showHideSlotsData: SlotScopeReference[] = [
  {
    prop: 'id',
    type: 'string',
    description: 'Unique ID for the component',
  },
  {
    prop: 'show',
    type: '() => void',
    description: 'Function to show the component',
  },
  {
    prop: 'hide',
    type: '(trigger?: string, noTriggerEmit?: boolean) => void',
    description:
      'Function to hide the component. `trigger` is the trigger that caused the hide. `noTriggerEmit` prevents the emit of the trigger event.',
  },
  {
    prop: 'toggle',
    type: '() => void',
    description: 'Function to toggle the component visibility',
  },
  {
    prop: 'active',
    type: 'boolean',
    description: 'Indicates if the component is active (starting show, before/after animations)',
  },
  {
    prop: 'visible',
    type: 'boolean',
    description: 'Indicates if the component is visible (shown)',
  },
]
