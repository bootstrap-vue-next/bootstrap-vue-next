<template>
  <BContainer fluid class="p-0">
    <BRow>
      <BCol>
    <BNavbar variant="primary">
      <BNavbarNav>
        <BNavbarBrand :to="withBase('/')">Home</BNavbarBrand>
        <BNav>
          <BNavItem :to="withBase('/getting-started')">Getting Started</BNavItem>
          <BNavItem :to="withBase('/reference/components')">Components</BNavItem>
          <BNavItem :to="withBase('/reference/composables')">Composables</BNavItem>
          <BNavItem :to="withBase('/reference/directives')">Directives</BNavItem>
          <BNavItem :to="withBase('/reference/icons')">Icons</BNavItem>
          <BNavItem :to="withBase('/reference/types')">Types</BNavItem>
          <BNavItem :to="withBase('/migration-guide')">Migrate</BNavItem>
        </BNav>
      </BNavbarNav>
      <BNav>
        <BButton
          :variant="variant"
          :href="appInfo.githubUrl"
          aria-label="Open Github"
          target="_blank"
          rel="noopener"
        >
          <GithubIcon aria-hidden />
        </BButton>
        <BButton
          :variant="variant"
          :href="appInfo.discordUrl"
          aria-label="Open Discord Server"
          target="_blank"
          rel="noopener"
        >
          <DiscordIcon aria-hidden />
        </BButton>
          <BDropdown :variant="variant" lazy>
    <!-- TODO there's no way to adjust these options, say if you wanted to remove the padding -->
          <template #button-content>
            <component :is="currentIcon" v-if="show" :aria-label="`Toggle theme (${proxy})`" />
          </template>
          <b-dropdown-item v-for="el in options" :key="el" :active="proxy === el" @click="set(el)">
            <component :is="map[el]" /> {{ el }}
          </b-dropdown-item>
        </BDropdown>
      </BNav>
    </BNavbar>
    </BCol>
    </BRow>
    <BRow v-if="page.isNotFound">
      <BCol>
        <BContainer class="text-center my-auto p-5">
          <BRow>
            <BCol>
              <h1>Oh No!</h1>
            </BCol>
          </BRow>
          <BRow>
            <BCol>
              <h2>File Not Found</h2>
            </BCol>
          </BRow>
        </BContainer>
      </BCol>
    </BRow>
    <BRow v-else>
      <BCol>
        <BContainer>
          <BRow>
            <BCol>
              <Content />
            </BCol>
          </BRow>
        </BContainer>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref, onMounted, toRef, computed, provide} from 'vue'
import {useColorMode} from 'bootstrap-vue-next'
import GithubIcon from '~icons/bi/github'
import DiscordIcon from '~icons/bi/discord'
import MoonStarsFill from '~icons/bi/moon-stars-fill'
import SunFill from '~icons/bi/sun-fill'
import CircleHalf from '~icons/bi/circle-half'
import { useData, withBase } from 'vitepress'
import {appInfoKey} from './keys'

// https://vitepress.dev/reference/runtime-api#usedata
const { page } = useData()

const variant = null as any

const show = ref(false)

onMounted(() => { show.value = true })

const dark = useColorMode({
  persist: true,
})

const proxy = toRef(dark, 'value')

const map = {
  dark: MoonStarsFill,
  light: SunFill,
  auto: CircleHalf,
}

const options = Object.keys(map) as (keyof typeof map)[]

const currentIcon = computed(() => map[dark.value])

const set = (newValue: keyof typeof map) => (dark.value = newValue)

const appInfo = {
  githubUrl: 'https://github.com/bootstrap-vue/bootstrap-vue-next',
  discordUrl: 'https://discord.gg/j2Mtcny',
}

provide(appInfoKey, appInfo)
</script>
