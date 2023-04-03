export default <Base extends Record<string, boolean> & {all: boolean}>(
  options: Base,
  values: Omit<Base, 'all'>
): string[] => {
  const {all, ...others} = options
  const valuesCopy: Record<string, boolean> = {...values}
  Object.keys(valuesCopy).forEach((el) => (valuesCopy[el] = all))
  const merge: Record<string, boolean> = {...valuesCopy, ...others}
  return Object.entries(merge)
    .filter(([, value]) => value === true)
    .map(([name]) => name) as string[]
}
