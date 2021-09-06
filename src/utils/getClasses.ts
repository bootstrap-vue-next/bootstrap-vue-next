interface ComponentProps {
  [key: string]: {type: any[]; default: any}
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (
  props: any,
  els: ComponentProps,
  propPrefix: string,
  classPrefix: string = propPrefix
): string[] =>
  Object.keys(els).reduce((arr: string[], prop) => {
    if (!props[prop]) return arr

    arr.push(
      [classPrefix, prop.replace(propPrefix, ''), props[prop]]
        .filter((e) => e)
        .join('-')
        .toLowerCase()
    )
    return arr
  }, [])
