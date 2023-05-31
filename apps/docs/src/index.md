# Introduction

<div class="lead mb-5">

With BootstrapVueNext you can build fast, responsive, and ARIA accessible projects on the web using Vue.js and Bootstrap v5.
Integrate with Nuxt.js v3

</div>

<b-row cols="2" cols-lg="2">
  <b-col class="text-center">
    <b-link class="card-link" to="https://getbootstrap.com">
      <b-card class="p-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"><defs><linearGradient id="deviconBootstrap0" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613) scale(.24566)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9013fe"/><stop offset="1" stop-color="#6610f2"/></linearGradient><linearGradient id="deviconBootstrap1" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f1e5fc"/></linearGradient><filter id="deviconBootstrap2" width="197" height="249" x="161.9" y="135.46" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs><path fill="url(#deviconBootstrap0)" d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94z"/><path fill="url(#deviconBootstrap1)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z" filter="url(#deviconBootstrap2)" transform="translate(1.494 2.203) scale(.24566)"/></svg>
        <b-card-text class="mt-4">
          Bootstrap v5 is the world's most popular framework for building responsive, mobile-first sites.
        </b-card-text>
      </b-card>
    </b-link>
  </b-col>
  <b-col class="text-center">
    <b-link class="card-link" to="https://vuejs.org">
      <b-card class="p-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128 128"><path fill="none" d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"/><path fill="#35495e" d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"/><path fill="#41b883" d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"/></svg>
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
</script>
