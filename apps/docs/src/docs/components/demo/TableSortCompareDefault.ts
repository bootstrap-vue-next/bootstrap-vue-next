/* eslint-disable @typescript-eslint/no-unused-vars */
const getStringValue = (value: unknown, key: string): string => 'dummy string'
/* #region snippet */
const defaultComparer = (a: unknown, b: unknown, key: string): number =>
  getStringValue(a, key).localeCompare(getStringValue(b, key), undefined, {numeric: true})
/* #endregion snippet */
