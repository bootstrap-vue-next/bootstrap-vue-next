<template>
  <b-container>
    <b-row>
      <b-col>
        <b-button @click="dddd">click me</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert ref="foo" v-model="a" dismissible fade @close-count-down="b = $event">
          ALERT countdown {{ b }}</b-alert
        >
        <b-alert v-model="a" show @close-count-down="b = $event">
          ALERT countdown with prop show {{ b }}</b-alert
        >
        <b-alert v-model="c"> ALERT true {{ b }}</b-alert>
        <b-alert v-model="d"> ALERT false {{ b }}</b-alert>
        <b-alert v-model="c" show> ALERT true with prop show {{ b }}</b-alert>
        <b-alert v-model="d" show> ALERT false with prop show {{ b }}</b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {onBeforeUnmount, ref} from 'vue'
import BAlert from './components/BAlert/BAlert.vue'

const foo = ref()

const a = ref(5400)

const b = ref<null | number>(null)
const c = ref(true)
const d = ref(false)

const dddd = () => {
  foo.value.restart()
}

/**
 * Important to do this
 */
onBeforeUnmount(() => {
  foo.value.stop()
})

// You can use this file as a development spot to test your changes
// Please do not commit this file
</script>
