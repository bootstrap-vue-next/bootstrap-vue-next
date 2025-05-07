import type {ContentsItem} from 'src/types'

// Return the activeId if it's contained in the item's subtree, otherwise return null
export const filteredActiveId = (item: ContentsItem, activeId: string | null): string | null => {
  if (activeId === null) {
    return null
  }
  if (item.id === activeId) {
    return activeId
  }
  if (item.children?.length) {
    for (const child of item.children) {
      const id = filteredActiveId(child, activeId)
      if (id !== null) {
        return id
      }
    }
  }
  return null
}
