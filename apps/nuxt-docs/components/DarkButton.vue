<template>
  <!-- TODO implement 'null' options globally -->
  <BDropdown :variant="variant" lazy>
    <!-- TODO there's no way to adjust these options, say if you wanted to remove the padding -->
    <template #button-content>
      <component :is="currentIcon" v-if="show" :aria-label="`Toggle theme (${proxy})`" />
    </template>
    <b-dropdown-item v-for="el in options" :key="el" :active="proxy === el" @click="set(el)">
      <component :is="map[el]" /> {{ el }}
    </b-dropdown-item>
  </BDropdown>
</template>

<script setup lang="ts">
import MoonStarsFill from '~icons/bi/moon-stars-fill'
import SunFill from '~icons/bi/sun-fill'
import CircleHalf from '~icons/bi/circle-half'

const show = ref(false)

onMounted(() => {
  show.value = true
})

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

const variant = null as any
</script>
