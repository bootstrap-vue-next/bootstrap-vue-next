import type {Base, Import} from '../types'

/**
 * An object gets set with the defaults of true/false.
 * Then gets those values overwritten by what's in the opts.
 * The values gets filtered by which of those opts are true.
 * TODO Types need to be better, you can essentially input anything you want.
 * @param {Base & T} opt
 * @param {T} defaults
 * @param {Record<keyof Omit<T, keyof Base>, Import>} values
 * @returns {Array<Import>} filtered by which property key values are true from opts
 */
const activeResolver = <T extends Record<string, boolean | undefined>>(
  opt: Base & T,
  defaults: T,
  values: Record<keyof Omit<T, keyof Base>, Import>
): Array<Import> => {
  const {all, ...plugs} = opt
  const internalDefaults = Object.keys(defaults).reduce(
    (acc, key) => ({...acc, [key]: all}),
    {}
  ) as T
  const finalObj = {...internalDefaults, ...plugs}
  return Object.entries(values)
    .filter(([key]) =>
      Object.keys(finalObj)
        .filter((key) => finalObj[key] === true)
        .includes(key)
    )
    .map(([, value]) => value)
}

export default activeResolver
