<template>
  <!-- #region template -->
  <BRow
    ><BCol>Set 'variant': <BBadge variant="success"> testing </BBadge></BCol></BRow
  >
  <BRow
    ><BCol>Set 'bg-variant': <BBadge bg-variant="info"> testing </BBadge></BCol></BRow
  >
  <BRow
    ><BCol
      >Set 'text-variant' (background is 'secondary' since 'variant' defaults to 'secondary'):
      <BBadge text-variant="info"> testing </BBadge></BCol
    ></BRow
  >
  <BRow
    ><BCol
      >Set 'text-variant' and 'bg-variant':
      <BBadge text-variant="primary" bg-variant="danger"> testing </BBadge></BCol
    ></BRow
  >
  <BRow
    ><BCol
      >Set all three - 'variant' is overridden by 'bg-variant' and 'text-variant':
      <BBadge text-variant="primary" bg-variant="danger" variant="success"> testing </BBadge></BCol
    ></BRow
  >
  <!-- #endregion template -->
</template>
