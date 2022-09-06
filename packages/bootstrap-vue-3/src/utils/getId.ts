/**
 * @param suffix
 * @returns
 */
export default (suffix = ''): string =>
  `__BVID__${Math.random().toString().slice(2, 8)}___BV_${suffix}__`
