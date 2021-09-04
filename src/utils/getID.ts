export default function (suffix = ''): string {
  return `__BVID__${Math.random().toString().substr(2, 6)}___BV_${suffix}__`
}
