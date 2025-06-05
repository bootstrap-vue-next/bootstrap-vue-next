<template>
  <div class="d-flex gap-2">
    <BImg
      v-bind="mainProps"
      alt="Rounded image"
    />
    <BImg
      v-bind="mainProps"
      rounded
      alt="Rounded image"
    />
    <BImg
      v-bind="mainProps"
      rounded-top
      alt="Top-rounded image"
    />
    <BImg
      v-bind="mainProps"
      rounded-end
      alt="Right-rounded image"
    />
    <BImg
      v-bind="mainProps"
      rounded-bottom
      alt="Bottom-rounded image"
    />
    <BImg
      v-bind="mainProps"
      rounded-start
      alt="Left-rounded image"
    />
    <BImg
      v-bind="mainProps"
      rounded="circle"
      alt="Circle image"
    />
    <BImg
      v-bind="mainProps"
      rounded="0"
      alt="Not rounded image"
    />
  </div>
</template>

<script setup lang="ts">
const mainProps = {
  blank: true,
  blankColor: '#777',
  width: 75,
  height: 75,
  class: 'm1',
}
</script>
