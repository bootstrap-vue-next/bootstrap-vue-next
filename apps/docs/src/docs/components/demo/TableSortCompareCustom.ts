/* eslint-disable @typescript-eslint/no-unused-vars */
type T = {
  titleField: string
}
/* #region snippet */
const removeArticles = (str: string) => str.replace(/^(a |the )/i, '')
const sortBy = [
  {
    key: 'titleField',
    comparer: (a: T, b: T, key: string) =>
      removeArticles(a.titleField).localeCompare(removeArticles(b.titleField)),
  },
]
/* #endregion snippet */
