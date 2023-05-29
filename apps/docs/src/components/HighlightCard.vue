<template>
  <b-card no-body class="mb-5">
    <b-card-body>
      <slot />
    </b-card-body>
    <div class="html">HTML</div>
    <b-card-body class="bg-body-tertiary">
      <slot name="html" />
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import {BCard, BCardBody} from 'bootstrap-vue-next'
</script>

<style lang="scss">
[class^='language-'] {
  position: relative;
  .copy {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    display: block;
    border: none;
    padding: 0;
    outline: inherit;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: var(--bs-secondary);
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='20' width='20' stroke='rgba(255,255,255)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2'/%3E%3C/svg%3E");
    background-position: 50%;
    background-size: 20px;
    background-repeat: no-repeat;
    transition: opacity 0.4s;
    opacity: 0;
    height: 2.5rem;
    width: 2.5rem;
    &::after {
      position: absolute;
      top: 0;
      left: -4.6rem;
      content: 'Copied!';
      padding: 0.6rem;
      border-radius: 4px;
      background-color: var(--bs-secondary);
      opacity: 0;
      color: var(--bs-light);
      font-size: 0.9rem;
    }
    &.copied {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='20' width='20' stroke='rgba(255,255,255)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4'/%3E%3C/svg%3E");
      &::after {
        opacity: 1;
      }
    }
  }
  .lang {
    position: absolute;
    top: 4px;
    right: 10px;
    z-index: 2;
    font-size: 12px;
    font-weight: 500;
    transition: color 0.5s;
  }
  &:hover {
    .copy {
      :focus {
        opacity: 1;
      }
      opacity: 1;
    }
  }
}
</style>
