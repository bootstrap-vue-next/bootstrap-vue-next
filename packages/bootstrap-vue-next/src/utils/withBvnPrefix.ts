export const withBvnPrefix = (value: string, suffix: string = '') => {
  const suffixWithTrail = `${suffix}___`
  return `___BVN__ID__${value}__${suffix ? suffixWithTrail : ''}`
}
