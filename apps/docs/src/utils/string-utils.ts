// Converts PascalCase or camelCase to kebab-case
export const kebabCase = (str: string) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
