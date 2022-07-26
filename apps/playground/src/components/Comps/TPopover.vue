<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-button id="popover">hover me</b-button>
        <b-popover
          target="popover"
          :delay="{show: 400, hide: 5000}"
          triggers="hover"
          placement="right"
        >
          <template #title>What?</template>
          Hello Word
        </b-popover>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button id="popover-target-1">Hover Me</b-button>
        <b-popover target="popover-target-1" triggers="hover" placement="top">
          <template #title>
            Popover
            <em>Title</em>
            - {{ popoverInput }}
          </template>
          <b-button @click="consoleLog('Button Click!')">456</b-button>I am popover
          <b>component</b> content! <b-form-input v-model="popoverInput" type="text" />Name:
          <strong>{{ popoverInput }}</strong>
        </b-popover>
      </b-col>
      <b-col>
        <button
          v-b-popover.top="'And here\'s some amazing content. It\'s very engaging. Right?'"
          type="button"
          class="btn btn-lg btn-danger"
          title="Popover title"
        >
          Click to toggle popover
        </button>
      </b-col>
      <b-col>
        <button
          v-b-popover.left="'I\'m another popover!'"
          type="button"
          class="btn btn-lg btn-success"
          title="Popover title 2"
        >
          Click to toggle popover
        </button>
      </b-col>
      <b-col>
        <b-button ref="popoverRef">Click to toggle popover by ref with ref container</b-button>
      </b-col>
      <b-col>
        <div ref="popoverContainerRef" />
      </b-col>
      <b-col>
        <b-popover :container="popoverContainerRef" :target="popoverRef" placement="bottom">
          <template #title>
            Popover
            <em>Title</em>
            - {{ popoverInput }}
          </template>
          <b-button @click="consoleLog('Button Click!')">456</b-button>I am popover
          <b>component</b> content! <b-form-input v-model="popoverInput" type="text" />Name:
          <strong>{{ popoverInput }}</strong>
        </b-popover>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ComponentPublicInstance, ref} from 'vue'

const popoverInput = ref('foo')
const popoverRef = ref<ComponentPublicInstance<HTMLButtonElement>>()
const popoverContainerRef = ref<HTMLButtonElement>()

const consoleLog = (...args: unknown[]) => console.log(...args)
</script>
