import type {ComponentInternalInstance, DirectiveBinding, VNode} from 'vue'

interface _ComponentInternalInstance extends ComponentInternalInstance {
  provides?: Record<string, unknown>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setupState?: any
}

interface _VNode extends VNode {
  ctx?: _ComponentInternalInstance | null
  ssContent?: VNode | null
}

// taken from vuetify https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/directiveComponent.ts

export function findProvides(binding: DirectiveBinding, vnode: _VNode): Record<string, unknown> {
  const provides =
    (vnode.ctx === binding.instance!.$
      ? findComponentParent(vnode, binding.instance!.$)?.provides
      : vnode.ctx?.provides) ?? binding.instance!.$.provides

  return provides
}

export function findComponentParent(
  vnode: VNode,
  root: ComponentInternalInstance
): _ComponentInternalInstance | null {
  // Walk the tree from root until we find the child vnode
  const stack = new Set<VNode>()
  const walk = (children: _VNode[]): boolean => {
    for (const child of children) {
      if (!child) continue

      if (child === vnode || (child.el && vnode.el && child.el === vnode.el)) {
        return true
      }

      stack.add(child)
      let result
      if (child.suspense) {
        result = walk([child.ssContent!])
      } else if (Array.isArray(child.children)) {
        result = walk(child.children as VNode[])
      } else if (child.component?.vnode) {
        result = walk([child.component?.subTree])
      }
      if (result) {
        return result
      }
      stack.delete(child)
    }

    return false
  }
  if (!walk([root.subTree])) {
    // eslint-disable-next-line no-console
    console.error('Could not find original vnode,  will not inherit provides')
    return root
  }

  // Return the first component parent
  const result = Array.from(stack).reverse()
  for (const child of result) {
    if (child.component) {
      return child.component
    }
  }
  return root
}
