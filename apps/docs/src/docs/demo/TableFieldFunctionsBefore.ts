/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// #region snippet
const fields = [
  {
    key: 'status',
    formatter: (value: any, key: any, item: any) => value.toUpperCase(),
    tdAttr: (value: any, key: any, item: any) => ({
      class: value === 'active' ? 'text-success' : '',
    }),
  },
]
// #endregion snippet
