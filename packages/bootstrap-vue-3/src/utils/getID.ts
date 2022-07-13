export default function (suffix = ''): string {
  return `__BVID__${Math.random().toString().slice(2, 8)}___BV_${suffix}__`
}
