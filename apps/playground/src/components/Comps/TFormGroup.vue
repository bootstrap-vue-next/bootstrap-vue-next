<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BFormGroup label="Tags validation example" label-for="tags-validation" :state="state">
          <!-- <label for="tags-basic">Type a new tag and press enter</label> -->
          <BFormTags
            v-model="value"
            tag-variant="warning"
            autofocus
            separator=" ,"
            remove-on-delete
            name="tag-names"
            no-outer-focus
            no-add-on-enter
            :input-attrs="{'aria-describedby': 'tags-validation-help'}"
            :tag-validator="tagValidator"
            @tag-state="onTagState"
          />
          <template #invalid-feedback>
            You must provide at least 3 tags and no more than 8
          </template>

          <template #description>
            <div id="tags-validation-help">
              Tags must be 3 to 5 characters in length and all lower case. Enter tags separated by
              spaces or press enter.
            </div>
          </template>
        </BFormGroup>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <p class="mt-2">Value: {{ value }}</p>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormGroup
          label="Enter your name"
          label-for="input-1"
          valid-feedback="Thank you!"
          label-visually-hidden
        >
          <BFormInput id="input-1" v-model="name" :state="state" trim />
        </BFormGroup>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="mt-4 mb-3">Using label-wrapper-attrs prop</h4>

        <BFormGroup
          label="Aktiv:"
          label-for="test-active-fixed"
          label-align-md="end"
          label-cols-md="3"
          :label-wrapper-attrs="{class: 'custom-label-field'}"
          class="align-items-center test-form-group"
        >
          <BFormCheckbox id="test-active-fixed" placeholder="" switch />
        </BFormGroup>

        <BFormGroup
          label="Standard:"
          label-for="test-default-fixed"
          label-align-md="end"
          label-cols-md="3"
          :label-wrapper-attrs="{class: 'custom-label-field'}"
          class="align-items-center test-form-group"
        >
          <BFormCheckbox id="test-default-fixed" placeholder="" switch />
        </BFormGroup>

        <BFormGroup
          label="Name:"
          label-for="test-name-fixed"
          label-align-md="end"
          label-cols-md="3"
          :label-wrapper-attrs="{class: 'custom-label-field'}"
          class="align-items-center test-form-group"
        >
          <BFormInput id="test-name-fixed" placeholder="Enter name" />
        </BFormGroup>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const value = ref(['apple', 'orange'])

const state = computed(() => value.value.length > 2 && value.value.length < 9)

const tagValidator = (tag: string) => tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6
const onTagState = (valid: string[], invalid: string[], duplicate: string[]) => {
  // eslint-disable-next-line no-console
  console.log({
    valid,
    invalid,
    duplicate,
  })
}

const name = ref('')
</script>

<style scoped>
@media (min-width: 768px) {
  :deep(.custom-label-field) {
    flex: 0 0 120px !important;
    max-width: 120px !important;
    padding-right: 5px !important;
    background-color: rgba(255, 0, 0, 0.1); /* Visual indicator to see if it's applied */
  }
}

:deep(.test-form-group) {
  border: 1px solid #dee2e6;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}
</style>
