import type {Ref} from 'vue'
import type {RegisterShowHideInstances, RegisterShowHideMapValue} from './keys'

/**
 * Gets the active show/hide instance for a given ID.
 * Uses getActive() which returns the most recent instance to handle UID disambiguation.
 *
 * @param registry - The show/hide registry ref (or null)
 * @param id - The component ID to look up (or falsy value)
 * @returns The active show/hide instance, undefined if not found, or null if id is falsy
 */
export const getActiveShowHide = (
  registry: Ref<Map<string, RegisterShowHideInstances>> | null,
  id: string | undefined
): RegisterShowHideMapValue | undefined | null => {
  if (!id) return null
  if (!registry) return undefined
  const holder = registry.value.get(id)
  return holder?.getActive()
}

/**
 * Gets the boolean visibility state of a show/hide component.
 *
 * @param registry - The show/hide registry ref (or null)
 * @param id - The component ID to look up
 * @returns The visibility state (true if shown), or false if not found
 */
export const getShowHideValue = (
  registry: Ref<Map<string, RegisterShowHideInstances>> | null,
  id: string
): boolean => {
  const instance = getActiveShowHide(registry, id)
  return instance?.value.value ?? false
}
