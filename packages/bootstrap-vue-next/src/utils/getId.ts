let uniqueId = 0

export default (suffix = ''): string => {
  uniqueId++
  return `__BVID__${uniqueId}___BV_${suffix}__`
}
