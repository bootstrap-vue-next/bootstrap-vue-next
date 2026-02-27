<template>
  <NoteAlert>
    If not using <code>&lt;BApp&gt;</code>, you must have initialized the createBootstrap plugin for
    this to work properly. Read
    <VBLink :to="withBase('/docs#plugin-approach-legacy')">here</VBLink>
  </NoteAlert>
</template>

<script setup lang="ts">
import {withBase} from 'vitepress'
</script>
