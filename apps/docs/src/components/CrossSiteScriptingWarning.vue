<template>
  <BAlert :model-value="true" variant="danger">
    <strong>Be cautious</strong> of placing user supplied content in the <code>html</code> field, as
    it may make you vulnerable to
    <BLink
      target="_blank"
      rel="noopener"
      variant="info"
      href="https://en.wikipedia.org/wiki/Cross-site_scripting"
    >
      <abbr title="Cross Site Scripting Attacks">XSS attacks</abbr> </BLink
    >, if you do not first
    <BLink
      variant="info"
      href="https://en.wikipedia.org/wiki/HTML_sanitization"
      target="_blank"
      rel="noopener"
    >
      sanitize</BLink
    >
    the user supplied string.
  </BAlert>
</template>

<script setup lang="ts">
import {BAlert, BLink} from 'bootstrap-vue-next'
</script>
