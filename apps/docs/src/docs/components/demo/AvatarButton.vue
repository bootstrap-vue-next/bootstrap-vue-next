<!-- eslint-disable no-alert -->
<template>
  <BListGroup>
    <BListGroupItem>
      <BAvatar button variant="primary" text="FF" class="align-baseline" @click="alertEvent" />
      Button Text Avatar
    </BListGroupItem>
    <BListGroupItem>
      <BAvatar button src="https://picsum.photos/30/30/?image=40" @click="alertEvent" />
      Button Image Avatar
    </BListGroupItem>
  </BListGroup>
</template>

<script setup lang="ts">
const alertEvent = () => {
  // eslint-disable-next-line no-alert
  alert(`Clicked`)
}
</script>
