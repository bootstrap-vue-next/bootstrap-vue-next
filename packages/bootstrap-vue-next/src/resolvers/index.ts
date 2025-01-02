import type {ComponentResolver} from 'unplugin-vue-components'
import {
  componentNames,
  componentsWithExternalPath,
  type ComponentType,
  type ConfigurationOption,
  directiveNames,
  directivesWithExternalPath,
  type DirectiveType,
} from '../types/BootstrapVueOptions'

const bvKey = 'bootstrap-vue-next'

const parseActiveImports = <Type extends string, Base extends ConfigurationOption<Type>>(
  options: Readonly<Base>,
  values: readonly Type[]
): Type[] => {
  const {all, ...others} = options
  const valuesCopy: Partial<Record<keyof Base, boolean>> = {}
  if (all) {
    values.forEach((el) => {
      valuesCopy[el] = all
    })
  }
  const merge: Record<string, boolean> = {...valuesCopy, ...others}
  return (
    Object.entries(merge)
      // filtering possible invalid keys
      .filter(([name, value]) => !!value && values.includes(name as Type))
      .map(([name]) => name as Type)
  )
}

const usedComponents = new Set<string>()
const usedDirectives = new Set<string>()

/**
 * Resolver for unplugin-vue-components
 *
 * Contains two hidden properties `__usedComponents` and `__usedDirectives` (both are `Set<string>`)
 * which are used to get the list of used components and directives.. You can use this list of used components.
 * It may not be fully accurate. It can be used to get a list of stuff to trim down, like css
 * @example
 * ```ts
 * const bootstrapVueNextResolver = BootstrapVueNextResolver()
 * console.info(bootstrapVueNextResolver.__usedComponents)
 * console.info(bootstrapVueNextResolver.__usedDirectives)
 *
 * // ... blah blah blah, `plugins: [Components({resolvers: [bootstrapVueNextResolver]})]` ...
 * ```
 */
export const BootstrapVueNextResolver = Object.assign(
  ({
    aliases = {},
    directives = true,
    components = true,
  }: Readonly<{
    components?: boolean | ConfigurationOption<ComponentType>
    directives?: boolean | ConfigurationOption<DirectiveType>
    aliases?: Record<string, ComponentType>
  }> = {}): ComponentResolver[] => {
    const selectedComponents = typeof components === 'boolean' ? {all: components} : components
    // <ComponentType, ImportPath>
    const compImports = parseActiveImports(selectedComponents, componentNames).reduce(
      (map, name) => {
        map.set(name, `${bvKey}${componentsWithExternalPath[name]}`)
        return map
      },
      new Map<string, string>()
    )

    const selectedDirectives = typeof directives === 'boolean' ? {all: directives} : directives
    // <DirectiveType, ImportPath>
    const dirImports = parseActiveImports(selectedDirectives, directiveNames).reduce(
      (map, directive) => {
        const key = (
          directive.toLowerCase().startsWith('v') ? directive : `v${directive}`
        ) as DirectiveType
        map.set(key, `${bvKey}${directivesWithExternalPath[key]}`)
        return map
      },
      new Map<string, string>()
    )

    const resolvers: ComponentResolver[] = [
      {
        type: 'component',
        resolve(name) {
          const destination = compImports.get(name)
          const aliasDestination = compImports.get(aliases[name])
          if (aliasDestination) {
            const val = aliases[name]
            usedComponents.add(val)
            return {
              name: val,
              from: aliasDestination,
            }
          }

          if (destination) {
            usedComponents.add(name)
            return {
              name,
              from: destination,
            }
          }
        },
      },
      {
        type: 'directive',
        resolve(name) {
          const prefixedName = `v${name}`
          const destination = dirImports.get(prefixedName)
          if (destination) {
            usedDirectives.add(prefixedName)
            return {
              name: prefixedName,
              from: destination,
            }
          }
        },
      },
    ]
    return resolvers
  },
  {
    __usedComponents: usedComponents,
    __usedDirectives: usedDirectives,
  }
)
