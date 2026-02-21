<template>
  <div>
    <p>
      <BLink
        v-b-toggle
        href="#collapse-href"
        @click.prevent
      >
        Toggle with BLink (prevents navigation)
      </BLink>
    </p>
    <p>
      <a
        v-b-toggle
        href="#collapse-href"
        @click.prevent
      >
        Toggle with anchor tag (prevents navigation)
      </a>
    </p>
    <p>
      <a
        v-b-toggle
        href="#collapse-href"
      >
        Toggle with anchor tag (allows navigation - URL will change)
      </a>
    </p>

    <BCollapse
      id="collapse-href"
      class="mt-3"
    >
      <BCard>
        <p class="card-text">Toggled using <code>href="#collapse-href"</code></p>
      </BCard>
    </BCollapse>
  </div>
</template>
