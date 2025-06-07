<template>
  <div>
    <BFormGroup
      label="Tagged input using dropdown"
      label-for="tags-with-dropdown"
    >
      <BFormTags
        id="tags-with-dropdown"
        v-model="value"
        no-outer-focus
        class="mb-2"
      >
        <template #default="{tags, disabled, addTag, removeTag}">
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

          <BDropdown
            size="sm"
            variant="outline-secondary"
            block
            menu-class="w-100"
            no-caret
          >
            <template #button-content> &#x1f50d; <span>Choose tags</span> </template>
            <BDropdownForm @submit.stop.prevent="() => {}">
              <BFormGroup
                label="Search tags"
                label-for="tag-search-input"
                label-cols-md="auto"
                class="mb-0"
                label-size="sm"
                :description="searchDesc"
                :disabled="disabled"
              >
                <BFormInput
                  id="tag-search-input"
                  v-model="search"
                  type="search"
                  size="sm"
                  autocomplete="off"
                />
              </BFormGroup>
            </BDropdownForm>
            <BDropdownDivider />
            <BDropdownItemButton
              v-for="option in availableOptions"
              :key="option"
              @click="onOptionClick({option, addTag})"
            >
              {{ option }}
            </BDropdownItemButton>
            <BDropdownText v-if="availableOptions.length === 0">
              There are no tags available to select
            </BDropdownText>
          </BDropdown>
        </template>
      </BFormTags>
    </BFormGroup>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const options = ref<string[]>([
  'Apple',
  'Orange',
  'Banana',
  'Lime',
  'Peach',
  'Chocolate',
  'Strawberry',
])
const search = ref<string>('')
const value = ref<string[]>([])

const criteria = computed(() => search.value.trim().toLowerCase())

const availableOptions = computed(() => {
  const searchCriteria = criteria.value

  // Filter out already selected options
  const optionsFiltered = options.value.filter((opt) => value.value.indexOf(opt) === -1)
  if (searchCriteria) {
    // Show only options that match criteria
    return optionsFiltered.filter((opt) => opt.toLowerCase().indexOf(searchCriteria) > -1)
  }
  // Show all options available
  return optionsFiltered
})

const searchDesc = computed(() => {
  if (criteria.value && availableOptions.value.length === 0) {
    return 'There are no tags matching your search criteria'
  }
  return ''
})

const onOptionClick = ({option, addTag}: {option: string; addTag: (tag: string) => void}) => {
  addTag(option)
  search.value = ''
}
</script>
