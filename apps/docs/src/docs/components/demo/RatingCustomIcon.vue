<template>
  <div>
    <BFormRating
      v-model="rating"
      :stars="5"
      show-value
      show-clear
    >
      <template #default="{starIndex, isFilled}">
        <!-- Full heart -->
        <svg
          v-if="isFilled"
          aria-hidden="true"
          class="custom-icon"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          fill="currentColor"
          @click="rating = starIndex"
        >
          <path
            d="M12 4.528a6 6 0 0 0-8.243 8.715l6.829 6.828a2 2 0 0 0 2.828 0l6.829-6.828A6 6 0 0 0 12 4.528z"
            fill="currentColor"
          />
        </svg>

        <!-- Empty heart -->
        <svg
          v-else
          aria-hidden="true"
          class="custom-icon"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          @click="rating = starIndex"
        >
          <path
            d="M12 4.528a6 6 0 0 0-8.243 8.715l6.829 6.828a2 2 0 0 0 2.828 0l6.829-6.828A6 6 0 0 0 12 4.528z"
          />
        </svg>
      </template>
    </BFormRating>

    <p class="mt-2">Rating: {{ rating }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {BFormRating} from 'bootstrap-vue-next/components/BFormRating'

const rating = ref(0)
</script>

<style scoped>
.custom-icon {
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease;
  color: #a01918;
}
.b-form-rating:not(.is-readonly) .custom-icon:hover {
  transform: scale(1.25);
}
</style>
