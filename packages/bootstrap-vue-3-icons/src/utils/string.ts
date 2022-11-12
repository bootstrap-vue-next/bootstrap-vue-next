export const RX_HYPHENATE = /\B([A-Z])/g
export const RX_UN_KEBAB = /-(\w)/g

// Converts PascalCase or camelCase to kebab-case
export const kebabCase = (str: string) => str.replace(RX_HYPHENATE, '-$1').toLowerCase()

// Converts a kebab-case or camelCase string to PascalCase
export const pascalCase = (str: string) => {
  str = kebabCase(str).replace(RX_UN_KEBAB, (_, c) => (c ? c.toUpperCase() : ''))
  return str.charAt(0).toUpperCase() + str.slice(1)
}
