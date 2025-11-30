<template>
  <div class="d-flex gap-2">
    <BImg v-bind="propsTr" alt="Transparent image" />
    <BImg v-bind="propsTr" blank-color="#777" alt="HEX shorthand color image (#777)" />
    <BImg v-bind="propsTr" blank-color="red" alt="Named color image (red)" />
    <BImg v-bind="propsTr" blank-color="black" alt="Named color image (black)" />
    <BImg v-bind="propsTr" blank-color="#338833" alt="HEX color image" />
    <BImg v-bind="propsTr" blank-color="rgba(128, 255, 255, 0.5)" alt="RGBa color image" />
    <BImg v-bind="propsTr" blank-color="#88f" alt="HEX shorthand color (#88f)" />
  </div>
</template>

<script setup lang="ts">
const propsTr = {
  blank: true,
  width: 75,
  height: 75,
  class: 'm1',
}
</script>
