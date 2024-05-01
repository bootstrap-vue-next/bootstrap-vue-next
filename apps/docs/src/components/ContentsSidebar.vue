<template>
  <ClientOnly>
    <Teleport to=".bd-toc"><slot /><slot name="after" /></Teleport>
  </ClientOnly>
</template>
