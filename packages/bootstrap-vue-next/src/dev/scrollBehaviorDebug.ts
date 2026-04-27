import {reactive} from 'vue'
import type {RouteLocationNormalized} from 'vue-router'

type ScrollEntry = {
  to: string
  from: string
  hash: string
  savedPosition: unknown
  timestamp: string
}

const MAX_ENTRIES = 20

export const scrollBehaviorDebug = reactive({
  count: 0,
  entries: [] as ScrollEntry[],
})

export const recordScrollBehaviorCall = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  savedPosition: unknown
) => {
  scrollBehaviorDebug.count += 1
  scrollBehaviorDebug.entries.unshift({
    to: to.fullPath,
    from: from.fullPath,
    hash: to.hash,
    savedPosition,
    timestamp: new Date().toISOString(),
  })

  if (scrollBehaviorDebug.entries.length > MAX_ENTRIES) {
    scrollBehaviorDebug.entries.length = MAX_ENTRIES
  }
}

export const clearScrollBehaviorCalls = () => {
  scrollBehaviorDebug.count = 0
  scrollBehaviorDebug.entries = []
}
