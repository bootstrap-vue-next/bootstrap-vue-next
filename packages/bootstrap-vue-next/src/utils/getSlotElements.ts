import type {Slot, VNode} from 'vue'

export default (slot: Slot | undefined, filterBy: string): VNode[] =>
  (slot?.() ?? [])
    .reduce((arr: VNode[], slot: VNode) => {
      if (typeof slot.type === 'symbol') {
        arr = arr.concat(slot.children as unknown as VNode)
      } else {
        arr.push(slot)
      }
      return arr
    }, [])
    .filter((child) => (child.type as {__name: string} | undefined)?.__name === filterBy)
