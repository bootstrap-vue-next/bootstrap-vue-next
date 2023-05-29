<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col>
        <b-navbar variant="primary">
          <b-navbar-nav>
            <b-navbar-brand :to="withBase('/')">Home</b-navbar-brand>
            <b-nav>
              <b-nav-item :to="withBase('/getting-started')">Getting Started</b-nav-item>
              <b-nav-item :to="withBase('/reference/components')">Components</b-nav-item>
              <b-nav-item :to="withBase('/reference/composables')">Composables</b-nav-item>
              <b-nav-item :to="withBase('/reference/directives')">Directives</b-nav-item>
              <b-nav-item :to="withBase('/reference/icons')">Icons</b-nav-item>
              <b-nav-item :to="withBase('/reference/types')">Types</b-nav-item>
              <b-nav-item :to="withBase('/migration-guide')">Migrate</b-nav-item>
            </b-nav>
          </b-navbar-nav>
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
                <b-dropdown-item
                  v-for="el in options"
                  :key="el"
                  :active="dark === el"
                  @click="set(el)"
                >
                  <component :is="map[el]" /> {{ el }}
                </b-dropdown-item>
              </b-dropdown>
            </client-only>
          </b-nav>
        </b-navbar>
      </b-col>
    </b-row>
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
              <Content class="bd-content mt-5" />
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {
  BButton,
  BCol,
  BContainer,
  BDropdown,
  BDropdownItem,
  BNav,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavItem,
  BRow,
  useColorMode,
} from 'bootstrap-vue-next'
import {computed, inject} from 'vue'
import GithubIcon from '~icons/bi/github'
import OpencollectiveIcon from '~icons/simple-icons/opencollective'
import DiscordIcon from '~icons/bi/discord'
import MoonStarsFill from '~icons/bi/moon-stars-fill'
import SunFill from '~icons/bi/sun-fill'
import CircleHalf from '~icons/bi/circle-half'
import {useData, withBase} from 'vitepress'
import {appInfoKey} from './keys'

// https://vitepress.dev/reference/runtime-api#usedata
const {page} = useData()

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

const set = (newValue: keyof typeof map) => (dark.value = newValue)

const globalData = inject(appInfoKey, {
  discordUrl: '',
  githubUrl: '',
  opencollectiveUrl: '',
})
</script>

<style lang="scss">
#app {
  .bd-content > div > {
    h2,
    h3,
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h1 {
      margin-bottom: 1.5rem;
    }
    h2 {
      margin-top: 3rem;
    }
    h3 {
      margin-top: 2rem;
    }
    h4 {
      margin-top: 1.5rem;
    }
    hr {
      margin: 3rem 0;
    }
  }
  .alert {
    p:last-child {
      margin-bottom: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .lead {
    margin-bottom: 1rem;
  }
  .breadcrumb {
    margin-bottom: 0;
  }
  [id^='input-group-'] {
    margin-bottom: 1rem;
  }
  .html {
    border-top: var(--bs-border-width) solid rgba(255, 255, 255, 0.2);
    padding: 1rem 1.25rem;
  }
  .tabs {
    margin: 1rem 0 3rem;
    .card {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: 0;
      .card-body {
        margin-bottom: 0;
      }
    }
  }
  .card {
    margin-bottom: 3rem;
    pre {
      margin-bottom: 0;
    }
    .card-header {
      h3 {
        margin-top: 0;
      }
    }
    .card-body {
      h4:first-child {
        margin-top: 0;
      }
      .card {
        margin-bottom: 0;
      }
      .list-group {
        max-width: 400px;
      }
    }
  }
  // Short term fix for navbar modes.
  .navbar {
    color: #fff;
    .nav-link,
    .navbar-brand,
    .btn {
      color: #fff;
    }
  }
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
}
</style>
