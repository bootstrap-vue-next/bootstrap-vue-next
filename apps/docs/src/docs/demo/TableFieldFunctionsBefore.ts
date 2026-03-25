/* eslint-disable @typescript-eslint/no-explicit-any */
// #region snippet
import type { TableField } from 'bootstrap-vue-next'

const fields: TableField[] = [
  {
    key: 'status',
    formatter: (value) => String(value.value).toUpperCase(),
    tdAttr: (value) => ({
      class: value.value === 'active' ? 'text-success' : '',
    }),
  },
]
// #endregion snippet
