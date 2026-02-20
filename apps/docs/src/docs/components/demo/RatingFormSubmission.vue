<template>
  <!-- #region template -->
  <BForm @submit.prevent="onSubmit">
    <BFormRating v-model="rating" name="rating" />
    <div class="mt-2">
      <BButton type="submit" variant="primary">Submit</BButton>
    </div>
    <div v-if="result" class="mt-2">
      Submitted value: {{ result }}
    </div>
  </BForm>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

const rating = ref(3)
const result = ref<string | null>(null)

function onSubmit(event: Event) {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  result.value = formData.get('rating')?.toString() ?? ''
}
</script>
