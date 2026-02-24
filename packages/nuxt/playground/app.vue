<template>
  <div style="min-height: 1000vh">
    <BOrchestrator />

    <BContainer class="mt-5">
      <BRow>
        <BCol>
          <BButton
            to="/about"
            prefetch
            prefetched-class="btn-info"
          >
            Go to about with btn-info class when prefetched! (is nuxt link)
          </BButton>
          <BLink
            :to="{ path: '/about' }"
            variant="info"
          >
            About
          </BLink>
        </BCol>
      </BRow>
      <BRow>
        <BCol>
          <BLink
            to="/"
            variant="primary"
            prefetch
          >
            Home
          </BLink>
        </BCol>
      </BRow>
      <BRow>
        <BCol>
          <BLink
            href="https://google.com"
            target="_blank"
            variant="danger"
          >
            Google
          </BLink>
        </BCol>
      </BRow>
      <BRow>
        <BCol>
          <NuxtLink>Fobar!</NuxtLink>

          <BLink
            :to="{ path: '/about' }"
            prefetched-class="link-underline-danger"
            variant="info"
            prefetch
          >
            About with prefetch underline danger class
          </BLink>
        </BCol>
      </brow>
    </bcontainer>
  </div>
  <NuxtPage />
</template>

<script setup>
import { ref } from 'vue'
import { useBreadcrumb, useColorMode, useModal, useToast } from 'bootstrap-vue-next'

const show = ref(false)

const f = useBreadcrumb()
useColorMode()
useModal()
const toast = useToast()
const formSelectMultipleSelected = ref([])
</script>
