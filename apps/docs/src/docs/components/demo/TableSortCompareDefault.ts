/* eslint-disable @typescript-eslint/no-unused-vars */
const getStringValue = (value: unknown): string => 'dummy string'
/* #region snippet */
const defaultComparer = (a: unknown, b: unknown): number =>
  getStringValue(a).localeCompare(getStringValue(b), undefined, {numeric: true})
/* #endregion snippet */
