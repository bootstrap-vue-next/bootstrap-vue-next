/* eslint-disable @typescript-eslint/no-unused-vars */
{
  // #region without-const
  // Without as const: type is { value: string; text: string }[]
  const optionsWidened = [
    {value: 'sm', text: 'Small'},
    {value: 'md', text: 'Medium'},
  ]
  // v-model type: string
  // #endregion without-const
}

{
  // #region with-const
  // With as const: type is readonly [{ readonly value: 'sm'; ... }, ...]
  const optionsLiteral = [
    {value: 'sm', text: 'Small'},
    {value: 'md', text: 'Medium'},
  ] as const
  // v-model type: 'sm' | 'md'
  // #endregion with-const
}
