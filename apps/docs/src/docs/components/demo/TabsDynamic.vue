<template>
  <div>
    <BCard no-body>
      <BTabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <BTab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i">
          Tab contents {{ i }}
          <BButton size="sm" variant="danger" class="float-right" @click="closeTab(i)">
            Close tab
          </BButton>
        </BTab>

        <!-- New Tab Button (Using tabs-end slot) -->
        <template #tabs-end>
          <BNavItem role="presentation" @click.prevent="newTab"><b>+</b></BNavItem>
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
