<template>
  <BOverlay
    :show="show"
    rounded="sm"
    @shown="onShown"
    @hidden="onHidden"
  >
    <BCard
      title="Card with custom overlay content"
      :aria-hidden="show ? 'true' : null"
    >
      <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      <BCardText>Click the button to toggle the overlay:</BCardText>
      <BButton
        :disabled="show"
        variant="primary"
        @click="show = true"
      >
        Show overlay
      </BButton>
    </BCard>
    <template #overlay>
      <div class="text-center">
        <p id="cancel-label">Please wait...</p>
        <BButton
          variant="outline-danger"
          size="sm"
          aria-describedby="cancel-label"
          @click="show = false"
        >
          Cancel
        </BButton>
      </div>
    </template>
  </BOverlay>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)

const onShown = () => {
  // eslint-disable-next-line no-console
  console.log('shown')
}
const onHidden = () => {
  // eslint-disable-next-line no-console
  console.log('hidden')
}
</script>
