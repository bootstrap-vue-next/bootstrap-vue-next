<template>
  <BAlert :model-value="true" variant="danger">
    <strong>Be cautious</strong> of placing user supplied content in the <code>html</code> field, as
    it may make you vulnerable to
    <VBLink
      target="_blank"
      rel="noopener"
      variant="info"
      href="https://en.wikipedia.org/wiki/Cross-site_scripting"
    >
      <abbr title="Cross Site Scripting Attacks">XSS attacks</abbr> </VBLink
    >, if you do not first
    <VBLink
      variant="info"
      href="https://en.wikipedia.org/wiki/HTML_sanitization"
      target="_blank"
      rel="noopener"
    >
      sanitize</VBLink
    >
    the user supplied string.
  </BAlert>
</template>
