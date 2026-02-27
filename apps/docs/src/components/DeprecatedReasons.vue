<template>
  <ol type="1">
    <li>
      It is no longer relevant because:
      <ol type="a">
        <li>It's been deprecated by Bootstrap</li>
        <li>
          Some aspect of Vue3 or bootstrap5 has made this feature less useful or not reasonable to
          implement
        </li>
        <li>
          The functionality can be as easily achieved using bootstrap natively (e.g. adding classes)
        </li>
        <li>
          There is a more modern way of solving the same problem - in this case we are trying to
          point out the parity feature in the migration guide
        </li>
      </ol>
    </li>
    <li>
      There hasn't been enough demand to implement this feature, and in many cases we believe we can
      add it in a future version without causing a breaking change. If you would like this feature,
      please
      <VBLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues"
        >submit an issue</VBLink
      >, upvote an existing issue, or better yet
      <VBLink
        href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#developing"
        >submit a pull request</VBLink
      >.
    </li>
  </ol>
</template>

<style scoped>
ol {
  list-style-type: decimal;
  padding-left: 2rem;
  margin-bottom: 1rem;
}

ol ol {
  list-style-type: lower-alpha;
  padding-left: 2rem;
  margin-top: 0.5rem;
}

li {
  display: list-item;
  margin-bottom: 0.5rem;
}
</style>
