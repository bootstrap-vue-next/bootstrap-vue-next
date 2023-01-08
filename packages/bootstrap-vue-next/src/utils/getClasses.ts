export interface ComponentProps {
  [key: string]: {type: any[]; default: any}
}

/**
 * @param props
 * @param els
 * @param propPrefix
 * @param classPrefix
 * @returns
 */
export default (
  props: Record<PropertyKey, unknown>,
  els: ComponentProps,
  propPrefix: string,
  classPrefix = propPrefix
): string[] =>
  Object.keys(els).reduce((arr: string[], prop) => {
    if (!props[prop]) return arr

    arr.push(
      [classPrefix, prop.replace(propPrefix, ''), props[prop]]
        .filter((e) => e && typeof e !== 'boolean')
        .join('-')
        .toLowerCase()
    )

    return arr
  }, [])
