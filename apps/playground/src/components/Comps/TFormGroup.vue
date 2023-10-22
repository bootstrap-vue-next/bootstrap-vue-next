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
  </BContainer>
</template>

<script setup lang="ts">
import {ref, toRef} from 'vue'

const value = ref(['apple', 'orange'])

const state = toRef(() => value.value.length > 2 && value.value.length < 9)

const tagValidator = (tag: string) => tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6
const onTagState = (valid: string[], invalid: string[], duplicate: string[]) => {
  // eslint-disable-next-line no-console
  console.log({
    valid,
    invalid,
    duplicate,
  })
}
</script>
