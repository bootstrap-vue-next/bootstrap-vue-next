import type { ConfigurationOption } from '../types/ModuleOptions'

export const parseActiveImports = <Type extends string, Base extends ConfigurationOption<Type>>(
  options: Readonly<Base>,
  values: readonly Type[],
): Type[] => {
  const { all, ...others } = options
  const valuesCopy: Partial<Record<keyof Base, boolean>> = {}
  if (all) {
    values.forEach((el) => {
      valuesCopy[el] = all
    })
  }
  const merge: Record<string, boolean> = { ...valuesCopy, ...others }
  const valuesSet = new Set(values)
  return (
    Object.entries(merge)
      // filtering possible invalid keys
      .filter(([name, value]) => !!value && valuesSet.has(name as Type))
      .map(([name]) => name as Type)
  )
}
