<template>
  <b-dropdown variant="link" :aria-label="ariaText">
    <template #button-content>
      <component :is="currentIcon" />
    </template>
    <b-dropdown-item v-for="item in foo" :key="item.value" @click="toggle(item.value)">
      {{ item.value }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script setup lang="ts">
import SunIcon from '~icons/bi/sun'
import MoonIcon from '~icons/bi/moon'

const color = useColorMode({
  persist: true,
})

const foo = computed<{icon: any; value: typeof color.value}[]>(() => [
  {
    icon: SunIcon,
    value: 'light',
  },
  {
    icon: MoonIcon,
    value: 'dark',
  },
  {icon: MoonIcon, value: 'auto'},
])

const currentIcon = computed(
  () => foo.value.find((el) => el.value === color.value)?.icon ?? MoonIcon
)

const ariaText = computed(() => (color.value === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode'))

const toggle = (value: typeof color.value) => {
  color.value = value
}
</script>
