---
title: Introduction
description: With BootstrapVueNext you can build fast, responsive, and ARIA accessible projects on the web using Vue.js and Bootstrap v5.
---

<BRow>
  <BCol class="text-center" cols="12" sm="6">
    <VBLink class="card-link" href="https://getbootstrap.com" target="_blank" rel="noopener">
      <BCard class="p-3">
        <BootstrapIcon aria-hidden class="icon-lg" />
        <BCardText class="mt-4">
          Bootstrap v5 is the world's most popular framework for building responsive, mobile-first sites.
        </BCardText>
      </BCard>
    </VBLink>
  </BCol>
  <BCol class="text-center">
    <VBLink class="card-link" href="https://vuejs.org" target="_blank" rel="noopener">
      <BCard class="p-3">
        <VueIcon aria-hidden class="icon-lg" />
        <BCardText class="mt-4">
          Vue.js (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
        </BCardText>
      </BCard>
    </VBLink>
  </BCol>
</BRow>

<p class="mb-2 d-flex small">Current Version:</p>
<a href="https://www.npmjs.com/package/bootstrap-vue-next" target="_blank" rel="noopener">
  <img src="https://flat.badgen.net/npm/v/bootstrap-vue-next" alt="Current version">
</a>

## Overview

With more than 35 components, several directives and composables (and growing), BootstrapVueNext provides one of the most comprehensive implementations of the Bootstrap v5 component and grid system available for Vue.js v3 / Nuxt.js 3, complete with extensive and automated WAI-ARIA accessibility markup.

<div class="d-flex gap-2 mt-4">
  <BButton :to="withBase('/docs')" variant="primary">Get Started</BButton>
  <BButton :href="globalData.githubUrl" target="_blank" rel="noopener" variant="outline-secondary">GitHub</BButton>
</div>

## Integrate with Nuxt.js

Easily integrate BootstrapVueNext into your Nuxt.js projects using our included Nuxt.js module. You can optionally specify only the components, directives and/or plugins you require.

<BButton variant="secondary" :to="withBase('/docs#installation-nuxt-js-3')" class="my-3">BootstrapVueNext Nuxt.js module</BButton>

## Our OpenCollective

<OpenCollectiveMemberDisplay />

<script setup lang="ts">
import {inject} from 'vue'
import {withBase} from 'vitepress'
import BootstrapIcon from '~icons/logos/bootstrap'
import VueIcon from '~icons/logos/vue'
import {appInfoKey} from '../.vitepress/theme/keys'
import OpenCollectiveMemberDisplay from './components/OpenCollectiveMemberDisplay.vue'

const globalData = inject(appInfoKey, {
  discordUrl: '',
  githubUrl: '',
  githubPackageDirectory: '',
  githubComponentsDirectory: '',
  githubComposablesDirectory: '',
  githubMainBranch: '',
  githubDirectivesDirectory: '',
  opencollectiveUrl: '',
  githubDocsDirectory: '',
})
</script>
