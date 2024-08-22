<template>
  <!-- #region template -->
  <BBreadcrumb>
    <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
    <BBreadcrumbItem href="#foo">Foo</BBreadcrumbItem>
    <BBreadcrumbItem href="#bar">Bar</BBreadcrumbItem>
    <BBreadcrumbItem active>Baz</BBreadcrumbItem>
    <template #prepend><span class="mx-2">prepend text</span></template>
    <template #append><span class="mx-2">append text</span></template>
  </BBreadcrumb>
  <!-- #endregion template -->
</template>
