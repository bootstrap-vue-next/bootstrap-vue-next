# Introduction

<div class="lead mb-5">

With BootstrapVueNext you can build fast, responsive, and ARIA accessible projects on the web using Vue.js and Bootstrap v5.
Integrate with Nuxt.js v3

</div>

<b-row cols="2" cols-lg="2">
  <b-col class="text-center">
    <b-link class="card-link" to="https://getbootstrap.com">
      <b-card class="p-3">
        <boostrap-icon aria-hidden class="icon-lg" />
        <b-card-text class="mt-4">
          Bootstrap v5 is the world's most popular framework for building responsive, mobile-first sites.
        </b-card-text>
      </b-card>
    </b-link>
  </b-col>
  <b-col class="text-center">
    <b-link class="card-link" to="https://vuejs.org">
      <b-card class="p-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"><path fill="none" d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"/><path fill="#35495e" d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"/><path fill="#41b883" d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"/></svg>
        <b-card-text class="mt-4">
          Vue.js (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
        </b-card-text>
      </b-card>
    </b-link>
  </b-col>
</b-row>

Current Version
<b-badge>v0.9.4</b-badge>

## Overview

With more than 35 components, several directives and composibles (and growing), BootstrapVueNext provides one of the most comprehensive implementations of the Bootstrap v5 component and grid system available for Vue.js v3 / Nuxt.js 3, complete with extensive and automated WAI-ARIA accessibility markup.

<div class="d-flex gap-2 mt-4">
  <b-button to="/getting-started" variant="primary">Get Started</b-button>
  <b-button to="https://github.com/bootstrap-vue-next/bootstrap-vue-next" variant="outline-secondary">GitHub</b-button>
</div>

## Integrate with Nuxt.js

Easily integrate BootstrapVueNext into your Nuxt.js projects using our included Nuxt.js module. You can optionally specify only the components, directives and/or plugins you require.

<b-button variant="secondary" to="/getting-started#nuxtjs" class="mt-3">BootstrapVueNext Nuxt.js module</b-button>

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
import BoostrapIcon from '~icons/bi/bootstrap'
</script>
