const _isObject = (item: unknown): boolean =>
  !!item && typeof item === 'object' && item.constructor === Object

/**
 * @param target
 * @param source
 * @param extendArray
 * @returns
 */
const mergeDeep = (target: any, source: any, extendArray = true) => {
  const output =
    target instanceof Date && typeof target.getMonth === 'function'
      ? new Date(target.getTime())
      : Object.assign({}, target)
  if (_isObject(target) && _isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (_isObject(source[key])) {
        if (!(key in target)) Object.assign(output, {[key]: source[key]})
        else output[key] = mergeDeep(target[key], source[key], extendArray)
      } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
        Object.assign(output, {
          [key]: !extendArray
            ? source[key]
            : target[key].concat(
                source[key].filter((item: unknown) => !target[key].includes(item))
              ),
        })
      } else {
        Object.assign(output, {[key]: source[key]})
      }
    })
  }
  return output
}

export default mergeDeep
