<template>
  <b-container>
    <b-row>
      <b-col>{{ isPending }}</b-col>
      <b-col>{{ value }}</b-col>
      <b-col>{{ a }}</b-col>
      <b-col><b-button @click="a = a + 1000">add a second</b-button></b-col>
      <b-col><b-button @click="pause()">click me pause</b-button></b-col>
      <b-col><b-button @click="resume()">click me resume</b-button></b-col>
      <b-col><b-button @click="restart()">click me restart</b-button></b-col>
      <b-col><b-button @click="stop()">click me stop</b-button></b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {onBeforeUnmount, ref} from 'vue'
import useCountdown from './composables/useCountdown'

const a = ref(5400)

const {isPending, stop, value, pause, restart, resume} = useCountdown(a)

/**
 * Important to do this
 */
onBeforeUnmount(stop)

// You can use this file as a development spot to test your changes
// Please do not commit this file
</script>
