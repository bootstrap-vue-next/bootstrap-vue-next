export default (
  props: Readonly<Record<PropertyKey, unknown>>,
  els: string[],
  propPrefix: string,
  classPrefix = propPrefix
): string[] =>
  els.reduce((arr: string[], prop) => {
    if (!props[prop]) return arr

    arr.push(
      [classPrefix, prop.replace(propPrefix, ''), props[prop]]
        .filter((e) => e && typeof e !== 'boolean')
        .join('-')
        .toLowerCase()
    )

    return arr
  }, [] as string[])
