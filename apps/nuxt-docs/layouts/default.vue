<template>
  <div>
    <BNavbar variant="primary">
      <BNavbarNav>
        <BNavbarBrand to="/">Home</BNavbarBrand>
        <BNav>
          <BNavItem to="/reference/components">Components</BNavItem>
          <BNavItem to="/reference/composables">Composables</BNavItem>
          <BNavItem to="/reference/directives">Directives</BNavItem>
          <BNavItem to="/reference/icons">Icons</BNavItem>
          <BNavItem to="/reference/types">Types</BNavItem>
          <BNavItem to="migration-guide">Migrate</BNavItem>
        </BNav>
      </BNavbarNav>
      <BNav>
        <BButton
          :variant="variant"
          :href="appInfo?.githubUrl"
          aria-label="Open Github"
          target="_blank"
          rel="noopener"
        >
          <GithubIcon aria-hidden />
        </BButton>
        <BButton
          :variant="variant"
          :href="appInfo?.discordUrl"
          aria-label="Open Discord Server"
          target="_blank"
          rel="noopener"
        >
          <DiscordIcon aria-hidden />
        </BButton>
        <DarkButton />
      </BNav>
    </BNavbar>
    <slot />
  </div>
</template>

<script setup lang="ts">
import GithubIcon from '~icons/bi/github'
import DiscordIcon from '~icons/bi/discord'

const appInfo = inject(appInfoKey, null)

const variant = null as any
</script>
