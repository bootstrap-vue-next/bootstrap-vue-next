import type {ConfigurationOption} from '../types'

export default <Type extends string, Base extends ConfigurationOption<Type>>(
  options: Base,
  values: Type[]
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
