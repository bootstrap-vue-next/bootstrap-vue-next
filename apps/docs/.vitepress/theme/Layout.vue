<template>
  <b-navbar variant="primary" sticky="top" toggleable="lg">
    <b-navbar-toggle @click="toggler" />
    <b-navbar-brand :to="withBase('/')" class="p-0 me-0 me-lg-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 953 953"
        width="32"
        height="32"
        version="1.1"
        shape-rendering="geometricPrecision"
        fill-rule="evenodd"
        clip-rule="evenodd"
        focusable="false"
        role="img"
        class="d-block"
      >
        <title>BootstrapVueNext</title>
        <path
          fill="currentColor"
          d="M92 0h769c50 0 92 42 92 92v769c0 50-42 92-92 92H92c-50 0-92-42-92-92V92C0 42 42 0 92 0zm216 710c100 0 160-50 160-133 0-62-44-107-108-113v-3c48-8 86-52 86-102 0-71-55-117-140-117H111v468h197zM195 307h90c50 0 78 23 78 64 0 44-33 68-91 68h-77V307zm0 338V499h90c64 0 98 25 98 73s-33 73-94 73h-94zm503 65l163-468h-90L652 621h-2L531 242h-92l163 468h96z"
        />
      </svg>
    </b-navbar-brand>
    <b-collapse is-nav>
      <b-navbar-nav>
        <b-nav>
          <b-nav-item :to="withBase('/docs')">Getting Started</b-nav-item>
          <b-nav-item :to="withBase('/docs/icons')">Icons</b-nav-item>
          <b-nav-item :to="withBase('/docs/types')">Types</b-nav-item>
          <b-nav-item :to="withBase('/docs/migration-guide')">Migrate</b-nav-item>
        </b-nav>
      </b-navbar-nav>
    </b-collapse>
    <b-nav>
      <b-button
        :variant="null"
        :href="globalData.githubUrl"
        aria-label="Open Github"
        target="_blank"
        rel="noopener"
      >
        <github-icon aria-hidden />
      </b-button>
      <b-button
        :variant="null"
        :href="globalData.opencollectiveUrl"
        aria-label="Open Github"
        target="_blank"
        rel="noopener"
      >
        <opencollective-icon />
      </b-button>
      <b-button
        :variant="null"
        :href="globalData.discordUrl"
        aria-label="Open Discord Server"
        target="_blank"
        rel="noopener"
      >
        <discord-icon aria-hidden />
      </b-button>
      <client-only>
        <b-dropdown :variant="null">
          <!-- TODO there's no way to adjust these options, say if you wanted to remove the padding -->
          <template #button-content>
            <component :is="currentIcon" :aria-label="`Toggle theme (${dark})`" />
          </template>
          <b-dropdown-item v-for="el in options" :key="el" :active="dark === el" @click="set(el)">
            <component :is="map[el]" /> {{ el }}
          </b-dropdown-item>
        </b-dropdown>
      </client-only>
    </b-nav>
  </b-navbar>
  <b-container fluid class="container-lg mt-3 my-md-4 bd-layout">
    <aside class="bd-sidebar">
      <client-only>
        <b-offcanvas
          v-model="sidebar"
          static="true"
          backdrop="false"
          title="Browse docs"
          class="h-100"
        >
          <TableOfContentsNav />
        </b-offcanvas>
      </client-only>
    </aside>
    <main class="bd-main">
      <div class="bd-content">
        <b-row v-if="page.isNotFound">
          <b-col>
            <b-container class="text-center my-auto p-5">
              <b-row>
                <b-col>
                  <h1>Oh No!</h1>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <h2>File Not Found</h2>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col>
            <b-container>
              <b-row>
                <b-col>
                  <Content class="bd-content" />
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </div>
    </main>
  </b-container>
</template>

<script setup lang="ts">
import {
  BButton,
  BCol,
  BCollapse,
  BContainer,
  BDropdown,
  BDropdownItem,
  BNav,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
  BNavItem,
  BOffcanvas,
  BRow,
  useColorMode,
} from 'bootstrap-vue-next'
import {computed, inject, ref, watch} from 'vue'
import GithubIcon from '~icons/bi/github'
import OpencollectiveIcon from '~icons/simple-icons/opencollective'
import DiscordIcon from '~icons/bi/discord'
import MoonStarsFill from '~icons/bi/moon-stars-fill'
import SunFill from '~icons/bi/sun-fill'
import CircleHalf from '~icons/bi/circle-half'
import {useData, withBase, useRoute} from 'vitepress'
import {appInfoKey} from './keys'
import {useMediaQuery} from '@vueuse/core'
import TableOfContentsNav from '../../src/components/TableOfContentsNav.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const {page} = useData()
const route = useRoute()

const isLargeScreen = useMediaQuery('(min-width: 992px)')
const sidebar = ref(isLargeScreen.value)

const toggler = () => {
  sidebar.value = !sidebar.value
}

watch(isLargeScreen, (newValue) => {
  if (newValue === true) {
    sidebar.value = true
    return
  }
  sidebar.value = false
})

watch(
  () => route.path,
  () => {
    if (isLargeScreen.value === false) {
      sidebar.value = false
    }
  }
)

const dark = useColorMode({
  persist: true,
})

const map = {
  dark: MoonStarsFill,
  light: SunFill,
  auto: CircleHalf,
}

const options = Object.keys(map) as (keyof typeof map)[]

const currentIcon = computed(() => map[dark.value])

const set = (newValue: keyof typeof map) => {
  dark.value = newValue
}

const globalData = inject(appInfoKey, {
  discordUrl: '',
  githubUrl: '',
  opencollectiveUrl: '',
})
</script>
