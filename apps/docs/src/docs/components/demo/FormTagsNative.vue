<template>
  <div>
    <BFormTags v-model="value" no-outer-focus class="mb-2">
      <template #default="{tags, inputAttrs, inputHandlers, addTag, removeTag}">
        <BInputGroup aria-controls="my-custom-tags-list">
          <input
            v-bind="inputAttrs"
            placeholder="New tag - Press enter to add"
            class="form-control"
            v-on="inputHandlers"
          />
          <BInputGroupText>
            <BButton variant="primary" @click="addTag()">Add</BButton>
          </BInputGroupText>
        </BInputGroup>
        <ul
          id="my-custom-tags-list"
          class="list-unstyled d-inline-flex flex-wrap mb-0"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions removals"
        >
          <!-- Always use the tag value as the :key, not the index! -->
          <!-- Otherwise screen readers will not read the tag additions and removals correctly -->
          <BCard
            v-for="tag in tags"
            :id="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
            :key="tag"
            tag="li"
            class="mt-1 me-1"
            body-class="py-1 pe-2 text-nowrap"
          >
            <strong>{{ tag }}</strong>
            <BButton
              variant="link"
              size="sm"
              :aria-controls="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
              @click="removeTag(tag)"
              >remove</BButton
            >
          </BCard>
        </ul>
      </template>
    </BFormTags>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref<string[]>(['apple', 'orange', 'banana', 'pear', 'peach'])
</script>
