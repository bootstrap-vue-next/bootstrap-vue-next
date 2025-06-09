<template>
  <div>
    <BFormGroup
      label="Tags validation example"
      label-for="tags-validation"
      :state="state"
    >
      <BFormTags
        v-model="tags"
        input-id="tags-validation"
        :input-attrs="{'aria-describedby': 'tags-validation-help'}"
        :tag-validator="tagValidator"
        :state="state"
        separator=" "
      />

      <template #invalid-feedback> You must provide at least 3 tags and no more than 8 </template>

      <template #description>
        <div id="tags-validation-help">
          Tags must be 3 to 5 characters in length and all lower case. Enter tags separated by
          spaces or press enter.
        </div>
      </template>
    </BFormGroup>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, watch} from 'vue'

const dirty = ref<boolean>(false)
const tags = ref<string[]>([])

const state = computed(() =>
  // Overall component validation state
  dirty.value ? tags.value.length > 2 && tags.value.length < 9 : null
)

watch(tags, () => {
  // Set the dirty flag on first change to the tags array
  dirty.value = true
})

const tagValidator = (tag: string) =>
  // Individual tag validator function
  tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6
</script>
