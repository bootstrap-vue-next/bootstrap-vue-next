<template>
  <BBreadcrumb>
    <BBreadcrumbItem href="#home"> Home </BBreadcrumbItem>
    <BBreadcrumbItem href="#foo">Foo</BBreadcrumbItem>
    <BBreadcrumbItem href="#bar" @click="alertEvent">Bar</BBreadcrumbItem>
    <BBreadcrumbItem active>Baz</BBreadcrumbItem>
  </BBreadcrumb>
</template>

<script setup lang="ts">
const alertEvent = (event: PointerEvent) => {
  // eslint-disable-next-line no-alert
  alert(`Event ${event.target}`)
}
</script>
