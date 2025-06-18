<template>
  <div>
    <BFormGroup
      label="Tagged input using select"
      label-for="tags-component-select"
    >
      <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
      <BFormTags
        id="tags-component-select"
        v-model="value"
        size="lg"
        class="mb-2"
        add-on-change
        no-outer-focus
      >
        <template #default="{tags, inputAttrs, disabled, addTag, removeTag}">
          <ul
            v-if="tags.length > 0"
            class="list-inline d-inline-block mb-2"
          >
            <li
              v-for="tag in tags"
              :key="tag"
              class="list-inline-item"
            >
              <BFormTag
                :title="tag"
                :disabled="disabled"
                variant="info"
                @remove="removeTag(tag)"
                >{{ tag }}</BFormTag
              >
            </li>
          </ul>
          <BFormSelect
            v-bind="inputAttrs"
            :disabled="disabled || availableOptions.length === 0"
            :options="availableOptions"
            @update:model-value="addTag($event as string)"
          >
            <template #first>
              <!-- This is required to prevent bugs with Safari -->
              <option
                disabled
                value=""
              >
                Choose a tag...
              </option>
            </template>
          </BFormSelect>
        </template>
      </BFormTags>
    </BFormGroup>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const value = ref<string[]>([])
const options = ref<string[]>([
  'Apple',
  'Orange',
  'Banana',
  'Lime',
  'Peach',
  'Chocolate',
  'Strawberry',
])

const availableOptions = computed(() =>
  options.value.filter((opt) => value.value.indexOf(opt) === -1)
)
</script>
