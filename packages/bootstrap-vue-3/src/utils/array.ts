/**
 * @param array
 * @param value
 * @returns
 */
export const arrayIncludes = (array: any[], value: any): boolean => array.indexOf(value) !== -1
/**
 * @param args
 * @returns
 */
export const from = (...args: any[]): any[] => Array.from([...args])
/**
 * @param args
 * @returns
 */
export const concat = (...args: any[]): any[] => Array.prototype.concat.apply([], args)
