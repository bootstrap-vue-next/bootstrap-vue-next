<script setup lang="ts"></script>

<template>
  <BContainer class="mt-5">
    <BNavbar>
      <BNavItem to="/about">
        About
      </BNavItem>
      <BNavItem to="/">
        Home
      </BNavItem>
    </BNavbar>
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
    </BRow>
    <BRow>
      <BCol>
        Nav items
        <BNavItem :to="{ path: '/about' }">
          About
        </BNavItem>
        <BNavItem to="/">
          Home
        </BNavItem>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        dropdown
        <BDropdown>
          <BDropdownItem to="/">
            Home
          </BDropdownItem>
          <BDropdownItem to="/about">
            About
          </BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow class="mt-3 border">
      <BCol>
        <NuxtPage />
      </BCol>
    </BRow>
  </BContainer>
</template>
