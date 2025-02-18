<template>
  <div>
    <BFormTags v-model="value" no-outer-focus class="mb-2">
      <template #default="{tags, inputAttrs, inputHandlers, tagVariant, addTag, removeTag}">
        <BInputGroup class="mb-2">
          <BFormInput
            v-bind="inputAttrs"
            placeholder="New tag - Press enter to add"
            class="form-control"
            v-on="inputHandlers"
          />
          <BInputGroupText>
            <BButton variant="primary" @click="addTag()">Add</BButton>
          </BInputGroupText>
        </BInputGroup>
        <div class="d-inline-block" style="font-size: 1.5rem">
          <BFormTag
            v-for="tag in tags"
            :key="tag"
            :title="tag"
            :variant="tagVariant"
            class="me-1"
            @remove="removeTag(tag)"
            >{{ tag }}</BFormTag
          >
        </div>
      </template>
    </BFormTags>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref<string[]>(['apple', 'orange', 'banana'])
</script>
