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

/**
 * Resolver for unplugin-vue-components
 */
export const BootstrapVueNextResolver = ({
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
  const compImports = parseActiveImports(selectedComponents, componentNames).reduce((map, name) => {
    map.set(name, `${bvKey}${componentsWithExternalPath[name]}`)
    return map
  }, new Map<string, string>())

  const selectedDirectives = typeof directives === 'boolean' ? {all: directives} : directives
  // <DirectiveType, ImportPath>
  const dirImports = parseActiveImports(selectedDirectives, directiveNames).reduce(
    (map, directive) => {
      const key = (
        directive.toLowerCase().startsWith('v') ? directive.slice(1) : directive
      ) as DirectiveType
      map.set(key, `${bvKey}${directivesWithExternalPath[key]}`)
      return map
    },
    new Map<string, string>()
  )

  const resolvers: ComponentResolver[] = [
    {
      type: 'component',
      resolve: (name) => {
        const destination = compImports.get(name)
        const aliasDestination = compImports.get(aliases[name])
        if (aliasDestination)
          return {
            name: aliases[name],
            from: aliasDestination,
          }

        if (destination)
          return {
            name,
            from: destination,
          }
      },
    },
    {
      type: 'directive',
      resolve: (name) => {
        const destination = dirImports.get(name)
        if (destination)
          return {
            name: `v${name}`,
            from: destination,
          }
      },
    },
  ]
  return resolvers
}
