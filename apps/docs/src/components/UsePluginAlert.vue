<template>
  <NoteAlert>
    You must have initialized the createBootstrap plugin for this to work properly. Read
    <BLink :to="withBase('/docs#install')">here</BLink>
  </NoteAlert>
</template>

<script setup lang="ts">
import {BLink} from 'bootstrap-vue-next'
import NoteAlert from './NoteAlert.vue'
import {withBase} from 'vitepress'
</script>
