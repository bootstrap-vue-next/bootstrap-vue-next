<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BOverlay :show="showOverlay" rounded="sm">
          <BCard title="Card with overlay" :aria-hidden="showOverlay ? true : null">
            <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
            <BCardText>Click the button to toggle the overlay:</BCardText>
            <BButton :disabled="showOverlay" variant="primary" @click="showOverlay = true"
              >Show overlay</BButton
            >
          </BCard>
        </BOverlay>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BButton class="mt-3" @click="showOverlay = !showOverlay">Toggle overlay</BButton>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showOverlay = ref(false)
</script>
