export default (values: Record<string, boolean> & {all: boolean}): string[] => {
  const {all, ...others} = values
  const othersCopy: Record<string, boolean> = {...others}
  Object.keys(othersCopy).forEach((el) => (othersCopy[el] = all))
  const merge: Record<string, boolean> = {...othersCopy, ...others}
  return Object.entries(merge)
    .filter(([, value]) => value === true)
    .map(([name]) => name) as string[]
}
