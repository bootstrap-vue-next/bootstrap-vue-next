<template>
  <div class="my-2">
    <h2>Popover</h2>
    <b-button id="popover">hover me</b-button>
    <b-popover target="popover" :delay="{show: 400, hide: 5000}" triggers="hover" placement="right">
      <template #title>What?</template>
      Hello Word
    </b-popover>
  </div>
  <hr />
  <div class="my-2">
    <h2>Popover</h2>
    <div class="d-flex gap-2">
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
      <button
        v-b-popover.top="'And here\'s some amazing content. It\'s very engaging. Right?'"
        type="button"
        class="btn btn-lg btn-danger"
        title="Popover title"
      >
        Click to toggle popover
      </button>
      <button
        v-b-popover.left="'I\'m another popover!'"
        type="button"
        class="btn btn-lg btn-success"
        title="Popover title 2"
      >
        Click to toggle popover
      </button>
      <b-button ref="popoverRef">Click to toggle popover by ref with ref container</b-button>
      <div ref="popoverContainerRef"></div>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import {ComponentPublicInstance, ref} from 'vue'

const popoverInput = ref('foo')
const popoverRef = ref<ComponentPublicInstance<HTMLButtonElement>>()
const popoverContainerRef = ref<HTMLButtonElement>()

const consoleLog = (...args: unknown[]) => console.log(...args)
</script>
