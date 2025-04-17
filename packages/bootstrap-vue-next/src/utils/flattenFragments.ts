import {Fragment, type VNode} from 'vue'

export function flattenFragments(nodes: VNode[]): VNode[] {
  return nodes
    .map((node) => {
      if (node.type === Fragment) {
        return flattenFragments(node.children as VNode[])
      }
      return node
    })
    .flat()
}
