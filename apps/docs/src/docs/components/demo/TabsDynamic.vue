<template>
  <div>
    <BCard no-body>
      <BTabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <BTab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i">
          <template #title>
            {{ 'Tab ' + i }}
            <BButton
              style="margin-right: -1rem"
              variant="link"
              class="link-secondary link-underline link-underline-opacity-0"
              size="sm"
              @click.prevent="closeTab(i)"
              >&times;</BButton
            >
          </template>
          Tab contents {{ i }}
        </BTab>

        <!-- New Tab Button (Using tabs-end slot) -->
        <template #tabs-end>
          <li class="nav-item ms-auto mt-0 mb-2">
            <BButton
              variant="outline-secondary"
              class="no-underline"
              role="presentation"
              @click.prevent="newTab"
              ><b>+</b></BButton
            >
          </li>
        </template>

        <!-- Render this if no tabs -->
        <template #empty>
          <div class="text-center text-muted">
            There are no open tabs<br />
            Open a new tab using the <b>+</b> button above.
          </div>
        </template>
      </BTabs>
    </BCard>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tabCounter = ref(0)
const tabs = ref<number[]>([])

const newTab = () => {
  tabs.value.push(tabCounter.value++)
}

const closeTab = (i: number) => {
  tabs.value = tabs.value.filter((tab) => tab !== i)
}
</script>
