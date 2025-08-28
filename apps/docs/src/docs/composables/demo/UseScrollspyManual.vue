<template>
  <BContainer>
    <BRow>
      <BCol cols="4">
        <BListGroup>
          <BListGroupItem
            v-for="item in filteredList"
            :key="item.id"
            :href="`#${item.id}`"
            :active="current === item.id"
            @click="scrollIntoView"
          >
            {{ item.text }}
          </BListGroupItem>
        </BListGroup>
      </BCol>
      <BCol cols="8">
        <div>
          Current: <strong>{{ current || 'None' }}</strong>
        </div>
        <div
          ref="content"
          style="height: 250px; overflow-y: auto; border: 1px solid #dee2e6; padding: 1rem;"
        >
          <h5 id="intro">Introduction</h5>
          <p v-for="i in 3" :key="`intro-${i}`">{{ loremText }}</p>
          <h5 id="features">Features</h5>
          <p v-for="i in 3" :key="`features-${i}`">{{ loremText }}</p>
          <h5 id="conclusion">Conclusion</h5>
          <p v-for="i in 3" :key="`conclusion-${i}`">{{ loremText }}</p>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useTemplateRef} from 'vue'
import {useScrollspy} from 'bootstrap-vue-next'

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const content = useTemplateRef('content')

const {current, list, scrollIntoView} = useScrollspy(content, null, {
  manual: true,
})

const filteredList = computed(() => list.value.filter(item => item.id))
</script>