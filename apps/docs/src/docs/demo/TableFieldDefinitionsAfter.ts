/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// #region snippet
const fields = [
  {
    key: 'firstName',
    label: 'First Name',
    accessor: (item: any) => item.name.first,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    accessor: (item: any) => item.name.last,
  },
  {key: 'age', label: 'Age'}, // Simple root property works as before
]
// #endregion snippet
