/* eslint-disable @typescript-eslint/no-unused-vars */
type T = {
  titleField: string
}
/* #region snippet */
const removeArticles = (str: string) => str.replace(/^(a |the )/i, '')
const titleFieldDefinition = {
  key: 'titleField',
  sortable: true,
  comparer: (a: T, b: T, key: string) =>
    removeArticles(a.titleField).localeCompare(removeArticles(b.titleField)),
}
/* #endregion snippet */
