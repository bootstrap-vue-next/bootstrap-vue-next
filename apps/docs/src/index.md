# Introduction

<div class="lead mb-5">

With BootstrapVueNext you can build fast, responsive, and ARIA accessible projects on the web using Vue.js and Bootstrap v5.

</div>

<b-row cols="2" cols-lg="2">
  <b-col class="text-center">
    <b-link class="card-link" to="https://getbootstrap.com">
      <b-card class="p-3">
        <bootstrap-icon aria-hidden class="icon-lg" />
        <b-card-text class="mt-4">
          Bootstrap v5 is the world's most popular framework for building responsive, mobile-first sites.
        </b-card-text>
      </b-card>
    </b-link>
  </b-col>
  <b-col class="text-center">
    <b-link class="card-link" to="https://vuejs.org">
      <b-card class="p-3">
        <vue-icon aria-hidden class="icon-lg" />
        <b-card-text class="mt-4">
          Vue.js (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
        </b-card-text>
      </b-card>
    </b-link>
  </b-col>
</b-row>

<p class="mb-2 d-flex small">Current Version:</p>
<a href="https://www.npmjs.com/package/bootstrap-vue-next">
<img src="https://flat.badgen.net/npm/v/bootstrap-vue-next" alt="Current version">
</a>

## Overview

With more than 35 components, several directives and composibles (and growing), BootstrapVueNext provides one of the most comprehensive implementations of the Bootstrap v5 component and grid system available for Vue.js v3 / Nuxt.js 3, complete with extensive and automated WAI-ARIA accessibility markup.

<div class="d-flex gap-2 mt-4">
  <b-button :to="withBase('/docs')" variant="primary">Get Started</b-button>
  <b-button to="https://github.com/bootstrap-vue-next/bootstrap-vue-next" variant="outline-secondary">GitHub</b-button>
</div>

## Integrate with Nuxt.js

Easily integrate BootstrapVueNext into your Nuxt.js projects using our included Nuxt.js module. You can optionally specify only the components, directives and/or plugins you require.

<b-button variant="secondary" :to="withBase('/docs#nuxtjs')" class="mt-3">BootstrapVueNext Nuxt.js module</b-button>

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
import {withBase} from 'vitepress'
import BootstrapIcon from '~icons/simple-icons/bootstrap'
import VueIcon from '~icons/simple-icons/vuedotjs'
</script>
