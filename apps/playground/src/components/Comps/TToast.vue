<template>
  <b-button class="mt-3" @click="createToast()">Show Toast</b-button>
  <b-button class="mt-3" @click="createToast2()">Show Toast 2</b-button>
  <b-button class="mt-3" @click="createToastError()">Show a danger Toast</b-button>
  <b-button class="mt-3" @click="consoleLog('Button Click!')">Hide Toast</b-button>
  <b-toast v-model="showToast" title="Hello" body="cow"></b-toast>
</template>

<script setup lang="ts">
import {h, ref} from 'vue'
import {useToast} from 'bootstrap-vue-3'

const showToast = ref(true)

const c = useToast()

const consoleLog = (...args: unknown[]) => console.log(...args)

const createToast = () => {
  c?.show({title: 'example title', body: h('div', 'cool Dynamic')}, {pos: 'bottom-right'})
}

const createToast2 = () => {
  c?.show(
    {
      body: 'This is a long content toast. Very looooooooooooong content toast. Should be centered.',
    },
    {pos: 'bottom-center'}
  )
}

const createToastError = () => {
  c?.show(
    {
      body: 'This is a danger toast!!',
    },
    {variant: 'danger'}
  )
}
</script>
