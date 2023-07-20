# Introduction

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

With BootstrapVueNext you can build fast, responsive, and ARIA accessible projects on the web using Vue.js and Bootstrap v5.

</div>

<BRow cols="2" cols-lg="2">
  <BCol class="text-center">
    <BLink class="card-link" to="https://getbootstrap.com">
      <BCard class="p-3">
        <BootstrapIcon aria-hidden class="icon-lg" />
        <BCardText class="mt-4">
          Bootstrap v5 is the world's most popular framework for building responsive, mobile-first sites.
        </BCardText>
      </BCard>
    </BLink>
  </BCol>
  <BCol class="text-center">
    <BLink class="card-link" to="https://vuejs.org">
      <BCard class="p-3">
        <VueIcon aria-hidden class="icon-lg" />
        <BCardText class="mt-4">
          Vue.js (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
        </BCardText>
      </BCard>
    </BLink>
  </BCol>
</BRow>

<p class="mb-2 d-flex small">Current Version:</p>
<a href="https://www.npmjs.com/package/bootstrap-vue-next">
<img src="https://flat.badgen.net/npm/v/bootstrap-vue-next" alt="Current version">
</a>

## Overview

With more than 35 components, several directives and composibles (and growing), BootstrapVueNext provides one of the most comprehensive implementations of the Bootstrap v5 component and grid system available for Vue.js v3 / Nuxt.js 3, complete with extensive and automated WAI-ARIA accessibility markup.

<div class="d-flex gap-2 mt-4">
  <BButton :to="withBase('/docs')" variant="primary">Get Started</BButton>
  <BButton :href="globalData.githubUrl" target="_blank" rel="noopener" variant="outline-secondary">GitHub</BButton>
</div>

## Integrate with Nuxt.js

Easily integrate BootstrapVueNext into your Nuxt.js projects using our included Nuxt.js module. You can optionally specify only the components, directives and/or plugins you require.

<BButton variant="secondary" :to="withBase('/docs#installation-nuxt-js-3')" class="mt-3">BootstrapVueNext Nuxt.js module</BButton>

<script setup lang="ts">
import {
  BButton,
  BCol,
  BCard,
  BCardText,
  BLink,
  BBadge,
  BRow,
} from 'bootstrap-vue-next'
import {inject} from 'vue'
import {withBase} from 'vitepress'
import BootstrapIcon from '~icons/simple-icons/bootstrap'
import VueIcon from '~icons/simple-icons/vuedotjs'
import {appInfoKey} from '../.vitepress/theme/keys'

const globalData = inject(appInfoKey, {
  discordUrl: '',
  githubUrl: '',
  opencollectiveUrl: '',
})
</script>
