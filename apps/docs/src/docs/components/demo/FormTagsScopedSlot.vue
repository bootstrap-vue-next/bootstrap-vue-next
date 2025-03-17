<template>
  <div>
    <BFormCheckbox v-model="disabled" switch size="lg">Disable</BFormCheckbox>
    <BFormTags
      v-model="tags"
      tag-variant="success"
      class="mb-2 mt-2"
      :disabled="disabled"
      no-outer-focus
      placeholder="Enter a new tag value and click Add"
      :state="state"
      @update:model-value="resetInputValue()"
    >
      <template
        #default="{
          tags: innerTags,
          inputId,
          placeholder,
          disabled: innerDisabled,
          addTag,
          removeTag,
        }"
      >
        <BInputGroup>
          <!-- Always bind the id to the input so that it can be focused when needed -->
          <BFormInput
            :id="inputId"
            v-model="newTag"
            :placeholder="placeholder"
            :disabled="innerDisabled"
            :formatter="formatter"
          />
          <BInputGroupText>
            <BButton
              :disabled="innerDisabled || state === false"
              variant="primary"
              @click="addTag(newTag)"
              >Add</BButton
            >
          </BInputGroupText>
        </BInputGroup>
        <BFormInvalidFeedback :state="state">
          Duplicate tag value cannot be added again!
        </BFormInvalidFeedback>
        <ul v-if="innerTags.length > 0" class="mb-0">
          <li v-for="tag in innerTags" :key="tag" :title="`Tag: ${tag}`" class="mt-2">
            <span class="d-flex align-items-center">
              <span class="me-2">{{ tag }}</span>
              <BButton
                :disabled="disabled"
                size="sm"
                variant="outline-danger"
                @click="removeTag(tag)"
              >
                remove tag
              </BButton>
            </span>
          </li>
        </ul>
        <BFormText v-else> There are no tags specified. Add a new tag above. </BFormText>
      </template>
    </BFormTags>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const tags = ref<string[]>([])
const newTag = ref<string>('')
const disabled = ref<boolean>(false)
const state = computed(() =>
  // Return false (invalid) if new tag is a duplicate
  tags.value.indexOf(newTag.value.trim()) > -1 ? false : null
)
const resetInputValue = () => {
  newTag.value = ''
}
const formatter = (value: string) => value.toUpperCase()
</script>
