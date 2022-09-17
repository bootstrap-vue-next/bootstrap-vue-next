import type {Slots, VNode} from 'vue'

/**
 * @param name
 * @param scope
 * @param $slots
 * @returns
 */
export default (name: string, scope = {}, $slots: Slots = {}): VNode => {
  // Ensure names is an array
  const names = [name]
  let slot
  for (let i = 0; i < names.length && !slot; i++) {
    const name = names[i]
    slot = $slots[name]
  }
  // Note: in Vue 3.x, slots have been unified. No more scoped slots and all slots are exposed as functions
  return (slot && typeof slot === 'function' ? slot(scope) : slot) as unknown as VNode
}
