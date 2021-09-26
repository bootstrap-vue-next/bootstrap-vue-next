import {Slots} from 'vue'
import {isFunction} from './inspect'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const normalizeSlot = (name: string, scope = {}, $slots: Slots = {}) => {
  // Ensure names is an array
  const names = [name]
  let slot
  for (let i = 0; i < names.length && !slot; i++) {
    const name = names[i]
    slot = $slots[name]
  }
  // Note: in Vue 3.x, slots have been unified. No more scoped slots and all slots are exposed as functions
  return slot && isFunction(slot) ? slot(scope) : slot
}
